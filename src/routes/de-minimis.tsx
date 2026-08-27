import { createFileRoute } from "@tanstack/react-router";
import { DeMinimisPage } from "@/components/deminimis/DeMinimisPage";
import { dmChrome } from "@/lib/deminimis-data";

const LANG = "en" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/de-minimis")({
  head: () => {
    const c = dmChrome[LANG];
    const url = "https://acciowork.pro/de-minimis";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/de-minimis` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/de-minimis" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "de minimis 2026, importing after de minimis, tariff strategy, cross border ecommerce, alternate sourcing origin" },
        { property: "og:locale", content: "en_US" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-en.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-en.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <DeMinimisPage lang={LANG} />,
});
