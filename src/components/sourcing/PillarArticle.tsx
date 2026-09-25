import { useMemo, useState } from "react";
import { Check, Copy, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { SOURCING_CTA_URL, type Pillar } from "@/lib/sourcing-pillars";
import { langPrefix, pillarsFor, sourcingUi, type SourcingUi } from "@/lib/sourcing-i18n";

function CopyBlock({ label, text, u }: { label: string; text: string; u: SourcingUi }) {
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
          {done ? u.copied : u.copyPrompt}
        </button>
      </div>
      <pre className="whitespace-pre-wrap p-4 font-mono text-[14px] leading-relaxed text-foreground">
        <code>{text}</code>
      </pre>
    </div>
  );
}

function riskClass(r: number) {
  if (r < 25) return "bg-primary/15 text-primary";
  if (r < 45) return "bg-accent text-accent-foreground";
  return "bg-destructive/15 text-destructive";
}

function Num({
  label,
  value,
  onChange,
  step = 1,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  suffix?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="text-foreground/70">{label}</span>
      <div className="mt-1 flex items-center rounded-xl border border-border bg-background px-3">
        <input
          type="number"
          min={0}
          step={step}
          value={value}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="w-full bg-transparent py-2 text-base outline-none"
        />
        {suffix && <span className="text-foreground/50">{suffix}</span>}
      </div>
    </label>
  );
}

function SavingsWidget({ u }: { u: SourcingUi }) {
  const [suppliers, setSuppliers] = useState(10);
  const [orders, setOrders] = useState(2);
  const [rate, setRate] = useState(40);
  const manual = suppliers * 1.5 + 6; // hours per sourcing round
  const agent = suppliers * 0.1 + 1; // human review time
  const saved = Math.max(0, (manual - agent) * orders);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <Num label={u.suppliersPer} value={suppliers} onChange={setSuppliers} />
        <Num label={u.rounds} value={orders} onChange={setOrders} />
        <Num label={u.hourly} value={rate} onChange={setRate} suffix="$/h" />
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6">
        <p className="text-sm text-foreground/70">{u.timeSaved}</p>
        <p className="text-4xl font-bold text-primary">{saved.toFixed(0)} {u.hoursShort}</p>
        <p className="mt-3 text-sm text-foreground/70">{u.worth}</p>
        <p className="text-2xl font-bold text-foreground">${(saved * rate).toLocaleString("en-US", { maximumFractionDigits: 0 })}{u.perMonth}</p>
        <p className="mt-3 text-xs text-foreground/50">
          {u.savingsNote}
        </p>
      </div>
    </div>
  );
}

function LandedWidget({ u }: { u: SourcingUi }) {
  const [exw, setExw] = useState(5.1);
  const [qty, setQty] = useState(500);
  const [freight, setFreight] = useState(350);
  const [duty, setDuty] = useState(10);
  const [fees, setFees] = useState(250);
  const r = useMemo(() => {
    const goods = exw * qty;
    const ins = goods * 0.008;
    const dutyAmt = (goods + freight + ins) * (duty / 100);
    const pay = goods * 0.03;
    const total = goods + freight + ins + dutyAmt + fees + pay;
    return { total, unit: qty ? total / qty : 0, markup: goods ? (total / goods - 1) * 100 : 0 };
  }, [exw, qty, freight, duty, fees]);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="grid grid-cols-2 gap-3">
        <Num label={u.exw} value={exw} onChange={setExw} step={0.1} suffix="$" />
        <Num label={u.qty} value={qty} onChange={setQty} />
        <Num label={u.freight} value={freight} onChange={setFreight} suffix="$" />
        <Num label={u.duty} value={duty} onChange={setDuty} suffix="%" />
        <Num label={u.fees} value={fees} onChange={setFees} suffix="$" />
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6">
        <p className="text-sm text-foreground/70">{u.landedUnit}</p>
        <p className="text-4xl font-bold text-primary">${r.unit.toFixed(2)}</p>
        <p className="mt-3 text-sm text-foreground/70">
          {u.total} ${r.total.toLocaleString("en-US", { maximumFractionDigits: 0 })} - {u.thats}{" "}
          <b className="text-foreground">+{r.markup.toFixed(0)}%</b> {u.onTop}
        </p>
        <p className="mt-3 text-xs text-foreground/50">
          {u.landedNote}
        </p>
      </div>
    </div>
  );
}

