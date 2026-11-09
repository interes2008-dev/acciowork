import en from "./news-free-sourcing/en.json";
import ru from "./news-free-sourcing/ru.json";
import de from "./news-free-sourcing/de.json";
import it from "./news-free-sourcing/it.json";
import es from "./news-free-sourcing/es.json";
import zh from "./news-free-sourcing/zh.json";
import pt from "./news-free-sourcing/pt.json";
import hi from "./news-free-sourcing/hi.json";
import fr from "./news-free-sourcing/fr.json";
import ar from "./news-free-sourcing/ar.json";
import { altLinks, langPrefix, ogImg } from "./sourcing-i18n";

export type FreeSourcingNews = typeof en;

export const FREE_SOURCING_SLUG = "accio-sourcing-agent-free";
export const FREE_SOURCING_PATH = `/blog/${FREE_SOURCING_SLUG}`;
export const FREE_SOURCING_PUBLISHED = "2026-11-07";
export const FREE_SOURCING_RELEASE_URL = "https://www.accio.com/wow/doc-changelog.html";

const DATA: Record<string, FreeSourcingNews> = { en, ru, de, it, es, zh, pt, hi, fr, ar };

export const freeSourcingNews = (lang: string): FreeSourcingNews => DATA[lang] ?? en;

export function freeSourcingHead(lang: string) {
  const n = freeSourcingNews(lang);
  const url = `https://acciowork.pro${langPrefix(lang)}${FREE_SOURCING_PATH}`;
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
      { property: "article:published_time", content: FREE_SOURCING_PUBLISHED },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: n.title },
      { name: "twitter:description", content: n.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }, ...altLinks(FREE_SOURCING_PATH)],
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
          datePublished: FREE_SOURCING_PUBLISHED,
          dateModified: FREE_SOURCING_PUBLISHED,
          keywords: n.keywords.join(", "),
          isBasedOn: FREE_SOURCING_RELEASE_URL,
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
