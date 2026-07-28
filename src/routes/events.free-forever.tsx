import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

/* ---------- Brand logo (matches landing page) ---------- */
function BrandLogo({ size = 26 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontSize: size }}>
      <svg width={size * 0.95} height={size} viewBox="0 0 28 28" aria-hidden>
        <defs>
          <linearGradient id="accioTriEvt" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#17B26A" />
            <stop offset="100%" stopColor="#7CE7C2" />
          </linearGradient>
        </defs>
        <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTriEvt)" />
      </svg>
      <span className="text-[#0F172A]">Accio</span>
    </div>
  );
}

export const Route = createFileRoute("/events/free-forever")({
  head: () => ({
    meta: [
      { title: "Accio Work стал бесплатным навсегда | Events" },
      {
        name: "description",
        content:
          "Accio Work теперь бесплатен навсегда. 10 миллионов пользователей уже запускают магазины за час — без карты, без триала, без ограничений.",
      },
      { property: "og:title", content: "Accio Work стал бесплатным навсегда" },
      {
        property: "og:description",
        content: "10M+ пользователей. 54 минуты до запуска магазина. Бесплатно навсегда.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://acciowork.pro/events/free-forever" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://acciowork.pro/events/free-forever" }],
  }),
  component: EventPage,
});

/* ---------- Reveal on scroll ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);
  return { ref, shown };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------- Animated counter ---------- */
function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted =
    to >= 1_000_000
      ? `${(val / 1_000_000).toFixed(val >= to ? 0 : 1)}M`
      : val.toLocaleString("ru-RU");
  return (
    <span
      ref={ref}
      className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent"
    >
      {formatted}
      {suffix}
    </span>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-6 w-6"
            style={{
              background: "linear-gradient(135deg,#17B26A,#7CE7C2)",
              clipPath: "polygon(50% 0,100% 100%,0 100%)",
            }}
          />
          <span className="text-[18px] font-extrabold text-[#1a1a2e]">Accio</span>
        </a>
        <nav className="hidden items-center gap-8 text-[14px] font-medium text-[#1a1a2e]/80 md:flex">
          <a href="/#pricing" className="hover:text-[#1a1a2e]">Pricing</a>
          <a href="/blog" className="hover:text-[#1a1a2e]">Blog</a>
          <button className="flex items-center gap-1 hover:text-[#1a1a2e]">Help Center <span className="opacity-60">▾</span></button>
          <a
            href="/events/free-forever"
            className="flex items-center gap-1 font-semibold text-[#1a1a2e]"
          >
            Events <span>🔥</span>
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#17B26A] to-[#7CE7C2]" />
          </a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="hidden text-[14px] text-[#1a1a2e]/70 md:inline">English ▾</span>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-[#16213E] px-4 text-[13px] font-semibold text-white transition hover:bg-[#0F172A] sm:h-11 sm:px-5 sm:text-[14px]"
          >
            Download Accio Work
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Sections ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle,#7CE7C233,transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[900px] px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#17B26A]/10 px-4 py-1.5 text-[13px] font-semibold text-[#17B26A]">
            Только что • 28 июля 2026
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#1a1a2e] sm:text-[56px] lg:text-[64px]">
            Accio Work стал бесплатным.{" "}
            <span className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">
              Навсегда.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-[600px] text-[18px] leading-relaxed text-[#6B7280] sm:text-[20px]">
            10 миллионов пользователей уже работают в Accio. Сегодня мы убрали ценник — теперь любой
            бизнес может начать без триала, без карты и без ограничений по времени.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#16213E] px-7 text-[15px] font-bold text-white transition hover:bg-[#0F172A]"
            >
              Скачать бесплатно
            </a>
            <a
              href="/#pricing"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#16213E] px-7 text-[15px] font-semibold text-[#16213E] transition hover:bg-[#16213E]/5"
            >
              Посмотреть тарифы
            </a>
          </div>
          <p className="mt-5 text-[13px] text-[#6B7280]">macOS 11+. Apple Silicon и Intel. 42 МБ.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: 10_000_000, suffix: "+", label: "Пользователей по всему миру", display: "10M+" },
    { value: 54, suffix: " мин", label: "Среднее время запуска магазина" },
    { value: 483, suffix: "x", label: "Экономия по сравнению с фрилансерами" },
  ];
  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <div className="rounded-2xl bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="text-[56px] font-extrabold leading-none tracking-tight sm:text-[64px]">
                <Counter to={it.value} suffix={it.suffix} />
              </div>
              <p className="mt-4 text-[15px] text-[#6B7280]">{it.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  { icon: "🤖", title: "AI-агент 24/7", desc: "Полноценный ассистент с поиском, аналитикой и автоматизацией. Без лимитов на количество задач." },
  { icon: "🌐", title: "Браузерная автоматизация", desc: "Открывает сайты, кликает, собирает данные, заполняет формы. Без кода, без Selenium." },
  { icon: "🔌", title: "50+ интеграций", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — подключение в один клик." },
  { icon: "✍️", title: "Генерация контента", desc: "Лендинги, карточки товаров, SEO-тексты. Готово за минуты." },
  { icon: "📈", title: "Market Scout", desc: "Анализ ниш, трендов и конкурентов. Данные из Alibaba.com и Jungle Scout." },
  { icon: "👥", title: "Специалисты по требованию", desc: "Sourcing Expert, Product Designer, Listing Copywriter — подключаются за копейки, только когда нужны." },
];

function Features() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">
            Что внутри бесплатного тарифа
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="h-full rounded-2xl bg-[#F8F9FB] p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)]">
                <div className="text-[32px]">{f.icon}</div>
                <h3 className="mt-4 text-[18px] font-semibold text-[#1a1a2e]">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const WITHOUT = [
  ["Маркетолог-аналитик", "$500–1 500", "2 недели"],
  ["Менеджер по закупкам", "$800–2 000", "3-4 недели"],
  ["UI/UX дизайнер", "$400–1 200", "1-2 недели"],
  ["Копирайтер", "$200–600", "1 неделя"],
  ["Разработчик", "$1 000–3 000", "2-4 недели"],
];
const WITH = [
  ["Market Scout", "Бесплатно", "4 мин"],
  ["Sourcing Expert", "~$2", "12 мин"],
  ["Product Designer", "~$3", "20 мин"],
  ["Listing Copywriter", "~$1", "8 мин"],
  ["Генератор магазина", "Бесплатно", "10 мин"],
];

function CompareTable({
  title,
  bg,
  rows,
  totalCost,
  totalTime,
}: {
  title: string;
  bg: string;
  rows: string[][];
  totalCost: string;
  totalTime: string;
}) {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${bg}`}>
      <h3 className="text-[20px] font-bold text-[#1a1a2e]">{title}</h3>
      <div className="mt-6 overflow-hidden rounded-xl bg-white/70">
        <table className="w-full text-left text-[14px]">
          <thead className="text-[12px] uppercase tracking-wide text-[#6B7280]">
            <tr>
              <th className="px-4 py-3 font-semibold">Специалист</th>
              <th className="px-4 py-3 font-semibold">Стоимость</th>
              <th className="px-4 py-3 font-semibold">Срок</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5E7EB]">
            {rows.map((r) => (
              <tr key={r[0]} className="text-[#1a1a2e]">
                <td className="px-4 py-3">{r[0]}</td>
                <td className="px-4 py-3">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
              </tr>
            ))}
            <tr className="bg-white font-bold text-[#1a1a2e]">
              <td className="px-4 py-4">Итого</td>
              <td className="px-4 py-4">{totalCost}</td>
              <td className="px-4 py-4">{totalTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Compare() {
  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">
            Сколько на самом деле стоит запустить магазин
          </h2>
        </Reveal>
        <div className="relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <CompareTable
              title="Без Accio Work"
              bg="bg-[#FEF2F2]"
              rows={WITHOUT}
              totalCost="$2 900 – $8 300"
              totalTime="2–3 месяца"
            />
          </Reveal>
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[14px] font-bold text-[#6B7280] shadow-sm">
              vs
            </span>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[13px] font-bold text-[#6B7280]">
              vs
            </span>
          </div>
          <Reveal delay={100}>
            <CompareTable
              title="С Accio Work"
              bg="bg-[#ECFDF5]"
              rows={WITH}
              totalCost="~$6"
              totalTime="54 мин"
            />
          </Reveal>
        </div>
        <Reveal delay={150}>
          <p className="mx-auto mt-12 max-w-[820px] text-center text-[22px] font-extrabold text-[#1a1a2e] sm:text-[28px]">
            Разница по деньгам:{" "}
            <span className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">
              в 483 раза
            </span>
            . По времени:{" "}
            <span className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">
              в 1 440 раз
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">
            История, которая станет вашей
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl bg-[#F8F9FB] shadow-[0_2px_12px_rgba(0,0,0,0.04)] lg:grid-cols-[1.3fr_1fr]">
            <div className="relative p-8 sm:p-12">
              <span
                aria-hidden
                className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-gradient-to-b from-[#17B26A] to-[#7CE7C2]"
              />
              <h3 className="text-[22px] font-bold text-[#1a1a2e]">
                Антон, учитель из Новосибирска
              </h3>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#374151]">
                <p>Три месяца откладывал запуск магазина. Мешало всё: дизайн, поставщики, SEO.</p>
                <p>
                  В субботу вечером написал в Accio: «Хочу продавать умные LED-зеркала. Сделай
                  магазин.»
                </p>
                <p>Через 48 минут магазин был готов. Лендинг, карточки, Shopify — всё.</p>
                <p>В понедельник запустил рекламу. Во вторник получил первый заказ.</p>
                <p className="font-semibold text-[#1a1a2e]">Через 2 недели: $2 400 оборота.</p>
                <blockquote className="border-l-2 border-[#17B26A] pl-4 italic text-[#1a1a2e]">
                  «Я не дизайнер и не продавец. Я учитель. Accio Work сделал то, на что ушли бы
                  месяцы.»
                </blockquote>
              </div>
            </div>
            <div className="flex min-h-[280px] items-center justify-center bg-[#EEF1F5] p-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1a1a2e">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <p className="text-[14px] font-medium text-[#6B7280]">
                  48 минут от идеи до магазина — запись экрана
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Бесплатный тариф — навсегда или временная акция?",
    a: "Навсегда. Без ограничений по времени, без принудительного апгрейда. Мы можем себе это позволить благодаря инфраструктуре Alibaba.",
  },
  {
    q: "Какие ограничения у бесплатного тарифа?",
    a: "Базовый AI-агент и все интеграции — без ограничений. Платные только старшие специалисты (Sourcing Expert, Product Designer и др.), но они стоят $1-3 за задачу.",
  },
  {
    q: "Нужна ли банковская карта для регистрации?",
    a: "Нет. Регистрация мгновенная, карта не требуется.",
  },
  {
    q: "Это точно работает без программиста?",
    a: "Да. Всё управляется текстом — на русском или английском. Никакого кода, никакого Selenium, никакой командной строки.",
  },
  {
    q: "Как Accio Work подключается к Shopify / Telegram / Gmail?",
    a: "Встроенная OAuth-авторизация. Один клик — и готово. Никаких API-ключей, никакой документации.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-28">
      <div className="mx-auto max-w-[820px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">
            Частые вопросы
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-[#E5E7EB] overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {FAQ_ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-[16px] font-semibold text-[#1a1a2e] transition hover:bg-[#F8F9FB] sm:px-8 sm:text-[17px]"
                >
                  <span>{it.q}</span>
                  <span
                    className={`ml-4 text-[#17B26A] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden px-6 text-[15px] leading-relaxed text-[#6B7280] transition-all duration-300 sm:px-8 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#16213E] py-20 sm:py-28">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <Reveal>
          <h2 className="text-[36px] font-extrabold leading-tight tracking-tight text-white sm:text-[48px]">
            Готовы запустить бизнес за час?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] text-white/80 sm:text-[18px]">
            Скачайте Accio Work бесплатно. Первый магазин — сегодня.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[15px] font-bold text-[#17B26A] transition hover:bg-white/90 sm:h-14 sm:text-[16px]"
          >
            Скачать бесплатно
          </a>
          <p className="mt-5 text-[13px] text-white/60">
            macOS 11+ • 42 МБ • Без карты • Без триала
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#F8F9FB] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-5 w-5"
            style={{
              background: "linear-gradient(135deg,#17B26A,#7CE7C2)",
              clipPath: "polygon(50% 0,100% 100%,0 100%)",
            }}
          />
          <span className="text-[15px] font-extrabold text-[#1a1a2e]">Accio</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#6B7280]">
          <a href="/#pricing" className="hover:text-[#1a1a2e]">Pricing</a>
          <a href="/blog" className="hover:text-[#1a1a2e]">Blog</a>
          <a href="#" className="hover:text-[#1a1a2e]">Help Center</a>
          <a href="#" className="hover:text-[#1a1a2e]">Privacy</a>
          <a href="#" className="hover:text-[#1a1a2e]">Terms</a>
        </nav>
        <p className="text-[12px] text-[#6B7280]">© 2026 Accio. Built on Alibaba infrastructure.</p>
      </div>
    </footer>
  );
}

function EventPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a2e] antialiased">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Compare />
        <Story />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}