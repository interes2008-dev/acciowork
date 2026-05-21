import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Brain,
  Workflow,
  Search,
  LineChart,
  Zap,
  ShieldCheck,
  ArrowRight,
  Check,
  Menu,
  X,
  Lock,
  Clock,
  Factory,
  TrendingUp,
  PackageSearch,
  FileText,
  Lightbulb,
  BarChart3,
  Wand2,
  ArrowUpRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const REFERRAL_URL =
  "https://www.accio.com/invite-work?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function trackCta(label: string) {
  type AnyWin = Window & {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  const w = window as AnyWin;
  try {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "cta_click", cta_label: label });
    w.gtag?.("event", "cta_click", { cta_label: label });
    w.fbq?.("trackCustom", "CTAClick", { cta_label: label });
  } catch {
    /* no-op */
  }
}

type CtaProps = {
  label: string;
  variant?: "primary" | "ghost" | "outline";
  size?: "lg" | "md";
  className?: string;
  trackingId: string;
  icon?: boolean;
  href?: string;
  external?: boolean;
};

function Cta({
  label,
  variant = "primary",
  size = "lg",
  className = "",
  trackingId,
  icon = true,
  href,
  external = true,
}: CtaProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";
  const sizes = size === "lg" ? "h-12 px-7 text-[15px]" : "h-10 px-5 text-sm";
  const variants = {
    primary:
      "bg-gradient-primary text-primary-foreground shadow-elegant hover:-translate-y-0.5 hover:shadow-glow active:translate-y-0",
    outline:
      "border border-border bg-background/60 backdrop-blur text-foreground hover:bg-background hover:border-primary/40",
    ghost: "text-foreground hover:bg-muted",
  } as const;
  const finalHref = href ?? REFERRAL_URL;
  const isExternal = external && !href;
  return (
    <a
      href={finalHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={() => trackCta(trackingId)}
      data-cta={trackingId}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      {label}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-up");
            (e.target as HTMLElement).style.opacity = "1";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass flex items-center justify-between rounded-full border border-white/40 px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 pl-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              acciowork<span className="text-primary">.pro</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground">
              Capabilities
            </a>
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">
              How it works
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Cta
              label="Try Accio Work Free"
              size="md"
              trackingId="navbar"
              icon={false}
              className="hidden md:inline-flex"
            />
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass-strong mx-2 mt-2 rounded-2xl border border-white/40 p-4 shadow-soft md:hidden">
            <div className="flex flex-col gap-3">
              <a href="#capabilities" onClick={() => setOpen(false)} className="text-sm">
                Capabilities
              </a>
              <a href="#how" onClick={() => setOpen(false)} className="text-sm">
                How it works
              </a>
              <a href="#faq" onClick={() => setOpen(false)} className="text-sm">
                FAQ
              </a>
              <Cta label="Try Accio Work Free" size="md" trackingId="navbar_mobile" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const CHIPS: { label: string; icon: typeof Search }[] = [
  { label: "Supplier Search", icon: Factory },
  { label: "Market Research", icon: BarChart3 },
  { label: "Product Discovery", icon: PackageSearch },
  { label: "Trend Analysis", icon: TrendingUp },
  { label: "AI Content Creation", icon: FileText },
  { label: "Workflow Automation", icon: Workflow },
  { label: "Business Insights", icon: Lightbulb },
];

function Hero() {
  const [query, setQuery] = useState("");
  const go = () => {
    trackCta("hero_search");
    window.open(REFERRAL_URL, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="top" className="bg-hero relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/50 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div
          data-reveal
          className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          AI workspace for sourcing, research & automation
        </div>
        <h1
          data-reveal
          className="mx-auto max-w-4xl text-balance text-[2.2rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.6rem] lg:text-6xl"
        >
          Everything you need to{" "}
          <span className="text-gradient">work smarter</span> — powered by AI
        </h1>
        <p
          data-reveal
          className="mx-auto mt-4 max-w-2xl text-balance text-base text-muted-foreground md:mt-5 md:text-lg"
        >
          Research markets, compare suppliers, discover opportunities, automate
          workflows, and get results faster with Accio Work.
        </p>

        {/* Premium search panel */}
        <form
          data-reveal
          onSubmit={(e) => {
            e.preventDefault();
            go();
          }}
          className="relative mx-auto mt-8 max-w-3xl"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
          <div className="glass-strong flex items-center gap-2 rounded-2xl border border-white/60 p-2 shadow-elegant md:rounded-full">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary md:rounded-full">
              <Search className="h-4.5 w-4.5" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Describe what you want help with..."
              className="min-w-0 flex-1 bg-transparent px-1 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none md:text-[15px]"
              aria-label="What do you want help with?"
            />
            <button
              type="submit"
              onClick={() => trackCta("hero_search_btn")}
              className="group inline-flex h-11 items-center gap-1.5 rounded-xl bg-gradient-primary px-4 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow md:rounded-full md:px-5"
            >
              <Wand2 className="h-4 w-4" />
              <span className="hidden sm:inline">Ask AI</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {CHIPS.map((c) => (
              <a
                key={c.label}
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCta(`chip_${c.label}`)}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-white/70 px-3.5 py-1.5 text-xs text-foreground/80 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white hover:text-foreground hover:shadow-soft md:text-[13px]"
              >
                <c.icon className="h-3.5 w-3.5 text-primary" />
                {c.label}
              </a>
            ))}
          </div>
        </form>

        <div
          data-reveal
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Cta label="Try Accio Work Free" trackingId="hero_primary" />
          <Cta
            label="See How It Works"
            variant="outline"
            trackingId="hero_secondary"
            icon={false}
            href="#how"
            external={false}
          />
        </div>

        <ul
          data-reveal
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground"
        >
          {["Beginner friendly", "Fast setup", "No credit card required", "AI-powered assistance"].map(
            (t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" />
                {t}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      icon: Factory,
      title: "Find suppliers faster",
      body: "Compare manufacturers and sourcing options quickly with AI-ranked matches.",
    },
    {
      icon: TrendingUp,
      title: "Research products & trends",
      body: "Discover opportunities and real-time market demand in seconds.",
    },
    {
      icon: FileText,
      title: "Generate business content",
      body: "Create listings, descriptions, reports and documents in your tone.",
    },
    {
      icon: BarChart3,
      title: "Analyze markets",
      body: "Get intelligent insights and clear business recommendations.",
    },
    {
      icon: Workflow,
      title: "Automate repetitive work",
      body: "Save hours every week with smarter AI workflows.",
    },
    {
      icon: Lightbulb,
      title: "Discover opportunities",
      body: "Receive recommendations personalized to your goals and niche.",
    },
  ];
  return (
    <section id="capabilities" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            What can <span className="text-gradient">Accio Work</span> do?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            One AI workspace for sourcing, research, content and automation — built for
            modern business work.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <div
              key={b.title}
              data-reveal
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div data-reveal className="mt-12 flex justify-center">
          <Cta label="Try Accio Work Free" trackingId="capabilities_cta" />
        </div>
      </div>
    </section>
  );
}

/* ============ Preview Mockup cards ============ */

function SupplierCard() {
  const rows = [
    { name: "Shenzhen Lumio Co.", score: 96, tag: "Verified" },
    { name: "Greenline Manufacturing", score: 91, tag: "Top match" },
    { name: "Aria Industrial Group", score: 88, tag: "Fast ship" },
  ];
  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-elegant backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Factory className="h-4 w-4" />
          </span>
          <p className="text-sm font-semibold">Supplier comparison</p>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
          AI ranked
        </span>
      </div>
      <div className="mt-4 space-y-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl border border-border/60 bg-background/60 px-3 py-2.5"
          >
            <div>
              <div className="text-xs font-medium">{r.name}</div>
              <div className="text-[10px] text-muted-foreground">{r.tag}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-primary"
                  style={{ width: `${r.score}%` }}
                />
              </div>
              <span className="text-xs font-semibold tabular-nums">{r.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrendCard() {
  const bars = [32, 48, 41, 60, 55, 72, 68, 84, 79, 92];
  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-elegant backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="h-4 w-4" />
          </span>
          <p className="text-sm font-semibold">Trend analysis</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
          <ArrowUpRight className="h-3 w-3" /> +24%
        </span>
      </div>
      <div className="mt-4 flex h-28 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-md bg-gradient-to-t from-primary/30 to-primary/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
        <span>Smart home · 90d</span>
        <span>High demand</span>
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-elegant backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <PackageSearch className="h-4 w-4" />
        </span>
        <p className="text-sm font-semibold">Product research</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-xl border border-border/60 bg-background/60 p-2">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/15 to-accent/40" />
            <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-foreground/10" />
            <div className="mt-1 h-1.5 w-1/2 rounded-full bg-foreground/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportCard() {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-elegant backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-4 w-4" />
          </span>
          <p className="text-sm font-semibold">AI-generated report</p>
        </div>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
          Draft
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2 w-11/12 rounded-full bg-foreground/10" />
        <div className="h-2 w-10/12 rounded-full bg-foreground/10" />
        <div className="h-2 w-9/12 rounded-full bg-foreground/10" />
        <div className="h-2 w-7/12 rounded-full bg-foreground/10" />
        <div className="mt-3 rounded-xl border border-border/60 bg-secondary/40 p-3">
          <div className="flex items-center gap-2 text-[11px] font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Summary
          </div>
          <div className="mt-1.5 h-1.5 w-full rounded-full bg-foreground/10" />
          <div className="mt-1 h-1.5 w-5/6 rounded-full bg-foreground/10" />
        </div>
      </div>
    </div>
  );
}

function WorkflowCard() {
  const steps = ["Source", "Compare", "Decide", "Order"];
  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-elegant backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Workflow className="h-4 w-4" />
        </span>
        <p className="text-sm font-semibold">Workflow recommendation</p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-xl border border-border/60 bg-background/60 px-2.5 py-2 text-center text-[11px] font-medium">
              {s}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-700">
        <Zap className="h-3.5 w-3.5" /> Saves ~6 hours / week
      </div>
    </div>
  );
}

function InsightCard() {
  return (
    <div className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-elegant backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Lightbulb className="h-4 w-4" />
        </span>
        <p className="text-sm font-semibold">Market insight</p>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { k: "Demand", v: "High" },
          { k: "Margin", v: "32%" },
          { k: "Risk", v: "Low" },
        ].map((m) => (
          <div key={m.k} className="rounded-xl border border-border/60 bg-background/60 p-3 text-center">
            <div className="text-[10px] text-muted-foreground">{m.k}</div>
            <div className="mt-0.5 text-sm font-semibold text-gradient">{m.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-foreground/10" />
        <div className="h-1.5 w-4/5 rounded-full bg-foreground/10" />
      </div>
    </div>
  );
}

function PreviewSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Preview</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            A glimpse inside <span className="text-gradient">Accio Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Realistic surfaces from sourcing to insights — every result one click away.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div data-reveal className="lg:[transform:translateY(8px)]"><SupplierCard /></div>
          <div data-reveal className="lg:[transform:translateY(-8px)]"><TrendCard /></div>
          <div data-reveal className="lg:[transform:translateY(4px)]"><ProductCard /></div>
          <div data-reveal className="lg:[transform:translateY(-4px)]"><ReportCard /></div>
          <div data-reveal className="lg:[transform:translateY(8px)]"><WorkflowCard /></div>
          <div data-reveal className="lg:[transform:translateY(-8px)]"><InsightCard /></div>
        </div>

        <div data-reveal className="mt-12 flex justify-center">
          <Cta label="Open Accio Work" trackingId="preview_cta" />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Sign up", body: "Create your free account in under a minute.", icon: Sparkles },
    {
      n: "02",
      title: "Choose what you need",
      body: "Search, analyze, compare, research, or automate.",
      icon: Search,
    },
    {
      n: "03",
      title: "Get AI-powered results",
      body: "Start working smarter in minutes — not days.",
      icon: Wand2,
    },
  ];
  return (
    <section id="how" className="relative bg-gradient-to-b from-background to-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Three steps to smarter work
          </h2>
        </div>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
          {steps.map((s) => (
            <div
              key={s.n}
              data-reveal
              className="relative rounded-2xl border border-border/70 bg-card/80 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-semibold text-primary-foreground shadow-elegant">
                  {s.n}
                </div>
                <s.icon className="h-5 w-5 text-primary/70" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="mt-12 flex justify-center">
          <Cta label="Get Free Access" trackingId="how_cta" />
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const reasons = [
    { icon: Zap, title: "Faster research", body: "Cut hours of digging down to a clear answer." },
    { icon: Brain, title: "Better decisions", body: "AI-assisted insights you can actually act on." },
    { icon: Workflow, title: "Less repetitive work", body: "Hand off the boring tasks to your AI workspace." },
    { icon: LineChart, title: "Smarter productivity", body: "Spend more time on the work that grows your business." },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Why Accio Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Why people use <span className="text-gradient">Accio Work</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              data-reveal
              className="rounded-2xl border border-border/70 bg-card/80 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl border border-border/60 bg-card/70 px-5 py-4 text-xs text-muted-foreground backdrop-blur">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Secure & private</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> 2-min setup</span>
          <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-primary" /> No card required</span>
          <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-primary" /> Beginner friendly</span>
        </div>
      </div>
    </section>
  );
}

function MidCta({ headline, label, id }: { headline: string; label: string; id: string }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div
          data-reveal
          className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-border/70 bg-gradient-to-br from-primary/5 via-card to-accent/30 px-6 py-7 shadow-soft md:flex-row md:px-10"
        >
          <p className="text-lg font-medium tracking-tight md:text-xl">{headline}</p>
          <Cta label={label} trackingId={id} />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "What is Accio Work?",
      a: "Accio Work is an AI workspace that helps you research markets, compare suppliers, generate business content, and automate repetitive workflows in one place.",
    },
    {
      q: "What can I actually do with it?",
      a: "Find and compare suppliers, run product and trend research, generate listings or reports, analyze markets, and automate recurring tasks — all from a single AI-powered interface.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. You simply describe what you need in plain language and Accio Work returns structured results, suggestions, and ready-to-use content.",
    },
    {
      q: "Is registration free?",
      a: "Yes — you can create an account and start using Accio Work for free. No credit card required to get started.",
    },
    {
      q: "How quickly can I get value?",
      a: "Most people see their first useful result within a few minutes of signing up. Setup takes around two minutes.",
    },
    {
      q: "Is this the official Accio?",
      a: "acciowork.pro is an independent informational landing page. All CTAs send you to the official Accio platform to sign up.",
    },
  ];
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div data-reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Questions, answered
          </h2>
        </div>
        <div data-reveal className="mt-10 rounded-3xl border border-border/70 bg-card/70 p-2 backdrop-blur">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, i) => (
              <AccordionItem
                key={it.q}
                value={`item-${i}`}
                className="border-b border-border/60 px-4 last:border-0"
              >
                <AccordionTrigger className="text-left text-base font-medium">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div data-reveal className="mt-10 flex justify-center">
          <Cta label="Get Free Access" trackingId="faq_cta" />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-primary opacity-[0.07]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 data-reveal className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Start working <span className="text-gradient">smarter today</span>
        </h2>
        <p
          data-reveal
          className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg"
        >
          Explore smarter workflows, research tools, and AI-powered assistance in minutes.
        </p>
        <div data-reveal className="mt-9 flex justify-center">
          <Cta label="Get Free Access" trackingId="final_cta" />
        </div>
        <div
          data-reveal
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-primary" /> Secure access
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" /> 2-min setup
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-primary" /> No card required
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              acciowork<span className="text-primary">.pro</span>
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Independent informational website. Not affiliated with Accio.
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Links
            </p>
            <ul className="mt-4 space-y-2">
              <li><a href="#capabilities" className="text-foreground/80 hover:text-foreground">Capabilities</a></li>
              <li><a href="#how" className="text-foreground/80 hover:text-foreground">How it works</a></li>
              <li><a href="#faq" className="text-foreground/80 hover:text-foreground">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <Cta label="Try Accio Work Free" trackingId="footer_cta" />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground">
        © {new Date().getFullYear()} acciowork.pro
      </div>
    </footer>
  );
}

function StickyMobileCta() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setHidden(max > 0 && window.scrollY / max > 0.95);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-300 md:hidden ${
        hidden ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="glass-strong flex items-center justify-between gap-3 rounded-2xl border border-white/50 p-2.5 shadow-elegant">
        <div className="pl-1">
          <div className="text-sm font-semibold leading-tight">Try Accio Work free</div>
          <div className="text-[11px] text-muted-foreground">No card · 2-min setup</div>
        </div>
        <Cta label="Start free" size="md" trackingId="sticky_mobile" />
      </div>
    </div>
  );
}

function ExitIntent() {
  const [open, setOpen] = useState(false);
  const shown = useRef(false);
  useEffect(() => {
    if (sessionStorage.getItem("aw_exit_shown")) {
      shown.current = true;
      return;
    }
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const onLeave = (e: MouseEvent) => {
      if (shown.current) return;
      if (e.clientY <= 0) {
        shown.current = true;
        sessionStorage.setItem("aw_exit_shown", "1");
        setOpen(true);
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, []);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-up"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="glass-strong relative w-full max-w-md rounded-3xl border border-white/60 p-8 text-center shadow-elegant">
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">Before you go…</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Try Accio Work free — research, sourcing, and automation in one AI workspace.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Cta label="Get Free Access" trackingId="exit_popup_primary" />
          <Button
            variant="ghost"
            onClick={() => setOpen(false)}
            className="rounded-full text-muted-foreground"
          >
            Maybe later
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <MidCta headline="Ready to work smarter?" label="Try It Now" id="mid_cta_1" />
        <PreviewSection />
        <HowItWorks />
        <Trust />
        <MidCta headline="Explore AI-powered opportunities" label="Launch Access" id="mid_cta_2" />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
      <ExitIntent />
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
