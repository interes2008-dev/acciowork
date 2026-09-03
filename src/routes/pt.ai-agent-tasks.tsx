import { createFileRoute } from "@tanstack/react-router";
import { AgentTasksChecklist } from "@/components/checklist/AgentTasksChecklist";
import { chChrome } from "@/lib/checklist-data";
import { validateChSearch, chOg, chOgImageUrl } from "@/lib/checklist-og";

const LANG = "pt" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/pt/ai-agent-tasks")({
  validateSearch: validateChSearch,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => ({ og: chOg(deps, LANG), ogImage: chOgImageUrl(deps, LANG) }),
  head: ({ loaderData }) => {
    const c = chChrome[LANG];
    const url = "https://acciowork.pro/pt/ai-agent-tasks";
    const og = loaderData?.og ?? null;
    const ogTitle = og ? og.title : c.metaTitle;
    const ogDesc = og ? og.desc : c.metaDesc;
    const ogImg = loaderData?.ogImage ?? "https://acciowork.pro/og/og-pt.png";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/ai-agent-tasks` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/ai-agent-tasks" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "AI agent tasks, delegate to AI, automate small business, tasks for AI agent 2026" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: ogDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: ogImg },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: ogDesc },
        { name: "twitter:image", content: ogImg },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/pt/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <AgentTasksChecklist lang={LANG} />,
});
