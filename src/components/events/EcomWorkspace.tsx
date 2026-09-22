import type { Lang } from "@/lib/translations";
import { fillAr } from "@/lib/fill-ar";
import { REFERRAL_URL } from "./FreeForeverPage";

const PLATFORM_BRANDS = [
  "shopify",
  "amazon",
  "tiktok",
  "ebay",
  "walmart",
  "dsers",
  "hubspot",
  "analytics",
] as const;
type PlatformBrand = (typeof PLATFORM_BRANDS)[number];

function PlatformIcon({ brand }: { brand: PlatformBrand }) {
  if (brand === "ebay") {
    return (
      <span aria-hidden className="integration-ebay-logo">
        <span>e</span>
        <span>b</span>
        <span>a</span>
        <span>y</span>
      </span>
    );
  }

  const paths: Record<Exclude<PlatformBrand, "ebay">, React.ReactNode> = {
    shopify: (
      <>
        <path d="M7.2 7.8h9.6l1.1 11.4H6.1L7.2 7.8Z" />
        <path
          d="M9.2 8V6.5a2.8 2.8 0 0 1 5.6 0V8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M13.8 11.1c-.6-.3-1.2-.5-1.8-.5-1 0-1.6.5-1.6 1.2 0 1.8 3.4 1.3 3.4 3.7 0 1.3-1.1 2.2-2.7 2.2-.8 0-1.6-.2-2.2-.7"
          fill="none"
          stroke="var(--platform-icon-contrast)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </>
    ),
    amazon: (
      <path
        d="M4 15.1c4.7 3.4 10.3 3.7 15.3.6M16.6 14.4l2.9.2-.8 2.7M9 7.4c1-1.1 4.5-1.5 5.5.1.8 1.2.3 6.3.7 7.3M14.7 10.4c-3-.4-5.9.2-5.9 2.5 0 2.1 2.6 2.7 5.9.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    tiktok: (
      <path
        d="M13.5 3v11.1a4.1 4.1 0 1 1-3.2-4V7.3c1.1-.2 2.1 0 3.2.4V3Zm0 0c.5 2.7 2 4.2 4.7 4.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    walmart: (
      <g fill="currentColor">
        <rect x="11" y="2.5" width="2" height="6" rx="1" />
        <rect x="11" y="15.5" width="2" height="6" rx="1" />
        <rect x="2.5" y="11" width="6" height="2" rx="1" />
        <rect x="15.5" y="11" width="6" height="2" rx="1" />
        <rect x="5.2" y="5.2" width="2" height="6" rx="1" transform="rotate(-45 6.2 8.2)" />
        <rect x="16.8" y="12.8" width="2" height="6" rx="1" transform="rotate(-45 17.8 15.8)" />
      </g>
    ),
    dsers: (
      <path d="M5 4h6.6c4.8 0 7.4 3 7.4 8s-2.6 8-7.4 8H5V4Zm4 3.3v9.4h2.3c2.4 0 3.7-1.6 3.7-4.7s-1.3-4.7-3.7-4.7H9Z" />
    ),
    hubspot: (
      <>
        <path
          d="m7.1 5.3 7 5.3m1.7-4.9v4.1m1.8 3.6 3.1 1.6M8 16.1l-3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="15.8" cy="12.1" r="3.3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="5.7" cy="4.4" r="1.8" />
        <circle cx="15.8" cy="3.6" r="1.8" />
        <circle cx="21" cy="16" r="1.8" />
        <circle cx="3.5" cy="19" r="1.8" />
      </>
    ),
    analytics: (
      <path
        d="M4 19V11m5 8V6m5 13v-5m5 5V3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    ),
  };

  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-9 w-9">
      {paths[brand]}
    </svg>
  );
}

type Dict = {
  badge: string;
  title: string;
  titleAccent: string;
  sub: string;
  cta: string;
  integrationsTitle: string;
  integrationsDesc: string;
  platforms: string[];
  benchTitle: string;
  benchDesc: string;
  higherLabel: string;
  lowerLabel: string;
  successLabel: string;
  costLabel: string;
  accioLabel: string;
  otherLabel: string;
};

