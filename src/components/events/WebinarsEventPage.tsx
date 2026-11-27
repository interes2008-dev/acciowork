import { ArrowRight, CalendarDays, Gift, Radio } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { localizedPath } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { SESSIONS, WEBINARS_AS_OF, WEBINARS_SLUG, webinarsEvent } from "@/lib/events-webinars";
import { EUROPE_PACK_PATH, europePackNews } from "@/lib/news-europe-pack";
import { COPY_UI, H2, PromptBlock } from "@/components/news/NovUpdatesArticle";

const LOCALE: Record<string, string> = { en: "en-GB", ru: "ru-RU", de: "de-DE", it: "it-IT", es: "es-ES", zh: "zh-CN", pt: "pt-BR", hi: "hi-IN", fr: "fr-FR", ar: "ar" };

function fmt(iso: string, lang: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString(LOCALE[lang] ?? "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export function WebinarsEventPage({ lang }: { lang: Lang }) {
  const n = webinarsEvent(lang);
  const europe = europePackNews(lang);
  const [copy, copied] = COPY_UI[lang] ?? COPY_UI.en;
  const go = `/api/public/go?src=${WEBINARS_SLUG}&lang=${lang}`;
  const upcoming = SESSIONS.filter((s) => s.iso >= WEBINARS_AS_OF);
  const past = SESSIONS.filter((s) => s.iso < WEBINARS_AS_OF);

  const Card = ({ s, live }: { s: (typeof SESSIONS)[number]; live: boolean }) => (
    <li className={`rounded-[24px] border p-6 ${live ? "border-primary/50 bg-primary/5" : "border-border/70 bg-card"}`}>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${live ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/60"}`}>
          {live ? n.statusUpcoming : n.statusPast}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-foreground">
          <CalendarDays className="h-4 w-4 text-primary" /> {fmt(s.iso, lang)}
        </span>
        <span className="text-foreground/55" dir="ltr">{s.when}</span>
      </div>
      <h3 className="mt-3 text-[20px] font-bold leading-snug text-foreground" dir="ltr">{s.title}</h3>
      <p className="mt-2 text-[16px] text-foreground/75">{n.topics[s.topic]}</p>
      <a href={s.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
        {n.openBtn} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
      </a>
    </li>
  );

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Radio className="h-3.5 w-3.5" /> {n.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">{n.title}</h1>
        <p className="mt-4 text-xl text-foreground/70">{n.lede}</p>
        <p className="mt-3 text-sm text-foreground/50">{n.dateLabel}</p>

        <H2>{n.bonusesTitle}</H2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {n.bonuses.map((b) => (
            <li key={b} className="flex gap-3 rounded-2xl border border-border/70 bg-card p-5">
              <Gift className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span className="text-[16px] text-foreground/80">{b}</span>
            </li>
          ))}
        </ul>

        {upcoming.length > 0 && (
          <>
            <H2>{n.upcomingTitle}</H2>
            <ul className="space-y-4">{upcoming.map((s) => <Card key={s.url} s={s} live />)}</ul>
          </>
        )}

        <H2>{n.pastTitle}</H2>
        <ul className="space-y-4">{past.map((s) => <Card key={s.url} s={s} live={false} />)}</ul>

        <H2>{n.howTitle}</H2>
        <ol className="space-y-4">
          {n.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
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

        <section className="my-12 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-10">
          <h2 className="text-[26px] font-bold leading-tight md:text-[32px]">{n.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-80">{n.ctaText}</p>
          <a href={go} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90">
            {n.ctaBtn} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </section>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">FAQ</h2>
        <div className="space-y-3">
          {n.faq.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border/70 bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-[16px] text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm text-foreground/55">{n.sourceNote}</p>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">{n.moreTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href={localizedPath("/events/free-forever", lang)} className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary">
            <p className="text-xs font-semibold text-primary">{n.badge}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">Accio Work - Free Forever</p>
          </a>
          <a href={localizedPath(EUROPE_PACK_PATH, lang)} className="rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary">
            <p className="text-xs font-semibold text-primary">{europe.badge}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">{europe.title}</p>
          </a>
        </div>
      </article>
    </BlogShell>
  );
}
