import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { WebinarsEventPage } from "@/components/events/WebinarsEventPage";
import { webinarsHead } from "@/lib/events-webinars";

export const Route = createFileRoute("/it/events/accio-live-webinars")({
  head: () => webinarsHead("it"),
  component: () => (
    <I18nProvider>
      <WebinarsEventPage lang="it" />
    </I18nProvider>
  ),
});
