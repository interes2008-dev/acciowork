import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/it/blog/chatgpt-vs-accio-sourcing-agents")({
  head: () => pillarHeadFor("it", "chatgpt-vs-accio-sourcing-agents"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="it" pillar={getPillarFor("it", "chatgpt-vs-accio-sourcing-agents")} />
    </I18nProvider>
  ),
});
