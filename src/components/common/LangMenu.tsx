import { useState, useRef, useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Globe, ChevronDown, Check } from "lucide-react";

const LANGS = ["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr"] as const;
type L = (typeof LANGS)[number];
const NONEN = ["ru", "de", "it", "es", "zh", "pt", "hi", "fr"];
const NAMES: Record<L, string> = {
  en: "English",
  ru: "Русский",
  de: "Deutsch",
  it: "Italiano",
  es: "Español",
  zh: "中文",
  pt: "Português",
  hi: "हिन्दी",
  fr: "Français",
};

export function LangMenu({ lang }: { lang: L }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
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

  // Strip the current language prefix to get the language-independent path.
  const seg = pathname.split("/")[1];
  const bare = NONEN.includes(seg) ? "/" + pathname.split("/").slice(2).join("/") : pathname;
  const hrefFor = (l: L) => {
    const prefix = l === "en" ? "" : `/${l}`;
    const path = bare === "/" ? "" : bare;
    return prefix + path || "/";
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Language"
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium text-foreground/70 transition hover:text-foreground"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{NAMES[lang]}</span>
        <ChevronDown className={`h-4 w-4 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-border bg-card p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
        >
          {LANGS.map((l) => (
            <a
              key={l}
              href={hrefFor(l)}
              role="menuitem"
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-[15px] transition ${
                l === lang ? "bg-muted font-semibold text-foreground" : "text-foreground/75 hover:bg-muted"
              }`}
            >
              {NAMES[l]}
              {l === lang && <Check className="h-4 w-4 text-[#34d399]" />}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
