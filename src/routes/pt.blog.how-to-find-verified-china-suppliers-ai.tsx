import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/pt/blog/how-to-find-verified-china-suppliers-ai")({
  head: () => pillarHeadFor("pt", "how-to-find-verified-china-suppliers-ai"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="pt" pillar={getPillarFor("pt", "how-to-find-verified-china-suppliers-ai")} />
    </I18nProvider>
  ),
});
