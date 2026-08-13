import { createFileRoute, notFound } from "@tanstack/react-router";
import { ComparePage } from "@/components/compare/ComparePage";
import { comparePages } from "@/lib/compare-data";

const LANG = "it" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

function alternates(slug: string) {
  const list: Array<{ rel: string; hrefLang: string; href: string }> = LANGS.map((l) => ({
    rel: "alternate",
    hrefLang: l,
    href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/compare/${slug}`,
  }));
  list.push({ rel: "alternate", hrefLang: "x-default", href: `https://acciowork.pro/compare/${slug}` });
  return list;
}

export const Route = createFileRoute("/it/compare/$competitor")({
  loader: ({ params }) => {
    const page = comparePages[LANG]?.[(params as any).competitor] ?? null;
    if (!page) throw notFound();
    return { slug: (params as any).competitor, page };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.page;
    const slug = loaderData?.slug ?? "";
    const url = `https://acciowork.pro/it/compare/${slug}`;
    if (!p) return { meta: [{ title: "Accio Work" }] };
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: `Accio Work, ${p.name}, Accio Work vs ${p.name}, AI sourcing, supplier research, e-commerce AI` },
        { property: "og:locale", content: "it_IT" },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-it.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.metaTitle },
        { name: "twitter:description", content: p.metaDescription },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-it.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates(slug)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "it",
            mainEntity: p.faq.map((qa) => ({
              "@type": "Question",
              name: qa.q,
              acceptedAnswer: { "@type": "Answer", text: qa.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro/it/" },
              { "@type": "ListItem", position: 2, name: "Comparisons", item: "https://acciowork.pro/it/compare" },
              { "@type": "ListItem", position: 3, name: p.h1, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: CompareRoute,
  notFoundComponent: () => <ComparePage lang={LANG} competitor="__missing__" />,
});

function CompareRoute() {
  const { slug } = Route.useLoaderData();
  return <ComparePage lang={LANG} competitor={slug} />;
}
