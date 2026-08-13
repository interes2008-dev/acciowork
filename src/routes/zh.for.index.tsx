import { createFileRoute } from "@tanstack/react-router";
import { UseCaseHub } from "@/components/usecase/UseCasePage";
import { ucChrome, ucPages, ucOrder } from "@/lib/usecase-data";

const LANG = "zh" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/zh/for/")({
  head: () => {
    const c = ucChrome[LANG];
    const url = "https://acciowork.pro/zh/for";
    const alternates: Array<{ rel: string; hrefLang: string; href: string }> = LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: l,
      href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/for`,
    }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/for" });
    return {
      meta: [
        { title: c.hubMetaTitle },
        { name: "description", content: c.hubMetaDesc },
        { property: "og:locale", content: "zh_CN" },
        { property: "og:title", content: c.hubMetaTitle },
        { property: "og:description", content: c.hubMetaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-zh.png" },
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
            itemListElement: ucOrder.map((slug, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: ucPages[LANG]?.[slug]?.name ?? slug,
              url: `https://acciowork.pro/zh/for/${slug}`,
            })),
          }),
        },
      ],
    };
  },
  component: () => <UseCaseHub lang={LANG} />,
});
