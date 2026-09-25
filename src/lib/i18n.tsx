import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { translations, type Lang, type Dict } from "./translations";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
};

const Ctx = createContext<I18nCtx | null>(null);
const STORAGE_KEY = "accio_lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const path = window.location.pathname.replace(/\/+$/, "").toLowerCase();
    if (path === "/ar") return "ar";
    if (path === "/ru") return "ru";
    if (path === "/de") return "de";
    if (path === "/it") return "it";
    if (path === "/es") return "es";
    if (path === "/zh") return "zh";
    if (path === "/pt") return "pt";
    if (path === "/hi") return "hi";
    if (path === "/fr") return "fr";
    if (path.startsWith("/ar/")) return "ar";
    if (path.startsWith("/it/")) return "it";
    if (path.startsWith("/ru/")) return "ru";
    if (path.startsWith("/de/")) return "de";
    if (path.startsWith("/es/")) return "es";
    if (path.startsWith("/zh/")) return "zh";
    if (path.startsWith("/pt/")) return "pt";
    if (path.startsWith("/hi/")) return "hi";
    if (path.startsWith("/fr/")) return "fr";
  } catch {}
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (
      param === "ru" ||
      param === "en" ||
      param === "de" ||
      param === "it" ||
      param === "es" ||
      param === "zh" ||
      param === "pt" ||
      param === "hi" ||
      param === "fr" ||
      param === "ar"
    )
      return param;
  } catch {}
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (
      saved === "ru" ||
      saved === "en" ||
      saved === "de" ||
      saved === "it" ||
      saved === "es" ||
      saved === "zh" ||
      saved === "pt" ||
      saved === "hi" ||
      saved === "fr" ||
      saved === "ar"
    )
      return saved;
  } catch {}
  const nav =
    (typeof navigator !== "undefined" &&
      (navigator.language || (navigator.languages && navigator.languages[0]))) ||
    "";
  const low = nav.toLowerCase();
  if (low.startsWith("ar")) return "ar";
  if (low.startsWith("ru")) return "ru";
  if (low.startsWith("de")) return "de";
  if (low.startsWith("it")) return "it";
  if (low.startsWith("es")) return "es";
  if (low.startsWith("zh")) return "zh";
  if (low.startsWith("pt")) return "pt";
  if (low.startsWith("hi")) return "hi";
  if (low.startsWith("fr")) return "fr";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // SSR-safe: start with "en", then upgrade after mount to avoid hydration mismatch.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const seg = pathname.split("/")[1]?.toLowerCase();
  const pathLang = (["ru", "de", "it", "es", "zh", "pt", "hi", "fr", "ar"] as const).find(
    (l) => l === seg,
  );
  const [lang, setLangState] = useState<Lang>(pathLang ?? "en");

  useEffect(() => {
    const initial = detectInitial();
    if (initial !== "en") setLangState(initial);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const value = useMemo<I18nCtx>(
    () => ({ lang, setLang: setLangState, t: translations[lang] }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

/** Render a plain string with **bold** turned into <mark>. */
export function renderHighlighted(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <mark key={i} className="bg-[#DDF7EE] text-foreground">
        {p.slice(2, -2)}
      </mark>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}
