import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/zh/blog/china-import-risk-audit-landed-cost")({
  head: () => pillarHeadFor("zh", "china-import-risk-audit-landed-cost"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="zh" pillar={getPillarFor("zh", "china-import-risk-audit-landed-cost")} />
    </I18nProvider>
  ),
});
