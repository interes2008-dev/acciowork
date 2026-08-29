import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { renderOg } from "@/lib/og-render";
import { validateDutySearch, dutyOg } from "@/lib/duty-og";
import { validateRoiSearch, roiOg } from "@/lib/roi-og";
import { validateQuizSearch, quizOg } from "@/lib/quiz-og";
import { validateScSearch, scOg } from "@/lib/scorecard-og";

const LANGS = ["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr"] as const;
type Lang = (typeof LANGS)[number];

// Dynamic image font covers Latin + Cyrillic. zh/hi fall back to the static
// branded OG (their text title/description stay fully localized).
const IMG_LANGS = new Set(["en", "ru", "de", "it", "es", "pt", "fr"]);

const FOOT: Record<string, string> = {
  duty: "acciowork.pro/duty",
  roi: "acciowork.pro/roi",
  quiz: "acciowork.pro/quiz",
  scorecard: "acciowork.pro/supplier-scorecard",
};

function card(tool: string, lang: Lang, params: Record<string, unknown>) {
  if (tool === "duty") return dutyOg(validateDutySearch(params), lang)?.img ?? null;
  if (tool === "roi") return roiOg(validateRoiSearch(params), lang)?.img ?? null;
  if (tool === "quiz") return quizOg(validateQuizSearch(params), lang)?.img ?? null;
  if (tool === "scorecard") return scOg(validateScSearch(params), lang)?.img ?? null;
  return null;
}

export const Route = createFileRoute("/api/og")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const params = Object.fromEntries(url.searchParams.entries());
        const tool = String(params.t ?? "");
        const lang = (LANGS as readonly string[]).includes(String(params.l)) ? (params.l as Lang) : "en";
        // Any failure degrades gracefully to the static branded OG image.
        const staticOg = `https://acciowork.pro/og/og-${lang}.png`;
        try {
          if (!IMG_LANGS.has(lang)) return Response.redirect(staticOg, 302);
          const img = card(tool, lang, params);
          if (!img) return Response.redirect(staticOg, 302);
          const wasmAbsolute = new URL("/resvg.wasm", url.origin).toString();
          const png = await renderOg({ ...img, foot: FOOT[tool] ?? "acciowork.pro" }, () => fetch(wasmAbsolute));
          return new Response(png as unknown as BodyInit, {
            headers: {
              "content-type": "image/png",
              "cache-control": "public, max-age=31536000, immutable",
            },
          });
        } catch {
          return Response.redirect(staticOg, 302);
        }
      },
    },
  },
});
