import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/es/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "es", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Blog Accio Work: negocio guiado por IA" },
      { name: "description", content: "Apuntes de campo sobre cómo llevar un negocio moderno con un equipo de IA al que de verdad puedes dirigir. Nuevos artículos cada día." },
      { property: "og:title", content: "Blog Accio Work" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:url", content: "https://acciowork.pro/es/blog" },
      { property: "og:description", content: "Apuntes de campo sobre cómo llevar un negocio moderno con un equipo de IA al que de verdad puedes dirigir. Nuevos artículos cada día." },
      { property: "og:image", content: "https://acciowork.pro/og/og-es.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog Accio Work: negocio guiado por IA" },
      { name: "twitter:description", content: "Apuntes de campo sobre cómo llevar un negocio moderno con un equipo de IA al que de verdad puedes dirigir. Nuevos artículos cada día." },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-es.png" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/es/blog" },
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
          name: "Blog Accio Work: negocio guiado por IA",
          url: "https://acciowork.pro/es/blog",
          inLanguage: "es",
        }),
      },
    ],
  }),
  component: BlogEs,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">No encontrado</div>,
});

function BlogEs() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="es" articles={articles} />
    </I18nProvider>
  );
}