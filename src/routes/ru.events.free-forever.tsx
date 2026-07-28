import { createFileRoute } from "@tanstack/react-router";
import { FreeForeverPage, EVENT_SEO } from "@/components/events/FreeForeverPage";

const LANG = "ru" as const;
const URL_SELF = "https://acciowork.pro/ru/events/free-forever";

export const Route = createFileRoute("/ru/events/free-forever")({
  head: () => ({
    meta: [
      { title: EVENT_SEO[LANG].title },
      { name: "description", content: EVENT_SEO[LANG].description },
      { property: "og:title", content: EVENT_SEO[LANG].title },
      { property: "og:description", content: EVENT_SEO[LANG].description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL_SELF },
      { property: "og:locale", content: "ru" },
      { name: "twitter:card", content: "summary_large_image" },
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
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/events/free-forever" },
    ],
  }),
  component: () => <FreeForeverPage lang={LANG} />,
});
