import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { WebinarsEventPage } from "@/components/events/WebinarsEventPage";
import { webinarsHead } from "@/lib/events-webinars";

export const Route = createFileRoute("/zh/events/accio-live-webinars")({
  head: () => webinarsHead("zh"),
  component: () => (
    <I18nProvider>
      <WebinarsEventPage lang="zh" />
    </I18nProvider>
  ),
});
