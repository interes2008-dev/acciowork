import { createFileRoute } from "@tanstack/react-router";
import { DutyCalculator } from "@/components/duty/DutyCalculator";
import { dutyChrome } from "@/lib/duty-data";
import { validateDutySearch, dutyOg, dutyOgImageUrl } from "@/lib/duty-og";

const LANG = "en" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/duty")({
  validateSearch: validateDutySearch,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => ({ og: dutyOg(deps, LANG), ogImage: dutyOgImageUrl(deps, LANG) }),
  head: ({ loaderData }) => {
    const c = dutyChrome[LANG];
    const url = "https://acciowork.pro/duty";
    const og = loaderData?.og ?? null;
    const ogTitle = og ? og.title : c.metaTitle;
    const ogDesc = og ? og.desc : c.metaDesc;
    const ogImg = loaderData?.ogImage ?? "https://acciowork.pro/og/og-en.png";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/duty` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/duty" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "de minimis calculator, import duty calculator, landed cost, tariff calculator, cross border ecommerce 2026" },
        { property: "og:locale", content: "en_US" },
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
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <DutyCalculator lang={LANG} />,
});
