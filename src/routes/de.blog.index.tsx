import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/de/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "de", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Accio Work Blog: KI-geführte Unternehmen" },
      {
        name: "description",
        content:
          "Feldnotizen über modernes Unternehmertum mit einem KI-Team, das du wirklich lenken kannst. Jeden Tag neue Artikel.",
      },
      { property: "og:title", content: "Accio Work Blog" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:url", content: "https://acciowork.pro/de/blog" },
      {
        property: "og:description",
        content:
          "Feldnotizen über modernes Unternehmertum mit einem KI-Team, das du wirklich lenken kannst. Jeden Tag neue Artikel.",
      },
      { property: "og:image", content: "https://acciowork.pro/og/og-de.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work Blog: KI-geführte Unternehmen" },
      {
        name: "twitter:description",
        content:
          "Feldnotizen über modernes Unternehmertum mit einem KI-Team, das du wirklich lenken kannst. Jeden Tag neue Artikel.",
      },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-de.png" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/de/blog" },
      { rel: "alternate", hreflang: "en", href: "https://acciowork.pro/blog" },
      { rel: "alternate", hreflang: "ru", href: "https://acciowork.pro/ru/blog" },
      { rel: "alternate", hreflang: "de", href: "https://acciowork.pro/de/blog" },
      { rel: "alternate", hreflang: "it", href: "https://acciowork.pro/it/blog" },
      { rel: "alternate", hreflang: "es", href: "https://acciowork.pro/es/blog" },
      { rel: "alternate", hreflang: "zh", href: "https://acciowork.pro/zh/blog" },
      { rel: "alternate", hreflang: "pt", href: "https://acciowork.pro/pt/blog" },
      { rel: "alternate", hreflang: "hi", href: "https://acciowork.pro/hi/blog" },
      { rel: "alternate", hreflang: "fr", href: "https://acciowork.pro/fr/blog" },
      { rel: "alternate", hreflang: "ar", href: "https://acciowork.pro/ar/blog" },
      { rel: "alternate", hreflang: "x-default", href: "https://acciowork.pro/blog" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Accio Work Blog: KI-geführte Unternehmen",
          url: "https://acciowork.pro/de/blog",
          inLanguage: "de",
        }),
      },
    ],
  }),
  component: BlogDe,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Nicht gefunden</div>,
});

function BlogDe() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="de" articles={articles} />
    </I18nProvider>
  );
}
