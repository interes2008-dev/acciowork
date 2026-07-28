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

const LANGS: BlogLang[] = ["en", "ru", "de", "it", "es", "zh", "pt", "hi"];

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
    // Extract the first balanced {...} block (model sometimes appends extra prose or a second object)
    const start = content.indexOf("{");
    if (start < 0) throw new Error("AI returned non-JSON content");
    let depth = 0;
    let inStr = false;
    let esc = false;
    let end = -1;
    for (let i = start; i < content.length; i++) {
      const ch = content[i];
      if (inStr) {
        if (esc) esc = false;
        else if (ch === "\\") esc = true;
        else if (ch === '"') inStr = false;
      } else {
        if (ch === '"') inStr = true;
        else if (ch === "{") depth++;
        else if (ch === "}") {
          depth--;
          if (depth === 0) {
            end = i;
            break;
          }
        }
      }
    }
    if (end < 0) throw new Error("AI returned unbalanced JSON");
    parsed = JSON.parse(content.slice(start, end + 1)) as GeneratedArticle;
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
        model: "google/gemini-3-pro-image",
        messages: [
          {
            role: "user",
            content: `Premium editorial magazine cover illustration for the Accio Work blog. Ultra high quality, photorealistic-meets-editorial, cinematic lighting, rich depth of field, soft mint-green and near-black palette with subtle cyan-to-emerald gradient accents matching the Accio brand.

Feature the Accio Work brand mark prominently but tastefully in the composition: a sleek geometric triangular "A" logo (a solid black upward triangle with a bright gradient inner triangle flowing from cyan at the top through emerald green to a soft mint fade at the bottom, exactly matching the site's brand mark). Place it as a clean vector-style graphic element in the composition (for example on a device screen, poster, signage, or as a subtle watermark motif), rendered crisply with correct proportions. No other text, no other logos, no watermarks, no lettering.

Scene: ${prompt}`,
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
        const anon = process.env.SUPABASE_PUBLISHABLE_KEY ?? "";
        const cronSecret = process.env.CRON_SECRET ?? "";
        const isAllowed =
          (!!cronSecret && supplied === cronSecret) ||
          (!!anon && supplied === anon);
        if (!isAllowed) return new Response("Unauthorized", { status: 401 });

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