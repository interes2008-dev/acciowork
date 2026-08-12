import { createFileRoute } from "@tanstack/react-router";
import { FitQuiz } from "@/components/quiz/FitQuiz";
import { qzChrome } from "@/lib/quiz-data";

const LANG = "pt" as const;
const LANGS = ["en","ru","de","it","es","zh","pt","hi","fr"] as const;

export const Route = createFileRoute("/pt/quiz")({
  head: () => {
    const c = qzChrome[LANG];
    const url = "https://acciowork.pro/pt/quiz";
    const alternates = LANGS.map((l) => ({ rel: "alternate", hrefLang: l, href: `https://acciowork.pro${l === "en" ? "" : "/" + l}/quiz` }));
    alternates.push({ rel: "alternate", hrefLang: "x-default", href: "https://acciowork.pro/quiz" });
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDesc },
        { name: "keywords", content: "Accio Work fit, is Accio Work right for me, AI agent quiz, cross border e-commerce" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDesc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "Accio Work" },
        { property: "og:image", content: "https://acciowork.pro/og/og-pt.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDesc },
        { name: "twitter:image", content: "https://acciowork.pro/og/og-pt.png" },
      ],
      links: [{ rel: "canonical", href: url }, ...alternates],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({ "@context":"https://schema.org","@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"Accio Work",item:"https://acciowork.pro/pt/"},{"@type":"ListItem",position:2,name:c.h1,item:url}] }) },
      ],
    };
  },
  component: () => <FitQuiz lang={LANG} />,
});
