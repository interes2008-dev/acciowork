import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { EuropePackArticle } from "@/components/news/EuropePackArticle";
import { europePackHead } from "@/lib/news-europe-pack";

export const Route = createFileRoute("/pt/blog/accio-sourcing-expert-free-europe")({
  head: () => europePackHead("pt"),
  component: () => (
    <I18nProvider>
      <EuropePackArticle lang="pt" />
    </I18nProvider>
  ),
});
