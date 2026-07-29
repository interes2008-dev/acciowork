import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/translations";

const REFERRAL_URL =
  "https://www.accio.com/login?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&source=invite_center&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F";

/* ---------------- Dictionary ---------------- */
type EventDict = {
  langLabel: string;
  nav: { pricing: string; blog: string; help: string; events: string; download: string };
  hero: {
    badge: string;
    title1: string;
    titleAccent: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    note: string;
  };
  stats: {
    users: string;
    launch: string;
    launchSuffix: string;
    cheaper: string;
  };
  features: {
    heading: string;
    items: { icon: string; title: string; desc: string }[];
  };
  compare: {
    heading: string;
    without: string;
    with: string;
    colSpecialist: string;
    colCost: string;
    colTime: string;
    total: string;
    withoutRows: [string, string, string][];
    withRows: [string, string, string][];
    withoutTotalCost: string;
    withoutTotalTime: string;
    withTotalCost: string;
    withTotalTime: string;
    summary: (a: string, b: string) => React.ReactNode;
    summaryMoney: string;
    summaryTime: string;
  };
  story: {
    heading: string;
    who: string;
    p: string[];
    highlight: string;
    quote: string;
    videoCaption: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; subtitle: string; button: string; note: string };
  footer: {
    pricing: string;
    blog: string;
    help: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
};

const DICTS: Record<Lang, EventDict> = {
  en: {
    langLabel: "English",
    nav: { pricing: "Pricing", blog: "Blog", help: "Help Center", events: "Events", download: "Download Accio Work" },
    hero: {
      badge: "Just announced • July 28, 2026",
      title1: "Accio Work is now free.",
      titleAccent: "Forever.",
      desc: "10 million people already run their business on Accio. Today we removed the price tag — every business can start without a trial, without a credit card, without time limits.",
      ctaPrimary: "Download free",
      ctaSecondary: "See plans",
      note: "macOS 11+. Apple Silicon and Intel. 42 MB.",
    },
    stats: { users: "Users worldwide", launch: "Average time to launch a store", launchSuffix: " min", cheaper: "Cheaper than freelancers" },
    features: {
      heading: "What the free plan includes",
      items: [
        { icon: "🤖", title: "24/7 AI agent", desc: "Full assistant with search, analytics and automation. No task limits." },
        { icon: "🌐", title: "Browser automation", desc: "Opens sites, clicks, scrapes, fills forms. No code, no Selenium." },
        { icon: "🔌", title: "50+ integrations", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — connect in one click." },
        { icon: "✍️", title: "Content generation", desc: "Landing pages, product cards, SEO copy. Ready in minutes." },
        { icon: "📈", title: "Market Scout", desc: "Niche, trend and competitor analysis. Data from Alibaba.com and Jungle Scout." },
        { icon: "👥", title: "Specialists on demand", desc: "Sourcing Expert, Product Designer, Listing Copywriter — pay pennies, only when needed." },
      ],
    },
    compare: {
      heading: "What launching a store really costs",
      without: "Without Accio Work",
      with: "With Accio Work",
      colSpecialist: "Specialist",
      colCost: "Cost",
      colTime: "Time",
      total: "Total",
      withoutRows: [
        ["Marketing analyst", "$500–1,500", "2 weeks"],
        ["Sourcing manager", "$800–2,000", "3-4 weeks"],
        ["UI/UX designer", "$400–1,200", "1-2 weeks"],
        ["Copywriter", "$200–600", "1 week"],
        ["Developer", "$1,000–3,000", "2-4 weeks"],
      ],
      withRows: [
        ["Market Scout", "Free", "4 min"],
        ["Sourcing Expert", "~$2", "12 min"],
        ["Product Designer", "~$3", "20 min"],
        ["Listing Copywriter", "~$1", "8 min"],
        ["Store generator", "Free", "10 min"],
      ],
      withoutTotalCost: "$2,900 – $8,300",
      withoutTotalTime: "2–3 months",
      withTotalCost: "~$6",
      withTotalTime: "54 min",
      summary: () => null,
      summaryMoney: "483× cheaper",
      summaryTime: "1,440× faster",
    },
    story: {
      heading: "A story that could be yours",
      who: "Anton, a teacher from Novosibirsk",
      p: [
        "For three months he kept delaying his store launch. Everything got in the way: design, suppliers, SEO.",
        "On Saturday night he typed into Accio: \"I want to sell smart LED mirrors. Build me a store.\"",
        "48 minutes later the store was live. Landing page, product cards, Shopify — all of it.",
        "Monday he launched ads. Tuesday he got his first order.",
      ],
      highlight: "Two weeks later: $2,400 in revenue.",
      quote: "\"I'm not a designer or a salesperson. I'm a teacher. Accio Work did what would have taken me months.\"",
      videoCaption: "48 minutes from idea to store — screen recording",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        { q: "Is the free plan permanent or a temporary promo?", a: "Permanent. No time limits, no forced upgrade. We can afford it thanks to Alibaba's infrastructure." },
        { q: "What are the free plan limits?", a: "Base AI agent and every integration — unlimited. Only senior specialists (Sourcing Expert, Product Designer, etc.) are paid, and they cost $1-3 per task." },
        { q: "Do I need a credit card to sign up?", a: "No. Sign-up is instant, no card required." },
        { q: "Does it really work without a developer?", a: "Yes. Everything runs on plain text — English or Russian. No code, no Selenium, no command line." },
        { q: "How does Accio Work connect to Shopify / Telegram / Gmail?", a: "Built-in OAuth. One click and it's done. No API keys, no docs to read." },
      ],
    },
    cta: { title: "Ready to launch a business in an hour?", subtitle: "Download Accio Work for free. Your first store — today.", button: "Download free", note: "macOS 11+ • 42 MB • No card • No trial" },
    footer: { pricing: "Pricing", blog: "Blog", help: "Help Center", privacy: "Privacy", terms: "Terms", copyright: "© 2026 Accio. Built on Alibaba infrastructure." },
  },
  ru: {
    langLabel: "Русский",
    nav: { pricing: "Тарифы", blog: "Блог", help: "Помощь", events: "События", download: "Скачать Accio Work" },
    hero: {
      badge: "Только что • 28 июля 2026",
      title1: "Accio Work стал бесплатным.",
      titleAccent: "Навсегда.",
      desc: "10 миллионов пользователей уже работают в Accio. Сегодня мы убрали ценник — теперь любой бизнес может начать без триала, без карты и без ограничений по времени.",
      ctaPrimary: "Скачать бесплатно",
      ctaSecondary: "Посмотреть тарифы",
      note: "macOS 11+. Apple Silicon и Intel. 42 МБ.",
    },
    stats: { users: "Пользователей по всему миру", launch: "Среднее время запуска магазина", launchSuffix: " мин", cheaper: "Экономия по сравнению с фрилансерами" },
    features: {
      heading: "Что внутри бесплатного тарифа",
      items: [
        { icon: "🤖", title: "AI-агент 24/7", desc: "Полноценный ассистент с поиском, аналитикой и автоматизацией. Без лимитов на количество задач." },
        { icon: "🌐", title: "Браузерная автоматизация", desc: "Открывает сайты, кликает, собирает данные, заполняет формы. Без кода, без Selenium." },
        { icon: "🔌", title: "50+ интеграций", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — подключение в один клик." },
        { icon: "✍️", title: "Генерация контента", desc: "Лендинги, карточки товаров, SEO-тексты. Готово за минуты." },
        { icon: "📈", title: "Market Scout", desc: "Анализ ниш, трендов и конкурентов. Данные из Alibaba.com и Jungle Scout." },
        { icon: "👥", title: "Специалисты по требованию", desc: "Sourcing Expert, Product Designer, Listing Copywriter — подключаются за копейки, только когда нужны." },
      ],
    },
    compare: {
      heading: "Сколько на самом деле стоит запустить магазин",
      without: "Без Accio Work",
      with: "С Accio Work",
      colSpecialist: "Специалист",
      colCost: "Стоимость",
      colTime: "Срок",
      total: "Итого",
      withoutRows: [
        ["Маркетолог-аналитик", "$500–1 500", "2 недели"],
        ["Менеджер по закупкам", "$800–2 000", "3-4 недели"],
        ["UI/UX дизайнер", "$400–1 200", "1-2 недели"],
        ["Копирайтер", "$200–600", "1 неделя"],
        ["Разработчик", "$1 000–3 000", "2-4 недели"],
      ],
      withRows: [
        ["Market Scout", "Бесплатно", "4 мин"],
        ["Sourcing Expert", "~$2", "12 мин"],
        ["Product Designer", "~$3", "20 мин"],
        ["Listing Copywriter", "~$1", "8 мин"],
        ["Генератор магазина", "Бесплатно", "10 мин"],
      ],
      withoutTotalCost: "$2 900 – $8 300",
      withoutTotalTime: "2–3 месяца",
      withTotalCost: "~$6",
      withTotalTime: "54 мин",
      summary: () => null,
      summaryMoney: "в 483 раза",
      summaryTime: "в 1 440 раз",
    },
    story: {
      heading: "История, которая станет вашей",
      who: "Антон, учитель из Новосибирска",
      p: [
        "Три месяца откладывал запуск магазина. Мешало всё: дизайн, поставщики, SEO.",
        "В субботу вечером написал в Accio: «Хочу продавать умные LED-зеркала. Сделай магазин.»",
        "Через 48 минут магазин был готов. Лендинг, карточки, Shopify — всё.",
        "В понедельник запустил рекламу. Во вторник получил первый заказ.",
      ],
      highlight: "Через 2 недели: $2 400 оборота.",
      quote: "«Я не дизайнер и не продавец. Я учитель. Accio Work сделал то, на что ушли бы месяцы.»",
      videoCaption: "48 минут от идеи до магазина — запись экрана",
    },
    faq: {
      heading: "Частые вопросы",
      items: [
        { q: "Бесплатный тариф — навсегда или временная акция?", a: "Навсегда. Без ограничений по времени, без принудительного апгрейда. Мы можем себе это позволить благодаря инфраструктуре Alibaba." },
        { q: "Какие ограничения у бесплатного тарифа?", a: "Базовый AI-агент и все интеграции — без ограничений. Платные только старшие специалисты (Sourcing Expert, Product Designer и др.), но они стоят $1-3 за задачу." },
        { q: "Нужна ли банковская карта для регистрации?", a: "Нет. Регистрация мгновенная, карта не требуется." },
        { q: "Это точно работает без программиста?", a: "Да. Всё управляется текстом — на русском или английском. Никакого кода, никакого Selenium, никакой командной строки." },
        { q: "Как Accio Work подключается к Shopify / Telegram / Gmail?", a: "Встроенная OAuth-авторизация. Один клик — и готово. Никаких API-ключей, никакой документации." },
      ],
    },
    cta: { title: "Готовы запустить бизнес за час?", subtitle: "Скачайте Accio Work бесплатно. Первый магазин — сегодня.", button: "Скачать бесплатно", note: "macOS 11+ • 42 МБ • Без карты • Без триала" },
    footer: { pricing: "Тарифы", blog: "Блог", help: "Помощь", privacy: "Конфиденциальность", terms: "Условия", copyright: "© 2026 Accio. На инфраструктуре Alibaba." },
  },
  de: {
    langLabel: "Deutsch",
    nav: { pricing: "Preise", blog: "Blog", help: "Hilfe", events: "Events", download: "Accio Work laden" },
    hero: {
      badge: "Gerade verkündet • 28. Juli 2026",
      title1: "Accio Work ist jetzt kostenlos.",
      titleAccent: "Für immer.",
      desc: "10 Millionen Menschen führen ihr Geschäft bereits mit Accio. Heute haben wir das Preisschild entfernt — jedes Unternehmen kann starten, ohne Test, ohne Kreditkarte, ohne Zeitlimit.",
      ctaPrimary: "Kostenlos laden",
      ctaSecondary: "Preise ansehen",
      note: "macOS 11+. Apple Silicon und Intel. 42 MB.",
    },
    stats: { users: "Nutzer weltweit", launch: "Ø Zeit zum Start eines Shops", launchSuffix: " Min", cheaper: "Günstiger als Freelancer" },
    features: {
      heading: "Was im kostenlosen Plan enthalten ist",
      items: [
        { icon: "🤖", title: "24/7-KI-Agent", desc: "Vollständiger Assistent für Suche, Analyse und Automatisierung. Ohne Task-Limits." },
        { icon: "🌐", title: "Browser-Automatisierung", desc: "Öffnet Seiten, klickt, extrahiert Daten, füllt Formulare aus. Kein Code, kein Selenium." },
        { icon: "🔌", title: "50+ Integrationen", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — Anschluss mit einem Klick." },
        { icon: "✍️", title: "Content-Generierung", desc: "Landingpages, Produktkarten, SEO-Texte. In Minuten fertig." },
        { icon: "📈", title: "Market Scout", desc: "Nischen-, Trend- und Wettbewerbsanalyse. Daten aus Alibaba.com und Jungle Scout." },
        { icon: "👥", title: "Spezialisten auf Abruf", desc: "Sourcing Expert, Product Designer, Listing Copywriter — Cent-Preise, nur bei Bedarf." },
      ],
    },
    compare: {
      heading: "Was ein Shop-Start wirklich kostet",
      without: "Ohne Accio Work",
      with: "Mit Accio Work",
      colSpecialist: "Spezialist",
      colCost: "Kosten",
      colTime: "Dauer",
      total: "Gesamt",
      withoutRows: [
        ["Marketing-Analyst", "500–1.500 $", "2 Wochen"],
        ["Einkaufsmanager", "800–2.000 $", "3-4 Wochen"],
        ["UI/UX-Designer", "400–1.200 $", "1-2 Wochen"],
        ["Texter", "200–600 $", "1 Woche"],
        ["Entwickler", "1.000–3.000 $", "2-4 Wochen"],
      ],
      withRows: [
        ["Market Scout", "Kostenlos", "4 Min"],
        ["Sourcing Expert", "~2 $", "12 Min"],
        ["Product Designer", "~3 $", "20 Min"],
        ["Listing Copywriter", "~1 $", "8 Min"],
        ["Shop-Generator", "Kostenlos", "10 Min"],
      ],
      withoutTotalCost: "2.900 – 8.300 $",
      withoutTotalTime: "2–3 Monate",
      withTotalCost: "~6 $",
      withTotalTime: "54 Min",
      summary: () => null,
      summaryMoney: "483× günstiger",
      summaryTime: "1.440× schneller",
    },
    story: {
      heading: "Eine Geschichte, die deine werden kann",
      who: "Anton, Lehrer aus Nowosibirsk",
      p: [
        "Drei Monate lang schob er den Shop-Start auf. Alles kam dazwischen: Design, Lieferanten, SEO.",
        "Am Samstagabend tippte er in Accio: „Ich will smarte LED-Spiegel verkaufen. Bau mir einen Shop.\"",
        "48 Minuten später war der Shop online. Landingpage, Produktkarten, Shopify — alles.",
        "Montag startete er die Anzeigen. Dienstag kam die erste Bestellung.",
      ],
      highlight: "Zwei Wochen später: 2.400 $ Umsatz.",
      quote: "„Ich bin kein Designer und kein Verkäufer. Ich bin Lehrer. Accio Work hat gemacht, wofür ich Monate gebraucht hätte.\"",
      videoCaption: "48 Minuten von der Idee zum Shop — Bildschirmaufnahme",
    },
    faq: {
      heading: "Häufige Fragen",
      items: [
        { q: "Ist der kostenlose Plan dauerhaft oder eine Aktion?", a: "Dauerhaft. Kein Zeitlimit, kein erzwungenes Upgrade. Möglich dank Alibaba-Infrastruktur." },
        { q: "Welche Limits hat der kostenlose Plan?", a: "Basis-KI und alle Integrationen — unbegrenzt. Nur Senior-Spezialisten (Sourcing Expert, Product Designer etc.) sind kostenpflichtig, 1-3 $ pro Aufgabe." },
        { q: "Brauche ich eine Kreditkarte zur Anmeldung?", a: "Nein. Sofort-Anmeldung, keine Karte nötig." },
        { q: "Funktioniert das wirklich ohne Entwickler?", a: "Ja. Alles wird per Text gesteuert. Kein Code, kein Selenium, keine Kommandozeile." },
        { q: "Wie verbindet sich Accio Work mit Shopify / Telegram / Gmail?", a: "Eingebautes OAuth. Ein Klick genügt. Keine API-Keys, keine Dokumentation." },
      ],
    },
    cta: { title: "Bereit, ein Business in einer Stunde zu starten?", subtitle: "Lade Accio Work kostenlos. Dein erster Shop — heute.", button: "Kostenlos laden", note: "macOS 11+ • 42 MB • Ohne Karte • Ohne Testphase" },
    footer: { pricing: "Preise", blog: "Blog", help: "Hilfe", privacy: "Datenschutz", terms: "AGB", copyright: "© 2026 Accio. Auf Alibaba-Infrastruktur." },
  },
  it: {
    langLabel: "Italiano",
    nav: { pricing: "Prezzi", blog: "Blog", help: "Aiuto", events: "Eventi", download: "Scarica Accio Work" },
    hero: {
      badge: "Appena annunciato • 28 luglio 2026",
      title1: "Accio Work è ora gratuito.",
      titleAccent: "Per sempre.",
      desc: "10 milioni di persone usano già Accio per il loro business. Oggi abbiamo tolto il prezzo — chiunque può iniziare senza trial, senza carta, senza limiti di tempo.",
      ctaPrimary: "Scarica gratis",
      ctaSecondary: "Vedi i piani",
      note: "macOS 11+. Apple Silicon e Intel. 42 MB.",
    },
    stats: { users: "Utenti in tutto il mondo", launch: "Tempo medio per lanciare uno store", launchSuffix: " min", cheaper: "Più conveniente dei freelancer" },
    features: {
      heading: "Cosa include il piano gratuito",
      items: [
        { icon: "🤖", title: "Agente AI 24/7", desc: "Assistente completo con ricerca, analisi e automazione. Senza limiti di task." },
        { icon: "🌐", title: "Automazione browser", desc: "Apre siti, clicca, estrae dati, compila form. Zero codice, zero Selenium." },
        { icon: "🔌", title: "50+ integrazioni", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — collega in un clic." },
        { icon: "✍️", title: "Generazione contenuti", desc: "Landing, schede prodotto, SEO. Pronti in minuti." },
        { icon: "📈", title: "Market Scout", desc: "Analisi di nicchie, trend e competitor. Dati da Alibaba.com e Jungle Scout." },
        { icon: "👥", title: "Specialisti on-demand", desc: "Sourcing Expert, Product Designer, Listing Copywriter — pochi centesimi, solo quando servono." },
      ],
    },
    compare: {
      heading: "Quanto costa davvero lanciare uno store",
      without: "Senza Accio Work",
      with: "Con Accio Work",
      colSpecialist: "Specialista",
      colCost: "Costo",
      colTime: "Tempo",
      total: "Totale",
      withoutRows: [
        ["Analista marketing", "$500–1.500", "2 settimane"],
        ["Responsabile acquisti", "$800–2.000", "3-4 settimane"],
        ["Designer UI/UX", "$400–1.200", "1-2 settimane"],
        ["Copywriter", "$200–600", "1 settimana"],
        ["Sviluppatore", "$1.000–3.000", "2-4 settimane"],
      ],
      withRows: [
        ["Market Scout", "Gratis", "4 min"],
        ["Sourcing Expert", "~$2", "12 min"],
        ["Product Designer", "~$3", "20 min"],
        ["Listing Copywriter", "~$1", "8 min"],
        ["Generatore di store", "Gratis", "10 min"],
      ],
      withoutTotalCost: "$2.900 – $8.300",
      withoutTotalTime: "2–3 mesi",
      withTotalCost: "~$6",
      withTotalTime: "54 min",
      summary: () => null,
      summaryMoney: "483× più economico",
      summaryTime: "1.440× più veloce",
    },
    story: {
      heading: "Una storia che può essere la tua",
      who: "Anton, insegnante di Novosibirsk",
      p: [
        "Per tre mesi ha rimandato il lancio del suo store. Tutto gli si metteva contro: design, fornitori, SEO.",
        "Sabato sera ha scritto ad Accio: «Voglio vendere specchi LED smart. Costruiscimi lo store.»",
        "48 minuti dopo lo store era online. Landing, schede, Shopify — tutto.",
        "Lunedì ha lanciato gli annunci. Martedì è arrivato il primo ordine.",
      ],
      highlight: "Due settimane dopo: $2.400 di fatturato.",
      quote: "«Non sono un designer né un venditore. Sono un insegnante. Accio Work ha fatto in un'ora ciò che mi avrebbe preso mesi.»",
      videoCaption: "48 minuti dall'idea allo store — registrazione schermo",
    },
    faq: {
      heading: "Domande frequenti",
      items: [
        { q: "Il piano gratuito è permanente o una promo?", a: "Permanente. Nessun limite di tempo, nessun upgrade forzato. Possiamo permettercelo grazie all'infrastruttura di Alibaba." },
        { q: "Quali sono i limiti del piano gratuito?", a: "Agente AI base e tutte le integrazioni — illimitati. A pagamento solo gli specialisti senior (Sourcing Expert, Product Designer ecc.), $1-3 a task." },
        { q: "Serve una carta per registrarsi?", a: "No. Registrazione istantanea, nessuna carta richiesta." },
        { q: "Funziona davvero senza programmatore?", a: "Sì. Tutto si gestisce via testo. Zero codice, zero Selenium, zero riga di comando." },
        { q: "Come si collega Accio Work a Shopify / Telegram / Gmail?", a: "OAuth integrato. Un clic e sei collegato. Zero API key, zero documentazione." },
      ],
    },
    cta: { title: "Pronto a lanciare un business in un'ora?", subtitle: "Scarica Accio Work gratis. Il tuo primo store — oggi.", button: "Scarica gratis", note: "macOS 11+ • 42 MB • Senza carta • Senza trial" },
    footer: { pricing: "Prezzi", blog: "Blog", help: "Aiuto", privacy: "Privacy", terms: "Termini", copyright: "© 2026 Accio. Su infrastruttura Alibaba." },
  },
  es: {
    langLabel: "Español",
    nav: { pricing: "Precios", blog: "Blog", help: "Ayuda", events: "Eventos", download: "Descargar Accio Work" },
    hero: {
      badge: "Recién anunciado • 28 de julio de 2026",
      title1: "Accio Work ahora es gratis.",
      titleAccent: "Para siempre.",
      desc: "10 millones de personas ya usan Accio para su negocio. Hoy quitamos el precio — cualquiera puede empezar sin prueba, sin tarjeta y sin límite de tiempo.",
      ctaPrimary: "Descargar gratis",
      ctaSecondary: "Ver planes",
      note: "macOS 11+. Apple Silicon e Intel. 42 MB.",
    },
    stats: { users: "Usuarios en todo el mundo", launch: "Tiempo medio para lanzar una tienda", launchSuffix: " min", cheaper: "Más barato que freelancers" },
    features: {
      heading: "Qué incluye el plan gratuito",
      items: [
        { icon: "🤖", title: "Agente IA 24/7", desc: "Asistente completo con búsqueda, análisis y automatización. Sin límites de tareas." },
        { icon: "🌐", title: "Automatización del navegador", desc: "Abre sitios, hace clic, extrae datos, rellena formularios. Sin código, sin Selenium." },
        { icon: "🔌", title: "50+ integraciones", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — conecta con un clic." },
        { icon: "✍️", title: "Generación de contenido", desc: "Landings, fichas de producto, SEO. Listo en minutos." },
        { icon: "📈", title: "Market Scout", desc: "Análisis de nichos, tendencias y competidores. Datos de Alibaba.com y Jungle Scout." },
        { icon: "👥", title: "Especialistas bajo demanda", desc: "Sourcing Expert, Product Designer, Listing Copywriter — céntimos, solo cuando los necesitas." },
      ],
    },
    compare: {
      heading: "Cuánto cuesta realmente lanzar una tienda",
      without: "Sin Accio Work",
      with: "Con Accio Work",
      colSpecialist: "Especialista",
      colCost: "Coste",
      colTime: "Plazo",
      total: "Total",
      withoutRows: [
        ["Analista de marketing", "$500–1.500", "2 semanas"],
        ["Responsable de compras", "$800–2.000", "3-4 semanas"],
        ["Diseñador UI/UX", "$400–1.200", "1-2 semanas"],
        ["Copywriter", "$200–600", "1 semana"],
        ["Desarrollador", "$1.000–3.000", "2-4 semanas"],
      ],
      withRows: [
        ["Market Scout", "Gratis", "4 min"],
        ["Sourcing Expert", "~$2", "12 min"],
        ["Product Designer", "~$3", "20 min"],
        ["Listing Copywriter", "~$1", "8 min"],
        ["Generador de tienda", "Gratis", "10 min"],
      ],
      withoutTotalCost: "$2.900 – $8.300",
      withoutTotalTime: "2–3 meses",
      withTotalCost: "~$6",
      withTotalTime: "54 min",
      summary: () => null,
      summaryMoney: "483× más barato",
      summaryTime: "1.440× más rápido",
    },
    story: {
      heading: "Una historia que puede ser la tuya",
      who: "Antón, profesor de Novosibirsk",
      p: [
        "Durante tres meses fue posponiendo el lanzamiento de su tienda. Todo se interponía: diseño, proveedores, SEO.",
        "El sábado por la noche escribió en Accio: «Quiero vender espejos LED inteligentes. Créame la tienda.»",
        "48 minutos después la tienda estaba lista. Landing, fichas, Shopify — todo.",
        "El lunes lanzó anuncios. El martes recibió su primer pedido.",
      ],
      highlight: "Dos semanas después: $2.400 de facturación.",
      quote: "«No soy diseñador ni vendedor. Soy profesor. Accio Work hizo en horas lo que a mí me habría llevado meses.»",
      videoCaption: "48 minutos de la idea a la tienda — grabación de pantalla",
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        { q: "¿El plan gratuito es para siempre o una promo?", a: "Para siempre. Sin límite de tiempo, sin upgrade forzado. Podemos permitirlo gracias a la infraestructura de Alibaba." },
        { q: "¿Qué límites tiene el plan gratuito?", a: "Agente IA básico y todas las integraciones — sin límite. Solo se pagan los especialistas senior (Sourcing Expert, Product Designer, etc.), $1-3 por tarea." },
        { q: "¿Necesito tarjeta para registrarme?", a: "No. Registro instantáneo, sin tarjeta." },
        { q: "¿De verdad funciona sin programador?", a: "Sí. Todo se controla por texto. Sin código, sin Selenium, sin terminal." },
        { q: "¿Cómo se conecta Accio Work a Shopify / Telegram / Gmail?", a: "OAuth integrado. Un clic y listo. Sin claves API, sin documentación." },
      ],
    },
    cta: { title: "¿Listo para lanzar un negocio en una hora?", subtitle: "Descarga Accio Work gratis. Tu primera tienda — hoy.", button: "Descargar gratis", note: "macOS 11+ • 42 MB • Sin tarjeta • Sin prueba" },
    footer: { pricing: "Precios", blog: "Blog", help: "Ayuda", privacy: "Privacidad", terms: "Términos", copyright: "© 2026 Accio. Sobre infraestructura Alibaba." },
  },
  pt: {
    langLabel: "Português",
    nav: { pricing: "Preços", blog: "Blog", help: "Ajuda", events: "Eventos", download: "Baixar Accio Work" },
    hero: {
      badge: "Anunciado agora • 28 de julho de 2026",
      title1: "Accio Work agora é grátis.",
      titleAccent: "Para sempre.",
      desc: "10 milhões de pessoas já rodam seu negócio no Accio. Hoje removemos o preço — qualquer negócio pode começar sem trial, sem cartão e sem limite de tempo.",
      ctaPrimary: "Baixar grátis",
      ctaSecondary: "Ver planos",
      note: "macOS 11+. Apple Silicon e Intel. 42 MB.",
    },
    stats: { users: "Usuários no mundo todo", launch: "Tempo médio para lançar uma loja", launchSuffix: " min", cheaper: "Mais barato que freelancers" },
    features: {
      heading: "O que o plano grátis inclui",
      items: [
        { icon: "🤖", title: "Agente de IA 24/7", desc: "Assistente completo com busca, análise e automação. Sem limite de tarefas." },
        { icon: "🌐", title: "Automação de navegador", desc: "Abre sites, clica, extrai dados, preenche formulários. Sem código, sem Selenium." },
        { icon: "🔌", title: "50+ integrações", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — conecte em um clique." },
        { icon: "✍️", title: "Geração de conteúdo", desc: "Landings, fichas de produto, SEO. Pronto em minutos." },
        { icon: "📈", title: "Market Scout", desc: "Análise de nichos, tendências e concorrentes. Dados do Alibaba.com e Jungle Scout." },
        { icon: "👥", title: "Especialistas sob demanda", desc: "Sourcing Expert, Product Designer, Listing Copywriter — centavos, só quando precisar." },
      ],
    },
    compare: {
      heading: "Quanto realmente custa lançar uma loja",
      without: "Sem Accio Work",
      with: "Com Accio Work",
      colSpecialist: "Especialista",
      colCost: "Custo",
      colTime: "Prazo",
      total: "Total",
      withoutRows: [
        ["Analista de marketing", "US$ 500–1.500", "2 semanas"],
        ["Gerente de compras", "US$ 800–2.000", "3-4 semanas"],
        ["Designer UI/UX", "US$ 400–1.200", "1-2 semanas"],
        ["Copywriter", "US$ 200–600", "1 semana"],
        ["Desenvolvedor", "US$ 1.000–3.000", "2-4 semanas"],
      ],
      withRows: [
        ["Market Scout", "Grátis", "4 min"],
        ["Sourcing Expert", "~US$ 2", "12 min"],
        ["Product Designer", "~US$ 3", "20 min"],
        ["Listing Copywriter", "~US$ 1", "8 min"],
        ["Gerador de loja", "Grátis", "10 min"],
      ],
      withoutTotalCost: "US$ 2.900 – 8.300",
      withoutTotalTime: "2–3 meses",
      withTotalCost: "~US$ 6",
      withTotalTime: "54 min",
      summary: () => null,
      summaryMoney: "483× mais barato",
      summaryTime: "1.440× mais rápido",
    },
    story: {
      heading: "Uma história que pode ser a sua",
      who: "Anton, professor de Novosibirsk",
      p: [
        "Por três meses, adiou o lançamento da loja. Tudo atrapalhava: design, fornecedores, SEO.",
        "No sábado à noite, escreveu no Accio: «Quero vender espelhos LED inteligentes. Monte a loja.»",
        "48 minutos depois a loja estava no ar. Landing, fichas, Shopify — tudo.",
        "Segunda-feira lançou anúncios. Terça-feira recebeu o primeiro pedido.",
      ],
      highlight: "Duas semanas depois: US$ 2.400 de faturamento.",
      quote: "«Não sou designer nem vendedor. Sou professor. O Accio Work fez em horas o que eu levaria meses.»",
      videoCaption: "48 minutos da ideia à loja — gravação de tela",
    },
    faq: {
      heading: "Perguntas frequentes",
      items: [
        { q: "O plano grátis é para sempre ou uma promoção?", a: "Para sempre. Sem limite de tempo, sem upgrade forçado. Possível graças à infraestrutura da Alibaba." },
        { q: "Quais são os limites do plano grátis?", a: "Agente de IA base e todas as integrações — ilimitados. Só especialistas sênior (Sourcing Expert, Product Designer etc.) são pagos, US$ 1-3 por tarefa." },
        { q: "Preciso de cartão para me cadastrar?", a: "Não. Cadastro instantâneo, sem cartão." },
        { q: "Funciona mesmo sem programador?", a: "Sim. Tudo por texto. Sem código, sem Selenium, sem terminal." },
        { q: "Como o Accio Work conecta com Shopify / Telegram / Gmail?", a: "OAuth embutido. Um clique e pronto. Sem API keys, sem docs." },
      ],
    },
    cta: { title: "Pronto para lançar um negócio em uma hora?", subtitle: "Baixe o Accio Work grátis. Sua primeira loja — hoje.", button: "Baixar grátis", note: "macOS 11+ • 42 MB • Sem cartão • Sem trial" },
    footer: { pricing: "Preços", blog: "Blog", help: "Ajuda", privacy: "Privacidade", terms: "Termos", copyright: "© 2026 Accio. Na infraestrutura Alibaba." },
  },
  zh: {
    langLabel: "中文",
    nav: { pricing: "价格", blog: "博客", help: "帮助中心", events: "活动", download: "下载 Accio Work" },
    hero: {
      badge: "刚刚发布 • 2026 年 7 月 28 日",
      title1: "Accio Work 现已免费。",
      titleAccent: "永久免费。",
      desc: "已有 1000 万用户在 Accio 上运营业务。今天我们去掉了价签——任何企业都可以开始使用,无需试用、无需信用卡、无时间限制。",
      ctaPrimary: "免费下载",
      ctaSecondary: "查看方案",
      note: "macOS 11+。Apple Silicon 和 Intel。42 MB。",
    },
    stats: { users: "全球用户", launch: "开店平均耗时", launchSuffix: " 分钟", cheaper: "比自由职业者便宜" },
    features: {
      heading: "免费方案包含什么",
      items: [
        { icon: "🤖", title: "全天候 AI 助手", desc: "具备搜索、分析和自动化能力的完整助手。任务不限量。" },
        { icon: "🌐", title: "浏览器自动化", desc: "打开网站、点击、抓取数据、填写表单。无需代码,无需 Selenium。" },
        { icon: "🔌", title: "50+ 集成", desc: "Shopify、Gmail、Telegram、Slack、LinkedIn —— 一键连接。" },
        { icon: "✍️", title: "内容生成", desc: "落地页、商品卡、SEO 文案。几分钟内完成。" },
        { icon: "📈", title: "Market Scout", desc: "细分市场、趋势和竞品分析。数据来自 Alibaba.com 和 Jungle Scout。" },
        { icon: "👥", title: "按需专家", desc: "Sourcing Expert、Product Designer、Listing Copywriter —— 按次几美分,用时即调。" },
      ],
    },
    compare: {
      heading: "开一家店的真实成本",
      without: "不用 Accio Work",
      with: "使用 Accio Work",
      colSpecialist: "岗位",
      colCost: "费用",
      colTime: "时间",
      total: "合计",
      withoutRows: [
        ["营销分析师", "$500–1,500", "2 周"],
        ["采购经理", "$800–2,000", "3-4 周"],
        ["UI/UX 设计师", "$400–1,200", "1-2 周"],
        ["文案", "$200–600", "1 周"],
        ["开发人员", "$1,000–3,000", "2-4 周"],
      ],
      withRows: [
        ["Market Scout", "免费", "4 分钟"],
        ["Sourcing Expert", "~$2", "12 分钟"],
        ["Product Designer", "~$3", "20 分钟"],
        ["Listing Copywriter", "~$1", "8 分钟"],
        ["店铺生成器", "免费", "10 分钟"],
      ],
      withoutTotalCost: "$2,900 – $8,300",
      withoutTotalTime: "2–3 个月",
      withTotalCost: "~$6",
      withTotalTime: "54 分钟",
      summary: () => null,
      summaryMoney: "便宜 483 倍",
      summaryTime: "快 1,440 倍",
    },
    story: {
      heading: "这个故事可能就是你的",
      who: "安东,新西伯利亚的一位教师",
      p: [
        "他把开店拖了三个月。什么都碍事:设计、供应商、SEO。",
        "周六晚上,他在 Accio 里输入:「我想卖智能 LED 镜。帮我把店做出来。」",
        "48 分钟后,店就上线了。落地页、商品卡、Shopify —— 全都齐了。",
        "周一投广告。周二收到第一单。",
      ],
      highlight: "两周后:2,400 美元流水。",
      quote: "「我不是设计师,也不是销售,我是老师。Accio Work 几小时做完了我要花几个月的事。」",
      videoCaption: "48 分钟从想法到店铺 —— 屏幕录像",
    },
    faq: {
      heading: "常见问题",
      items: [
        { q: "免费方案是永久的,还是短期活动?", a: "永久。没有时间限制,不会强制升级。依托 Alibaba 基础设施才能做到。" },
        { q: "免费方案有什么限制?", a: "基础 AI 助手和全部集成 —— 无限使用。仅高级专家(Sourcing Expert、Product Designer 等)按次付费,每次 1-3 美元。" },
        { q: "注册需要信用卡吗?", a: "不需要。即时注册,无需信用卡。" },
        { q: "真的可以不用程序员?", a: "可以。全部通过文本操作。无需代码、无需 Selenium、无需命令行。" },
        { q: "Accio Work 如何连接 Shopify / Telegram / Gmail?", a: "内置 OAuth。一键完成。无需 API Key,无需读文档。" },
      ],
    },
    cta: { title: "准备好在一小时内启动业务了吗?", subtitle: "免费下载 Accio Work。今天就开出第一家店。", button: "免费下载", note: "macOS 11+ • 42 MB • 无需信用卡 • 无试用限制" },
    footer: { pricing: "价格", blog: "博客", help: "帮助中心", privacy: "隐私", terms: "条款", copyright: "© 2026 Accio。基于 Alibaba 基础设施。" },
  },
  hi: {
    langLabel: "हिन्दी",
    nav: { pricing: "मूल्य", blog: "ब्लॉग", help: "सहायता", events: "इवेंट्स", download: "Accio Work डाउनलोड करें" },
    hero: {
      badge: "अभी घोषित • 28 जुलाई 2026",
      title1: "Accio Work अब मुफ़्त है।",
      titleAccent: "हमेशा के लिए।",
      desc: "1 करोड़ लोग पहले से Accio पर अपना बिज़नेस चला रहे हैं। आज हमने कीमत हटा दी — कोई भी बिज़नेस बिना ट्रायल, बिना कार्ड और बिना समय सीमा के शुरू कर सकता है।",
      ctaPrimary: "मुफ़्त डाउनलोड करें",
      ctaSecondary: "प्लान देखें",
      note: "macOS 11+। Apple Silicon और Intel। 42 MB।",
    },
    stats: { users: "दुनिया भर में उपयोगकर्ता", launch: "स्टोर लॉन्च करने का औसत समय", launchSuffix: " मिनट", cheaper: "फ्रीलांसर्स से सस्ता" },
    features: {
      heading: "मुफ़्त प्लान में क्या शामिल है",
      items: [
        { icon: "🤖", title: "24/7 AI एजेंट", desc: "सर्च, विश्लेषण और ऑटोमेशन वाला पूरा असिस्टेंट। टास्क की कोई सीमा नहीं।" },
        { icon: "🌐", title: "ब्राउज़र ऑटोमेशन", desc: "साइट खोलता है, क्लिक करता है, डेटा निकालता है, फ़ॉर्म भरता है। न कोड, न Selenium।" },
        { icon: "🔌", title: "50+ इंटीग्रेशन", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn — एक क्लिक में जुड़ जाते हैं।" },
        { icon: "✍️", title: "कंटेंट जनरेशन", desc: "लैंडिंग पेज, प्रोडक्ट कार्ड, SEO कॉपी। मिनटों में तैयार।" },
        { icon: "📈", title: "Market Scout", desc: "निच, ट्रेंड और प्रतिस्पर्धियों का विश्लेषण। Alibaba.com और Jungle Scout से डेटा।" },
        { icon: "👥", title: "ऑन-डिमांड विशेषज्ञ", desc: "Sourcing Expert, Product Designer, Listing Copywriter — कुछ सेंट में, ज़रूरत पर।" },
      ],
    },
    compare: {
      heading: "स्टोर लॉन्च की असली लागत",
      without: "Accio Work के बिना",
      with: "Accio Work के साथ",
      colSpecialist: "विशेषज्ञ",
      colCost: "लागत",
      colTime: "समय",
      total: "कुल",
      withoutRows: [
        ["मार्केटिंग एनालिस्ट", "$500–1,500", "2 हफ़्ते"],
        ["सोर्सिंग मैनेजर", "$800–2,000", "3-4 हफ़्ते"],
        ["UI/UX डिज़ाइनर", "$400–1,200", "1-2 हफ़्ते"],
        ["कॉपीराइटर", "$200–600", "1 हफ़्ता"],
        ["डेवलपर", "$1,000–3,000", "2-4 हफ़्ते"],
      ],
      withRows: [
        ["Market Scout", "मुफ़्त", "4 मिनट"],
        ["Sourcing Expert", "~$2", "12 मिनट"],
        ["Product Designer", "~$3", "20 मिनट"],
        ["Listing Copywriter", "~$1", "8 मिनट"],
        ["स्टोर जेनरेटर", "मुफ़्त", "10 मिनट"],
      ],
      withoutTotalCost: "$2,900 – $8,300",
      withoutTotalTime: "2–3 महीने",
      withTotalCost: "~$6",
      withTotalTime: "54 मिनट",
      summary: () => null,
      summaryMoney: "483× सस्ता",
      summaryTime: "1,440× तेज़",
    },
    story: {
      heading: "एक कहानी जो आपकी हो सकती है",
      who: "एंटन, नोवोसिबिर्स्क के शिक्षक",
      p: [
        "तीन महीने तक स्टोर लॉन्च टालते रहे। हर चीज़ रास्ते में आती थी: डिज़ाइन, सप्लायर, SEO।",
        "शनिवार रात Accio में लिखा: «स्मार्ट LED शीशे बेचना है। स्टोर बना दो।»",
        "48 मिनट बाद स्टोर लाइव था। लैंडिंग, कार्ड, Shopify — सब कुछ।",
        "सोमवार को विज्ञापन चलाए। मंगलवार को पहला ऑर्डर।",
      ],
      highlight: "दो हफ़्ते बाद: $2,400 का रेवेन्यू।",
      quote: "«मैं न डिज़ाइनर हूँ, न सेल्समैन। मैं शिक्षक हूँ। Accio Work ने वो कर दिया जिसमें मुझे महीनों लगते।»",
      videoCaption: "48 मिनट में आइडिया से स्टोर तक — स्क्रीन रिकॉर्डिंग",
    },
    faq: {
      heading: "अक्सर पूछे जाने वाले प्रश्न",
      items: [
        { q: "क्या मुफ़्त प्लान हमेशा के लिए है या प्रोमो?", a: "हमेशा के लिए। कोई समय सीमा नहीं, कोई ज़बरदस्ती अपग्रेड नहीं। Alibaba इंफ्रास्ट्रक्चर की वजह से मुमकिन।" },
        { q: "मुफ़्त प्लान की सीमाएँ क्या हैं?", a: "बेसिक AI एजेंट और सभी इंटीग्रेशन — असीमित। सिर्फ़ सीनियर विशेषज्ञ (Sourcing Expert, Product Designer आदि) पेड हैं, $1-3 प्रति टास्क।" },
        { q: "क्या साइन-अप के लिए कार्ड चाहिए?", a: "नहीं। तुरंत साइन-अप, कार्ड की ज़रूरत नहीं।" },
        { q: "क्या यह डेवलपर के बिना सच में काम करता है?", a: "हाँ। सब कुछ टेक्स्ट से। न कोड, न Selenium, न कमांड लाइन।" },
        { q: "Accio Work Shopify / Telegram / Gmail से कैसे जुड़ता है?", a: "बिल्ट-इन OAuth। एक क्लिक और हो गया। न API की, न डॉक्स।" },
      ],
    },
    cta: { title: "एक घंटे में बिज़नेस लॉन्च करने को तैयार?", subtitle: "Accio Work मुफ़्त डाउनलोड करें। पहला स्टोर — आज।", button: "मुफ़्त डाउनलोड करें", note: "macOS 11+ • 42 MB • कार्ड नहीं • ट्रायल नहीं" },
    footer: { pricing: "मूल्य", blog: "ब्लॉग", help: "सहायता", privacy: "गोपनीयता", terms: "शर्तें", copyright: "© 2026 Accio। Alibaba इंफ्रास्ट्रक्चर पर।" },
  },
  fr: {
    langLabel: "Français",
    nav: { pricing: "Tarifs", blog: "Blog", help: "Aide", events: "Événements", download: "Télécharger Accio Work" },
    hero: {
      badge: "Annoncé le 28 juillet 2026",
      title1: "Accio Work devient gratuit.",
      titleAccent: "Pour toujours.",
      desc: "10 millions de personnes pilotent déjà leur activité avec Accio. Aujourd'hui nous retirons le prix : n'importe qui peut lancer son business, sans essai, sans carte et sans limite de temps.",
      ctaPrimary: "Télécharger gratuitement",
      ctaSecondary: "Voir les offres",
      note: "macOS 11+. Apple Silicon et Intel. 42 Mo.",
    },
    stats: { users: "utilisateurs dans le monde", launch: "temps moyen pour lancer une boutique", launchSuffix: " minutes", cheaper: "moins cher que des freelances" },
    features: {
      heading: "Ce que contient l'offre gratuite",
      items: [
        { icon: "🤖", title: "Agent IA 24h/24", desc: "Un assistant complet : recherche, analyse, automatisation. Aucune limite de tâches." },
        { icon: "🌐", title: "Automatisation du navigateur", desc: "Il ouvre des sites, clique, extrait des données, remplit des formulaires. Sans code, sans Selenium." },
        { icon: "🔌", title: "50+ intégrations", desc: "Shopify, Gmail, Telegram, Slack, LinkedIn : connectés en un clic." },
        { icon: "✍️", title: "Génération de contenu", desc: "Landing pages, fiches produits, textes SEO. Prêts en quelques minutes." },
        { icon: "📈", title: "Market Scout", desc: "Analyse de niches, tendances et concurrents. Données d'Alibaba.com et Jungle Scout." },
        { icon: "👥", title: "Experts à la demande", desc: "Sourcing Expert, Product Designer, Listing Copywriter : quelques centimes, quand vous en avez besoin." },
      ],
    },
    compare: {
      heading: "Le vrai coût du lancement d'une boutique",
      without: "Sans Accio Work",
      with: "Avec Accio Work",
      colSpecialist: "Spécialiste",
      colCost: "Coût",
      colTime: "Durée",
      total: "Total",
      withoutRows: [
        ["Analyste marketing", "500–1 500 $", "2 semaines"],
        ["Responsable sourcing", "800–2 000 $", "3-4 semaines"],
        ["Designer UI/UX", "400–1 200 $", "1-2 semaines"],
        ["Rédacteur", "200–600 $", "1 semaine"],
        ["Développeur", "1 000–3 000 $", "2-4 semaines"],
      ],
      withRows: [
        ["Market Scout", "gratuit", "4 minutes"],
        ["Sourcing Expert", "~2 $", "12 minutes"],
        ["Product Designer", "~3 $", "20 minutes"],
        ["Listing Copywriter", "~1 $", "8 minutes"],
        ["Générateur de boutique", "gratuit", "10 minutes"],
      ],
      withoutTotalCost: "2 900 $ – 8 300 $",
      withoutTotalTime: "2–3 mois",
      withTotalCost: "~6 $",
      withTotalTime: "54 minutes",
      summary: () => null,
      summaryMoney: "483× moins cher",
      summaryTime: "1 440× plus rapide",
    },
    story: {
      heading: "Une histoire qui pourrait être la vôtre",
      who: "Anton, professeur à Novossibirsk",
      p: [
        "Il a repoussé le lancement de sa boutique pendant trois mois. Tout bloquait : le design, les fournisseurs, le SEO.",
        "Un samedi soir, il écrit dans Accio : « Je veux vendre des miroirs LED connectés. Construis la boutique. »",
        "48 minutes plus tard, la boutique était en ligne. Landing page, fiches produits, Shopify, tout y était.",
        "Lundi il lançait les publicités. Mardi arrivait la première commande.",
      ],
      highlight: "Deux semaines plus tard : 2 400 $ de chiffre d'affaires.",
      quote: "« Je ne suis ni designer ni commercial. Je suis professeur. Accio Work a fait en une soirée ce qui m'aurait pris des mois. »",
      videoCaption: "De l'idée à la boutique en 48 minutes, enregistrement d'écran",
    },
    faq: {
      heading: "Questions fréquentes",
      items: [
        { q: "L'offre gratuite est-elle permanente ou promotionnelle ?", a: "Permanente. Pas de date limite, pas d'upgrade forcé. C'est possible grâce à l'infrastructure Alibaba." },
        { q: "Quelles sont les limites de l'offre gratuite ?", a: "L'agent IA de base et toutes les intégrations sont illimités. Seuls les experts seniors (Sourcing Expert, Product Designer, etc.) sont payants, entre 1 et 3 $ par tâche." },
        { q: "Faut-il une carte bancaire pour s'inscrire ?", a: "Non. Inscription immédiate, aucune carte demandée." },
        { q: "Est-ce que ça marche vraiment sans développeur ?", a: "Oui. Tout passe par du texte. Pas de code, pas de Selenium, pas de ligne de commande." },
        { q: "Comment Accio Work se connecte-t-il à Shopify, Telegram ou Gmail ?", a: "Via OAuth intégré. Un clic et c'est fait. Pas de clé API, pas de documentation à lire." },
      ],
    },
    cta: { title: "Prêt à lancer votre business en une heure ?", subtitle: "Téléchargez Accio Work gratuitement. Première boutique dès aujourd'hui.", button: "Télécharger gratuitement", note: "macOS 11+ • 42 Mo • sans carte • sans essai" },
    footer: { pricing: "Tarifs", blog: "Blog", help: "Aide", privacy: "Confidentialité", terms: "Conditions", copyright: "© 2026 Accio. Sur l'infrastructure Alibaba." },
  },
};


/* ---------- Path helpers ---------- */
const langPrefix = (lang: Lang) => (lang === "en" ? "" : `/${lang}`);
const homeHref = (lang: Lang) => (lang === "en" ? "/" : `/${lang}`);
const blogHref = (lang: Lang) => (lang === "en" ? "/blog" : `/${lang}/blog`);
const eventsHref = (lang: Lang) => `${langPrefix(lang)}/events/free-forever`;

/* ---------- Reveal on scroll ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [shown]);
  return { ref, shown };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ease-out ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      {children}
    </div>
  );
}

/* ---------- Counter ---------- */
function Counter({ to, suffix = "", duration = 2000, locale }: { to: number; suffix?: string; duration?: number; locale: string }) {
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
      : val.toLocaleString(locale);
  return (
    <span ref={ref} className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">
      {formatted}{suffix}
    </span>
  );
}

/* ---------- Brand logo ---------- */
function BrandLogo({ size = 22 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5 font-bold tracking-tight" style={{ fontSize: size }}>
      <svg width={size * 0.95} height={size} viewBox="0 0 28 28" aria-hidden>
        <defs>
          <linearGradient id="accioTriEvtShared" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="55%" stopColor="#17B26A" />
            <stop offset="100%" stopColor="#7CE7C2" />
          </linearGradient>
        </defs>
        <path d="M14 3 L26 25 L2 25 Z" fill="url(#accioTriEvtShared)" />
      </svg>
      <span className="text-[#0F172A]">Accio</span>
    </div>
  );
}

/* ---------- Language switcher ---------- */
const LANG_NAMES: Record<Lang, string> = {
  en: "English", ru: "Русский", de: "Deutsch", it: "Italiano",
  es: "Español", pt: "Português", zh: "中文", hi: "हिन्दी", fr: "Français",
};

function LangSwitcher({ lang }: { lang: Lang }) {
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
  const langs: Lang[] = ["en", "ru", "de", "it", "es", "pt", "zh", "hi"];
  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="hidden items-center gap-1 text-[14px] text-[#1a1a2e]/70 hover:text-[#1a1a2e] md:inline-flex"
      >
        {LANG_NAMES[lang]} <span className="opacity-60">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-lg">
          {langs.map((l) => (
            <a
              key={l}
              href={eventsHref(l)}
              className={`block px-4 py-2 text-[14px] ${l === lang ? "bg-[#F8F9FB] font-semibold text-[#1a1a2e]" : "text-[#1a1a2e]/80 hover:bg-[#F8F9FB]"}`}
            >
              {LANG_NAMES[l]}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Header ---------- */
function Header({ lang, d }: { lang: Lang; d: EventDict }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6">
        <a href={homeHref(lang)} className="flex items-center gap-2">
          <BrandLogo size={22} />
        </a>
        <nav className="hidden items-center gap-8 text-[14px] font-medium text-[#1a1a2e]/80 md:flex">
          <a href={`${homeHref(lang)}#pricing`} className="hover:text-[#1a1a2e]">{d.nav.pricing}</a>
          <a href={blogHref(lang)} className="hover:text-[#1a1a2e]">{d.nav.blog}</a>
          <a href={eventsHref(lang)} className="flex items-center gap-1 font-semibold text-[#1a1a2e]">
            {d.nav.events} <span>🔥</span>
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#17B26A] to-[#7CE7C2]" />
          </a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <LangSwitcher lang={lang} />
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-[#16213E] px-4 text-[13px] font-semibold text-white transition hover:bg-[#0F172A] sm:h-11 sm:px-5 sm:text-[14px]"
          >
            {d.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Sections ---------- */
function Hero({ lang, d }: { lang: Lang; d: EventDict }) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle,#7CE7C233,transparent 70%)" }} />
      <div className="relative mx-auto max-w-[900px] px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#17B26A]/10 px-4 py-1.5 text-[13px] font-semibold text-[#17B26A]">{d.hero.badge}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 text-[40px] font-extrabold leading-[1.05] tracking-tight text-[#1a1a2e] sm:text-[56px] lg:text-[64px]">
            {d.hero.title1}{" "}
            <span className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">{d.hero.titleAccent}</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-[600px] text-[18px] leading-relaxed text-[#6B7280] sm:text-[20px]">{d.hero.desc}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-full bg-[#16213E] px-7 text-[15px] font-bold text-white transition hover:bg-[#0F172A]">
              {d.hero.ctaPrimary}
            </a>
            <a href={`${homeHref(lang)}#pricing`} className="inline-flex h-12 items-center justify-center rounded-full border border-[#16213E] px-7 text-[15px] font-semibold text-[#16213E] transition hover:bg-[#16213E]/5">
              {d.hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-5 text-[13px] text-[#6B7280]">{d.hero.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Stats({ d, locale }: { d: EventDict; locale: string }) {
  const items = [
    { value: 10_000_000, suffix: "+", label: d.stats.users },
    { value: 54, suffix: d.stats.launchSuffix, label: d.stats.launch },
    { value: 483, suffix: "×", label: d.stats.cheaper },
  ];
  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 100}>
            <div className="rounded-2xl bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <div className="text-[56px] font-extrabold leading-none tracking-tight sm:text-[64px]">
                <Counter to={it.value} suffix={it.suffix} locale={locale} />
              </div>
              <p className="mt-4 text-[15px] text-[#6B7280]">{it.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Features({ d }: { d: EventDict }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">{d.features.heading}</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {d.features.items.map((f, i) => (
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

function CompareTable({ title, bg, rows, totalCost, totalTime, d }: { title: string; bg: string; rows: [string, string, string][]; totalCost: string; totalTime: string; d: EventDict }) {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 ${bg}`}>
      <h3 className="text-[20px] font-bold text-[#1a1a2e]">{title}</h3>
      <div className="mt-6 overflow-hidden rounded-xl bg-white/70">
        <table className="w-full text-left text-[14px]">
          <thead className="text-[12px] uppercase tracking-wide text-[#6B7280]">
            <tr>
              <th className="px-4 py-3 font-semibold">{d.compare.colSpecialist}</th>
              <th className="px-4 py-3 font-semibold">{d.compare.colCost}</th>
              <th className="px-4 py-3 font-semibold">{d.compare.colTime}</th>
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
              <td className="px-4 py-4">{d.compare.total}</td>
              <td className="px-4 py-4">{totalCost}</td>
              <td className="px-4 py-4">{totalTime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Compare({ d }: { d: EventDict }) {
  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">{d.compare.heading}</h2>
        </Reveal>
        <div className="relative mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <CompareTable title={d.compare.without} bg="bg-[#FEF2F2]" rows={d.compare.withoutRows} totalCost={d.compare.withoutTotalCost} totalTime={d.compare.withoutTotalTime} d={d} />
          </Reveal>
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[14px] font-bold text-[#6B7280] shadow-sm">vs</span>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[13px] font-bold text-[#6B7280]">vs</span>
          </div>
          <Reveal delay={100}>
            <CompareTable title={d.compare.with} bg="bg-[#ECFDF5]" rows={d.compare.withRows} totalCost={d.compare.withTotalCost} totalTime={d.compare.withTotalTime} d={d} />
          </Reveal>
        </div>
        <Reveal delay={150}>
          <p className="mx-auto mt-12 max-w-[820px] text-center text-[22px] font-extrabold text-[#1a1a2e] sm:text-[28px]">
            <span className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">{d.compare.summaryMoney}</span>
            {" · "}
            <span className="bg-gradient-to-r from-[#17B26A] to-[#7CE7C2] bg-clip-text text-transparent">{d.compare.summaryTime}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story({ d }: { d: EventDict }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">{d.story.heading}</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-0 overflow-hidden rounded-2xl bg-[#F8F9FB] shadow-[0_2px_12px_rgba(0,0,0,0.04)] lg:grid-cols-[1.3fr_1fr]">
            <div className="relative p-8 sm:p-12">
              <span aria-hidden className="absolute left-0 top-6 bottom-6 w-1 rounded-r bg-gradient-to-b from-[#17B26A] to-[#7CE7C2]" />
              <h3 className="text-[22px] font-bold text-[#1a1a2e]">{d.story.who}</h3>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#374151]">
                {d.story.p.map((paragraph, i) => (<p key={i}>{paragraph}</p>))}
                <p className="font-semibold text-[#1a1a2e]">{d.story.highlight}</p>
                <blockquote className="border-l-2 border-[#17B26A] pl-4 italic text-[#1a1a2e]">{d.story.quote}</blockquote>
              </div>
            </div>
            <div className="flex min-h-[280px] items-center justify-center bg-[#EEF1F5] p-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1a1a2e"><path d="M8 5v14l11-7z" /></svg>
                </span>
                <p className="text-[14px] font-medium text-[#6B7280]">{d.story.videoCaption}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq({ d }: { d: EventDict }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-28">
      <div className="mx-auto max-w-[820px] px-6">
        <Reveal>
          <h2 className="text-center text-[32px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">{d.faq.heading}</h2>
        </Reveal>
        <div className="mt-12 divide-y divide-[#E5E7EB] overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          {d.faq.items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left text-[16px] font-semibold text-[#1a1a2e] transition hover:bg-[#F8F9FB] sm:px-8 sm:text-[17px]">
                  <span>{it.q}</span>
                  <span className={`ml-4 text-[#17B26A] transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid overflow-hidden px-6 text-[15px] leading-relaxed text-[#6B7280] transition-all duration-300 sm:px-8 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
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

function FinalCta({ d }: { d: EventDict }) {
  return (
    <section className="bg-[#16213E] py-20 sm:py-28">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <Reveal>
          <h2 className="text-[36px] font-extrabold leading-tight tracking-tight text-white sm:text-[48px]">{d.cta.title}</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-[600px] text-[16px] text-white/80 sm:text-[18px]">{d.cta.subtitle}</p>
        </Reveal>
        <Reveal delay={160}>
          <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[15px] font-bold text-[#17B26A] transition hover:bg-white/90 sm:h-14 sm:text-[16px]">
            {d.cta.button}
          </a>
          <p className="mt-5 text-[13px] text-white/60">{d.cta.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer({ lang, d }: { lang: Lang; d: EventDict }) {
  return (
    <footer className="bg-[#F8F9FB] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <a href={homeHref(lang)} className="flex items-center gap-2"><BrandLogo size={18} /></a>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-[#6B7280]">
          <a href={`${homeHref(lang)}#pricing`} className="hover:text-[#1a1a2e]">{d.footer.pricing}</a>
          <a href={blogHref(lang)} className="hover:text-[#1a1a2e]">{d.footer.blog}</a>
          <a href="#" className="hover:text-[#1a1a2e]">{d.footer.help}</a>
          <a href="#" className="hover:text-[#1a1a2e]">{d.footer.privacy}</a>
          <a href="#" className="hover:text-[#1a1a2e]">{d.footer.terms}</a>
        </nav>
        <p className="text-[12px] text-[#6B7280]">{d.footer.copyright}</p>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
const LOCALES: Record<Lang, string> = {
  en: "en-US", ru: "ru-RU", de: "de-DE", it: "it-IT",
  es: "es-ES", pt: "pt-BR", zh: "zh-CN", hi: "hi-IN", fr: "fr-FR",
};

export function FreeForeverPage({ lang }: { lang: Lang }) {
  const d = DICTS[lang];
  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a2e] antialiased">
      <Header lang={lang} d={d} />
      <main>
        <Hero lang={lang} d={d} />
        <Stats d={d} locale={LOCALES[lang]} />
        <Features d={d} />
        <Compare d={d} />
        <Story d={d} />
        <Faq d={d} />
        <FinalCta d={d} />
      </main>
      <Footer lang={lang} d={d} />
    </div>
  );
}

/* ---------- SEO helpers per lang ---------- */
export const EVENT_SEO: Record<Lang, { title: string; description: string }> = {
  en: { title: "Accio Work is free forever | Events", description: "Accio Work is now free forever. 10M+ users launch stores in under an hour — no card, no trial, no limits." },
  ru: { title: "Accio Work стал бесплатным навсегда | Events", description: "Accio Work теперь бесплатен навсегда. 10 миллионов пользователей запускают магазины за час — без карты, без триала, без ограничений." },
  de: { title: "Accio Work ist für immer kostenlos | Events", description: "Accio Work ist jetzt für immer kostenlos. Über 10 Mio. Nutzer starten Shops in unter einer Stunde — ohne Karte, ohne Test, ohne Limits." },
  it: { title: "Accio Work è gratis per sempre | Eventi", description: "Accio Work è ora gratis per sempre. Oltre 10M di utenti lanciano store in meno di un'ora — senza carta, senza trial, senza limiti." },
  es: { title: "Accio Work es gratis para siempre | Eventos", description: "Accio Work ahora es gratis para siempre. Más de 10 millones de usuarios lanzan tiendas en menos de una hora — sin tarjeta, sin prueba, sin límites." },
  pt: { title: "Accio Work é grátis para sempre | Eventos", description: "Accio Work agora é grátis para sempre. Mais de 10 milhões de usuários lançam lojas em menos de uma hora — sem cartão, sem trial, sem limites." },
  zh: { title: "Accio Work 永久免费 | 活动", description: "Accio Work 现已永久免费。超过 1000 万用户在一小时内上线店铺 —— 无需信用卡、无需试用、无限制。" },
  fr: { title: "Accio Work est gratuit pour toujours | Événements", description: "Accio Work est désormais gratuit pour toujours. Plus de 10 millions d'utilisateurs lancent une boutique en moins d'une heure, sans carte, sans essai, sans limite." },
  hi: { title: "Accio Work अब हमेशा के लिए मुफ़्त | इवेंट्स", description: "Accio Work अब हमेशा के लिए मुफ़्त है। 1 करोड़+ उपयोगकर्ता एक घंटे से भी कम में स्टोर लॉन्च कर रहे हैं — बिना कार्ड, बिना ट्रायल, बिना सीमा।" },
};

export { REFERRAL_URL };
