import { useI18n } from "@/lib/i18n";

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

export function BlogShell({ children }: { children: React.ReactNode }) {
  const { lang } = useI18n();
  const home = lang === "ru" ? "/ru" : lang === "de" ? "/de" : "/";
  const blog = lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : "/blog";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <a href={home} className="flex items-center"><Logo /></a>
          <nav className="flex items-center gap-6 text-sm text-foreground/80">
            <a href={home} className="hover:text-foreground">Home</a>
            <a href={blog} className="hover:text-foreground">Blog</a>
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