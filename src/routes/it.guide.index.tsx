import { createFileRoute } from "@tanstack/react-router";
import { GuideHub } from "@/components/guide/GuidePage";
import { gdChrome, gdPages, gdOrder } from "@/lib/guide-data";

const LANG = "it" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/it/guide/")({
  head: () => {
    const c = gdChrome[LANG];
    const url = "https://acciowork.pro/it/guide";
    const alternates: Array<{ rel: string; hrefLang: string; href: string }> = LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: l,
      href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/guide`,
    }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/guide" });
    return {
      meta: [
        { title: c.hubMetaTitle },
        { name: "description", content: c.hubMetaDesc },
        { property: "og:locale", content: "it_IT" },
        { property: "og:title", content: c.hubMetaTitle },
        { property: "og:description", content: c.hubMetaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-it.png" },
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
            itemListElement: gdOrder.map((slug, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: gdPages[LANG]?.[slug]?.name ?? slug,
              url: `https://acciowork.pro/it/guide/${slug}`,
            })),
          }),
        },
      ],
    };
  },
  component: () => <GuideHub lang={LANG} />,
});
