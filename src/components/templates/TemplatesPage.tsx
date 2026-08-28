import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, ArrowLeft, Copy, Check } from "lucide-react";
import { tplChrome, tplTemplates, tplChecklist, type TplLang } from "@/lib/templates-data";
import { LangMenu } from "@/components/common/LangMenu";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const IMG_ALT: Record<TplLang, string> = {
  en: "Stacked message template cards with a copy icon and envelope",
  ru: "Стопка карточек-шаблонов с иконкой копирования и конвертом",
  de: "Gestapelte Vorlagenkarten mit Kopier-Symbol und Umschlag",
  it: "Schede modello impilate con icona copia e busta",
  es: "Tarjetas de plantilla apiladas con icono de copiar y sobre",
  zh: "叠放的模板卡片，带复制图标和信封",
  pt: "Cartões de modelo empilhados com ícone de copiar e envelope",
  hi: "कॉपी आइकन और लिफ़ाफ़े के साथ टेम्पलेट कार्ड का ढेर",
  fr: "Des cartes modèles empilées avec une icône copier et une enveloppe",
};

function homeHref(lang: TplLang) {
  return lang === "en" ? "/" : `/${lang}`;
}

function Shell({ lang, children }: { lang: TplLang; children: ReactNode }) {
  const c = tplChrome[lang];
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

function TemplateCard({ lang, idx }: { lang: TplLang; idx: number }) {
  const c = tplChrome[lang];
  const tpl = tplTemplates[idx];
  const [text, setText] = useState(tpl.body[lang]);
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* ignore */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 sm:p-6">
      <div className="mb-1 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{tpl.name[lang]}</h3>
        <button
          onClick={copy}
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
            copied ? "bg-[#17B26A] text-white" : "border border-[#17B26A]/40 text-[#17B26A] hover:bg-[#F3FBF7]"
          }`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? c.copied : c.copy}
        </button>
      </div>
      <p className="mb-3 text-sm text-black/50">
        <span className="font-medium text-black/60">{c.whenLabel}:</span> {tpl.when[lang]}
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={text.split("\n").length + 1}
        spellCheck={false}
        className="w-full resize-y rounded-xl border border-black/10 bg-[#FBFCFD] p-4 font-mono text-[13.5px] leading-relaxed text-black/80 focus:border-[#17B26A]/50 focus:outline-none"
      />
    </div>
  );
}

export function TemplatesPage({ lang }: { lang: TplLang }) {
  const c = tplChrome[lang];
  const [checked, setChecked] = useState<boolean[]>(Array(tplChecklist.length).fill(false));
  const doneCount = checked.filter(Boolean).length;

  return (
    <Shell lang={lang}>
      <main className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <nav className="mb-6 text-xs text-black/50">
          <a href={homeHref(lang)} className="hover:underline">Accio Work</a>
          <span className="mx-1.5">/</span>
          <span className="text-black/70">{c.kicker}</span>
        </nav>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#17B26A]">{c.kicker}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-[38px] sm:leading-tight">{c.h1}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">{c.intro}</p>
        <img src="/img/tool-templates.webp" alt={IMG_ALT[lang]} width={800} height={800} loading="eager" className="mx-auto mt-6 w-full max-w-xs" />

        {/* Email templates */}
        <h2 className="mt-10 mb-5 text-xl font-semibold">{c.emailTitle}</h2>
        <div className="space-y-5">
          {tplTemplates.map((_, i) => (
            <TemplateCard key={i} lang={lang} idx={i} />
          ))}
        </div>

        {/* Checklist */}
        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-xl font-semibold">{c.checklistTitle}</h2>
            <span className="text-sm font-medium text-[#17B26A]">
              {doneCount}/{tplChecklist.length} {c.checklistDone}
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            {tplChecklist.map((item, i) => {
              const on = checked[i];
              return (
                <button
                  key={i}
                  onClick={() => setChecked((a) => a.map((v, j) => (j === i ? !v : v)))}
                  className={`flex w-full items-center gap-3 border-b border-black/5 px-5 py-3.5 text-left text-[15px] transition last:border-b-0 ${
                    on ? "bg-[#F3FBF7]" : "hover:bg-black/[0.02]"
                  }`}
                >
                  <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border ${on ? "border-[#17B26A] bg-[#17B26A] text-white" : "border-black/25"}`}>
                    {on && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className={on ? "text-black/50 line-through" : "text-black/80"}>{item[lang]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#0E1210] to-[#123A2A] p-7 text-center sm:p-9">
          <p className="mx-auto max-w-xl text-[16px] leading-relaxed text-white/85">{c.ctaLine}</p>
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer nofollow"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#17B26A] px-7 py-3.5 font-semibold text-white transition hover:brightness-110">
            {c.cta} <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-2 text-xs text-white/50">{c.ctaNote}</p>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-black/45">{c.disclaimer}</p>
      </main>
    </Shell>
  );
}
