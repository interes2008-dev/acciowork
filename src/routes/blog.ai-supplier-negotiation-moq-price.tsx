import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillar, pillarHead } from "@/lib/sourcing-pillars";

const pillar = getPillar("ai-supplier-negotiation-moq-price")!;

export const Route = createFileRoute("/blog/ai-supplier-negotiation-moq-price")({
  head: () => pillarHead(pillar),
  component: () => (
    <I18nProvider>
      <PillarArticle pillar={pillar} />
    </I18nProvider>
  ),
});
