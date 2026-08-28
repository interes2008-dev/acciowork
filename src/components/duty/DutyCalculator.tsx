import { useState, useMemo, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, ShieldAlert, Share2, Check } from "lucide-react";
import { dutyChrome, dutyVatDefault, type DutyLang } from "@/lib/duty-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const CURRENCIES = ["$", "€", "\u00A3"];
type Dest = "US" | "EU" | "UK";

const SHARE: Record<DutyLang, { share: string; copied: string }> = {
  en: { share: "Share result", copied: "Link copied" },
  ru: { share: "Поделиться результатом", copied: "Ссылка скопирована" },
  de: { share: "Ergebnis teilen", copied: "Link kopiert" },
  it: { share: "Condividi risultato", copied: "Link copiato" },
  es: { share: "Compartir resultado", copied: "Enlace copiado" },
  zh: { share: "分享结果", copied: "链接已复制" },
  pt: { share: "Compartilhar resultado", copied: "Link copiado" },
  hi: { share: "परिणाम शेयर करें", copied: "लिंक कॉपी हो गया" },
  fr: { share: "Partager le résultat", copied: "Lien copié" },
};

function homeHref(lang: DutyLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

function Shell({ lang, children }: { lang: DutyLang; children: ReactNode }) {
  const c = dutyChrome[lang];
  return (
    <div className="min-h-screen bg-[#FBFCFD] text-[#0E1210]">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <a href={homeHref(lang)} className="flex items-center gap-1.5 font-bold tracking-tight text-[#0E1210]" style={{ fontSize: 22 }}>
            <svg width={21} height={22} viewBox="0 0 28 28" aria-hidden>
              <defs>
                <linearGradient id="accioTri" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0F172A" />
                  <stop offset="55%" stopColor="#17B26A" />
                  <stop offset="100%" stopColor="#7CE7C2" />
                </linearGradient>
              </defs>
              <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTri)" />
            </svg>
            <span>Accio</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <LangMenu lang={lang} />
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
              className="whitespace-nowrap rounded-full bg-[#17B26A] px-3 py-2 text-[13px] font-semibold text-white transition hover:brightness-110 sm:px-4 sm:text-sm">
              {c.cta}
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-8 text-sm text-black/60">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1.5 hover:text-black/80">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-black/70">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs leading-relaxed text-black/45">{hint}</span>}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-black/12 bg-white px-3.5 py-2.5 text-[15px] text-[#0E1210] focus:border-[#17B26A]/60 focus:outline-none";

export function DutyCalculator({ lang }: { lang: DutyLang }) {
  const c = dutyChrome[lang];
  const [cur, setCur] = useState("$");
  const [dest, setDest] = useState<Dest>("US");
  const [cost, setCost] = useState(8);
  const [units, setUnits] = useState(100);
  const [ship, setShip] = useState(120);
  const [duty, setDuty] = useState(25);
  const [vat, setVat] = useState<number>(dutyVatDefault.US);
  const [sell, setSell] = useState<number | "">("");

  const [shared, setShared] = useState(false);
  const skipSync = useRef(true);

  function pickDest(d: Dest) {
    setDest(d);
    setVat(dutyVatDefault[d]);
  }

  // Hydrate inputs from the URL so a shared link reopens the same result.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search);
    const setNum = (k: string, fn: (n: number) => void, int = false) => {
      const v = q.get(k);
      if (v === null || v === "") return;
      const n = int ? parseInt(v, 10) : parseFloat(v);
      if (!Number.isNaN(n)) fn(n);
    };
    const cu = q.get("cur");
    if (cu && CURRENCIES.includes(cu)) setCur(cu);
    const dst = q.get("dest");
    if (dst === "US" || dst === "EU" || dst === "UK") setDest(dst);
    setNum("p", setCost);
    setNum("u", setUnits, true);
    setNum("s", setShip);
    setNum("d", setDuty, true);
    setNum("v", setVat, true);
    setNum("sp", (n) => setSell(n));
  }, []);

  // Keep the URL in sync so it always reflects the current result.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipSync.current) {
      skipSync.current = false;
      return;
    }
    const q = new URLSearchParams();
    q.set("p", String(cost));
    q.set("u", String(units));
    q.set("s", String(ship));
    q.set("d", String(duty));
    q.set("v", String(vat));
    q.set("dest", dest);
    q.set("cur", cur);
    if (typeof sell === "number" && sell > 0) q.set("sp", String(sell));
    window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
  }, [cost, units, ship, duty, vat, dest, cur, sell]);

  async function onShare() {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const title = dutyChrome[lang].h1;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
    } catch {
      /* user cancelled or unsupported, fall back to copy */
    }
    try {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 1800);
    } catch {
      /* clipboard blocked */
    }
  }

  const r = useMemo(() => {
    const value = Math.max(0, cost) * Math.max(1, units);
    const dutyAmt = value * (Math.max(0, duty) / 100);
    const vatBase = value + Math.max(0, ship) + dutyAmt;
    const vatAmt = vatBase * (Math.max(0, vat) / 100);
    const landedTotal = value + Math.max(0, ship) + dutyAmt + vatAmt;
    const landedUnit = landedTotal / Math.max(1, units);
    const hasSell = typeof sell === "number" && sell > 0;
    const marginUnit = hasSell ? (sell as number) - landedUnit : 0;
    const marginPct = hasSell ? (marginUnit / (sell as number)) * 100 : 0;
    let tier: "healthy" | "tight" | "under" | "none" = "none";
    if (hasSell) tier = marginPct >= 25 ? "healthy" : marginPct >= 5 ? "tight" : "under";
    return { dutyAmt, vatAmt, landedTotal, landedUnit, hasSell, marginUnit, marginPct, tier };
  }, [cost, units, ship, duty, vat, sell]);

  const money = (n: number) =>
    `${cur}${n.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;

  const verdict = {
    healthy: { t: c.vHealthyT, b: c.vHealthyB, cls: "border-[#17B26A]/30 bg-[#F3FBF7]" },
    tight: { t: c.vTightT, b: c.vTightB, cls: "border-amber-300/50 bg-amber-50" },
    under: { t: c.vUnderT, b: c.vUnderB, cls: "border-red-300/50 bg-red-50" },
    none: { t: c.vNoneT, b: c.vNoneB, cls: "border-black/10 bg-white" },
  }[r.tier];

  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[38px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">{c.intro}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Field label={c.productCost}>
                  <div className="flex items-center gap-2">
                    <select value={cur} onChange={(e) => setCur(e.target.value)}
                      className="rounded-xl border border-black/12 bg-white px-2 py-2.5 text-[15px] focus:outline-none">
                      {CURRENCIES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <input type="number" min={0} value={cost}
                      onChange={(e) => setCost(parseFloat(e.target.value) || 0)} className={inputCls} />
                  </div>
                </Field>
                <Field label={c.units}>
                  <input type="number" min={1} value={units}
                    onChange={(e) => setUnits(parseInt(e.target.value) || 0)} className={inputCls} />
                </Field>
              </div>

              <Field label={c.shipping}>
                <input type="number" min={0} value={ship}
                  onChange={(e) => setShip(parseFloat(e.target.value) || 0)} className={inputCls} />
              </Field>

              <Field label={c.destination}>
                <div className="flex gap-2">
                  {(["US", "EU", "UK"] as Dest[]).map((d) => (
                    <button key={d} onClick={() => pickDest(d)}
                      className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                        dest === d ? "border-[#17B26A] bg-[#F3FBF7] text-[#0E1210]" : "border-black/12 text-black/70 hover:border-[#17B26A]/40"
                      }`}>
                      {d === "US" ? c.dUS : d === "EU" ? c.dEU : c.dUK}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label={`${c.dutyRate}: ${duty}%`} hint={c.dutyHint}>
                <input type="range" min={0} max={150} step={1} value={duty}
                  onChange={(e) => setDuty(parseInt(e.target.value))}
                  className="w-full accent-[#17B26A]" />
              </Field>

              <Field label={`${c.importTax}: ${vat}%`} hint={c.importHint}>
                <input type="range" min={0} max={30} step={1} value={vat}
                  onChange={(e) => setVat(parseInt(e.target.value))}
                  className="w-full accent-[#17B26A]" />
              </Field>

              <Field label={c.sellPrice}>
                <div className="flex items-center gap-2">
                  <span className="text-black/50">{cur}</span>
                  <input type="number" min={0} value={sell}
                    onChange={(e) => setSell(e.target.value === "" ? "" : parseFloat(e.target.value) || 0)}
                    className={inputCls} />
                </div>
              </Field>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
              <dl className="space-y-3 text-[15px]">
                <div className="flex items-baseline justify-between">
                  <dt className="text-black/60">{c.dutyAmount}</dt>
                  <dd className="font-semibold">{money(r.dutyAmt)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-black/60">{c.importAmount}</dt>
                  <dd className="font-semibold">{money(r.vatAmt)}</dd>
                </div>
                <div className="flex items-baseline justify-between border-t border-black/5 pt-3">
                  <dt className="text-black/60">{c.landedTotal}</dt>
                  <dd className="font-semibold">{money(r.landedTotal)}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="font-medium text-[#0E1210]">{c.landedUnit}</dt>
                  <dd className="text-2xl font-bold text-[#17B26A]">{money(r.landedUnit)}</dd>
                </div>
                {r.hasSell && (
                  <div className="mt-2 grid grid-cols-2 gap-3 border-t border-black/5 pt-3">
                    <div>
                      <dt className="text-xs text-black/50">{c.marginUnit}</dt>
                      <dd className={`text-lg font-bold ${r.marginUnit >= 0 ? "text-[#0E1210]" : "text-red-600"}`}>{money(r.marginUnit)}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-black/50">{c.marginPct}</dt>
                      <dd className={`text-lg font-bold ${r.marginPct >= 0 ? "text-[#0E1210]" : "text-red-600"}`}>{r.marginPct.toFixed(1)}%</dd>
                    </div>
                  </div>
                )}
              </dl>
              <button
                type="button"
                onClick={onShare}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-4 py-2 text-sm font-semibold text-[#0E1210] transition hover:border-[#17B26A]/50"
              >
                {shared ? <Check className="h-4 w-4 text-[#17B26A]" /> : <Share2 className="h-4 w-4" />}
                {shared ? SHARE[lang].copied : SHARE[lang].share}
              </button>
            </div>

            <div className={`rounded-3xl border p-5 sm:p-6 ${verdict.cls}`}>
              <h2 className="text-lg font-semibold">{verdict.t}</h2>
              <p className="mt-1.5 text-[15px] leading-relaxed text-black/70">{verdict.b}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#0E1210] to-[#123A2A] p-7 text-center sm:p-9">
          <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-white/85">{c.ctaLine}</p>
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#17B26A] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
            {c.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-white/50">{c.ctaNote}</p>
        </div>

        <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-black/45">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-black/35" />
          <p>{c.disclaimer}</p>
        </div>
      </main>
    </Shell>
  );
}
