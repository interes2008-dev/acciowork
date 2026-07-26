import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticle } from "@/lib/blog.functions";

export const Route = createFileRoute("/zh/blog/$slug")({
  loader: async ({ params }) => {
    const article = await getArticle({ data: { lang: "zh", slug: params.slug } });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    return {
      meta: a
        ? [
            { title: `${a.title} — Accio Work 博客` },
            { name: "description", content: a.description },
            { name: "keywords", content: (a.keywords || []).join(", ") },
            { property: "og:title", content: a.title },
            { property: "og:description", content: a.description },
            { property: "og:type", content: "article" },
            { property: "og:locale", content: "zh_CN" },
            { property: "og:url", content: `https://acciowork.pro/zh/blog/${a.slug}` },
            ...(a.cover_url ? [{ property: "og:image", content: a.cover_url }] : []),
          ]
        : [{ title: "Accio Work 博客" }],
      links: a ? [{ rel: "canonical", href: `https://acciowork.pro/zh/blog/${a.slug}` }] : [],
    };
  },
  component: ArticleZh,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">文章未找到</div>,
});

function ArticleZh() {
  const { article } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang="zh" article={article} />
    </I18nProvider>
  );
}