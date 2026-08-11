import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { BlogList } from "@/components/blog/BlogList";
import { listArticles } from "@/lib/blog.functions";

export const Route = createFileRoute("/zh/blog/")({
  loader: async () => ({ articles: await listArticles({ data: { lang: "zh", limit: 60 } }) }),
  head: () => ({
    meta: [
      { title: "Accio Work 博客：关于 AI 驱动生意的实战笔记" },
      { name: "description", content: "关于如何用一个真正听你指挥的 AI 团队经营现代生意的一线笔记。每天更新。" },
      { property: "og:title", content: "Accio Work 博客" },
      { property: "og:locale", content: "zh_CN" },
      { property: "og:url", content: "https://acciowork.pro/zh/blog" },
      { property: "og:description", content: "关于如何用一个真正听你指挥的 AI 团队经营现代生意的一线笔记。每天更新。" },
      { property: "og:image", content: "https://acciowork.pro/og/og-zh.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Accio Work 博客：关于 AI 驱动生意的实战笔记" },
      { name: "twitter:description", content: "关于如何用一个真正听你指挥的 AI 团队经营现代生意的一线笔记。每天更新。" },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-zh.png" },
    ],
    links: [
      { rel: "canonical", href: "https://acciowork.pro/zh/blog" },
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
          name: "Accio Work 博客：关于 AI 驱动生意的实战笔记",
          url: "https://acciowork.pro/zh/blog",
          inLanguage: "zh",
        }),
      },
    ],
  }),
  component: BlogZh,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => <div className="p-10 text-center">未找到</div>,
});

function BlogZh() {
  const { articles } = Route.useLoaderData();
  return (
    <I18nProvider>
      <BlogList lang="zh" articles={articles} />
    </I18nProvider>
  );
}