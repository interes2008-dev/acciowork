import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { EuropePackArticle } from "@/components/news/EuropePackArticle";
import { europePackHead } from "@/lib/news-europe-pack";

export const Route = createFileRoute("/ru/blog/accio-sourcing-expert-free-europe")({
  head: () => europePackHead("ru"),
  component: () => (
    <I18nProvider>
      <EuropePackArticle lang="ru" />
    </I18nProvider>
  ),
});
