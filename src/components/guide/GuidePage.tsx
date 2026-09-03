import type { ReactNode } from "react";
import { Check, ArrowRight, ArrowLeft, Lightbulb } from "lucide-react";
import { gdChrome, gdPages, gdOrder, type GdLang } from "@/lib/guide-data";
import { LangMenu } from "@/components/common/LangMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function homeHref(lang: GdLang) {
  return lang === "en" ? "/" : `/${lang}`;
}
function guideHref(lang: GdLang, slug: string) {
  return lang === "en" ? `/guide/${slug}` : `/${lang}/guide/${slug}`;
}
function hubHref(lang: GdLang) {
  return lang === "en" ? "/guide" : `/${lang}/guide`;
}

function Shell({ lang, children }: { lang: GdLang; children: ReactNode }) {
  const c = gdChrome[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
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
        <div className="mx-auto max-w-4xl px-5 py-8 text-sm text-foreground/65">
          <a href={hubHref(lang)} className="font-medium text-[#34d399] hover:underline">
            {c.allGuides}
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

function Cta({ lang }: { lang: GdLang }) {
  const c = gdChrome[lang];
  return (
    <div className="mt-10 rounded-2xl bg-[#34d399]/10 p-6 text-center sm:p-8">
      <p className="mb-4 text-base text-foreground/72">{c.tryLine}</p>
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

export function GuidePage({ lang, guide }: { lang: GdLang; guide: string }) {
  const c = gdChrome[lang];
  const page = gdPages[lang]?.[guide];
  if (!page) {
    return (
      <Shell lang={lang}>
        <div className="mx-auto max-w-4xl px-5 py-20 text-center text-foreground/65">Not found</div>
      </Shell>
    );
  }
  const others = gdOrder.filter((s) => s !== guide);
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
        <nav className="mb-6 text-xs text-foreground/58">
          <a href={homeHref(lang)} className="hover:underline">{c.backHome}</a>
          <span className="mx-1.5">/</span>
          <a href={hubHref(lang)} className="hover:underline">{c.allGuides}</a>
          <span className="mx-1.5">/</span>
          <span className="text-foreground/72">{page.h1}</span>
        </nav>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-2 text-foreground/58">{page.tagline}</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/75">{page.intro}</p>

        {/* Steps */}
        <div className="mt-10">
          <h2 className="mb-5 text-xl font-semibold">{c.stepsTitle}</h2>
          <ol className="space-y-4">
            {page.steps.map((s, i) => (
              <li key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#34d399] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/72">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        <div className="mt-10 rounded-2xl border border-[#34d399]/30 bg-muted p-6">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-[#34d399]" />
            <h2 className="text-lg font-semibold">{c.tipsTitle}</h2>
          </div>
          <ul className="space-y-2.5">
            {page.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34d399]" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <Cta lang={lang} />

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="mb-5 text-xl font-semibold">{c.faqTitle}</h2>
          <div className="space-y-4">
            {page.faq.map((qa, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold">{qa.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/72">{qa.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other guides */}
        <div className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">{c.allGuides}</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((slug) => (
              <a
                key={slug}
                href={guideHref(lang, slug)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition hover:border-[#34d399]/40 hover:text-[#34d399]"
              >
                {gdPages[lang]?.[slug]?.name} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </main>
    </Shell>
  );
}

export function GuideHub({ lang }: { lang: GdLang }) {
  const c = gdChrome[lang];
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
        <a href={homeHref(lang)} className="mb-6 inline-flex items-center gap-1.5 text-sm text-foreground/58 hover:text-foreground/80">
          <ArrowLeft className="h-4 w-4" /> {c.backHome}
        </a>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.hubTitle}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/72">{c.hubIntro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {gdOrder.map((slug, i) => {
            const p = gdPages[lang]?.[slug];
            if (!p) return null;
            return (
              <a
                key={slug}
                href={guideHref(lang, slug)}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:border-[#34d399]/40 hover:shadow-sm"
              >
                <span className="text-xs font-semibold text-foreground/48">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-1 text-lg font-semibold">{p.name}</h2>
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
