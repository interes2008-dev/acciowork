import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/ru/blog/china-import-risk-audit-landed-cost")({
  head: () => pillarHeadFor("ru", "china-import-risk-audit-landed-cost"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="ru" pillar={getPillarFor("ru", "china-import-risk-audit-landed-cost")} />
    </I18nProvider>
  ),
});
