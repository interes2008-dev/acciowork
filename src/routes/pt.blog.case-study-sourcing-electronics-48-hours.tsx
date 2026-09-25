import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/pt/blog/case-study-sourcing-electronics-48-hours")({
  head: () => pillarHeadFor("pt", "case-study-sourcing-electronics-48-hours"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="pt" pillar={getPillarFor("pt", "case-study-sourcing-electronics-48-hours")} />
    </I18nProvider>
  ),
});
