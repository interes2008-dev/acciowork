import { createFileRoute } from "@tanstack/react-router";
import { RoiCalculator } from "@/components/roi/RoiCalculator";
import { roiChrome } from "@/lib/roi-data";
import { validateRoiSearch, roiOg } from "@/lib/roi-og";

const LANG = "hi" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/hi/roi")({
  validateSearch: validateRoiSearch,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => ({ og: roiOg(deps, LANG) }),
  head: ({ loaderData }) => {
    const c = roiChrome[LANG];
    const url = "https://acciowork.pro/hi/roi";
    const og = loaderData?.og ?? null;
    const ogTitle = og ? og.title : c.metaTitle;
    const ogDesc = og ? og.desc : c.metaDesc;
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/roi` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/roi" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "AI agent ROI calculator, time savings, Accio Work, sourcing hours, automation" },
        { property: "og:locale", content: "hi_IN" },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: ogDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-hi.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: ogDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-hi.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/hi/"},{"@type":"ListItem",position:2,name:c.kicker,item:url}] }) },
      ],
    };
  },
  component: () => <RoiCalculator lang={LANG} />,
});
