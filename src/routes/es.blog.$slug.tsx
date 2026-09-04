import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticleBundle } from "@/lib/blog.functions";

const BASE_LANG_PATH = "/es";

const LANG_PATH: Record<string, string> = {
  en: "",
  ru: "/ru",
  de: "/de",
  it: "/it",
  es: "/es",
  zh: "/zh",
  pt: "/pt",
  hi: "/hi",
  fr: "/fr",
};

export const Route = createFileRoute("/es/blog/$slug")({
  loader: async ({ params }) => {
    const bundle = await getArticleBundle({ data: { lang: "es", slug: params.slug } });
    if (!bundle) throw notFound();
    return bundle;
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) {
      return {
        meta: [{ title: "Blog Accio Work" }, { name: "robots", content: "noindex, follow" }],
        links: [],
        scripts: [],
      };
    }
    const url = `https://acciowork.pro/es/blog/${a.slug}`;
    const cover = a.cover_url ? `https://acciowork.pro${a.cover_url}` : null;
    const alternates = loaderData?.alternates ?? [];
    const altLinks = alternates
      .filter((x) => LANG_PATH[x.lang] !== undefined)
      .map((x) => ({
        rel: "alternate",
        hrefLang: x.lang,
        href: `https://acciowork.pro${LANG_PATH[x.lang]}/blog/${x.slug}`,
      }));
    const en = alternates.find((x) => x.lang === "en");
    if (en) {
      altLinks.push({ rel: "alternate", hrefLang: "x-default", href: `https://acciowork.pro/blog/${en.slug}` });
    }
    return {
      meta: [
        { title: a.title.length <= 45 ? `${a.title} | Blog Accio Work` : a.title },
        { name: "description", content: a.description },
        { name: "keywords", content: (a.keywords || []).join(", ") },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "author", content: "Accio Work" },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "es_ES" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: a.published_at },
        ...(cover ? [{ property: "og:image", content: cover }, { name: "twitter:image", content: cover }] : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
      ],
      links: [{ rel: "canonical", href: url }, ...altLinks],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: a.title,
            description: a.description,
            inLanguage: "es",
            datePublished: a.published_at,
            dateModified: a.published_at,
            ...(cover ? { image: cover } : {}),
            keywords: (a.keywords || []).join(", "),
            wordCount: (a.body_md || "").split(/\s+/).filter(Boolean).length,
            timeRequired: `PT${a.reading_minutes}M`,
            author: { "@type": "Organization", name: "Accio Work", url: "https://acciowork.pro" },
            publisher: {
              "@type": "Organization",
              name: "Accio Work",
              url: "https://acciowork.pro",
              logo: { "@type": "ImageObject", url: "https://acciowork.pro/favicon.svg" },
            },
            isPartOf: { "@type": "Blog", name: "Blog Accio Work", url: `https://acciowork.pro/es/blog` },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro" + BASE_LANG_PATH },
              { "@type": "ListItem", position: 2, name: "Blog Accio Work", item: `https://acciowork.pro/es/blog` },
              { "@type": "ListItem", position: 3, name: a.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ArticleEs,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Artículo no encontrado</div>,
});

function ArticleEs() {
  const { article, related } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang="es" article={article} related={related} />
    </I18nProvider>
  );
}
