import en from "./news-europe-pack/en.json";
import ru from "./news-europe-pack/ru.json";
import de from "./news-europe-pack/de.json";
import it from "./news-europe-pack/it.json";
import es from "./news-europe-pack/es.json";
import zh from "./news-europe-pack/zh.json";
import pt from "./news-europe-pack/pt.json";
import hi from "./news-europe-pack/hi.json";
import fr from "./news-europe-pack/fr.json";
import ar from "./news-europe-pack/ar.json";
import { altLinks, langPrefix, ogImg } from "./sourcing-i18n";

export type EuropePackNews = typeof en;

export const EUROPE_PACK_SLUG = "accio-sourcing-expert-free-europe";
export const EUROPE_PACK_PATH = `/blog/${EUROPE_PACK_SLUG}`;
export const EUROPE_PACK_PUBLISHED = "2026-11-22";
export const EUROPE_PACK_SOURCE_URL = "https://www.prnewswire.com/news-releases/alibabacom-launches-european-sme-startup-pack-making-accio-sourcing-expert-free-302944448.html";
export const EUROPE_PACK_BENCH_URL = "https://ebusiness.de/2026/11/21/alibabacom-startet-kostenloses-sme-startup-pack-mit-accio/";

const DATA: Record<string, EuropePackNews> = { en, ru, de, it, es, zh, pt, hi, fr, ar };

export const europePackNews = (lang: string): EuropePackNews => DATA[lang] ?? en;

export function europePackHead(lang: string) {
  const n = europePackNews(lang);
  const url = `https://acciowork.pro${langPrefix(lang)}${EUROPE_PACK_PATH}`;
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
      { property: "article:published_time", content: EUROPE_PACK_PUBLISHED },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: n.title },
      { name: "twitter:description", content: n.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }, ...altLinks(EUROPE_PACK_PATH)],
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
          datePublished: EUROPE_PACK_PUBLISHED,
          dateModified: EUROPE_PACK_PUBLISHED,
          keywords: n.keywords.join(", "),
          isBasedOn: EUROPE_PACK_SOURCE_URL,
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
