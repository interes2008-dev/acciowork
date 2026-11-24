import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SellArticle } from "@/components/news/SellArticle";
import { sellHead } from "@/lib/news-sell-2027";

export const Route = createFileRoute("/ar/blog/what-to-sell-2027-trending-products-europe")({
  head: () => sellHead("ar"),
  component: () => (
    <I18nProvider>
      <SellArticle lang="ar" />
    </I18nProvider>
  ),
});
