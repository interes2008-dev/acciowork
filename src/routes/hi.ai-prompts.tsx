import { createFileRoute } from "@tanstack/react-router";
import { PromptsPage } from "@/components/prompts/PromptsPage";
import { prChrome } from "@/lib/prompts-data";

const LANG = "hi" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/hi/ai-prompts")({
  head: () => {
    const c = prChrome[LANG];
    const url = "https://acciowork.pro/hi/ai-prompts";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/ai-prompts` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/ai-prompts" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "AI prompts product research, ChatGPT prompts dropshipping, product validation prompts, free AI research, ecommerce prompts 2026" },
        { property: "og:locale", content: "hi_IN" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-hi.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-hi.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/hi/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <PromptsPage lang={LANG} />,
});
