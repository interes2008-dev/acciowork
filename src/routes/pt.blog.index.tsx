import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/pt/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "pt", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Blog Accio Work — negócio guiado por IA" },
      { name: "description", content: "Notas de campo sobre como tocar um negócio moderno com um time de IA que você realmente dirige. Artigos novos todo dia." },
      { property: "og:title", content: "Blog Accio Work" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "https://acciowork.pro/pt/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/pt/blog" },
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
  }),
  component: BlogPt,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Não encontrado</div>,
});

function BlogPt() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="pt" articles={articles} />
    </I18nProvider>
  );
}