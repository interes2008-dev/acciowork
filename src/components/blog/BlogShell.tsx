import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontSize: size }}>
      <svg width={size * 0.95} height={size} viewBox="0 0 28 28" aria-hidden>
        <defs>
          <linearGradient id="accioTriBlog" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#17B26A" />
            <stop offset="100%" stopColor="#7CE7C2" />
          </linearGradient>
        </defs>
        <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTriBlog)" />
      </svg>
      <span className="text-foreground">Accio</span>
    </div>
  );
}

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

  const options: Lang[] = ["en", "ru", "de", "it"];

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
                    const target =
                      code === "ru"
                        ? "/ru/blog"
                        : code === "de"
                          ? "/de/blog"
                          : code === "it"
                            ? "/it/blog"
                            : "/blog";
                    if (window.location.pathname !== target) {
                      window.location.assign(target);
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

export function BlogShell({ children }: { children: React.ReactNode }) {
  const { lang } = useI18n();
  const home = lang === "ru" ? "/ru" : lang === "de" ? "/de" : lang === "it" ? "/it" : "/";
  const blog =
    lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : lang === "it" ? "/it/blog" : "/blog";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <a href={home} className="flex items-center"><Logo /></a>
          <nav className="flex items-center gap-6 text-sm text-foreground/80">
            <a href={home} className="hover:text-foreground">Home</a>
            <a href={blog} className="hover:text-foreground">Blog</a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[1200px] px-6 pb-24 pt-12">{children}</main>
      <footer className="border-t border-border/60 py-8 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Accio Work
      </footer>
    </div>
  );
}