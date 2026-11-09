import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { FreeSourcingArticle } from "@/components/news/FreeSourcingArticle";
import { freeSourcingHead } from "@/lib/news-free-sourcing";

export const Route = createFileRoute("/ar/blog/accio-sourcing-agent-free")({
  head: () => freeSourcingHead("ar"),
  component: () => (
    <I18nProvider>
      <FreeSourcingArticle lang="ar" />
    </I18nProvider>
  ),
});
