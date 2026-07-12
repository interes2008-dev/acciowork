import { useEffect, useRef, useState } from "react";
import heroPoster from "@/assets/hero-poster.png.asset.json";
import {
  Apple,
  ChevronDown,
  Check,
  Globe,
  Headphones,
  Sparkles,
} from "lucide-react";
import { I18nProvider, useI18n, renderHighlighted } from "@/lib/i18n";
import type { Lang, TabKey, Testimonial as TestimonialT } from "@/lib/translations";

const REFERRAL_URL =
  "https://www.accio.com/invite-work?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

const TAB_KEYS: TabKey[] = ["launch", "monitor", "source", "promote", "tools", "organize", "analyze"];

const TAB_VIDEOS: Record<TabKey, string> = {
  launch: "/accio-store.mp4",
  monitor: "/accio-competitor.mp4",
  source: "/accio-source.mp4",
  promote: "/accio-promote.mp4",
  tools: "/accio-tools.mp4",
  organize: "/accio-organize.mp4",
  analyze: "/accio-analyze.mp4",
};

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

/* ---------- Language switcher ---------- */
function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const options: Lang[] = ["en", "ru", "de"];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.langNames[lang]}
        className="flex items-center gap-1.5 text-[15px] font-medium text-foreground/80 hover:text-foreground"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden md:inline">{t.langNames[lang]}</span>
        <ChevronDown className={`h-4 w-4 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-border/70 bg-white p-1.5 shadow-elegant"
        >
          {options.map((code) => (
            <li key={code}>
              <button
                role="option"
                aria-selected={lang === code}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                  if (typeof window !== "undefined") {
                    const target = code === "ru" ? "/ru" : code === "de" ? "/de" : "/";
                    if (window.location.pathname !== target) {
                      window.history.pushState({}, "", target);
                    }
                  }
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[14px] font-medium transition ${
                  lang === code ? "bg-mint-50 text-foreground" : "text-foreground/80 hover:bg-mint-50"
                }`}
              >
                <span>{t.langNames[code]}</span>
                {lang === code && <Check className="h-4 w-4 text-[#17B26A]" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const { t, lang } = useI18n();
  const blogHref = lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : "/blog";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center"><Logo size={26} /></a>
          <nav className="hidden items-center gap-8 text-[15px] font-medium text-foreground/80 md:flex">
            <a href="#pricing" className="hover:text-foreground">{t.nav.pricing}</a>
            <a href={blogHref} className="hover:text-foreground">{t.nav.blog}</a>
            <button className="flex items-center gap-1 hover:text-foreground">{t.nav.help} <ChevronDown className="h-4 w-4 opacity-60" /></button>
            <button className="flex items-center gap-1 hover:text-foreground">{t.nav.events} <span>🔥</span> <ChevronDown className="h-4 w-4 opacity-60" /></button>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Headphones className="hidden h-5 w-5 text-foreground/70 md:block" />
          <LanguageSwitcher />
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-[#0F172A] px-5 text-[14px] font-semibold text-white transition hover:bg-[#0F172A]/90"
          >
            {t.nav.download}
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
        <div className="flex items-center gap-2 border-b border-border/60 bg-white px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
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
  const { t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden bg-hero pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h1 className="mx-auto flex items-center justify-center gap-3 text-[44px] font-extrabold tracking-tight text-foreground sm:text-[72px]">
          <Logo size={56} />
          <span>{t.hero.brand}</span>
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-[22px] font-bold text-foreground sm:text-[28px]">
          {t.hero.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {t.hero.pills.map((p) => <TrustPill key={p}>{p}</TrustPill>)}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
          {t.hero.desc}
        </p>

        <div className="mt-10 flex flex-col items-center">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#0F172A] py-4 pl-6 pr-2 text-[16px] font-semibold text-white shadow-elegant transition hover:scale-[1.02]"
          >
            <Apple className="h-5 w-5" />
            <span>{t.hero.cta}</span>
            <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-[13px] font-medium text-white/90">
              {t.hero.ctaBadge} <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </a>
          <p className="mt-3 text-[13px] text-muted-foreground">{t.hero.ctaNote}</p>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}

/* ---------- Business Needs ---------- */
function TabMockup({ src }: { src: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#3DD3C9] via-[#2D7CF2] to-[#9B5BFF]">
      <video
        className="block h-full w-full rounded-[20px] object-cover shadow-elegant"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        key={src}
      />
    </div>
  );
}

function BusinessNeeds() {
  const { t } = useI18n();
  const [active, setActive] = useState<TabKey>("launch");
  const { ref, shown } = useReveal<HTMLDivElement>();
  const content = t.business.tabs[active];

  return (
    <section className="bg-[#F7F8FA] py-24 sm:py-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[36px]" style={{ lineHeight: "40px" }}>
          {t.business.heading}
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TAB_KEYS.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`rounded-full px-6 py-3 text-[14px] font-medium transition ${
                k === active
                  ? "bg-[#DDF7EE] text-[#17B26A]"
                  : "border border-border/70 bg-white text-foreground/60 hover:text-foreground"
              }`}
            >
              {t.business.tabs[k].tabLabel}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          key={active}
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
            <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#EAF7F0] px-6 py-5">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">You</span>
                <span className="text-[17px] font-semibold text-foreground">{content.extraYou}</span>
              </div>
              <span className="text-[#17B26A]">→</span>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#17B26A]">AI</span>
                <span className="text-[17px] font-semibold text-foreground">{content.extraAI}</span>
              </div>
            </div>
          </div>
          <div className="aspect-[4/3] w-full md:aspect-auto md:h-full">
            <TabMockup src={TAB_VIDEOS[active]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why choose Accio Work ---------- */
function AgentsMockup() {
  const { t } = useI18n();
  const tints = ["#FFD8B4", "#FFC8B8", "#FFE5A8", "#F8C8C8"];
  return (
    <div className="mt-8 rounded-2xl bg-white p-4 shadow-card">
      <div className="flex items-center justify-between border-b border-border/50 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[12px] font-mono text-muted-foreground">{t.why.aiChannel}</span>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {t.why.agents.map((a, i) => (
          <div key={a.name} className="flex items-start gap-3">
            <div
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[13px] font-bold text-foreground/80"
              style={{ background: tints[i % tints.length] }}
            >
              {a.name.charAt(0)}
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
    { bg: "#FFFFFF", fg: "#000000", glyph: "𝕏" },
    { bg: "#0A66C2", fg: "#FFFFFF", glyph: "in" },
    { bg: "#FFFFFF", fg: "#000000", glyph: "N" },
    { bg: "#FFFFFF", fg: "#EA4335", glyph: "M" },
    { bg: "#FF6A00", fg: "#FFFFFF", glyph: "a" },
    { bg: "#3F3F46", fg: "#FFFFFF", glyph: "S" },
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
      </div>
      <div className="absolute right-0 top-10 w-[240px] rotate-[3deg] rounded-2xl bg-white p-4 shadow-elegant">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground/80">
          <span className="font-mono text-[#17B26A]">&lt; / &gt;</span>
          HTML
          <span className="ml-auto rounded bg-[#DDF7EE] px-1.5 py-0.5 text-[9px] font-bold text-[#17B26A]">live preview</span>
        </div>
        <div className="mt-2 rounded-lg border border-border/60 bg-[#F7F8FA] px-2 py-1 text-[10px] text-muted-foreground">store.accio.com</div>
        <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-[#E8F7EE] to-[#DDF0FF]" />
      </div>
    </div>
  );
}

function WhyChoose() {
  const { t } = useI18n();
  return (
    <section className="bg-[#F7F8FA] pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[36px]" style={{ lineHeight: "1.15" }}>
          {t.why.heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:grid-rows-2">
          <div className="rounded-[28px] bg-gradient-to-br from-[#F1F3F6] to-[#E7EBF0] p-8 md:row-span-2 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight text-foreground sm:text-[24px]">{t.why.aiTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{t.why.aiBody}</p>
            <AgentsMockup />
          </div>

          <div className="rounded-[28px] bg-[#0E1210] p-8 text-white md:p-10">
            <h3 className="text-[22px] font-bold leading-tight sm:text-[24px]">{t.why.connectTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/90">{t.why.connectBody}</p>
            <ConnectorsRow />
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#C6EFDA] to-[#A2E3C0] p-8 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight text-[#0F4E33] sm:text-[24px]">{t.why.dataTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#0F4E33]">{t.why.dataBody}</p>
            <svg viewBox="0 0 48 48" className="absolute bottom-6 right-6 h-12 w-12 text-[#0F7B4A]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M24 4 L42 12 V24 C42 34 34 42 24 44 C14 42 6 34 6 24 V12 Z" />
              <path d="M16 24 L22 30 L34 18" />
            </svg>
          </div>

          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#DCE7FA] to-[#C3D5F5] p-8 md:col-span-2 md:p-10">
            <div className="max-w-md">
              <h3 className="text-[22px] font-bold leading-tight text-[#0F2954] sm:text-[24px]">{t.why.platformTitle}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0F2954]">{t.why.platformBody}</p>
            </div>
            <PlatformMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function TestimonialCard({ t }: { t: TestimonialT }) {
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
      <p className="mt-4 text-[15px] leading-[1.55] text-foreground/85">{renderHighlighted(t.text)}</p>
    </article>
  );
}

function MarqueeRow({ items, direction }: { items: TestimonialT[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-3">
      <div
        className={`flex w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"} [animation-play-state:running] group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((tItem, i) => (
          <TestimonialCard key={`${tItem.name}-${i}`} t={tItem} />
        ))}
      </div>
    </div>
  );
}

function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-mint-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="text-[36px] font-extrabold tracking-tight text-foreground sm:text-[50px]">
          {t.testimonials.heading1} <span className="text-[#17B26A]">{t.testimonials.highlight}</span>
          <br />
          {t.testimonials.heading2}
        </h2>
      </div>
      <div className="relative mt-14 space-y-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color-mix(in_oklab,var(--mint-50)_100%,transparent)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color-mix(in_oklab,var(--mint-50)_100%,transparent)] to-transparent" />
        <MarqueeRow items={t.testimonials.row1} direction="left" />
        <MarqueeRow items={t.testimonials.row2} direction="right" />
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string; linkLabel?: string };
  open: boolean;
  onToggle: () => void;
}) {
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
          <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">{item.a}</p>
          {item.linkLabel && (
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#17B26A] hover:underline"
            >
              {item.linkLabel} <span aria-hidden>→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function Faq() {
  const { t } = useI18n();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[880px] px-6">
        <h2 className="text-center text-[44px] font-extrabold tracking-tight text-foreground sm:text-[64px]">
          {t.faq.heading}
        </h2>
        <div className="mt-12 flex flex-col gap-4">
          {t.faq.items.map((item, i) => (
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

/* ---------- Final CTA ---------- */
function FinalCta() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-hero py-28 sm:py-36">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <h2 className="text-[44px] font-extrabold tracking-tight text-foreground sm:text-[72px]">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[18px] leading-relaxed text-muted-foreground sm:text-[20px]">
          {t.cta.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-[16px] font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            <Apple className="h-5 w-5" />
            {t.cta.download}
            <span className="mx-1 h-5 w-px bg-background/25" />
            <span className="inline-flex items-center gap-1 text-[14px] font-medium text-background/80">
              {t.cta.ctaBadge} <ChevronDown className="h-4 w-4" />
            </span>
          </a>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-border bg-background px-8 py-4 text-[16px] font-semibold text-foreground transition-colors hover:bg-mint-50"
          >
            {t.cta.quickStart}
          </a>
        </div>
        <p className="mt-5 text-[13px] text-muted-foreground">{t.cta.note}</p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/70 bg-background py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-[16px] text-muted-foreground">
          <span className="font-medium">{t.footer.partneredWith}</span>
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
          <span>· © {new Date().getFullYear()} Accio Work. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function LandingPage() {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <Hero />
        <BusinessNeeds />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
    </I18nProvider>
  );
}