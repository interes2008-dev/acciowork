import { useState, useMemo, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Clock, Sparkles, Share2, Check } from "lucide-react";
import { roiChrome, type RoiLang } from "@/lib/roi-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const CURRENCIES = ["$", "€", "\u00A3", "\u20BD", "R$", "\u20B9", "\u00A5"];

const SHARE: Record<RoiLang, { share: string; copied: string }> = {
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

const IMG_ALT: Record<RoiLang, string> = {
  en: "A clock with an upward arrow and coins, saved time and money",
  ru: "Часы со стрелкой вверх и монетами, сэкономленные время и деньги",
  de: "Eine Uhr mit Aufwärtspfeil und Münzen, gesparte Zeit und Geld",
  it: "Un orologio con freccia in su e monete, tempo e denaro risparmiati",
  es: "Un reloj con flecha hacia arriba y monedas, tiempo y dinero ahorrados",
  zh: "带向上箭头和硬币的时钟，省下的时间与金钱",
  pt: "Um relógio com seta para cima e moedas, tempo e dinheiro poupados",
  hi: "ऊपर तीर और सिक्कों वाली घड़ी, बचा समय और पैसा",
  fr: "Une horloge avec flèche vers le haut et des pièces, temps et argent gagnés",
};

function homeHref(lang: RoiLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

function useCountUp(target: number, ms = 500) {
  const [val, setVal] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = from.current;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(start + (target - start) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else from.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return val;
}

function Slider({
  label, value, onChange, max, unit,
}: { label: string; value: number; onChange: (n: number) => void; max: number; unit: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-white/85">{label}</span>
        <span className="text-sm font-bold text-[#34d399]">{value} {unit}</span>
      </div>
      <input
        type="range" min={0} max={max} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#DDF7EE] accent-[#34d399]"
        style={{ accentColor: "#34d399" }}
      />
    </div>
  );
}

function Shell({ lang, children }: { lang: RoiLang; children: ReactNode }) {
  const c = roiChrome[lang];
  return (
    <div className="min-h-screen bg-[#070b14] text-[#e8eef9]">
      <header className="border-b border-white/10 bg-[#0a1120]/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
          <a href={homeHref(lang)} className="flex items-center gap-1.5 font-bold tracking-tight text-[#e8eef9]" style={{ fontSize: 22 }}>
            <svg width={21} height={22} viewBox="0 0 28 28" aria-hidden>
              <defs>
                <linearGradient id="accioTri" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0F172A" />
                  <stop offset="55%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#5eead4" />
                </linearGradient>
              </defs>
              <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTri)" />
            </svg>
            <span>Accio</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            <LangMenu lang={lang} />
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="whitespace-nowrap rounded-full bg-[#34d399] px-3 py-2 text-[13px] font-semibold text-white transition hover:brightness-110 sm:px-4 sm:text-sm">
            {c.cta}
          </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 bg-[#0a1120]">
        <div className="mx-auto max-w-4xl px-5 py-8 text-sm text-white/68">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1.5 hover:text-white/85">
            <ArrowLeft className="h-4 w-4" /> {homeHref(lang) === "/" ? "Home" : ""}
          </a>
        </div>
      </footer>
    </div>
  );
}

export function RoiCalculator({ lang }: { lang: RoiLang }) {
  const c = roiChrome[lang];
  const [hours, setHours] = useState<number[]>([6, 4, 5, 3]);
  const [offload, setOffload] = useState(60);
  const [showMoney, setShowMoney] = useState(false);
  const [rate, setRate] = useState<number>(25);
  const [cur, setCur] = useState("$");
  const [shared, setShared] = useState(false);
  const skipSync = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search);
    const h = q.get("h");
    if (h) {
      const arr = h.split("-").map((x) => parseFloat(x)).filter((n) => Number.isFinite(n) && n >= 0);
      if (arr.length) setHours((prev) => prev.map((v, i) => (i < arr.length ? arr[i] : v)));
    }
    const o = q.get("o");
    if (o !== null) { const n = parseInt(o, 10); if (Number.isFinite(n)) setOffload(Math.max(30, n)); }
    const r = q.get("r");
    if (r !== null) { const n = parseFloat(r); if (Number.isFinite(n)) setRate(n); }
    const cu = q.get("cur");
    if (cu && CURRENCIES.includes(cu)) setCur(cu);
    if (q.get("m") === "1") setShowMoney(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipSync.current) { skipSync.current = false; return; }
    const q = new URLSearchParams();
    q.set("h", hours.join("-"));
    q.set("o", String(offload));
    if (showMoney) { q.set("m", "1"); q.set("r", String(rate)); q.set("cur", cur); }
    window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
  }, [hours, offload, showMoney, rate, cur]);

  async function onShare() {
    if (typeof window === "undefined") return;
    const shareUrl = window.location.href;
    try {
      if (navigator.share) { await navigator.share({ title: roiChrome[lang].h1, url: shareUrl }); return; }
    } catch { /* cancelled */ }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);
      setTimeout(() => setShared(false), 1800);
    } catch { /* blocked */ }
  }

  const total = hours.reduce((a, b) => a + b, 0);
  const freed = useMemo(() => (total * offload) / 100, [total, offload]);
  const freedAnim = useCountUp(Math.round(freed * 10) / 10);
  const days = Math.round((freed * 52) / 8);
  const daysAnim = Math.round(useCountUp(days));
  const keepPct = total > 0 ? Math.round(((total - freed) / total) * 100) : 0;
  const agentPct = 100 - keepPct;

  const moneyMonth = Math.round(freed * 4.33 * (rate || 0));
  const moneyYear = Math.round(freed * 52 * (rate || 0));
  const fmt = (n: number) => n.toLocaleString(lang === "en" ? "en-US" : lang);

  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
        <p className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#34d399]">
          <Sparkles className="h-4 w-4" /> {c.kicker}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[40px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/75">{c.intro}</p>
        <img src="/img/tool-roi.webp" alt={IMG_ALT[lang]} width={800} height={800} loading="eager" className="mx-auto mt-6 w-full max-w-xs" />

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-3xl border border-white/12 bg-white/[0.03] p-6 sm:p-7">
            <div className="space-y-5">
              {c.tasks.map((t, i) => (
                <Slider key={i} label={t} value={hours[i]} max={40} unit={c.hoursUnit}
                  onChange={(n) => setHours((h) => h.map((v, j) => (j === i ? n : v)))} />
              ))}
            </div>
            <div className="mt-6 border-t border-white/12 pt-5">
              <Slider label={c.offload} value={offload} max={80} unit="%"
                onChange={(n) => setOffload(Math.max(30, n))} />
              <p className="mt-1.5 text-xs text-white/52">{c.offloadHint}</p>
            </div>
            <div className="mt-5 border-t border-white/12 pt-5">
              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white/75">
                <input type="checkbox" checked={showMoney} onChange={(e) => setShowMoney(e.target.checked)}
                  className="h-4 w-4 rounded accent-[#34d399]" style={{ accentColor: "#34d399" }} />
                {c.hourlyToggle}
              </label>
              {showMoney && (
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-sm text-white/68">{c.hourlyLabel}</span>
                  <select value={cur} onChange={(e) => setCur(e.target.value)}
                    className="rounded-lg border border-white/15 bg-white/[0.06] px-2 py-1.5 text-sm">
                    {CURRENCIES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input type="number" min={0} value={rate} onChange={(e) => setRate(Number(e.target.value))}
                    className="w-24 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1.5 text-sm" />
                  <span className="text-sm text-white/52">{c.perHour}</span>
                </div>
              )}
            </div>
          </div>

          {/* Result */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0a1120] to-[#0f2e26] p-6 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#5eead4]">{c.resultKicker}</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-bold tabular-nums">{freedAnim.toFixed(1)}</span>
              <span className="mb-2 text-lg text-white/70">{c.freedHours}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[#5eead4]">
              <Clock className="h-5 w-5" />
              <span className="text-xl font-semibold tabular-nums">{daysAnim}</span>
              <span className="text-white/70">{c.daysYear}</span>
            </div>

            {/* split bar */}
            <div className="mt-6">
              <div className="flex h-4 overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-white/25 transition-all duration-500" style={{ width: `${keepPct}%` }} />
                <div className="h-full bg-[#34d399] transition-all duration-500" style={{ width: `${agentPct}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/60">
                <span>{c.keep} {keepPct}%</span>
                <span className="text-[#5eead4]">{c.agent} {agentPct}%</span>
              </div>
            </div>

            {showMoney && rate > 0 && (
              <div className="mt-6 flex gap-6 border-t border-white/10 pt-5">
                <div>
                  <div className="text-2xl font-bold tabular-nums">{cur}{fmt(moneyMonth)}</div>
                  <div className="text-xs text-white/60">{c.moneyMonth}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold tabular-nums">{cur}{fmt(moneyYear)}</div>
                  <div className="text-xs text-white/60">{c.moneyYear}</div>
                </div>
              </div>
            )}

            <p className="mt-6 text-[15px] leading-relaxed text-white/85">
              {c.punch.replace("{days}", String(days))}
            </p>
            <button type="button" onClick={onShare}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
              {shared ? <Check className="h-4 w-4 text-[#5eead4]" /> : <Share2 className="h-4 w-4" />}
              {shared ? SHARE[lang].copied : SHARE[lang].share}
            </button>
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#34d399] px-6 py-3 font-semibold text-white transition hover:brightness-110">
              {c.cta} <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-2 text-center text-xs text-white/50">{c.ctaNote}</p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/52">{c.disclaimer}</p>
      </main>
    </Shell>
  );
}
