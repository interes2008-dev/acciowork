import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/es/blog/chatgpt-vs-accio-sourcing-agents")({
  head: () => pillarHeadFor("es", "chatgpt-vs-accio-sourcing-agents"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="es" pillar={getPillarFor("es", "chatgpt-vs-accio-sourcing-agents")} />
    </I18nProvider>
  ),
});
