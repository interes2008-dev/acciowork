import { dutyChrome, type DutyLang } from "./duty-data";

export interface DutySearch {
  p?: number;
  u?: number;
  s?: number;
  d?: number;
  v?: number;
  sp?: number;
  dest?: string;
  cur?: string;
}

const CURS = ["$", "\u20AC", "\u00A3"];

function toNum(x: unknown): number | undefined {
  const n = typeof x === "number" ? x : parseFloat(String(x));
  return Number.isFinite(n) ? n : undefined;
}
function toStr(x: unknown): string | undefined {
  return typeof x === "string" && x ? x : undefined;
}

// Used as validateSearch: keeps only known keys, coerces types, never throws.
export function validateDutySearch(search: Record<string, unknown>): DutySearch {
  return {
    p: toNum(search.p),
    u: toNum(search.u),
    s: toNum(search.s),
    d: toNum(search.d),
    v: toNum(search.v),
    sp: toNum(search.sp),
    dest: toStr(search.dest),
    cur: toStr(search.cur),
  };
}

export interface OgResult {
  title: string;
  desc: string;
  img: { label: string; big: string; sub: string };
}

// Builds a personalized OG title/description from a shared result, or null when
// there are no meaningful inputs (a plain visit keeps the static meta).
export function dutyOg(search: DutySearch, lang: DutyLang): OgResult | null {
  if (search.p === undefined) return null;
  const c = dutyChrome[lang];
  const cost = Math.max(0, search.p);
  const units = Math.max(1, search.u ?? 1);
  const ship = Math.max(0, search.s ?? 0);
  const duty = Math.max(0, search.d ?? 0);
  const vat = Math.max(0, search.v ?? 0);
  const cur = search.cur && CURS.includes(search.cur) ? search.cur : "$";

  const value = cost * units;
  const dutyAmt = value * (duty / 100);
  const vatAmt = (value + ship + dutyAmt) * (vat / 100);
  const landedTotal = value + ship + dutyAmt + vatAmt;
  const landedUnit = landedTotal / units;
  const money = (n: number) =>
    `${cur}${n.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;

  const title = `${c.landedUnit}: ${money(landedUnit)}`;
  let desc = `${c.landedUnit}: ${money(landedUnit)}. ${c.metaDesc}`;
  let sub = `${c.dutyAmount}: ${money(dutyAmt)}`;
  if (typeof search.sp === "number" && search.sp > 0) {
    const marginPct = ((search.sp - landedUnit) / search.sp) * 100;
    desc = `${c.marginPct}: ${marginPct.toFixed(1)}% · ${c.landedUnit}: ${money(landedUnit)}`;
    sub = `${c.marginPct}: ${marginPct.toFixed(1)}%`;
  }
  return { title, desc, img: { label: c.landedUnit, big: money(landedUnit), sub } };
}

// Serializes the current inputs into the dynamic OG image endpoint URL.
export function dutyOgImageUrl(search: DutySearch, lang: DutyLang): string | null {
  if (search.p === undefined) return null;
  const q = new URLSearchParams();
  q.set("t", "duty");
  q.set("l", lang);
  const put = (k: string, v: number | string | undefined) => {
    if (v !== undefined && v !== "") q.set(k, String(v));
  };
  put("p", search.p);
  put("u", search.u);
  put("s", search.s);
  put("d", search.d);
  put("v", search.v);
  put("sp", search.sp);
  put("dest", search.dest);
  put("cur", search.cur);
  return `https://acciowork.pro/api/og?${q.toString()}`;
}
