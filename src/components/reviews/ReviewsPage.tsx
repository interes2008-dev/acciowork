import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, ExternalLink, Check } from "lucide-react";
import { rvChrome, rvPress, rvWays, type RvLang } from "@/lib/reviews-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function homeHref(lang: RvLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

function Shell({ lang, children }: { lang: RvLang; children: ReactNode }) {
  const c = rvChrome[lang];
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
          <a href={homeHref(lang)} className="hover:underline">{c.backHome}</a>
        </div>
      </footer>
    </div>
  );
}

function Cta({ lang }: { lang: RvLang }) {
  const c = rvChrome[lang];
  return (
    <div className="mt-12 rounded-2xl bg-[#34d399]/10 p-6 text-center sm:p-8">
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

export function ReviewsPage({ lang }: { lang: RvLang }) {
  const c = rvChrome[lang];
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-4xl px-5 py-10 sm:py-14">
        <nav className="mb-6 text-xs text-foreground/58">
          <a href={homeHref(lang)} className="hover:underline">{c.backHome}</a>
          <span className="mx-1.5">/</span>
          <span className="text-foreground/72">{c.kicker}</span>
        </nav>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#34d399]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{c.h1}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/75">{c.intro}</p>

        {/* Coverage strip */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/52">
          {rvPress.map((p) => (
            <span key={p.id}>{p.source}</span>
          ))}
        </div>

        {/* Press / reviews */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">{c.pressTitle}</h2>
          <p className="mt-1 text-sm text-foreground/58">{c.pressNote}</p>
          <div className="mt-5 space-y-4">
            {rvPress.map((p) => (
              <div key={p.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-semibold">{p.source}</span>
                  <span className="rounded-full bg-[#34d399]/10 px-2 py-0.5 text-[11px] font-medium text-[#34d399]">{p.tag}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-foreground/75">{p.takeaway[lang]}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#34d399] hover:underline"
                >
                  {c.sourceLabel} {p.source} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Illustrative ways */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold">{c.waysTitle}</h2>
          <p className="mt-1 text-sm text-foreground/58">{c.waysNote}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {rvWays.map((w, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#34d399]" />
                  <h3 className="font-semibold">{w.title[lang]}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/72">{w.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <Cta lang={lang} />

        <p className="mt-8 text-center text-xs text-foreground/48">
          <a href={homeHref(lang)} className="inline-flex items-center gap-1 hover:text-foreground/72">
            <ArrowLeft className="h-3 w-3" /> {c.backHome}
          </a>
        </p>
      </main>
    </Shell>
  );
}
