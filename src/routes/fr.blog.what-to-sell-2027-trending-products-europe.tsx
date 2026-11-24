import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SellArticle } from "@/components/news/SellArticle";
import { sellHead } from "@/lib/news-sell-2027";

export const Route = createFileRoute("/fr/blog/what-to-sell-2027-trending-products-europe")({
  head: () => sellHead("fr"),
  component: () => (
    <I18nProvider>
      <SellArticle lang="fr" />
    </I18nProvider>
  ),
});
