import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticle } from "@/lib/blog.functions";

export const Route = createFileRoute("/hi/blog/$slug")({
  loader: async ({ params }) => {
    const article = await getArticle({ data: { lang: "hi", slug: params.slug } });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    return {
      meta: a
        ? [
            { title: `${a.title} — Accio Work ब्लॉग` },
            { name: "description", content: a.description },
            { name: "keywords", content: (a.keywords || []).join(", ") },
            { property: "og:title", content: a.title },
            { property: "og:description", content: a.description },
            { property: "og:type", content: "article" },
            { property: "og:locale", content: "hi_IN" },
            { property: "og:url", content: `https://acciowork.pro/hi/blog/${a.slug}` },
            ...(a.cover_url ? [{ property: "og:image", content: a.cover_url }] : []),
          ]
        : [{ title: "Accio Work ब्लॉग" }],
      links: a ? [{ rel: "canonical", href: `https://acciowork.pro/hi/blog/${a.slug}` }] : [],
    };
  },
  component: ArticleHi,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">लेख नहीं मिला</div>,
});

function ArticleHi() {
  const { article } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang="hi" article={article} />
    </I18nProvider>
  );
}