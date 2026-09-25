import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/zh/blog/ai-supplier-negotiation-moq-price")({
  head: () => pillarHeadFor("zh", "ai-supplier-negotiation-moq-price"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="zh" pillar={getPillarFor("zh", "ai-supplier-negotiation-moq-price")} />
    </I18nProvider>
  ),
});
