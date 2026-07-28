import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/de/")({
  component: IndexDe,
  head: () => ({
    meta: [
      { title: "Accio Work | KI-Plattform für Sourcing und Business-Automatisierung" },
      {
        name: "description",
        content:
          "Accio Work — KI-Arbeitsbereich: Marktanalyse, Lieferantenvergleich, Content-Erstellung und Automatisierung von Geschäftsprozessen auf einer Plattform.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, KI Lieferantensuche, Marktanalyse, Business-Automatisierung, KI-Assistent, Sourcing, Großhandel Lieferanten, Wettbewerbsanalyse, Content-Erstellung",
      },
      { property: "og:locale", content: "de_DE" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | KI-Plattform für Sourcing und Business-Automatisierung" },
      {
        property: "og:description",
        content:
          "Accio Work — KI-Arbeitsbereich: Marktanalyse, Lieferantenvergleich, Content-Erstellung und Prozessautomatisierung.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/de" },
      { property: "og:image", content: "https://acciowork.pro/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work — KI-Arbeitsbereich für Sourcing, Analyse und Automatisierung" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | KI-Plattform für Sourcing" },
      { name: "twitter:description", content: "KI-Arbeitsbereich: Sourcing, Wettbewerbsanalyse, Content-Erstellung und Automatisierung." },
      { name: "twitter:image", content: "https://acciowork.pro/og-image.png" },
      { name: "twitter:image:alt", content: "Accio Work — KI-Plattform für Unternehmen" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/de" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it" },
      { rel: "alternate", hrefLang: "es", href: "https://acciowork.pro/es" },
      { rel: "alternate", hrefLang: "zh", href: "https://acciowork.pro/zh" },
      { rel: "alternate", hrefLang: "pt", href: "https://acciowork.pro/pt" },
      { rel: "alternate", hrefLang: "hi", href: "https://acciowork.pro/hi" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Accio Work",
          url: "https://acciowork.pro/de",
          inLanguage: "de-DE",
          description:
            "KI-Arbeitsbereich: Marktanalyse, Lieferantenvergleich, Content-Erstellung und Prozessautomatisierung.",
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
          inLanguage: "de-DE",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexDe() {
  return <LandingPage />;
}