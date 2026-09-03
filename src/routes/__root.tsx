import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  const sections = [
    { href: "/", label: "Home" },
    { href: "/compare", label: "Compare" },
    { href: "/for", label: "Use cases" },
    { href: "/guide", label: "Guides" },
    { href: "/reviews", label: "Reviews" },
    { href: "/roi", label: "Calculator" },
    { href: "/blog", label: "Blog" },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-xl text-center">
        <span className="mb-6 inline-flex items-center gap-1.5 text-[22px] font-bold tracking-tight text-foreground">
          <svg width={21} height={22} viewBox="0 0 28 28" aria-hidden>
            <defs>
              <linearGradient id="nf404" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="55%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#5eead4" />
              </linearGradient>
            </defs>
            <path d="M14 3 L26 25 L2 25 Z" fill="url(#nf404)" />
          </svg>
          Accio
        </span>
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page does not exist or has moved. Here is where to go next.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition hover:border-[#34d399]/50 hover:text-[#34d399]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "yandex-verification", content: "bcf646e91b8ebb07" },
      { name: "google-site-verification", content: "DeEzULQO3ZpMSdtk9-332HGGxIq78-NxAz3z8JyE4rQ" },
      { name: "msvalidate.01", content: "59482D5F4C57AEF2EA0D999CC9DFF4EE" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&display=swap",
      },
    ],
    scripts: [
      {
        children: `(function(){try{var t=localStorage.getItem('accio-theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
      },
      {
        children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110831748', 'ym');ym(110831748, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function ThemeToggle() {
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
      className="fixed bottom-4 right-4 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-elegant transition hover:brightness-110"
    >
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const seg = pathname.split("/")[1];
  const LANGS = ["ru", "de", "it", "es", "zh", "pt", "hi", "fr"];
  const lang = LANGS.includes(seg) ? seg : "en";
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <ThemeToggle />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/110831748"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