function CtaBanner({ u }: { u: SourcingUi }) {
  return (
    <section className="my-14 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-12">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <Sparkles className="h-4 w-4" /> {u.freeStart}
      </p>
      <h2 className="mt-3 text-[28px] font-bold leading-tight md:text-[36px]">
        {u.ctaTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-lg opacity-80">
        {u.ctaText}
      </p>
      <a
        href={SOURCING_CTA_URL}
        target="_blank"
        rel="noopener"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90"
      >
        {u.ctaBtn} <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
}

function H2({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h2 className="mb-5 mt-14 flex items-baseline gap-3 text-[28px] font-bold leading-tight text-foreground md:text-[36px]">
      <span className="text-base font-semibold text-primary">0{n}</span>
      {children}
    </h2>
  );
}

export function PillarArticle({ pillar: p, lang = "en" }: { pillar: Pillar; lang?: string }) {
  const u = sourcingUi(lang);
  const pre = langPrefix(lang);
  const others = pillarsFor(lang).filter((x) => x.slug !== p.slug);
  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <nav className="mb-6 text-sm text-foreground/60">
          <a href={`${pre}/blog/china-sourcing`} className="hover:text-foreground">{u.hub}</a>
          <span className="mx-2">/</span>
          <span>{u.part} {p.n} {u.of5}</span>
        </nav>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> {p.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">
          {p.title}
        </h1>
        <p className="mt-4 text-xl text-foreground/70">{p.description}</p>
        <p className="mt-3 text-sm text-foreground/50">{p.readingMinutes} {u.minRead} - Accio Work</p>

        <H2 n={1}>{p.hookTitle}</H2>
        {p.hook.map((t, i) => (
          <p key={i} className="mb-4">{t}</p>
        ))}
        <div className="my-6 grid gap-3 sm:grid-cols-3">
          {p.painStats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/70 bg-card p-4">
              <p className="text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-sm text-foreground/60">{s.label}</p>
            </div>
          ))}
        </div>

        <H2 n={2}>{u.newWay}</H2>
        <CopyBlock u={u} label={u.promptGiven} text={p.prompt} />
        {p.newWay.map((t, i) => (
          <p key={i} className="mt-4">{t}</p>
        ))}

        <H2 n={3}>{u.handsBack}</H2>
        <p className="mb-3 text-sm font-semibold text-foreground/70">{p.artifactCaption}</p>
        <div className="overflow-x-auto rounded-2xl border border-border/70">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead className="bg-muted/60 text-xs uppercase tracking-wider text-foreground/60">
              <tr>
                {u.cols.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.rows.map((r) => (
                <tr key={r.supplier} className="border-t border-border/60">
                  <td className="px-4 py-3 font-medium text-foreground">{r.supplier}</td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3">{r.price}</td>
                  <td className="px-4 py-3">{r.moq}</td>
                  <td className="px-4 py-3">{r.certs}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${riskClass(r.risk)}`}>{r.risk}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {p.artifactNote && <p className="mt-2 text-xs text-foreground/50">{p.artifactNote}</p>}

        {p.extraTable && (
          <>
            <p className="mb-3 mt-8 text-sm font-semibold text-foreground/70">{p.extraTable.caption}</p>
            <div className="overflow-x-auto rounded-2xl border border-border/70">
              <table className="w-full min-w-[560px] text-left text-[15px]">
                <thead className="bg-muted/60 text-xs uppercase tracking-wider text-foreground/60">
                  <tr>{p.extraTable.head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {p.extraTable.rows.map((row, i) => (
                    <tr key={i} className="border-t border-border/60">
                      {row.map((c, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : ""}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <H2 n={4}>{u.stepByStep}</H2>
        <ol className="space-y-4">
          {p.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
              <div>
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="mt-1 text-[16px] text-foreground/70">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mb-3 mt-8 font-semibold text-foreground">{u.quickCopy}</p>
        <div className="space-y-4">
          {p.copyPrompts.map((c) => <CopyBlock u={u} key={c.label} {...c} />)}
        </div>

        <H2 n={5}>{p.widget === "landed" ? u.landedCalc : u.savingsCalc}</H2>
        <div className="rounded-[32px] border border-border/70 bg-card p-6 md:p-8">
          {p.widget === "landed" ? <LandedWidget u={u} /> : <SavingsWidget u={u} />}
        </div>

        <CtaBanner u={u} />

        <h2 className="mb-5 text-[28px] font-bold text-foreground">{u.faq}</h2>
        <div className="space-y-3">
          {p.faq.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border/70 bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-[16px] text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">{u.more}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {others.map((o) => (
            <a key={o.slug} href={`${pre}/blog/${o.slug}`} className="rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary">
              <p className="text-xs font-semibold text-primary">{u.part} {o.n} - {o.badge}</p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{o.title}</p>
            </a>
          ))}
        </div>
      </article>
    </BlogShell>
  );
}

export function SourcingHub({ lang = "en" }: { lang?: string }) {
  const u = sourcingUi(lang);
  const pre = langPrefix(lang);
  return (
    <BlogShell>
      <section className="mx-auto max-w-4xl">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{u.hub}</span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight text-foreground md:text-[48px]">
          {u.hubTitle}
        </h1>
        <p className="mt-4 text-xl text-foreground/70">
          {u.hubLede}
        </p>
        <div className="mt-10 grid gap-4">
          {pillarsFor(lang).map((p) => (
            <a key={p.slug} href={`${pre}/blog/${p.slug}`} className="group flex gap-5 rounded-[32px] border border-border/70 bg-card p-6 transition hover:border-primary md:p-8">
              <span className="text-3xl font-bold text-primary">0{p.n}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">{p.badge} - {p.readingMinutes} {u.min}</p>
                <p className="mt-1 text-xl font-bold leading-snug text-foreground">{p.title}</p>
                <p className="mt-2 text-[16px] text-foreground/70">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
        <CtaBanner u={u} />
      </section>
    </BlogShell>
  );
}
