export type Lang = "en" | "ru" | "de" | "it";

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string; // supports **highlight** markers
};

export type TabKey =
  | "launch"
  | "monitor"
  | "source"
  | "promote"
  | "tools"
  | "organize"
  | "analyze";

export type TabContent = {
  tabLabel: string;
  title: string;
  body: string;
  extraYou: string;
  extraAI: string;
};

export type FaqItem = { q: string; a: string; linkLabel?: string };

export type Dict = {
  nav: {
    pricing: string;
    help: string;
    events: string;
    language: string;
    download: string;
    blog: string;
  };
  hero: {
    brand: string;
    tagline: string;
    pills: [string, string, string];
    desc: string;
    cta: string;
    ctaBadge: string;
    ctaNote: string;
  };
  business: {
    heading: string;
    tabs: Record<TabKey, TabContent>;
  };
  why: {
    heading: string;
    aiTitle: string;
    aiBody: string;
    aiChannel: string;
    connectTitle: string;
    connectBody: string;
    dataTitle: string;
    dataBody: string;
    platformTitle: string;
    platformBody: string;
    agents: { name: string; msg: string }[];
  };
  testimonials: {
    heading1: string;
    highlight: string;
    heading2: string;
    row1: Testimonial[];
    row2: Testimonial[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
    readGuide: string;
  };
  cta: {
    title: string;
    subtitle: string;
    download: string;
    ctaBadge: string;
    quickStart: string;
    note: string;
  };
  footer: {
    partneredWith: string;
    rights: string;
  };
  langNames: { en: string; ru: string; de: string; it: string };
};

const en: Dict = {
  nav: {
    pricing: "Pricing",
    help: "Help Center",
    events: "Events",
    language: "English",
    download: "Download Accio Work",
    blog: "Blog",
  },
  hero: {
    brand: "Work",
    tagline: "Your 24/7 agentic business team",
    pills: ["Zero learning curve", "Built for business", "Enterprise-grade security"],
    desc:
      "Automates your business end-to-end — research & analysis, sourcing & negotiation, marketing & sales, operations & CRM — delivering real profit.",
    cta: "Download for macOS",
    ctaBadge: "Apple Silicon",
    ctaNote: "For macOS 11 or later",
  },
  business: {
    heading: "Built for every business need",
    tabs: {
      launch: {
        tabLabel: "Launch Store",
        title: "From idea to first sale in minutes",
        body: "Spin up a complete online store with products, listings, design, and SEO ready out of the box – and start selling the moment you go live.",
        extraYou: "1 idea",
        extraAI: "products, listings, SEO",
      },
      monitor: {
        tabLabel: "Monitor Competitors",
        title: "Schedule once, run automatically",
        body: "Track competitors' pricing, products, and campaigns with scheduled tasks – and turn every finding into a sharper strategy you can act on.",
        extraYou: "set once",
        extraAI: "pricing, products, campaigns",
      },
      source: {
        tabLabel: "Source & Negotiate",
        title: "Get the right supplier at the right price",
        body: "Find verified suppliers, send inquiries, and negotiate by email – all handled for you until you land the best deal.",
        extraYou: "0 calls",
        extraAI: "verified suppliers, inquiries",
      },
      promote: {
        tabLabel: "Promote on Social",
        title: "Post, engage, and grow on autopilot",
        body: "Create viral-ready content, schedule posts across platforms, engage with your audience, and track what works – day and night.",
        extraYou: "post once",
        extraAI: "scheduling, engagement, analytics",
      },
      tools: {
        tabLabel: "Customize Tools",
        title: "Custom business tools – with zero coding",
        body: "Just describe what you need – calculators, dashboards, trackers, or websites – and get a working tool built on the spot, evolving as your business grows.",
        extraYou: "describe once",
        extraAI: "calculators, dashboards, trackers",
      },
      organize: {
        tabLabel: "Organize Files",
        title: "Turn messy documents into clear decisions",
        body: "Upload quotes, invoices, reports, or any file – see everything organized into clean tables and charts, ready to compare and act on in seconds.",
        extraYou: "upload files",
        extraAI: "tables, charts, insights",
      },
      analyze: {
        tabLabel: "Analyze Bestsellers",
        title: "Know your market in one click",
        body: "Get market insight with data from Jungle Scout, TikTok, Reddit, Alibaba.com, and more verified sources.",
        extraYou: "1 click",
        extraAI: "trends, demand, rankings",
      },
    },
  },
  why: {
    heading: "Why choose Accio Work?",
    aiTitle: "One AI for everything. Or a team of specialists.",
    aiBody:
      "A general agent handles daily tasks. Add specialists for sales, sourcing, design — each with its own expertise and memory.",
    aiChannel: "#new-product-launch",
    connectTitle: "Connect once. Automate everything.",
    connectBody:
      "Shopify, Gmail, Slack, LinkedIn, and 50+ more — one-click setup. No integration projects, no developers needed.",
    dataTitle: "Your data. Your control.",
    dataBody:
      "Sandboxed execution. You approve every critical action. Data sovereignty backed by Alibaba's infrastructure.",
    platformTitle: "One platform. Analysis, design, automation.",
    platformBody:
      "Sourcing reports, concept design, landing pages, competitor tracking — pick a skill, schedule it, forget about it.",
    agents: [
      { name: "Market Scout", msg: "EU demand for portable humidifiers ↑ 38% last 30d." },
      { name: "Sourcing Expert", msg: "Got 12 verified Shenzhen suppliers · MOQ 100+ · BSCI ✓" },
      { name: "Product Designer", msg: "3 concept variants in matte finish — ready to review." },
      { name: "Listing Copywriter", msg: "SEO title drafted — projected +37% CTR." },
    ],
  },
  testimonials: {
    heading1: "Loved by",
    highlight: "10+ Million",
    heading2: "monthly active users",
    row1: [
      { name: "Joseph S.", role: "Global Sourcing Manager", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work quickly transforms scattered non-standard supplier quotes into comparable data. It's the **first AI that truly understands** the complexity of global trade." },
      { name: "Mia C.", role: "Weekend Founder", avatar: "https://i.pravatar.cc/80?img=47", text: "I had product ideas saved for months, but no clue how to source or launch. Accio Work helped me move from scattered notes to **a real product to sell**." },
      { name: "Luna M.", role: "Dropshipping seller", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work scans Reddit, TikTok, and Amazon to **pinpoint winners** and source directly from suppliers. It's the ultimate tool to outpace competition on viral trends." },
      { name: "Keshia B.", role: "Side-Hustler", avatar: "https://i.pravatar.cc/80?img=48", text: "I only had nights for my store. I love that Accio Work could automate niche analysis and **supplier follow-ups** while I was at my day job." },
      { name: "Jay W.", role: "Streetwear Brand Owner", avatar: "https://i.pravatar.cc/80?img=15", text: "Accio Work **cuts my production time by weeks** with professional tech pack generation and supplier auto negotiation. More importantly, I know my designs are 100% secure." },
    ],
    row2: [
      { name: "Nina K.", role: "Outdoor Brand Founder", avatar: "https://i.pravatar.cc/80?img=49", text: "I used to spend **10h/week** managing content freelancers, but Accio Work now automates everything from content to publishing and only takes me **10 min/week**." },
      { name: "Sara N.", role: "Nail Salon Manager", avatar: "https://i.pravatar.cc/80?img=32", text: "Very easy to use. I think I **finally get how AI can help** my business." },
      { name: "Clara E.", role: "Procurement Specialist", avatar: "https://i.pravatar.cc/80?img=44", text: "Supplier research always felt like chasing missing details. Now with Accio Work's proactive follow-up, I can get to a **clean shortlist faster**." },
      { name: "Andrew P.", role: "Wedding & Event Planner", avatar: "https://i.pravatar.cc/80?img=12", text: "This tool helped me find diverse suppliers at much lower prices, while perfectly coordinating delivery with my event dates. My **bookings grow by 30+%** thanks to Accio Work." },
      { name: "Joan W.", role: "Supply Chain Consultant", avatar: "https://i.pravatar.cc/80?img=5", text: "Unlike other AIs, Accio Work is powered by the **real trade data** from alibaba.com and market intelligence like Jungle Scout. Definitely a must-have for e-commerce sellers." },
    ],
  },
  faq: {
    heading: "FAQ",
    readGuide: "Read the quickstart guide",
    items: [
      { q: "How is Accio Work different from a normal AI chat tool?", a: "Typical chat tools only answer with text. Accio Work is an execution-oriented agent platform that can read local files, run terminal commands, control your browser, and call external APIs. It does not just tell you what to do — it helps you do the work.", linkLabel: "Read the quickstart guide" },
      { q: "Which LLMs are supported?", a: "We currently support Gemini, GPT-4o, Claude, and Qwen. You can assign different models to different agents. Model access is routed through our gateway so you do not have to manage a complicated API-key setup.", linkLabel: "View agent capabilities" },
      { q: "What can the browser automation do?", a: "Accio Work can control a real browser via Chrome DevTools Protocol. Agents can search the web, scrape pages, fill out forms, take screenshots, and navigate multi-step workflows — all hands-free. Browser access is treated as a sensitive capability and requires explicit permission.", linkLabel: "View agent tools" },
      { q: "Can I schedule agents to run automatically?", a: "Yes. The Automations feature lets you create cron-like scheduled tasks — either by describing them in natural language in a chat, or by configuring them on the Automations page. Schedules run locally, so they work even without an internet connection. Missed runs are reconciled on restart.", linkLabel: "View automation docs" },
      { q: "How do I connect an agent to Telegram or DingTalk?", a: "Open the Channels page in the client, choose the platform you need, and follow the setup guide to add a bot token. Accio Work supports Telegram, Discord, DingTalk, Lark (Feishu), and WeChat. Once connected, the agent can reply in chats or receive tasks automatically.", linkLabel: "View supported channels" },
      { q: "What are Skills and how do they extend agents?", a: "Skills are plugin packs that give agents domain-specific abilities — code review, copywriting, SEO audit, and more. You can install skills from the marketplace or create your own. Accio Work also supports the Model Context Protocol (MCP) standard for integrating external tool servers.", linkLabel: "View skills management" },
      { q: "Which platforms are supported?", a: "Accio Work is available for macOS (Apple Silicon and Intel) and Windows (x64). It is a native desktop application built with Electron, so you get full access to local system resources." },
      { q: "Can multiple agents collaborate on a task?", a: "Yes. The Teams feature lets you create agent groups with a Team Lead and member agents. The TL can delegate subtasks, coordinate work through group chat, and orchestrate multi-agent workflows — useful for complex projects that benefit from specialized roles.", linkLabel: "View agent team docs" },
    ],
  },
  cta: {
    title: "Try Accio Work today.",
    subtitle: "Enjoy the ultimate work experience with Accio Work.",
    download: "Download for macOS",
    ctaBadge: "Apple Silicon",
    quickStart: "Quick Start",
    note: "For macOS 11 or later",
  },
  footer: {
    partneredWith: "Partnered with",
    rights: "All rights reserved.",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano" },
};

const ru: Dict = {
  nav: {
    pricing: "Тарифы",
    help: "Центр помощи",
    events: "События",
    language: "Русский",
    download: "Скачать Accio Work",
    blog: "Блог",
  },
  hero: {
    brand: "Work",
    tagline: "Ваша агентская бизнес-команда 24/7",
    pills: ["Никакого обучения", "Создано для бизнеса", "Корпоративная безопасность"],
    desc:
      "Автоматизирует ваш бизнес от начала до конца — исследование и аналитика, поиск поставщиков и переговоры, маркетинг и продажи, операции и CRM — и приносит реальную прибыль.",
    cta: "Скачать для macOS",
    ctaBadge: "Apple Silicon",
    ctaNote: "Для macOS 11 или новее",
  },
  business: {
    heading: "Создано для любой бизнес-задачи",
    tabs: {
      launch: {
        tabLabel: "Запуск магазина",
        title: "От идеи до первой продажи за минуты",
        body: "Запустите полноценный интернет-магазин с товарами, карточками, дизайном и SEO — и начните продавать в момент запуска.",
        extraYou: "1 идея",
        extraAI: "товары, карточки, SEO",
      },
      monitor: {
        tabLabel: "Мониторинг конкурентов",
        title: "Настройте один раз — работает автоматически",
        body: "Отслеживайте цены, товары и кампании конкурентов по расписанию — и превращайте каждое наблюдение в готовую стратегию.",
        extraYou: "настроить раз",
        extraAI: "цены, товары, кампании",
      },
      source: {
        tabLabel: "Поиск и переговоры",
        title: "Нужный поставщик по нужной цене",
        body: "Находите проверенных поставщиков, отправляйте запросы и ведите переговоры по email — всё делается за вас до лучшей сделки.",
        extraYou: "0 звонков",
        extraAI: "проверенные поставщики, запросы",
      },
      promote: {
        tabLabel: "Продвижение в соцсетях",
        title: "Публикация, вовлечение и рост на автопилоте",
        body: "Создавайте вирусный контент, планируйте посты по площадкам, общайтесь с аудиторией и отслеживайте результаты — днём и ночью.",
        extraYou: "опубликовать раз",
        extraAI: "планирование, вовлечение, аналитика",
      },
      tools: {
        tabLabel: "Свои инструменты",
        title: "Свои бизнес-инструменты без единой строки кода",
        body: "Просто опишите, что нужно — калькуляторы, дашборды, трекеры или сайты — и получите готовый инструмент, который растёт вместе с бизнесом.",
        extraYou: "описать раз",
        extraAI: "калькуляторы, дашборды, трекеры",
      },
      organize: {
        tabLabel: "Работа с файлами",
        title: "Превратите хаос документов в понятные решения",
        body: "Загружайте котировки, счета, отчёты и любые файлы — получайте всё в аккуратных таблицах и графиках, готовых для сравнения и решений за секунды.",
        extraYou: "загрузить файлы",
        extraAI: "таблицы, графики, инсайты",
      },
      analyze: {
        tabLabel: "Анализ бестселлеров",
        title: "Знайте свой рынок в один клик",
        body: "Получайте инсайты по рынку из Jungle Scout, TikTok, Reddit, Alibaba.com и других проверенных источников.",
        extraYou: "1 клик",
        extraAI: "тренды, спрос, рейтинги",
      },
    },
  },
  why: {
    heading: "Почему Accio Work?",
    aiTitle: "Один ИИ для всего. Или команда специалистов.",
    aiBody:
      "Универсальный агент справляется с ежедневными задачами. Добавьте специалистов по продажам, закупкам и дизайну — у каждого своя экспертиза и память.",
    aiChannel: "#запуск-нового-продукта",
    connectTitle: "Подключите один раз. Автоматизируйте всё.",
    connectBody:
      "Shopify, Gmail, Slack, LinkedIn и ещё 50+ — настройка в один клик. Никаких интеграционных проектов и разработчиков.",
    dataTitle: "Ваши данные. Ваш контроль.",
    dataBody:
      "Изолированное выполнение. Вы одобряете каждое критическое действие. Суверенитет данных на инфраструктуре Alibaba.",
    platformTitle: "Одна платформа. Аналитика, дизайн, автоматизация.",
    platformBody:
      "Отчёты по поставщикам, концепт-дизайн, посадочные страницы, слежение за конкурентами — выберите навык, поставьте на расписание и забудьте.",
    agents: [
      { name: "Маркет-скаут", msg: "Спрос в ЕС на портативные увлажнители ↑ 38% за 30 дней." },
      { name: "Эксперт по закупкам", msg: "12 проверенных поставщиков из Шэньчжэня · MOQ 100+ · BSCI ✓" },
      { name: "Продукт-дизайнер", msg: "3 концепта в матовом исполнении — готовы к обзору." },
      { name: "Копирайтер карточек", msg: "SEO-заголовок готов — прогноз +37% CTR." },
    ],
  },
  testimonials: {
    heading1: "Нас любят",
    highlight: "10+ млн",
    heading2: "активных пользователей в месяц",
    row1: [
      { name: "Иосиф С.", role: "Менеджер по глобальным закупкам", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work быстро превращает разрозненные нестандартные предложения поставщиков в сравнимые данные. Это **первый ИИ, который реально понимает** сложность глобальной торговли." },
      { name: "Мия К.", role: "Основатель на выходных", avatar: "https://i.pravatar.cc/80?img=47", text: "Идеи товаров лежали месяцами, но я не понимала, где искать и как запускать. Accio Work помог перейти от заметок к **реальному продукту**." },
      { name: "Луна М.", role: "Дропшиппер", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work сканирует Reddit, TikTok и Amazon, чтобы **находить хиты** и закупать напрямую у поставщиков. Незаменим для игры на вирусных трендах." },
      { name: "Кеша Б.", role: "Совместитель", avatar: "https://i.pravatar.cc/80?img=48", text: "Магазином занималась только по ночам. Обожаю, что Accio Work сам автоматизирует нишевую аналитику и **напоминания поставщикам**, пока я на работе." },
      { name: "Джей У.", role: "Владелец бренда стритвира", avatar: "https://i.pravatar.cc/80?img=15", text: "Accio Work **экономит недели производства** за счёт профессиональных тех-паков и авто-переговоров с поставщиками. Главное — мои дизайны в полной безопасности." },
    ],
    row2: [
      { name: "Нина К.", role: "Основатель outdoor-бренда", avatar: "https://i.pravatar.cc/80?img=49", text: "Раньше тратила **10 часов в неделю** на управление контент-фрилансерами. Теперь Accio Work автоматизирует всё — от контента до публикаций — и это **10 минут в неделю**." },
      { name: "Сара Н.", role: "Управляющая nail-салоном", avatar: "https://i.pravatar.cc/80?img=32", text: "Очень просто в использовании. Кажется, я **наконец поняла, как ИИ помогает** бизнесу." },
      { name: "Клара Э.", role: "Специалист по закупкам", avatar: "https://i.pravatar.cc/80?img=44", text: "Поиск поставщиков всегда сводился к погоне за деталями. С проактивными фоллоу-апами Accio Work я получаю **чистый шортлист быстрее**." },
      { name: "Эндрю П.", role: "Организатор мероприятий и свадеб", avatar: "https://i.pravatar.cc/80?img=12", text: "Инструмент помог найти разнообразных поставщиков по низкой цене и идеально согласовать сроки с датами мероприятий. Бронирования **выросли на 30+%** благодаря Accio Work." },
      { name: "Джоан У.", role: "Консультант по цепочке поставок", avatar: "https://i.pravatar.cc/80?img=5", text: "В отличие от других ИИ, Accio Work питается **реальными торговыми данными** с alibaba.com и рыночной аналитикой Jungle Scout. Must-have для e-commerce-продавцов." },
    ],
  },
  faq: {
    heading: "FAQ",
    readGuide: "Читать руководство по быстрому старту",
    items: [
      { q: "Чем Accio Work отличается от обычного ИИ-чата?", a: "Обычные чаты только отвечают текстом. Accio Work — исполнительная агентская платформа: читает локальные файлы, выполняет команды терминала, управляет браузером и вызывает внешние API. Он не просто рассказывает, что делать — он делает работу.", linkLabel: "Читать руководство по быстрому старту" },
      { q: "Какие LLM поддерживаются?", a: "Сейчас поддерживаются Gemini, GPT-4o, Claude и Qwen. Можно назначать разные модели разным агентам. Доступ к моделям идёт через наш шлюз — без сложных настроек API-ключей.", linkLabel: "Смотреть возможности агентов" },
      { q: "Что умеет автоматизация браузера?", a: "Accio Work управляет настоящим браузером через Chrome DevTools Protocol. Агенты ищут в вебе, парсят страницы, заполняют формы, делают скриншоты и проходят многошаговые сценарии — без вашего участия. Доступ к браузеру — чувствительная возможность и требует явного разрешения.", linkLabel: "Смотреть инструменты агентов" },
      { q: "Можно ли ставить агентов на расписание?", a: "Да. Функция Automations позволяет создавать задачи по расписанию — описанием на естественном языке в чате или настройкой на странице Automations. Расписания работают локально, даже без интернета. Пропущенные запуски восстанавливаются после запуска.", linkLabel: "Смотреть документацию по автоматизации" },
      { q: "Как подключить агента к Telegram или DingTalk?", a: "Откройте страницу Channels в клиенте, выберите нужную платформу и добавьте токен бота по гайду. Поддерживаются Telegram, Discord, DingTalk, Lark (Feishu) и WeChat. После подключения агент отвечает в чатах и принимает задачи автоматически.", linkLabel: "Смотреть поддерживаемые каналы" },
      { q: "Что такое Skills и как они расширяют агентов?", a: "Skills — это пакеты-плагины, дающие агентам специализацию: код-ревью, копирайтинг, SEO-аудит и др. Устанавливайте из маркетплейса или создавайте свои. Accio Work также поддерживает стандарт Model Context Protocol (MCP) для внешних инструментов.", linkLabel: "Смотреть управление навыками" },
      { q: "Какие платформы поддерживаются?", a: "Accio Work доступен для macOS (Apple Silicon и Intel) и Windows (x64). Это нативное десктоп-приложение на Electron с полным доступом к локальным ресурсам." },
      { q: "Могут ли несколько агентов работать вместе?", a: "Да. Функция Teams позволяет создавать группы агентов с Team Lead и участниками. Лидер делегирует подзадачи, координирует работу через групповой чат и оркестрирует мульти-агентные сценарии — удобно для сложных проектов с ролями.", linkLabel: "Смотреть документацию по командам агентов" },
    ],
  },
  cta: {
    title: "Попробуйте Accio Work сегодня.",
    subtitle: "Получите максимум от работы вместе с Accio Work.",
    download: "Скачать для macOS",
    ctaBadge: "Apple Silicon",
    quickStart: "Быстрый старт",
    note: "Для macOS 11 или новее",
  },
  footer: {
    partneredWith: "В партнёрстве с",
    rights: "Все права защищены.",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano" },
};

const de: Dict = {
  nav: {
    pricing: "Preise",
    help: "Hilfe-Center",
    events: "Events",
    language: "Deutsch",
    download: "Accio Work herunterladen",
    blog: "Blog",
  },
  hero: {
    brand: "Work",
    tagline: "Ihr agentisches Business-Team rund um die Uhr",
    pills: ["Ohne Einarbeitung", "Für Unternehmen gemacht", "Enterprise-Sicherheit"],
    desc:
      "Automatisiert Ihr Business von A bis Z – Recherche & Analyse, Sourcing & Verhandlung, Marketing & Vertrieb, Betrieb & CRM – für echten Gewinn.",
    cta: "Für macOS herunterladen",
    ctaBadge: "Apple Silicon",
    ctaNote: "Für macOS 11 oder neuer",
  },
  business: {
    heading: "Für jede Business-Anforderung gebaut",
    tabs: {
      launch: {
        tabLabel: "Shop starten",
        title: "Von der Idee zum ersten Verkauf in Minuten",
        body: "Starten Sie einen kompletten Online-Shop mit Produkten, Listings, Design und SEO – und verkaufen Sie ab dem ersten Moment.",
        extraYou: "1 Idee",
        extraAI: "Produkte, Listings, SEO",
      },
      monitor: {
        tabLabel: "Wettbewerber beobachten",
        title: "Einmal planen, automatisch ausführen",
        body: "Verfolgen Sie Preise, Produkte und Kampagnen der Konkurrenz per Zeitplan – und machen Sie jede Erkenntnis zur nutzbaren Strategie.",
        extraYou: "einmal einrichten",
        extraAI: "Preise, Produkte, Kampagnen",
      },
      source: {
        tabLabel: "Sourcing & Verhandlung",
        title: "Der richtige Lieferant zum richtigen Preis",
        body: "Finden Sie geprüfte Lieferanten, senden Sie Anfragen und verhandeln Sie per E-Mail – alles automatisch bis zum besten Deal.",
        extraYou: "0 Anrufe",
        extraAI: "geprüfte Lieferanten, Anfragen",
      },
      promote: {
        tabLabel: "Social-Marketing",
        title: "Posten, interagieren und wachsen – automatisch",
        body: "Erstellen Sie viralen Content, planen Sie Posts auf allen Plattformen, interagieren Sie mit Ihrer Community und messen Sie den Erfolg – Tag und Nacht.",
        extraYou: "einmal posten",
        extraAI: "Planung, Engagement, Analytics",
      },
      tools: {
        tabLabel: "Tools anpassen",
        title: "Eigene Business-Tools – ganz ohne Coding",
        body: "Beschreiben Sie einfach, was Sie brauchen – Kalkulatoren, Dashboards, Tracker oder Websites – und erhalten Sie sofort ein funktionierendes Tool, das mitwächst.",
        extraYou: "einmal beschreiben",
        extraAI: "Kalkulatoren, Dashboards, Tracker",
      },
      organize: {
        tabLabel: "Dateien organisieren",
        title: "Aus chaotischen Dokumenten klare Entscheidungen",
        body: "Laden Sie Angebote, Rechnungen, Berichte oder beliebige Dateien hoch – und sehen Sie alles in sauberen Tabellen und Diagrammen, bereit zum Vergleichen und Handeln.",
        extraYou: "Dateien hochladen",
        extraAI: "Tabellen, Charts, Insights",
      },
      analyze: {
        tabLabel: "Bestseller analysieren",
        title: "Ihren Markt mit einem Klick verstehen",
        body: "Marktdaten aus Jungle Scout, TikTok, Reddit, Alibaba.com und weiteren verifizierten Quellen – auf einen Klick.",
        extraYou: "1 Klick",
        extraAI: "Trends, Nachfrage, Rankings",
      },
    },
  },
  why: {
    heading: "Warum Accio Work?",
    aiTitle: "Eine KI für alles. Oder ein Team aus Spezialisten.",
    aiBody:
      "Ein allgemeiner Agent erledigt tägliche Aufgaben. Ergänzen Sie Spezialisten für Vertrieb, Sourcing und Design – jeder mit eigenem Wissen und Gedächtnis.",
    aiChannel: "#neuer-produkt-launch",
    connectTitle: "Einmal verbinden. Alles automatisieren.",
    connectBody:
      "Shopify, Gmail, Slack, LinkedIn und 50+ weitere – Setup in einem Klick. Keine Integrationsprojekte, keine Entwickler nötig.",
    dataTitle: "Ihre Daten. Ihre Kontrolle.",
    dataBody:
      "Sandboxed Execution. Sie genehmigen jede kritische Aktion. Datenhoheit auf der Infrastruktur von Alibaba.",
    platformTitle: "Eine Plattform. Analyse, Design, Automatisierung.",
    platformBody:
      "Sourcing-Reports, Konzept-Design, Landingpages, Wettbewerbsbeobachtung – Skill wählen, planen, vergessen.",
    agents: [
      { name: "Market Scout", msg: "EU-Nachfrage nach tragbaren Luftbefeuchtern ↑ 38% in 30 Tagen." },
      { name: "Sourcing-Experte", msg: "12 geprüfte Shenzhen-Lieferanten · MOQ 100+ · BSCI ✓" },
      { name: "Produktdesigner", msg: "3 Konzeptvarianten in Matt – bereit zur Prüfung." },
      { name: "Listing-Texter", msg: "SEO-Titel entworfen – prognostiziert +37% CTR." },
    ],
  },
  testimonials: {
    heading1: "Geliebt von",
    highlight: "10+ Millionen",
    heading2: "monatlich aktiven Nutzern",
    row1: [
      { name: "Joseph S.", role: "Global Sourcing Manager", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work verwandelt verstreute, uneinheitliche Lieferantenangebote im Handumdrehen in vergleichbare Daten. Es ist die **erste KI, die** die Komplexität des globalen Handels **wirklich versteht**." },
      { name: "Mia C.", role: "Wochenend-Gründerin", avatar: "https://i.pravatar.cc/80?img=47", text: "Ich hatte monatelang Produktideen gespeichert, aber keine Ahnung vom Sourcing oder Launch. Accio Work hat mich von Notizen zu **einem echten Produkt** gebracht." },
      { name: "Luna M.", role: "Dropshipping-Verkäuferin", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work scannt Reddit, TikTok und Amazon, um **Gewinner zu identifizieren** und direkt von Lieferanten zu beziehen. Das ultimative Tool für virale Trends." },
      { name: "Keshia B.", role: "Side-Hustlerin", avatar: "https://i.pravatar.cc/80?img=48", text: "Ich hatte nur Abende für meinen Shop. Toll, dass Accio Work Nischenanalysen und **Lieferanten-Follow-ups** automatisiert, während ich im Hauptjob bin." },
      { name: "Jay W.", role: "Streetwear-Brand-Inhaber", avatar: "https://i.pravatar.cc/80?img=15", text: "Accio Work **spart mir Wochen Produktionszeit** durch professionelle Tech-Packs und Auto-Verhandlung. Und meine Designs sind zu 100% sicher." },
    ],
    row2: [
      { name: "Nina K.", role: "Outdoor-Brand-Gründerin", avatar: "https://i.pravatar.cc/80?img=49", text: "Früher **10 Std./Woche** für Content-Freelancer. Heute automatisiert Accio Work alles von Content bis Publishing – nur **10 Min./Woche**." },
      { name: "Sara N.", role: "Nagelstudio-Managerin", avatar: "https://i.pravatar.cc/80?img=32", text: "Super einfach zu nutzen. Ich glaube, ich **verstehe endlich, wie KI** meinem Business hilft." },
      { name: "Clara E.", role: "Einkaufsspezialistin", avatar: "https://i.pravatar.cc/80?img=44", text: "Lieferantenrecherche fühlte sich immer wie eine Detailjagd an. Mit dem proaktiven Follow-up von Accio Work komme ich **schneller zur sauberen Shortlist**." },
      { name: "Andrew P.", role: "Hochzeits- & Event-Planer", avatar: "https://i.pravatar.cc/80?img=12", text: "Ich habe vielfältige Lieferanten zu viel besseren Preisen gefunden und Lieferungen perfekt mit Event-Terminen koordiniert. **Buchungen +30%** dank Accio Work." },
      { name: "Joan W.", role: "Supply-Chain-Beraterin", avatar: "https://i.pravatar.cc/80?img=5", text: "Anders als andere KIs nutzt Accio Work **echte Handelsdaten** von alibaba.com und Marktdaten wie Jungle Scout. Ein Muss für E-Commerce-Verkäufer." },
    ],
  },
  faq: {
    heading: "FAQ",
    readGuide: "Schnellstart-Anleitung lesen",
    items: [
      { q: "Wie unterscheidet sich Accio Work von einem normalen KI-Chat?", a: "Übliche Chat-Tools antworten nur mit Text. Accio Work ist eine ausführungsorientierte Agenten-Plattform, die lokale Dateien liest, Terminalbefehle ausführt, den Browser steuert und externe APIs aufruft. Es sagt nicht nur, was zu tun ist – es erledigt die Arbeit.", linkLabel: "Schnellstart-Anleitung lesen" },
      { q: "Welche LLMs werden unterstützt?", a: "Aktuell unterstützen wir Gemini, GPT-4o, Claude und Qwen. Sie können verschiedenen Agenten unterschiedliche Modelle zuweisen. Der Modellzugriff läuft über unser Gateway – ohne komplizierte API-Key-Verwaltung.", linkLabel: "Agenten-Fähigkeiten ansehen" },
      { q: "Was kann die Browser-Automatisierung?", a: "Accio Work steuert einen echten Browser über das Chrome DevTools Protocol. Agenten können im Web suchen, Seiten scrapen, Formulare ausfüllen, Screenshots machen und mehrstufige Workflows durchlaufen – freihändig. Browser-Zugriff ist sensibel und braucht explizite Erlaubnis.", linkLabel: "Agenten-Tools ansehen" },
      { q: "Kann ich Agenten automatisch nach Zeitplan ausführen?", a: "Ja. Die Automations-Funktion erlaubt cron-artige geplante Aufgaben – per natürlicher Sprache im Chat oder über die Automations-Seite. Zeitpläne laufen lokal, auch offline. Verpasste Läufe werden beim Neustart nachgeholt.", linkLabel: "Automatisierungs-Docs ansehen" },
      { q: "Wie verbinde ich einen Agenten mit Telegram oder DingTalk?", a: "Öffnen Sie die Channels-Seite im Client, wählen Sie die Plattform und folgen Sie der Anleitung zum Hinzufügen eines Bot-Tokens. Accio Work unterstützt Telegram, Discord, DingTalk, Lark (Feishu) und WeChat. Danach antwortet der Agent in Chats und nimmt Aufgaben automatisch entgegen.", linkLabel: "Unterstützte Kanäle ansehen" },
      { q: "Was sind Skills und wie erweitern sie Agenten?", a: "Skills sind Plugin-Pakete, die Agenten fachliche Fähigkeiten geben – Code-Review, Copywriting, SEO-Audit und mehr. Aus dem Marketplace installieren oder eigene erstellen. Accio Work unterstützt auch den Model Context Protocol (MCP)-Standard für externe Tool-Server.", linkLabel: "Skills-Verwaltung ansehen" },
      { q: "Welche Plattformen werden unterstützt?", a: "Accio Work ist für macOS (Apple Silicon und Intel) und Windows (x64) verfügbar. Es ist eine native Desktop-App mit Electron und vollem Zugriff auf lokale Systemressourcen." },
      { q: "Können mehrere Agenten an einer Aufgabe zusammenarbeiten?", a: "Ja. Die Teams-Funktion erlaubt Agentengruppen mit Team Lead und Mitgliedern. Der TL delegiert Teilaufgaben, koordiniert Arbeit im Gruppenchat und orchestriert Multi-Agenten-Workflows – ideal für komplexe Projekte mit spezialisierten Rollen.", linkLabel: "Agenten-Team-Docs ansehen" },
    ],
  },
  cta: {
    title: "Testen Sie Accio Work heute.",
    subtitle: "Erleben Sie die ultimative Arbeitsweise mit Accio Work.",
    download: "Für macOS herunterladen",
    ctaBadge: "Apple Silicon",
    quickStart: "Schnellstart",
    note: "Für macOS 11 oder neuer",
  },
  footer: {
    partneredWith: "In Partnerschaft mit",
    rights: "Alle Rechte vorbehalten.",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano" },
};

export const translations: Record<Lang, Dict> = { en, ru, de };