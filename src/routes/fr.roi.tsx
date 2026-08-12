import { createFileRoute } from "@tanstack/react-router";
import { RoiCalculator } from "@/components/roi/RoiCalculator";
import { roiChrome } from "@/lib/roi-data";

const LANG = "fr" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/fr/roi")({
  head: () => {
    const c = roiChrome[LANG];
    const url = "https://acciowork.pro/fr/roi";
    const alternates = LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: l,
      href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/roi`,
    }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/roi" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "AI agent ROI calculator, time savings, Accio Work, sourcing hours, automation" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-fr.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-fr.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro/fr/" },
              { "@type": "ListItem", position: 2, name: c.kicker, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: () => <RoiCalculator lang={LANG} />,
});
