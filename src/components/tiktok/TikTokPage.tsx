import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Zap, Info, ClipboardList, Calculator, HelpCircle } from "lucide-react";
import { ttChrome, ttFlow, type TtLang } from "@/lib/tiktok-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function homeHref(lang: TtLang) {
  return lang === "en" ? "/" : `/${lang}`;
}
function langHref(lang: TtLang, path: string) {
  return lang === "en" ? path : `/${lang}${path}`;
}

function Shell({ lang, children }: { lang: TtLang; children: ReactNode }) {
  const c = ttChrome[lang];
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

export function TikTokPage({ lang }: { lang: TtLang }) {
  const c = ttChrome[lang];
  const cross = [
    { icon: HelpCircle, label: c.crossQuiz, href: langHref(lang, "/quiz") },
    { icon: Calculator, label: c.crossDuty, href: langHref(lang, "/duty") },
    { icon: ClipboardList, label: c.crossTemplates, href: langHref(lang, "/templates") },
  ];
  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <p className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">
          <Zap className="h-4 w-4" /> {c.kicker}
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[40px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 text-lg leading-relaxed text-black/70">{c.intro}</p>

        {/* Pains */}
        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight">{c.painTitle}</h2>
          <ul className="mt-4 space-y-3">
            {c.pains.map((line, i) => (
              <li key={i} className="flex gap-3 rounded-2xl border border-black/8 bg-white p-4 text-[15px] leading-relaxed text-black/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E1210] text-[11px] font-bold text-white">{i + 1}</span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        {/* Flow */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">{c.flowTitle}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-black/60">{c.flowSub}</p>
          <div className="mt-6 space-y-4">
            {ttFlow.map((s, i) => (
              <article key={i} className="flex gap-4 rounded-3xl border border-black/10 bg-white p-5 sm:p-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3FBF7] text-lg font-bold text-[#17B26A]">{i + 1}</div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{s.title[lang]}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-black/70">{s.body[lang]}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Cross-links to tools */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold">{c.crossTitle}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {cross.map((t, i) => (
              <a key={i} href={t.href}
                className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 text-[14px] font-medium text-black/80 transition hover:border-[#17B26A]/40 hover:text-black">
                <t.icon className="h-5 w-5 shrink-0 text-[#17B26A]" />
                {t.label}
              </a>
            ))}
          </div>
        </section>

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

        {/* Honest note */}
        <div className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-black/45">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-black/35" />
          <p>{c.note}</p>
        </div>
      </main>
    </Shell>
  );
}
