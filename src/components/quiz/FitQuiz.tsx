import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Check, RotateCcw, Share2 } from "lucide-react";
import { qzChrome, qzQuestions, qzResults, type QzLang } from "@/lib/quiz-data";
import { LangMenu } from "@/components/common/LangMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const IMG_ALT: Record<QzLang, string> = {
  en: "A branching decision path with checkmarks leading to a target",
  ru: "Ветвящийся путь решений с галочками, ведущий к цели",
  de: "Ein verzweigter Entscheidungspfad mit Haken zum Ziel",
  it: "Un percorso decisionale ramificato con spunte verso un obiettivo",
  es: "Un camino de decisión ramificado con marcas hacia un objetivo",
  zh: "带对勾的分支决策路径通向目标",
  pt: "Um caminho de decisão ramificado com marcas até um alvo",
  hi: "चेकमार्क वाला शाखाओं वाला निर्णय पथ लक्ष्य तक",
  fr: "Un chemin de décision ramifié avec des coches vers une cible",
};

const SHARE: Record<QzLang, { share: string; copied: string }> = {
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

function homeHref(lang: QzLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

function Shell({ lang, children }: { lang: QzLang; children: ReactNode }) {
  const c = qzChrome[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <a href={homeHref(lang)} className="flex items-center gap-1.5 font-bold tracking-tight text-foreground" style={{ fontSize: 22 }}>
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
            className="whitespace-nowrap rounded-full bg-[#34d399] px-3 py-2 text-[13px] font-semibold text-white transition hover:brightness-110 sm:px-4 sm:text-sm">
            {c.ctaFit}
          </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-foreground/68">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1.5 hover:text-foreground/85">
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export function FitQuiz({ lang }: { lang: QzLang }) {
  const c = qzChrome[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(qzQuestions.length).fill(null));
  const [done, setDone] = useState(false);
  const [shared, setShared] = useState(false);
  const skipSync = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const a = new URLSearchParams(window.location.search).get("a");
    if (!a) return;
    const idx = a.split("-").map((x) => parseInt(x, 10));
    if (idx.length !== qzQuestions.length) return;
    const ok = idx.every((n, i) => Number.isInteger(n) && qzQuestions[i].options[n] !== undefined);
    if (!ok) return;
    setAnswers(idx);
    setDone(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (skipSync.current) { skipSync.current = false; return; }
    if (done && answers.every((v) => v !== null)) {
      const q = new URLSearchParams();
      q.set("a", answers.join("-"));
      window.history.replaceState(null, "", `${window.location.pathname}?${q.toString()}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [done, answers]);

  async function onShare() {
    if (typeof window === "undefined") return;
    const shareUrl = window.location.href;
    try {
      if (navigator.share) { await navigator.share({ title: qzChrome[lang].h1, url: shareUrl }); return; }
    } catch { /* cancelled */ }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShared(true);
      setTimeout(() => setShared(false), 1800);
    } catch { /* blocked */ }
  }

  const total = qzQuestions.length;
  const answered = answers[step] !== null;

  function pick(optIdx: number) {
    setAnswers((a) => a.map((v, i) => (i === step ? optIdx : v)));
  }
  function next() {
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  }
  function reset() {
    setAnswers(Array(total).fill(null));
    setStep(0);
    setDone(false);
  }

  const score = answers.reduce<number>((sum, a, i) => sum + (a !== null ? qzQuestions[i].options[a].score : 0), 0);
  const tier = score >= 7 ? "strong" : score >= 4 ? "partial" : "weak";
  const result = qzResults[tier];

  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        {!done ? (
          <>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.kicker}</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-[38px]">{c.h1}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-foreground/75">{c.intro}</p>
            <img src="/img/tool-quiz.webp" alt={IMG_ALT[lang]} width={800} height={800} loading="eager" className="mx-auto mt-6 w-full max-w-sm" />

            {/* progress */}
            <div className="mt-8 mb-6">
              <div className="mb-2 flex justify-between text-xs font-medium text-foreground/58">
                <span>{c.question} {step + 1} {c.of} {total}</span>
                <span>{Math.round(((step + (answered ? 1 : 0)) / total) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#34d399]/15">
                <div className="h-full bg-[#34d399] transition-all duration-300"
                  style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }} />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xl font-semibold leading-snug">{qzQuestions[step].q[lang]}</h2>
              <div className="mt-5 space-y-3">
                {qzQuestions[step].options.map((o, i) => {
                  const sel = answers[step] === i;
                  return (
                    <button key={i} onClick={() => pick(i)}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition ${
                        sel ? "border-[#34d399] bg-muted text-foreground" : "border-border bg-secondary text-foreground/80 hover:border-[#34d399]/40"
                      }`}>
                      <span>{o.label[lang]}</span>
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${sel ? "border-[#34d399] bg-[#34d399] text-white" : "border-black/20"}`}>
                        {sel && <Check className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground/68 disabled:opacity-40">
                <ArrowLeft className="h-4 w-4" /> {c.back}
              </button>
              <button onClick={next} disabled={!answered}
                className="inline-flex items-center gap-2 rounded-full bg-[#34d399] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-40">
                {step < total - 1 ? c.next : c.seeResult} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.resultKicker}</p>
            <div className={`rounded-3xl border p-7 sm:p-9 ${tier === "weak" ? "border-border bg-card" : "border-[#34d399]/30 bg-muted"}`}>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{result.title[lang]}</h1>
              <p className="mt-4 text-[17px] leading-relaxed text-foreground/80">{result.body[lang]}</p>

              {result.cta ? (
                <div className="mt-7">
                  <p className="mb-3 text-sm text-foreground/68">{c.tryLine}</p>
                  <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 rounded-full bg-[#34d399] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
                    {c.ctaFit} <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="mt-2 text-xs text-foreground/58">{c.ctaNote}</p>
                </div>
              ) : (
                <div className="mt-7">
                  <p className="text-sm text-foreground/68">{c.weakNote}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/68 hover:text-foreground/90">
                <RotateCcw className="h-4 w-4" /> {c.retake}
              </button>
              <button onClick={onShare} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[#34d399]/50">
                {shared ? <Check className="h-4 w-4 text-[#34d399]" /> : <Share2 className="h-4 w-4" />}
                {shared ? SHARE[lang].copied : SHARE[lang].share}
              </button>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-foreground/52">{c.disclaimer}</p>
          </>
        )}
      </main>
    </Shell>
  );
}
