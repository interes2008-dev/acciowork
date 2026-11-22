import aiFriendly from "./news-zh-sellers/ai-friendly-supply.json";
import assistant from "./news-zh-sellers/business-assistant.json";
import zeroExp from "./news-zh-sellers/zero-experience-export.json";
import { ogImg } from "./sourcing-i18n";

// Chinese-only series for factories and sellers (the zh audience sells abroad
// rather than buys from China). Routes exist only under /zh, so no hreflang
// alternates to other languages are emitted.

export type ZhSection = {
  h2: string;
  paras?: string[];
  bullets?: string[];
  after?: string;
  stats?: { value: string; label: string }[];
  table?: { head: string[]; rows: string[][] };
  steps?: { title: string; body: string }[];
};

export type ZhSellerArticle = {
  slug: string;
  seoTitle: string;
  description: string;
  keywords: string[];
  badge: string;
  cardTitle: string;
  title: string;
  lede: string;
  dateLabel: string;
  readMin: string;
  sections: ZhSection[];
  promptLabel: string;
  prompt: string;
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};

export const ZH_SELLER_PUBLISHED = "2026-11-22";
export const ZH_SELLER_ARTICLES: ZhSellerArticle[] = [aiFriendly, assistant, zeroExp] as ZhSellerArticle[];

export const zhSellerArticle = (slug: string): ZhSellerArticle =>
  ZH_SELLER_ARTICLES.find((a) => a.slug === slug) ?? (ZH_SELLER_ARTICLES[0] as ZhSellerArticle);

export const zhSellerPath = (slug: string) => `/zh/blog/${slug}`;

export const ZH_SELLER_SERIES = {
  badge: "工厂出海系列 - 3篇",
  title: "AI采购时代的工厂出海：让采购Agent读懂你、国际站5个AI场景、1688零经验出海",
  cta: "阅读系列",
};

export function zhSellerHead(slug: string) {
  const a = zhSellerArticle(slug);
  const url = `https://acciowork.pro${zhSellerPath(a.slug)}`;
  const img = ogImg("zh");
  return {
    meta: [
      { title: a.seoTitle },
      { name: "description", content: a.description },
      { name: "keywords", content: a.keywords.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:title", content: a.title },
      { property: "og:description", content: a.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "article:published_time", content: ZH_SELLER_PUBLISHED },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: a.title },
      { name: "twitter:description", content: a.description },
      { name: "twitter:image", content: img },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "zh", href: url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          inLanguage: "zh",
          image: img,
          datePublished: ZH_SELLER_PUBLISHED,
          dateModified: ZH_SELLER_PUBLISHED,
          keywords: a.keywords.join(", "),
          citation: a.sources.map((s) => s.url),
          isPartOf: { "@type": "CreativeWorkSeries", name: "工厂出海系列" },
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
          mainEntity: a.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "首页", item: "https://acciowork.pro/zh" },
            { "@type": "ListItem", position: 2, name: "博客", item: "https://acciowork.pro/zh/blog" },
            { "@type": "ListItem", position: 3, name: a.title, item: url },
          ],
        }),
      },
    ],
  };
}
