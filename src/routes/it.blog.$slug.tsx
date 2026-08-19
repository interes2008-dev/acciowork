import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticle } from "@/lib/blog.functions";

export const Route = createFileRoute("/it/blog/$slug")({
  loader: async ({ params }) => {
    const article = await getArticle({ data: { lang: "it", slug: params.slug } });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const cover = a?.cover_url ? `https://acciowork.pro${a.cover_url}` : null;
    return {
      meta: a
        ? [
            { title: `${a.title} | Blog Accio Work` },
            { name: "description", content: a.description },
            { name: "keywords", content: (a.keywords || []).join(", ") },
            { property: "og:title", content: a.title },
            { property: "og:description", content: a.description },
            { property: "og:type", content: "article" },
            { property: "og:locale", content: "it_IT" },
            { property: "og:url", content: `https://acciowork.pro/it/blog/${a.slug}` },
            ...(cover ? [{ property: "og:image", content: cover }, { name: "twitter:image", content: cover }] : []),
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : [{ title: "Blog Accio Work" }],
      links: a ? [{ rel: "canonical", href: `https://acciowork.pro/it/blog/${a.slug}` }] : [],
      scripts: a
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: a.title,
                description: a.description,
                inLanguage: "it",
                datePublished: a.published_at,
                dateModified: a.published_at,
                ...(cover ? { image: cover } : {}),
                keywords: (a.keywords || []).join(", "),
                author: { "@type": "Organization", name: "Accio Work" },
                publisher: { "@type": "Organization", name: "Accio Work" },
                mainEntityOfPage: { "@type": "WebPage", "@id": `https://acciowork.pro/it/blog/${a.slug}` },
              }),
            },
          ]
        : [],
    };
  },
  component: ArticleIt,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Articolo non trovato</div>,
});

function ArticleIt() {
  const { article } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang="it" article={article} />
    </I18nProvider>
  );
}