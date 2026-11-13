import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { NovUpdatesArticle } from "@/components/news/NovUpdatesArticle";
import { novUpdatesHead } from "@/lib/news-nov-updates";

export const Route = createFileRoute("/zh/blog/accio-work-november-2026-updates")({
  head: () => novUpdatesHead("zh"),
  component: () => (
    <I18nProvider>
      <NovUpdatesArticle lang="zh" />
    </I18nProvider>
  ),
});
