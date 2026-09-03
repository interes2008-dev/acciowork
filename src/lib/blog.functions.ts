import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const LangSchema = z.enum(["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr"]);

function publicClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    },
  );
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
    z.object({ lang: LangSchema, limit: z.number().int().min(1).max(200).default(50) }).parse(input),
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
      .select("id, slug, title, description, has_cover, reading_minutes, published_at, lang, body_md, keywords, topic_id")
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
  related: ArticleListItem[];
};

export const getArticleBundle = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ lang: LangSchema, slug: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }): Promise<ArticleBundle | null> => {
    const supabase = publicClient();
    const { data: row, error } = await (supabase.from("blog_articles") as any)
      .select("id, slug, title, description, has_cover, reading_minutes, published_at, lang, body_md, keywords, topic_id")
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
      const { data: alts } = await supabase
        .from("blog_articles")
        .select("lang, slug")
        .eq("topic_id", article.topic_id)
        .eq("status", "published");
      alternates = (alts ?? []) as Array<{ lang: string; slug: string }>;
    }

    const { data: rel } = await (supabase.from("blog_articles") as any)
      .select("id, slug, title, description, has_cover, reading_minutes, published_at, lang")
      .eq("lang", data.lang)
      .eq("status", "published")
      .neq("slug", data.slug)
      .order("published_at", { ascending: false })
      .limit(4);
    const related: ArticleListItem[] = ((rel ?? []) as Array<Record<string, unknown>>).map((x) => ({
      id: x.id as string,
      slug: x.slug as string,
      title: x.title as string,
      description: x.description as string,
      cover_url: x.has_cover ? `/api/public/blog-cover/${x.id as string}` : null,
      reading_minutes: x.reading_minutes as number,
      published_at: x.published_at as string,
      lang: x.lang as string,
    }));

    return { article, alternates, related };
  });
