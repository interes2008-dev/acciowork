import { createFileRoute } from "@tanstack/react-router";
import { TikTokPage } from "@/components/tiktok/TikTokPage";
import { ttChrome } from "@/lib/tiktok-data";

const LANG = "zh" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/zh/tiktok-shop")({
  head: () => {
    const c = ttChrome[LANG];
    const url = "https://acciowork.pro/zh/tiktok-shop";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/tiktok-shop` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/tiktok-shop" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "TikTok Shop sourcing, source products TikTok Shop, AI sourcing agent, winning products, TikTok Shop suppliers 2026" },
        { property: "og:locale", content: "zh_CN" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-zh.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-zh.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/zh/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <TikTokPage lang={LANG} />,
});
