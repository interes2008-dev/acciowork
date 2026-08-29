import { scChrome, scCriteria, scVerdicts, SC_MAX, type ScLang } from "./scorecard-data";

export interface ScSearch {
  a?: string;
}

export interface OgResult {
  title: string;
  desc: string;
  img: { label: string; big: string; sub: string };
}

function toStr(x: unknown): string | undefined {
  return typeof x === "string" && x ? x : undefined;
}

export function validateScSearch(search: Record<string, unknown>): ScSearch {
  return { a: toStr(search.a) };
}

// Recomputes the scorecard result from a shared answers string, or null when invalid.
export function scOg(search: ScSearch, lang: ScLang): OgResult | null {
  if (!search.a) return null;
  const idx = search.a.split("-").map((x) => parseInt(x, 10));
  if (idx.length !== scCriteria.length) return null;

  let score = 0;
  for (let i = 0; i < scCriteria.length; i++) {
    const opt = scCriteria[i].opts[idx[i]];
    if (!opt) return null;
    score += opt.s;
  }
  const pct = Math.round((score / SC_MAX) * 100);
  const tier = score >= scVerdicts.strong.min ? "strong" : score >= scVerdicts.caution.min ? "caution" : "risk";
  const c = scChrome[lang];
  const vTitle = scVerdicts[tier].title[lang];

  return {
    title: `${c.resultKicker}: ${pct}%`,
    desc: `${vTitle} · ${c.resultKicker}: ${pct}%. ${c.metaDesc}`.slice(0, 200),
    img: { label: c.resultKicker, big: `${pct}%`, sub: vTitle },
  };
}

export function scOgImageUrl(search: ScSearch, lang: ScLang): string | null {
  if (!search.a) return null;
  const q = new URLSearchParams();
  q.set("t", "scorecard");
  q.set("l", lang);
  q.set("a", search.a);
  return `https://acciowork.pro/api/og?${q.toString()}`;
}
