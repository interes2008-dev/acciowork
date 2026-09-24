import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillar, pillarHead } from "@/lib/sourcing-pillars";

const pillar = getPillar("chatgpt-vs-accio-sourcing-agents")!;

export const Route = createFileRoute("/blog/chatgpt-vs-accio-sourcing-agents")({
  head: () => pillarHead(pillar),
  component: () => (
    <I18nProvider>
      <PillarArticle pillar={pillar} />
    </I18nProvider>
  ),
});
