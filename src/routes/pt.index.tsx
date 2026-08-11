import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/pt/")({
  component: IndexPt,
  head: () => ({
    meta: [
      { title: "Accio Work | Plataforma de IA para sourcing e automação de negócio" },
      {
        name: "description",
        content:
          "Accio Work, workspace com IA: análise de mercado, comparação de fornecedores, criação de conteúdo e automação de processos em uma só plataforma.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, sourcing com IA, buscar fornecedores, análise de mercado, automação de negócio, assistente IA, e-commerce, análise de concorrência, conteúdo com IA",
      },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | Plataforma de IA para sourcing e automação" },
      {
        property: "og:description",
        content:
          "Accio Work, workspace com IA: análise de mercado, comparação de fornecedores, criação de conteúdo e automação de processos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/pt" },
      { property: "og:image", content: "https://acciowork.pro/og/og-pt.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work, workspace com IA para sourcing, análise e automação" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | Plataforma de IA para sourcing" },
      { name: "twitter:description", content: "Workspace com IA: sourcing, análise de concorrência, conteúdo e automação." },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-pt.png" },
      { name: "twitter:image:alt", content: "Accio Work, plataforma de IA para o negócio" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/pt" },
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
          url: "https://acciowork.pro/pt",
          inLanguage: "pt-BR",
          description:
            "Workspace com IA: análise de mercado, comparação de fornecedores, criação de conteúdo e automação de processos.",
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
          inLanguage: "pt-BR",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexPt() {
  return <LandingPage />;
}