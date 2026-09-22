import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const NF_LANGS = ["ru", "de", "it", "es", "zh", "pt", "hi", "fr", "ar"] as const;
const NF_RTL = new Set(["ar"]);
function nfLang(pathname: string): string {
  const seg = pathname.split("/")[1] ?? "";
  return (NF_LANGS as readonly string[]).includes(seg) ? seg : "en";
}
type NFStrings = {
  title: string;
  desc: string;
  home: string;
  compare: string;
  forr: string;
  guide: string;
  reviews: string;
  roi: string;
  blog: string;
  errTitle: string;
  errDesc: string;
  retry: string;
  goHome: string;
};
const NF_T: Record<string, NFStrings> = {
  en: {
    title: "Page not found",
    desc: "That page does not exist or has moved. Here is where to go next.",
    home: "Home",
    compare: "Compare",
    forr: "Use cases",
    guide: "Guides",
    reviews: "Reviews",
    roi: "Calculator",
    blog: "Blog",
    errTitle: "This page didn't load",
    errDesc: "Something went wrong on our end. You can try refreshing or head back home.",
    retry: "Try again",
    goHome: "Go home",
  },
  ru: {
    title: "Страница не найдена",
    desc: "Такой страницы нет или она переехала. Вот куда можно перейти.",
    home: "Главная",
    compare: "Сравнение",
    forr: "Сценарии",
    guide: "Гайды",
    reviews: "Отзывы",
    roi: "Калькулятор",
    blog: "Блог",
    errTitle: "Страница не загрузилась",
    errDesc: "Что-то пошло не так с нашей стороны. Попробуйте обновить или вернуться на главную.",
    retry: "Повторить",
    goHome: "На главную",
  },
  de: {
    title: "Seite nicht gefunden",
    desc: "Diese Seite gibt es nicht oder sie wurde verschoben. Hier geht es weiter.",
    home: "Start",
    compare: "Vergleich",
    forr: "Anwendungsfälle",
    guide: "Ratgeber",
    reviews: "Bewertungen",
    roi: "Rechner",
    blog: "Blog",
    errTitle: "Diese Seite wurde nicht geladen",
    errDesc:
      "Auf unserer Seite ist etwas schiefgelaufen. Aktualisiere die Seite oder geh zurück zur Startseite.",
    retry: "Erneut versuchen",
    goHome: "Zur Startseite",
  },
  it: {
    title: "Pagina non trovata",
    desc: "Questa pagina non esiste o è stata spostata. Ecco dove andare.",
    home: "Home",
    compare: "Confronto",
    forr: "Casi d'uso",
    guide: "Guide",
    reviews: "Recensioni",
    roi: "Calcolatore",
    blog: "Blog",
    errTitle: "La pagina non si è caricata",
    errDesc: "Qualcosa è andato storto dalla nostra parte. Prova ad aggiornare o torna alla home.",
    retry: "Riprova",
    goHome: "Vai alla home",
  },
  es: {
    title: "Página no encontrada",
    desc: "Esta página no existe o se ha movido. Aquí puedes continuar.",
    home: "Inicio",
    compare: "Comparar",
    forr: "Casos de uso",
    guide: "Guías",
    reviews: "Reseñas",
    roi: "Calculadora",
    blog: "Blog",
    errTitle: "La página no se cargó",
    errDesc: "Algo salió mal por nuestra parte. Prueba a actualizar o vuelve al inicio.",
    retry: "Reintentar",
    goHome: "Ir al inicio",
  },
  zh: {
    title: "页面未找到",
    desc: "该页面不存在或已移动，这里是接下来的去处。",
    home: "首页",
    compare: "对比",
    forr: "使用场景",
    guide: "指南",
    reviews: "评价",
    roi: "计算器",
    blog: "博客",
    errTitle: "页面加载失败",
    errDesc: "我们这边出了点问题，可以刷新或返回首页。",
    retry: "重试",
    goHome: "返回首页",
  },
  pt: {
    title: "Página não encontrada",
    desc: "Esta página não existe ou foi movida. Veja para onde ir.",
    home: "Início",
    compare: "Comparação",
    forr: "Casos de uso",
    guide: "Guias",
    reviews: "Avaliações",
    roi: "Calculadora",
    blog: "Blog",
    errTitle: "A página não carregou",
    errDesc: "Algo deu errado do nosso lado. Tente atualizar ou volte ao início.",
    retry: "Tentar de novo",
    goHome: "Ir para o início",
  },
  hi: {
    title: "पेज नहीं मिला",
    desc: "यह पेज मौजूद नहीं है या हटा दिया गया है। आगे कहां जाएं, यहां देखें।",
    home: "होम",
    compare: "तुलना",
    forr: "उपयोग के तरीके",
    guide: "गाइड",
    reviews: "समीक्षाएं",
    roi: "कैलकुलेटर",
    blog: "ब्लॉग",
    errTitle: "यह पेज लोड नहीं हुआ",
    errDesc: "हमारी तरफ से कुछ गड़बड़ हो गई। रिफ्रेश करें या होम पर लौटें।",
    retry: "फिर से कोशिश करें",
    goHome: "होम पर जाएं",
  },
  fr: {
    title: "Page introuvable",
    desc: "Cette page n'existe pas ou a été déplacée. Voici où aller.",
    home: "Accueil",
    compare: "Comparatif",
    forr: "Cas d'usage",
    guide: "Guides",
    reviews: "Avis",
    roi: "Calculateur",
    blog: "Blog",
    errTitle: "Cette page ne s'est pas chargée",
    errDesc: "Un problème est survenu de notre côté. Réessayez ou revenez à l'accueil.",
    retry: "Réessayer",
    goHome: "Accueil",
  },
  ar: {
    title: "الصفحة غير موجودة",
    desc: "هذه الصفحة غير موجودة أو تم نقلها. إليك أين تذهب بعد ذلك.",
    home: "الرئيسية",
    compare: "مقارنة",
    forr: "حالات الاستخدام",
    guide: "أدلة",
    reviews: "تقييمات",
    roi: "حاسبة",
    blog: "المدونة",
    errTitle: "تعذّر تحميل الصفحة",
    errDesc: "حدث خطأ من جهتنا. حاول التحديث أو العودة إلى الرئيسية.",
    retry: "أعد المحاولة",
    goHome: "إلى الرئيسية",
  },
};

