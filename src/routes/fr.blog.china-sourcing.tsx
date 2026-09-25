import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SourcingHub } from "@/components/sourcing/PillarArticle";
import { hubHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/fr/blog/china-sourcing")({
  head: () => hubHeadFor("fr"),
  component: () => (
    <I18nProvider>
      <SourcingHub lang="fr" />
    </I18nProvider>
  ),
});
