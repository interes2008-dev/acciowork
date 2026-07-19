import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/it/")({
  component: IndexIt,
  head: () => ({
    meta: [
      { title: "Accio Work | Piattaforma AI per sourcing e automazione business" },
      {
        name: "description",
        content:
          "Accio Work — spazio di lavoro AI: analisi di mercato, confronto fornitori, creazione contenuti e automazione dei processi in un'unica piattaforma.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI sourcing, ricerca fornitori, analisi mercato, automazione business, assistente AI, e-commerce, analisi concorrenti, contenuti AI",
      },
      { property: "og:locale", content: "it_IT" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | Piattaforma AI per sourcing e automazione business" },
      {
        property: "og:description",
        content:
          "Accio Work — spazio di lavoro AI: analisi di mercato, confronto fornitori, creazione contenuti e automazione processi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/it" },
      { property: "og:image", content: "https://acciowork.pro/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work — spazio di lavoro AI per sourcing, analisi e automazione" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | Piattaforma AI per il sourcing" },
      { name: "twitter:description", content: "Spazio di lavoro AI: sourcing, analisi concorrenti, contenuti e automazione." },
      { name: "twitter:image", content: "https://acciowork.pro/og-image.png" },
      { name: "twitter:image:alt", content: "Accio Work — piattaforma AI per il business" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/it" },
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
          url: "https://acciowork.pro/it",
          inLanguage: "it-IT",
          description:
            "Spazio di lavoro AI: analisi di mercato, confronto fornitori, creazione contenuti e automazione processi.",
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
          inLanguage: "it-IT",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexIt() {
  return <LandingPage />;
}