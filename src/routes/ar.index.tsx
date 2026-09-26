import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/ar/")({
  component: IndexAr,
  head: () => ({
    meta: [
      { title: "Accio Work | منصة الذكاء الاصطناعي لإيجاد المورّدين وأتمتة الأعمال" },
      {
        name: "description",
        content:
          "Accio Work، مساحة عمل بالذكاء الاصطناعي: تحليل الأسواق، مقارنة المورّدين، توليد المحتوى وأتمتة عمليات الأعمال على منصة واحدة.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, ذكاء اصطناعي, إيجاد المورّدين, تحليل السوق, أتمتة الأعمال, مساعد ذكاء اصطناعي, توريد, موردون بالجملة, تحليل المنافسين, توليد المحتوى",
      },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:locale:alternate", content: "en_US" },
      {
        property: "og:title",
        content: "Accio Work | منصة الذكاء الاصطناعي لإيجاد المورّدين وأتمتة الأعمال",
      },
      {
        property: "og:description",
        content:
          "Accio Work، مساحة عمل بالذكاء الاصطناعي: تحليل الأسواق، مقارنة المورّدين، توليد المحتوى وأتمتة عمليات الأعمال.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/ar" },
      { property: "og:image", content: "https://acciowork.pro/og/og-ar.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      {
        property: "og:image:alt",
        content: "Accio Work، مساحة عمل بالذكاء الاصطناعي للتوريد والتحليل والأتمتة",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | منصة ذكاء اصطناعي لإيجاد المورّدين" },
      {
        name: "twitter:description",
        content: "مساحة عمل بالذكاء الاصطناعي: توريد، تحليل المنافسين، توليد المحتوى وأتمتة.",
      },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-ar.png" },
      { name: "twitter:image:alt", content: "Accio Work، منصة ذكاء اصطناعي للأعمال" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/ar" },
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
          alternateName: "أكسيو ورك",
          url: "https://acciowork.pro/ar",
          inLanguage: "ar",
          description:
            "مساحة عمل بالذكاء الاصطناعي: تحليل الأسواق، مقارنة المورّدين، توليد المحتوى وأتمتة عمليات الأعمال.",
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
          inLanguage: "ar",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexAr() {
  return <LandingPage />;
}
