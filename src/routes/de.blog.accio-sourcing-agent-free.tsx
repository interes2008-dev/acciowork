import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { FreeSourcingArticle } from "@/components/news/FreeSourcingArticle";
import { freeSourcingHead } from "@/lib/news-free-sourcing";

export const Route = createFileRoute("/de/blog/accio-sourcing-agent-free")({
  head: () => freeSourcingHead("de"),
  component: () => (
    <I18nProvider>
      <FreeSourcingArticle lang="de" />
    </I18nProvider>
  ),
});
