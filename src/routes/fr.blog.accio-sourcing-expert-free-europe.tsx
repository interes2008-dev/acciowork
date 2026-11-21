import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { EuropePackArticle } from "@/components/news/EuropePackArticle";
import { europePackHead } from "@/lib/news-europe-pack";

export const Route = createFileRoute("/fr/blog/accio-sourcing-expert-free-europe")({
  head: () => europePackHead("fr"),
  component: () => (
    <I18nProvider>
      <EuropePackArticle lang="fr" />
    </I18nProvider>
  ),
});
