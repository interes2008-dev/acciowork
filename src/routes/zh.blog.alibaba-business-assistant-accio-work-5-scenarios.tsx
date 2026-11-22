import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { ZhSellerArticle } from "@/components/news/ZhSellerArticle";
import { zhSellerHead } from "@/lib/news-zh-sellers";

export const Route = createFileRoute("/zh/blog/alibaba-business-assistant-accio-work-5-scenarios")({
  head: () => zhSellerHead("alibaba-business-assistant-accio-work-5-scenarios"),
  component: () => (
    <I18nProvider>
      <ZhSellerArticle slug="alibaba-business-assistant-accio-work-5-scenarios" />
    </I18nProvider>
  ),
});
