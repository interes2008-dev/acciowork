import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const LangSchema = z.enum(["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr", "ar"]);

function publicClient() {
  return createClient<Database>(process.env.SUPABASE_URL!, process.env.SUPABASE_PUBLISHABLE_KEY!, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

export type ArticleListItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover_url: string | null;
  reading_minutes: number;
  published_at: string;
  lang: string;
};

export type ArticleFull = ArticleListItem & {
  body_md: string;
  keywords: string[];
  topic_id: string | null;
};

export const listArticles = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z
      .object({ lang: LangSchema, limit: z.number().int().min(1).max(200).default(50) })
      .parse(input),
  )
  .handler(async ({ data }): Promise<ArticleListItem[]> => {
    const supabase = publicClient();
    // Never select cover_url in lists: covers are heavy base64 in the column and
    // pulling them times out Postgres. Select has_cover and serve the image via
    // /api/public/blog-cover/:id instead.
    const { data: rows, error } = await (supabase.from("blog_articles") as any)
      .select("id, slug, title, description, has_cover, reading_minutes, published_at, lang")
      .eq("lang", data.lang)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(data.limit);
    if (error) throw new Error(error.message);
    return ((rows ?? []) as Array<Record<string, unknown>>).map((r) => ({
      id: r.id as string,
      slug: r.slug as string,
      title: r.title as string,
      description: r.description as string,
      cover_url: r.has_cover ? `/api/public/blog-cover/${r.id as string}` : null,
      reading_minutes: r.reading_minutes as number,
      published_at: r.published_at as string,
      lang: r.lang as string,
    }));
  });

export const getArticle = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ lang: LangSchema, slug: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }): Promise<ArticleFull | null> => {
    const supabase = publicClient();
    const { data: row, error } = await (supabase.from("blog_articles") as any)
      .select(
        "id, slug, title, description, has_cover, reading_minutes, published_at, lang, body_md, keywords, topic_id",
      )
      .eq("lang", data.lang)
      .eq("slug", data.slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    const r = row as Record<string, unknown>;
    return {
      id: r.id as string,
      slug: r.slug as string,
      title: r.title as string,
      description: r.description as string,
      cover_url: r.has_cover ? `/api/public/blog-cover/${r.id as string}` : null,
      reading_minutes: r.reading_minutes as number,
      published_at: r.published_at as string,
      lang: r.lang as string,
      body_md: r.body_md as string,
      keywords: (r.keywords ?? []) as string[],
      topic_id: (r.topic_id ?? null) as string | null,
    };
  });

export const getArticleAlternates = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ topicId: z.string().uuid() }).parse(input))
  .handler(async ({ data }): Promise<Array<{ lang: string; slug: string }>> => {
    const supabase = publicClient();
    const { data: rows, error } = await supabase
      .from("blog_articles")
      .select("lang, slug")
      .eq("topic_id", data.topicId)
      .eq("status", "published");
    if (error) throw new Error(error.message);
    return (rows ?? []) as Array<{ lang: string; slug: string }>;
  });

export const listAllPublishedForSitemap = createServerFn({ method: "GET" }).handler(
  async (): Promise<Array<{ lang: string; slug: string; published_at: string }>> => {
    const supabase = publicClient();
    const { data: rows, error } = await supabase
      .from("blog_articles")
      .select("lang, slug, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(2000);
    if (error) throw new Error(error.message);
    return (rows ?? []) as Array<{ lang: string; slug: string; published_at: string }>;
  },
);
export type ArticleBundle = {
  article: ArticleFull;
  alternates: Array<{ lang: string; slug: string }>;
  related: Array<{ slug: string; title: string; reading_minutes: number }>;
};

function topicTerms(text: string): Set<string> {
  const stop = new Set(["about", "after", "agent", "accio", "business", "from", "guide", "how", "into", "more", "para", "pour", "that", "the", "this", "using", "with", "work", "your"]);
  return new Set((text.toLowerCase().match(/[\p{L}\p{N}]{4,}/gu) ?? []).filter((term) => !stop.has(term)));
}

// Match a focused procurement topic before recommending another article; unrelated
// AI/business posts should not fill the related-reading area on sourcing guides.
const SOURCING_TERMS = /\b(china|chinese|sourc\w*|suppl\w*|alibaba|factor\w*|manufactur\w*|import\w*|procure\w*|rfq)\b|закуп|кита|постав|фабрик|производ|进货|采购|供应商|工厂|fornec|importa|proveedor|fabri|lieferant|beschaff|approvision|مورد|الصين|التوريد|आपूर्ति|सप्लायर/i;

function isSourcingArticle(text: string): boolean {
  return SOURCING_TERMS.test(text);
}

function relatedScore(article: ArticleFull, candidate: { title: string; description: string; keywords: string[] }): number {
  const sourceText = `${article.title} ${article.description} ${article.keywords.join(" ")}`;
  const targetText = `${candidate.title} ${candidate.description} ${(candidate.keywords ?? []).join(" ")}`;
  const source = topicTerms(sourceText);
  const target = topicTerms(targetText);
  const sameDomain = isSourcingArticle(sourceText) && isSourcingArticle(targetText);
  return [...source].filter((term) => target.has(term)).length + (sameDomain ? 10 : 0);
}

export const getArticleBundle = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ lang: LangSchema, slug: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }): Promise<ArticleBundle | null> => {
    const supabase = publicClient();
    const { data: row, error } = await (supabase.from("blog_articles") as any)
      .select(
        "id, slug, title, description, has_cover, reading_minutes, published_at, lang, body_md, keywords, topic_id",
      )
      .eq("lang", data.lang)
      .eq("slug", data.slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    const r = row as Record<string, unknown>;
    const article: ArticleFull = {
      id: r.id as string,
      slug: r.slug as string,
      title: r.title as string,
      description: r.description as string,
      cover_url: r.has_cover ? `/api/public/blog-cover/${r.id as string}` : null,
      reading_minutes: r.reading_minutes as number,
      published_at: r.published_at as string,
      lang: r.lang as string,
      body_md: r.body_md as string,
      keywords: (r.keywords ?? []) as string[],
      topic_id: (r.topic_id ?? null) as string | null,
    };

    let alternates: Array<{ lang: string; slug: string }> = [];
    if (article.topic_id) {
      const { data: alt } = await supabase
        .from("blog_articles")
        .select("lang, slug")
        .eq("topic_id", article.topic_id)
        .eq("status", "published");
      alternates = ((alt ?? []) as Array<{ lang: string; slug: string }>).filter(Boolean);
    }

    const { data: rel } = await (supabase.from("blog_articles") as any)
      .select("slug, title, description, keywords, reading_minutes")
      .eq("lang", data.lang)
      .eq("status", "published")
      .neq("slug", article.slug)
      .order("published_at", { ascending: false })
      .limit(100);
    const related = ((rel ?? []) as Array<{ slug: string; title: string; description: string; keywords: string[]; reading_minutes: number }>)
      .filter((candidate) => !isSourcingArticle(`${article.title} ${article.description} ${article.keywords.join(" ")}`) || isSourcingArticle(`${candidate.title} ${candidate.description} ${(candidate.keywords ?? []).join(" ")}`))
      .map((candidate, index) => ({ candidate, index, score: relatedScore(article, candidate) }))
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .slice(0, 4)
      .map(({ candidate }) => ({ slug: candidate.slug, title: candidate.title, reading_minutes: candidate.reading_minutes }));

    return { article, alternates, related };
  });
