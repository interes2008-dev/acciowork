import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Accio Work: AI Agent for Sourcing & Market Research" },
      {
        name: "description",
        content:
          "Accio Work is a business automation tool for e-commerce teams: find and compare suppliers, run market research, and automate sourcing workflows with AI.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI sourcing, supplier search, market research, AI workflows, product discovery, business automation",
      },
      { property: "og:title", content: "Accio Work: AI Agent for Sourcing & Market Research" },
      {
        property: "og:description",
        content:
          "Accio Work is a business automation tool for e-commerce teams: find and compare suppliers, run market research, and automate sourcing workflows with AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ru_RU" },
      { property: "og:locale:alternate", content: "de_DE" },
      { property: "og:locale:alternate", content: "it_IT" },
      { property: "og:locale:alternate", content: "es_ES" },
      { property: "og:locale:alternate", content: "zh_CN" },
      { property: "og:locale:alternate", content: "pt_BR" },
      { property: "og:locale:alternate", content: "hi_IN" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:url", content: "https://acciowork.pro/" },
      { property: "og:image", content: "https://acciowork.pro/og/og-en.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work AI workspace for sourcing, research and automation" },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-en.png" },
      { name: "twitter:image:alt", content: "Accio Work AI workspace for sourcing, research and automation" },
      { name: "twitter:title", content: "Accio Work: AI Agent for Sourcing & Market Research" },
      { name: "twitter:description", content: "Business automation for e-commerce: compare suppliers, run market research, and automate sourcing workflows with AI." },

    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it" },
      { rel: "alternate", hrefLang: "es", href: "https://acciowork.pro/es" },
      { rel: "alternate", hrefLang: "zh", href: "https://acciowork.pro/zh" },
      { rel: "alternate", hrefLang: "pt", href: "https://acciowork.pro/pt" },
      { rel: "alternate", hrefLang: "hi", href: "https://acciowork.pro/hi" },
      { rel: "alternate", hrefLang: "fr", href: "https://acciowork.pro/fr" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Accio Work",
          url: "https://acciowork.pro/",
          description:
            "Research markets, compare suppliers, generate content and automate workflows with Accio Work, your AI workspace for smarter business work.",
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
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
