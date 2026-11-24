import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SellArticle } from "@/components/news/SellArticle";
import { sellHead } from "@/lib/news-sell-2027";

export const Route = createFileRoute("/blog/what-to-sell-2027-trending-products-europe")({
  head: () => sellHead("en"),
  component: () => (
    <I18nProvider>
      <SellArticle lang="en" />
    </I18nProvider>
  ),
});
