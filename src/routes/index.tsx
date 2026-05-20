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
          "Discover smarter opportunities with AI-powered workflows and premium productivity tools.",
      },
      {
        name: "keywords",
        content:
          "AI work, smarter work, productivity, remote work, AI tools, workflow optimization",
      },
      { property: "og:title", content: "Accio Work | AI-Powered Work Opportunities" },
      {
        property: "og:description",
        content:
          "Discover smarter opportunities with AI-powered workflows and premium productivity tools.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return <LandingPage />;
}
