import { useState } from "react";
import { ArrowRight, Check, Copy, CreditCard, Sparkles, Zap } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { localizedPath } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { pillarsFor } from "@/lib/sourcing-i18n";
import {
  FREE_SOURCING_RELEASE_URL,
  FREE_SOURCING_SLUG,
  freeSourcingNews,
} from "@/lib/news-free-sourcing";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-14 text-[28px] font-bold leading-tight text-foreground md:text-[36px]">
      {children}
    </h2>
  );
}

function PromptBlock({ label, text, copy, copied }: { label: string; text: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-muted/40">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
        <span>{label}</span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(text);
            setDone(true);
            setTimeout(() => setDone(false), 1500);
          }}
          className="flex items-center gap-1 rounded-full px-2 py-1 normal-case tracking-normal text-primary hover:bg-primary/10"
        >
          {done ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {done ? copied : copy}
        </button>
      </div>
      <pre className="whitespace-pre-wrap p-4 font-mono text-[14px] leading-relaxed text-foreground">
        <code>{text}</code>
      </pre>
    </div>
  );
}

const COPY_UI: Record<string, [string, string]> = {
  en: ["Copy prompt", "Copied"],
  ru: ["Скопировать", "Скопировано"],
  de: ["Prompt kopieren", "Kopiert"],
  it: ["Copia prompt", "Copiato"],
  es: ["Copiar prompt", "Copiado"],
  zh: ["复制指令", "已复制"],
  pt: ["Copiar prompt", "Copiado"],
  hi: ["प्रॉम्प्ट कॉपी करें", "कॉपी हो गया"],
  fr: ["Copier le prompt", "Copié"],
  ar: ["انسخ الطلب", "تم النسخ"],
};

export function FreeSourcingArticle({ lang }: { lang: Lang }) {
  const n = freeSourcingNews(lang);
  const [copy, copied] = COPY_UI[lang] ?? COPY_UI.en;
  const guides = pillarsFor(lang).slice(0, 4);
  const go = `/api/public/go?src=${FREE_SOURCING_SLUG}&lang=${lang}`;

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> {n.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">
          {n.title}
        </h1>
        <p className="mt-4 text-xl text-foreground/70">{n.lede}</p>
        <p className="mt-3 text-sm text-foreground/50">
          {n.dateLabel} - {n.readMin}
        </p>

        <H2>{n.whatTitle}</H2>
        {n.what.map((t) => (
          <p key={t} className="mb-4">{t}</p>
        ))}

        <H2>{n.freeTitle}</H2>
        <ul className="overflow-hidden rounded-2xl border border-border/70">
          {n.freeItems.map((it) => (
            <li
              key={it.name}
              className="flex flex-col gap-2 border-t border-border/60 bg-card px-5 py-4 first:border-t-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-medium text-foreground">{it.name}</span>
              {it.free ? (
                <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
                  <Check className="h-3.5 w-3.5" /> {n.freeLabel}
                </span>
              ) : (
                <span className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-bold text-foreground/70">
                  <CreditCard className="h-3.5 w-3.5" /> {n.paidLabel}
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-foreground/55">{n.freeNote}</p>

        <section className="my-12 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-10">
          <h2 className="text-[26px] font-bold leading-tight md:text-[32px]">{n.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-80">{n.ctaText}</p>
          <a
            href={go}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90"
          >
            {n.ctaBtn} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </section>

        <H2>{n.alsoTitle}</H2>
        <div className="grid gap-4 sm:grid-cols-2">
          {n.also.map((a) => (
            <div key={a.title} className="rounded-[24px] border border-border/70 bg-card p-6">
              <Zap className="h-5 w-5 text-primary" />
              <p className="mt-3 font-semibold text-foreground">{a.title}</p>
              <p className="mt-2 text-[16px] text-foreground/70">{a.body}</p>
            </div>
          ))}
        </div>

        <H2>{n.stepsTitle}</H2>
        <ol className="space-y-4">
          {n.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="mt-1 text-[16px] text-foreground/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <PromptBlock label={n.promptLabel} text={n.prompt} copy={copy} copied={copied} />
        </div>

        <H2>{n.limitsTitle}</H2>
        <ul className="list-disc space-y-3 ps-6">
          {n.limits.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">FAQ</h2>
        <div className="space-y-3">
          {n.faq.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border/70 bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-[16px] text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        <a
          href={go}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90"
        >
          {n.ctaBtn} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
        </a>

        <p className="mt-8 text-sm text-foreground/55">
          <a href={FREE_SOURCING_RELEASE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
            {n.sourceLabel}
          </a>
        </p>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">{n.moreTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {guides.map((g) => (
            <a
              key={g.slug}
              href={localizedPath(`/blog/${g.slug}`, lang)}
              className="rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary"
            >
              <p className="text-xs font-semibold text-primary">{g.badge}</p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{g.title}</p>
            </a>
          ))}
        </div>
      </article>
    </BlogShell>
  );
}
