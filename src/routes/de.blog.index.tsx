import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/de/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "de", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Accio Work Blog — praktische Einblicke in KI-geführte Unternehmen" },
      { name: "description", content: "Feldnotizen über modernes Unternehmertum mit einem KI-Team, das du wirklich lenken kannst. Jeden Tag neue Artikel." },
      { property: "og:title", content: "Accio Work Blog" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:url", content: "https://acciowork.pro/de/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/de/blog" },
      { rel: "alternate", hrefLang: "en", href: "https://acciowork.pro/blog" },
      { rel: "alternate", hrefLang: "ru", href: "https://acciowork.pro/ru/blog" },
      { rel: "alternate", hrefLang: "de", href: "https://acciowork.pro/de/blog" },
      { rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/blog" },
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