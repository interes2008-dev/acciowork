import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/zh/")({
  component: IndexZh,
  head: () => ({
    meta: [
      { title: "Accio Work | 面向选品与业务自动化的 AI 工作台" },
      {
        name: "description",
        content:
          "Accio Work，AI 工作台：市场分析、供应商对比、内容创作与业务流程自动化，一个平台全部搞定。",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI 选品, 供应商搜索, 市场分析, 业务自动化, AI 助手, 电商, 竞品分析, AI 内容",
      },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:title", content: "Accio Work | 面向选品与业务自动化的 AI 工作台" },
      {
        property: "og:description",
        content:
          "Accio Work，AI 工作台：市场分析、供应商对比、内容创作与流程自动化。",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:url", content: "https://acciowork.pro/zh" },
      { property: "og:image", content: "https://acciowork.pro/og/og-zh.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "Accio Work，面向选品、分析与自动化的 AI 工作台" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work | 面向选品的 AI 工作台" },
      { name: "twitter:description", content: "AI 工作台：选品、竞品分析、内容与自动化。" },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-zh.png" },
      { name: "twitter:image:alt", content: "Accio Work，面向业务的 AI 平台" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/zh" },
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
          url: "https://acciowork.pro/zh",
          inLanguage: "zh-CN",
          description:
            "AI 工作台：市场分析、供应商对比、内容创作与流程自动化。",
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
          inLanguage: "zh-CN",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

function IndexZh() {
  return <LandingPage />;
}