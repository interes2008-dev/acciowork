import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillar, pillarHead } from "@/lib/sourcing-pillars";

const pillar = getPillar("case-study-sourcing-electronics-48-hours")!;

export const Route = createFileRoute("/blog/case-study-sourcing-electronics-48-hours")({
  head: () => pillarHead(pillar),
  component: () => (
    <I18nProvider>
      <PillarArticle pillar={pillar} />
    </I18nProvider>
  ),
});