const AR_ECOM: Dict = {
  badge: "تعرّف على ميزتنا الجديدة",
  title: "مساحة عمل بالذكاء الاصطناعي",
  titleAccent: "للتجارة الإلكترونية العالمية",
  sub: "الوصول التجريبي يفتح في 15 سبتمبر 2026.",
  cta: "انضمّ إلى قائمة الانتظار",
  integrationsTitle: "متّصلة بأبرز منظومات التجارة الإلكترونية",
  integrationsDesc:
    "اربط Shopify وAmazon وTikTok Shop وغيرها. أتمت مسارات التجارة بأكثر من 200 أداة ومهارات خبيرة مصمّمة لتنمية عملك.",
  platforms: [
    "Shopify",
    "Amazon",
    "TikTok Shop",
    "eBay",
    "Walmart",
    "DSers",
    "HubSpot",
    "Analytics",
  ],
  benchTitle: "تكلفة أقل بأكثر من 50% في مهام التجارة الحقيقية",
  benchDesc:
    "في اختبار التجارة المرجعي، أنجز Accio كل المهام الـ107 بتكلفة أقل بأكثر من 50% مقارنةً بـ OpenAI Codex وClaude Code من Anthropic.",
  higherLabel: "أعلى",
  lowerLabel: "−50+%",
  successLabel: "معدّل النجاح",
  costLabel: "التكلفة الإجمالية",
  accioLabel: "Accio Work",
  otherLabel: "ذكاء اصطناعي آخر",
};

