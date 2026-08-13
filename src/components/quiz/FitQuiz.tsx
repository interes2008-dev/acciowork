import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Check, RotateCcw } from "lucide-react";
import { qzChrome, qzQuestions, qzResults, type QzLang } from "@/lib/quiz-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function homeHref(lang: QzLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

function Shell({ lang, children }: { lang: QzLang; children: ReactNode }) {
  const c = qzChrome[lang];
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
            {c.ctaFit}
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

export function FitQuiz({ lang }: { lang: QzLang }) {
  const c = qzChrome[lang];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(qzQuestions.length).fill(null));
  const [done, setDone] = useState(false);

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
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">{c.kicker}</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-[38px]">{c.h1}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-black/70">{c.intro}</p>

            {/* progress */}
            <div className="mt-8 mb-6">
              <div className="mb-2 flex justify-between text-xs font-medium text-black/50">
                <span>{c.question} {step + 1} {c.of} {total}</span>
                <span>{Math.round(((step + (answered ? 1 : 0)) / total) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#DDF7EE]">
                <div className="h-full bg-[#17B26A] transition-all duration-300"
                  style={{ width: `${((step + (answered ? 1 : 0)) / total) * 100}%` }} />
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold leading-snug">{qzQuestions[step].q[lang]}</h2>
              <div className="mt-5 space-y-3">
                {qzQuestions[step].options.map((o, i) => {
                  const sel = answers[step] === i;
                  return (
                    <button key={i} onClick={() => pick(i)}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition ${
                        sel ? "border-[#17B26A] bg-[#F3FBF7] text-[#0E1210]" : "border-black/10 bg-white text-black/75 hover:border-[#17B26A]/40"
                      }`}>
                      <span>{o.label[lang]}</span>
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${sel ? "border-[#17B26A] bg-[#17B26A] text-white" : "border-black/20"}`}>
                        {sel && <Check className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-black/60 disabled:opacity-40">
                <ArrowLeft className="h-4 w-4" /> {c.back}
              </button>
              <button onClick={next} disabled={!answered}
                className="inline-flex items-center gap-2 rounded-full bg-[#17B26A] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-40">
                {step < total - 1 ? c.next : c.seeResult} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">{c.resultKicker}</p>
            <div className={`rounded-3xl border p-7 sm:p-9 ${tier === "weak" ? "border-black/10 bg-white" : "border-[#17B26A]/30 bg-[#F3FBF7]"}`}>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{result.title[lang]}</h1>
              <p className="mt-4 text-[17px] leading-relaxed text-black/75">{result.body[lang]}</p>

              {result.cta ? (
                <div className="mt-7">
                  <p className="mb-3 text-sm text-black/60">{c.tryLine}</p>
                  <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-2 rounded-full bg-[#17B26A] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
                    {c.ctaFit} <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="mt-2 text-xs text-black/50">{c.ctaNote}</p>
                </div>
              ) : (
                <div className="mt-7">
                  <p className="text-sm text-black/60">{c.weakNote}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-medium text-black/60 hover:text-black/90">
                <RotateCcw className="h-4 w-4" /> {c.retake}
              </button>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-black/45">{c.disclaimer}</p>
          </>
        )}
      </main>
    </Shell>
  );
}
