import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/fr/blog/china-import-risk-audit-landed-cost")({
  head: () => pillarHeadFor("fr", "china-import-risk-audit-landed-cost"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="fr" pillar={getPillarFor("fr", "china-import-risk-audit-landed-cost")} />
    </I18nProvider>
  ),
});
