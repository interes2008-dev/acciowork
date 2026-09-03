import type { ReactNode } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import {
  compareChrome,
  comparePages,
  compareOrder,
  type CmpLang,
} from "@/lib/compare-data";
import { LangMenu } from "@/components/common/LangMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function homeHref(lang: CmpLang) {
  return lang === "en" ? "/" : `/${lang}`;
}
function compareHref(lang: CmpLang, slug: string) {
  return lang === "en" ? `/compare/${slug}` : `/${lang}/compare/${slug}`;
}
function hubHref(lang: CmpLang) {
  return lang === "en" ? "/compare" : `/${lang}/compare`;
}

function Shell({ lang, children }: { lang: CmpLang; children: ReactNode }) {
  const c = compareChrome[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
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
            <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="whitespace-nowrap rounded-full bg-[#34d399] px-3 py-2 text-[13px] font-semibold text-white transition hover:brightness-110 sm:px-4 sm:text-sm"
          >
            {c.ctaPrimary}
          </a>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-foreground/68">
          <a href={hubHref(lang)} className="font-medium text-[#34d399] hover:underline">
            {c.allCompares}
          </a>
          <span className="mx-2">·</span>
          <a href={homeHref(lang)} className="hover:underline">
            {c.backHome}
          </a>
        </div>
      </footer>
    </div>
  );
}

function Cta({ lang }: { lang: CmpLang }) {
  const c = compareChrome[lang];
  return (
    <div className="mt-10 rounded-2xl bg-[#34d399]/10 p-6 text-center sm:p-8">
      <p className="mb-4 text-base text-foreground/75">{c.tryLine}</p>
      <a
        href={REFERRAL_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 rounded-full bg-[#34d399] px-6 py-3 font-semibold text-white transition hover:brightness-110"
      >
        {c.ctaPrimary} <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-foreground/58">{c.ctaNote}</p>
    </div>
  );
}

export function ComparePage({ lang, competitor }: { lang: CmpLang; competitor: string }) {
  const c = compareChrome[lang];
  const page = comparePages[lang]?.[competitor];
  if (!page) {
    return (
      <Shell lang={lang}>
        <div className="mx-auto max-w-5xl px-5 py-20 text-center text-foreground/68">Not found</div>
      </Shell>
    );
  }
  const others = compareOrder.filter((s) => s !== competitor);
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <nav className="mb-6 text-xs text-foreground/58">
          <a href={homeHref(lang)} className="hover:underline">{c.backHome}</a>
          <span className="mx-1.5">/</span>
          <a href={hubHref(lang)} className="hover:underline">{c.allCompares}</a>
          <span className="mx-1.5">/</span>
          <span className="text-foreground/75">{page.h1}</span>
        </nav>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-2 text-foreground/58">{page.tagline}</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{page.intro}</p>

        {/* Comparison table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-3 border-b border-border bg-muted text-sm font-semibold">
            <div className="px-4 py-3 text-foreground/68">{c.featureCol}</div>
            <div className="px-4 py-3 text-[#34d399]">{c.colAccio}</div>
            <div className="px-4 py-3 text-foreground/75">{page.name}</div>
          </div>
          {c.featureLabels.map((label, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-border text-sm last:border-b-0">
              <div className="px-4 py-3 font-medium text-foreground/75">{label}</div>
              <div className="flex items-start gap-2 px-4 py-3 text-foreground/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34d399]" />
                <span>{c.accioCells[i]}</span>
              </div>
              <div className="flex items-start gap-2 px-4 py-3 text-foreground/68">
                <span>{page.competitorCells[i]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* When to pick which */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#34d399]/30 bg-muted p-6">
            <h2 className="mb-4 text-lg font-semibold">{c.whenAccioTitle}</h2>
            <ul className="space-y-3">
              {page.whenAccio.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34d399]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">{c.whenOtherTpl.replace("{name}", page.name)}</h2>
            <ul className="space-y-3">
              {page.whenOther.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/68">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-foreground/48" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">{c.verdictTitle}</h2>
          <p className="max-w-3xl leading-relaxed text-foreground/80">{page.verdict}</p>
        </div>

        <Cta lang={lang} />

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="mb-5 text-xl font-semibold">{c.faqTitle}</h2>
          <div className="space-y-4">
            {page.faq.map((qa, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">{qa.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">{qa.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other comparisons */}
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">{c.allCompares}</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((slug) => (
              <a
                key={slug}
                href={compareHref(lang, slug)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition hover:border-[#34d399]/40 hover:text-[#34d399]"
              >
                Accio Work vs {comparePages[lang]?.[slug]?.name} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </main>
    </Shell>
  );
}

const HUB_IMG_ALT: Record<CmpLang, string> = {
  en: "Three abstract AI agent tiles with the best-fit one highlighted, lines leading to a target",
  ru: "Три абстрактные плитки AI-агентов, подходящая подсвечена, линии ведут к цели",
  de: "Drei abstrakte KI-Agenten-Kacheln, die passende hervorgehoben, Linien führen zum Ziel",
  it: "Tre riquadri astratti di agenti AI, quello giusto evidenziato, linee verso un obiettivo",
  es: "Tres fichas abstractas de agentes de IA, la adecuada resaltada, líneas hacia un objetivo",
  zh: "三个抽象的 AI 智能体卡片，最合适的一个被高亮，线条指向目标",
  pt: "Três blocos abstratos de agentes de IA, o ideal destacado, linhas até um alvo",
  hi: "तीन अमूर्त AI एजेंट टाइलें, सबसे उपयुक्त हाइलाइट, रेखाएँ लक्ष्य तक",
  fr: "Trois tuiles abstraites d'agents IA, la bonne mise en avant, des lignes vers une cible",
};

export function CompareHub({ lang }: { lang: CmpLang }) {
  const c = compareChrome[lang];
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <a href={homeHref(lang)} className="mb-6 inline-flex items-center gap-1.5 text-sm text-foreground/58 hover:text-foreground/85">
          <ArrowLeft className="h-4 w-4" /> {c.backHome}
        </a>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.hubTitle}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/75">{c.hubIntro}</p>
        <img src="/img/compare.webp" alt={HUB_IMG_ALT[lang]} width={1200} height={800} loading="eager" className="mx-auto mt-8 w-full max-w-2xl" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {compareOrder.map((slug) => {
            const p = comparePages[lang]?.[slug];
            if (!p) return null;
            return (
              <a
                key={slug}
                href={compareHref(lang, slug)}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:border-[#34d399]/40 hover:shadow-sm"
              >
                <h2 className="text-lg font-semibold">Accio Work vs {p.name}</h2>
                <p className="mt-1.5 text-sm text-foreground/62">{p.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#34d399]">
                  {c.readMore} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>
        <Cta lang={lang} />
      </main>
    </Shell>
  );
}
