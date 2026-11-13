import en from "./news-nov-updates/en.json";
import ru from "./news-nov-updates/ru.json";
import de from "./news-nov-updates/de.json";
import it from "./news-nov-updates/it.json";
import es from "./news-nov-updates/es.json";
import zh from "./news-nov-updates/zh.json";
import pt from "./news-nov-updates/pt.json";
import hi from "./news-nov-updates/hi.json";
import fr from "./news-nov-updates/fr.json";
import ar from "./news-nov-updates/ar.json";
import { altLinks, langPrefix, ogImg } from "./sourcing-i18n";

export type NovUpdatesNews = typeof en;

export const NOV_UPDATES_SLUG = "accio-work-november-2026-updates";
export const NOV_UPDATES_PATH = `/blog/${NOV_UPDATES_SLUG}`;
export const NOV_UPDATES_PUBLISHED = "2026-11-13";
export const NOV_UPDATES_RELEASE_URL = "https://www.accio.com/work/doc?slug=changelog";

const DATA: Record<string, NovUpdatesNews> = { en, ru, de, it, es, zh, pt, hi, fr, ar };

export const novUpdatesNews = (lang: string): NovUpdatesNews => DATA[lang] ?? en;

export function novUpdatesHead(lang: string) {
  const n = novUpdatesNews(lang);
  const url = `https://acciowork.pro${langPrefix(lang)}${NOV_UPDATES_PATH}`;
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
      { property: "article:published_time", content: NOV_UPDATES_PUBLISHED },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: n.title },
      { name: "twitter:description", content: n.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }, ...altLinks(NOV_UPDATES_PATH)],
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
          datePublished: NOV_UPDATES_PUBLISHED,
          dateModified: NOV_UPDATES_PUBLISHED,
          keywords: n.keywords.join(", "),
          isBasedOn: NOV_UPDATES_RELEASE_URL,
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
