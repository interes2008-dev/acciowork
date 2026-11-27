import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { WebinarsEventPage } from "@/components/events/WebinarsEventPage";
import { webinarsHead } from "@/lib/events-webinars";

export const Route = createFileRoute("/es/events/accio-live-webinars")({
  head: () => webinarsHead("es"),
  component: () => (
    <I18nProvider>
      <WebinarsEventPage lang="es" />
    </I18nProvider>
  ),
});
