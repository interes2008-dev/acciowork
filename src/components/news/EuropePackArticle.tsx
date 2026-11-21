import { ArrowRight, Sparkles } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { localizedPath } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { pillarsFor } from "@/lib/sourcing-i18n";
import {
  EUROPE_PACK_BENCH_URL,
  EUROPE_PACK_SLUG,
  EUROPE_PACK_SOURCE_URL,
  europePackNews,
} from "@/lib/news-europe-pack";
import { FREE_SOURCING_PATH, freeSourcingNews } from "@/lib/news-free-sourcing";
import { NOV_UPDATES_PATH, novUpdatesNews } from "@/lib/news-nov-updates";
import { COPY_UI, H2, PromptBlock } from "@/components/news/NovUpdatesArticle";

// Alibaba.com Commerce Agent Bench, 107 tasks (vendor-run test, reported 19-21 Nov 2026).
const BENCH = [
  { name: "Accio", cost: 3.69, highlight: true },
  { name: "OpenAI Codex", cost: 9.27, highlight: false },
  { name: "Anthropic Claude Code", cost: 9.51, highlight: false },
];
const BENCH_MAX = Math.max(...BENCH.map((b) => b.cost));

export function EuropePackArticle({ lang }: { lang: Lang }) {
  const n = europePackNews(lang);
  const free = freeSourcingNews(lang);
  const nov = novUpdatesNews(lang);
  const [copy, copied] = COPY_UI[lang] ?? COPY_UI.en;
  const guides = pillarsFor(lang).slice(0, 2);
  const go = `/api/public/go?src=${EUROPE_PACK_SLUG}&lang=${lang}`;

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> {n.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">{n.title}</h1>
        <p className="mt-4 text-xl text-foreground/70">{n.lede}</p>
        <p className="mt-3 text-sm text-foreground/50">
          {n.dateLabel} - {n.readMin}
        </p>

        <H2>{n.introTitle}</H2>
        {n.intro.map((t) => (
          <p key={t} className="mb-4">{t}</p>
        ))}

        <H2>{n.factsTitle}</H2>
        <div className="grid gap-4 sm:grid-cols-2">
          {n.facts.map((f) => (
            <div key={f.label} className="rounded-[24px] border border-border/70 bg-card p-6">
              <p className="text-[34px] font-bold leading-none tracking-tight text-primary" dir="ltr">{f.value}</p>
              <p className="mt-3 text-[15px] leading-snug text-foreground/70">{f.label}</p>
            </div>
          ))}
        </div>

        <H2>{n.packTitle}</H2>
        <p className="mb-6">{n.packIntro}</p>
        <ol className="grid gap-4 sm:grid-cols-2">
          {n.pack.map((p, i) => (
            <li key={p.title} className="rounded-[24px] border border-border/70 bg-card p-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-3 text-[20px] font-bold leading-snug text-foreground">{p.title}</h3>
              <p className="mt-2 text-[16px] text-foreground/75">{p.body}</p>
            </li>
          ))}
        </ol>

        <H2>{n.benchTitle}</H2>
        <p className="mb-6">{n.benchText}</p>
        <div className="space-y-4 rounded-[24px] border border-border/70 bg-card p-6">
          {BENCH.map((b) => (
            <div key={b.name}>
              <div className="flex items-baseline justify-between gap-3 text-[15px]">
                <span className={b.highlight ? "font-bold text-foreground" : "text-foreground/70"} dir="ltr">{b.name}</span>
                <span className={b.highlight ? "font-bold text-primary" : "font-semibold text-foreground/70"} dir="ltr">
                  ${b.cost.toFixed(2)}
                </span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full ${b.highlight ? "bg-primary" : "bg-foreground/30"}`}
                  style={{ width: `${(b.cost / BENCH_MAX) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <p className="pt-2 text-[14px] text-foreground/60">{n.benchNote}</p>
        </div>

        <H2>{n.whoTitle}</H2>
        <ul className="list-disc space-y-3 ps-6">
          {n.who.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>

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

        <div className="mt-8 space-y-1 text-sm text-foreground/55">
          <p>
            <a href={EUROPE_PACK_SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              {n.sourceLabel}
            </a>
          </p>
          <p>
            <a href={EUROPE_PACK_BENCH_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              {n.sourceLabel2}
            </a>
          </p>
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">{n.moreTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={localizedPath(FREE_SOURCING_PATH, lang)}
            className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary"
          >
            <p className="text-xs font-semibold text-primary">{n.newsLabel}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">{free.title}</p>
          </a>
          <a
            href={localizedPath(NOV_UPDATES_PATH, lang)}
            className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary"
          >
            <p className="text-xs font-semibold text-primary">{n.newsLabel}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">{nov.promoTitle}</p>
          </a>
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
