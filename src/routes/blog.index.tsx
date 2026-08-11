import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "en", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Accio Work Blog: AI-run business operations" },
      { name: "description", content: "Field notes on running a modern business with an AI team you can actually direct. New articles every day." },
      { property: "og:title", content: "Accio Work Blog" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://acciowork.pro/blog" },
      { property: "og:description", content: "Field notes on running a modern business with an AI team you can actually direct. New articles every day." },
      { property: "og:image", content: "https://acciowork.pro/og/og-en.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work Blog: AI-run business operations" },
      { name: "twitter:description", content: "Field notes on running a modern business with an AI team you can actually direct. New articles every day." },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-en.png" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/blog" },
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
          name: "Accio Work Blog: AI-run business operations",
          url: "https://acciowork.pro/blog",
          inLanguage: "en",
        }),
      },
    ],
  }),
  component: BlogEn,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">Not found</div>,
});

function BlogEn() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="en" articles={articles} />
    </I18nProvider>
  );
}