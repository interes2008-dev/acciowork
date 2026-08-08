import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticle } from "@/lib/blog.functions";

export const Route = createFileRoute("/pt/blog/$slug")({
  loader: async ({ params }) => {
    const article = await getArticle({ data: { lang: "pt", slug: params.slug } });
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    return {
      meta: a
        ? [
            { title: `${a.title} | Blog Accio Work` },
            { name: "description", content: a.description },
            { name: "keywords", content: (a.keywords || []).join(", ") },
            { property: "og:title", content: a.title },
            { property: "og:description", content: a.description },
            { property: "og:type", content: "article" },
            { property: "og:locale", content: "pt_BR" },
            { property: "og:url", content: `https://acciowork.pro/pt/blog/${a.slug}` },
            ...(a.cover_url ? [{ property: "og:image", content: a.cover_url }] : []),
          ]
        : [{ title: "Blog Accio Work" }],
      links: a ? [{ rel: "canonical", href: `https://acciowork.pro/pt/blog/${a.slug}` }] : [],
      scripts: a
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: a.title,
                description: a.description,
                inLanguage: "pt",
                datePublished: a.published_at,
                dateModified: a.published_at,
                ...(a.cover_url ? { image: a.cover_url } : {}),
                keywords: (a.keywords || []).join(", "),
                author: { "@type": "Organization", name: "Accio Work" },
                publisher: { "@type": "Organization", name: "Accio Work" },
                mainEntityOfPage: { "@type": "WebPage", "@id": `https://acciowork.pro/pt/blog/${a.slug}` },
              }),
            },
          ]
        : [],
    };
  },
  component: ArticlePt,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Artigo não encontrado</div>,
});

function ArticlePt() {
  const { article } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang="pt" article={article} />
    </I18nProvider>
  );
}