import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/es/")({
  component: IndexEs,
  head: () => ({
    meta: [
      { title: "Accio Work | Plataforma de IA para sourcing y automatización de negocio" },
      {
        name: "description",
        content:
          "Accio Work — espacio de trabajo con IA: análisis de mercado, comparación de proveedores, creación de contenido y automatización de procesos en una sola plataforma.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, sourcing con IA, buscar proveedores, análisis de mercado, automatización de negocio, asistente IA, e-commerce, análisis de competencia, contenido con IA",
      },
      { property: "og:locale", content: "es_ES" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | Plataforma de IA para sourcing y automatización" },
      {
        property: "og:description",
        content:
          "Accio Work — espacio de trabajo con IA: análisis de mercado, comparación de proveedores, creación de contenido y automatización de procesos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/es" },
      { property: "og:image", content: "https://acciowork.pro/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work — espacio de trabajo con IA para sourcing, análisis y automatización" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | Plataforma de IA para sourcing" },
      { name: "twitter:description", content: "Espacio de trabajo con IA: sourcing, análisis de competencia, contenido y automatización." },
      { name: "twitter:image", content: "https://acciowork.pro/og-image.png" },
      { name: "twitter:image:alt", content: "Accio Work — plataforma de IA para el negocio" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/es" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it" },
      { rel: "alternate", hrefLang: "es", href: "https://acciowork.pro/es" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Accio Work",
          url: "https://acciowork.pro/es",
          inLanguage: "es-ES",
          description:
            "Espacio de trabajo con IA: análisis de mercado, comparación de proveedores, creación de contenido y automatización de procesos.",
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
          inLanguage: "es-ES",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexEs() {
  return <LandingPage />;
}