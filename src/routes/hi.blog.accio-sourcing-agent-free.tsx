import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { FreeSourcingArticle } from "@/components/news/FreeSourcingArticle";
import { freeSourcingHead } from "@/lib/news-free-sourcing";

export const Route = createFileRoute("/hi/blog/accio-sourcing-agent-free")({
  head: () => freeSourcingHead("hi"),
  component: () => (
    <I18nProvider>
      <FreeSourcingArticle lang="hi" />
    </I18nProvider>
  ),
});
