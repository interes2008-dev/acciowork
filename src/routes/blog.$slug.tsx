import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticle } from "@/lib/blog.functions";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const article = await getArticle({ data: { lang: "en", slug: params.slug } });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    return {
      meta: a
        ? [
            { title: `${a.title} — Accio Work Blog` },
            { name: "description", content: a.description },
            { name: "keywords", content: (a.keywords || []).join(", ") },
            { property: "og:title", content: a.title },
            { property: "og:description", content: a.description },
            { property: "og:type", content: "article" },
            { property: "og:url", content: `https://acciowork.pro/blog/${a.slug}` },
            ...(a.cover_url ? [{ property: "og:image", content: a.cover_url }] : []),
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : [{ title: "Accio Work Blog" }],
      links: a ? [{ rel: "canonical", href: `https://acciowork.pro/blog/${a.slug}` }] : [],
      scripts: a
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: a.title,
                description: a.description,
                inLanguage: "en",
                datePublished: a.published_at,
                dateModified: a.published_at,
                ...(a.cover_url ? { image: a.cover_url } : {}),
                keywords: (a.keywords || []).join(", "),
                author: { "@type": "Organization", name: "Accio Work" },
                publisher: { "@type": "Organization", name: "Accio Work" },
                mainEntityOfPage: { "@type": "WebPage", "@id": `https://acciowork.pro/blog/${a.slug}` },
              }),
            },
          ]
        : [],
    };
  },
  component: ArticleEn,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Article not found</div>,
});

function ArticleEn() {
  const { article } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang="en" article={article} />
    </I18nProvider>
  );
}