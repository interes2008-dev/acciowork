import { roiChrome, type RoiLang } from "./roi-data";

export interface RoiSearch {
  h?: string;
  o?: number;
  r?: number;
  cur?: string;
  m?: number;
}

const CURS = ["$", "\u20AC", "\u00A3", "\u20BD", "R$", "\u20B9", "\u00A5"];

function toNum(x: unknown): number | undefined {
  const n = typeof x === "number" ? x : parseFloat(String(x));
  return Number.isFinite(n) ? n : undefined;
}
function toStr(x: unknown): string | undefined {
  return typeof x === "string" && x ? x : undefined;
}

export function validateRoiSearch(search: Record<string, unknown>): RoiSearch {
  return {
    h: toStr(search.h),
    o: toNum(search.o),
    r: toNum(search.r),
    cur: toStr(search.cur),
    m: toNum(search.m),
  };
}

// Builds a personalized OG title/description from a shared ROI result, or null
// when there are no meaningful inputs (a plain visit keeps the static meta).
export function roiOg(search: RoiSearch, lang: RoiLang): { title: string; desc: string } | null {
  if (!search.h) return null;
  const hours = search.h
    .split("-")
    .map((x) => parseFloat(x))
    .filter((n) => Number.isFinite(n) && n >= 0);
  const total = hours.reduce((a, b) => a + b, 0);
  if (total <= 0) return null;

  const c = roiChrome[lang];
  const offload = Math.min(80, Math.max(30, search.o ?? 60));
  const freed = (total * offload) / 100;
  const days = Math.round((freed * 52) / 8);
  const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

  const title = `${freed.toFixed(1)} ${c.freedHours}`;
  let desc = `${days} ${c.daysYear}. ${c.metaDesc}`;
  if (search.m && search.r && search.r > 0) {
    const cur = search.cur && CURS.includes(search.cur) ? search.cur : "$";
    const moneyMonth = freed * 4.33 * search.r;
    const moneyYear = freed * 52 * search.r;
    desc = `${cur}${fmt(moneyMonth)} ${c.moneyMonth}, ${cur}${fmt(moneyYear)} ${c.moneyYear} · ${days} ${c.daysYear}`;
  }
  return { title, desc };
}
