import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Accio Work | AI-Powered Work Opportunities" },
      {
        name: "description",
        content:
          "Research markets, compare suppliers, generate content and automate workflows with Accio Work — your AI workspace for smarter business work.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI sourcing, supplier search, market research, AI workflows, product discovery, business automation",
      },
      { property: "og:title", content: "Accio Work | AI-Powered Work Opportunities" },
      {
        property: "og:description",
        content:
          "Research markets, compare suppliers, generate content and automate workflows with Accio Work — your AI workspace for smarter business work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ru_RU" },
      { property: "og:locale:alternate", content: "de_DE" },
      { property: "og:url", content: "https://acciowork.pro/" },
      { property: "og:image", content: "https://acciowork.pro/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work AI workspace for sourcing, research and automation" },
      { name: "twitter:image", content: "https://acciowork.pro/og-image.png" },
      { name: "twitter:image:alt", content: "Accio Work AI workspace for sourcing, research and automation" },
      { name: "twitter:title", content: "Accio Work | AI-Powered Work Opportunities" },
      { name: "twitter:description", content: "Research markets, compare suppliers, generate content and automate workflows with Accio Work." },

    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it" },
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
            "Research markets, compare suppliers, generate content and automate workflows with Accio Work — your AI workspace for smarter business work.",
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
