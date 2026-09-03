import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { listAllPublishedForSitemap } from "@/lib/blog.functions";

const BASE_URL = "https://acciowork.pro";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
  alternates?: { hreflang: string; href: string }[];
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const alternates = [
          { hreflang: "en", href: `${BASE_URL}/` },
          { hreflang: "ru", href: `${BASE_URL}/ru` },
          { hreflang: "de", href: `${BASE_URL}/de` },
          { hreflang: "it", href: `${BASE_URL}/it` },
          { hreflang: "es", href: `${BASE_URL}/es` },
          { hreflang: "zh", href: `${BASE_URL}/zh` },
          { hreflang: "pt", href: `${BASE_URL}/pt` },
          { hreflang: "hi", href: `${BASE_URL}/hi` },
          { hreflang: "fr", href: `${BASE_URL}/fr` },
          { hreflang: "x-default", href: `${BASE_URL}/` },
        ];
        const SLANGS = ["en","ru","de","it","es","zh","pt","hi","fr"];
        const alts = (suffix: string) => {
          const list = SLANGS.map((l) => ({ hreflang: l, href: `${BASE_URL}${l === "en" ? "" : "/" + l}${suffix}` }));
          list.push({ hreflang: "x-default", href: `${BASE_URL}${suffix}` });
          return list;
        };
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0", alternates },
          { path: "/ru", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/de", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/it", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/es", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/zh", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/pt", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/hi", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/fr", changefreq: "weekly", priority: "0.9", alternates },
          { path: "/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/ru/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/de/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/it/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/es/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/zh/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/pt/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/hi/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
          { path: "/fr/blog", changefreq: "daily", priority: "0.8", alternates: alts("/blog") },
        ];

        const compareLangs = ["", "/ru", "/de", "/it", "/es", "/zh", "/pt", "/hi", "/fr"];
        const competitors = ["chatgpt", "manus", "genspark", "operator", "devin"];
        for (const l of compareLangs) {
          entries.push({ path: `${l}/compare`, changefreq: "weekly", priority: "0.7", alternates: alts("/compare") });
          for (const cmp of competitors) {
            entries.push({ path: `${l}/compare/${cmp}`, changefreq: "monthly", priority: "0.7", alternates: alts(`/compare/${cmp}`) });
          }
        }

        const useCases = ["dropshipping", "sourcing", "content", "market-research", "automation", "custom-tools"];
        for (const l of compareLangs) {
          entries.push({ path: `${l}/for`, changefreq: "weekly", priority: "0.7", alternates: alts("/for") });
          for (const uc of useCases) {
            entries.push({ path: `${l}/for/${uc}`, changefreq: "monthly", priority: "0.7", alternates: alts(`/for/${uc}`) });
          }
        }

        const guides = ["getting-started", "first-task", "connect-apps", "automations"];
        for (const l of compareLangs) {
          entries.push({ path: `${l}/guide`, changefreq: "weekly", priority: "0.7", alternates: alts("/guide") });
          for (const g of guides) {
            entries.push({ path: `${l}/guide/${g}`, changefreq: "monthly", priority: "0.7", alternates: alts(`/guide/${g}`) });
          }
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/reviews`, changefreq: "weekly", priority: "0.7", alternates: alts("/reviews") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/roi`, changefreq: "monthly", priority: "0.7", alternates: alts("/roi") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/quiz`, changefreq: "monthly", priority: "0.7", alternates: alts("/quiz") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/templates`, changefreq: "monthly", priority: "0.7", alternates: alts("/templates") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/duty`, changefreq: "monthly", priority: "0.7", alternates: alts("/duty") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/de-minimis`, changefreq: "monthly", priority: "0.7", alternates: alts("/de-minimis") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/tiktok-shop`, changefreq: "monthly", priority: "0.7", alternates: alts("/tiktok-shop") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/ai-prompts`, changefreq: "monthly", priority: "0.7", alternates: alts("/ai-prompts") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/supplier-scorecard`, changefreq: "monthly", priority: "0.7", alternates: alts("/supplier-scorecard") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/ai-agent-tasks`, changefreq: "monthly", priority: "0.7", alternates: alts("/ai-agent-tasks") });
        }

        for (const l of compareLangs) {
          entries.push({ path: `${l}/events/free-forever`, changefreq: "monthly", priority: "0.6", alternates: alts("/events/free-forever") });
        }

        try {
          const articles = await listAllPublishedForSitemap();
          for (const a of articles) {
            const prefix =
              a.lang === "ru"
                ? "/ru/blog"
                : a.lang === "de"
                  ? "/de/blog"
                  : a.lang === "it"
                    ? "/it/blog"
                    : a.lang === "es"
                      ? "/es/blog"
                        : a.lang === "zh"
                          ? "/zh/blog"
                          : a.lang === "pt"
                            ? "/pt/blog"
                            : a.lang === "hi"
                              ? "/hi/blog"
                              : a.lang === "fr"
                                ? "/fr/blog"
                                : "/blog";
            entries.push({ path: `${prefix}/${a.slug}`, changefreq: "monthly", priority: "0.7" });
          }
        } catch {
          // sitemap should still render even if the DB read fails
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            ...(e.alternates ?? []).map(
              (a) =>
                `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`,
            ),
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});