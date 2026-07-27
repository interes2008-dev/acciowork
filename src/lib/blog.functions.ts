import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const LangSchema = z.enum(["en", "ru", "de", "it", "es", "zh", "pt"]);

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
    const { data: rows, error } = await supabase
      .from("blog_articles")
      .select("id, slug, title, description, cover_url, reading_minutes, published_at, lang")
      .eq("lang", data.lang)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(data.limit);
    if (error) throw new Error(error.message);
    return (rows ?? []) as ArticleListItem[];
  });

export const getArticle = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ lang: LangSchema, slug: z.string().min(1).max(200) }).parse(input),
  )
  .handler(async ({ data }): Promise<ArticleFull | null> => {
    const supabase = publicClient();
    const { data: row, error } = await supabase
      .from("blog_articles")
      .select("id, slug, title, description, cover_url, reading_minutes, published_at, lang, body_md, keywords, topic_id")
      .eq("lang", data.lang)
      .eq("slug", data.slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return row as ArticleFull;
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