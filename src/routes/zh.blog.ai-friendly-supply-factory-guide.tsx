import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ZhSellerArticle } from "@/components/news/ZhSellerArticle";
import { zhSellerHead } from "@/lib/news-zh-sellers";

export const Route = createFileRoute("/zh/blog/ai-friendly-supply-factory-guide")({
  head: () => zhSellerHead("ai-friendly-supply-factory-guide"),
  component: () => (
    <I18nProvider>
      <ZhSellerArticle slug="ai-friendly-supply-factory-guide" />
    </I18nProvider>
  ),
});
