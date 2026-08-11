import type { ReactNode } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import {
  compareChrome,
  comparePages,
  compareOrder,
  type CmpLang,
} from "@/lib/compare-data";

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
    <div className="min-h-screen bg-[#FBFCFD] text-[#0E1210]">
      <header className="border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
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
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="rounded-full bg-[#17B26A] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {c.ctaPrimary}
          </a>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-black/60">
          <a href={hubHref(lang)} className="font-medium text-[#17B26A] hover:underline">
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
    <div className="mt-10 rounded-2xl bg-[#EAF7F0] p-6 text-center sm:p-8">
      <p className="mb-4 text-base text-black/70">{c.tryLine}</p>
      <a
        href={REFERRAL_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 rounded-full bg-[#17B26A] px-6 py-3 font-semibold text-white transition hover:brightness-110"
      >
        {c.ctaPrimary} <ArrowRight className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-black/50">{c.ctaNote}</p>
    </div>
  );
}

export function ComparePage({ lang, competitor }: { lang: CmpLang; competitor: string }) {
  const c = compareChrome[lang];
  const page = comparePages[lang]?.[competitor];
  if (!page) {
    return (
      <Shell lang={lang}>
        <div className="mx-auto max-w-5xl px-5 py-20 text-center text-black/60">Not found</div>
      </Shell>
    );
  }
  const others = compareOrder.filter((s) => s !== competitor);
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <nav className="mb-6 text-xs text-black/50">
          <a href={homeHref(lang)} className="hover:underline">{c.backHome}</a>
          <span className="mx-1.5">/</span>
          <a href={hubHref(lang)} className="hover:underline">{c.allCompares}</a>
          <span className="mx-1.5">/</span>
          <span className="text-black/70">{page.h1}</span>
        </nav>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-2 text-black/50">{page.tagline}</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-black/75">{page.intro}</p>

        {/* Comparison table */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white">
          <div className="grid grid-cols-3 border-b border-black/10 bg-[#F5F6F8] text-sm font-semibold">
            <div className="px-4 py-3 text-black/60">{c.featureCol}</div>
            <div className="px-4 py-3 text-[#17B26A]">{c.colAccio}</div>
            <div className="px-4 py-3 text-black/70">{page.name}</div>
          </div>
          {c.featureLabels.map((label, i) => (
            <div key={i} className="grid grid-cols-3 border-b border-black/5 text-sm last:border-b-0">
              <div className="px-4 py-3 font-medium text-black/70">{label}</div>
              <div className="flex items-start gap-2 px-4 py-3 text-black/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#17B26A]" />
                <span>{c.accioCells[i]}</span>
              </div>
              <div className="flex items-start gap-2 px-4 py-3 text-black/60">
                <span>{page.competitorCells[i]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* When to pick which */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#17B26A]/30 bg-[#F3FBF7] p-6">
            <h2 className="mb-4 text-lg font-semibold">{c.whenAccioTitle}</h2>
            <ul className="space-y-3">
              {page.whenAccio.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#17B26A]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">{c.whenOtherTpl.replace("{name}", page.name)}</h2>
            <ul className="space-y-3">
              {page.whenOther.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-black/60">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-black/40" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict */}
        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold">{c.verdictTitle}</h2>
          <p className="max-w-3xl leading-relaxed text-black/75">{page.verdict}</p>
        </div>

        <Cta lang={lang} />

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="mb-5 text-xl font-semibold">{c.faqTitle}</h2>
          <div className="space-y-4">
            {page.faq.map((qa, i) => (
              <div key={i} className="rounded-xl border border-black/10 bg-white p-5">
                <h3 className="font-semibold">{qa.q}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-black/70">{qa.a}</p>
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
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:border-[#17B26A]/40 hover:text-[#17B26A]"
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

export function CompareHub({ lang }: { lang: CmpLang }) {
  const c = compareChrome[lang];
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
        <a href={homeHref(lang)} className="mb-6 inline-flex items-center gap-1.5 text-sm text-black/50 hover:text-black/80">
          <ArrowLeft className="h-4 w-4" /> {c.backHome}
        </a>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.hubTitle}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/70">{c.hubIntro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {compareOrder.map((slug) => {
            const p = comparePages[lang]?.[slug];
            if (!p) return null;
            return (
              <a
                key={slug}
                href={compareHref(lang, slug)}
                className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:border-[#17B26A]/40 hover:shadow-sm"
              >
                <h2 className="text-lg font-semibold">Accio Work vs {p.name}</h2>
                <p className="mt-1.5 text-sm text-black/55">{p.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#17B26A]">
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
