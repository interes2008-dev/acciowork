import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/ar/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "ar", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "مدوّنة Accio Work: كيف يدير الذكاء الاصطناعي الأعمال عملياً" },
      {
        name: "description",
        content:
          "ملاحظات ميدانية عن إدارة عمل حديث بفريق ذكاء اصطناعي يمكنك توجيهه. مقالات جديدة كل يوم.",
      },
      { property: "og:title", content: "مدوّنة Accio Work" },
      { property: "og:locale", content: "ar_AR" },
      { property: "og:url", content: "https://acciowork.pro/ar/blog" },
      {
        property: "og:description",
        content:
          "ملاحظات ميدانية عن إدارة عمل حديث بفريق ذكاء اصطناعي يمكنك توجيهه. مقالات جديدة كل يوم.",
      },
      { property: "og:image", content: "https://acciowork.pro/og/og-ar.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "مدوّنة Accio Work: كيف يدير الذكاء الاصطناعي الأعمال عملياً",
      },
      {
        name: "twitter:description",
        content:
          "ملاحظات ميدانية عن إدارة عمل حديث بفريق ذكاء اصطناعي يمكنك توجيهه. مقالات جديدة كل يوم.",
      },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-ar.png" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/ar/blog" },
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
          name: "مدوّنة Accio Work: كيف يدير الذكاء الاصطناعي الأعمال عملياً",
          url: "https://acciowork.pro/ar/blog",
          inLanguage: "ar",
        }),
      },
    ],
  }),
  component: BlogAr,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">غير موجود</div>,
});

function BlogAr() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="ar" articles={articles} />
    </I18nProvider>
  );
}
