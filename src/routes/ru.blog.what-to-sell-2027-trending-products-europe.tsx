import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SellArticle } from "@/components/news/SellArticle";
import { sellHead } from "@/lib/news-sell-2027";

export const Route = createFileRoute("/ru/blog/what-to-sell-2027-trending-products-europe")({
  head: () => sellHead("ru"),
  component: () => (
    <I18nProvider>
      <SellArticle lang="ru" />
    </I18nProvider>
  ),
});
