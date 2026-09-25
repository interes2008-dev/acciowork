import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/fr/blog/chatgpt-vs-accio-sourcing-agents")({
  head: () => pillarHeadFor("fr", "chatgpt-vs-accio-sourcing-agents"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="fr" pillar={getPillarFor("fr", "chatgpt-vs-accio-sourcing-agents")} />
    </I18nProvider>
  ),
});
