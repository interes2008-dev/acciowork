import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/reviews/ReviewsPage";
import { rvChrome, rvPress } from "@/lib/reviews-data";

const LANG = "pt" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/pt/reviews")({
  head: () => {
    const c = rvChrome[LANG];
    const url = "https://acciowork.pro/pt/reviews";
    const alternates: Array<{ rel: string; hrefLang: string; href: string }> = LANGS.map((l) => ({
      rel: "alternate",
      hrefLang: l,
      href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/reviews`,
    }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/reviews" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "Accio Work reviews, Accio Work press, Alibaba AI agent reviews, Accio Work coverage" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-pt.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: c.pressTitle,
            itemListElement: rvPress.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.source,
              url: p.url,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro/pt/" },
              { "@type": "ListItem", position: 2, name: c.kicker, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: () => <ReviewsPage lang={LANG} />,
});