function NotFoundComponent() {
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const lang = nfLang(pathname);
  const t = NF_T[lang] ?? NF_T.en;
  const rtl = NF_RTL.has(lang);
  const base = lang === "en" ? "" : `/${lang}`;
  const sections = [
    { href: base || "/", label: t.home },
    { href: `${base}/compare`, label: t.compare },
    { href: `${base}/for`, label: t.forr },
    { href: `${base}/guide`, label: t.guide },
    { href: `${base}/reviews`, label: t.reviews },
    { href: `${base}/roi`, label: t.roi },
    { href: `${base}/blog`, label: t.blog },
  ];
  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="flex min-h-screen items-center justify-center bg-background px-4"
    >
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
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {sections.map((sec) => (
            <a
              key={sec.href}
              href={sec.href}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition hover:border-[#34d399]/50 hover:text-[#34d399]"
            >
              {sec.label}
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
  const pathname = useRouterState({ select: (st) => st.location.pathname });
  const lang = nfLang(pathname);
  const t = NF_T[lang] ?? NF_T.en;
  const rtl = NF_RTL.has(lang);
  const base = lang === "en" ? "/" : `/${lang}`;

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="flex min-h-screen items-center justify-center bg-background px-4"
    >
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{t.errTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.errDesc}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.retry}
          </button>
          <a
            href={base}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.goHome}
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
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "yandex-verification", content: "bcf646e91b8ebb07" },
      { name: "google-site-verification", content: "DeEzULQO3ZpMSdtk9-332HGGxIq78-NxAz3z8JyE4rQ" },
      { name: "msvalidate.01", content: "59482D5F4C57AEF2EA0D999CC9DFF4EE" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accio Work" },
      { name: "twitter:card", content: "summary" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "theme-color", content: "#0B0F0E" },
      { name: "format-detection", content: "telephone=no" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Accio Work" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@400;500;600;700&display=swap",
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

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const seg = pathname.split("/")[1];
  const LANGS = ["ru", "de", "it", "es", "zh", "pt", "hi", "fr", "ar"];
  const lang = LANGS.includes(seg) ? seg : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <html lang={lang} dir={dir}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
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
