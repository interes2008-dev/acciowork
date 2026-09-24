import { useMemo, useState } from "react";
import { Check, Copy, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { PILLARS, SOURCING_CTA_URL, type Pillar } from "@/lib/sourcing-pillars";

function CopyBlock({ label, text }: { label: string; text: string }) {
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
          {done ? "Copied" : "Copy prompt"}
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

function SavingsWidget() {
  const [suppliers, setSuppliers] = useState(10);
  const [orders, setOrders] = useState(2);
  const [rate, setRate] = useState(40);
  const manual = suppliers * 1.5 + 6; // hours per sourcing round
  const agent = suppliers * 0.1 + 1; // human review time
  const saved = Math.max(0, (manual - agent) * orders);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <Num label="Suppliers contacted per product" value={suppliers} onChange={setSuppliers} />
        <Num label="Sourcing rounds per month" value={orders} onChange={setOrders} />
        <Num label="Your hourly value" value={rate} onChange={setRate} suffix="$/h" />
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6">
        <p className="text-sm text-foreground/70">Estimated time saved per month</p>
        <p className="text-4xl font-bold text-primary">{saved.toFixed(0)} h</p>
        <p className="mt-3 text-sm text-foreground/70">Worth about</p>
        <p className="text-2xl font-bold text-foreground">${(saved * rate).toLocaleString("en-US", { maximumFractionDigits: 0 })}/mo</p>
        <p className="mt-3 text-xs text-foreground/50">
          Estimate: ~1.5 h manual work per supplier + 6 h setup vs. ~6 min review per supplier with an agent.
        </p>
      </div>
    </div>
  );
}

function LandedWidget() {
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
        <Num label="EXW price / unit" value={exw} onChange={setExw} step={0.1} suffix="$" />
        <Num label="Quantity" value={qty} onChange={setQty} />
        <Num label="Freight total" value={freight} onChange={setFreight} suffix="$" />
        <Num label="Duty rate" value={duty} onChange={setDuty} suffix="%" />
        <Num label="Brokerage + port fees" value={fees} onChange={setFees} suffix="$" />
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-primary/10 p-6">
        <p className="text-sm text-foreground/70">Landed cost per unit</p>
        <p className="text-4xl font-bold text-primary">${r.unit.toFixed(2)}</p>
        <p className="mt-3 text-sm text-foreground/70">
          Total ${r.total.toLocaleString("en-US", { maximumFractionDigits: 0 })} - that's{" "}
          <b className="text-foreground">+{r.markup.toFixed(0)}%</b> on top of EXW.
        </p>
        <p className="mt-3 text-xs text-foreground/50">
          Includes 0.8% insurance and 3% payment fees. Duty rates change - confirm with your broker.
        </p>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <section className="my-14 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-12">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <Sparkles className="h-4 w-4" /> Free to start
      </p>
      <h2 className="mt-3 text-[28px] font-bold leading-tight md:text-[36px]">
        Delegate your first China sourcing task for free tonight
      </h2>
      <p className="mt-3 max-w-2xl text-lg opacity-80">
        Paste one prompt. Wake up to a vetted supplier shortlist, RFQs sent and quotes in a spreadsheet.
      </p>
      <a
        href={SOURCING_CTA_URL}
        target="_blank"
        rel="noopener"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90"
      >
        Start free with Accio Work <ArrowRight className="h-4 w-4" />
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

export function PillarArticle({ pillar: p }: { pillar: Pillar }) {
  const others = PILLARS.filter((x) => x.slug !== p.slug);
  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <nav className="mb-6 text-sm text-foreground/60">
          <a href="/blog/china-sourcing" className="hover:text-foreground">China Sourcing Hub</a>
          <span className="mx-2">/</span>
          <span>Part {p.n} of 5</span>
        </nav>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> {p.badge}
        </span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight tracking-tight text-foreground md:text-[44px]">
          {p.title}
        </h1>
        <p className="mt-4 text-xl text-foreground/70">{p.description}</p>
        <p className="mt-3 text-sm text-foreground/50">{p.readingMinutes} min read - Accio Work</p>

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

        <H2 n={2}>The new way: one prompt to an AI agent team</H2>
        <CopyBlock label="Prompt given to Accio Work" text={p.prompt} />
        {p.newWay.map((t, i) => (
          <p key={i} className="mt-4">{t}</p>
        ))}

        <H2 n={3}>What the agent hands back</H2>
        <p className="mb-3 text-sm font-semibold text-foreground/70">{p.artifactCaption}</p>
        <div className="overflow-x-auto rounded-2xl border border-border/70">
          <table className="w-full min-w-[640px] text-left text-[15px]">
            <thead className="bg-muted/60 text-xs uppercase tracking-wider text-foreground/60">
              <tr>
                {["Supplier", "Factory type", "Price tier", "MOQ", "Certifications", "Risk"].map((h) => (
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

        <H2 n={4}>Step-by-step: apply this today</H2>
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
        <p className="mb-3 mt-8 font-semibold text-foreground">Quick-copy prompts</p>
        <div className="space-y-4">
          {p.copyPrompts.map((c) => <CopyBlock key={c.label} {...c} />)}
        </div>

        <H2 n={5}>{p.widget === "landed" ? "Landed cost calculator" : "Sourcing time-savings calculator"}</H2>
        <div className="rounded-[32px] border border-border/70 bg-card p-6 md:p-8">
          {p.widget === "landed" ? <LandedWidget /> : <SavingsWidget />}
        </div>

        <CtaBanner />

        <h2 className="mb-5 text-[28px] font-bold text-foreground">FAQ</h2>
        <div className="space-y-3">
          {p.faq.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border/70 bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-[16px] text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">More from the China Sourcing series</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {others.map((o) => (
            <a key={o.slug} href={`/blog/${o.slug}`} className="rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary">
              <p className="text-xs font-semibold text-primary">Part {o.n} - {o.badge}</p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{o.title}</p>
            </a>
          ))}
        </div>
      </article>
    </BlogShell>
  );
}

export function SourcingHub() {
  return (
    <BlogShell>
      <section className="mx-auto max-w-4xl">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">China Sourcing Hub</span>
        <h1 className="mt-4 text-[32px] font-bold leading-tight text-foreground md:text-[48px]">
          Sourcing in China with AI agents: the complete playbook
        </h1>
        <p className="mt-4 text-xl text-foreground/70">
          Five deep-dive guides on vetting factories, negotiating MOQs, calculating landed cost and running real sourcing workflows with an AI agent team backed by Alibaba data - 400M+ products and 1.5M+ verified suppliers.
        </p>
        <div className="mt-10 grid gap-4">
          {PILLARS.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-5 rounded-[32px] border border-border/70 bg-card p-6 transition hover:border-primary md:p-8">
              <span className="text-3xl font-bold text-primary">0{p.n}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">{p.badge} - {p.readingMinutes} min</p>
                <p className="mt-1 text-xl font-bold leading-snug text-foreground">{p.title}</p>
                <p className="mt-2 text-[16px] text-foreground/70">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
        <CtaBanner />
      </section>
    </BlogShell>
  );
}
