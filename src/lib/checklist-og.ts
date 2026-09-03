import { chChrome, chTasks, type ChLang } from "./checklist-data";

export interface ChSearch {
  tk?: string;
}

export interface OgResult {
  title: string;
  desc: string;
  img: { label: string; big: string; sub: string };
}

function toStr(x: unknown): string | undefined {
  return typeof x === "string" && x ? x : undefined;
}

export function validateChSearch(search: Record<string, unknown>): ChSearch {
  return { tk: toStr(search.tk) };
}

// Recomputes reclaimed hours from a shared checklist, or null when empty/invalid.
export function chOg(search: ChSearch, lang: ChLang): OgResult | null {
  if (!search.tk) return null;
  const idx = search.tk
    .split("-")
    .map((x) => parseInt(x, 10))
    .filter((n) => Number.isInteger(n) && n >= 0 && n < chTasks.length);
  if (idx.length === 0) return null;
  const uniq = Array.from(new Set(idx));
  const reclaim = uniq.reduce((s, i) => s + chTasks[i].h, 0);
  if (reclaim <= 0) return null;
  const c = chChrome[lang];
  const hours = reclaim % 1 === 0 ? String(reclaim) : reclaim.toFixed(1);
  const days = Math.round((reclaim * 12) / 8);

  return {
    title: `${c.resultKicker}: ${hours}h`,
    desc: `${c.resultKicker}: ${hours}h/mo, ${days} ${c.daysUnit}. ${c.metaDesc}`.slice(0, 200),
    img: { label: c.resultKicker, big: `${hours}h`, sub: `${uniq.length} / ${chTasks.length} · ${days} ${c.daysUnit}` },
  };
}

export function chOgImageUrl(search: ChSearch, lang: ChLang): string | null {
  if (!search.tk) return null;
  const q = new URLSearchParams();
  q.set("t", "checklist");
  q.set("l", lang);
  q.set("tk", search.tk);
  return `https://acciowork.pro/api/og?${q.toString()}`;
}
