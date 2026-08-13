import { createFileRoute, notFound } from "@tanstack/react-router";
import { GuidePage } from "@/components/guide/GuidePage";
import { gdPages } from "@/lib/guide-data";

const LANG = "es" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

function alternates(slug: string) {
  const list: Array<{ rel: string; hrefLang: string; href: string }> = LANGS.map((l) => ({
    rel: "alternate",
    hrefLang: l,
    href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/guide/${slug}`,
  }));
  list.push({ rel: "alternate", hrefLang: "x-default", href: `https://acciowork.pro/guide/${slug}` });
  return list;
}

export const Route = createFileRoute("/es/guide/$guide")({
  loader: ({ params }) => {
    const page = gdPages[LANG]?.[(params as any).guide] ?? null;
    if (!page) throw notFound();
    return { slug: (params as any).guide, page };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.page;
    const slug = loaderData?.slug ?? "";
    const url = `https://acciowork.pro/es/guide/${slug}`;
    if (!p) return { meta: [{ title: "Accio Work" }] };
    return {
      meta: [
        { title: p.metaTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: `Accio Work, guide, tutorial, ${p.name}, getting started, how to` },
        { property: "og:locale", content: "es_ES" },
        { property: "og:title", content: p.metaTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-es.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.metaTitle },
        { name: "twitter:description", content: p.metaDescription },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-es.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates(slug)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: p.h1,
            inLanguage: "es",
            description: p.metaDescription,
            step: p.steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.desc,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "es",
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
              { "@type": "ListItem", position: 1, name: "Accio Work", item: "https://acciowork.pro/es/" },
              { "@type": "ListItem", position: 2, name: "Guide", item: "https://acciowork.pro/es/guide" },
              { "@type": "ListItem", position: 3, name: p.h1, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: GuideRoute,
  notFoundComponent: () => <GuidePage lang={LANG} guide="__missing__" />,
});

function GuideRoute() {
  const { slug } = Route.useLoaderData();
  return <GuidePage lang={LANG} guide={slug} />;
}
