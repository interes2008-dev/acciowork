export type Lang = "en" | "ru" | "de" | "it" | "es" | "zh" | "pt";

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
  langNames: { en: string; ru: string; de: string; it: string; es: string; zh: string; pt: string };
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
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
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
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
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
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
};

const it: Dict = {
  nav: {
    pricing: "Prezzi",
    help: "Centro assistenza",
    events: "Eventi",
    language: "Italiano",
    download: "Scarica Accio Work",
    blog: "Blog",
  },
  hero: {
    brand: "Work",
    tagline: "Il tuo team di business con agenti AI, 24 ore su 24",
    pills: ["Nessuna curva di apprendimento", "Pensato per il business", "Sicurezza enterprise"],
    desc:
      "Automatizza il tuo business dall'inizio alla fine: ricerca e analisi, sourcing e negoziazione, marketing e vendite, operazioni e CRM, con un profitto reale.",
    cta: "Scarica per macOS",
    ctaBadge: "Apple Silicon",
    ctaNote: "Per macOS 11 o versione successiva",
  },
  business: {
    heading: "Costruito per ogni esigenza aziendale",
    tabs: {
      launch: {
        tabLabel: "Lancia il negozio",
        title: "Dall'idea alla prima vendita in pochi minuti",
        body: "Avvia un negozio online completo con prodotti, schede, design e SEO già pronti, e inizia a vendere dal primo momento.",
        extraYou: "1 idea",
        extraAI: "prodotti, schede, SEO",
      },
      monitor: {
        tabLabel: "Monitora i concorrenti",
        title: "Imposta una volta, funziona da solo",
        body: "Segui prezzi, prodotti e campagne dei concorrenti con attività pianificate e trasforma ogni scoperta in una strategia concreta.",
        extraYou: "imposta una volta",
        extraAI: "prezzi, prodotti, campagne",
      },
      source: {
        tabLabel: "Sourcing e trattativa",
        title: "Il fornitore giusto al prezzo giusto",
        body: "Trova fornitori verificati, invia richieste e negozia via email: tutto gestito per te fino al miglior accordo.",
        extraYou: "0 chiamate",
        extraAI: "fornitori verificati, richieste",
      },
      promote: {
        tabLabel: "Promuovi sui social",
        title: "Pubblica, coinvolgi e cresci in automatico",
        body: "Crea contenuti pronti per diventare virali, pianifica i post sulle piattaforme, interagisci con il pubblico e misura i risultati, giorno e notte.",
        extraYou: "pubblica una volta",
        extraAI: "pianificazione, engagement, analytics",
      },
      tools: {
        tabLabel: "Strumenti su misura",
        title: "Strumenti aziendali personalizzati, senza scrivere codice",
        body: "Descrivi ciò che ti serve, calcolatori, dashboard, tracker o siti, e ottieni uno strumento funzionante subito, che cresce con la tua attività.",
        extraYou: "descrivi una volta",
        extraAI: "calcolatori, dashboard, tracker",
      },
      organize: {
        tabLabel: "Organizza i file",
        title: "Trasforma documenti disordinati in decisioni chiare",
        body: "Carica preventivi, fatture, report o qualsiasi file e vedi tutto organizzato in tabelle e grafici puliti, pronti per essere confrontati in pochi secondi.",
        extraYou: "carica i file",
        extraAI: "tabelle, grafici, insight",
      },
      analyze: {
        tabLabel: "Analizza i bestseller",
        title: "Conosci il tuo mercato con un clic",
        body: "Ottieni analisi di mercato con dati da Jungle Scout, TikTok, Reddit, Alibaba.com e altre fonti verificate.",
        extraYou: "1 clic",
        extraAI: "trend, domanda, classifiche",
      },
    },
  },
  why: {
    heading: "Perché scegliere Accio Work?",
    aiTitle: "Un'unica AI per tutto. Oppure un team di specialisti.",
    aiBody:
      "Un agente generalista si occupa delle attività quotidiane. Aggiungi specialisti per vendite, sourcing e design: ognuno con la propria esperienza e memoria.",
    aiChannel: "#lancio-nuovo-prodotto",
    connectTitle: "Collega una volta. Automatizza tutto.",
    connectBody:
      "Shopify, Gmail, Slack, LinkedIn e altri 50+: configurazione in un clic. Nessun progetto di integrazione, nessun bisogno di sviluppatori.",
    dataTitle: "I tuoi dati. Il tuo controllo.",
    dataBody:
      "Esecuzione in sandbox. Approvi ogni azione critica. Sovranità dei dati garantita dall'infrastruttura di Alibaba.",
    platformTitle: "Un'unica piattaforma. Analisi, design, automazione.",
    platformBody:
      "Report di sourcing, concept design, landing page, monitoraggio dei concorrenti: scegli una skill, mettila a calendario, dimenticatene.",
    agents: [
      { name: "Market Scout", msg: "Domanda UE di umidificatori portatili ↑ 38% negli ultimi 30 giorni." },
      { name: "Esperto Sourcing", msg: "12 fornitori verificati da Shenzhen · MOQ 100+ · BSCI ✓" },
      { name: "Product Designer", msg: "3 varianti concept in finitura opaca, pronte per la revisione." },
      { name: "Copywriter listing", msg: "Titolo SEO redatto, CTR previsto +37%." },
    ],
  },
  testimonials: {
    heading1: "Amato da",
    highlight: "oltre 10 milioni",
    heading2: "di utenti attivi al mese",
    row1: [
      { name: "Joseph S.", role: "Global Sourcing Manager", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work trasforma rapidamente preventivi non standard e sparsi in dati confrontabili. È la **prima AI che capisce davvero** la complessità del commercio globale." },
      { name: "Mia C.", role: "Fondatrice nel weekend", avatar: "https://i.pravatar.cc/80?img=47", text: "Avevo idee di prodotto salvate da mesi, ma nessuna idea di come procurarle o lanciarle. Accio Work mi ha portato dagli appunti sparsi a **un prodotto vero da vendere**." },
      { name: "Luna M.", role: "Venditrice in dropshipping", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work scandaglia Reddit, TikTok e Amazon per **individuare i vincitori** e comprare direttamente dai fornitori. È lo strumento definitivo per anticipare i trend virali." },
      { name: "Keshia B.", role: "Side-hustler", avatar: "https://i.pravatar.cc/80?img=48", text: "Avevo solo le sere per il mio negozio. Adoro che Accio Work automatizzi l'analisi di nicchia e i **follow-up ai fornitori** mentre sono al lavoro principale." },
      { name: "Jay W.", role: "Fondatore brand streetwear", avatar: "https://i.pravatar.cc/80?img=15", text: "Accio Work mi **fa risparmiare settimane di produzione** grazie a tech pack professionali e trattative automatiche con i fornitori. E i miei design restano al 100% al sicuro." },
    ],
    row2: [
      { name: "Nina K.", role: "Fondatrice brand outdoor", avatar: "https://i.pravatar.cc/80?img=49", text: "Prima passavo **10 ore a settimana** a gestire freelancer per i contenuti, ora Accio Work automatizza tutto, dal contenuto alla pubblicazione, in soli **10 minuti a settimana**." },
      { name: "Sara N.", role: "Manager di un salone nail", avatar: "https://i.pravatar.cc/80?img=32", text: "Facilissimo da usare. Ho **finalmente capito come l'AI può aiutare** la mia attività." },
      { name: "Clara E.", role: "Specialist Acquisti", avatar: "https://i.pravatar.cc/80?img=44", text: "La ricerca fornitori era sempre una caccia ai dettagli mancanti. Con i follow-up proattivi di Accio Work arrivo a una **shortlist pulita più in fretta**." },
      { name: "Andrew P.", role: "Wedding & Event Planner", avatar: "https://i.pravatar.cc/80?img=12", text: "Questo strumento mi ha aiutato a trovare fornitori diversi a prezzi molto più bassi, coordinando alla perfezione le consegne con le date degli eventi. Le **prenotazioni sono cresciute del 30+%** grazie ad Accio Work." },
      { name: "Joan W.", role: "Consulente Supply Chain", avatar: "https://i.pravatar.cc/80?img=5", text: "A differenza di altre AI, Accio Work usa **dati commerciali reali** da alibaba.com e la market intelligence di Jungle Scout. Un must per chi vende in e-commerce." },
    ],
  },
  faq: {
    heading: "FAQ",
    readGuide: "Leggi la guida rapida",
    items: [
      { q: "In cosa Accio Work è diverso da un normale chatbot AI?", a: "I classici strumenti di chat rispondono solo con testo. Accio Work è una piattaforma di agenti orientata all'esecuzione: legge file locali, esegue comandi da terminale, controlla il browser e chiama API esterne. Non ti dice solo cosa fare, ti aiuta a farlo davvero.", linkLabel: "Leggi la guida rapida" },
      { q: "Quali LLM sono supportati?", a: "Attualmente supportiamo Gemini, GPT-4o, Claude e Qwen. Puoi assegnare modelli diversi ad agenti diversi. L'accesso ai modelli passa dal nostro gateway, così non devi gestire configurazioni complicate di chiavi API.", linkLabel: "Vedi le capacità degli agenti" },
      { q: "Cosa può fare l'automazione del browser?", a: "Accio Work controlla un vero browser tramite Chrome DevTools Protocol. Gli agenti possono cercare sul web, estrarre pagine, compilare form, catturare screenshot e completare flussi multi-step, senza le tue mani. L'accesso al browser è una capacità sensibile e richiede autorizzazione esplicita.", linkLabel: "Vedi gli strumenti degli agenti" },
      { q: "Posso pianificare l'esecuzione automatica degli agenti?", a: "Sì. La funzione Automations permette di creare task pianificati in stile cron, descritti in linguaggio naturale in chat o configurati dalla pagina Automations. Le pianificazioni girano in locale, quindi funzionano anche offline. Le esecuzioni saltate vengono recuperate al riavvio.", linkLabel: "Vedi la documentazione automazioni" },
      { q: "Come collego un agente a Telegram o DingTalk?", a: "Apri la pagina Channels nel client, scegli la piattaforma e segui la guida per aggiungere un bot token. Accio Work supporta Telegram, Discord, DingTalk, Lark (Feishu) e WeChat. Una volta collegato, l'agente risponde in chat o riceve task in automatico.", linkLabel: "Vedi i canali supportati" },
      { q: "Cosa sono le Skill e come estendono gli agenti?", a: "Le Skill sono pacchetti plugin che danno agli agenti capacità specifiche di dominio: code review, copywriting, SEO audit e altro. Puoi installarle dal marketplace o crearne di tue. Accio Work supporta anche lo standard Model Context Protocol (MCP) per integrare server di strumenti esterni.", linkLabel: "Vedi la gestione delle skill" },
      { q: "Quali piattaforme sono supportate?", a: "Accio Work è disponibile per macOS (Apple Silicon e Intel) e Windows (x64). È un'app desktop nativa costruita con Electron, con pieno accesso alle risorse locali di sistema." },
      { q: "Più agenti possono collaborare a un task?", a: "Sì. La funzione Teams consente di creare gruppi di agenti con un Team Lead e agenti membri. Il TL delega sotto-task, coordina il lavoro tramite chat di gruppo e orchestra flussi multi-agente, utile per progetti complessi con ruoli specializzati.", linkLabel: "Vedi la documentazione team" },
    ],
  },
  cta: {
    title: "Prova Accio Work oggi.",
    subtitle: "Vivi l'esperienza di lavoro definitiva con Accio Work.",
    download: "Scarica per macOS",
    ctaBadge: "Apple Silicon",
    quickStart: "Avvio rapido",
    note: "Per macOS 11 o versione successiva",
  },
  footer: {
    partneredWith: "In partnership con",
    rights: "Tutti i diritti riservati.",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
};

const es: Dict = {
  nav: {
    pricing: "Precios",
    help: "Centro de ayuda",
    events: "Eventos",
    language: "Español",
    download: "Descargar Accio Work",
    blog: "Blog",
  },
  hero: {
    brand: "Work",
    tagline: "Tu equipo de negocio con agentes de IA, 24 horas al día",
    pills: ["Sin curva de aprendizaje", "Pensado para el negocio", "Seguridad enterprise"],
    desc:
      "Automatiza tu negocio de principio a fin: investigación y análisis, sourcing y negociación, marketing y ventas, operaciones y CRM, con beneficios reales.",
    cta: "Descargar para macOS",
    ctaBadge: "Apple Silicon",
    ctaNote: "Para macOS 11 o versión superior",
  },
  business: {
    heading: "Hecho para cada necesidad de tu negocio",
    tabs: {
      launch: {
        tabLabel: "Lanzar tienda",
        title: "De la idea a la primera venta en minutos",
        body: "Pon en marcha una tienda online completa con productos, fichas, diseño y SEO listos, y empieza a vender desde el primer momento.",
        extraYou: "1 idea",
        extraAI: "productos, fichas, SEO",
      },
      monitor: {
        tabLabel: "Vigilar competidores",
        title: "Configúralo una vez, corre solo",
        body: "Sigue precios, productos y campañas de la competencia con tareas programadas y convierte cada hallazgo en una estrategia concreta.",
        extraYou: "configura una vez",
        extraAI: "precios, productos, campañas",
      },
      source: {
        tabLabel: "Sourcing y negociación",
        title: "El proveedor correcto al precio correcto",
        body: "Encuentra proveedores verificados, envía solicitudes y negocia por correo: todo gestionado por ti hasta el mejor acuerdo.",
        extraYou: "0 llamadas",
        extraAI: "proveedores verificados, solicitudes",
      },
      promote: {
        tabLabel: "Redes sociales",
        title: "Publica, interactúa y crece en automático",
        body: "Crea contenido con potencial viral, programa publicaciones en todas las plataformas, interactúa con tu comunidad y mide resultados, día y noche.",
        extraYou: "publica una vez",
        extraAI: "planificación, engagement, analítica",
      },
      tools: {
        tabLabel: "Herramientas a medida",
        title: "Herramientas para tu negocio sin escribir código",
        body: "Describe lo que necesitas, calculadoras, dashboards, trackers o sitios, y obtén al momento una herramienta que funciona y crece contigo.",
        extraYou: "descríbelo una vez",
        extraAI: "calculadoras, dashboards, trackers",
      },
      organize: {
        tabLabel: "Organizar archivos",
        title: "De documentos caóticos a decisiones claras",
        body: "Sube presupuestos, facturas, informes o cualquier archivo y verás todo ordenado en tablas y gráficos limpios, listos para comparar en segundos.",
        extraYou: "sube archivos",
        extraAI: "tablas, gráficos, insights",
      },
      analyze: {
        tabLabel: "Analizar bestsellers",
        title: "Entiende tu mercado con un clic",
        body: "Obtén análisis de mercado con datos de Jungle Scout, TikTok, Reddit, Alibaba.com y otras fuentes verificadas.",
        extraYou: "1 clic",
        extraAI: "tendencias, demanda, rankings",
      },
    },
  },
  why: {
    heading: "¿Por qué elegir Accio Work?",
    aiTitle: "Una sola IA para todo. O un equipo de especialistas.",
    aiBody:
      "Un agente generalista se ocupa de las tareas del día a día. Añade especialistas en ventas, sourcing y diseño: cada uno con su propia experiencia y memoria.",
    aiChannel: "#lanzamiento-nuevo-producto",
    connectTitle: "Conéctalo una vez. Automatízalo todo.",
    connectBody:
      "Shopify, Gmail, Slack, LinkedIn y más de 50 servicios: configuración en un clic. Sin proyectos de integración ni desarrolladores.",
    dataTitle: "Tus datos. Tu control.",
    dataBody:
      "Ejecución en sandbox. Tú apruebas cada acción crítica. Soberanía de datos sobre la infraestructura de Alibaba.",
    platformTitle: "Una plataforma. Análisis, diseño, automatización.",
    platformBody:
      "Informes de sourcing, concept design, landing pages, vigilancia de competidores: elige una skill, prográmala, olvídate.",
    agents: [
      { name: "Market Scout", msg: "Demanda UE de humidificadores portátiles ↑ 38% en 30 días." },
      { name: "Experto en Sourcing", msg: "12 proveedores verificados de Shenzhen · MOQ 100+ · BSCI ✓" },
      { name: "Product Designer", msg: "3 conceptos en acabado mate, listos para revisión." },
      { name: "Copywriter de fichas", msg: "Título SEO redactado, CTR previsto +37%." },
    ],
  },
  testimonials: {
    heading1: "Con el cariño de",
    highlight: "más de 10 millones",
    heading2: "de usuarios activos al mes",
    row1: [
      { name: "Joseph S.", role: "Global Sourcing Manager", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work convierte al instante presupuestos dispersos y sin estándar en datos comparables. Es la **primera IA que entiende de verdad** la complejidad del comercio global." },
      { name: "Mia C.", role: "Fundadora los fines de semana", avatar: "https://i.pravatar.cc/80?img=47", text: "Tenía ideas de producto guardadas desde hace meses, pero ni idea de dónde comprar ni cómo lanzar. Accio Work me llevó de los apuntes a **un producto real que vender**." },
      { name: "Luna M.", role: "Vendedora dropshipping", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work rastrea Reddit, TikTok y Amazon para **identificar los ganadores** y comprar directo al proveedor. La herramienta definitiva para adelantarse a los trends virales." },
      { name: "Keshia B.", role: "Side-hustler", avatar: "https://i.pravatar.cc/80?img=48", text: "Solo tenía las noches para mi tienda. Me encanta que Accio Work automatice el análisis de nicho y los **follow-ups a proveedores** mientras estoy en mi trabajo principal." },
      { name: "Jay W.", role: "Fundador marca streetwear", avatar: "https://i.pravatar.cc/80?img=15", text: "Accio Work me **ahorra semanas de producción** con tech packs profesionales y negociación automática. Y mis diseños quedan 100% a salvo." },
    ],
    row2: [
      { name: "Nina K.", role: "Fundadora marca outdoor", avatar: "https://i.pravatar.cc/80?img=49", text: "Antes pasaba **10 horas a la semana** gestionando freelancers de contenido. Ahora Accio Work automatiza todo, del contenido a la publicación, en solo **10 minutos a la semana**." },
      { name: "Sara N.", role: "Manager de un salón de uñas", avatar: "https://i.pravatar.cc/80?img=32", text: "Muy fácil de usar. Creo que **por fin entiendo cómo la IA** ayuda a mi negocio." },
      { name: "Clara E.", role: "Especialista de Compras", avatar: "https://i.pravatar.cc/80?img=44", text: "La búsqueda de proveedores siempre era una caza de detalles perdidos. Con los follow-ups proactivos de Accio Work llego a una **shortlist limpia mucho antes**." },
      { name: "Andrew P.", role: "Wedding & Event Planner", avatar: "https://i.pravatar.cc/80?img=12", text: "Esta herramienta me ayudó a encontrar proveedores muy variados a precios mucho mejores y a coordinar entregas justo con las fechas del evento. Las **reservas crecieron un 30%** gracias a Accio Work." },
      { name: "Joan W.", role: "Consultora Supply Chain", avatar: "https://i.pravatar.cc/80?img=5", text: "A diferencia de otras IA, Accio Work usa **datos comerciales reales** de alibaba.com y la inteligencia de mercado de Jungle Scout. Imprescindible para vendedores e-commerce." },
    ],
  },
  faq: {
    heading: "FAQ",
    readGuide: "Leer la guía rápida",
    items: [
      { q: "¿En qué se diferencia Accio Work de un chatbot de IA cualquiera?", a: "Las herramientas de chat corrientes solo responden con texto. Accio Work es una plataforma de agentes orientada a la ejecución: lee archivos locales, ejecuta comandos de terminal, controla el navegador y llama a APIs externas. No solo te dice qué hacer, hace el trabajo.", linkLabel: "Leer la guía rápida" },
      { q: "¿Qué LLM están soportados?", a: "Actualmente soportamos Gemini, GPT-4o, Claude y Qwen. Puedes asignar modelos distintos a agentes distintos. El acceso a los modelos pasa por nuestro gateway, así te olvidas de configurar claves API complicadas.", linkLabel: "Ver capacidades de los agentes" },
      { q: "¿Qué puede hacer la automatización del navegador?", a: "Accio Work controla un navegador real vía Chrome DevTools Protocol. Los agentes pueden buscar en la web, extraer páginas, rellenar formularios, capturar screenshots y completar flujos de varios pasos sin tus manos. El acceso al navegador es una capacidad sensible y requiere autorización explícita.", linkLabel: "Ver herramientas de los agentes" },
      { q: "¿Puedo programar la ejecución automática de los agentes?", a: "Sí. La función Automations permite crear tareas programadas al estilo cron, descritas en lenguaje natural en el chat o configuradas desde la página Automations. Las planificaciones corren en local, así que funcionan incluso sin conexión. Las ejecuciones perdidas se recuperan al reiniciar.", linkLabel: "Ver la documentación de automatizaciones" },
      { q: "¿Cómo conecto un agente con Telegram o DingTalk?", a: "Abre la página Channels en el cliente, elige la plataforma y sigue la guía para añadir un token de bot. Accio Work soporta Telegram, Discord, DingTalk, Lark (Feishu) y WeChat. Una vez conectado, el agente responde en los chats o recibe tareas de forma automática.", linkLabel: "Ver los canales soportados" },
      { q: "¿Qué son las Skills y cómo amplían a los agentes?", a: "Las Skills son paquetes plugin que dan a los agentes capacidades de dominio específicas: revisión de código, copywriting, auditoría SEO y más. Puedes instalarlas desde el marketplace o crear las tuyas. Accio Work también soporta el estándar Model Context Protocol (MCP) para integrar servidores de herramientas externas.", linkLabel: "Ver la gestión de skills" },
      { q: "¿Qué plataformas están soportadas?", a: "Accio Work está disponible para macOS (Apple Silicon e Intel) y Windows (x64). Es una app de escritorio nativa hecha con Electron, con acceso completo a los recursos locales del sistema." },
      { q: "¿Pueden varios agentes colaborar en una tarea?", a: "Sí. La función Teams permite crear grupos de agentes con un Team Lead y agentes miembros. El TL delega subtareas, coordina el trabajo por chat de grupo y orquesta flujos multi-agente, ideal para proyectos complejos con roles especializados.", linkLabel: "Ver la documentación de equipos" },
    ],
  },
  cta: {
    title: "Prueba Accio Work hoy.",
    subtitle: "Vive la experiencia de trabajo definitiva con Accio Work.",
    download: "Descargar para macOS",
    ctaBadge: "Apple Silicon",
    quickStart: "Inicio rápido",
    note: "Para macOS 11 o versión superior",
  },
  footer: {
    partneredWith: "En colaboración con",
    rights: "Todos los derechos reservados.",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
};

const zh: Dict = {
  nav: {
    pricing: "价格",
    help: "帮助中心",
    events: "活动",
    language: "中文",
    download: "下载 Accio Work",
    blog: "博客",
  },
  hero: {
    brand: "Work",
    tagline: "全天候的 AI 智能体业务团队",
    pills: ["零学习成本", "为业务而生", "企业级安全"],
    desc:
      "端到端自动化你的业务：市场研究与分析、供应商采购与谈判、营销与销售、运营与 CRM，带来真实收益。",
    cta: "下载 macOS 版",
    ctaBadge: "Apple Silicon",
    ctaNote: "适用于 macOS 11 及以上版本",
  },
  business: {
    heading: "满足业务的每一个需求",
    tabs: {
      launch: {
        tabLabel: "开店",
        title: "从灵感到第一单，几分钟搞定",
        body: "一键搭建完整的在线店铺，商品、详情、设计与 SEO 开箱即用，上线即可开卖。",
        extraYou: "1 个想法",
        extraAI: "商品、详情、SEO",
      },
      monitor: {
        tabLabel: "监控竞品",
        title: "配置一次，自动运行",
        body: "用定时任务追踪竞品的价格、商品与投放，把每一条洞察都变成可落地的策略。",
        extraYou: "设一次",
        extraAI: "价格、商品、投放",
      },
      source: {
        tabLabel: "采购与谈判",
        title: "以合适的价格找到合适的供应商",
        body: "发现已验证的供应商、发送询盘、邮件谈判，全部由 AI 代劳，直到拿到最好的报价。",
        extraYou: "0 次通话",
        extraAI: "已验证的供应商、询盘",
      },
      promote: {
        tabLabel: "社媒推广",
        title: "发布、互动、增长，全自动进行",
        body: "生成有传播力的内容，跨平台排期发布，与用户互动并跟踪效果，7×24 小时不停歇。",
        extraYou: "发一次",
        extraAI: "排期、互动、数据",
      },
      tools: {
        tabLabel: "自定义工具",
        title: "无需写代码的业务工具",
        body: "只需描述你需要什么——计算器、看板、追踪器或网页——立即生成一款可用工具，并随业务不断进化。",
        extraYou: "描述一次",
        extraAI: "计算器、看板、追踪器",
      },
      organize: {
        tabLabel: "整理文件",
        title: "把杂乱的文档变成清晰的决策",
        body: "上传报价、发票、报告或任意文件，一切自动整理成清爽的表格与图表，几秒内就能对比与决策。",
        extraYou: "上传文件",
        extraAI: "表格、图表、洞察",
      },
      analyze: {
        tabLabel: "分析爆款",
        title: "一键读懂你的市场",
        body: "整合 Jungle Scout、TikTok、Reddit、Alibaba.com 等权威数据源，一键获取市场洞察。",
        extraYou: "1 次点击",
        extraAI: "趋势、需求、排行",
      },
    },
  },
  why: {
    heading: "为什么选择 Accio Work？",
    aiTitle: "一个通用 AI，或一整支专家团队。",
    aiBody:
      "通用智能体处理日常琐事，再加上销售、采购、设计等专家智能体，每个都有自己的专业与记忆。",
    aiChannel: "#新品上线",
    connectTitle: "连一次，剩下的都自动化。",
    connectBody:
      "Shopify、Gmail、Slack、LinkedIn，以及 50+ 服务，一键接入，无需集成项目，也无需开发者。",
    dataTitle: "你的数据，你说了算。",
    dataBody:
      "沙箱化执行，每一次关键操作都由你亲自审批，数据主权由阿里巴巴的基础设施保障。",
    platformTitle: "一个平台，覆盖分析、设计与自动化。",
    platformBody:
      "采购报告、概念设计、落地页、竞品监控，选一项技能、设个时间，剩下的交给它。",
    agents: [
      { name: "Market Scout", msg: "欧盟便携加湿器需求近 30 天上升 38%。" },
      { name: "Sourcing Expert", msg: "获取 12 家已验证深圳供应商 · MOQ 100+ · BSCI ✓" },
      { name: "Product Designer", msg: "3 款哑光质感概念方案，随时可以评审。" },
      { name: "Listing Copywriter", msg: "SEO 标题已拟好，预计点击率 +37%。" },
    ],
  },
  testimonials: {
    heading1: "深受",
    highlight: "1000 万+",
    heading2: "月活用户喜爱",
    row1: [
      { name: "Joseph S.", role: "全球采购经理", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work 能迅速把零散、不规范的供应商报价整理为可比数据，是**第一个真正理解**全球贸易复杂度的 AI。" },
      { name: "Mia C.", role: "周末创业者", avatar: "https://i.pravatar.cc/80?img=47", text: "我攒了好几个月的产品灵感，却不知道怎么找货怎么开卖。Accio Work 把它们从零散笔记推到了**真正可以卖的产品**。" },
      { name: "Luna M.", role: "Dropshipping 卖家", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work 会扫描 Reddit、TikTok 和 Amazon,**精准锁定爆款**并直接对接供应商,是抢在潮流之前的利器。" },
      { name: "Keshia B.", role: "副业玩家", avatar: "https://i.pravatar.cc/80?img=48", text: "我只有晚上能顾店。Accio Work 能在我上班时自动做细分市场分析和**供应商跟进**,简直救命。" },
      { name: "Jay W.", role: "潮牌主理人", avatar: "https://i.pravatar.cc/80?img=15", text: "凭借专业工艺包生成和供应商自动谈判,Accio Work 让我的生产周期**缩短了几周**,更重要的是设计安全性 100%。" },
    ],
    row2: [
      { name: "Nina K.", role: "户外品牌创始人", avatar: "https://i.pravatar.cc/80?img=49", text: "我以前每周花**10 小时**盯内容外包,现在 Accio Work 把内容到发布全流程自动化,每周只需**10 分钟**。" },
      { name: "Sara N.", role: "美甲店店长", avatar: "https://i.pravatar.cc/80?img=32", text: "非常好上手。我总算**明白 AI 能怎样帮**我的生意了。" },
      { name: "Clara E.", role: "采购专员", avatar: "https://i.pravatar.cc/80?img=44", text: "以前找供应商总感觉在追失联的细节,现在靠 Accio Work 的主动跟进,能**更快拿到干净的候选名单**。" },
      { name: "Andrew P.", role: "婚礼与活动策划", avatar: "https://i.pravatar.cc/80?img=12", text: "这个工具帮我找到了更多元的供应商、拿到了更低的价格,还能把交付时间与活动日期完美对齐。多亏 Accio Work,我的**订单增长了 30% 以上**。" },
      { name: "Joan W.", role: "供应链顾问", avatar: "https://i.pravatar.cc/80?img=5", text: "与其他 AI 不同,Accio Work 用的是 alibaba.com 的**真实贸易数据**和 Jungle Scout 的市场情报,电商卖家必备。" },
    ],
  },
  faq: {
    heading: "常见问题",
    readGuide: "阅读快速上手指南",
    items: [
      { q: "Accio Work 与普通 AI 聊天工具有什么不同?", a: "普通聊天工具只会回复文字,而 Accio Work 是面向执行的智能体平台,能读取本地文件、执行命令行、控制浏览器并调用外部 API。它不只告诉你怎么做,而是帮你把工作做完。", linkLabel: "阅读快速上手指南" },
      { q: "支持哪些大模型?", a: "目前支持 Gemini、GPT-4o、Claude 与 Qwen,可以为不同智能体分配不同模型。所有模型调用都通过我们的网关,不需要你去折腾复杂的 API Key。", linkLabel: "查看智能体能力" },
      { q: "浏览器自动化能做什么?", a: "Accio Work 通过 Chrome DevTools Protocol 控制真实浏览器,智能体可以搜索网页、抓取内容、填写表单、截图并完成多步骤流程,全程无需你动手。浏览器访问被视为敏感能力,需要你显式授权。", linkLabel: "查看智能体工具" },
      { q: "可以让智能体按计划自动运行吗?", a: "可以。Automations 功能支持创建类 cron 的定时任务,既可以在聊天中用自然语言描述,也可以在 Automations 页面配置。计划任务在本地运行,离线也能执行,漏跑的任务在重启后会自动补齐。", linkLabel: "查看自动化文档" },
      { q: "如何把智能体接入 Telegram 或钉钉?", a: "在客户端打开 Channels 页面,选择所需平台并按引导添加 Bot Token。Accio Work 支持 Telegram、Discord、钉钉、飞书与微信。连接后智能体可以在聊天中回复消息或自动接收任务。", linkLabel: "查看支持的渠道" },
      { q: "Skills 是什么,如何扩展智能体?", a: "Skills 是插件包,可为智能体加上领域能力,例如代码审查、文案写作、SEO 审计等。你可以从市场安装,也可以自建。Accio Work 同时支持 MCP(Model Context Protocol)标准,便于接入外部工具服务。", linkLabel: "查看 Skills 管理" },
      { q: "支持哪些平台?", a: "Accio Work 支持 macOS(Apple Silicon 与 Intel)和 Windows(x64),是基于 Electron 的原生桌面应用,可完整访问本地系统资源。" },
      { q: "多个智能体可以协同完成任务吗?", a: "可以。Teams 功能允许你组建带 Team Lead 的智能体小组,TL 会拆解子任务、通过群聊协调工作、编排多智能体流程,适合需要角色分工的复杂项目。", linkLabel: "查看智能体团队文档" },
    ],
  },
  cta: {
    title: "今天就试试 Accio Work。",
    subtitle: "用 Accio Work 感受更好的工作方式。",
    download: "下载 macOS 版",
    ctaBadge: "Apple Silicon",
    quickStart: "快速开始",
    note: "适用于 macOS 11 及以上版本",
  },
  footer: {
    partneredWith: "合作伙伴",
    rights: "版权所有。",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
};


const pt: Dict = {
  nav: {
    pricing: "Preços",
    help: "Central de ajuda",
    events: "Eventos",
    language: "Português",
    download: "Baixar Accio Work",
    blog: "Blog",
  },
  hero: {
    brand: "Work",
    tagline: "Seu time de negócios com agentes de IA, 24 horas por dia",
    pills: ["Sem curva de aprendizado", "Feito para o negócio", "Segurança enterprise"],
    desc:
      "Automatize seu negócio de ponta a ponta: pesquisa e análise, sourcing e negociação, marketing e vendas, operações e CRM, com resultados reais.",
    cta: "Baixar para macOS",
    ctaBadge: "Apple Silicon",
    ctaNote: "Para macOS 11 ou versão superior",
  },
  business: {
    heading: "Feito para cada necessidade do seu negócio",
    tabs: {
      launch: {
        tabLabel: "Abrir loja",
        title: "Da ideia à primeira venda em minutos",
        body: "Coloque no ar uma loja online completa, com produtos, fichas, design e SEO prontos para vender desde o primeiro momento.",
        extraYou: "1 ideia",
        extraAI: "produtos, fichas, SEO",
      },
      monitor: {
        tabLabel: "Monitorar concorrentes",
        title: "Configure uma vez, roda sozinho",
        body: "Acompanhe preços, produtos e campanhas dos concorrentes com tarefas agendadas e transforme cada achado em uma estratégia concreta.",
        extraYou: "configure uma vez",
        extraAI: "preços, produtos, campanhas",
      },
      source: {
        tabLabel: "Sourcing e negociação",
        title: "O fornecedor certo no preço certo",
        body: "Encontre fornecedores verificados, envie cotações e negocie por e-mail: tudo conduzido por você até fechar o melhor acordo.",
        extraYou: "0 ligações",
        extraAI: "fornecedores verificados, cotações",
      },
      promote: {
        tabLabel: "Redes sociais",
        title: "Publique, interaja e cresça no automático",
        body: "Crie conteúdo com potencial viral, agende posts em todas as plataformas, interaja com a comunidade e meça resultados, dia e noite.",
        extraYou: "publica uma vez",
        extraAI: "agenda, engajamento, analytics",
      },
      tools: {
        tabLabel: "Ferramentas sob medida",
        title: "Ferramentas para seu negócio sem escrever código",
        body: "Descreva o que precisa: calculadoras, dashboards, trackers ou sites, e receba na hora uma ferramenta que funciona e cresce com você.",
        extraYou: "descreva uma vez",
        extraAI: "calculadoras, dashboards, trackers",
      },
      organize: {
        tabLabel: "Organizar arquivos",
        title: "De documentos caóticos a decisões claras",
        body: "Suba orçamentos, notas, relatórios ou qualquer arquivo e veja tudo organizado em tabelas e gráficos limpos, prontos para comparar em segundos.",
        extraYou: "suba arquivos",
        extraAI: "tabelas, gráficos, insights",
      },
      analyze: {
        tabLabel: "Analisar bestsellers",
        title: "Entenda seu mercado em um clique",
        body: "Receba análises de mercado com dados de Jungle Scout, TikTok, Reddit, Alibaba.com e outras fontes verificadas.",
        extraYou: "1 clique",
        extraAI: "tendências, demanda, rankings",
      },
    },
  },
  why: {
    heading: "Por que escolher a Accio Work?",
    aiTitle: "Uma IA para tudo. Ou um time de especialistas.",
    aiBody:
      "Um agente generalista cuida das tarefas do dia a dia. Some especialistas em vendas, sourcing e design: cada um com sua expertise e memória.",
    aiChannel: "#lancamento-novo-produto",
    connectTitle: "Conecte uma vez. Automatize tudo.",
    connectBody:
      "Shopify, Gmail, Slack, LinkedIn e mais de 50 serviços: configuração em um clique. Sem projetos de integração nem devs.",
    dataTitle: "Seus dados. Seu controle.",
    dataBody:
      "Execução em sandbox. Você aprova cada ação crítica. Soberania de dados sobre a infraestrutura da Alibaba.",
    platformTitle: "Uma plataforma. Análise, design, automação.",
    platformBody:
      "Relatórios de sourcing, concept design, landing pages, vigilância de concorrentes: escolha uma skill, agende, esqueça.",
    agents: [
      { name: "Market Scout", msg: "Demanda UE de umidificadores portáteis ↑ 38% em 30 dias." },
      { name: "Especialista em Sourcing", msg: "12 fornecedores verificados de Shenzhen · MOQ 100+ · BSCI ✓" },
      { name: "Product Designer", msg: "3 conceitos em acabamento fosco, prontos para revisão." },
      { name: "Copywriter de Fichas", msg: "Título SEO redigido, CTR previsto +37%." },
    ],
  },
  testimonials: {
    heading1: "Amado por",
    highlight: "mais de 10 milhões",
    heading2: "de usuários ativos por mês",
    row1: [
      { name: "Joseph S.", role: "Global Sourcing Manager", avatar: "https://i.pravatar.cc/80?img=13", text: "Accio Work transforma cotações dispersas e sem padrão em dados comparáveis na hora. É a **primeira IA que entende de verdade** a complexidade do comércio global." },
      { name: "Mia C.", role: "Fundadora nos fins de semana", avatar: "https://i.pravatar.cc/80?img=47", text: "Eu tinha ideias de produto guardadas há meses, mas nenhuma ideia de onde comprar ou como lançar. Accio Work me levou das anotações a **um produto real para vender**." },
      { name: "Luna M.", role: "Vendedora dropshipping", avatar: "https://i.pravatar.cc/80?img=45", text: "Accio Work vasculha Reddit, TikTok e Amazon para **identificar os vencedores** e comprar direto do fornecedor. A ferramenta definitiva para se antecipar aos trends virais." },
      { name: "Keshia B.", role: "Side-hustler", avatar: "https://i.pravatar.cc/80?img=48", text: "Só sobrava a noite para a minha loja. Adoro que a Accio Work automatize a análise de nicho e os **follow-ups com fornecedores** enquanto estou no trabalho principal." },
      { name: "Jay W.", role: "Fundador de marca streetwear", avatar: "https://i.pravatar.cc/80?img=15", text: "Accio Work me **economiza semanas de produção** com tech packs profissionais e negociação automática. E meus designs ficam 100% seguros." },
    ],
    row2: [
      { name: "Nina K.", role: "Fundadora de marca outdoor", avatar: "https://i.pravatar.cc/80?img=49", text: "Antes eu gastava **10 horas por semana** gerenciando freelancers de conteúdo. Agora Accio Work automatiza tudo, do conteúdo à publicação, em só **10 minutos por semana**." },
      { name: "Sara N.", role: "Gerente de salão de unhas", avatar: "https://i.pravatar.cc/80?img=32", text: "Muito fácil de usar. Acho que **finalmente entendi como a IA** ajuda o meu negócio." },
      { name: "Clara E.", role: "Especialista de Compras", avatar: "https://i.pravatar.cc/80?img=44", text: "A busca por fornecedores sempre foi uma caça a detalhes perdidos. Com os follow-ups proativos da Accio Work chego a uma **shortlist limpa muito antes**." },
      { name: "Andrew P.", role: "Wedding & Event Planner", avatar: "https://i.pravatar.cc/80?img=12", text: "Esta ferramenta me ajudou a encontrar fornecedores bem variados a preços bem melhores e a coordenar entregas certinho com as datas do evento. As **reservas cresceram 30%** graças à Accio Work." },
      { name: "Joan W.", role: "Consultora Supply Chain", avatar: "https://i.pravatar.cc/80?img=5", text: "Diferente de outras IAs, a Accio Work usa **dados comerciais reais** do alibaba.com e a inteligência de mercado da Jungle Scout. Indispensável para vendedores de e-commerce." },
    ],
  },
  faq: {
    heading: "FAQ",
    readGuide: "Ler o guia rápido",
    items: [
      { q: "O que diferencia a Accio Work de um chatbot de IA qualquer?", a: "Ferramentas de chat comuns só respondem com texto. Accio Work é uma plataforma de agentes orientada à execução: lê arquivos locais, roda comandos no terminal, controla o navegador e chama APIs externas. Ela não só diz o que fazer, faz o trabalho.", linkLabel: "Ler o guia rápido" },
      { q: "Quais LLMs são suportados?", a: "Hoje suportamos Gemini, GPT-4o, Claude e Qwen. Você pode atribuir modelos diferentes a agentes diferentes. O acesso aos modelos passa pelo nosso gateway, então esqueça a configuração de chaves de API complicadas.", linkLabel: "Ver capacidades dos agentes" },
      { q: "O que a automação de navegador pode fazer?", a: "Accio Work controla um navegador real via Chrome DevTools Protocol. Os agentes podem pesquisar na web, extrair páginas, preencher formulários, tirar screenshots e completar fluxos de várias etapas sem as suas mãos. O acesso ao navegador é uma capacidade sensível e exige autorização explícita.", linkLabel: "Ver ferramentas dos agentes" },
      { q: "Posso agendar a execução automática dos agentes?", a: "Sim. O recurso Automations permite criar tarefas agendadas estilo cron, descritas em linguagem natural no chat ou configuradas na página Automations. As agendas rodam localmente, então funcionam mesmo sem conexão. Execuções perdidas são recuperadas ao reiniciar.", linkLabel: "Ver a documentação de automações" },
      { q: "Como conecto um agente ao Telegram ou DingTalk?", a: "Abra a página Channels no cliente, escolha a plataforma e siga o guia para adicionar um token de bot. Accio Work suporta Telegram, Discord, DingTalk, Lark (Feishu) e WeChat. Uma vez conectado, o agente responde nos chats ou recebe tarefas automaticamente.", linkLabel: "Ver os canais suportados" },
      { q: "O que são Skills e como ampliam os agentes?", a: "Skills são pacotes plugin que dão aos agentes capacidades de domínio específicas: revisão de código, copywriting, auditoria de SEO e mais. Você pode instalar do marketplace ou criar as suas. Accio Work também suporta o padrão Model Context Protocol (MCP) para integrar servidores de ferramentas externas.", linkLabel: "Ver a gestão de skills" },
      { q: "Quais plataformas são suportadas?", a: "Accio Work está disponível para macOS (Apple Silicon e Intel) e Windows (x64). É um app desktop nativo feito com Electron, com acesso completo aos recursos locais do sistema." },
      { q: "Vários agentes podem colaborar em uma tarefa?", a: "Sim. O recurso Teams permite criar grupos de agentes com um Team Lead e agentes membros. O TL delega subtarefas, coordena o trabalho no chat de grupo e orquestra fluxos multi-agente, ideal para projetos complexos com papéis especializados.", linkLabel: "Ver a documentação de times" },
    ],
  },
  cta: {
    title: "Experimente a Accio Work hoje.",
    subtitle: "Viva a experiência de trabalho definitiva com a Accio Work.",
    download: "Baixar para macOS",
    ctaBadge: "Apple Silicon",
    quickStart: "Início rápido",
    note: "Para macOS 11 ou versão superior",
  },
  footer: {
    partneredWith: "Em parceria com",
    rights: "Todos os direitos reservados.",
  },
  langNames: { en: "English", ru: "Русский", de: "Deutsch", it: "Italiano", es: "Español", zh: "中文", pt: "Português" },
};

export const translations: Record<Lang, Dict> = { en, ru, de, it, es, zh, pt };
