import { useEffect, useId, useRef, useState } from "react";
import heroPoster from "@/assets/hero-poster.png.asset.json";
import {
  Apple,
  ChevronDown,
  Check,
  Globe,
  Headphones,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { I18nProvider, useI18n, renderHighlighted } from "@/lib/i18n";
import { rvPress, rvChrome } from "@/lib/reviews-data";
import { roiChrome } from "@/lib/roi-data";
import type { Lang, TabKey, Testimonial as TestimonialT } from "@/lib/translations";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

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
  const gid = "logo" + useId().replace(/:/g, "");
  return (
    <div className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontSize: size }}>
      <svg width={size * 0.95} height={size} viewBox="0 0 28 28" aria-hidden>
        <defs>
          <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#5eead4" />
          </linearGradient>
        </defs>
        <path d="M14 3 L26 25 L2 25 Z" fill={`url(#${gid})`} />
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

  const options: Lang[] = ["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr"];

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
          className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-border/70 bg-white/[0.03] p-1.5 shadow-elegant"
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
                    const target =
                      code === "ru" ? "/ru" : code === "de" ? "/de" : code === "it" ? "/it" : code === "es" ? "/es" : code === "zh" ? "/zh" : code === "pt" ? "/pt" : code === "hi" ? "/hi" : code === "fr" ? "/fr" : "/";
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
                {lang === code && <Check className="h-4 w-4 text-[#34d399]" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Nav dropdown ---------- */
function NavDropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1 hover:text-foreground"
      >
        {label}
        <ChevronDown className={`h-4 w-4 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-2xl border border-border/70 bg-white/[0.03] p-1.5 shadow-elegant"
        >
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              role="menuitem"
              className="block rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-foreground/80 hover:bg-mint-50 hover:text-foreground"
            >
              {it.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const { t, lang } = useI18n();
  const [blogHref, setBlogHref] = useState(
    lang === "ru"
      ? "/ru/blog"
      : lang === "de"
        ? "/de/blog"
        : lang === "it"
          ? "/it/blog"
          : lang === "es"
            ? "/es/blog"
            : lang === "zh"
              ? "/zh/blog"
              : lang === "pt"
                ? "/pt/blog"
                : lang === "hi"
                  ? "/hi/blog"
                  : lang === "fr"
                    ? "/fr/blog"
                    : "/blog",
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = window.location.pathname.toLowerCase();
    if (p.startsWith("/ru")) setBlogHref("/ru/blog");
    else if (p.startsWith("/de")) setBlogHref("/de/blog");
    else if (p.startsWith("/it")) setBlogHref("/it/blog");
    else if (p.startsWith("/es")) setBlogHref("/es/blog");
    else if (p.startsWith("/zh")) setBlogHref("/zh/blog");
    else if (p.startsWith("/pt")) setBlogHref("/pt/blog");
    else if (p.startsWith("/hi")) setBlogHref("/hi/blog");
    else if (p.startsWith("/fr")) setBlogHref("/fr/blog");
    else setBlogHref("/blog");
  }, [lang]);
  const compareHref = blogHref.replace("/blog", "/compare");
  const guideHref = blogHref.replace("/blog", "/guide");
  const reviewsHref = blogHref.replace("/blog", "/reviews");
  const roiHref = blogHref.replace("/blog", "/roi");
  const quizHref = blogHref.replace("/blog", "/quiz");
  const templatesHref = blogHref.replace("/blog", "/templates");
  const dutyHref = blogHref.replace("/blog", "/duty");
  const deMinimisHref = blogHref.replace("/blog", "/de-minimis");
  const tiktokHref = blogHref.replace("/blog", "/tiktok-shop");
  const promptsHref = blogHref.replace("/blog", "/ai-prompts");
  const scorecardHref = blogHref.replace("/blog", "/supplier-scorecard");
  const [menuOpen, setMenuOpen] = useState(false);
  const eventsHref = lang === "en" ? "/events/free-forever" : `/${lang}/events/free-forever`;
  const mobileLinks = [
    { href: "#pricing", label: t.nav.pricing },
    { href: guideHref, label: t.nav.guide },
    { href: blogHref, label: t.nav.blog },
    { href: compareHref, label: t.nav.compare },
    { href: reviewsHref, label: t.nav.reviews },
    { href: roiHref, label: t.nav.roi },
    { href: quizHref, label: t.nav.quiz },
    { href: templatesHref, label: t.nav.templates },
    { href: dutyHref, label: t.nav.duty },
    { href: promptsHref, label: t.nav.prompts },
    { href: scorecardHref, label: t.nav.scorecard },
    { href: deMinimisHref, label: t.nav.deMinimis },
    { href: tiktokHref, label: t.nav.tiktok },
    { href: "#faq", label: t.nav.help },
    { href: eventsHref, label: t.nav.events },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center"><Logo size={26} /></a>
          <nav className="hidden items-center gap-7 text-[15px] font-medium text-foreground/80 md:flex">
            <a href={compareHref} className="hover:text-foreground">{t.nav.compare}</a>
            <a href="#pricing" className="hover:text-foreground">{t.nav.pricing}</a>
            <NavDropdown
              label={t.nav.tools}
              items={[
                { href: roiHref, label: t.nav.roi },
                { href: quizHref, label: t.nav.quiz },
                { href: templatesHref, label: t.nav.templates },
                { href: dutyHref, label: t.nav.duty },
                { href: promptsHref, label: t.nav.prompts },
                { href: scorecardHref, label: t.nav.scorecard },
              ]}
            />
            <NavDropdown
              label={t.nav.resources}
              items={[
                { href: guideHref, label: t.nav.guide },
                { href: blogHref, label: t.nav.blog },
                { href: reviewsHref, label: t.nav.reviews },
                { href: deMinimisHref, label: t.nav.deMinimis },
                { href: tiktokHref, label: t.nav.tiktok },
                { href: "#faq", label: t.nav.help },
              ]}
            />
            <a href={eventsHref} className="flex items-center gap-1 hover:text-foreground">{t.nav.events} <span>🔥</span></a>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Headphones className="hidden h-5 w-5 text-foreground/70 md:block" />
          <LanguageSwitcher />
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center whitespace-nowrap rounded-full bg-[#34d399] px-5 text-[14px] font-semibold text-white transition hover:brightness-110 sm:inline-flex"
          >
            {t.nav.download}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground/80 hover:bg-foreground/5 md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col px-6 py-3">
            {mobileLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1.5 border-b border-border/40 py-3 text-[16px] font-medium text-foreground/85 last:border-b-0 hover:text-foreground"
              >
                {l.label}
                {l.href === eventsHref && <span>🔥</span>}
              </a>
            ))}
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#34d399] px-5 text-[15px] font-semibold text-white"
            >
              {t.nav.download}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function TrustPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/[0.06] px-4 py-2 text-[14px] font-medium text-foreground shadow-card">
      <Sparkles className="h-3.5 w-3.5 text-[#34d399]" />
      {children}
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1180px] px-2 sm:px-4">
      <div className="overflow-hidden rounded-[28px] bg-card shadow-elegant ring-1 ring-border/70">
        <div className="flex items-center gap-2 border-b border-border/60 bg-white/[0.06] px-5 py-3.5">
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

const FEATURED: Record<string, string> = {
  en: "Accio Work in the press",
  ru: "Accio Work в прессе",
  de: "Accio Work in der Presse",
  it: "Accio Work sulla stampa",
  es: "Accio Work en la prensa",
  zh: "媒体报道 Accio Work",
  pt: "Accio Work na imprensa",
  hi: "प्रेस में Accio Work",
  fr: "Accio Work dans la presse",
};

function Hero() {
  const { t, lang } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden bg-hero pb-24 pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h1 className="mx-auto flex items-center justify-center gap-3 text-[44px] font-extrabold tracking-tight text-foreground sm:text-[72px]">
          <Logo size={56} />
          <span>{t.hero.brand}</span>
          <span className="sr-only">, {t.hero.tagline}</span>
        </h1>

        <p
          aria-hidden="true"
          className="mx-auto mt-10 max-w-3xl text-[22px] font-bold text-foreground sm:text-[28px]"
        >
          {t.hero.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          {t.hero.pills.map((p) => <TrustPill key={p}>{p}</TrustPill>)}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
          {t.hero.desc}
        </p>

        <div className="mt-10 flex flex-col items-center">
          <DownloadButton />
          <p className="mt-3 text-[13px] text-muted-foreground">{t.hero.ctaNote}</p>
          <p className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-foreground/70">
            <Globe className="h-3.5 w-3.5 text-[#34d399]" />
            {t.availability}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground/40">
            {FEATURED[lang as keyof typeof FEATURED] ?? FEATURED.en}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[15px] font-semibold text-foreground/45">
            {rvPress.map((p) => (
              <span key={p.id}>{p.source}</span>
            ))}
          </div>
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
    <section className="bg-white/[0.03] py-24 sm:py-32">
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
                  ? "bg-[#34d399]/15 text-[#34d399]"
                  : "border border-border/70 bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {t.business.tabs[k].tabLabel}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          key={active}
          className={`relative mx-auto mt-12 grid w-full max-w-[1320px] gap-10 overflow-hidden rounded-[32px] bg-white/[0.03] p-8 md:grid-cols-2 md:p-12 md:min-h-[507px] ${
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
            <div className="mt-8 grid max-w-md grid-cols-[1fr_auto_1fr] items-center gap-x-4 rounded-2xl bg-[#34d399]/10 px-6 py-5">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#34d399]">You</span>
                <span className="text-[17px] font-semibold text-foreground">{content.extraYou}</span>
              </div>
              <span className="text-[#34d399]">→</span>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#34d399]">AI</span>
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
    <div className="mt-8 rounded-2xl bg-white/[0.03] p-4 shadow-card">
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
              <div className="mt-1 rounded-lg bg-white/[0.04] px-3 py-2 text-[12.5px] leading-snug text-foreground/80">
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
      <div className="absolute left-2 top-2 w-[220px] rotate-[-4deg] rounded-2xl bg-white/[0.03] p-4 shadow-elegant">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground/80">
          <span className="grid h-5 w-5 place-items-center rounded bg-[#3B82F6]/20 text-[10px] text-[#3B82F6]">📊</span>
          Sourcing
        </div>
        <div className="mt-3 text-[26px] font-extrabold text-foreground">
          32<span className="ml-1 text-[12px] font-medium text-muted-foreground">suppliers</span>
        </div>
        <svg viewBox="0 0 180 40" className="mt-2 h-10 w-full text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 30 L30 22 L60 26 L90 14 L120 18 L150 8 L180 12" />
        </svg>
      </div>
      <div className="absolute left-[180px] top-0 w-[240px] rounded-2xl bg-white/[0.03] p-4 shadow-elegant">
        <div className="flex items-center justify-between text-[12px] font-semibold text-foreground/80">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
            Design
          </span>
          <span className="text-[10px] text-muted-foreground">v2.3</span>
        </div>
        <div className="mt-1 text-[11px] text-muted-foreground">12 variations generated</div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="grid h-14 place-items-center rounded-lg bg-white/[0.04]">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]" />
          </div>
          <div className="grid h-14 place-items-center rounded-lg bg-white/[0.04] text-foreground/40">→</div>
        </div>
      </div>
      <div className="absolute right-0 top-10 w-[240px] rotate-[3deg] rounded-2xl bg-white/[0.03] p-4 shadow-elegant">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-foreground/80">
          <span className="font-mono text-[#34d399]">&lt; / &gt;</span>
          HTML
          <span className="ml-auto rounded bg-[#34d399]/15 px-1.5 py-0.5 text-[9px] font-bold text-[#34d399]">live preview</span>
        </div>
        <div className="mt-2 rounded-lg border border-border/60 bg-white/[0.03] px-2 py-1 text-[10px] text-muted-foreground">store.accio.com</div>
        <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-[#E8F7EE] to-[#DDF0FF]" />
      </div>
    </div>
  );
}

function WhyChoose() {
  const { t } = useI18n();
  return (
    <section className="bg-white/[0.03] pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[36px]" style={{ lineHeight: "1.15" }}>
          {t.why.heading}
        </h2>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-3 md:grid-rows-2">
          <div className="min-w-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F1F3F6] to-[#E7EBF0] p-6 sm:p-8 md:row-span-2 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight text-foreground sm:text-[24px]">{t.why.aiTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{t.why.aiBody}</p>
            <AgentsMockup />
          </div>

          <div className="min-w-0 overflow-hidden rounded-[28px] bg-[#0a1120] p-6 text-white sm:p-8 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight sm:text-[24px]">{t.why.connectTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/90">{t.why.connectBody}</p>
            <ConnectorsRow />
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#C6EFDA] to-[#A2E3C0] p-6 sm:p-8 md:p-10">
            <h3 className="text-[22px] font-bold leading-tight text-[#0F4E33] sm:text-[24px]">{t.why.dataTitle}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[#0F4E33]">{t.why.dataBody}</p>
            <svg viewBox="0 0 48 48" className="absolute bottom-6 right-6 h-12 w-12 text-[#0F7B4A]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M24 4 L42 12 V24 C42 34 34 42 24 44 C14 42 6 34 6 24 V12 Z" />
              <path d="M16 24 L22 30 L34 18" />
            </svg>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#DCE7FA] to-[#C3D5F5] p-6 sm:p-8 md:col-span-2 md:p-10">
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

/* ---------- How it works ---------- */
function HowItWorks() {
  const { t } = useI18n();
  return (
    <section id="how" className="scroll-mt-24 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1120px] px-6">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[40px]">
          {t.steps.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
          {t.steps.subheading}
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((s, i) => (
            <div key={s.title} className="relative rounded-[24px] border border-border/60 bg-white/[0.03] p-7 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#34d399]/15 text-[18px] font-extrabold text-[#34d399]">
                {i + 1}
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Use cases ---------- */
function UseCases() {
  const { t, lang } = useI18n();
  const forBase = lang === "en" ? "/for" : `/${lang}/for`;
  const ucSlugs = ["dropshipping", "sourcing", "content", "market-research", "automation", "custom-tools"];
  return (
    <section id="use-cases" className="scroll-mt-24 bg-white/[0.03] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[40px]">
          {t.useCases.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
          {t.useCases.subheading}
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.useCases.items.map((u, i) => (
            <a key={u.title} href={`${forBase}/${ucSlugs[i]}`} className="block rounded-[24px] bg-white/[0.03] p-7 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-50 text-[24px]">{u.icon}</div>
              <h3 className="mt-5 text-[19px] font-bold text-foreground">{u.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-muted-foreground">{u.body}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Accio vs plain chat ---------- */
function CompareChat() {
  const { t } = useI18n();
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[960px] px-6">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[40px]">
          {t.compareChat.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
          {t.compareChat.subheading}
        </p>
        <div className="mt-12 overflow-hidden rounded-[28px] border border-border/70 shadow-card">
          <div className="grid grid-cols-2">
            <div className="bg-white/[0.03] px-5 py-5 text-[14px] font-bold text-foreground/70 sm:px-8 sm:text-[15px]">
              {t.compareChat.chatLabel}
            </div>
            <div className="bg-[#0a1120] px-5 py-5 text-[14px] font-bold text-white sm:px-8 sm:text-[15px]">
              {t.compareChat.accioLabel}
            </div>
          </div>
          {t.compareChat.rows.map((r, i) => (
            <div key={i} className={`grid grid-cols-2 ${i % 2 ? "bg-white/[0.03]" : ""}`}>
              <div className="flex items-start gap-3 border-t border-border/60 px-5 py-5 sm:px-8">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-[#C0392B]/70" />
                <span className="text-[14.5px] leading-snug text-muted-foreground">{r.chat}</span>
              </div>
              <div className="flex items-start gap-3 border-t border-border/60 bg-[#0a1120]/[0.02] px-5 py-5 sm:px-8">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34d399]" />
                <span className="text-[14.5px] font-medium leading-snug text-foreground">{r.accio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="scroll-mt-24 bg-mint-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="text-center text-[32px] font-extrabold tracking-tight text-foreground sm:text-[48px]">
          {t.pricing.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
          {t.pricing.subheading}
        </p>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {t.pricing.plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-[28px] p-8 ${
                p.highlight
                  ? "bg-[#0a1120] text-white shadow-elegant ring-2 ring-[#34d399]"
                  : "border border-border/70 bg-card text-foreground shadow-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-[#34d399] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  ★
                </span>
              )}
              <h3 className={`text-[20px] font-bold ${p.highlight ? "text-white" : "text-foreground"}`}>{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[34px] font-extrabold tracking-tight">{p.price}</span>
                <span className={`text-[13px] ${p.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                  {p.priceNote}
                </span>
              </div>
              <p className={`mt-3 text-[14.5px] leading-relaxed ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>
              <div className="my-6 h-px w-full bg-current opacity-10" />
              <p className={`mb-3 text-[12px] font-bold uppercase tracking-wider ${p.highlight ? "text-white/50" : "text-foreground/40"}`}>
                {t.pricing.perksTitle}
              </p>
              <ul className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#34d399]" />
                    <span className={`text-[14.5px] leading-snug ${p.highlight ? "text-white/90" : "text-foreground/85"}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex h-12 items-center justify-center rounded-full text-[15px] font-semibold transition hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-[#34d399] text-white hover:brightness-110"
                    : "bg-[#34d399] text-white hover:brightness-110"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-[13px] leading-relaxed text-muted-foreground">
          {t.pricing.note}
        </p>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function TestimonialCard({ t }: { t: TestimonialT }) {
  return (
    <article className="mx-3 w-[360px] shrink-0 rounded-[24px] bg-white/[0.03] p-6 shadow-card">
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
  const { t, lang } = useI18n();
  const rv = rvChrome[lang as keyof typeof rvChrome] ?? rvChrome.en;
  const reviewsHref = lang === "en" ? "/reviews" : `/${lang}/reviews`;
  return (
    <section className="relative overflow-hidden bg-mint-50 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-6 text-center">
        <h2 className="text-[36px] font-extrabold tracking-tight text-foreground sm:text-[50px]">
          {t.testimonials.heading1} <span className="text-[#34d399]">{t.testimonials.highlight}</span>
          <br />
          {t.testimonials.heading2}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[15px] font-semibold text-foreground/45">
          {rvPress.map((p) => (
            <span key={p.id}>{p.source}</span>
          ))}
        </div>
        <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {rvPress.map((p) => (
            <div key={p.id} className="rounded-2xl border border-white/12 bg-white/[0.03] p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-semibold text-foreground">{p.source}</span>
                <span className="rounded-full bg-mint-50 px-2 py-0.5 text-[11px] font-medium text-[#34d399]">{p.tag}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/75">
                {p.takeaway[lang as keyof typeof p.takeaway] ?? p.takeaway.en}
              </p>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#34d399] hover:underline"
              >
                {rv.sourceLabel} {p.source}
              </a>
            </div>
          ))}
        </div>
        <a
          href={reviewsHref}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#34d399]/40 px-6 py-3 text-sm font-semibold text-[#34d399] transition hover:bg-[#34d399] hover:text-white"
        >
          {t.nav.reviews}
        </a>
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
          className={`h-5 w-5 shrink-0 text-[#34d399] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#34d399] hover:underline"
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
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
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
function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5.75 10.4 4.6v6.9H3V5.75Zm0 12.5V12.6h7.4v6.9L3 18.25ZM11.6 4.42 21 3v8.5h-9.4V4.42Zm0 8.18H21V21l-9.4-1.42V12.6Z" />
    </svg>
  );
}

function DownloadButton() {
  const { t } = useI18n();
  const [os, setOs] = useState<"mac" | "win">("mac");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    if (/Windows|Win64|Win32/i.test(ua)) setOs("win");
    else if (/Mac|iPhone|iPad|iPod/i.test(ua)) setOs("mac");
  }, []);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const label = os === "win" ? t.cta.downloadWin : t.cta.download;
  const options = [
    { os: "mac" as const, name: "macOS", variant: "Apple Silicon" },
    { os: "mac" as const, name: "macOS", variant: "Intel" },
    { os: "win" as const, name: "Windows", variant: "x64" },
  ];

  return (
    <div ref={ref} className="relative">
      <div className="inline-flex items-stretch overflow-hidden rounded-full bg-[#34d399] text-white shadow-elegant">
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 py-4 pl-6 pr-4 text-[16px] font-semibold transition hover:bg-white/5"
        >
          {os === "win" ? <WindowsIcon className="h-5 w-5" /> : <Apple className="h-5 w-5" />}
          {label}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Choose platform"
          className="inline-flex items-center gap-2 border-l border-white/15 px-4 transition hover:bg-white/5"
        >
          <Apple className={`h-4 w-4 ${os === "mac" ? "text-white" : "text-white/40"}`} />
          <WindowsIcon className={`h-4 w-4 ${os === "win" ? "text-white" : "text-white/40"}`} />
          <ChevronDown className={`h-4 w-4 text-white/70 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-1.5 text-left shadow-[0_12px_40px_rgba(0,0,0,0.16)]"
        >
          {options.map((o, i) => (
            <a
              key={i}
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOs(o.os)}
              role="menuitem"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[15px] text-[#e8eef9]/80 transition hover:bg-white/[0.05] hover:text-[#e8eef9]"
            >
              {o.os === "win" ? <WindowsIcon className="h-4 w-4 text-[#e8eef9]/70" /> : <Apple className="h-4 w-4 text-[#e8eef9]/70" />}
              <span className="font-medium">{o.name}</span>
              <span className="ml-auto text-[13px] text-[#e8eef9]/45">{o.variant}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

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
          <DownloadButton />
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
function FooterCol({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-foreground/50">{heading}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[15px] text-foreground/75 hover:text-foreground">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const { t, lang } = useI18n();
  const base = lang === "en" ? "" : `/${lang}`;
  const langs: Lang[] = ["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr"];
  const langHome = (l: Lang) => (l === "en" ? "/" : `/${l}`);
  return (
    <footer className="border-t border-border/70 bg-background pt-16 pb-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.6fr_2.2fr]">
          <div className="max-w-xs">
            <Logo size={22} />
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/70">{t.footer.tagline}</p>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{t.footer.disclosure}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <FooterCol
              heading={t.footer.colProduct}
              links={[
                { href: `${base}/compare`, label: t.nav.compare },
                { href: `${base}/reviews`, label: t.nav.reviews },
                { href: `${base}/for`, label: t.nav.useCases },
                { href: "#pricing", label: t.nav.pricing },
              ]}
            />
            <FooterCol
              heading={t.footer.colTools}
              links={[
                { href: `${base}/roi`, label: t.nav.roi },
                { href: `${base}/quiz`, label: t.nav.quiz },
                { href: `${base}/templates`, label: t.nav.templates },
                { href: `${base}/duty`, label: t.nav.duty },
                { href: `${base}/ai-prompts`, label: t.nav.prompts },
                { href: `${base}/supplier-scorecard`, label: t.nav.scorecard },
              ]}
            />
            <FooterCol
              heading={t.footer.colResources}
              links={[
                { href: `${base}/guide`, label: t.nav.guide },
                { href: `${base}/blog`, label: t.nav.blog },
                { href: `${base}/de-minimis`, label: t.nav.deMinimis },
                { href: `${base}/tiktok-shop`, label: t.nav.tiktok },
                { href: `${base}/events/free-forever`, label: t.nav.events },
                { href: "#faq", label: t.nav.help },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 border-t border-border/60 pt-8">
          <p className="mb-4 text-[15px] font-medium text-muted-foreground">{t.footer.featuredIn}</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {rvPress.map((p, i) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`font-semibold tracking-tight text-foreground/70 transition hover:text-foreground ${i === 0 ? "text-[22px] font-bold" : "text-[17px]"}`}
              >
                {p.source}
              </a>
            ))}
            <a href={`${base}/reviews`} className="text-[14px] font-medium text-[#34d399] hover:underline">
              {t.nav.reviews}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-muted-foreground">
          <span className="font-medium text-foreground/70">{t.footer.otherLanguages}:</span>
          {langs.map((l) => (
            <a key={l} href={langHome(l)} className="hover:text-foreground">
              {t.langNames[l]}
            </a>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-muted-foreground/80">{t.footer.about}</p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-[13px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo size={16} />
            <span>· © {new Date().getFullYear()} Accio Work. {t.footer.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function CalculatorTeaser() {
  const { t, lang } = useI18n();
  const rc = roiChrome[lang as keyof typeof roiChrome] ?? roiChrome.en;
  const roiHref = lang === "en" ? "/roi" : `/${lang}/roi`;
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0a1120] to-[#0f2e26] px-8 py-14 text-center sm:px-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#5eead4]">{rc.kicker}</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-[28px] font-bold leading-tight tracking-tight text-white sm:text-[40px]">
            {rc.h1}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/70">{rc.intro}</p>
          <a
            href={roiHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#34d399] px-7 py-3.5 font-semibold text-white transition hover:brightness-110"
          >
            {t.nav.roi}
            <span aria-hidden>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCta() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/12 bg-[#0a1120]/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={REFERRAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center rounded-full bg-[#34d399] text-[15px] font-semibold text-white shadow-elegant"
      >
        {t.nav.download}
      </a>
    </div>
  );
}

const STATS: Record<string, { heading: string; users: string; suppliers: string; products: string; note: string }> = {
  en: { heading: "Powered by Accio, by Alibaba", users: "monthly active users", suppliers: "verified suppliers", products: "products", note: "Accio / Alibaba figures" },
  ru: { heading: "Работает на Accio от Alibaba", users: "активных пользователей в месяц", suppliers: "проверенных поставщиков", products: "товаров", note: "Данные Accio / Alibaba" },
  de: { heading: "Angetrieben von Accio, von Alibaba", users: "monatlich aktive Nutzer", suppliers: "verifizierte Lieferanten", products: "Produkte", note: "Zahlen von Accio / Alibaba" },
  it: { heading: "Basato su Accio, di Alibaba", users: "utenti attivi al mese", suppliers: "fornitori verificati", products: "prodotti", note: "Dati Accio / Alibaba" },
  es: { heading: "Con la tecnología de Accio, de Alibaba", users: "usuarios activos al mes", suppliers: "proveedores verificados", products: "productos", note: "Datos de Accio / Alibaba" },
  zh: { heading: "由阿里巴巴 Accio 提供支持", users: "月活跃用户", suppliers: "已核验供应商", products: "件商品", note: "数据来自 Accio / Alibaba" },
  pt: { heading: "Com tecnologia Accio, da Alibaba", users: "usuários ativos por mês", suppliers: "fornecedores verificados", products: "produtos", note: "Dados Accio / Alibaba" },
  hi: { heading: "Accio द्वारा संचालित, Alibaba से", users: "मासिक सक्रिय उपयोगकर्ता", suppliers: "सत्यापित सप्लायर", products: "उत्पाद", note: "Accio / Alibaba के आंकड़े" },
  fr: { heading: "Propulsé par Accio, d'Alibaba", users: "utilisateurs actifs par mois", suppliers: "fournisseurs vérifiés", products: "produits", note: "Chiffres Accio / Alibaba" },
};

function CountUp({ value, decimals, suffix, run }: { value: number; decimals: number; suffix: string; run: boolean }) {
  const [display, setDisplay] = useState(value);
  const animated = useRef(false);
  useEffect(() => {
    if (!run || animated.current) return;
    animated.current = true;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const dur = 1300;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);
  const text = display.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return (
    <span>
      {text}
      {suffix}
    </span>
  );
}

function AccioStats() {
  const { lang } = useI18n();
  const s = STATS[lang as keyof typeof STATS] ?? STATS.en;
  const { ref, shown } = useReveal<HTMLDivElement>();
  const items = [
    { v: 10, d: 0, l: s.users },
    { v: 1.5, d: 1, l: s.suppliers },
    { v: 400, d: 0, l: s.products },
  ];
  return (
    <section ref={ref} className="border-y border-border bg-card py-14 sm:py-16">
      <div className="mx-auto max-w-[1100px] px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#34d399]">{s.heading}</p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.l} className="flex flex-col items-center">
              <span className="text-[40px] font-extrabold tracking-tight text-foreground sm:text-[52px] tabular-nums">
                <CountUp value={it.v} decimals={it.d} suffix="M+" run={shown} />
              </span>
              <span className="mt-1 text-[15px] text-muted-foreground">{it.l}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-[12px] text-foreground/45">{s.note}</p>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <I18nProvider>
      <main className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <Hero />
        <AccioStats />
        <BusinessNeeds />
        <HowItWorks />
        <WhyChoose />
        <UseCases />
        <CalculatorTeaser />
        <CompareChat />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
        <Footer />
        <MobileStickyCta />
      </main>
    </I18nProvider>
  );
}