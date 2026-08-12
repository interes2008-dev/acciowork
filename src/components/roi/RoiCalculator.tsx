import { useState, useMemo, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Clock, Sparkles } from "lucide-react";
import { roiChrome, type RoiLang } from "@/lib/roi-data";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const CURRENCIES = ["$", "€", "\u00A3", "\u20BD", "R$", "\u20B9", "\u00A5"];

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
        <span className="text-sm font-medium text-black/80">{label}</span>
        <span className="text-sm font-bold text-[#17B26A]">{value} {unit}</span>
      </div>
      <input
        type="range" min={0} max={max} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#DDF7EE] accent-[#17B26A]"
        style={{ accentColor: "#17B26A" }}
      />
    </div>
  );
}

function Shell({ lang, children }: { lang: RoiLang; children: ReactNode }) {
  const c = roiChrome[lang];
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
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="rounded-full bg-[#17B26A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110">
            {c.cta}
          </a>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-8 text-sm text-black/60">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1.5 hover:text-black/80">
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
        <p className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">
          <Sparkles className="h-4 w-4" /> {c.kicker}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[40px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">{c.intro}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7">
            <div className="space-y-5">
              {c.tasks.map((t, i) => (
                <Slider key={i} label={t} value={hours[i]} max={40} unit={c.hoursUnit}
                  onChange={(n) => setHours((h) => h.map((v, j) => (j === i ? n : v)))} />
              ))}
            </div>
            <div className="mt-6 border-t border-black/10 pt-5">
              <Slider label={c.offload} value={offload} max={80} unit="%"
                onChange={(n) => setOffload(Math.max(30, n))} />
              <p className="mt-1.5 text-xs text-black/45">{c.offloadHint}</p>
            </div>
            <div className="mt-5 border-t border-black/10 pt-5">
              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-black/70">
                <input type="checkbox" checked={showMoney} onChange={(e) => setShowMoney(e.target.checked)}
                  className="h-4 w-4 rounded accent-[#17B26A]" style={{ accentColor: "#17B26A" }} />
                {c.hourlyToggle}
              </label>
              {showMoney && (
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-sm text-black/60">{c.hourlyLabel}</span>
                  <select value={cur} onChange={(e) => setCur(e.target.value)}
                    className="rounded-lg border border-black/15 bg-white px-2 py-1.5 text-sm">
                    {CURRENCIES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input type="number" min={0} value={rate} onChange={(e) => setRate(Number(e.target.value))}
                    className="w-24 rounded-lg border border-black/15 bg-white px-3 py-1.5 text-sm" />
                  <span className="text-sm text-black/45">{c.perHour}</span>
                </div>
              )}
            </div>
          </div>

          {/* Result */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0E1210] to-[#123A2A] p-6 text-white sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7CE7C2]">{c.resultKicker}</p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-bold tabular-nums">{freedAnim.toFixed(1)}</span>
              <span className="mb-2 text-lg text-white/70">{c.freedHours}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-[#7CE7C2]">
              <Clock className="h-5 w-5" />
              <span className="text-xl font-semibold tabular-nums">{daysAnim}</span>
              <span className="text-white/70">{c.daysYear}</span>
            </div>

            {/* split bar */}
            <div className="mt-6">
              <div className="flex h-4 overflow-hidden rounded-full bg-white/10">
                <div className="h-full bg-white/25 transition-all duration-500" style={{ width: `${keepPct}%` }} />
                <div className="h-full bg-[#17B26A] transition-all duration-500" style={{ width: `${agentPct}%` }} />
              </div>
              <div className="mt-2 flex justify-between text-xs text-white/60">
                <span>{c.keep} {keepPct}%</span>
                <span className="text-[#7CE7C2]">{c.agent} {agentPct}%</span>
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
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#17B26A] px-6 py-3 font-semibold text-white transition hover:brightness-110">
              {c.cta} <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-2 text-center text-xs text-white/50">{c.ctaNote}</p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-black/45">{c.disclaimer}</p>
      </main>
    </Shell>
  );
}
