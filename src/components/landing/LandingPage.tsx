import { useEffect, useRef, useState } from "react";
import heroPoster from "@/assets/hero-poster.png.asset.json";
import {
  Apple,
  ChevronDown,
  Globe,
  Headphones,
  Sparkles,
  Calendar,
} from "lucide-react";

const REFERRAL_URL =
  "https://www.accio.com/invite-work?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), obs.disconnect()),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

/* ---------- Brand ---------- */
function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontSize: size }}>
      <svg width={size * 0.95} height={size} viewBox="0 0 28 28" aria-hidden>
        <defs>
          <linearGradient id="accioTri" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#17B26A" />
            <stop offset="100%" stopColor="#7CE7C2" />
          </linearGradient>
        </defs>
        <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTri)" />
      </svg>
      <span className="text-foreground">Accio</span>
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center"><Logo size={26} /></a>
          <nav className="hidden items-center gap-8 text-[15px] font-medium text-foreground/80 md:flex">
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <button className="flex items-center gap-1 hover:text-foreground">Help Center <ChevronDown className="h-4 w-4 opacity-60" /></button>
            <button className="flex items-center gap-1 hover:text-foreground">Events <span>🔥</span> <ChevronDown className="h-4 w-4 opacity-60" /></button>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Headphones className="hidden h-5 w-5 text-foreground/70 md:block" />
          <button className="hidden items-center gap-1.5 text-[15px] font-medium text-foreground/80 md:flex">
            <Globe className="h-4 w-4" /> English <ChevronDown className="h-4 w-4 opacity-60" />
          </button>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-[#0F172A] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0F172A]/90"
          >
            Download Accio Work
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-4 py-2 text-[14px] font-medium text-foreground shadow-card">
      <Sparkles className="h-3.5 w-3.5 text-[#17B26A]" />
      {children}
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1180px] px-2 sm:px-4">
      <div className="overflow-hidden rounded-[28px] bg-white shadow-elegant ring-1 ring-border/70">
        {/* browser bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-white px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        {/* hero video */}
        <div className="bg-black">
          <video
            className="block h-auto w-full"
            src="/home.mp4"
            loop
            playsInline
            controls
            preload="metadata"
            poster={heroPoster.url}
          />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h1 className="mx-auto flex items-center justify-center gap-3 text-[44px] font-extrabold tracking-tight text-foreground sm:text-[72px]">
          <Logo size={56} />
          <span>Work</span>
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-[22px] font-bold text-foreground sm:text-[28px]">
          Your 24/7 agentic business team
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <TrustPill>Zero learning curve</TrustPill>
          <TrustPill>Built for business</TrustPill>
          <TrustPill>Enterprise-grade security</TrustPill>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
          Automates your business end-to-end — research &amp; analysis, sourcing &amp; negotiation,
          marketing &amp; sales, operations &amp; CRM — delivering real profit.
        </p>

        <div className="mt-10 flex flex-col items-center">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] py-4 pl-6 pr-2 text-[16px] font-semibold text-white shadow-elegant transition hover:scale-[1.02]"
          >
            <Apple className="h-5 w-5" />
            <span>Download for macOS</span>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white/90">
              Apple Silicon <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </a>
          <p className="mt-3 text-[13px] text-muted-foreground">For macOS 11 or later</p>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

/* ---------- Section: Built for every business need ---------- */
const BUSINESS_TABS = [
  "Launch Store",
  "Monitor Competitors",
  "Source & Negotiate",
  "Promote on Social",
  "Customize Tools",
  "Organize Files",
  "Analyze Bestsellers",
];

function StoreMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-store.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function CompetitorMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-competitor.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function SourceMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-source.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function PromoteMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-promote.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function ToolsMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-tools.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function OrganizeMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-organize.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function AnalyzeMockup() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full h-full w-full rounded-[20px] object-cover shadow-elegant"
        src="/accio-analyze.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

type TabContent = {
  badge: string;
  title: string;
  body: string;
  extra?: React.ReactNode;
  visual: React.ReactNode;
};

