import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { PillarArticle } from "@/components/sourcing/PillarArticle";
import { getPillarFor, pillarHeadFor } from "@/lib/sourcing-i18n";

export const Route = createFileRoute("/it/blog/how-to-find-verified-china-suppliers-ai")({
  head: () => pillarHeadFor("it", "how-to-find-verified-china-suppliers-ai"),
  component: () => (
    <I18nProvider>
      <PillarArticle lang="it" pillar={getPillarFor("it", "how-to-find-verified-china-suppliers-ai")} />
    </I18nProvider>
  ),
});
