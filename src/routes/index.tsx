import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Accio Work | AI-Powered Work Opportunities" },
      {
        name: "description",
        content:
          "Research markets, compare suppliers, generate content and automate workflows with Accio Work — your AI workspace for smarter business work.",
      },
      {
        name: "keywords",
        content:
          "Accio Work, AI sourcing, supplier search, market research, AI workflows, product discovery, business automation",
      },
      { property: "og:title", content: "Accio Work | AI-Powered Work Opportunities" },
      {
        property: "og:description",
        content:
          "Research markets, compare suppliers, generate content and automate workflows with Accio Work — your AI workspace for smarter business work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
