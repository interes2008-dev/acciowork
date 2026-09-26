import { PILLARS, type Pillar } from "@/lib/sourcing-pillars";
import ru from "@/lib/pillars-i18n/ru.json";
import de from "@/lib/pillars-i18n/de.json";
import it from "@/lib/pillars-i18n/it.json";
import es from "@/lib/pillars-i18n/es.json";
import zh from "@/lib/pillars-i18n/zh.json";
import pt from "@/lib/pillars-i18n/pt.json";
import hi from "@/lib/pillars-i18n/hi.json";
import fr from "@/lib/pillars-i18n/fr.json";
import ar from "@/lib/pillars-i18n/ar.json";

export const EN_UI = {
  copied: "Copied",
  copyPrompt: "Copy prompt",
  suppliersPer: "Suppliers contacted per product",
  rounds: "Sourcing rounds per month",
  hourly: "Your hourly value",
  timeSaved: "Estimated time saved per month",
  hoursShort: "h",
  worth: "Worth about",
  perMonth: "/mo",
  savingsNote:
    "Estimate: ~1.5 h manual work per supplier + 6 h setup vs. ~6 min review per supplier with an agent.",
  exw: "EXW price / unit",
  qty: "Quantity",
  freight: "Freight total",
  duty: "Duty rate",
  fees: "Brokerage + port fees",
  landedUnit: "Landed cost per unit",
  total: "Total",
  thats: "that's",
  onTop: "on top of EXW.",
  landedNote: "Includes 0.8% insurance and 3% payment fees. Duty rates change - confirm with your broker.",
  freeStart: "Free to start",
  ctaTitle: "Delegate your first China sourcing task for free tonight",
  ctaText: "Paste one prompt. Wake up to a vetted supplier shortlist, RFQs sent and quotes in a spreadsheet.",
  ctaBtn: "Start free with Accio Work",
  hub: "China Sourcing Hub",
  part: "Part",
  of5: "of 5",
  minRead: "min read",
  min: "min",
  newWay: "The new way: one prompt to an AI agent team",
  promptGiven: "Prompt given to Accio Work",
  handsBack: "What the agent hands back",
  cols: ["Supplier", "Factory type", "Price tier", "MOQ", "Certifications", "Risk"],
  stepByStep: "Step-by-step: apply this today",
  quickCopy: "Quick-copy prompts",
  landedCalc: "Landed cost calculator",
  savingsCalc: "Sourcing time-savings calculator",
  faq: "FAQ",
  more: "More from the China Sourcing series",
  hubTitle: "Sourcing in China with AI agents: the complete playbook",
  hubLede:
    "Five deep-dive guides on vetting factories, negotiating MOQs, calculating landed cost and running real sourcing workflows with an AI agent team backed by Alibaba data - 400M+ products and 1.5M+ verified suppliers.",
  hubSeoTitle: "China Sourcing with AI Agents - Complete Playbook | Accio Work",
  hubDesc:
    "Five practical guides to sourcing in China with AI: vet real factories, negotiate lower MOQs, calculate landed cost and automate supplier operations.",
};
export type SourcingUi = typeof EN_UI;

export const SOURCING_LANGS = ["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr", "ar"] as const;
export type SourcingLang = (typeof SOURCING_LANGS)[number];

const DATA: Record<string, { ui: SourcingUi; pillars: Pillar[] }> = {
  en: { ui: EN_UI, pillars: PILLARS },
  ru: ru as never,
  de: de as never,
  it: it as never,
  es: es as never,
  zh: zh as never,
  pt: pt as never,
  hi: hi as never,
  fr: fr as never,
  ar: ar as never,
};

export const langPrefix = (lang: string) => (lang === "en" ? "" : `/${lang}`);
export const sourcingUi = (lang: string) => DATA[lang]?.ui ?? EN_UI;
export const pillarsFor = (lang: string) => DATA[lang]?.pillars ?? PILLARS;
export const getPillarFor = (lang: string, slug: string) =>
  pillarsFor(lang).find((p) => p.slug === slug)!;

const altLinks = (path: string) => [
  ...SOURCING_LANGS.map((l) => ({
    rel: "alternate",
    hreflang: l,
    href: `https://acciowork.pro${langPrefix(l)}${path}`,
  })),
  { rel: "alternate", hreflang: "x-default", href: `https://acciowork.pro${path}` },
];

const ogImg = (lang: string) => `https://acciowork.pro/og/og-${lang}.png`;

export function pillarHeadFor(lang: string, slug: string) {
  const p = getPillarFor(lang, slug);
  const url = `https://acciowork.pro${langPrefix(lang)}/blog/${p.slug}`;
  const img = ogImg(lang);
  return {
    meta: [
      { title: p.seoTitle },
      { name: "description", content: p.description },
      { name: "keywords", content: p.keywords.join(", ") },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Accio Work" },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.title },
      { name: "twitter:description", content: p.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }, ...altLinks(`/blog/${p.slug}`)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          inLanguage: lang,
          image: img,
          datePublished: "2026-09-24",
          dateModified: "2026-09-25",
          keywords: p.keywords.join(", "),
          timeRequired: `PT${p.readingMinutes}M`,
          author: { "@type": "Organization", name: "Accio Work", url: "https://acciowork.pro" },
          publisher: {
            "@type": "Organization",
            name: "Accio Work",
            logo: { "@type": "ImageObject", url: "https://acciowork.pro/favicon.svg" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  };
}

export function hubHeadFor(lang: string) {
  const u = sourcingUi(lang);
  const url = `https://acciowork.pro${langPrefix(lang)}/blog/china-sourcing`;
  const img = ogImg(lang);
  return {
    meta: [
      { title: u.hubSeoTitle },
      { name: "description", content: u.hubDesc },
      { property: "og:title", content: u.hubSeoTitle },
      { property: "og:description", content: u.hubDesc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }, ...altLinks("/blog/china-sourcing")],
  };
}
