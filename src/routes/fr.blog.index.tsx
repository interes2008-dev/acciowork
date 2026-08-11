import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/fr/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "fr", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Blog Accio Work: business piloté par l’IA" },
      { name: "description", content: "Notes de terrain sur la conduite d’un business moderne avec une équipe d’IA que vous dirigez vraiment. Un nouvel article chaque jour." },
      { property: "og:title", content: "Blog Accio Work" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:url", content: "https://acciowork.pro/fr/blog" },
      { property: "og:description", content: "Notes de terrain sur la conduite d’un business moderne avec une équipe d’IA que vous dirigez vraiment. Un nouvel article chaque jour." },
      { property: "og:image", content: "https://acciowork.pro/og/og-fr.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog Accio Work: business piloté par l’IA" },
      { name: "twitter:description", content: "Notes de terrain sur la conduite d’un business moderne avec une équipe d’IA que vous dirigez vraiment. Un nouvel article chaque jour." },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-fr.png" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/fr/blog" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/blog" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru/blog" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de/blog" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it/blog" },
      { rel: "alternate", hrefLang: "es", href: "https://acciowork.pro/es/blog" },
      { rel: "alternate", hrefLang: "zh", href: "https://acciowork.pro/zh/blog" },
      { rel: "alternate", hrefLang: "pt", href: "https://acciowork.pro/pt/blog" },
      { rel: "alternate", hrefLang: "hi", href: "https://acciowork.pro/hi/blog" },
      { rel: "alternate", hrefLang: "fr", href: "https://acciowork.pro/fr/blog" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/blog" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Accio Work: business piloté par l’IA",
          url: "https://acciowork.pro/fr/blog",
          inLanguage: "fr",
        }),
      },
    ],
  }),
  component: BlogFr,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Introuvable</div>,
});

function BlogFr() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="fr" articles={articles} />
    </I18nProvider>
  );
}