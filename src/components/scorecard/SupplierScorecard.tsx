import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, ShieldCheck, ShieldAlert, ShieldQuestion, Share2, Check, Info } from "lucide-react";
import { scChrome, scCriteria, scVerdicts, SC_MAX, type ScLang } from "@/lib/scorecard-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const IMG_ALT: Record<ScLang, string> = {
  en: "A magnifying glass over shipping boxes with a verified supplier tag",
  ru: "Лупа над коробками с биркой проверенного поставщика",
  de: "Eine Lupe über Versandkartons mit einem geprüften Lieferanten-Tag",
  it: "Una lente su scatole con un'etichetta fornitore verificato",
  es: "Una lupa sobre cajas con una etiqueta de proveedor verificado",
  zh: "放大镜照在包裹上，附已核验供应商标签",
  pt: "Uma lupa sobre caixas com uma etiqueta de fornecedor verificado",
  hi: "बक्सों पर आवर्धक लेंस और सत्यापित सप्लायर टैग",
  fr: "Une loupe sur des cartons avec une étiquette fournisseur vérifié",
};

function homeHref(lang: ScLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

async function copyText(text: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    return true;
  } catch {
    return false;
  }
}

function Shell({ lang, children }: { lang: ScLang; children: ReactNode }) {
  const c = scChrome[lang];
  return (
    <div className="min-h-screen bg-[#FBFCFD] text-[#0E1210]">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
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
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-black/60">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1.5 hover:text-black/80">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export function SupplierScorecard({ lang }: { lang: ScLang }) {
  const c = scChrome[lang];
  const [answers, setAnswers] = useState<number[]>(() => scCriteria.map(() => -1));
  const [shared, setShared] = useState(false);
  const skipSync = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const a = new URLSearchParams(window.location.search).get("a");
    if (!a) return;
    const idx = a.split("-").map((x) => parseInt(x, 10));
    if (idx.length !== scCriteria.length) return;
    const ok = idx.every((n, i) => Number.isInteger(n) && scCriteria[i].opts[n] !== undefined);
    if (ok) setAnswers(idx);
  }, []);

  const answered = answers.every((a) => a >= 0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipSync.current) {
      skipSync.current = false;
      return;
    }
    if (answered) {
      const q = new URLSearchParams();
      q.set("a", answers.join("-"));
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [answers, answered]);

  const score = answered ? answers.reduce((sum, a, i) => sum + scCriteria[i].opts[a].s, 0) : 0;
  const pct = Math.round((score / SC_MAX) * 100);
  const tier = score >= scVerdicts.strong.min ? "strong" : score >= scVerdicts.caution.min ? "caution" : "risk";
  const verdict = scVerdicts[tier];
  const tierStyle =
    tier === "strong"
      ? { cls: "border-[#17B26A]/30 bg-[#F3FBF7]", ring: "#17B26A", Icon: ShieldCheck }
      : tier === "caution"
        ? { cls: "border-amber-300/50 bg-amber-50", ring: "#d97706", Icon: ShieldQuestion }
        : { cls: "border-red-300/50 bg-red-50", ring: "#dc2626", Icon: ShieldAlert };

  async function onShare() {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: c.h1, url });
        return;
      }
    } catch {
      /* cancelled */
    }
    if (await copyText(url)) {
      setShared(true);
      setTimeout(() => setShared(false), 1800);
    }
  }

  const answeredCount = answers.filter((a) => a >= 0).length;

  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[40px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 text-lg leading-relaxed text-black/70">{c.intro}</p>

        <img src="/img/feature-sourcing.webp" alt={IMG_ALT[lang]} width={400} height={400} loading="eager" className="mx-auto mt-8 w-full max-w-[220px]" />

        {/* Criteria */}
        <div className="mt-8 space-y-4">
          {scCriteria.map((crit, i) => (
            <div key={i} className="rounded-3xl border border-black/10 bg-white p-5 sm:p-6">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-bold text-[#17B26A]">{i + 1}</span>
                <h2 className="text-[16px] font-semibold">{crit.q[lang]}</h2>
              </div>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {crit.opts.map((opt, oi) => {
                  const active = answers[i] === oi;
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => setAnswers((prev) => prev.map((v, k) => (k === i ? oi : v)))}
                      className={`rounded-2xl border px-3 py-2.5 text-left text-[13px] font-medium leading-snug transition ${
                        active ? "border-[#17B26A] bg-[#F3FBF7] text-[#0E1210]" : "border-black/10 bg-white text-black/70 hover:border-[#17B26A]/40"
                      }`}
                    >
                      {opt.l[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Result */}
        {answered ? (
          <div className={`mt-8 rounded-3xl border p-6 sm:p-7 ${tierStyle.cls}`}>
            <div className="flex items-center gap-4">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white"
                style={{ backgroundColor: tierStyle.ring }}
              >
                {pct}%
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-black/45">{c.scoreLabel}</p>
                <h2 className="mt-0.5 flex items-center gap-2 text-xl font-bold">
                  <tierStyle.Icon className="h-5 w-5" style={{ color: tierStyle.ring }} />
                  {verdict.title[lang]}
                </h2>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-black/75">{verdict.body[lang]}</p>
            <p className="mt-5 text-[13px] font-semibold uppercase tracking-wide text-black/45">{c.recommendations}</p>
            <ul className="mt-2 space-y-1.5">
              {verdict.tips[lang].map((tip, ti) => (
                <li key={ti} className="flex items-start gap-2 text-[15px] leading-relaxed text-black/75">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#17B26A]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={onShare}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-4 py-2 text-sm font-semibold text-[#0E1210] transition hover:border-[#17B26A]/50"
            >
              {shared ? <Check className="h-4 w-4 text-[#17B26A]" /> : <Share2 className="h-4 w-4" />}
              {shared ? c.copied : c.share}
            </button>
          </div>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-black/15 bg-white px-5 py-4 text-center text-[14px] text-black/55">
            {answeredCount} / {scCriteria.length}
          </p>
        )}

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-[#0E1210] to-[#123A2A] p-7 text-center sm:p-9">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#7CE7C2]">{c.accioLabel}</p>
          <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-white/85">{c.ctaLine}</p>
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#17B26A] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
            {c.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-white/50">{c.ctaNote}</p>
        </section>

        <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-black/45">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-black/35" />
          <p>{c.note}</p>
        </div>
      </main>
    </Shell>
  );
}
