import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Copy, Check, Info, Lightbulb } from "lucide-react";
import { prChrome, prPrompts, type PrLang } from "@/lib/prompts-data";
import { LangMenu } from "@/components/common/LangMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const IMG_ALT: Record<PrLang, string> = {
  en: "An AI hub linking idea, search, chart and checklist cards",
  ru: "AI-центр связывает карточки: идея, поиск, график, чек-лист",
  de: "Ein AI-Hub verbindet Karten: Idee, Suche, Diagramm, Checkliste",
  it: "Un hub AI collega schede: idea, ricerca, grafico, checklist",
  es: "Un hub de IA conecta tarjetas: idea, búsqueda, gráfico, checklist",
  zh: "AI 中心连接卡片：点子、搜索、图表、清单",
  pt: "Um hub de IA liga cartões: ideia, busca, gráfico, checklist",
  hi: "AI हब कार्ड जोड़ता है: आइडिया, खोज, चार्ट, चेकलिस्ट",
  fr: "Un hub IA relie des cartes : idée, recherche, graphique, liste",
};

function homeHref(lang: PrLang) {
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

function Shell({ lang, children }: { lang: PrLang; children: ReactNode }) {
  const c = prChrome[lang];
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
              {c.cta}
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

function PromptCard({ lang, index }: { lang: PrLang; index: number }) {
  const c = prChrome[lang];
  const p = prPrompts[index];
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    const ok = await copyText(p.body[lang]);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };
  return (
    <article className="rounded-3xl border border-border bg-card p-6 sm:p-7">
      <div className="flex items-baseline gap-3">
        <span className="text-lg font-bold text-[#34d399]">{index + 1}</span>
        <h3 className="text-lg font-bold tracking-tight">{p.title[lang]}</h3>
      </div>
      <p className="mt-1 text-[14px] leading-relaxed text-foreground/62">{p.desc[lang]}</p>
      <div className="mt-4 rounded-2xl bg-[#0E1210] p-4">
        <p className="whitespace-pre-wrap text-[14px] leading-relaxed text-white/90">{p.body[lang]}</p>
        <button onClick={onCopy}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white transition hover:bg-white/20">
          {copied ? <Check className="h-3.5 w-3.5 text-[#5eead4]" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? c.copied : c.copy}
        </button>
      </div>
      <p className="mt-3 flex items-start gap-1.5 text-[13px] leading-relaxed text-foreground/62">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
        <span><span className="font-semibold text-foreground/75">{c.tipLabel}:</span> {p.tip[lang]}</span>
      </p>
    </article>
  );
}

export function PromptsPage({ lang }: { lang: PrLang }) {
  const c = prChrome[lang];
  const [allCopied, setAllCopied] = useState(false);
  const onCopyAll = async () => {
    const text = prPrompts.map((p, i) => `${i + 1}. ${p.title[lang]}\n${p.body[lang]}`).join("\n\n");
    const ok = await copyText(text);
    if (ok) {
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 1600);
    }
  };
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[40px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 text-lg leading-relaxed text-foreground/75">{c.intro}</p>

        <img src="/img/landing-prompts.webp" alt={IMG_ALT[lang]} width={640} height={640} loading="eager" className="mx-auto mt-8 w-full max-w-xs" />

        <button onClick={onCopyAll}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition hover:border-[#34d399]/50">
          {allCopied ? <Check className="h-4 w-4 text-[#34d399]" /> : <Copy className="h-4 w-4" />}
          {allCopied ? c.copied : c.copyAll}
        </button>

        <div className="mt-8 space-y-5">
          {prPrompts.map((_, i) => (
            <PromptCard key={i} lang={lang} index={i} />
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-gradient-to-br from-[#0a1120] to-[#0f2e26] p-7 text-center sm:p-9">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#5eead4]">{c.accioLabel}</p>
          <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-white/85">{c.ctaLine}</p>
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#34d399] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
            {c.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-white/50">{c.ctaNote}</p>
        </section>

        <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-foreground/52">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-foreground/45" />
          <p>{c.note}</p>
        </div>
      </main>
    </Shell>
  );
}
