import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/blog/china-import-risk-audit-landed-cost")({
  head: () => pillarHeadFor("en", "china-import-risk-audit-landed-cost"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="en" pillar={getPillarFor("en", "china-import-risk-audit-landed-cost")} />
    </I18nProvider>
  ),
});
