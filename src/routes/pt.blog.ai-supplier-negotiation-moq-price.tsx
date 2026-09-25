import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/pt/blog/ai-supplier-negotiation-moq-price")({
  head: () => pillarHeadFor("pt", "ai-supplier-negotiation-moq-price"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="pt" pillar={getPillarFor("pt", "ai-supplier-negotiation-moq-price")} />
    </I18nProvider>
  ),
});
