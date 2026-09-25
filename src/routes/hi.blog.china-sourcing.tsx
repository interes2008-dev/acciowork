import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SourcingHub } from "@/components/sourcing/PillarArticle";
import { hubHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/hi/blog/china-sourcing")({
  head: () => hubHeadFor("hi"),
  component: () => (
    <I18nProvider>
      <SourcingHub lang="hi" />
    </I18nProvider>
  ),
});
