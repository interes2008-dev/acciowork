import { useState, useEffect, useRef, useMemo } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Check, Share2, Info } from "lucide-react";
import { chChrome, chCats, chTasks, type ChLang } from "@/lib/checklist-data";
import { LangMenu } from "@/components/common/LangMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function homeHref(lang: ChLang) {
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

function Shell({ lang, children }: { lang: ChLang; children: ReactNode }) {
  const c = chChrome[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <a href={homeHref(lang)} className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontSize: 22 }}>
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
            <ThemeToggle />
            <LangMenu lang={lang} />
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
              className="whitespace-nowrap rounded-full bg-[#34d399] px-3 py-2 text-[13px] font-semibold text-[#04120d] transition hover:brightness-110 sm:px-4 sm:text-sm">
              {c.cta}
            </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-foreground/60">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1.5 hover:text-foreground/90">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export function AgentTasksChecklist({ lang }: { lang: ChLang }) {
  const c = chChrome[lang];
  const [checked, setChecked] = useState<boolean[]>(() => chTasks.map(() => false));
  const [shared, setShared] = useState(false);
  const skipSync = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const t = new URLSearchParams(window.location.search).get("tk");
    if (!t) return;
    const idx = t.split("-").map((x) => parseInt(x, 10)).filter((n) => Number.isInteger(n) && n >= 0 && n < chTasks.length);
    if (idx.length) setChecked(chTasks.map((_, i) => idx.includes(i)));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipSync.current) {
      skipSync.current = false;
      return;
    }
    const on = checked.flatMap((v, i) => (v ? [i] : []));
    if (on.length) {
      const q = new URLSearchParams();
      q.set("tk", on.join("-"));
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [checked]);

  const reclaim = useMemo(() => chTasks.reduce((s, t, i) => s + (checked[i] ? t.h : 0), 0), [checked]);
  const count = checked.filter(Boolean).length;
  const days = Math.round((reclaim * 12) / 8);
  const grouped = useMemo(
    () => chCats.map((_, ci) => chTasks.map((t, i) => ({ t, i })).filter((x) => x.t.c === ci)),
    [],
  );

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

  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[40px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground/70">{c.intro}</p>

        {/* Result counter */}
        <div className="sticky top-3 z-20 mt-8 rounded-3xl border border-[#34d399]/25 bg-card/95 p-5 shadow-elegant backdrop-blur sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-foreground/50">{c.reclaimLabel}</p>
              <p className="mt-0.5 text-4xl font-extrabold tracking-tight text-[#34d399] sm:text-5xl tabular-nums">
                {reclaim % 1 === 0 ? reclaim : reclaim.toFixed(1)}
                <span className="ml-1 text-2xl">h</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-[13px] text-foreground/50">{c.daysLabel}</p>
              <p className="text-lg font-bold tabular-nums">{days} {c.daysUnit}</p>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-foreground/10">
            <div className="h-full rounded-full bg-[#34d399] transition-all" style={{ width: `${(count / chTasks.length) * 100}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-[13px] text-foreground/50">{count} / {chTasks.length}</span>
            <button
              type="button"
              onClick={onShare}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-[13px] font-semibold transition hover:border-[#34d399]/50"
            >
              {shared ? <Check className="h-4 w-4 text-[#34d399]" /> : <Share2 className="h-4 w-4" />}
              {shared ? c.copied : c.share}
            </button>
          </div>
        </div>

        <p className="mt-8 text-[13px] font-medium uppercase tracking-wide text-foreground/40">{c.catsIntro}</p>

        {/* Categories */}
        <div className="mt-4 space-y-8">
          {chCats.map((cat, ci) => (
            <div key={ci}>
              <h2 className="text-lg font-bold tracking-tight">{cat.name[lang]}</h2>
              <div className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {grouped[ci].map(({ t, i }) => {
                  const on = checked[i];
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setChecked((prev) => prev.map((v, k) => (k === i ? !v : v)))}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-foreground/[0.03]"
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                          on ? "border-[#34d399] bg-[#34d399] text-[#04120d]" : "border-foreground/25"
                        }`}
                      >
                        {on ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                      </span>
                      <span className={`flex-1 text-[15px] ${on ? "text-foreground" : "text-foreground/75"}`}>{t.name[lang]}</span>
                      <span className="shrink-0 text-[12px] font-medium text-foreground/45 tabular-nums">
                        {"\u2248"}{t.h % 1 === 0 ? t.h : t.h.toFixed(1)}h
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-[#0a1120] to-[#0f2e26] p-7 text-center sm:p-9">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5eead4]">{c.accioLabel}</p>
          <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-white/85">{c.ctaLine}</p>
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#34d399] px-7 py-3.5 font-semibold text-[#04120d] transition hover:brightness-110">
            {c.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-white/50">{c.ctaNote}</p>
        </section>

        <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-foreground/45">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-foreground/35" />
          <p>{c.note}</p>
        </div>
      </main>
    </Shell>
  );
}
