import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { NovUpdatesArticle } from "@/components/news/NovUpdatesArticle";
import { novUpdatesHead } from "@/lib/news-nov-updates";

export const Route = createFileRoute("/ru/blog/accio-work-november-2026-updates")({
  head: () => novUpdatesHead("ru"),
  component: () => (
    <I18nProvider>
      <NovUpdatesArticle lang="ru" />
    </I18nProvider>
  ),
});
