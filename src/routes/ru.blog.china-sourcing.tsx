import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SourcingHub } from "@/components/sourcing/PillarArticle";
import { hubHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/ru/blog/china-sourcing")({
  head: () => hubHeadFor("ru"),
  component: () => (
    <I18nProvider>
      <SourcingHub lang="ru" />
    </I18nProvider>
  ),
});
