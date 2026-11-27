import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { WebinarsEventPage } from "@/components/events/WebinarsEventPage";
import { webinarsHead } from "@/lib/events-webinars";

export const Route = createFileRoute("/ru/events/accio-live-webinars")({
  head: () => webinarsHead("ru"),
  component: () => (
    <I18nProvider>
      <WebinarsEventPage lang="ru" />
    </I18nProvider>
  ),
});
