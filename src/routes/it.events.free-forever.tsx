import { createFileRoute } from "@tanstack/react-router";
import { FreeForeverPage, EVENT_SEO, EVENT_FAQ } from "@/components/events/FreeForeverPage";

const LANG = "it" as const;
const URL_SELF = "https://acciowork.pro/it/events/free-forever";

export const Route = createFileRoute("/it/events/free-forever")({
  head: () => ({
    meta: [
      { title: EVENT_SEO[LANG].title },
      { name: "description", content: EVENT_SEO[LANG].description },
      { property: "og:title", content: EVENT_SEO[LANG].title },
      { property: "og:description", content: EVENT_SEO[LANG].description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL_SELF },
      { property: "og:locale", content: "it" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://acciowork.pro/og/og-it.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:title", content: EVENT_SEO[LANG].title },
      { name: "twitter:description", content: EVENT_SEO[LANG].description },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-it.png" },
    ],
    links: [
      { rel: "canonical", href: URL_SELF },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/events/free-forever" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru/events/free-forever" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de/events/free-forever" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it/events/free-forever" },
      { rel: "alternate", hrefLang: "es", href: "https://acciowork.pro/es/events/free-forever" },
      { rel: "alternate", hrefLang: "pt", href: "https://acciowork.pro/pt/events/free-forever" },
      { rel: "alternate", hrefLang: "zh", href: "https://acciowork.pro/zh/events/free-forever" },
      { rel: "alternate", hrefLang: "hi", href: "https://acciowork.pro/hi/events/free-forever" },
      { rel: "alternate", hrefLang: "fr", href: "https://acciowork.pro/fr/events/free-forever" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/events/free-forever" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "it",
          mainEntity: EVENT_FAQ[LANG].map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }),
      },
    ],
  }),
  component: () => <FreeForeverPage lang={LANG} />,
});
