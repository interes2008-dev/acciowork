import { createFileRoute } from "@tanstack/react-router";
import { DutyCalculator } from "@/components/duty/DutyCalculator";
import { dutyChrome } from "@/lib/duty-data";

const LANG = "pt" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/pt/duty")({
  head: () => {
    const c = dutyChrome[LANG];
    const url = "https://acciowork.pro/pt/duty";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/duty` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/duty" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "de minimis calculator, import duty calculator, landed cost, tariff calculator, cross border ecommerce 2026" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-pt.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-pt.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/pt/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <DutyCalculator lang={LANG} />,
});
