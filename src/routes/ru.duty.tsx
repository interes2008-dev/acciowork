import { createFileRoute } from "@tanstack/react-router";
import { DutyCalculator } from "@/components/duty/DutyCalculator";
import { dutyChrome } from "@/lib/duty-data";
import { validateDutySearch, dutyOg } from "@/lib/duty-og";

const LANG = "ru" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/ru/duty")({
  validateSearch: validateDutySearch,
  loaderDeps: ({ search }) => search,
  loader: ({ deps }) => ({ og: dutyOg(deps, LANG) }),
  head: ({ loaderData }) => {
    const c = dutyChrome[LANG];
    const url = "https://acciowork.pro/ru/duty";
    const og = loaderData?.og ?? null;
    const ogTitle = og ? og.title : c.metaTitle;
    const ogDesc = og ? og.desc : c.metaDesc;
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l as string, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/duty` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/duty" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "de minimis calculator, import duty calculator, landed cost, tariff calculator, cross border ecommerce 2026" },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:title", content: ogTitle },
        { property: "og:description", content: ogDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-ru.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: ogTitle },
        { name: "twitter:description", content: ogDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-ru.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/ru/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <DutyCalculator lang={LANG} />,
});
