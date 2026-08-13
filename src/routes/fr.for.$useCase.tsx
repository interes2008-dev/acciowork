import { createFileRoute, notFound } from "@tanstack/react-router";
import { UseCasePage } from "@/components/usecase/UseCasePage";
import { ucPages } from "@/lib/usecase-data";

const LANG = "fr" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

function alternates(slug: string) {
  const list: Array<{ rel: string; hrefLang: string; href: string }> = LANGS.map((l) => ({
    rel: "alternate",
    hrefLang: l,
    href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/for/${slug}`,
  }));
  list.push({ rel: "alternate", hrefLang: "x-default", href: `https://acciowork.pro/for/${slug}` });
  return list;
}

export const Route = createFileRoute("/fr/for/$useCase")({
  loader: ({ params }) => {
    const page = ucPages[LANG]?.[(params as any).useCase] ?? null;
    if (!page) throw notFound();
    return { slug: (params as any).useCase, page };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.page;
    const slug = loaderData?.slug ?? "";
    const url = `https://acciowork.pro/fr/for/${slug}`;
    if (!p) return { meta: [{ title: "Accio Work" }] };
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: `Accio Work, ${p.name}, AI agent, sourcing, market research, e-commerce automation` },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-fr.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.metaTitle },
        { name: "twitter:description", content: p.metaDescription },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-fr.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates(slug)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "fr",
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
              { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro/fr/" },
              { "@type": "ListItem", position: 2, name: "Use cases", item: "https://acciowork.pro/fr/for" },
              { "@type": "ListItem", position: 3, name: p.h1, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: UseCaseRoute,
  notFoundComponent: () => <UseCasePage lang={LANG} useCase="__missing__" />,
});

function UseCaseRoute() {
  const { slug } = Route.useLoaderData();
  return <UseCasePage lang={LANG} useCase={slug} />;
}
