import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/fr/")({
  component: IndexFr,
  head: () => ({
    meta: [
      { title: "Accio Work | Plateforme IA de sourcing et d’automatisation business" },
      {
        name: "description",
        content:
          "Accio Work, l’espace de travail IA : analyse de marché, comparaison de fournisseurs, création de contenu et automatisation des processus sur une seule plateforme.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, sourcing IA, trouver des fournisseurs, analyse de marché, automatisation business, assistant IA, e-commerce, veille concurrentielle, contenu IA",
      },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | Plateforme IA pour le sourcing et l’automatisation" },
      {
        property: "og:description",
        content:
          "Accio Work, l’espace de travail IA : analyse de marché, comparaison de fournisseurs, création de contenu et automatisation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/fr" },
      { property: "og:image", content: "https://acciowork.pro/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work, espace de travail IA pour le sourcing, l’analyse et l’automatisation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | Plateforme IA de sourcing" },
      { name: "twitter:description", content: "Espace de travail IA : sourcing, veille concurrentielle, contenu et automatisation." },
      { name: "twitter:image", content: "https://acciowork.pro/og-image.png" },
      { name: "twitter:image:alt", content: "Accio Work, plateforme IA pour le business" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/fr" },
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
          url: "https://acciowork.pro/fr",
          inLanguage: "fr-FR",
          description:
            "Espace de travail IA : analyse de marché, comparaison de fournisseurs, création de contenu et automatisation des processus.",
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
          inLanguage: "fr-FR",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexFr() {
  return <LandingPage />;
}