const TAB_CONTENT: Record<string, TabContent> = {
  "Launch Store": {
    badge: "Launch Store",
    title: "From idea to first sale in minutes",
    body: "Spin up a complete online store with products, listings, design, and SEO ready out of the box – and start selling the moment you go live.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">1 idea</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">products, listings, SEO</span>
        </div>
      </div>
    ),
    visual: <StoreMockup />,
  },
  "Monitor Competitors": {
    badge: "Monitor Competitors",
    title: "Schedule once, run automatically",
    body: "Track competitors' pricing, products, and campaigns with scheduled tasks – and turn every finding into a sharper strategy you can act on.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">set once</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">pricing, products, campaigns</span>
        </div>
      </div>
    ),
    visual: <CompetitorMockup />,
  },
  "Source & Negotiate": {
    badge: "Source & Negotiate",
    title: "Get the right supplier at the right price",
    body: "Find verified suppliers, send inquiries, and negotiate by email – all handled for you until you land the best deal.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">0 calls</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">verified suppliers, inquiries</span>
        </div>
      </div>
    ),
    visual: <SourceMockup />,
  },
  "Promote on Social": {
    badge: "Promote on Social",
    title: "Post, engage, and grow on autopilot",
    body: "Create viral-ready content, schedule posts across platforms, engage with your audience, and track what works – day and night.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">post once</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">scheduling, engagement, analytics</span>
        </div>
      </div>
    ),
    visual: <PromoteMockup />,
  },
  "Customize Tools": {
    badge: "Customize Tools",
    title: "Custom business tools – with zero coding",
    body: "Just describe what you need – calculators, dashboards, trackers, or websites – and get a working tool built on the spot, evolving as your business grows.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">describe once</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">calculators, dashboards, trackers</span>
        </div>
      </div>
    ),
    visual: <ToolsMockup />,
  },
  "Organize Files": {
    badge: "Organize Files",
    title: "Turn messy documents into clear decisions",
    body: "Upload quotes, invoices, reports, or any file – see everything organized into clean tables and charts, ready to compare and act on in seconds.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">upload files</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">tables, charts, insights</span>
        </div>
      </div>
    ),
    visual: <OrganizeMockup />,
  },
  "Analyze Bestsellers": {
    badge: "Analyze Bestsellers",
    title: "Know your market in one click",
    body: "Get market insight with data from Jungle Scout, TikTok, Reddit, Alibaba.com, and more verified sources.",
    extra: (
      <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
          <span className="text-[17px] font-semibold text-foreground">1 click</span>
        </div>
        <span className="text-[#17B26A]">→</span>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
          <span className="text-[17px] font-semibold text-foreground">trends, demand, rankings</span>
        </div>
      </div>
    ),
    visual: <AnalyzeMockup />,
  },
};

