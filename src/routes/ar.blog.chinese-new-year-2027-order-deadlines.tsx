import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { CnyArticle } from "@/components/news/CnyArticle";
import { cnyHead } from "@/lib/news-cny-2027";

export const Route = createFileRoute("/ar/blog/chinese-new-year-2027-order-deadlines")({
  head: () => cnyHead("ar"),
  component: () => (
    <I18nProvider>
      <CnyArticle lang="ar" />
    </I18nProvider>
  ),
});
