import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SellArticle } from "@/components/news/SellArticle";
import { sellHead } from "@/lib/news-sell-2027";

export const Route = createFileRoute("/zh/blog/what-to-sell-2027-trending-products-europe")({
  head: () => sellHead("zh"),
  component: () => (
    <I18nProvider>
      <SellArticle lang="zh" />
    </I18nProvider>
  ),
});
