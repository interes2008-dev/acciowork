import { useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { localizedPath } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { pillarsFor } from "@/lib/sourcing-i18n";
import { SELL_SLUG, SELL_SOURCES, sellNews } from "@/lib/news-sell-2027";
import { CNY_PATH, cnyNews } from "@/lib/news-cny-2027";
import { EUROPE_PACK_PATH, europePackNews } from "@/lib/news-europe-pack";
import { COPY_UI, H2, PromptBlock } from "@/components/news/NovUpdatesArticle";

export function SellArticle({ lang }: { lang: Lang }) {
  const n = sellNews(lang);
  const cny = cnyNews(lang);
  const eu = europePackNews(lang);
  const [copy, copied] = COPY_UI[lang] ?? COPY_UI.en;
  const [active, setActive] = useState(0);
  const cat = n.cats[active] ?? n.cats[0];
  const guides = pillarsFor(lang).slice(0, 2);
  const go = `/api/public/go?src=${SELL_SLUG}&lang=${lang}`;
  const cta = (
    <a href={go} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90">
      {n.ctaBtn} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
    </a>
  );

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <TrendingUp className="h-3.5 w-3.5" /> {n.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">{n.title}</h1>
        <p className="mt-4 text-xl text-foreground/70">{n.lede}</p>
        <p className="mt-3 text-sm text-foreground/50">{n.dateLabel} - {n.readMin}</p>

        <H2>{n.introTitle}</H2>
        {n.intro.map((t) => <p key={t} className="mb-4">{t}</p>)}

        <H2>{n.factsTitle}</H2>
        <div className="grid gap-4 sm:grid-cols-2">
          {n.facts.map((f) => (
            <div key={f.label} className="rounded-[24px] border border-border/70 bg-card p-6">
              <p className="text-[34px] font-bold leading-none tracking-tight text-primary" dir="ltr">{f.value}</p>
              <p className="mt-3 text-[15px] leading-snug text-foreground/70">{f.label}</p>
            </div>
          ))}
        </div>

        <H2>{n.catsTitle}</H2>
        <p className="mb-6">{n.catsIntro}</p>
        <div className="flex flex-wrap gap-2" role="tablist">
          {n.cats.map((c, i) => (
            <button
              key={c.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-[15px] font-semibold transition ${i === active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"}`}
            >
              {c.name}
            </button>
          ))}
        </div>
        {cat && (
          <div className="mt-5 rounded-[24px] border border-border/70 bg-card p-6" role="tabpanel">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-[24px] font-bold text-foreground">{cat.name}</h3>
              <span className="text-[20px] font-bold text-primary">{cat.growth}</span>
            </div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {cat.ideas.map((idea) => (
                <li key={idea} className="rounded-xl bg-muted px-4 py-3 text-[16px] text-foreground">{idea}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-border/70 p-4 text-[15px] text-foreground/75">{cat.check}</p>
            <div className="mt-4">
              <PromptBlock label={n.promptLabel} text={cat.prompt} copy={copy} copied={copied} />
            </div>
          </div>
        )}

        <H2>{n.howTitle}</H2>
        <p className="mb-6">{n.howIntro}</p>
        <ol className="space-y-4">
          {n.how.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{s.when}</p>
                <p className="mt-1 font-semibold text-foreground">{s.title}</p>
                <p className="mt-1 text-[16px] text-foreground/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[14px] text-foreground/60">{n.howNote}</p>

        <section className="my-12 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-10">
          <h2 className="text-[26px] font-bold leading-tight md:text-[32px]">{n.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-80">{n.ctaText}</p>
          {cta}
        </section>

        <H2>{n.limitsTitle}</H2>
        <ul className="list-disc space-y-3 ps-6">{n.limits.map((l) => <li key={l}>{l}</li>)}</ul>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">FAQ</h2>
        <div className="space-y-3">
          {n.faq.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border/70 bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-[16px] text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        {cta}

        <div className="mt-8 space-y-1 text-sm text-foreground/55">
          {n.sourceLabels.map((label, i) => (
            <p key={label}>
              <a href={SELL_SOURCES[i]} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{label}</a>
            </p>
          ))}
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">{n.moreTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href={localizedPath(CNY_PATH, lang)} className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary">
            <p className="text-xs font-semibold text-primary">{cny.promoBadge}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">{cny.promoTitle}</p>
          </a>
          <a href={localizedPath(EUROPE_PACK_PATH, lang)} className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary">
            <p className="text-xs font-semibold text-primary">{n.newsLabel}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">{eu.promoTitle}</p>
          </a>
          {guides.map((g) => (
            <a key={g.slug} href={localizedPath(`/blog/${g.slug}`, lang)} className="rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary">
              <p className="text-xs font-semibold text-primary">{g.badge}</p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{g.title}</p>
            </a>
          ))}
        </div>
      </article>
    </BlogShell>
  );
}
