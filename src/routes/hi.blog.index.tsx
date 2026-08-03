import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/hi/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "hi", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Accio Work ब्लॉग — AI से चलने वाला बिज़नेस" },
      { name: "description", content: "एक ऐसी AI टीम के साथ आधुनिक बिज़नेस चलाने के फ़ील्ड नोट्स जिसे आप सच में निर्देश दे सकते हैं। हर दिन नए लेख।" },
      { property: "og:title", content: "Accio Work ब्लॉग" },
      { property: "og:locale", content: "hi_IN" },
      { property: "og:url", content: "https://acciowork.pro/hi/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/hi/blog" },
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
  component: BlogHi,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">नहीं मिला</div>,
});

function BlogHi() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="hi" articles={articles} />
    </I18nProvider>
  );
}