import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/ru/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "ru", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Блог Accio Work — как ИИ управляет бизнесом на практике" },
      { name: "description", content: "Полевые заметки о ведении современного бизнеса с командой ИИ, которой можно управлять. Новые статьи каждый день." },
      { property: "og:title", content: "Блог Accio Work" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:url", content: "https://acciowork.pro/ru/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/ru/blog" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/blog" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru/blog" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de/blog" },
      { rel: "alternate", hrefLang: "it", href: "https://acciowork.pro/it/blog" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/blog" },
    ],
  }),
  component: BlogRu,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Не найдено</div>,
});

function BlogRu() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="ru" articles={articles} />
    </I18nProvider>
  );
}