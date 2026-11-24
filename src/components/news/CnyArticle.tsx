import { useEffect, useMemo, useState } from "react";
import { AlarmClock, ArrowRight } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { localizedPath } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { pillarsFor } from "@/lib/sourcing-i18n";
import { CNY_SLUG, CNY_SOURCES, cnyNews } from "@/lib/news-cny-2027";
import { SELL_PATH, sellNews } from "@/lib/news-sell-2027";
import { EUROPE_PACK_PATH, europePackNews } from "@/lib/news-europe-pack";
import { COPY_UI, H2, PromptBlock } from "@/components/news/NovUpdatesArticle";

const DATE_LOCALE: Record<string, string> = {
  en: "en-GB", ru: "ru-RU", de: "de-DE", it: "it-IT", es: "es-ES",
  zh: "zh-CN", pt: "pt-BR", hi: "hi-IN", fr: "fr-FR", ar: "ar-EG",
};

const DAY = 86_400_000;
const TRANSIT = { sea: 35, rail: 25, air: 7 } as const;
type Mode = keyof typeof TRANSIT;

/** Backward plan: order date = last pickup - (production + inspection); arrival = pickup + transit. */
function cnyPlan(pickupIso: string, prodDays: number, qcDays: number, mode: Mode) {
  const pickup = Date.parse(`${pickupIso}T00:00:00Z`);
  if (Number.isNaN(pickup)) return null;
  return {
    order: new Date(pickup - (Math.max(0, prodDays) + Math.max(0, qcDays)) * DAY),
    arrive: new Date(pickup + TRANSIT[mode] * DAY),
  };
}

function Calculator({ lang }: { lang: Lang }) {
  const n = cnyNews(lang);
  const [pickup, setPickup] = useState("2027-01-22");
  const [prod, setProd] = useState(30);
  const [qc, setQc] = useState(5);
  const [mode, setMode] = useState<Mode>("sea");
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => setToday(Date.now()), []);
  const plan = useMemo(() => cnyPlan(pickup, prod, qc, mode), [pickup, prod, qc, mode]);
  const fmt = new Intl.DateTimeFormat(DATE_LOCALE[lang] ?? "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  const field = "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-[16px] text-foreground";
  const late = plan && today !== null && plan.order.getTime() < today;

  return (
    <div className="rounded-[24px] border border-border/70 bg-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-[15px] text-foreground/70">
          {n.calcPickup}
          <input type="date" value={pickup} onChange={(e) => setPickup(e.target.value)} className={field} />
        </label>
        <label className="text-[15px] text-foreground/70">
          {n.calcMode}
          <select value={mode} onChange={(e) => setMode(e.target.value as Mode)} className={field}>
            <option value="sea">{n.modeSea}</option>
            <option value="rail">{n.modeRail}</option>
            <option value="air">{n.modeAir}</option>
          </select>
        </label>
        <label className="text-[15px] text-foreground/70">
          {n.calcProd}
          <input type="number" min={0} max={180} value={prod} onChange={(e) => setProd(Number(e.target.value) || 0)} className={field} />
        </label>
        <label className="text-[15px] text-foreground/70">
          {n.calcQc}
          <input type="number" min={0} max={60} value={qc} onChange={(e) => setQc(Number(e.target.value) || 0)} className={field} />
        </label>
      </div>
      {plan && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-primary/10 p-5">
            <p className="text-sm font-semibold text-primary">{n.resOrder}</p>
            <p className="mt-1 text-[26px] font-bold leading-tight text-foreground" data-testid="cny-order">{fmt.format(plan.order)}</p>
          </div>
          <div className="rounded-2xl bg-muted p-5">
            <p className="text-sm font-semibold text-foreground/60">{n.resArrive}</p>
            <p className="mt-1 text-[26px] font-bold leading-tight text-foreground">{fmt.format(plan.arrive)}</p>
          </div>
        </div>
      )}
      {late && <p className="mt-4 rounded-xl bg-destructive/10 p-4 text-[15px] text-destructive">{n.resLate}</p>}
      <p className="mt-4 text-[14px] text-foreground/60">{n.calcNote}</p>
    </div>
  );
}

export function CnyArticle({ lang }: { lang: Lang }) {
  const n = cnyNews(lang);
  const sell = sellNews(lang);
  const eu = europePackNews(lang);
  const [copy, copied] = COPY_UI[lang] ?? COPY_UI.en;
  const guides = pillarsFor(lang).filter((g) => g.slug !== "case-study-sourcing-electronics-48-hours").slice(0, 2);
  const go = `/api/public/go?src=${CNY_SLUG}&lang=${lang}`;
  const cta = (
    <a href={go} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90">
      {n.ctaBtn} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
    </a>
  );

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <AlarmClock className="h-3.5 w-3.5" /> {n.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">{n.title}</h1>
        <p className="mt-4 text-xl text-foreground/70">{n.lede}</p>
        <p className="mt-3 text-sm text-foreground/50">{n.dateLabel} - {n.readMin}</p>

        <H2>{n.introTitle}</H2>
        {n.intro.map((t) => <p key={t} className="mb-4">{t}</p>)}

        <H2>{n.datesTitle}</H2>
        <ol className="space-y-3">
          {n.dates.map((d, i) => (
            <li key={d.date} className={`flex flex-col gap-1 rounded-2xl border p-5 sm:flex-row sm:items-baseline sm:gap-5 ${i === 4 ? "border-primary bg-primary/5" : "border-border/70 bg-card"}`}>
              <span className="shrink-0 font-bold text-primary sm:w-44">{d.date}</span>
              <span className="text-[16px] text-foreground/75">{d.label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[14px] text-foreground/60">{n.datesNote}</p>

        <H2>{n.calcTitle}</H2>
        <p className="mb-6">{n.calcIntro}</p>
        <Calculator lang={lang} />

        <H2>{n.timelineTitle}</H2>
        <ol className="space-y-4">
          {n.timeline.map((s, i) => (
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

        <H2>{n.agentTitle}</H2>
        <p className="mb-6">{n.agentIntro}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {n.agent.map((a) => (
            <div key={a.title} className="rounded-[24px] border border-border/70 bg-card p-6">
              <h3 className="text-[20px] font-bold leading-snug text-foreground">{a.title}</h3>
              <p className="mt-2 text-[16px] text-foreground/75">{a.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <PromptBlock label={n.promptLabel} text={n.prompt} copy={copy} copied={copied} />
        </div>

        <section className="my-12 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-10">
          <h2 className="text-[26px] font-bold leading-tight md:text-[32px]">{n.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-80">{n.ctaText}</p>
          {cta}
        </section>

        <H2>{n.risksTitle}</H2>
        <ul className="list-disc space-y-3 ps-6">{n.risks.map((r) => <li key={r}>{r}</li>)}</ul>

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
              <a href={CNY_SOURCES[i]} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">{label}</a>
            </p>
          ))}
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">{n.moreTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href={localizedPath(SELL_PATH, lang)} className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary">
            <p className="text-xs font-semibold text-primary">{sell.promoBadge}</p>
            <p className="mt-1 font-semibold leading-snug text-foreground">{sell.promoTitle}</p>
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
