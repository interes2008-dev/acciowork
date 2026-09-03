import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [light, setLight] = useState(false);
  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);
  const toggle = () => {
    const el = document.documentElement;
    const next = !el.classList.contains("light");
    el.classList.toggle("light", next);
    try {
      localStorage.setItem("accio-theme", next ? "light" : "dark");
    } catch {
      /* ignore */
    }
    setLight(next);
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground ${className}`}
    >
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
