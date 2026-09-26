import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/ru/")({
  component: IndexRu,
  head: () => ({
    meta: [
      { title: "Accio Work | ИИ-платформа для поиска поставщиков и автоматизации" },
      {
        name: "description",
        content:
          "Accio Work, AI-рабочее пространство: анализ рынков, сравнение поставщиков, генерация контента и автоматизация бизнес-процессов на одной платформе.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI поиск поставщиков, анализ рынка, автоматизация бизнеса, ИИ ассистент, сорсинг, оптовые поставщики, аналитика конкурентов, генерация контента",
      },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:locale:alternate", content: "en_US" },
      {
        property: "og:title",
        content: "Accio Work | ИИ-платформа для поиска поставщиков и автоматизации",
      },
      {
        property: "og:description",
        content:
          "Accio Work, AI-рабочее пространство: анализ рынков, сравнение поставщиков, генерация контента и автоматизация бизнес-процессов.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/ru" },
      { property: "og:image", content: "https://acciowork.pro/og/og-ru.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      {
        property: "og:image:alt",
        content: "Accio Work, AI-рабочее пространство для сорсинга, аналитики и автоматизации",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | AI-платформа для поиска поставщиков" },
      {
        name: "twitter:description",
        content:
          "AI-рабочее пространство: сорсинг, аналитика конкурентов, генерация контента и автоматизация.",
      },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-ru.png" },
      { name: "twitter:image:alt", content: "Accio Work, AI-платформа для бизнеса" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hreflang: "en", href: "https://acciowork.pro/" },
      { rel: "alternate", hreflang: "ru", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hreflang: "de", href: "https://acciowork.pro/de" },
      { rel: "alternate", hreflang: "it", href: "https://acciowork.pro/it" },
      { rel: "alternate", hreflang: "es", href: "https://acciowork.pro/es" },
      { rel: "alternate", hreflang: "zh", href: "https://acciowork.pro/zh" },
      { rel: "alternate", hreflang: "pt", href: "https://acciowork.pro/pt" },
      { rel: "alternate", hreflang: "hi", href: "https://acciowork.pro/hi" },
      { rel: "alternate", hreflang: "fr", href: "https://acciowork.pro/fr" },
      { rel: "alternate", hreflang: "ar", href: "https://acciowork.pro/ar" },
      { rel: "alternate", hreflang: "x-default", href: "https://acciowork.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Accio Work",
          alternateName: "Аксио Ворк",
          url: "https://acciowork.pro/ru",
          inLanguage: "ru-RU",
          description:
            "AI-рабочее пространство: анализ рынков, сравнение поставщиков, генерация контента и автоматизация бизнес-процессов.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Accio Work",
          url: "https://acciowork.pro/",
          logo: "https://acciowork.pro/favicon.svg",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Accio Work",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, macOS, Windows",
          inLanguage: "ru-RU",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexRu() {
  return <LandingPage />;
}
