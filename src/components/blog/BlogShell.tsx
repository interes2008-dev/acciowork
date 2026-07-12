import { useI18n } from "@/lib/i18n";

function Logo() {
  return (
    <span className="flex items-center gap-2 text-[17px] font-semibold tracking-tight text-foreground">
      <span className="inline-block h-6 w-6 rounded-md bg-foreground" />
      Accio Work
    </span>
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