function BusinessNeeds() {
  const [active, setActive] = useState(0);
  const { ref, shown } = useReveal<HTMLDivElement>();
  const activeName = BUSINESS_TABS[active];
  const content = TAB_CONTENT[activeName] ?? TAB_CONTENT["Launch Store"];
  return (
    <section className="bg-[#F7F8FA] py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[36px]" style={{ lineHeight: "40px" }}>
          Built for every business need
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {BUSINESS_TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-3 text-[14px] font-medium transition ${
                i === active
                  ? "bg-[#DDF7EE] text-[#17B26A]"
                  : "border border-border/70 bg-white text-foreground/60 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          key={activeName}
          className={`relative mx-auto mt-12 grid w-full max-w-[1320px] gap-10 overflow-hidden rounded-[32px] bg-white p-8 md:grid-cols-2 md:p-12 md:min-h-[507px] ${
            shown ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[36px]" style={{ lineHeight: "45px" }}>
              {content.title}
            </h3>
            <p className="mt-6 max-w-md text-[18px] text-muted-foreground" style={{ lineHeight: "29px" }}>
              {content.body}
            </p>
            {content.extra}
          </div>
          <div className="aspect-[4/3] w-full md:aspect-auto md:h-full">
            {content.visual}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why choose Accio Work ---------- */
function WhyChoose() {
  return (
    <section className="bg-[#F7F8FA] pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[36px]" style={{ lineHeight: "1.15" }}>
          Why choose Accio Work?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:grid-rows-2">
          {/* Left tall — team of specialists */}
          <div className="rounded-[28px] bg-gradient-to-br from-[#F1F3F6] to-[#E7EBF0] p-8 md:row-span-2 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight text-foreground sm:text-[24px]">
              One AI for everything. Or a<br />team of specialists.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              A general agent handles daily tasks. Add specialists for sales, sourcing, design — each with its own expertise and memory.
            </p>
            <AgentsMockup />
          </div>

          {/* Middle top — dark, connectors */}
          <div className="rounded-[28px] bg-[#0E1210] p-8 text-white md:p-10">
            <h3 className="text-[22px] font-bold leading-tight sm:text-[24px]">
              Connect once. Automate<br />everything.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/70">
              Shopify, Gmail, Slack, LinkedIn, and 50+ more — one-click setup. No integration projects, no developers needed.
            </p>
            <ConnectorsRow />
          </div>

          {/* Right top — green, security */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#C6EFDA] to-[#A2E3C0] p-8 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight text-[#0F4E33] sm:text-[24px]">
              Your data. Your control.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#0F4E33]/75">
              Sandboxed execution. You approve every critical action. Data sovereignty backed by Alibaba's infrastructure.
            </p>
            <svg viewBox="0 0 48 48" className="absolute bottom-6 right-6 h-12 w-12 text-[#0F7B4A]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M24 4 L42 12 V24 C42 34 34 42 24 44 C14 42 6 34 6 24 V12 Z" />
              <path d="M16 24 L22 30 L34 18" />
            </svg>
          </div>

          {/* Bottom wide — blue, one platform */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#DCE7FA] to-[#C3D5F5] p-8 md:col-span-2 md:p-10">
            <div className="max-w-md">
              <h3 className="text-[22px] font-bold leading-tight text-[#0F2954] sm:text-[24px]">
                One platform. Analysis, design, automation.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0F2954]/70">
                Sourcing reports, concept design, landing pages, competitor tracking — pick a skill, schedule it, forget about it.
              </p>
            </div>
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentsMockup() {
  const agents = [
    { name: "Market Scout", tint: "#FFD8B4", initial: "M", msg: "EU demand for portable humidifiers ↑ 38% last 30d." },
    { name: "Sourcing Expert", tint: "#FFC8B8", initial: "S", msg: "Got 12 verified Shenzhen suppliers · MOQ 100+ · BSCI ✓" },
    { name: "Product Designer", tint: "#FFE5A8", initial: "P", msg: "3 concept variants in matte finish — ready to review." },
    { name: "Listing Copywriter", tint: "#F8C8C8", initial: "L", msg: "SEO title drafted — projected +37% CTR." },
  ];
  return (
    <div className="mt-8 rounded-2xl bg-white p-4 shadow-card">
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[12px] font-mono text-muted-foreground">#new-product-launch</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {agents.map((a) => (
          <div key={a.name} className="flex items-start gap-3">
            <div
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[13px] font-bold text-foreground/80"
              style={{ background: a.tint }}
            >
              {a.initial}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-bold text-foreground">{a.name}</div>
              <div className="mt-1 rounded-lg bg-[#F5F6F8] px-3 py-2 text-[12.5px] leading-snug text-foreground/80">
                {a.msg}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectorsRow() {
  const apps = [
    { label: "X", bg: "#FFFFFF", fg: "#000000", glyph: "𝕏" },
    { label: "in", bg: "#0A66C2", fg: "#FFFFFF", glyph: "in" },
    { label: "N", bg: "#FFFFFF", fg: "#000000", glyph: "N" },
    { label: "M", bg: "#FFFFFF", fg: "#EA4335", glyph: "M" },
    { label: "A", bg: "#FF6A00", fg: "#FFFFFF", glyph: "a" },
    { label: "S", bg: "#3F3F46", fg: "#FFFFFF", glyph: "S" },
  ];
  return (
    <div className="mt-10 flex items-center gap-3 overflow-hidden">
      {apps.map((a, i) => (
        <div
          key={i}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-[20px] font-bold shadow-lg"
          style={{ background: a.bg, color: a.fg }}
        >
          {a.glyph}
        </div>
      ))}
    </div>
  );
}

function PlatformMockup() {
  return (
    <div className="pointer-events-none relative mt-6 h-[220px] md:absolute md:right-6 md:top-8 md:h-[240px] md:w-[520px]">
      {/* Sourcing card */}
      <div className="absolute left-2 top-2 w-[220px] rotate-[-4deg] rounded-2xl bg-white p-4 shadow-elegant">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground/80">
          <span className="grid h-5 w-5 place-items-center rounded bg-[#DCE7FA] text-[10px] text-[#3B82F6]">📊</span>
          Sourcing
        </div>
        <div className="mt-3 text-[26px] font-extrabold text-foreground">
          32<span className="ml-1 text-[12px] font-medium text-muted-foreground">suppliers</span>
        </div>
        <svg viewBox="0 0 180 40" className="mt-2 h-10 w-full text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 30 L30 22 L60 26 L90 14 L120 18 L150 8 L180 12" />
        </svg>
      </div>
      {/* Design card */}
      <div className="absolute left-[180px] top-0 w-[240px] rounded-2xl bg-white p-4 shadow-elegant">
        <div className="flex items-center justify-between text-[12px] font-semibold text-foreground/80">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
            Design
          </span>
          <span className="text-[10px] text-muted-foreground">v2.3</span>
        </div>
        <div className="mt-1 text-[11px] text-muted-foreground">12 variations generated</div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="grid h-14 place-items-center rounded-lg bg-[#F1F3F6]">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]" />
          </div>
          <div className="grid h-14 place-items-center rounded-lg bg-[#F1F3F6] text-foreground/40">→</div>
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground">Palette</span>
          <span className="h-3 w-3 rounded-full bg-[#8B5CF6]" />
          <span className="h-3 w-3 rounded-full bg-[#3B82F6]" />
          <span className="h-3 w-3 rounded-full bg-[#EC4899]" />
        </div>
      </div>
      {/* HTML preview card */}
      <div className="absolute right-0 top-10 w-[240px] rotate-[3deg] rounded-2xl bg-white p-4 shadow-elegant">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground/80">
          <span className="font-mono text-[#17B26A]">&lt; / &gt;</span>
          HTML
          <span className="ml-auto rounded bg-[#DDF7EE] px-1.5 py-0.5 text-[9px] font-bold text-[#17B26A]">live preview</span>
        </div>
        <div className="mt-2 rounded-lg border border-border/60 bg-[#F7F8FA] px-2 py-1 text-[10px] text-muted-foreground">store.accio.com</div>
        <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-[#E8F7EE] to-[#DDF0FF]" />
        <div className="mt-2 flex justify-between">
          <span className="rounded bg-[#17B26A] px-2 py-1 text-[9px] font-bold text-white">Shop now</span>
          <span className="grid h-5 w-5 place-items-center rounded bg-[#FEF3C7] text-[10px]">▲</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Platform intro ---------- */
/* ---------- Testimonials ---------- */
type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: React.ReactNode;
};

const TESTIMONIALS_ROW_1: Testimonial[] = [
  {
    name: "Joseph S.",
    role: "Global Sourcing Manager",
    avatar: "https://i.pravatar.cc/80?img=13",
    text: (
      <>
        Accio Work quickly transforms scattered non-standard supplier quotes into comparable data. It's the{" "}
        <mark className="bg-[#DDF7EE] text-foreground">first AI that truly understands</mark> the complexity of global trade.
      </>
    ),
  },
  {
    name: "Mia C.",
    role: "Weekend Founder",
    avatar: "https://i.pravatar.cc/80?img=47",
    text: (
      <>
        I had product ideas saved for months, but no clue how to source or launch. Accio Work helped me move from scattered notes to{" "}
        <mark className="bg-[#DDF7EE] text-foreground">a real product to sell</mark>.
      </>
    ),
  },
  {
    name: "Luna M.",
    role: "Dropshipping seller",
    avatar: "https://i.pravatar.cc/80?img=45",
    text: (
      <>
        Accio Work scans Reddit, TikTok, and Amazon to <mark className="bg-[#DDF7EE] text-foreground">pinpoint winners</mark> and source directly from suppliers. It's the ultimate tool to outpace competition on viral trends.
      </>
    ),
  },
  {
    name: "Keshia B.",
    role: "Side-Hustler",
    avatar: "https://i.pravatar.cc/80?img=48",
    text: (
      <>
        I only had nights for my store. I love that Accio Work could automate niche analysis and{" "}
        <mark className="bg-[#DDF7EE] text-foreground">supplier follow-ups</mark> while I was at my day job.
      </>
    ),
  },
  {
    name: "Jay W.",
    role: "Streetwear Brand Owner",
    avatar: "https://i.pravatar.cc/80?img=15",
    text: (
      <>
        Accio Work <mark className="bg-[#DDF7EE] text-foreground">cuts my production time by weeks</mark> with professional tech pack generation and supplier auto negotiation. More importantly, I know my designs are 100% secure.
      </>
    ),
  },
];

const TESTIMONIALS_ROW_2: Testimonial[] = [
  {
    name: "Nina K.",
    role: "Outdoor Brand Founder",
    avatar: "https://i.pravatar.cc/80?img=49",
    text: (
      <>
        I used to spend <mark className="bg-[#DDF7EE] text-foreground">10h/week</mark> managing content freelancers, but Accio Work now automates everything from content to publishing and only takes me{" "}
        <mark className="bg-[#DDF7EE] text-foreground">10 min/week</mark>.
      </>
    ),
  },
  {
    name: "Sara N.",
    role: "Nail Salon Manager",
    avatar: "https://i.pravatar.cc/80?img=32",
    text: (
      <>
        Very easy to use. I think I <mark className="bg-[#DDF7EE] text-foreground">finally get how AI can help</mark> my business.
      </>
    ),
  },
  {
    name: "Clara E.",
    role: "Procurement Specialist",
    avatar: "https://i.pravatar.cc/80?img=44",
    text: (
      <>
        Supplier research always felt like chasing missing details. Now with Accio Work's proactive follow-up, I can get to a{" "}
        <mark className="bg-[#DDF7EE] text-foreground">clean shortlist faster</mark>.
      </>
    ),
  },
  {
    name: "Andrew P.",
    role: "Wedding & Event Planner",
    avatar: "https://i.pravatar.cc/80?img=12",
    text: (
      <>
        This tool helped me find diverse suppliers at much lower prices, while perfectly coordinating delivery with my event dates. My{" "}
        <mark className="bg-[#DDF7EE] text-foreground">bookings grow by 30+%</mark> thanks to Accio Work.
      </>
    ),
  },
  {
    name: "Joan W.",
    role: "Supply Chain Consultant",
    avatar: "https://i.pravatar.cc/80?img=5",
    text: (
      <>
        Unlike other AIs, Accio Work is powered by the <mark className="bg-[#DDF7EE] text-foreground">real trade data</mark> from alibaba.com and market intelligence like Jungle Scout. Definitely a must-have for e-commerce sellers.
      </>
    ),
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="mx-3 w-[360px] shrink-0 rounded-[24px] bg-white p-6 shadow-card">
      <header className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <div className="text-[15px] font-bold text-foreground">{t.name}</div>
          <div className="text-[13px] text-muted-foreground">{t.role}</div>
        </div>
      </header>
      <p className="mt-4 text-[15px] leading-[1.55] text-foreground/85">{t.text}</p>
    </article>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-3">
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } [animation-play-state:running] group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-mint-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="text-[36px] font-extrabold tracking-tight text-foreground sm:text-[50px]">
          Loved by <span className="text-[#17B26A]">10+ Million</span> monthly
          <br />
          active users
        </h2>
      </div>
      <div className="relative mt-14 space-y-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color-mix(in_oklab,var(--mint-50)_100%,transparent)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color-mix(in_oklab,var(--mint-50)_100%,transparent)] to-transparent" />
        <MarqueeRow items={TESTIMONIALS_ROW_1} direction="left" />
        <MarqueeRow items={TESTIMONIALS_ROW_2} direction="right" />
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
type FaqItem = {
  q: string;
  a: string;
  link?: { label: string; href: string };
};

const FAQS: FaqItem[] = [
  {
    q: "How is Accio Work different from a normal AI chat tool?",
    a: "Typical chat tools only answer with text. Accio Work is an execution-oriented agent platform that can read local files, run terminal commands, control your browser, and call external APIs. It does not just tell you what to do — it helps you do the work.",
    link: { label: "Read the quickstart guide", href: REFERRAL_URL },
  },
  {
    q: "Which LLMs are supported?",
    a: "We currently support Gemini, GPT-4o, Claude, and Qwen. You can assign different models to different agents. Model access is routed through our gateway so you do not have to manage a complicated API-key setup.",
    link: { label: "View agent capabilities", href: REFERRAL_URL },
  },
  {
    q: "What can the browser automation do?",
    a: "Accio Work can control a real browser via Chrome DevTools Protocol. Agents can search the web, scrape pages, fill out forms, take screenshots, and navigate multi-step workflows — all hands-free. Browser access is treated as a sensitive capability and requires explicit permission.",
    link: { label: "View agent tools", href: REFERRAL_URL },
  },
  {
    q: "Can I schedule agents to run automatically?",
    a: "Yes. The Automations feature lets you create cron-like scheduled tasks — either by describing them in natural language in a chat, or by configuring them on the Automations page. Schedules run locally, so they work even without an internet connection. Missed runs are reconciled on restart.",
    link: { label: "View automation docs", href: REFERRAL_URL },
  },
  {
    q: "How do I connect an agent to Telegram or DingTalk?",
    a: "Open the Channels page in the client, choose the platform you need, and follow the setup guide to add a bot token. Accio Work supports Telegram, Discord, DingTalk, Lark (Feishu), and WeChat. Once connected, the agent can reply in chats or receive tasks automatically.",
    link: { label: "View supported channels", href: REFERRAL_URL },
  },
  {
    q: "What are Skills and how do they extend agents?",
    a: "Skills are plugin packs that give agents domain-specific abilities — code review, copywriting, SEO audit, and more. You can install skills from the marketplace or create your own. Accio Work also supports the Model Context Protocol (MCP) standard for integrating external tool servers.",
    link: { label: "View skills management", href: REFERRAL_URL },
  },
  {
    q: "Which platforms are supported?",
    a: "Accio Work is available for macOS (Apple Silicon and Intel) and Windows (x64). It is a native desktop application built with Electron, so you get full access to local system resources.",
  },
  {
    q: "Can multiple agents collaborate on a task?",
    a: "Yes. The Teams feature lets you create agent groups with a Team Lead and member agents. The TL can delegate subtasks, coordinate work through group chat, and orchestrate multi-agent workflows — useful for complex projects that benefit from specialized roles.",
    link: { label: "View agent team docs", href: REFERRAL_URL },
  },
];

function FaqRow({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-[20px] border border-border/70 bg-mint-50/60 transition-colors hover:bg-mint-50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
      >
        <span className="text-[17px] font-bold text-foreground sm:text-[18px]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#17B26A] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-7 pb-7 -mt-1">
          <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
            {item.a}
          </p>
          {item.link && (
            <a
              href={item.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#17B26A] hover:underline"
            >
              {item.link.label} <span aria-hidden>→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[880px] px-6">
        <h2 className="text-center text-[44px] font-extrabold tracking-tight text-foreground sm:text-[64px]">
          FAQ
        </h2>
        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Capability cards ---------- */
type CardData = {
  title: string;
  cat: string;
  isNew?: boolean;
  thumb: { from: string; to: string; emoji?: string; label?: string };
};

const CATEGORY_ICON: Record<string, string> = {
  "Go-to-market": "🏬",
  "Product research": "📈",
  "Product design": "🎨",
  "Supplier sourcing": "🏭",
  "Business analysis": "📊",
};

function CardThumb({ thumb }: { thumb: CardData["thumb"] }) {
  return (
    <div
      className="relative flex h-[180px] w-full items-center justify-center overflow-hidden rounded-[16px]"
      style={{ background: `linear-gradient(135deg, ${thumb.from}, ${thumb.to})` }}
    >
      <span className="text-6xl drop-shadow-sm">{thumb.emoji}</span>
      {thumb.label && (
        <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white/85 px-3 py-2 text-[11px] font-semibold text-foreground/80 backdrop-blur">
          {thumb.label}
        </div>
      )}
    </div>
  );
}

function CapabilityCard({ c }: { c: CardData }) {
  return (
    <a
      href={REFERRAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-5 rounded-[20px] border border-border/70 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      {c.isNew && (
        <span className="absolute right-0 top-0 rounded-bl-[14px] rounded-tr-[20px] bg-[#17B26A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          New
        </span>
      )}
      <h3 className="min-h-[56px] pr-10 text-[16px] font-bold leading-snug text-foreground">
        {c.title}
      </h3>
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
        <span aria-hidden>{CATEGORY_ICON[c.cat] || "✦"}</span>
        {c.cat}
      </div>
      <CardThumb thumb={c.thumb} />
    </a>
  );
}

/* card data — 5 rows × 5 cards + 1 row × 2 large cards */
const ROWS: CardData[][] = [
  [
    { title: "Plan in-store activation with training, displays & metrics", cat: "Go-to-market", isNew: true, thumb: { from: "#CDEFE0", to: "#A6E1C7", emoji: "🐶", label: "Comprehensive In-Store Launch Plan" } },
    { title: "Map leading indicators for Halloween decoration trend", cat: "Product research", isNew: true, thumb: { from: "#FFE0B2", to: "#FFB74D", emoji: "🎃" } },
    { title: "Turn inspiration into designs and matching suppliers", cat: "Product design", thumb: { from: "#E0F2EC", to: "#B8E2D2", emoji: "🐕" } },
    { title: "Spot rising trends early to guide sourcing and design", cat: "Product research", thumb: { from: "#D7E8F5", to: "#A9CFEC", emoji: "📊" } },
    { title: "Quickly source products that meet all key certifications", cat: "Supplier sourcing", thumb: { from: "#E6F4EC", to: "#BFE6CE", emoji: "🪥" } },
  ],
  [
    { title: "Diagnose declining category growth in mature markets", cat: "Business analysis", isNew: true, thumb: { from: "#E3F0F8", to: "#BFD9EC", emoji: "💧" } },
    { title: "Craft high-converting Amazon listing content", cat: "Go-to-market", thumb: { from: "#DDF7EE", to: "#B5E6D2", emoji: "☕" } },
    { title: "Find manufacturers for small, custom runs", cat: "Supplier sourcing", thumb: { from: "#E8F5F0", to: "#C2E5D3", emoji: "💎" } },
    { title: "Evaluate private label threat in premium yoga mats", cat: "Business analysis", isNew: true, thumb: { from: "#EAF6E8", to: "#C9E8C1", emoji: "🧘" } },
    { title: "Design a thematic product for an upcoming holiday", cat: "Product design", isNew: true, thumb: { from: "#F4EAE0", to: "#E3CDB6", emoji: "🎄" } },
  ],
  [
    { title: "Create A/B test copy with variations", cat: "Go-to-market", isNew: true, thumb: { from: "#E4ECF3", to: "#C6D7E5", emoji: "💡" } },
    { title: "Fully investigate suppliers to avoid sourcing risks", cat: "Supplier sourcing", thumb: { from: "#EAEFF4", to: "#CFDAE5", emoji: "🏢" } },
    { title: "Model FX impact on cost and pricing", cat: "Business analysis", thumb: { from: "#DCF3EE", to: "#B4E1D6", emoji: "💱" } },
    { title: "Analyze pain points to spot new product directions", cat: "Product research", thumb: { from: "#E4F1E1", to: "#C5E0C0", emoji: "🐕" } },
    { title: "Plan a pre-launch campaign with UGC and influencer", cat: "Go-to-market", isNew: true, thumb: { from: "#E9F4D3", to: "#CFE7A6", emoji: "🧘‍♀️" } },
  ],
  [
    { title: "Analyze segment size and margins to spot opportunity", cat: "Business analysis", thumb: { from: "#E1EBF5", to: "#B9D3EC", emoji: "📈" } },
    { title: "Turn viral IP into product ideas with visual designs", cat: "Product design", thumb: { from: "#DCE8F5", to: "#B0CCED", emoji: "🧥" } },
    { title: "Uncover unmet needs and design product concepts", cat: "Product research", thumb: { from: "#E3F4E5", to: "#BEE3C5", emoji: "👟" } },
    { title: "Recommend products based on audience and scenario", cat: "Supplier sourcing", thumb: { from: "#EEF1F4", to: "#D2D9E2", emoji: "🎧" } },
    { title: "Create a strategy for seasonal product bundling", cat: "Go-to-market", isNew: true, thumb: { from: "#E2EEF6", to: "#BDD7EB", emoji: "🌸" } },
  ],
  [
    { title: "Find style-fit factories and draft inquiry emails", cat: "Supplier sourcing", thumb: { from: "#DDF1EA", to: "#B6E1D0", emoji: "🧵" } },
    { title: "Analyze potential market impact of regulation", cat: "Business analysis", thumb: { from: "#EEF2F6", to: "#CDD7E1", emoji: "📑" } },
    { title: "Track material innovations for formulation upgrades", cat: "Product research", isNew: true, thumb: { from: "#DDEEF5", to: "#B5D7E8", emoji: "🧴" } },
    { title: "Tailor product descriptions for different marketplace", cat: "Go-to-market", isNew: true, thumb: { from: "#DBF1E9", to: "#A6DCC4", emoji: "🛏️" } },
    { title: "Validate and visualize innovative product ideas", cat: "Product design", thumb: { from: "#DCEEEC", to: "#B5DAD7", emoji: "🔊" } },
  ],
  [
    { title: "Create a sourcing list for an event", cat: "Supplier sourcing", thumb: { from: "#F6E8E5", to: "#E8C6BF", emoji: "🎈" } },
    { title: "Assess manufacturing relocation risks", cat: "Business analysis", isNew: true, thumb: { from: "#EAF1EF", to: "#CCDBD8", emoji: "💨" } },
    { title: "Define target persona and key purchase triggers", cat: "Product research", isNew: true, thumb: { from: "#E3F1DE", to: "#C0E0B6", emoji: "📖" } },
    { title: "Enhance product listing with comparison chart", cat: "Go-to-market", isNew: true, thumb: { from: "#ECEEF1", to: "#CFD4DA", emoji: "🪑" } },
    { title: "Develop products based on a specific use case", cat: "Product design", thumb: { from: "#E5F1E1", to: "#C3E0BB", emoji: "🐶" } },
  ],
];

const LARGE_PAIR: CardData[] = [
  { title: "Develop a refill pilot program", cat: "Product research", isNew: true, thumb: { from: "#1F6E7B", to: "#2DA7A2", emoji: "🧴" } },
  { title: "Find competitive design tweaks for bestsellers", cat: "Product design", thumb: { from: "#DCEEF5", to: "#B0D6E6", emoji: "👜" } },
];

function CardGridSection({ row, idx }: { row: CardData[]; idx: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`mx-auto mt-6 max-w-[1280px] px-6 ${shown ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${idx * 40}ms` }}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {row.map((c) => <CapabilityCard key={c.title} c={c} />)}
      </div>
    </div>
  );
}

function CardGrids() {
  return (
    <section className="bg-gradient-mint-soft pb-24">
      <div className="mx-auto max-w-[1280px] px-6 pb-10">
        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-8 border-b border-border/70 text-[15px] font-semibold">
          {["All", "Business analysis", "Product design", "Supplier sourcing", "Product research", "Go-to-market"].map((t, i) => (
            <button key={t} className={`relative pb-3 ${i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t}
              {i === 0 && <span className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-[#17B26A]" />}
            </button>
          ))}
        </div>
      </div>

      {ROWS.map((row, i) => <CardGridSection key={i} row={row} idx={i} />)}

      {/* Last large pair */}
      <div className="mx-auto mt-6 max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {LARGE_PAIR.map((c) => <CapabilityCard key={c.title} c={c} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-[16px] text-muted-foreground">
          <span className="font-medium">Partnered with</span>
          <span className="text-[22px] font-bold text-[#FF6A00]">
            Alibaba<span className="text-foreground">.com</span>
          </span>
          <span className="text-[22px] font-bold tracking-tight">
            <span className="text-foreground">euro</span>
            <span className="text-[#1F8A55]">pages</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[22px] font-bold lowercase text-foreground">
            wlw <span className="h-2 w-2 rounded-full bg-[#17B26A]" />
          </span>
        </div>

        <div className="mt-8 flex items-center gap-3 text-[13px] text-muted-foreground">
          <Logo size={18} />
          <span>· © {new Date().getFullYear()} Accio Work. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <BusinessNeeds />
      <WhyChoose />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}