const D: Record<Lang, Dict> = {
  ...fillAr({
    en: {
      badge: "Meet our new feature",
      title: "AI workspace for",
      titleAccent: "global e-commerce",
      sub: "Beta access opens September 15, 2026.",
      cta: "Join the waitlist",
      integrationsTitle: "Connected to leading e-commerce ecosystems",
      integrationsDesc:
        "Plug into Shopify, Amazon, TikTok Shop and more. Automate commerce workflows with 200+ tools and expert skills built to grow your business.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Analytics",
      ],
      benchTitle: "Over 50% lower cost on real commerce tasks",
      benchDesc:
        "In the commerce benchmark, Accio completed all 107 tasks at over 50% lower cost than OpenAI Codex and Anthropic's Claude Code.",
      higherLabel: "Higher",
      lowerLabel: "−50+%",
      successLabel: "Success rate",
      costLabel: "Total cost",
      accioLabel: "Accio Work",
      otherLabel: "Other AI",
    },
    ru: {
      badge: "Знакомьтесь: наша новая функция",
      title: "ИИ-рабочее пространство для",
      titleAccent: "глобальной электронной коммерции",
      sub: "Бета-доступ откроется 15 сент. 2026 г.",
      cta: "Записаться в лист ожидания",
      integrationsTitle: "Интеграция с ведущими экосистемами электронной коммерции",
      integrationsDesc:
        "Легко подключайтесь к маркетплейсам Shopify, Amazon, TikTok Shop и другим. Автоматизируйте задачи коммерции с помощью более 200 инструментов и экспертных навыков.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Аналитика",
      ],
      benchTitle: "Более чем на 50% ниже затраты на реальные коммерческие задачи",
      benchDesc:
        "В коммерческом бенчмарке Accio выполнил все 107 задач с затратами более чем на 50% ниже, чем у OpenAI Codex и Claude Code от Anthropic.",
      higherLabel: "Выше",
      lowerLabel: "−50+%",
      successLabel: "Показатель успеха",
      costLabel: "Общая стоимость",
      accioLabel: "Accio Work",
      otherLabel: "Другой ИИ",
    },
    de: {
      badge: "Neu: unsere neue Funktion",
      title: "KI-Arbeitsbereich für den",
      titleAccent: "globalen E-Commerce",
      sub: "Der Beta-Zugang startet am 15. Sept. 2026.",
      cta: "Auf die Warteliste",
      integrationsTitle: "Verbunden mit führenden E-Commerce-Ökosystemen",
      integrationsDesc:
        "Anbindung an Shopify, Amazon, TikTok Shop und mehr. Automatisiere Commerce-Abläufe mit über 200 Tools und Experten-Skills für dein Wachstum.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Analytics",
      ],
      benchTitle: "Über 50% geringere Kosten bei echten Commerce-Aufgaben",
      benchDesc:
        "Im Commerce-Benchmark hat Accio alle 107 Aufgaben mit über 50% geringeren Kosten erledigt als OpenAI Codex und Anthropics Claude Code.",
      higherLabel: "Höher",
      lowerLabel: "−50+%",
      successLabel: "Erfolgsquote",
      costLabel: "Gesamtkosten",
      accioLabel: "Accio Work",
      otherLabel: "Andere KI",
    },
    it: {
      badge: "Novità: la nostra nuova funzione",
      title: "Workspace AI per",
      titleAccent: "l'e-commerce globale",
      sub: "L'accesso beta apre il 15 settembre 2026.",
      cta: "Iscriviti alla lista d'attesa",
      integrationsTitle: "Integrazione con i principali ecosistemi e-commerce",
      integrationsDesc:
        "Collegati facilmente a Shopify, Amazon, TikTok Shop e altri. Automatizza le attività di commercio con oltre 200 strumenti e competenze esperte.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Analytics",
      ],
      benchTitle: "Oltre il 50% di costi in meno su attività commerciali reali",
      benchDesc:
        "Nel benchmark commerciale, Accio ha completato tutte le 107 attività con costi inferiori di oltre il 50% rispetto a OpenAI Codex e Claude Code di Anthropic.",
      higherLabel: "Più alto",
      lowerLabel: "−50+%",
      successLabel: "Tasso di successo",
      costLabel: "Costo totale",
      accioLabel: "Accio Work",
      otherLabel: "Altra AI",
    },
    es: {
      badge: "Conoce nuestra nueva función",
      title: "Espacio de trabajo con IA para",
      titleAccent: "el comercio electrónico global",
      sub: "El acceso beta se abre el 15 de sept. de 2026.",
      cta: "Unirse a la lista de espera",
      integrationsTitle: "Integración con los principales ecosistemas de e-commerce",
      integrationsDesc:
        "Conéctate fácilmente a Shopify, Amazon, TikTok Shop y más. Automatiza tareas comerciales con más de 200 herramientas y habilidades expertas.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Analítica",
      ],
      benchTitle: "Más del 50% menos de coste en tareas comerciales reales",
      benchDesc:
        "En el benchmark de comercio, Accio completó las 107 tareas con un coste más del 50% inferior al de OpenAI Codex y Claude Code de Anthropic.",
      higherLabel: "Más alto",
      lowerLabel: "−50+%",
      successLabel: "Tasa de éxito",
      costLabel: "Coste total",
      accioLabel: "Accio Work",
      otherLabel: "Otra IA",
    },
    pt: {
      badge: "Conheça nosso novo recurso",
      title: "Workspace de IA para o",
      titleAccent: "comércio eletrônico global",
      sub: "O acesso beta abre em 15 de set. de 2026.",
      cta: "Entrar na lista de espera",
      integrationsTitle: "Integração com os principais ecossistemas de e-commerce",
      integrationsDesc:
        "Conecte-se facilmente a Shopify, Amazon, TikTok Shop e outros. Automatize tarefas de comércio com mais de 200 ferramentas e habilidades especializadas.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Analytics",
      ],
      benchTitle: "Mais de 50% de redução de custo em tarefas comerciais reais",
      benchDesc:
        "No benchmark de comércio, a Accio concluiu as 107 tarefas com custo mais de 50% menor que OpenAI Codex e Claude Code da Anthropic.",
      higherLabel: "Mais alto",
      lowerLabel: "−50+%",
      successLabel: "Taxa de sucesso",
      costLabel: "Custo total",
      accioLabel: "Accio Work",
      otherLabel: "Outra IA",
    },
    zh: {
      badge: "全新功能登场",
      title: "面向全球电商的",
      titleAccent: "AI 工作空间",
      sub: "Beta 测试将于 2026 年 9 月 15 日开放。",
      cta: "加入候补名单",
      integrationsTitle: "连接主流电商生态系统",
      integrationsDesc:
        "轻松接入 Shopify、Amazon、TikTok Shop 等平台。借助 200 多种工具和专业技能,自动化您的电商业务流程。",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "数据分析",
      ],
      benchTitle: "真实商业任务成本降低 50% 以上",
      benchDesc:
        "在商业基准测试中,Accio 完成了全部 107 项任务,成本比 OpenAI Codex 和 Anthropic 的 Claude Code 低 50% 以上。",
      higherLabel: "更高",
      lowerLabel: "−50+%",
      successLabel: "成功率",
      costLabel: "总成本",
      accioLabel: "Accio Work",
      otherLabel: "其他 AI",
    },
    hi: {
      badge: "पेश है हमारा नया फ़ीचर",
      title: "ग्लोबल ई-कॉमर्स के लिए",
      titleAccent: "AI वर्कस्पेस",
      sub: "बीटा एक्सेस 15 सितंबर 2026 को खुलेगा।",
      cta: "वेटलिस्ट में शामिल हों",
      integrationsTitle: "प्रमुख ई-कॉमर्स इकोसिस्टम से इंटीग्रेशन",
      integrationsDesc:
        "Shopify, Amazon, TikTok Shop जैसे मार्केटप्लेस से आसानी से जुड़ें। 200+ टूल और विशेषज्ञ स्किल्स के साथ कॉमर्स कार्यों को ऑटोमेट करें।",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "एनालिटिक्स",
      ],
      benchTitle: "असली कॉमर्स टास्क पर 50% से ज़्यादा कम लागत",
      benchDesc:
        "कॉमर्स बेंचमार्क में Accio ने सभी 107 टास्क OpenAI Codex और Anthropic के Claude Code की तुलना में 50% से ज़्यादा कम लागत पर पूरे किए।",
      higherLabel: "ऊँचा",
      lowerLabel: "−50+%",
      successLabel: "सफलता दर",
      costLabel: "कुल लागत",
      accioLabel: "Accio Work",
      otherLabel: "दूसरा AI",
    },
    fr: {
      badge: "Découvrez notre nouvelle fonctionnalité",
      title: "Espace de travail IA pour",
      titleAccent: "l'e-commerce mondial",
      sub: "L'accès bêta ouvre le 15 sept. 2026.",
      cta: "Rejoindre la liste d'attente",
      integrationsTitle: "Intégration aux principaux écosystèmes e-commerce",
      integrationsDesc:
        "Connectez-vous facilement à Shopify, Amazon, TikTok Shop et plus. Automatisez vos tâches commerciales avec plus de 200 outils et compétences expertes.",
      platforms: [
        "Shopify",
        "Amazon",
        "TikTok Shop",
        "eBay",
        "Walmart",
        "DSers",
        "HubSpot",
        "Analytics",
      ],
      benchTitle: "Plus de 50% de coûts en moins sur des tâches commerciales réelles",
      benchDesc:
        "Dans le benchmark commerce, Accio a accompli les 107 tâches avec des coûts inférieurs de plus de 50% à ceux d'OpenAI Codex et de Claude Code d'Anthropic.",
      higherLabel: "Plus haut",
      lowerLabel: "−50+%",
      successLabel: "Taux de réussite",
      costLabel: "Coût total",
      accioLabel: "Accio Work",
      otherLabel: "Autre IA",
    },
  }),
  ar: AR_ECOM,
};

