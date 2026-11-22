import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ZhSellerArticle } from "@/components/news/ZhSellerArticle";
import { zhSellerHead } from "@/lib/news-zh-sellers";

export const Route = createFileRoute("/zh/blog/1688-zero-experience-export-guide")({
  head: () => zhSellerHead("1688-zero-experience-export-guide"),
  component: () => (
    <I18nProvider>
      <ZhSellerArticle slug="1688-zero-experience-export-guide" />
    </I18nProvider>
  ),
});
