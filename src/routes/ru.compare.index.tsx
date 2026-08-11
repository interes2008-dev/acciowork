import { createFileRoute } from "@tanstack/react-router";
import { CompareHub } from "@/components/compare/ComparePage";
import { compareChrome, comparePages, compareOrder } from "@/lib/compare-data";

const LANG = "ru" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/ru/compare/")({
  head: () => {
    const c = compareChrome[LANG];
    const url = "https://acciowork.pro/ru/compare";
    const alternates = LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: l,
      href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/compare`,
    }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/compare" });
    return {
      meta: [
        { title: c.hubMetaTitle },
        { name: "description", content: c.hubMetaDesc },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:title", content: c.hubMetaTitle },
        { property: "og:description", content: c.hubMetaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-ru.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.hubMetaTitle },
        { name: "twitter:description", content: c.hubMetaDesc },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: c.hubTitle,
            itemListElement: compareOrder.map((slug, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Accio Work vs ${comparePages[LANG]?.[slug]?.name ?? slug}`,
              url: `https://acciowork.pro/ru/compare/${slug}`,
            })),
          }),
        },
      ],
    };
  },
  component: () => <CompareHub lang={LANG} />,
});
