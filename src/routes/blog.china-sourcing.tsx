import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { SourcingHub } from "@/components/sourcing/PillarArticle";

const TITLE = "China Sourcing with AI Agents - Complete Playbook | Accio Work";
const DESC =
  "Five practical guides to sourcing in China with AI: vet real factories, negotiate lower MOQs, calculate landed cost and automate supplier operations.";

export const Route = createFileRoute("/blog/china-sourcing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://acciowork.pro/blog/china-sourcing" },
      { property: "og:image", content: "https://acciowork.pro/og/og-en.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://acciowork.pro/og/og-en.png" },
    ],
    links: [{ rel: "canonical", href: "https://acciowork.pro/blog/china-sourcing" }],
  }),
  component: () => (
    <I18nProvider>
      <SourcingHub />
    </I18nProvider>
  ),
});
