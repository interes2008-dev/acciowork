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

export interface OgResult {
  title: string;
  desc: string;
  img: { label: string; big: string; sub: string };
}

// Builds a personalized OG title/description from a shared ROI result, or null
// when there are no meaningful inputs (a plain visit keeps the static meta).
export function roiOg(search: RoiSearch, lang: RoiLang): OgResult | null {
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
  let sub = `${days} ${c.daysYear}`;
  if (search.m && search.r && search.r > 0) {
    const cur = search.cur && CURS.includes(search.cur) ? search.cur : "$";
    const moneyMonth = freed * 4.33 * search.r;
    const moneyYear = freed * 52 * search.r;
    desc = `${cur}${fmt(moneyMonth)} ${c.moneyMonth}, ${cur}${fmt(moneyYear)} ${c.moneyYear} · ${days} ${c.daysYear}`;
    sub = `${cur}${fmt(moneyMonth)} ${c.moneyMonth} · ${days} ${c.daysYear}`;
  }
  return { title, desc, img: { label: c.resultKicker, big: `${freed.toFixed(1)}h`, sub } };
}

export function roiOgImageUrl(search: RoiSearch, lang: RoiLang): string | null {
  if (!search.h) return null;
  const q = new URLSearchParams();
  q.set("t", "roi");
  q.set("l", lang);
  const put = (k: string, v: number | string | undefined) => {
    if (v !== undefined && v !== "") q.set(k, String(v));
  };
  put("h", search.h);
  put("o", search.o);
  put("r", search.r);
  put("cur", search.cur);
  put("m", search.m);
  return `https://acciowork.pro/api/og?${q.toString()}`;
}
