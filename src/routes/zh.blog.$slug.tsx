import { createFileRoute, notFound } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getArticleBundle } from "@/lib/blog.functions";

const SITE = "https://acciowork.pro";
const LANG = "zh" as const;
const PREFIX = "/zh/blog";
const LANG_PREFIX: Record<string, string> = {
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

export const Route = createFileRoute("/zh/blog/$slug")({
  loader: async ({ params }) => {
    const bundle = await getArticleBundle({ data: { lang: LANG, slug: params.slug } });
    if (!bundle) throw notFound();
    return bundle;
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) {
      return { meta: [{ title: "Accio Work 博客" }, { name: "robots", content: "noindex" }] };
    }
    const url = `${SITE}${PREFIX}/${a.slug}`;
    const cover = a.cover_url ? `${SITE}${a.cover_url}` : `${SITE}/og/og-zh.png`;
    const alts = (loaderData?.alternates ?? []).filter((x) => LANG_PREFIX[x.lang] !== undefined);
    const altLinks = alts.map((x) => ({
      rel: "alternate",
      hrefLang: x.lang,
      href: `${SITE}${LANG_PREFIX[x.lang]}/blog/${x.slug}`,
    }));
    const en = alts.find((x) => x.lang === "en");
    if (en) altLinks.push({ rel: "alternate", hrefLang: "x-default", href: `${SITE}/blog/${en.slug}` });
    return {
      meta: [
        { title: `${a.title} | Accio Work 博客` },
        { name: "description", content: a.description },
        { name: "keywords", content: (a.keywords || []).join(", ") },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "author", content: "Accio Work" },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "zh_CN" },
        { property: "og:url", content: url },
        { property: "og:image", content: cover },
        { property: "article:published_time", content: a.published_at },
        { property: "article:modified_time", content: a.published_at },
        { property: "article:section", content: "AI for business" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
        { name: "twitter:image", content: cover },
      ],
      links: [{ rel: "canonical", href: url }, ...altLinks],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: a.title.slice(0, 110),
            description: a.description,
            inLanguage: "zh-CN",
            datePublished: a.published_at,
            dateModified: a.published_at,
            image: [cover],
            keywords: (a.keywords || []).join(", "),
            wordCount: a.body_md ? a.body_md.split(/\s+/).length : undefined,
            timeRequired: `PT${a.reading_minutes}M`,
            author: { "@type": "Organization", name: "Accio Work", url: SITE },
            publisher: {
              "@type": "Organization",
              name: "Accio Work",
              url: SITE,
              logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
            },
            isPartOf: { "@type": "Blog", name: "Accio Work 博客", url: `${SITE}${PREFIX}` },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accio Work", item: `${SITE}/zh` },
              { "@type": "ListItem", position: 2, name: "Accio Work 博客", item: `${SITE}${PREFIX}` },
              { "@type": "ListItem", position: 3, name: a.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ArticleZh,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">未找到文章</div>,
});

function ArticleZh() {
  const { article, related } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogArticle lang={LANG} article={article} related={related} />
    </I18nProvider>
  );
}
