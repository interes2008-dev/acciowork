import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/hi/blog/chatgpt-vs-accio-sourcing-agents")({
  head: () => pillarHeadFor("hi", "chatgpt-vs-accio-sourcing-agents"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="hi" pillar={getPillarFor("hi", "chatgpt-vs-accio-sourcing-agents")} />
    </I18nProvider>
  ),
});
