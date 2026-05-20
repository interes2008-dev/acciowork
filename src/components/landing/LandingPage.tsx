import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Rocket,
  Brain,
  Workflow,
  Search,
  LineChart,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Lock,
  Clock,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.png";

const REFERRAL_URL =
  "https://www.accio.com/invite-work?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

function trackCta(label: string) {
  // Lightweight CTA tracking — wires up to GA / Meta Pixel when present.
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
  const sizes =
    size === "lg" ? "h-12 px-7 text-[15px]" : "h-10 px-5 text-sm";
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
            <a href="#how" className="text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground">
              Benefits
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Cta
              label="Start with Accio"
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
              <a href="#how" onClick={() => setOpen(false)} className="text-sm">
                How It Works
              </a>
              <a href="#benefits" onClick={() => setOpen(false)} className="text-sm">
                Benefits
              </a>
              <a href="#faq" onClick={() => setOpen(false)} className="text-sm">
                FAQ
              </a>
              <Cta label="Start with Accio" size="md" trackingId="navbar_mobile" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-hero relative overflow-hidden pt-28 pb-14 md:pt-40 md:pb-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <div
          data-reveal
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Now live · AI-powered workflows for modern work
        </div>
        <h1
          data-reveal
          className="mx-auto max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Work smarter with <span className="text-gradient">AI that finds your next opportunity</span>
        </h1>
        <p
          data-reveal
          className="mx-auto mt-5 max-w-2xl text-balance text-base text-muted-foreground md:mt-6 md:text-lg"
        >
          Join thousands using Accio to discover curated tools, automate workflows, and unlock better online work — in minutes, not weeks.
        </p>

        <div
          data-reveal
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-9"
        >
          <Cta label="Get Free Access" trackingId="hero_primary" />
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
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground md:mt-7 md:text-sm"
        >
          {["Free to start", "No card required", "2-min setup"].map((t) => (
            <li key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-primary" />
              {t}
            </li>
          ))}
        </ul>

        <div data-reveal className="relative mx-auto mt-12 max-w-5xl md:mt-14">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-2 shadow-elegant backdrop-blur">
            <img
              src={heroDashboard}
              alt="AI productivity dashboard preview"
              width={1280}
              height={960}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full rounded-2xl"
            />
          </div>
          {/* floating cards */}
          <div className="absolute -left-3 top-10 hidden animate-float rounded-2xl border border-white/60 bg-white/80 p-3 shadow-soft backdrop-blur md:flex">
            <div className="flex items-center gap-2 text-xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-3.5 w-3.5" />
              </span>
              <div>
                <div className="font-medium">+42% faster</div>
                <div className="text-muted-foreground">workflow speed</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 bottom-10 hidden animate-float rounded-2xl border border-white/60 bg-white/80 p-3 shadow-soft backdrop-blur md:flex [animation-delay:1.5s]">
            <div className="flex items-center gap-2 text-xs">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Brain className="h-3.5 w-3.5" />
              </span>
              <div>
                <div className="font-medium">AI Assist</div>
                <div className="text-muted-foreground">active now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Rocket, label: "Smart onboarding" },
    { icon: LineChart, label: "Productivity focused" },
    { icon: Zap, label: "Fast access" },
    { icon: Brain, label: "AI-powered workflow" },
  ];
  return (
    <section className="border-y border-border/60 bg-background/60 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <p data-reveal className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Designed for modern online work
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              data-reveal
              className="flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/60 px-4 py-3 text-sm text-foreground/80 backdrop-blur"
            >
              <it.icon className="h-4 w-4 text-primary" />
              {it.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    { icon: Brain, title: "AI-powered discovery", body: "Surface relevant opportunities tailored to how you work." },
    { icon: Zap, title: "Faster workflows", body: "Cut friction with intelligent shortcuts and automations." },
    { icon: Sparkles, title: "Smart recommendations", body: "Get personalized suggestions that actually help." },
    { icon: Workflow, title: "Workflow optimization", body: "Streamline tasks across tools with a unified flow." },
    { icon: Rocket, title: "Easy onboarding", body: "Get up and running in minutes — no setup pain." },
    { icon: Globe, title: "Remote-work friendly", body: "Built for distributed teams and modern online work." },
  ];
  return (
    <section id="benefits" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Benefits</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Why people choose <span className="text-gradient">smarter workflows</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              data-reveal
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
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
          <Cta label="Start Smarter" trackingId="benefits_cta" />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Create access", body: "Sign up in minutes with frictionless onboarding." },
    { n: "02", title: "Explore opportunities", body: "Browse AI-curated tools and workflows that match your goals." },
    { n: "03", title: "Start using smarter AI workflows", body: "Put intelligent automation to work — instantly." },
  ];
  return (
    <section id="how" className="relative bg-gradient-to-b from-background to-secondary/40 py-24">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-semibold text-primary-foreground shadow-elegant">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="mt-12 flex justify-center">
          <Cta label="Get Started Now" trackingId="how_cta" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Search, title: "Smart Search", body: "Find opportunities faster." },
    { icon: Brain, title: "AI Assistance", body: "Improve workflows using AI." },
    { icon: Workflow, title: "Workflow Optimization", body: "Save time and work smarter." },
    { icon: LineChart, title: "Productivity Insights", body: "Better systems for better results." },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Premium tools, <span className="text-gradient">effortless workflows</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-reveal
              className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </div>
              {/* mini mock */}
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-border/60 bg-secondary/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-destructive/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-foreground/10" />
                  <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((k) => (
                      <div
                        key={k}
                        className="h-12 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5"
                        style={{ opacity: 0.6 + ((i + k) % 3) * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div data-reveal className="mt-12 flex justify-center">
          <Cta label="Explore Accio" trackingId="features_cta" />
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1400;
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function SocialProof() {
  return <SocialProofInner />;
}

function Testimonials() {
  const items = [
    {
      quote: "Setup took two minutes. I had AI-curated opportunities in my inbox the same day.",
      name: "Maya R.",
      role: "Freelance designer",
    },
    {
      quote: "Finally a workflow tool that actually saves time instead of adding more tabs.",
      name: "Jordan T.",
      role: "Remote ops lead",
    },
    {
      quote: "The AI suggestions feel personal — not the usual generic noise.",
      name: "Priya S.",
      role: "Product consultant",
    },
  ];
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {items.map((t) => (
        <figure
          key={t.name}
          data-reveal
          className="rounded-3xl border border-border/70 bg-card/80 p-6 text-left shadow-soft backdrop-blur"
        >
          <div className="flex gap-0.5 text-primary" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-4 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/80">{t.name}</span> · {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function SocialProofInner() {
  const stats = [
    { v: 10, suffix: "k+", label: "Workflows launched with AI" },
    { v: 42, suffix: "%", label: "Avg. time saved per task" },
    { v: 2, suffix: " min", label: "Average setup time" },
  ];
  const pillars = [
    { icon: ShieldCheck, label: "Built for smarter workflows" },
    { icon: Globe, label: "Created for modern online work" },
    { icon: Sparkles, label: "Designed for productivity" },
  ];
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Trust</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Built for modern online work
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              data-reveal
              className="rounded-3xl border border-border/70 bg-card/80 p-8 text-center shadow-soft backdrop-blur"
            >
              <div className="text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <Testimonials />
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.label}
              data-reveal
              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card/80 px-5 py-4 backdrop-blur"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-4 w-4" />
              </span>
              <span className="text-sm text-foreground/80">{p.label}</span>
            </div>
          ))}
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
      a: "Accio Work is an AI-powered platform that helps you discover smarter tools, workflows and opportunities for modern online work.",
    },
    {
      q: "How does it work?",
      a: "Create access, explore curated opportunities, and start using intelligent workflows that adapt to how you work.",
    },
    {
      q: "Is it beginner friendly?",
      a: "Yes. Onboarding is designed to be simple — most people get value within minutes, with no technical setup required.",
    },
    {
      q: "Is registration free?",
      a: "Getting started is free. You can explore the platform without commitment.",
    },
    {
      q: "How quickly can I get started?",
      a: "In just a few minutes. Click any “Start” button on this page to begin.",
    },
  ];
  return (
    <section id="faq" className="py-24">
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
              <AccordionItem key={it.q} value={`item-${i}`} className="border-b border-border/60 last:border-0 px-4">
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
          <Cta label="Start Today" trackingId="faq_cta" />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-primary opacity-[0.07]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 data-reveal className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          Ready to explore <span className="text-gradient">smarter work?</span>
        </h2>
        <p data-reveal className="mx-auto mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
          Start in minutes and discover AI-powered workflows.
        </p>
        <div data-reveal className="mt-9 flex justify-center">
          <Cta label="Start Now" trackingId="final_cta" />
        </div>
        <p data-reveal className="mt-5 text-xs text-muted-foreground">
          Quick setup · Beginner friendly
        </p>
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
            Independent informational website.
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Links</p>
            <ul className="mt-4 space-y-2">
              <li><a href="#faq" className="text-foreground/80 hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Terms</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <Cta label="Launch Accio" trackingId="footer_cta" />
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
          <div className="text-sm font-semibold leading-tight">Get free access</div>
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
    const onLeave = (e: MouseEvent) => {
      if (shown.current) return;
      if (e.clientY <= 0) {
        shown.current = true;
        sessionStorage.setItem("aw_exit_shown", "1");
        setOpen(true);
      }
    };
    document.addEventListener("mouseleave", onLeave);
    // mobile fallback: trigger after 25s if not shown
    const t = window.setTimeout(() => {
      if (!shown.current) {
        shown.current = true;
        sessionStorage.setItem("aw_exit_shown", "1");
        setOpen(true);
      }
    }, 25000);
    return () => {
      document.removeEventListener("mouseleave", onLeave);
      window.clearTimeout(t);
    };
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-up" role="dialog" aria-modal="true">
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
          Explore smarter opportunities powered by AI.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Cta label="Start Free" trackingId="exit_popup_primary" />
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
        <TrustBar />
        <Benefits />
        <MidCta headline="Ready to work smarter?" label="Try It Now" id="mid_cta_1" />
        <HowItWorks />
        <Features />
        <MidCta headline="Explore AI-powered opportunities" label="Launch Access" id="mid_cta_2" />
        <SocialProof />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
      <ExitIntent />
      {/* Spacer so sticky mobile CTA doesn't cover footer */}
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}