export function EcomWorkspace({ lang }: { lang: Lang }) {
  const d = D[lang];
  return (
    <section className="relative overflow-hidden bg-background px-5 py-20 md:px-8 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(52,211,153,0.08),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-[1100px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold tracking-wide text-[#34d399] shadow-sm">
          <span aria-hidden className="rtl-flip">
            →
          </span>{" "}
          {d.badge}
        </span>
        <h2 className="mt-6 text-[32px] font-bold leading-[1.15] tracking-tight md:text-[48px]">
          {d.title} <span className="text-[#34d399]">{d.titleAccent}</span>
        </h2>
        <p className="mt-4 text-[16px] text-foreground/60 md:text-[17px]">{d.sub}</p>
        <a
          href={REFERRAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#34d399] px-7 py-3.5 text-[15px] font-semibold text-[#04120d] transition hover:brightness-110"
        >
          {d.cta} <span aria-hidden>↗</span>
        </a>

        <div className="mt-12 grid gap-5 text-start md:grid-cols-2">
          {/* Integrations card */}
          <div className="rounded-[28px] bg-card p-7 shadow-sm md:p-9">
            <h3 className="text-[22px] font-bold leading-snug md:text-[24px]">
              {d.integrationsTitle}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
              {d.integrationsDesc}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4">
              {d.platforms.map((platform, index) => {
                const brand = PLATFORM_BRANDS[index];
                if (!brand) return null;
                return (
                  <div key={brand} className={`integration-tile brand-${brand}`}>
                    <div className="integration-icon-shell">
                      <PlatformIcon brand={brand} />
                    </div>
                    <span className="max-w-full text-center text-[12px] font-semibold leading-tight text-foreground/85 sm:text-[13px]">
                      {platform}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benchmark card */}
          <div className="rounded-[28px] bg-card p-7 shadow-sm md:p-9">
            <h3 className="text-[22px] font-bold leading-snug md:text-[24px]">{d.benchTitle}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">{d.benchDesc}</p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <span className="mb-3 inline-block rounded-full bg-foreground/10 px-3 py-1 text-[12px] font-medium text-foreground/60">
                  ↑ {d.higherLabel}
                </span>
                <div className="flex h-24 items-end gap-3">
                  <div className="w-10 rounded-t-lg bg-[#34d399]" style={{ height: "100%" }} />
                  <div className="w-10 rounded-t-lg bg-foreground/20" style={{ height: "72%" }} />
                </div>
                <p className="mt-3 text-[13px] text-foreground/60">{d.successLabel}</p>
              </div>
              <div>
                <span className="mb-3 inline-block rounded-full bg-[#34d399]/15 px-3 py-1 text-[12px] font-semibold text-[#34d399]">
                  ↓ {d.lowerLabel}
                </span>
                <div className="flex h-24 items-end gap-3">
                  <div className="w-10 rounded-t-lg bg-[#34d399]" style={{ height: "42%" }} />
                  <div className="w-10 rounded-t-lg bg-foreground/20" style={{ height: "100%" }} />
                </div>
                <p className="mt-3 text-[13px] text-foreground/60">{d.costLabel}</p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-5 text-[12px] text-foreground/60">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" /> {d.accioLabel}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/25" /> {d.otherLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
