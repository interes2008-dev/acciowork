import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {
  buildArticlePrompt,
  estimateReadingMinutes,
  sanitizeAiText,
  slugify,
  type BlogLang,
  type TopicSeed,
} from "@/lib/blog-prompt.server";

const LANGS: BlogLang[] = ["en", "ru", "de"];

type GeneratedArticle = {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  body_md: string;
  cover_prompt: string;
};

async function callAI(system: string, user: string): Promise<GeneratedArticle> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) throw new Error("Missing LOVABLE_API_KEY");

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3.5-flash",
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`AI gateway ${res.status}: ${body}`);
  }
  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = data.choices?.[0]?.message?.content ?? "";
  let parsed: GeneratedArticle;
  try {
    parsed = JSON.parse(content) as GeneratedArticle;
  } catch {
    // Try to extract the first {...} block
    const match = content.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI returned non-JSON content");
    parsed = JSON.parse(match[0]) as GeneratedArticle;
  }
  return parsed;
}

async function generateCover(prompt: string): Promise<string | null> {
  const key = process.env.LOVABLE_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: `Editorial magazine cover illustration, cinematic, soft mint and near-black palette, no text, no logos, no watermarks. Scene: ${prompt}`,
          },
        ],
        modalities: ["image", "text"],
      }),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      choices?: Array<{ message?: { images?: Array<{ image_url?: { url?: string } }> } }>;
    };
    return data.choices?.[0]?.message?.images?.[0]?.image_url?.url ?? null;
  } catch {
    return null;
  }
}

export const Route = createFileRoute("/api/public/cron/generate-articles")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Simple bearer secret: expect ?key=... matching CRON_SECRET, or Supabase anon apikey header.
        const url = new URL(request.url);
        const supplied =
          url.searchParams.get("key") ??
          request.headers.get("x-cron-key") ??
          request.headers.get("apikey");
        const expected =
          process.env.CRON_SECRET ??
          process.env.SUPABASE_PUBLISHABLE_KEY ??
          "";
        if (!expected || supplied !== expected && supplied !== process.env.SUPABASE_PUBLISHABLE_KEY) {
          return new Response("Unauthorized", { status: 401 });
        }

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        // Pick one unused topic (fallback: least recently used)
        const { data: topicRows, error: topicErr } = await supabaseAdmin
          .from("blog_topics")
          .select("id, seed_title, angle, keyword, audience, capability, used_at")
          .order("used_at", { ascending: true, nullsFirst: true })
          .limit(1);
        if (topicErr) return new Response(topicErr.message, { status: 500 });
        const topic = topicRows?.[0];
        if (!topic) return new Response("No topics available", { status: 500 });

        const seed: TopicSeed = {
          seed_title: topic.seed_title,
          angle: topic.angle,
          keyword: topic.keyword,
          audience: topic.audience,
          capability: topic.capability,
        };

        // Generate a shared cover once (English prompt anyway) to save tokens
        let sharedCoverPromptSource: string | null = null;
        let sharedCoverUrl: string | null = null;

        const results: Array<{ lang: BlogLang; slug: string; error?: string }> = [];

        for (const lang of LANGS) {
          try {
            const { system, user } = buildArticlePrompt(lang, seed);
            const article = await callAI(system, user);

            const cleanBody = sanitizeAiText(article.body_md ?? "");
            const cleanTitle = sanitizeAiText(article.title ?? seed.seed_title);
            const cleanDesc = sanitizeAiText(article.description ?? "");

            let slug = slugify(article.slug || cleanTitle);
            if (!slug) slug = `${slugify(seed.keyword)}-${Date.now().toString(36)}`;
            // Ensure uniqueness per language
            const { data: existing } = await supabaseAdmin
              .from("blog_articles")
              .select("id")
              .eq("lang", lang)
              .eq("slug", slug)
              .maybeSingle();
            if (existing) slug = `${slug}-${Date.now().toString(36).slice(-4)}`;

            if (!sharedCoverPromptSource) {
              sharedCoverPromptSource = article.cover_prompt || seed.seed_title;
              sharedCoverUrl = await generateCover(sharedCoverPromptSource);
            }

            const { error: insertErr } = await supabaseAdmin.from("blog_articles").insert({
              topic_id: topic.id,
              lang,
              slug,
              title: cleanTitle,
              description: cleanDesc,
              keywords: Array.isArray(article.keywords) ? article.keywords.slice(0, 8) : [],
              cover_prompt: sharedCoverPromptSource,
              cover_url: sharedCoverUrl,
              body_md: cleanBody,
              reading_minutes: estimateReadingMinutes(cleanBody),
              status: "published",
            });
            if (insertErr) throw new Error(insertErr.message);
            results.push({ lang, slug });
          } catch (err) {
            results.push({ lang, slug: "", error: (err as Error).message });
          }
        }

        // Mark topic used
        await supabaseAdmin
          .from("blog_topics")
          .update({ used_at: new Date().toISOString() })
          .eq("id", topic.id);

        return new Response(JSON.stringify({ topic_id: topic.id, results }), {
          headers: { "Content-Type": "application/json" },
        });
      },
    },
  },
});