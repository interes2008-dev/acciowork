import { altLinks, langPrefix, ogImg } from "./sourcing-i18n";

type NewsMeta = {
  seoTitle: string;
  title: string;
  description: string;
  keywords: string[];
  faq: { q: string; a: string }[];
};

/** Shared head() for static localized news articles (meta, OG, hreflang, NewsArticle + FAQ JSON-LD). */
export function newsHead(lang: string, path: string, published: string, n: NewsMeta, basedOn?: string) {
  const url = `https://acciowork.pro${langPrefix(lang)}${path}`;
  const img = ogImg(lang);
  return {
    meta: [
      { title: n.seoTitle },
      { name: "description", content: n.description },
      { name: "keywords", content: n.keywords.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:title", content: n.title },
      { property: "og:description", content: n.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "article:published_time", content: published },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: n.title },
      { name: "twitter:description", content: n.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }, ...altLinks(path)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: n.title,
          description: n.description,
          inLanguage: lang,
          image: img,
          datePublished: published,
          dateModified: published,
          keywords: n.keywords.join(", "),
          ...(basedOn ? { isBasedOn: basedOn } : {}),
          author: { "@type": "Organization", name: "Accio Work", url: "https://acciowork.pro" },
          publisher: {
            "@type": "Organization",
            name: "Accio Work",
            logo: { "@type": "ImageObject", url: "https://acciowork.pro/favicon.svg" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: n.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}
