// AUTO GENERATED use-case content. Edit gen_usecase_data.py to change.
export type UcLang = "en" | "ru" | "de" | "it" | "es" | "zh" | "pt" | "hi" | "fr";
export interface UcCap { title: string; desc: string; }
export interface UcFaq { q: string; a: string; }
export interface UcPage {
  slug: string; name: string; tagline: string; metaTitle: string; metaDescription: string; h1: string; intro: string;
  pain: string[]; caps: UcCap[]; outcomes: string[]; faq: UcFaq[];
}
export interface UcChrome {
  kicker: string; problemTitle: string; helpTitle: string; outcomesTitle: string; faqTitle: string; ctaPrimary: string; ctaNote: string; tryLine: string; backHome: string; allUseCases: string; readMore: string; hubTitle: string; hubIntro: string; hubMetaTitle: string; hubMetaDesc: string;
}
export const ucChrome: Record<UcLang, UcChrome> = {
  "en": {
    "kicker": "Use case",
    "problemTitle": "What slows this down",
    "helpTitle": "How Accio Work handles it",
    "outcomesTitle": "What you walk away with",
    "faqTitle": "Common questions",
    "ctaPrimary": "Start free on Accio Work",
    "ctaNote": "Free plan, no card required",
    "tryLine": "Run it on a real task in minutes.",
    "backHome": "Home",
    "allUseCases": "All use cases",
    "readMore": "See how",
    "hubTitle": "What you can do with Accio Work",
    "hubIntro": "Accio Work is an AI agent that runs real work end to end. Pick the job closest to yours and see how it handles sourcing, research, content and automation.",
    "hubMetaTitle": "Accio Work use cases | Sourcing, research, content, automation",
    "hubMetaDesc": "See what Accio Work does for dropshipping, supplier sourcing, content, market research, automation and custom tools. Free plan to try, no card."
  },
  "ru": {
    "kicker": "Сценарий",
    "problemTitle": "Что тормозит",
    "helpTitle": "Как справляется Accio Work",
    "outcomesTitle": "Что получите на выходе",
    "faqTitle": "Частые вопросы",
    "ctaPrimary": "Начать бесплатно в Accio Work",
    "ctaNote": "Бесплатный план, карта не нужна",
    "tryLine": "Проверьте на реальной задаче за пару минут.",
    "backHome": "На главную",
    "allUseCases": "Все сценарии",
    "readMore": "Как это работает",
    "hubTitle": "Что можно делать в Accio Work",
    "hubIntro": "Accio Work это AI агент, который выполняет реальную работу от начала до конца. Выберите задачу, близкую к вашей, и посмотрите, как он справляется с закупками, ресёрчем, контентом и автоматизацией.",
    "hubMetaTitle": "Сценарии Accio Work | Закупки, ресёрч, контент, автоматизация",
    "hubMetaDesc": "Что Accio Work делает для дропшиппинга, поиска поставщиков, контента, анализа рынка, автоматизации и кастомных инструментов. Бесплатный план, без карты."
  },
  "de": {
    "kicker": "Anwendungsfall",
    "problemTitle": "Was hier bremst",
    "helpTitle": "Wie Accio Work das löst",
    "outcomesTitle": "Was am Ende herauskommt",
    "faqTitle": "Häufige Fragen",
    "ctaPrimary": "Kostenlos mit Accio Work starten",
    "ctaNote": "Kostenloser Plan, keine Karte nötig",
    "tryLine": "Teste es in Minuten an einer echten Aufgabe.",
    "backHome": "Startseite",
    "allUseCases": "Alle Anwendungsfälle",
    "readMore": "So geht es",
    "hubTitle": "Was du mit Accio Work machen kannst",
    "hubIntro": "Accio Work ist ein AI Agent, der echte Arbeit von Anfang bis Ende erledigt. Wähle die Aufgabe, die deiner am nächsten kommt, und sieh, wie er Sourcing, Recherche, Content und Automatisierung meistert.",
    "hubMetaTitle": "Accio Work Anwendungsfälle | Sourcing, Recherche, Content, Automatisierung",
    "hubMetaDesc": "Sieh, was Accio Work für Dropshipping, Lieferantensuche, Content, Marktforschung, Automatisierung und eigene Tools leistet. Gratisplan, keine Karte."
  },
  "it": {
    "kicker": "Caso d'uso",
    "problemTitle": "Cosa rallenta",
    "helpTitle": "Come lo gestisce Accio Work",
    "outcomesTitle": "Cosa ottieni",
    "faqTitle": "Domande frequenti",
    "ctaPrimary": "Inizia gratis su Accio Work",
    "ctaNote": "Piano gratuito, nessuna carta richiesta",
    "tryLine": "Provalo su un caso reale in pochi minuti.",
    "backHome": "Home",
    "allUseCases": "Tutti i casi d'uso",
    "readMore": "Scopri come",
    "hubTitle": "Cosa puoi fare con Accio Work",
    "hubIntro": "Accio Work è un agente AI che porta a termine il lavoro dall'inizio alla fine. Scegli il compito più vicino al tuo e guarda come gestisce sourcing, ricerca, contenuti e automazione.",
    "hubMetaTitle": "Casi d'uso di Accio Work | Sourcing, ricerca, contenuti, automazione",
    "hubMetaDesc": "Scopri cosa fa Accio Work per dropshipping, ricerca fornitori, contenuti, ricerca di mercato, automazione e strumenti su misura. Piano gratuito, senza carta."
  },
  "es": {
    "kicker": "Caso de uso",
    "problemTitle": "Qué lo ralentiza",
    "helpTitle": "Cómo lo resuelve Accio Work",
    "outcomesTitle": "Con qué te quedas",
    "faqTitle": "Preguntas frecuentes",
    "ctaPrimary": "Empieza gratis en Accio Work",
    "ctaNote": "Plan gratuito, sin tarjeta",
    "tryLine": "Pruébalo en un caso real en minutos.",
    "backHome": "Inicio",
    "allUseCases": "Todos los casos de uso",
    "readMore": "Ver cómo",
    "hubTitle": "Qué puedes hacer con Accio Work",
    "hubIntro": "Accio Work es un agente de IA que ejecuta trabajo real de principio a fin. Elige la tarea más cercana a la tuya y mira cómo maneja sourcing, investigación, contenido y automatización.",
    "hubMetaTitle": "Casos de uso de Accio Work | Sourcing, investigación, contenido, automatización",
    "hubMetaDesc": "Mira qué hace Accio Work para dropshipping, sourcing de proveedores, contenido, investigación de mercado, automatización y herramientas a medida. Plan gratis, sin tarjeta."
  },
  "zh": {
    "kicker": "使用场景",
    "problemTitle": "卡点在哪里",
    "helpTitle": "Accio Work 如何搞定",
    "outcomesTitle": "你会得到什么",
    "faqTitle": "常见问题",
    "ctaPrimary": "免费开始使用 Accio Work",
    "ctaNote": "免费方案，无需绑定银行卡",
    "tryLine": "几分钟内用真实任务试一试。",
    "backHome": "首页",
    "allUseCases": "全部场景",
    "readMore": "看看怎么做",
    "hubTitle": "用 Accio Work 能做什么",
    "hubIntro": "Accio Work 是一个能把真实工作从头做到尾的 AI 智能体。选择最接近你的任务，看看它如何完成选品、调研、内容和自动化。",
    "hubMetaTitle": "Accio Work 使用场景 | 选品、调研、内容、自动化",
    "hubMetaDesc": "看看 Accio Work 在代发货、供应商寻源、内容、市场调研、自动化和定制工具方面能做什么。提供免费方案，无需绑卡。"
  },
  "pt": {
    "kicker": "Caso de uso",
    "problemTitle": "O que trava",
    "helpTitle": "Como o Accio Work resolve",
    "outcomesTitle": "O que você leva",
    "faqTitle": "Perguntas frequentes",
    "ctaPrimary": "Comece grátis no Accio Work",
    "ctaNote": "Plano gratuito, sem cartão",
    "tryLine": "Teste em um caso real em minutos.",
    "backHome": "Início",
    "allUseCases": "Todos os casos de uso",
    "readMore": "Veja como",
    "hubTitle": "O que dá para fazer com o Accio Work",
    "hubIntro": "O Accio Work é um agente de IA que executa trabalho real do início ao fim. Escolha a tarefa mais parecida com a sua e veja como ele lida com sourcing, pesquisa, conteúdo e automação.",
    "hubMetaTitle": "Casos de uso do Accio Work | Sourcing, pesquisa, conteúdo, automação",
    "hubMetaDesc": "Veja o que o Accio Work faz para dropshipping, sourcing de fornecedores, conteúdo, pesquisa de mercado, automação e ferramentas sob medida. Plano grátis, sem cartão."
  },
  "hi": {
    "kicker": "उपयोग",
    "problemTitle": "क्या धीमा करता है",
    "helpTitle": "Accio Work इसे कैसे संभालता है",
    "outcomesTitle": "आपको क्या मिलता है",
    "faqTitle": "आम सवाल",
    "ctaPrimary": "Accio Work मुफ्त में शुरू करें",
    "ctaNote": "मुफ्त प्लान, कार्ड की जरूरत नहीं",
    "tryLine": "किसी असली काम पर कुछ ही मिनटों में आज़माएं।",
    "backHome": "होम",
    "allUseCases": "सभी उपयोग",
    "readMore": "देखें कैसे",
    "hubTitle": "Accio Work से आप क्या कर सकते हैं",
    "hubIntro": "Accio Work एक AI एजेंट है जो असली काम शुरू से अंत तक करता है। अपने सबसे करीब का काम चुनें और देखें कि यह सोर्सिंग, रिसर्च, कंटेंट और ऑटोमेशन कैसे संभालता है।",
    "hubMetaTitle": "Accio Work उपयोग | सोर्सिंग, रिसर्च, कंटेंट, ऑटोमेशन",
    "hubMetaDesc": "देखें Accio Work ड्रॉपशिपिंग, सप्लायर सोर्सिंग, कंटेंट, मार्केट रिसर्च, ऑटोमेशन और कस्टम टूल्स के लिए क्या करता है। मुफ्त प्लान, कार्ड नहीं।"
  },
  "fr": {
    "kicker": "Cas d'usage",
    "problemTitle": "Ce qui ralentit",
    "helpTitle": "Comment Accio Work s'en charge",
    "outcomesTitle": "Ce que vous obtenez",
    "faqTitle": "Questions fréquentes",
    "ctaPrimary": "Commencer gratuitement sur Accio Work",
    "ctaNote": "Offre gratuite, sans carte",
    "tryLine": "Testez sur un vrai cas en quelques minutes.",
    "backHome": "Accueil",
    "allUseCases": "Tous les cas d'usage",
    "readMore": "Voir comment",
    "hubTitle": "Ce que vous pouvez faire avec Accio Work",
    "hubIntro": "Accio Work est un agent IA qui mène un vrai travail de bout en bout. Choisissez la tâche la plus proche de la vôtre et voyez comment il gère le sourcing, la recherche, le contenu et l'automatisation.",
    "hubMetaTitle": "Cas d'usage d'Accio Work | Sourcing, recherche, contenu, automatisation",
    "hubMetaDesc": "Voyez ce qu'Accio Work fait pour le dropshipping, le sourcing fournisseurs, le contenu, l'étude de marché, l'automatisation et les outils sur mesure. Offre gratuite, sans carte."
  }
};

export const ucPages: Record<UcLang, Record<string, UcPage>> = {
  "en": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work for dropshipping",
      "tagline": "From trend to first sale without switching tools",
      "metaTitle": "Accio Work for dropshipping | AI dropshipping tool",
      "metaDescription": "Dropshipping lives or dies on speed. Accio Work runs the whole loop, spotting a product, finding a supplier, building the listing and drafting the ads, so",
      "h1": "Accio Work for dropshipping",
      "intro": "Dropshipping lives or dies on speed. Accio Work runs the whole loop, spotting a product, finding a supplier, building the listing and drafting the ads, so you move while the trend is still hot.",
      "pain": [
        "Trends move faster than you can research by hand",
        "Vetting suppliers eats days before you sell a thing",
        "Listings, images and ads live in five different tools"
      ],
      "caps": [
        {
          "title": "Find products worth selling",
          "desc": "The agent scans demand signals and margins, not just what looks popular."
        },
        {
          "title": "Source and vet suppliers",
          "desc": "It pulls verified Alibaba suppliers, checks history and drafts the first inquiry."
        },
        {
          "title": "Build the listing",
          "desc": "Product images, descriptions and a store page ready to publish."
        },
        {
          "title": "Draft the ad set",
          "desc": "Angles, copy and creatives you can push live the same day."
        }
      ],
      "outcomes": [
        "A shortlist of products with real margin",
        "Vetted suppliers with inquiries sent",
        "A store page ready to publish",
        "Ad copy and creatives to launch"
      ],
      "faq": [
        {
          "q": "Can Accio Work find dropshipping products?",
          "a": "Yes, it scans demand and margin signals and returns a shortlist, then sources suppliers for the ones you pick."
        },
        {
          "q": "Does it work with Alibaba suppliers?",
          "a": "Yes, supplier discovery and vetting use real Alibaba trade data, and it can draft the first inquiry."
        },
        {
          "q": "Is there a free plan?",
          "a": "Yes, start free without a card and run a full product to supplier flow."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work for supplier sourcing",
      "tagline": "Verified suppliers and sent inquiries, without the back and forth",
      "metaTitle": "Accio Work for supplier sourcing | AI supplier sourcing",
      "metaDescription": "Sourcing is slow because the work is manual, searching, comparing, emailing, chasing. Accio Work does the legwork, surfacing verified suppliers and drafting",
      "h1": "Accio Work for supplier sourcing",
      "intro": "Sourcing is slow because the work is manual, searching, comparing, emailing, chasing. Accio Work does the legwork, surfacing verified suppliers and drafting the outreach so you spend time deciding, not digging.",
      "pain": [
        "Endless tabs comparing suppliers you cannot verify",
        "Writing the same inquiry email over and over",
        "No easy way to compare quotes side by side"
      ],
      "caps": [
        {
          "title": "Discover verified suppliers",
          "desc": "It searches real Alibaba trade data and filters by track record."
        },
        {
          "title": "Compare on what matters",
          "desc": "Price, MOQ, response rate and history in one view."
        },
        {
          "title": "Send the first inquiry",
          "desc": "Drafts and sends a clear message tuned to each supplier."
        },
        {
          "title": "Track the replies",
          "desc": "Keeps quotes and threads together so you decide fast."
        }
      ],
      "outcomes": [
        "A vetted supplier shortlist",
        "Inquiries drafted and sent",
        "Quotes lined up to compare",
        "A clear pick with reasons"
      ],
      "faq": [
        {
          "q": "How does Accio Work vet suppliers?",
          "a": "It uses real Alibaba trade data to check history, response rate and track record before you reach out."
        },
        {
          "q": "Can it contact suppliers for me?",
          "a": "Yes, it drafts and can send the first inquiry, then keeps the replies together."
        },
        {
          "q": "Do I need a paid plan to try?",
          "a": "No, the free plan lets you run a sourcing task without a card."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work for content and marketing",
      "tagline": "Landing pages, product copy and posts, published on schedule",
      "metaTitle": "Accio Work for content and marketing | AI content for e-commerce",
      "metaDescription": "Marketing content is a treadmill. Accio Work writes the landing page, the product cards and the social posts, then schedules them, so your channels stay",
      "h1": "Accio Work for content and marketing",
      "intro": "Marketing content is a treadmill. Accio Work writes the landing page, the product cards and the social posts, then schedules them, so your channels stay alive without you at the keyboard all day.",
      "pain": [
        "Blank page every time a product launches",
        "Rewriting the same copy for five channels",
        "Publishing by hand, post by post"
      ],
      "caps": [
        {
          "title": "Write the landing page",
          "desc": "Structure, copy and calls to action ready to ship."
        },
        {
          "title": "Fill product cards",
          "desc": "Titles, bullets and descriptions that match your catalog."
        },
        {
          "title": "Make social posts",
          "desc": "Platform ready posts with hooks, not filler."
        },
        {
          "title": "Schedule and publish",
          "desc": "It queues and posts at the times you set."
        }
      ],
      "outcomes": [
        "A finished landing page",
        "Product cards filled in",
        "A week of social posts",
        "A publishing schedule running"
      ],
      "faq": [
        {
          "q": "Can Accio Work publish content for me?",
          "a": "Yes, it can schedule and publish to your channels, not just draft the text."
        },
        {
          "q": "Will the copy match my brand?",
          "a": "You give it your tone and products, and it writes to that rather than generic filler."
        },
        {
          "q": "Is it free to try?",
          "a": "Yes, start on the free plan without a card."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work for market research",
      "tagline": "Competitors, demand and pricing, read for you",
      "metaTitle": "Accio Work for market research | AI market research",
      "metaDescription": "Good decisions start with a clear read of the market. Accio Work gathers competitor moves, demand signals and pricing, then hands you a summary you can act",
      "h1": "Accio Work for market research",
      "intro": "Good decisions start with a clear read of the market. Accio Work gathers competitor moves, demand signals and pricing, then hands you a summary you can act on instead of a pile of tabs.",
      "pain": [
        "Research scattered across tabs and screenshots",
        "Competitor pages you check by hand every week",
        "Guesswork on where demand and price sit"
      ],
      "caps": [
        {
          "title": "Map the competitors",
          "desc": "Who is selling, at what price, with what angle."
        },
        {
          "title": "Read demand signals",
          "desc": "Where interest is rising and where it is fading."
        },
        {
          "title": "Track pricing",
          "desc": "How the market prices a product and where the gaps are."
        },
        {
          "title": "Summarize the call",
          "desc": "A short brief with the decision, not raw data."
        }
      ],
      "outcomes": [
        "A competitor map",
        "A demand read",
        "A pricing view",
        "A brief you can act on"
      ],
      "faq": [
        {
          "q": "What can Accio Work research?",
          "a": "Competitors, demand signals and pricing for a product or niche, summarized into a short brief."
        },
        {
          "q": "Does it use live data?",
          "a": "It pulls current sources and real Alibaba trade data rather than only stored knowledge."
        },
        {
          "q": "Can I try it free?",
          "a": "Yes, the free plan runs a research task without a card."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work for workflow automation",
      "tagline": "Repeatable tasks the agent runs on a schedule",
      "metaTitle": "Accio Work for workflow automation | AI workflow automation",
      "metaDescription": "The tasks that eat your week are usually the same each time. Accio Work turns them into automations, running on a schedule and across the apps you already",
      "h1": "Accio Work for workflow automation",
      "intro": "The tasks that eat your week are usually the same each time. Accio Work turns them into automations, running on a schedule and across the apps you already use, so the routine work runs itself.",
      "pain": [
        "The same manual steps every single day",
        "Copy paste between apps that do not talk",
        "Work that only happens when you remember it"
      ],
      "caps": [
        {
          "title": "Build the workflow",
          "desc": "Describe the task and the agent lays out the steps."
        },
        {
          "title": "Connect your apps",
          "desc": "It works across the tools you already run."
        },
        {
          "title": "Run on a schedule",
          "desc": "Set it and the task fires without you."
        },
        {
          "title": "Watch and adjust",
          "desc": "See runs, tweak steps, keep it reliable."
        }
      ],
      "outcomes": [
        "A working automation",
        "Apps connected",
        "A schedule that runs",
        "Hours back each week"
      ],
      "faq": [
        {
          "q": "What can Accio Work automate?",
          "a": "Repeatable multi step tasks across your apps, run on a schedule you set."
        },
        {
          "q": "Does it connect to other tools?",
          "a": "Yes, it works across many apps so steps do not need manual copy paste."
        },
        {
          "q": "Is there a free plan?",
          "a": "Yes, start free without a card and build your first automation."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work for custom tools",
      "tagline": "Small internal tools, built by describing them",
      "metaTitle": "Accio Work for custom tools | AI custom tools",
      "metaDescription": "Sometimes the tool you need does not exist yet. Accio Work builds small internal tools from a plain description, so you get the calculator, tracker or",
      "h1": "Accio Work for custom tools",
      "intro": "Sometimes the tool you need does not exist yet. Accio Work builds small internal tools from a plain description, so you get the calculator, tracker or dashboard you needed without a developer queue.",
      "pain": [
        "Off the shelf tools never fit the exact job",
        "Simple internal needs wait behind a dev backlog",
        "Spreadsheets stretched far past what they should do"
      ],
      "caps": [
        {
          "title": "Describe the tool",
          "desc": "Say what it should do in plain words."
        },
        {
          "title": "Get a working build",
          "desc": "The agent produces something you can use, not a spec."
        },
        {
          "title": "Wire in your data",
          "desc": "It connects to the sources the tool needs."
        },
        {
          "title": "Iterate by chat",
          "desc": "Change it by asking, no rebuild from scratch."
        }
      ],
      "outcomes": [
        "A working internal tool",
        "Your data wired in",
        "Changes by chat",
        "No dev queue"
      ],
      "faq": [
        {
          "q": "What kind of tools can it build?",
          "a": "Small internal tools like calculators, trackers and simple dashboards, from a plain description."
        },
        {
          "q": "Do I need to code?",
          "a": "No, you describe what you want and adjust it by chatting."
        },
        {
          "q": "Can I try it free?",
          "a": "Yes, the free plan lets you build a first tool without a card."
        }
      ]
    }
  },
  "ru": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work для дропшиппинга",
      "tagline": "От тренда до первой продажи без прыжков между сервисами",
      "metaTitle": "Accio Work для дропшиппинга | AI инструмент для дропшиппинга",
      "metaDescription": "В дропшиппинге всё решает скорость. Accio Work проходит весь цикл: находит товар, ищет поставщика, собирает карточку и черновики рекламы, чтобы вы успели",
      "h1": "Accio Work для дропшиппинга",
      "intro": "В дропшиппинге всё решает скорость. Accio Work проходит весь цикл: находит товар, ищет поставщика, собирает карточку и черновики рекламы, чтобы вы успели, пока тренд ещё горячий.",
      "pain": [
        "Тренды меняются быстрее, чем вы успеваете их изучать вручную",
        "Проверка поставщиков съедает дни до первой продажи",
        "Карточки, картинки и реклама в пяти разных сервисах"
      ],
      "caps": [
        {
          "title": "Найти товары, которые стоит продавать",
          "desc": "Агент смотрит сигналы спроса и маржу, а не только внешнюю популярность."
        },
        {
          "title": "Найти и проверить поставщиков",
          "desc": "Подтягивает проверенных поставщиков Alibaba, смотрит историю и готовит первый запрос."
        },
        {
          "title": "Собрать карточку",
          "desc": "Картинки, описания и страница магазина, готовые к публикации."
        },
        {
          "title": "Черновик рекламы",
          "desc": "Заходы, тексты и креативы, которые можно запустить в тот же день."
        }
      ],
      "outcomes": [
        "Шорт-лист товаров с реальной маржой",
        "Проверенные поставщики с отправленными запросами",
        "Страница магазина, готовая к публикации",
        "Тексты и креативы для запуска рекламы"
      ],
      "faq": [
        {
          "q": "Accio Work умеет находить товары для дропшиппинга?",
          "a": "Да, он смотрит сигналы спроса и маржи, отдаёт шорт-лист, а по выбранным ищет поставщиков."
        },
        {
          "q": "Работает ли он с поставщиками Alibaba?",
          "a": "Да, поиск и проверка идут по реальным торговым данным Alibaba, и он может подготовить первый запрос."
        },
        {
          "q": "Есть ли бесплатный план?",
          "a": "Да, старт без карты и полный цикл от товара до поставщика."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work для поиска поставщиков",
      "tagline": "Проверенные поставщики и отправленные запросы без бесконечной переписки",
      "metaTitle": "Accio Work для поиска поставщиков | AI поиск поставщиков",
      "metaDescription": "Поиск поставщиков медленный, потому что всё вручную: искать, сравнивать, писать, догонять. Accio Work берёт рутину на себя, показывает проверенных",
      "h1": "Accio Work для поиска поставщиков",
      "intro": "Поиск поставщиков медленный, потому что всё вручную: искать, сравнивать, писать, догонять. Accio Work берёт рутину на себя, показывает проверенных поставщиков и готовит письма, чтобы вы тратили время на решение, а не на раскопки.",
      "pain": [
        "Бесконечные вкладки с поставщиками, которых не проверить",
        "Одно и то же письмо запроса снова и снова",
        "Нет удобного способа сравнить котировки рядом"
      ],
      "caps": [
        {
          "title": "Найти проверенных поставщиков",
          "desc": "Ищет по реальным торговым данным Alibaba и фильтрует по репутации."
        },
        {
          "title": "Сравнить по сути",
          "desc": "Цена, MOQ, скорость ответа и история в одном окне."
        },
        {
          "title": "Отправить первый запрос",
          "desc": "Готовит и шлёт понятное сообщение под каждого поставщика."
        },
        {
          "title": "Следить за ответами",
          "desc": "Держит котировки и переписку вместе, чтобы решить быстро."
        }
      ],
      "outcomes": [
        "Шорт-лист проверенных поставщиков",
        "Запросы составлены и отправлены",
        "Котировки выстроены для сравнения",
        "Понятный выбор с обоснованием"
      ],
      "faq": [
        {
          "q": "Как Accio Work проверяет поставщиков?",
          "a": "По реальным торговым данным Alibaba он смотрит историю, скорость ответа и репутацию до того, как вы напишете."
        },
        {
          "q": "Он может связаться с поставщиками за меня?",
          "a": "Да, он готовит и может отправить первый запрос, а затем держит ответы вместе."
        },
        {
          "q": "Нужен ли платный план, чтобы попробовать?",
          "a": "Нет, бесплатный план позволяет выполнить задачу без карты."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work для контента и маркетинга",
      "tagline": "Лендинги, тексты карточек и посты, публикуются по расписанию",
      "metaTitle": "Accio Work для контента и маркетинга | AI контент для e-commerce",
      "metaDescription": "Контент это бесконечная беговая дорожка. Accio Work пишет лендинг, карточки товаров и посты, а затем ставит их в расписание, чтобы каналы жили без вас за",
      "h1": "Accio Work для контента и маркетинга",
      "intro": "Контент это бесконечная беговая дорожка. Accio Work пишет лендинг, карточки товаров и посты, а затем ставит их в расписание, чтобы каналы жили без вас за клавиатурой весь день.",
      "pain": [
        "Чистый лист при каждом запуске товара",
        "Один и тот же текст переписывается под пять каналов",
        "Публикация вручную, пост за постом"
      ],
      "caps": [
        {
          "title": "Написать лендинг",
          "desc": "Структура, тексты и призывы к действию, готовые к запуску."
        },
        {
          "title": "Заполнить карточки",
          "desc": "Заголовки, буллеты и описания под ваш каталог."
        },
        {
          "title": "Сделать посты",
          "desc": "Готовые под площадку посты с зацепками, без воды."
        },
        {
          "title": "Расписание и публикация",
          "desc": "Ставит в очередь и публикует в заданное время."
        }
      ],
      "outcomes": [
        "Готовый лендинг",
        "Заполненные карточки товаров",
        "Неделя постов для соцсетей",
        "Работающее расписание публикаций"
      ],
      "faq": [
        {
          "q": "Accio Work может публиковать контент за меня?",
          "a": "Да, он умеет ставить в расписание и публиковать в ваши каналы, а не только писать текст."
        },
        {
          "q": "Тексты будут в моём стиле?",
          "a": "Вы задаёте тон и товары, и он пишет под это, а не общими фразами."
        },
        {
          "q": "Можно попробовать бесплатно?",
          "a": "Да, старт на бесплатном плане без карты."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work для анализа рынка",
      "tagline": "Конкуренты, спрос и цены, разобраны за вас",
      "metaTitle": "Accio Work для анализа рынка | AI анализ рынка",
      "metaDescription": "Хорошие решения начинаются с ясной картины рынка. Accio Work собирает шаги конкурентов, сигналы спроса и цены, а затем отдаёт сводку, с которой можно",
      "h1": "Accio Work для анализа рынка",
      "intro": "Хорошие решения начинаются с ясной картины рынка. Accio Work собирает шаги конкурентов, сигналы спроса и цены, а затем отдаёт сводку, с которой можно работать, вместо кучи вкладок.",
      "pain": [
        "Ресёрч разбросан по вкладкам и скриншотам",
        "Страницы конкурентов вручную каждую неделю",
        "Догадки о том, где спрос и цена"
      ],
      "caps": [
        {
          "title": "Составить карту конкурентов",
          "desc": "Кто продаёт, по какой цене и с каким заходом."
        },
        {
          "title": "Прочитать сигналы спроса",
          "desc": "Где интерес растёт, а где угасает."
        },
        {
          "title": "Отследить цены",
          "desc": "Как рынок оценивает товар и где есть зазоры."
        },
        {
          "title": "Свести к выводу",
          "desc": "Короткий бриф с решением, а не сырые данные."
        }
      ],
      "outcomes": [
        "Карта конкурентов",
        "Оценка спроса",
        "Картина по ценам",
        "Бриф, с которым можно работать"
      ],
      "faq": [
        {
          "q": "Что Accio Work может исследовать?",
          "a": "Конкурентов, сигналы спроса и цены по товару или нише, сведённые в короткий бриф."
        },
        {
          "q": "Он использует свежие данные?",
          "a": "Он берёт актуальные источники и реальные торговые данные Alibaba, а не только память."
        },
        {
          "q": "Можно попробовать бесплатно?",
          "a": "Да, бесплатный план выполняет задачу без карты."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work для автоматизации процессов",
      "tagline": "Повторяющиеся задачи агент запускает по расписанию",
      "metaTitle": "Accio Work для автоматизации процессов | AI автоматизация процессов",
      "metaDescription": "Задачи, съедающие неделю, обычно одни и те же. Accio Work превращает их в автоматизации, которые работают по расписанию и в приложениях, что у вас уже есть",
      "h1": "Accio Work для автоматизации процессов",
      "intro": "Задачи, съедающие неделю, обычно одни и те же. Accio Work превращает их в автоматизации, которые работают по расписанию и в приложениях, что у вас уже есть, чтобы рутина шла сама.",
      "pain": [
        "Одни и те же ручные шаги каждый день",
        "Копипаст между приложениями, которые не связаны",
        "Работа делается, только когда вспомнишь"
      ],
      "caps": [
        {
          "title": "Собрать процесс",
          "desc": "Опишите задачу, агент разложит её на шаги."
        },
        {
          "title": "Подключить приложения",
          "desc": "Работает поверх инструментов, что у вас уже есть."
        },
        {
          "title": "Запуск по расписанию",
          "desc": "Настроили и задача срабатывает без вас."
        },
        {
          "title": "Смотреть и править",
          "desc": "Видите запуски, правите шаги, держите стабильность."
        }
      ],
      "outcomes": [
        "Рабочая автоматизация",
        "Подключённые приложения",
        "Расписание, которое работает",
        "Свободные часы каждую неделю"
      ],
      "faq": [
        {
          "q": "Что Accio Work может автоматизировать?",
          "a": "Повторяющиеся многошаговые задачи в ваших приложениях по заданному расписанию."
        },
        {
          "q": "Он подключается к другим инструментам?",
          "a": "Да, он работает во многих приложениях, чтобы шаги не требовали ручного копипаста."
        },
        {
          "q": "Есть ли бесплатный план?",
          "a": "Да, старт без карты и первая автоматизация."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work для кастомных инструментов",
      "tagline": "Небольшие внутренние инструменты, собираются по описанию",
      "metaTitle": "Accio Work для кастомных инструментов | AI кастомные инструменты",
      "metaDescription": "Иногда нужного инструмента просто нет. Accio Work собирает небольшие внутренние инструменты по обычному описанию, чтобы у вас появился калькулятор, трекер",
      "h1": "Accio Work для кастомных инструментов",
      "intro": "Иногда нужного инструмента просто нет. Accio Work собирает небольшие внутренние инструменты по обычному описанию, чтобы у вас появился калькулятор, трекер или дашборд без очереди к разработчику.",
      "pain": [
        "Готовые инструменты никогда не подходят точно",
        "Простые внутренние нужды ждут в очереди к разработке",
        "Таблицы, растянутые далеко за пределы разумного"
      ],
      "caps": [
        {
          "title": "Описать инструмент",
          "desc": "Скажите обычными словами, что он должен делать."
        },
        {
          "title": "Получить рабочую версию",
          "desc": "Агент выдаёт то, чем можно пользоваться, а не ТЗ."
        },
        {
          "title": "Подключить ваши данные",
          "desc": "Соединяет с источниками, что нужны инструменту."
        },
        {
          "title": "Править в чате",
          "desc": "Меняете просьбой, без пересборки с нуля."
        }
      ],
      "outcomes": [
        "Рабочий внутренний инструмент",
        "Подключённые ваши данные",
        "Правки через чат",
        "Без очереди к разработке"
      ],
      "faq": [
        {
          "q": "Какие инструменты он может собрать?",
          "a": "Небольшие внутренние инструменты: калькуляторы, трекеры, простые дашборды, по обычному описанию."
        },
        {
          "q": "Нужно ли уметь программировать?",
          "a": "Нет, вы описываете, что нужно, и правите в чате."
        },
        {
          "q": "Можно попробовать бесплатно?",
          "a": "Да, бесплатный план даёт собрать первый инструмент без карты."
        }
      ]
    }
  },
  "de": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work fürs Dropshipping",
      "tagline": "Vom Trend zum ersten Verkauf ohne Toolwechsel",
      "metaTitle": "Accio Work fürs Dropshipping | AI Tool fürs Dropshipping",
      "metaDescription": "Beim Dropshipping entscheidet Tempo. Accio Work durchläuft den ganzen Kreislauf, findet ein Produkt, einen Lieferanten, baut das Listing und entwirft die",
      "h1": "Accio Work fürs Dropshipping",
      "intro": "Beim Dropshipping entscheidet Tempo. Accio Work durchläuft den ganzen Kreislauf, findet ein Produkt, einen Lieferanten, baut das Listing und entwirft die Ads, damit du handelst, solange der Trend heiß ist.",
      "pain": [
        "Trends drehen schneller, als du von Hand recherchierst",
        "Lieferantenprüfung frisst Tage, bevor du etwas verkaufst",
        "Listings, Bilder und Ads leben in fünf verschiedenen Tools"
      ],
      "caps": [
        {
          "title": "Produkte mit Potenzial finden",
          "desc": "Der Agent prüft Nachfragesignale und Margen, nicht nur was populär aussieht."
        },
        {
          "title": "Lieferanten finden und prüfen",
          "desc": "Er holt geprüfte Alibaba Lieferanten, checkt die Historie und entwirft die erste Anfrage."
        },
        {
          "title": "Das Listing bauen",
          "desc": "Produktbilder, Beschreibungen und eine Shopseite, bereit zum Veröffentlichen."
        },
        {
          "title": "Das Ad Set entwerfen",
          "desc": "Blickwinkel, Texte und Creatives, die du am selben Tag live schalten kannst."
        }
      ],
      "outcomes": [
        "Eine Auswahl an Produkten mit echter Marge",
        "Geprüfte Lieferanten mit gesendeten Anfragen",
        "Eine Shopseite, bereit zum Veröffentlichen",
        "Ad Texte und Creatives zum Start"
      ],
      "faq": [
        {
          "q": "Kann Accio Work Dropshipping Produkte finden?",
          "a": "Ja, es prüft Nachfrage und Marge, liefert eine Auswahl und sucht für deine Favoriten Lieferanten."
        },
        {
          "q": "Arbeitet es mit Alibaba Lieferanten?",
          "a": "Ja, Suche und Prüfung nutzen echte Alibaba Handelsdaten, und es entwirft die erste Anfrage."
        },
        {
          "q": "Gibt es einen Gratisplan?",
          "a": "Ja, ohne Karte starten und den ganzen Produkt zu Lieferant Ablauf durchspielen."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work für die Lieferantensuche",
      "tagline": "Geprüfte Lieferanten und gesendete Anfragen, ohne Hin und Her",
      "metaTitle": "Accio Work für die Lieferantensuche | AI Lieferantensuche",
      "metaDescription": "Sourcing ist langsam, weil alles manuell ist, suchen, vergleichen, mailen, nachfassen. Accio Work übernimmt die Fleißarbeit, zeigt geprüfte Lieferanten und",
      "h1": "Accio Work für die Lieferantensuche",
      "intro": "Sourcing ist langsam, weil alles manuell ist, suchen, vergleichen, mailen, nachfassen. Accio Work übernimmt die Fleißarbeit, zeigt geprüfte Lieferanten und entwirft die Ansprache, damit du entscheidest statt zu graben.",
      "pain": [
        "Endlose Tabs mit Lieferanten, die du nicht prüfen kannst",
        "Immer wieder dieselbe Anfrage schreiben",
        "Kein einfacher Weg, Angebote nebeneinander zu vergleichen"
      ],
      "caps": [
        {
          "title": "Geprüfte Lieferanten finden",
          "desc": "Sucht in echten Alibaba Handelsdaten und filtert nach Historie."
        },
        {
          "title": "Nach dem Wesentlichen vergleichen",
          "desc": "Preis, MOQ, Antwortrate und Historie in einer Ansicht."
        },
        {
          "title": "Die erste Anfrage senden",
          "desc": "Entwirft und sendet eine klare Nachricht je Lieferant."
        },
        {
          "title": "Antworten verfolgen",
          "desc": "Hält Angebote und Threads zusammen, damit du schnell entscheidest."
        }
      ],
      "outcomes": [
        "Eine Auswahl geprüfter Lieferanten",
        "Anfragen entworfen und gesendet",
        "Angebote zum Vergleich aufgereiht",
        "Eine klare Wahl mit Begründung"
      ],
      "faq": [
        {
          "q": "Wie prüft Accio Work Lieferanten?",
          "a": "Mit echten Alibaba Handelsdaten prüft es Historie, Antwortrate und Track Record, bevor du schreibst."
        },
        {
          "q": "Kann es Lieferanten für mich kontaktieren?",
          "a": "Ja, es entwirft und kann die erste Anfrage senden und hält dann die Antworten zusammen."
        },
        {
          "q": "Brauche ich einen Bezahlplan zum Testen?",
          "a": "Nein, der Gratisplan erlaubt eine Sourcing Aufgabe ohne Karte."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work für Content und Marketing",
      "tagline": "Landingpages, Produkttexte und Posts, planmäßig veröffentlicht",
      "metaTitle": "Accio Work für Content und Marketing | AI Content für E-Commerce",
      "metaDescription": "Marketing Content ist ein Laufband. Accio Work schreibt die Landingpage, die Produktkarten und die Social Posts und plant sie ein, damit deine Kanäle leben",
      "h1": "Accio Work für Content und Marketing",
      "intro": "Marketing Content ist ein Laufband. Accio Work schreibt die Landingpage, die Produktkarten und die Social Posts und plant sie ein, damit deine Kanäle leben, ohne dass du den ganzen Tag tippst.",
      "pain": [
        "Leere Seite bei jedem Produktstart",
        "Denselben Text für fünf Kanäle neu schreiben",
        "Veröffentlichen von Hand, Post für Post"
      ],
      "caps": [
        {
          "title": "Die Landingpage schreiben",
          "desc": "Struktur, Texte und Calls to Action, bereit zum Start."
        },
        {
          "title": "Produktkarten füllen",
          "desc": "Titel, Bullets und Beschreibungen passend zu deinem Katalog."
        },
        {
          "title": "Social Posts erstellen",
          "desc": "Plattformfertige Posts mit Hooks, kein Füllmaterial."
        },
        {
          "title": "Planen und veröffentlichen",
          "desc": "Reiht ein und postet zu den Zeiten, die du festlegst."
        }
      ],
      "outcomes": [
        "Eine fertige Landingpage",
        "Ausgefüllte Produktkarten",
        "Eine Woche Social Posts",
        "Ein laufender Veröffentlichungsplan"
      ],
      "faq": [
        {
          "q": "Kann Accio Work Content für mich veröffentlichen?",
          "a": "Ja, es kann in deine Kanäle planen und posten, nicht nur Texte entwerfen."
        },
        {
          "q": "Passt der Text zu meiner Marke?",
          "a": "Du gibst Ton und Produkte vor, und es schreibt danach statt generisch."
        },
        {
          "q": "Ist es gratis testbar?",
          "a": "Ja, im Gratisplan ohne Karte starten."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work für Marktforschung",
      "tagline": "Wettbewerber, Nachfrage und Preise, für dich ausgewertet",
      "metaTitle": "Accio Work für Marktforschung | AI Marktforschung",
      "metaDescription": "Gute Entscheidungen beginnen mit einem klaren Marktbild. Accio Work sammelt Wettbewerbszüge, Nachfragesignale und Preise und liefert dir eine Zusammenfassung",
      "h1": "Accio Work für Marktforschung",
      "intro": "Gute Entscheidungen beginnen mit einem klaren Marktbild. Accio Work sammelt Wettbewerbszüge, Nachfragesignale und Preise und liefert dir eine Zusammenfassung zum Handeln statt eines Stapels Tabs.",
      "pain": [
        "Recherche verstreut über Tabs und Screenshots",
        "Wettbewerberseiten jede Woche von Hand prüfen",
        "Raten, wo Nachfrage und Preis liegen"
      ],
      "caps": [
        {
          "title": "Die Wettbewerber kartieren",
          "desc": "Wer verkauft, zu welchem Preis, mit welchem Winkel."
        },
        {
          "title": "Nachfragesignale lesen",
          "desc": "Wo Interesse steigt und wo es nachlässt."
        },
        {
          "title": "Preise verfolgen",
          "desc": "Wie der Markt ein Produkt bepreist und wo Lücken sind."
        },
        {
          "title": "Das Fazit zusammenfassen",
          "desc": "Ein kurzes Briefing mit Entscheidung, keine Rohdaten."
        }
      ],
      "outcomes": [
        "Eine Wettbewerberkarte",
        "Eine Nachfrageeinschätzung",
        "Ein Preisbild",
        "Ein Briefing zum Handeln"
      ],
      "faq": [
        {
          "q": "Was kann Accio Work recherchieren?",
          "a": "Wettbewerber, Nachfragesignale und Preise zu Produkt oder Nische, in einem kurzen Briefing."
        },
        {
          "q": "Nutzt es aktuelle Daten?",
          "a": "Es zieht aktuelle Quellen und echte Alibaba Handelsdaten, nicht nur gespeichertes Wissen."
        },
        {
          "q": "Kann ich es gratis testen?",
          "a": "Ja, der Gratisplan führt eine Rechercheaufgabe ohne Karte aus."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work für Workflow Automatisierung",
      "tagline": "Wiederkehrende Aufgaben, die der Agent planmäßig ausführt",
      "metaTitle": "Accio Work für Workflow Automatisierung | AI Workflow Automatisierung",
      "metaDescription": "Die Aufgaben, die deine Woche fressen, sind meist jedes Mal gleich. Accio Work macht daraus Automatisierungen, die planmäßig und über deine bestehenden Apps",
      "h1": "Accio Work für Workflow Automatisierung",
      "intro": "Die Aufgaben, die deine Woche fressen, sind meist jedes Mal gleich. Accio Work macht daraus Automatisierungen, die planmäßig und über deine bestehenden Apps laufen, damit die Routine sich selbst erledigt.",
      "pain": [
        "Jeden Tag dieselben manuellen Schritte",
        "Copy Paste zwischen Apps, die nicht miteinander reden",
        "Arbeit, die nur passiert, wenn du daran denkst"
      ],
      "caps": [
        {
          "title": "Den Workflow bauen",
          "desc": "Beschreibe die Aufgabe und der Agent legt die Schritte fest."
        },
        {
          "title": "Deine Apps verbinden",
          "desc": "Er arbeitet über die Tools, die du schon nutzt."
        },
        {
          "title": "Planmäßig ausführen",
          "desc": "Einstellen und die Aufgabe startet ohne dich."
        },
        {
          "title": "Beobachten und anpassen",
          "desc": "Läufe sehen, Schritte justieren, zuverlässig halten."
        }
      ],
      "outcomes": [
        "Eine laufende Automatisierung",
        "Verbundene Apps",
        "Ein Plan, der läuft",
        "Stunden zurück pro Woche"
      ],
      "faq": [
        {
          "q": "Was kann Accio Work automatisieren?",
          "a": "Wiederkehrende mehrstufige Aufgaben über deine Apps, nach deinem Zeitplan."
        },
        {
          "q": "Verbindet es sich mit anderen Tools?",
          "a": "Ja, es arbeitet über viele Apps, damit Schritte kein Copy Paste brauchen."
        },
        {
          "q": "Gibt es einen Gratisplan?",
          "a": "Ja, ohne Karte starten und die erste Automatisierung bauen."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work für eigene Tools",
      "tagline": "Kleine interne Tools, gebaut per Beschreibung",
      "metaTitle": "Accio Work für eigene Tools | AI eigene Tools",
      "metaDescription": "Manchmal gibt es das Tool, das du brauchst, noch nicht. Accio Work baut kleine interne Tools aus einer einfachen Beschreibung, damit du den Rechner, Tracker",
      "h1": "Accio Work für eigene Tools",
      "intro": "Manchmal gibt es das Tool, das du brauchst, noch nicht. Accio Work baut kleine interne Tools aus einer einfachen Beschreibung, damit du den Rechner, Tracker oder das Dashboard bekommst, ohne Entwicklerwarteschlange.",
      "pain": [
        "Fertige Tools passen nie genau zur Aufgabe",
        "Einfache interne Bedürfnisse warten im Dev Backlog",
        "Tabellen, weit über ihren Zweck hinaus gedehnt"
      ],
      "caps": [
        {
          "title": "Das Tool beschreiben",
          "desc": "Sag in einfachen Worten, was es tun soll."
        },
        {
          "title": "Eine lauffähige Version bekommen",
          "desc": "Der Agent liefert etwas Nutzbares, keine Spezifikation."
        },
        {
          "title": "Deine Daten einbinden",
          "desc": "Er verbindet die Quellen, die das Tool braucht."
        },
        {
          "title": "Per Chat iterieren",
          "desc": "Ändere es durch Fragen, kein Neuaufbau von null."
        }
      ],
      "outcomes": [
        "Ein laufendes internes Tool",
        "Deine Daten eingebunden",
        "Änderungen per Chat",
        "Keine Dev Warteschlange"
      ],
      "faq": [
        {
          "q": "Welche Tools kann es bauen?",
          "a": "Kleine interne Tools wie Rechner, Tracker und einfache Dashboards, aus einer Beschreibung."
        },
        {
          "q": "Muss ich programmieren?",
          "a": "Nein, du beschreibst, was du willst, und passt es per Chat an."
        },
        {
          "q": "Kann ich es gratis testen?",
          "a": "Ja, der Gratisplan lässt dich ein erstes Tool ohne Karte bauen."
        }
      ]
    }
  },
  "it": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work per il dropshipping",
      "tagline": "Dal trend alla prima vendita senza cambiare strumento",
      "metaTitle": "Accio Work per il dropshipping | strumento AI per il dropshipping",
      "metaDescription": "Nel dropshipping conta la velocità. Accio Work percorre l'intero ciclo, individua un prodotto, trova un fornitore, costruisce la scheda e abbozza gli",
      "h1": "Accio Work per il dropshipping",
      "intro": "Nel dropshipping conta la velocità. Accio Work percorre l'intero ciclo, individua un prodotto, trova un fornitore, costruisce la scheda e abbozza gli annunci, così ti muovi finché il trend è caldo.",
      "pain": [
        "I trend corrono più veloci della tua ricerca manuale",
        "Verificare i fornitori divora giorni prima di vendere",
        "Schede, immagini e annunci vivono in cinque strumenti diversi"
      ],
      "caps": [
        {
          "title": "Trovare prodotti che valgono",
          "desc": "L'agente valuta segnali di domanda e margini, non solo cosa sembra popolare."
        },
        {
          "title": "Trovare e verificare fornitori",
          "desc": "Recupera fornitori Alibaba verificati, controlla lo storico e prepara la prima richiesta."
        },
        {
          "title": "Costruire la scheda",
          "desc": "Immagini prodotto, descrizioni e una pagina store pronte da pubblicare."
        },
        {
          "title": "Abbozzare gli annunci",
          "desc": "Angoli, testi e creatività che puoi mettere online lo stesso giorno."
        }
      ],
      "outcomes": [
        "Una rosa di prodotti con margine reale",
        "Fornitori verificati con richieste inviate",
        "Una pagina store pronta da pubblicare",
        "Testi e creatività per il lancio"
      ],
      "faq": [
        {
          "q": "Accio Work trova prodotti per il dropshipping?",
          "a": "Sì, valuta domanda e margini, restituisce una rosa e poi cerca fornitori per quelli scelti."
        },
        {
          "q": "Funziona con i fornitori Alibaba?",
          "a": "Sì, ricerca e verifica usano dati reali di Alibaba e può preparare la prima richiesta."
        },
        {
          "q": "Esiste un piano gratuito?",
          "a": "Sì, parti senza carta e completa il flusso da prodotto a fornitore."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work per il sourcing fornitori",
      "tagline": "Fornitori verificati e richieste inviate, senza tira e molla",
      "metaTitle": "Accio Work per il sourcing fornitori | sourcing fornitori con AI",
      "metaDescription": "Il sourcing è lento perché è tutto manuale, cercare, confrontare, scrivere, rincorrere. Accio Work fa il lavoro pesante, mostra fornitori verificati e",
      "h1": "Accio Work per il sourcing fornitori",
      "intro": "Il sourcing è lento perché è tutto manuale, cercare, confrontare, scrivere, rincorrere. Accio Work fa il lavoro pesante, mostra fornitori verificati e prepara i messaggi, così spendi tempo a decidere, non a scavare.",
      "pain": [
        "Schede infinite con fornitori che non puoi verificare",
        "Scrivere la stessa richiesta ancora e ancora",
        "Nessun modo semplice per confrontare i preventivi"
      ],
      "caps": [
        {
          "title": "Scoprire fornitori verificati",
          "desc": "Cerca nei dati commerciali reali di Alibaba e filtra per storico."
        },
        {
          "title": "Confrontare ciò che conta",
          "desc": "Prezzo, MOQ, tasso di risposta e storico in un'unica vista."
        },
        {
          "title": "Inviare la prima richiesta",
          "desc": "Prepara e invia un messaggio chiaro per ogni fornitore."
        },
        {
          "title": "Seguire le risposte",
          "desc": "Tiene insieme preventivi e conversazioni per decidere in fretta."
        }
      ],
      "outcomes": [
        "Una rosa di fornitori verificati",
        "Richieste preparate e inviate",
        "Preventivi allineati per il confronto",
        "Una scelta chiara con motivazioni"
      ],
      "faq": [
        {
          "q": "Come verifica i fornitori Accio Work?",
          "a": "Usa dati reali di Alibaba per controllare storico, tasso di risposta e affidabilità prima che tu scriva."
        },
        {
          "q": "Può contattare i fornitori per me?",
          "a": "Sì, prepara e può inviare la prima richiesta, poi tiene insieme le risposte."
        },
        {
          "q": "Serve un piano a pagamento per provare?",
          "a": "No, il piano gratuito consente un'attività di sourcing senza carta."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work per contenuti e marketing",
      "tagline": "Landing page, testi prodotto e post, pubblicati su pianificazione",
      "metaTitle": "Accio Work per contenuti e marketing | contenuti AI per e-commerce",
      "metaDescription": "Il contenuto marketing è un tapis roulant. Accio Work scrive la landing page, le schede prodotto e i post social, poi li pianifica, così i tuoi canali",
      "h1": "Accio Work per contenuti e marketing",
      "intro": "Il contenuto marketing è un tapis roulant. Accio Work scrive la landing page, le schede prodotto e i post social, poi li pianifica, così i tuoi canali restano vivi senza starci tutto il giorno.",
      "pain": [
        "Pagina bianca a ogni lancio di prodotto",
        "Riscrivere lo stesso testo per cinque canali",
        "Pubblicare a mano, post dopo post"
      ],
      "caps": [
        {
          "title": "Scrivere la landing page",
          "desc": "Struttura, testi e call to action pronti da pubblicare."
        },
        {
          "title": "Compilare le schede prodotto",
          "desc": "Titoli, elenchi e descrizioni in linea col tuo catalogo."
        },
        {
          "title": "Creare i post social",
          "desc": "Post pronti per la piattaforma con hook, non riempitivo."
        },
        {
          "title": "Pianificare e pubblicare",
          "desc": "Mette in coda e pubblica agli orari che imposti."
        }
      ],
      "outcomes": [
        "Una landing page finita",
        "Schede prodotto compilate",
        "Una settimana di post social",
        "Un calendario di pubblicazione attivo"
      ],
      "faq": [
        {
          "q": "Accio Work può pubblicare contenuti per me?",
          "a": "Sì, può pianificare e pubblicare sui tuoi canali, non solo scrivere il testo."
        },
        {
          "q": "I testi rispecchiano il mio brand?",
          "a": "Gli dai tono e prodotti e scrive di conseguenza, non riempitivo generico."
        },
        {
          "q": "Si prova gratis?",
          "a": "Sì, parti dal piano gratuito senza carta."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work per la ricerca di mercato",
      "tagline": "Concorrenti, domanda e prezzi, letti al posto tuo",
      "metaTitle": "Accio Work per la ricerca di mercato | ricerca di mercato con AI",
      "metaDescription": "Le buone decisioni partono da una lettura chiara del mercato. Accio Work raccoglie le mosse dei concorrenti, i segnali di domanda e i prezzi, poi ti consegna",
      "h1": "Accio Work per la ricerca di mercato",
      "intro": "Le buone decisioni partono da una lettura chiara del mercato. Accio Work raccoglie le mosse dei concorrenti, i segnali di domanda e i prezzi, poi ti consegna un riassunto su cui agire invece di una pila di schede.",
      "pain": [
        "Ricerca sparsa tra schede e screenshot",
        "Pagine dei concorrenti controllate a mano ogni settimana",
        "Tirare a indovinare su domanda e prezzo"
      ],
      "caps": [
        {
          "title": "Mappare i concorrenti",
          "desc": "Chi vende, a che prezzo, con quale angolo."
        },
        {
          "title": "Leggere i segnali di domanda",
          "desc": "Dove l'interesse cresce e dove cala."
        },
        {
          "title": "Seguire i prezzi",
          "desc": "Come il mercato prezza un prodotto e dove sono i vuoti."
        },
        {
          "title": "Riassumere la decisione",
          "desc": "Un breve brief con la scelta, non dati grezzi."
        }
      ],
      "outcomes": [
        "Una mappa dei concorrenti",
        "Una lettura della domanda",
        "Una vista sui prezzi",
        "Un brief su cui agire"
      ],
      "faq": [
        {
          "q": "Cosa può ricercare Accio Work?",
          "a": "Concorrenti, segnali di domanda e prezzi per un prodotto o nicchia, riassunti in un breve brief."
        },
        {
          "q": "Usa dati aggiornati?",
          "a": "Attinge a fonti attuali e ai dati reali di Alibaba, non solo alla conoscenza memorizzata."
        },
        {
          "q": "Posso provarlo gratis?",
          "a": "Sì, il piano gratuito esegue una ricerca senza carta."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work per l'automazione dei flussi",
      "tagline": "Attività ripetitive eseguite dall'agente su pianificazione",
      "metaTitle": "Accio Work per l'automazione dei flussi | automazione dei flussi con AI",
      "metaDescription": "I compiti che divorano la settimana sono di solito sempre gli stessi. Accio Work li trasforma in automazioni, che girano su pianificazione e tra le app che",
      "h1": "Accio Work per l'automazione dei flussi",
      "intro": "I compiti che divorano la settimana sono di solito sempre gli stessi. Accio Work li trasforma in automazioni, che girano su pianificazione e tra le app che già usi, così la routine si fa da sola.",
      "pain": [
        "Gli stessi passaggi manuali ogni giorno",
        "Copia incolla tra app che non si parlano",
        "Lavoro che avviene solo se te ne ricordi"
      ],
      "caps": [
        {
          "title": "Costruire il flusso",
          "desc": "Descrivi il compito e l'agente imposta i passaggi."
        },
        {
          "title": "Collegare le tue app",
          "desc": "Funziona con gli strumenti che già usi."
        },
        {
          "title": "Eseguire su pianificazione",
          "desc": "Imposti e il compito parte senza di te."
        },
        {
          "title": "Osservare e regolare",
          "desc": "Vedi le esecuzioni, ritocchi i passaggi, resti affidabile."
        }
      ],
      "outcomes": [
        "Un'automazione funzionante",
        "App collegate",
        "Una pianificazione attiva",
        "Ore recuperate ogni settimana"
      ],
      "faq": [
        {
          "q": "Cosa può automatizzare Accio Work?",
          "a": "Attività ripetitive a più passaggi tra le tue app, su una pianificazione che imposti."
        },
        {
          "q": "Si collega ad altri strumenti?",
          "a": "Sì, funziona con molte app, così i passaggi non richiedono copia incolla."
        },
        {
          "q": "Esiste un piano gratuito?",
          "a": "Sì, parti senza carta e crea la prima automazione."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work per strumenti su misura",
      "tagline": "Piccoli strumenti interni, creati descrivendoli",
      "metaTitle": "Accio Work per strumenti su misura | strumenti su misura con AI",
      "metaDescription": "A volte lo strumento che ti serve non esiste ancora. Accio Work crea piccoli strumenti interni da una semplice descrizione, così ottieni il calcolatore, il",
      "h1": "Accio Work per strumenti su misura",
      "intro": "A volte lo strumento che ti serve non esiste ancora. Accio Work crea piccoli strumenti interni da una semplice descrizione, così ottieni il calcolatore, il tracker o la dashboard senza la coda dallo sviluppatore.",
      "pain": [
        "Gli strumenti pronti non calzano mai al lavoro esatto",
        "Esigenze interne semplici in coda dietro lo sviluppo",
        "Fogli di calcolo tirati ben oltre il loro scopo"
      ],
      "caps": [
        {
          "title": "Descrivere lo strumento",
          "desc": "Dì in parole semplici cosa deve fare."
        },
        {
          "title": "Avere una versione funzionante",
          "desc": "L'agente produce qualcosa di usabile, non una specifica."
        },
        {
          "title": "Collegare i tuoi dati",
          "desc": "Si connette alle fonti di cui lo strumento ha bisogno."
        },
        {
          "title": "Iterare in chat",
          "desc": "Lo cambi chiedendo, senza ricostruire da zero."
        }
      ],
      "outcomes": [
        "Uno strumento interno funzionante",
        "I tuoi dati collegati",
        "Modifiche in chat",
        "Nessuna coda di sviluppo"
      ],
      "faq": [
        {
          "q": "Che strumenti può creare?",
          "a": "Piccoli strumenti interni come calcolatori, tracker e semplici dashboard, da una descrizione."
        },
        {
          "q": "Devo saper programmare?",
          "a": "No, descrivi ciò che vuoi e lo regoli chattando."
        },
        {
          "q": "Posso provarlo gratis?",
          "a": "Sì, il piano gratuito ti fa creare un primo strumento senza carta."
        }
      ]
    }
  },
  "es": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work para dropshipping",
      "tagline": "Del tendencia a la primera venta sin cambiar de herramienta",
      "metaTitle": "Accio Work para dropshipping | herramienta de IA para dropshipping",
      "metaDescription": "En dropshipping todo depende de la velocidad. Accio Work recorre el ciclo completo, detecta un producto, encuentra un proveedor, arma la ficha y redacta los",
      "h1": "Accio Work para dropshipping",
      "intro": "En dropshipping todo depende de la velocidad. Accio Work recorre el ciclo completo, detecta un producto, encuentra un proveedor, arma la ficha y redacta los anuncios, para que actúes mientras la tendencia sigue caliente.",
      "pain": [
        "Las tendencias corren más rápido de lo que investigas a mano",
        "Verificar proveedores se come días antes de vender",
        "Fichas, imágenes y anuncios viven en cinco herramientas distintas"
      ],
      "caps": [
        {
          "title": "Encontrar productos que valgan",
          "desc": "El agente mira señales de demanda y márgenes, no solo lo que parece popular."
        },
        {
          "title": "Buscar y verificar proveedores",
          "desc": "Trae proveedores de Alibaba verificados, revisa el historial y redacta la primera consulta."
        },
        {
          "title": "Armar la ficha",
          "desc": "Imágenes de producto, descripciones y una página de tienda listas para publicar."
        },
        {
          "title": "Redactar los anuncios",
          "desc": "Ángulos, textos y creativos que puedes lanzar el mismo día."
        }
      ],
      "outcomes": [
        "Una lista corta de productos con margen real",
        "Proveedores verificados con consultas enviadas",
        "Una página de tienda lista para publicar",
        "Textos y creativos para lanzar"
      ],
      "faq": [
        {
          "q": "¿Accio Work encuentra productos para dropshipping?",
          "a": "Sí, mira señales de demanda y margen, devuelve una lista corta y busca proveedores para los que elijas."
        },
        {
          "q": "¿Funciona con proveedores de Alibaba?",
          "a": "Sí, la búsqueda y verificación usan datos reales de Alibaba y puede redactar la primera consulta."
        },
        {
          "q": "¿Hay un plan gratuito?",
          "a": "Sí, empieza sin tarjeta y completa el flujo de producto a proveedor."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work para sourcing de proveedores",
      "tagline": "Proveedores verificados y consultas enviadas, sin idas y vueltas",
      "metaTitle": "Accio Work para sourcing de proveedores | sourcing de proveedores con IA",
      "metaDescription": "El sourcing es lento porque todo es manual, buscar, comparar, escribir, perseguir. Accio Work hace el trabajo pesado, muestra proveedores verificados y",
      "h1": "Accio Work para sourcing de proveedores",
      "intro": "El sourcing es lento porque todo es manual, buscar, comparar, escribir, perseguir. Accio Work hace el trabajo pesado, muestra proveedores verificados y redacta el contacto, para que dediques tiempo a decidir, no a rebuscar.",
      "pain": [
        "Pestañas sin fin con proveedores que no puedes verificar",
        "Escribir el mismo correo de consulta una y otra vez",
        "Ninguna forma fácil de comparar cotizaciones lado a lado"
      ],
      "caps": [
        {
          "title": "Descubrir proveedores verificados",
          "desc": "Busca en datos comerciales reales de Alibaba y filtra por trayectoria."
        },
        {
          "title": "Comparar lo que importa",
          "desc": "Precio, MOQ, tasa de respuesta e historial en una sola vista."
        },
        {
          "title": "Enviar la primera consulta",
          "desc": "Redacta y envía un mensaje claro adaptado a cada proveedor."
        },
        {
          "title": "Seguir las respuestas",
          "desc": "Mantiene juntas cotizaciones y conversaciones para decidir rápido."
        }
      ],
      "outcomes": [
        "Una lista corta de proveedores verificados",
        "Consultas redactadas y enviadas",
        "Cotizaciones alineadas para comparar",
        "Una elección clara con motivos"
      ],
      "faq": [
        {
          "q": "¿Cómo verifica proveedores Accio Work?",
          "a": "Usa datos reales de Alibaba para revisar historial, tasa de respuesta y trayectoria antes de contactar."
        },
        {
          "q": "¿Puede contactar proveedores por mí?",
          "a": "Sí, redacta y puede enviar la primera consulta, y luego mantiene juntas las respuestas."
        },
        {
          "q": "¿Necesito un plan de pago para probar?",
          "a": "No, el plan gratuito permite una tarea de sourcing sin tarjeta."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work para contenido y marketing",
      "tagline": "Landing pages, textos de producto y posts, publicados según agenda",
      "metaTitle": "Accio Work para contenido y marketing | contenido con IA para e-commerce",
      "metaDescription": "El contenido de marketing es una cinta sin fin. Accio Work escribe la landing page, las fichas de producto y los posts, y luego los programa, para que tus",
      "h1": "Accio Work para contenido y marketing",
      "intro": "El contenido de marketing es una cinta sin fin. Accio Work escribe la landing page, las fichas de producto y los posts, y luego los programa, para que tus canales sigan vivos sin estar todo el día tecleando.",
      "pain": [
        "Página en blanco cada vez que lanzas un producto",
        "Reescribir el mismo texto para cinco canales",
        "Publicar a mano, post a post"
      ],
      "caps": [
        {
          "title": "Escribir la landing page",
          "desc": "Estructura, textos y llamadas a la acción listos para publicar."
        },
        {
          "title": "Rellenar fichas de producto",
          "desc": "Títulos, viñetas y descripciones acordes a tu catálogo."
        },
        {
          "title": "Crear posts sociales",
          "desc": "Posts listos para cada plataforma con ganchos, sin relleno."
        },
        {
          "title": "Programar y publicar",
          "desc": "Encola y publica en los horarios que fijes."
        }
      ],
      "outcomes": [
        "Una landing page terminada",
        "Fichas de producto completas",
        "Una semana de posts sociales",
        "Un calendario de publicación en marcha"
      ],
      "faq": [
        {
          "q": "¿Accio Work publica contenido por mí?",
          "a": "Sí, puede programar y publicar en tus canales, no solo redactar el texto."
        },
        {
          "q": "¿El texto encaja con mi marca?",
          "a": "Le das tu tono y productos, y escribe acorde en vez de relleno genérico."
        },
        {
          "q": "¿Se prueba gratis?",
          "a": "Sí, empieza en el plan gratuito sin tarjeta."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work para investigación de mercado",
      "tagline": "Competidores, demanda y precios, leídos por ti",
      "metaTitle": "Accio Work para investigación de mercado | investigación de mercado con IA",
      "metaDescription": "Las buenas decisiones empiezan con una lectura clara del mercado. Accio Work reúne movimientos de la competencia, señales de demanda y precios, y te entrega",
      "h1": "Accio Work para investigación de mercado",
      "intro": "Las buenas decisiones empiezan con una lectura clara del mercado. Accio Work reúne movimientos de la competencia, señales de demanda y precios, y te entrega un resumen accionable en lugar de una pila de pestañas.",
      "pain": [
        "Investigación dispersa entre pestañas y capturas",
        "Páginas de la competencia revisadas a mano cada semana",
        "Adivinar dónde están la demanda y el precio"
      ],
      "caps": [
        {
          "title": "Mapear la competencia",
          "desc": "Quién vende, a qué precio y con qué enfoque."
        },
        {
          "title": "Leer señales de demanda",
          "desc": "Dónde sube el interés y dónde cae."
        },
        {
          "title": "Seguir los precios",
          "desc": "Cómo pone precio el mercado y dónde hay huecos."
        },
        {
          "title": "Resumir la decisión",
          "desc": "Un brief corto con la decisión, no datos crudos."
        }
      ],
      "outcomes": [
        "Un mapa de la competencia",
        "Una lectura de la demanda",
        "Una vista de precios",
        "Un brief accionable"
      ],
      "faq": [
        {
          "q": "¿Qué puede investigar Accio Work?",
          "a": "Competidores, señales de demanda y precios de un producto o nicho, resumidos en un brief corto."
        },
        {
          "q": "¿Usa datos en vivo?",
          "a": "Toma fuentes actuales y datos reales de Alibaba, no solo conocimiento guardado."
        },
        {
          "q": "¿Puedo probarlo gratis?",
          "a": "Sí, el plan gratuito ejecuta una investigación sin tarjeta."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work para automatización de flujos",
      "tagline": "Tareas repetitivas que el agente ejecuta según agenda",
      "metaTitle": "Accio Work para automatización de flujos | automatización de flujos con IA",
      "metaDescription": "Las tareas que se comen tu semana suelen ser las mismas. Accio Work las convierte en automatizaciones, que corren según agenda y entre las apps que ya usas",
      "h1": "Accio Work para automatización de flujos",
      "intro": "Las tareas que se comen tu semana suelen ser las mismas. Accio Work las convierte en automatizaciones, que corren según agenda y entre las apps que ya usas, para que lo rutinario se haga solo.",
      "pain": [
        "Los mismos pasos manuales cada día",
        "Copiar y pegar entre apps que no se hablan",
        "Trabajo que solo ocurre cuando lo recuerdas"
      ],
      "caps": [
        {
          "title": "Construir el flujo",
          "desc": "Describe la tarea y el agente arma los pasos."
        },
        {
          "title": "Conectar tus apps",
          "desc": "Funciona con las herramientas que ya usas."
        },
        {
          "title": "Ejecutar según agenda",
          "desc": "Lo configuras y la tarea se dispara sin ti."
        },
        {
          "title": "Vigilar y ajustar",
          "desc": "Ves las ejecuciones, ajustas pasos, lo mantienes fiable."
        }
      ],
      "outcomes": [
        "Una automatización funcionando",
        "Apps conectadas",
        "Una agenda que corre",
        "Horas recuperadas cada semana"
      ],
      "faq": [
        {
          "q": "¿Qué puede automatizar Accio Work?",
          "a": "Tareas repetitivas de varios pasos entre tus apps, según una agenda que fijes."
        },
        {
          "q": "¿Se conecta a otras herramientas?",
          "a": "Sí, funciona con muchas apps para que los pasos no requieran copiar y pegar."
        },
        {
          "q": "¿Hay un plan gratuito?",
          "a": "Sí, empieza sin tarjeta y crea tu primera automatización."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work para herramientas a medida",
      "tagline": "Pequeñas herramientas internas, creadas al describirlas",
      "metaTitle": "Accio Work para herramientas a medida | herramientas a medida con IA",
      "metaDescription": "A veces la herramienta que necesitas aún no existe. Accio Work crea pequeñas herramientas internas a partir de una descripción sencilla, para que tengas la",
      "h1": "Accio Work para herramientas a medida",
      "intro": "A veces la herramienta que necesitas aún no existe. Accio Work crea pequeñas herramientas internas a partir de una descripción sencilla, para que tengas la calculadora, el tracker o el panel sin cola de desarrollo.",
      "pain": [
        "Las herramientas de catálogo nunca encajan del todo",
        "Necesidades internas simples esperan tras la cola de desarrollo",
        "Hojas de cálculo estiradas mucho más de lo debido"
      ],
      "caps": [
        {
          "title": "Describir la herramienta",
          "desc": "Di en palabras simples qué debe hacer."
        },
        {
          "title": "Obtener una versión funcional",
          "desc": "El agente produce algo usable, no una especificación."
        },
        {
          "title": "Conectar tus datos",
          "desc": "Se conecta a las fuentes que la herramienta necesita."
        },
        {
          "title": "Iterar por chat",
          "desc": "La cambias pidiéndolo, sin rehacer desde cero."
        }
      ],
      "outcomes": [
        "Una herramienta interna funcionando",
        "Tus datos conectados",
        "Cambios por chat",
        "Sin cola de desarrollo"
      ],
      "faq": [
        {
          "q": "¿Qué tipo de herramientas puede crear?",
          "a": "Pequeñas herramientas internas como calculadoras, trackers y paneles simples, desde una descripción."
        },
        {
          "q": "¿Necesito programar?",
          "a": "No, describes lo que quieres y lo ajustas chateando."
        },
        {
          "q": "¿Puedo probarlo gratis?",
          "a": "Sí, el plan gratuito te deja crear una primera herramienta sin tarjeta."
        }
      ]
    }
  },
  "zh": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work 助力代发货",
      "tagline": "从发现趋势到首单，无需在工具间切换",
      "metaTitle": "Accio Work 助力代发货 | AI 代发货工具",
      "metaDescription": "代发货成败在于速度。Accio Work 跑完整个闭环，发现商品、找到供应商、搭好详情页并起草广告，让你在趋势还热时就出手。",
      "h1": "Accio Work 助力代发货",
      "intro": "代发货成败在于速度。Accio Work 跑完整个闭环，发现商品、找到供应商、搭好详情页并起草广告，让你在趋势还热时就出手。",
      "pain": [
        "趋势变化快过你手动调研的速度",
        "核验供应商在开卖前就耗掉好几天",
        "详情页、图片和广告分散在五个不同工具里"
      ],
      "caps": [
        {
          "title": "找到值得卖的商品",
          "desc": "智能体看的是需求信号和利润，而不只是表面热度。"
        },
        {
          "title": "寻找并核验供应商",
          "desc": "调取已核验的阿里巴巴供应商，查看历史并起草首封询盘。"
        },
        {
          "title": "搭建商品详情页",
          "desc": "可直接发布的商品图片、描述和店铺页面。"
        },
        {
          "title": "起草广告组",
          "desc": "可当天上线的卖点、文案和素材。"
        }
      ],
      "outcomes": [
        "一份有真实利润的商品短名单",
        "已发询盘的已核验供应商",
        "可发布的店铺页面",
        "可上线的广告文案与素材"
      ],
      "faq": [
        {
          "q": "Accio Work 能找代发货商品吗？",
          "a": "能，它分析需求和利润信号给出短名单，再为你选中的商品寻找供应商。"
        },
        {
          "q": "它能对接阿里巴巴供应商吗？",
          "a": "能，寻源和核验基于阿里巴巴真实交易数据，还能起草首封询盘。"
        },
        {
          "q": "有免费方案吗？",
          "a": "有，无需绑卡即可跑完从选品到供应商的完整流程。"
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work 助力供应商寻源",
      "tagline": "已核验的供应商与已发出的询盘，省去来回拉扯",
      "metaTitle": "Accio Work 助力供应商寻源 | AI 供应商寻源",
      "metaDescription": "寻源慢，是因为全靠手动：搜索、比较、发邮件、追进度。Accio Work 承担这些跑腿活，呈现已核验的供应商并起草沟通，让你把时间花在决策上，而不是翻找。",
      "h1": "Accio Work 助力供应商寻源",
      "intro": "寻源慢，是因为全靠手动：搜索、比较、发邮件、追进度。Accio Work 承担这些跑腿活，呈现已核验的供应商并起草沟通，让你把时间花在决策上，而不是翻找。",
      "pain": [
        "无数标签页里都是你无法核实的供应商",
        "一遍又一遍写同样的询盘邮件",
        "没有简单的办法把报价并排比较"
      ],
      "caps": [
        {
          "title": "发现已核验的供应商",
          "desc": "基于阿里巴巴真实交易数据搜索，并按历史记录筛选。"
        },
        {
          "title": "按要点比较",
          "desc": "价格、起订量、回复率和历史，一屏看清。"
        },
        {
          "title": "发出首封询盘",
          "desc": "为每个供应商起草并发送清晰的消息。"
        },
        {
          "title": "跟进回复",
          "desc": "把报价和对话集中在一起，让你快速决策。"
        }
      ],
      "outcomes": [
        "一份已核验供应商短名单",
        "已起草并发出的询盘",
        "可对比的报价",
        "有理有据的明确选择"
      ],
      "faq": [
        {
          "q": "Accio Work 如何核验供应商？",
          "a": "它用阿里巴巴真实交易数据，在你联系前先看历史、回复率和信誉。"
        },
        {
          "q": "它能替我联系供应商吗？",
          "a": "能，它起草并可发送首封询盘，然后把回复集中管理。"
        },
        {
          "q": "试用需要付费方案吗？",
          "a": "不需要，免费方案即可无卡运行一次寻源任务。"
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work 助力内容与营销",
      "tagline": "落地页、商品文案和帖子，按计划自动发布",
      "metaTitle": "Accio Work 助力内容与营销 | 电商 AI 内容",
      "metaDescription": "营销内容像跑步机。Accio Work 写好落地页、商品卡和社媒帖子，再排期发布，让你的渠道保持活跃，无需整天守着键盘。",
      "h1": "Accio Work 助力内容与营销",
      "intro": "营销内容像跑步机。Accio Work 写好落地页、商品卡和社媒帖子，再排期发布，让你的渠道保持活跃，无需整天守着键盘。",
      "pain": [
        "每次上新品都面对一张白纸",
        "同一段文案要为五个渠道重写",
        "一条条手动发布"
      ],
      "caps": [
        {
          "title": "写好落地页",
          "desc": "结构、文案和行动号召，随时可发布。"
        },
        {
          "title": "填充商品卡",
          "desc": "与你目录相符的标题、要点和描述。"
        },
        {
          "title": "制作社媒帖子",
          "desc": "面向平台、带钩子的帖子，不灌水。"
        },
        {
          "title": "排期并发布",
          "desc": "按你设定的时间排队并发布。"
        }
      ],
      "outcomes": [
        "一个完成的落地页",
        "填好的商品卡",
        "一周的社媒帖子",
        "正在运行的发布排期"
      ],
      "faq": [
        {
          "q": "Accio Work 能替我发布内容吗？",
          "a": "能，它可以排期并发布到你的渠道，不只是写文案。"
        },
        {
          "q": "文案会贴合我的品牌吗？",
          "a": "你给它语气和产品，它据此撰写，而非套话。"
        },
        {
          "q": "可以免费试用吗？",
          "a": "可以，免费方案无需绑卡即可开始。"
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work 助力市场调研",
      "tagline": "竞品、需求与定价，替你读懂",
      "metaTitle": "Accio Work 助力市场调研 | AI 市场调研",
      "metaDescription": "好决策始于看清市场。Accio Work 汇集竞品动作、需求信号和定价，再交给你一份可落地的摘要，而不是一堆标签页。",
      "h1": "Accio Work 助力市场调研",
      "intro": "好决策始于看清市场。Accio Work 汇集竞品动作、需求信号和定价，再交给你一份可落地的摘要，而不是一堆标签页。",
      "pain": [
        "调研散落在标签页和截图里",
        "每周手动查看竞品页面",
        "对需求和价格只能靠猜"
      ],
      "caps": [
        {
          "title": "梳理竞品格局",
          "desc": "谁在卖、卖什么价、用什么切入点。"
        },
        {
          "title": "读懂需求信号",
          "desc": "兴趣在哪里上升，在哪里消退。"
        },
        {
          "title": "跟踪定价",
          "desc": "市场如何为商品定价，空档在哪里。"
        },
        {
          "title": "汇总结论",
          "desc": "一份带决策的简报，而非原始数据。"
        }
      ],
      "outcomes": [
        "一张竞品地图",
        "一份需求解读",
        "一份定价视图",
        "一份可执行的简报"
      ],
      "faq": [
        {
          "q": "Accio Work 能调研什么？",
          "a": "围绕某个商品或细分市场的竞品、需求信号和定价，汇总成一份简报。"
        },
        {
          "q": "它用实时数据吗？",
          "a": "它调取当前来源和阿里巴巴真实交易数据，而不仅是已有知识。"
        },
        {
          "q": "可以免费试用吗？",
          "a": "可以，免费方案无需绑卡即可运行一次调研。"
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work 助力工作流自动化",
      "tagline": "重复性任务由智能体按计划执行",
      "metaTitle": "Accio Work 助力工作流自动化 | AI 工作流自动化",
      "metaDescription": "吃掉你一周的任务，往往每次都一样。Accio Work 把它们变成自动化，按计划运行并贯穿你已在用的应用，让例行工作自行完成。",
      "h1": "Accio Work 助力工作流自动化",
      "intro": "吃掉你一周的任务，往往每次都一样。Accio Work 把它们变成自动化，按计划运行并贯穿你已在用的应用，让例行工作自行完成。",
      "pain": [
        "每天都是同样的手动步骤",
        "在互不相通的应用间复制粘贴",
        "只有你记得时才会发生的工作"
      ],
      "caps": [
        {
          "title": "搭建工作流",
          "desc": "描述任务，智能体排好步骤。"
        },
        {
          "title": "连接你的应用",
          "desc": "贯穿你已经在用的工具。"
        },
        {
          "title": "按计划运行",
          "desc": "设定后，任务无需你也会触发。"
        },
        {
          "title": "观察并调整",
          "desc": "查看运行、微调步骤、保持可靠。"
        }
      ],
      "outcomes": [
        "一套可用的自动化",
        "已连接的应用",
        "一个持续运行的排期",
        "每周省回的时间"
      ],
      "faq": [
        {
          "q": "Accio Work 能自动化什么？",
          "a": "跨你各个应用、按你设定排期运行的可重复多步骤任务。"
        },
        {
          "q": "它能连接其他工具吗？",
          "a": "能，它贯穿多个应用，让步骤无需手动复制粘贴。"
        },
        {
          "q": "有免费方案吗？",
          "a": "有，无需绑卡即可开始并搭建第一个自动化。"
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work 助力定制工具",
      "tagline": "小型内部工具，描述一下即可生成",
      "metaTitle": "Accio Work 助力定制工具 | AI 定制工具",
      "metaDescription": "有时你要的工具还不存在。Accio Work 根据一段普通描述就能造出小型内部工具，让你无需排队等开发，就有了计算器、跟踪器或仪表盘。",
      "h1": "Accio Work 助力定制工具",
      "intro": "有时你要的工具还不存在。Accio Work 根据一段普通描述就能造出小型内部工具，让你无需排队等开发，就有了计算器、跟踪器或仪表盘。",
      "pain": [
        "现成工具从来无法精准贴合需求",
        "简单的内部需求排在开发待办后面",
        "被硬撑到远超本职的电子表格"
      ],
      "caps": [
        {
          "title": "描述这个工具",
          "desc": "用大白话说清它要做什么。"
        },
        {
          "title": "拿到可用成品",
          "desc": "智能体交付能用的东西，而不是一份规格书。"
        },
        {
          "title": "接入你的数据",
          "desc": "连接工具所需的数据源。"
        },
        {
          "title": "在对话中迭代",
          "desc": "开口就能改，无需从零重建。"
        }
      ],
      "outcomes": [
        "一个可用的内部工具",
        "接入的你的数据",
        "对话即可修改",
        "无需排队开发"
      ],
      "faq": [
        {
          "q": "它能做哪类工具？",
          "a": "从一段普通描述出发，做出计算器、跟踪器和简单仪表盘等小型内部工具。"
        },
        {
          "q": "我需要写代码吗？",
          "a": "不需要，你描述需求，再通过对话调整。"
        },
        {
          "q": "可以免费试用吗？",
          "a": "可以，免费方案让你无卡搭建第一个工具。"
        }
      ]
    }
  },
  "pt": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work para dropshipping",
      "tagline": "Da tendência à primeira venda sem trocar de ferramenta",
      "metaTitle": "Accio Work para dropshipping | ferramenta de IA para dropshipping",
      "metaDescription": "No dropshipping tudo depende da velocidade. O Accio Work percorre o ciclo inteiro, encontra um produto, um fornecedor, monta a página e rascunha os anúncios",
      "h1": "Accio Work para dropshipping",
      "intro": "No dropshipping tudo depende da velocidade. O Accio Work percorre o ciclo inteiro, encontra um produto, um fornecedor, monta a página e rascunha os anúncios, para você agir enquanto a tendência ainda está quente.",
      "pain": [
        "As tendências correm mais rápido do que você pesquisa à mão",
        "Verificar fornecedores devora dias antes de vender",
        "Páginas, imagens e anúncios vivem em cinco ferramentas diferentes"
      ],
      "caps": [
        {
          "title": "Encontrar produtos que valem",
          "desc": "O agente olha sinais de demanda e margens, não só o que parece popular."
        },
        {
          "title": "Buscar e verificar fornecedores",
          "desc": "Traz fornecedores verificados do Alibaba, checa o histórico e rascunha a primeira consulta."
        },
        {
          "title": "Montar a página",
          "desc": "Imagens de produto, descrições e uma página de loja prontas para publicar."
        },
        {
          "title": "Rascunhar os anúncios",
          "desc": "Ângulos, textos e criativos que você põe no ar no mesmo dia."
        }
      ],
      "outcomes": [
        "Uma lista curta de produtos com margem real",
        "Fornecedores verificados com consultas enviadas",
        "Uma página de loja pronta para publicar",
        "Textos e criativos para lançar"
      ],
      "faq": [
        {
          "q": "O Accio Work encontra produtos para dropshipping?",
          "a": "Sim, ele analisa sinais de demanda e margem, devolve uma lista curta e busca fornecedores para os que você escolher."
        },
        {
          "q": "Funciona com fornecedores do Alibaba?",
          "a": "Sim, a busca e verificação usam dados reais do Alibaba e ele pode rascunhar a primeira consulta."
        },
        {
          "q": "Existe plano gratuito?",
          "a": "Sim, comece sem cartão e rode o fluxo completo de produto a fornecedor."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work para sourcing de fornecedores",
      "tagline": "Fornecedores verificados e consultas enviadas, sem idas e vindas",
      "metaTitle": "Accio Work para sourcing de fornecedores | sourcing de fornecedores com IA",
      "metaDescription": "O sourcing é lento porque é tudo manual, buscar, comparar, escrever, cobrar. O Accio Work faz o trabalho pesado, mostra fornecedores verificados e redige o",
      "h1": "Accio Work para sourcing de fornecedores",
      "intro": "O sourcing é lento porque é tudo manual, buscar, comparar, escrever, cobrar. O Accio Work faz o trabalho pesado, mostra fornecedores verificados e redige o contato, para você gastar tempo decidindo, não garimpando.",
      "pain": [
        "Abas sem fim com fornecedores que você não consegue verificar",
        "Escrever o mesmo e-mail de consulta repetidas vezes",
        "Nenhuma forma fácil de comparar cotações lado a lado"
      ],
      "caps": [
        {
          "title": "Descobrir fornecedores verificados",
          "desc": "Busca em dados comerciais reais do Alibaba e filtra por histórico."
        },
        {
          "title": "Comparar o que importa",
          "desc": "Preço, MOQ, taxa de resposta e histórico em uma só visão."
        },
        {
          "title": "Enviar a primeira consulta",
          "desc": "Prepara e envia uma mensagem clara para cada fornecedor."
        },
        {
          "title": "Acompanhar as respostas",
          "desc": "Mantém cotações e conversas juntas para você decidir rápido."
        }
      ],
      "outcomes": [
        "Uma lista curta de fornecedores verificados",
        "Consultas redigidas e enviadas",
        "Cotações alinhadas para comparar",
        "Uma escolha clara com motivos"
      ],
      "faq": [
        {
          "q": "Como o Accio Work verifica fornecedores?",
          "a": "Usa dados reais do Alibaba para checar histórico, taxa de resposta e reputação antes de você entrar em contato."
        },
        {
          "q": "Ele contata fornecedores por mim?",
          "a": "Sim, redige e pode enviar a primeira consulta, e depois mantém as respostas juntas."
        },
        {
          "q": "Preciso de plano pago para testar?",
          "a": "Não, o plano gratuito permite uma tarefa de sourcing sem cartão."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work para conteúdo e marketing",
      "tagline": "Landing pages, textos de produto e posts, publicados no horário",
      "metaTitle": "Accio Work para conteúdo e marketing | conteúdo com IA para e-commerce",
      "metaDescription": "Conteúdo de marketing é uma esteira. O Accio Work escreve a landing page, as fichas de produto e os posts, e depois agenda tudo, para seus canais seguirem",
      "h1": "Accio Work para conteúdo e marketing",
      "intro": "Conteúdo de marketing é uma esteira. O Accio Work escreve a landing page, as fichas de produto e os posts, e depois agenda tudo, para seus canais seguirem vivos sem você o dia todo no teclado.",
      "pain": [
        "Página em branco a cada lançamento de produto",
        "Reescrever o mesmo texto para cinco canais",
        "Publicar na mão, post a post"
      ],
      "caps": [
        {
          "title": "Escrever a landing page",
          "desc": "Estrutura, textos e chamadas para ação prontos para publicar."
        },
        {
          "title": "Preencher fichas de produto",
          "desc": "Títulos, tópicos e descrições alinhados ao seu catálogo."
        },
        {
          "title": "Criar posts sociais",
          "desc": "Posts prontos para a plataforma com ganchos, sem enrolação."
        },
        {
          "title": "Agendar e publicar",
          "desc": "Enfileira e publica nos horários que você definir."
        }
      ],
      "outcomes": [
        "Uma landing page pronta",
        "Fichas de produto preenchidas",
        "Uma semana de posts sociais",
        "Um calendário de publicação rodando"
      ],
      "faq": [
        {
          "q": "O Accio Work publica conteúdo por mim?",
          "a": "Sim, ele agenda e publica nos seus canais, não só rascunha o texto."
        },
        {
          "q": "O texto combina com minha marca?",
          "a": "Você dá o tom e os produtos, e ele escreve conforme isso, não enrolação genérica."
        },
        {
          "q": "Dá para testar de graça?",
          "a": "Sim, comece no plano gratuito sem cartão."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work para pesquisa de mercado",
      "tagline": "Concorrentes, demanda e preços, lidos por você",
      "metaTitle": "Accio Work para pesquisa de mercado | pesquisa de mercado com IA",
      "metaDescription": "Boas decisões começam com uma leitura clara do mercado. O Accio Work reúne movimentos dos concorrentes, sinais de demanda e preços, e entrega um resumo",
      "h1": "Accio Work para pesquisa de mercado",
      "intro": "Boas decisões começam com uma leitura clara do mercado. O Accio Work reúne movimentos dos concorrentes, sinais de demanda e preços, e entrega um resumo acionável em vez de uma pilha de abas.",
      "pain": [
        "Pesquisa espalhada entre abas e prints",
        "Páginas de concorrentes conferidas à mão toda semana",
        "Adivinhação sobre onde estão demanda e preço"
      ],
      "caps": [
        {
          "title": "Mapear os concorrentes",
          "desc": "Quem vende, a que preço, com qual ângulo."
        },
        {
          "title": "Ler sinais de demanda",
          "desc": "Onde o interesse sobe e onde esfria."
        },
        {
          "title": "Acompanhar preços",
          "desc": "Como o mercado precifica e onde estão as lacunas."
        },
        {
          "title": "Resumir a decisão",
          "desc": "Um brief curto com a decisão, não dados crus."
        }
      ],
      "outcomes": [
        "Um mapa de concorrentes",
        "Uma leitura da demanda",
        "Uma visão de preços",
        "Um brief acionável"
      ],
      "faq": [
        {
          "q": "O que o Accio Work pode pesquisar?",
          "a": "Concorrentes, sinais de demanda e preços de um produto ou nicho, resumidos em um brief curto."
        },
        {
          "q": "Ele usa dados ao vivo?",
          "a": "Puxa fontes atuais e dados reais do Alibaba, não só conhecimento armazenado."
        },
        {
          "q": "Posso testar de graça?",
          "a": "Sim, o plano gratuito roda uma pesquisa sem cartão."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work para automação de fluxos",
      "tagline": "Tarefas repetitivas que o agente executa no horário",
      "metaTitle": "Accio Work para automação de fluxos | automação de fluxos com IA",
      "metaDescription": "As tarefas que devoram sua semana costumam ser as mesmas. O Accio Work as transforma em automações, que rodam no horário e entre os apps que você já usa",
      "h1": "Accio Work para automação de fluxos",
      "intro": "As tarefas que devoram sua semana costumam ser as mesmas. O Accio Work as transforma em automações, que rodam no horário e entre os apps que você já usa, para o trabalho rotineiro se resolver sozinho.",
      "pain": [
        "Os mesmos passos manuais todos os dias",
        "Copiar e colar entre apps que não conversam",
        "Trabalho que só acontece quando você lembra"
      ],
      "caps": [
        {
          "title": "Construir o fluxo",
          "desc": "Descreva a tarefa e o agente monta os passos."
        },
        {
          "title": "Conectar seus apps",
          "desc": "Funciona com as ferramentas que você já usa."
        },
        {
          "title": "Rodar no horário",
          "desc": "Você configura e a tarefa dispara sem você."
        },
        {
          "title": "Observar e ajustar",
          "desc": "Veja as execuções, ajuste passos, mantenha confiável."
        }
      ],
      "outcomes": [
        "Uma automação funcionando",
        "Apps conectados",
        "Um agendamento que roda",
        "Horas de volta por semana"
      ],
      "faq": [
        {
          "q": "O que o Accio Work pode automatizar?",
          "a": "Tarefas repetitivas de várias etapas entre seus apps, num agendamento que você define."
        },
        {
          "q": "Ele conecta a outras ferramentas?",
          "a": "Sim, funciona com muitos apps para que os passos não exijam copiar e colar."
        },
        {
          "q": "Existe plano gratuito?",
          "a": "Sim, comece sem cartão e crie sua primeira automação."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work para ferramentas sob medida",
      "tagline": "Pequenas ferramentas internas, criadas ao descrevê-las",
      "metaTitle": "Accio Work para ferramentas sob medida | ferramentas sob medida com IA",
      "metaDescription": "Às vezes a ferramenta de que você precisa ainda não existe. O Accio Work cria pequenas ferramentas internas a partir de uma descrição simples, para você ter",
      "h1": "Accio Work para ferramentas sob medida",
      "intro": "Às vezes a ferramenta de que você precisa ainda não existe. O Accio Work cria pequenas ferramentas internas a partir de uma descrição simples, para você ter a calculadora, o tracker ou o painel sem fila de desenvolvimento.",
      "pain": [
        "Ferramentas de prateleira nunca encaixam no trabalho exato",
        "Necessidades internas simples esperam na fila de desenvolvimento",
        "Planilhas esticadas muito além do que deveriam"
      ],
      "caps": [
        {
          "title": "Descrever a ferramenta",
          "desc": "Diga em palavras simples o que ela deve fazer."
        },
        {
          "title": "Ter uma versão funcional",
          "desc": "O agente entrega algo usável, não uma especificação."
        },
        {
          "title": "Conectar seus dados",
          "desc": "Ele liga às fontes de que a ferramenta precisa."
        },
        {
          "title": "Iterar por chat",
          "desc": "Você muda pedindo, sem refazer do zero."
        }
      ],
      "outcomes": [
        "Uma ferramenta interna funcionando",
        "Seus dados conectados",
        "Mudanças por chat",
        "Sem fila de desenvolvimento"
      ],
      "faq": [
        {
          "q": "Que tipo de ferramentas ele cria?",
          "a": "Pequenas ferramentas internas como calculadoras, trackers e painéis simples, a partir de uma descrição."
        },
        {
          "q": "Preciso programar?",
          "a": "Não, você descreve o que quer e ajusta conversando."
        },
        {
          "q": "Posso testar de graça?",
          "a": "Sim, o plano gratuito deixa você criar uma primeira ferramenta sem cartão."
        }
      ]
    }
  },
  "hi": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "ड्रॉपशिपिंग के लिए Accio Work",
      "tagline": "ट्रेंड से पहली बिक्री तक, टूल बदले बिना",
      "metaTitle": "ड्रॉपशिपिंग के लिए Accio Work | ड्रॉपशिपिंग के लिए AI टूल",
      "metaDescription": "ड्रॉपशिपिंग में सब कुछ रफ्तार पर टिका है। Accio Work पूरा चक्र चलाता है, प्रोडक्ट ढूंढना, सप्लायर खोजना, लिस्टिंग बनाना और विज्ञापन के ड्राफ्ट, ताकि आप",
      "h1": "ड्रॉपशिपिंग के लिए Accio Work",
      "intro": "ड्रॉपशिपिंग में सब कुछ रफ्तार पर टिका है। Accio Work पूरा चक्र चलाता है, प्रोडक्ट ढूंढना, सप्लायर खोजना, लिस्टिंग बनाना और विज्ञापन के ड्राफ्ट, ताकि आप ट्रेंड गर्म रहते ही आगे बढ़ें।",
      "pain": [
        "ट्रेंड आपकी मैनुअल रिसर्च से तेज बदलते हैं",
        "सप्लायर जांचना बिक्री से पहले ही कई दिन खा जाता है",
        "लिस्टिंग, इमेज और विज्ञापन पांच अलग टूल में बिखरे"
      ],
      "caps": [
        {
          "title": "बिकने लायक प्रोडक्ट ढूंढना",
          "desc": "एजेंट सिर्फ दिखावटी लोकप्रियता नहीं, मांग के संकेत और मार्जिन देखता है।"
        },
        {
          "title": "सप्लायर खोजना और जांचना",
          "desc": "जांचे हुए Alibaba सप्लायर लाता है, इतिहास देखता है और पहली पूछताछ तैयार करता है।"
        },
        {
          "title": "लिस्टिंग बनाना",
          "desc": "प्रोडक्ट इमेज, विवरण और स्टोर पेज, प्रकाशन के लिए तैयार।"
        },
        {
          "title": "विज्ञापन का ड्राफ्ट",
          "desc": "एंगल, कॉपी और क्रिएटिव, जिन्हें उसी दिन लाइव किया जा सके।"
        }
      ],
      "outcomes": [
        "असली मार्जिन वाले प्रोडक्ट की शॉर्टलिस्ट",
        "भेजी गई पूछताछ के साथ जांचे सप्लायर",
        "प्रकाशन के लिए तैयार स्टोर पेज",
        "लॉन्च के लिए विज्ञापन कॉपी और क्रिएटिव"
      ],
      "faq": [
        {
          "q": "क्या Accio Work ड्रॉपशिपिंग प्रोडक्ट ढूंढ सकता है?",
          "a": "हां, यह मांग और मार्जिन के संकेत देखकर शॉर्टलिस्ट देता है, फिर चुने गए के लिए सप्लायर खोजता है।"
        },
        {
          "q": "क्या यह Alibaba सप्लायर के साथ काम करता है?",
          "a": "हां, खोज और जांच असली Alibaba ट्रेड डेटा से होती है, और यह पहली पूछताछ तैयार कर सकता है।"
        },
        {
          "q": "क्या मुफ्त प्लान है?",
          "a": "हां, बिना कार्ड शुरू करें और प्रोडक्ट से सप्लायर तक पूरा फ्लो चलाएं।"
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "सप्लायर सोर्सिंग के लिए Accio Work",
      "tagline": "जांचे हुए सप्लायर और भेजी गई पूछताछ, बिना बार बार के",
      "metaTitle": "सप्लायर सोर्सिंग के लिए Accio Work | AI सप्लायर सोर्सिंग",
      "metaDescription": "सोर्सिंग धीमी है क्योंकि सब मैनुअल है, खोजना, तुलना, ईमेल, पीछा करना। Accio Work भागदौड़ खुद करता है, जांचे हुए सप्लायर दिखाता है और संदेश तैयार करता है",
      "h1": "सप्लायर सोर्सिंग के लिए Accio Work",
      "intro": "सोर्सिंग धीमी है क्योंकि सब मैनुअल है, खोजना, तुलना, ईमेल, पीछा करना। Accio Work भागदौड़ खुद करता है, जांचे हुए सप्लायर दिखाता है और संदेश तैयार करता है, ताकि आप खोदने में नहीं, तय करने में समय दें।",
      "pain": [
        "अनगिनत टैब, जिनमें सप्लायर जांचे नहीं जा सकते",
        "बार बार वही पूछताछ ईमेल लिखना",
        "कोटेशन को साथ रखकर तुलना करने का आसान तरीका नहीं"
      ],
      "caps": [
        {
          "title": "जांचे हुए सप्लायर खोजना",
          "desc": "असली Alibaba ट्रेड डेटा में खोजता है और रिकॉर्ड के आधार पर छांटता है।"
        },
        {
          "title": "जो मायने रखे उस पर तुलना",
          "desc": "कीमत, MOQ, रिस्पॉन्स रेट और इतिहास एक ही व्यू में।"
        },
        {
          "title": "पहली पूछताछ भेजना",
          "desc": "हर सप्लायर के लिए साफ संदेश तैयार कर भेजता है।"
        },
        {
          "title": "जवाब ट्रैक करना",
          "desc": "कोटेशन और बातचीत एक साथ रखता है ताकि जल्दी तय करें।"
        }
      ],
      "outcomes": [
        "जांचे हुए सप्लायर की शॉर्टलिस्ट",
        "तैयार और भेजी गई पूछताछ",
        "तुलना के लिए कतार में कोटेशन",
        "कारणों सहित स्पष्ट चुनाव"
      ],
      "faq": [
        {
          "q": "Accio Work सप्लायर कैसे जांचता है?",
          "a": "संपर्क से पहले यह असली Alibaba ट्रेड डेटा से इतिहास, रिस्पॉन्स रेट और रिकॉर्ड देखता है।"
        },
        {
          "q": "क्या यह मेरे लिए सप्लायर से संपर्क कर सकता है?",
          "a": "हां, यह पहली पूछताछ तैयार कर भेज सकता है, फिर जवाब एक साथ रखता है।"
        },
        {
          "q": "क्या आज़माने के लिए पेड प्लान चाहिए?",
          "a": "नहीं, मुफ्त प्लान बिना कार्ड एक सोर्सिंग काम चलाने देता है।"
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "कंटेंट और मार्केटिंग के लिए Accio Work",
      "tagline": "लैंडिंग पेज, प्रोडक्ट कॉपी और पोस्ट, तय समय पर प्रकाशित",
      "metaTitle": "कंटेंट और मार्केटिंग के लिए Accio Work | ई-कॉमर्स के लिए AI कंटेंट",
      "metaDescription": "मार्केटिंग कंटेंट एक ट्रेडमिल है। Accio Work लैंडिंग पेज, प्रोडक्ट कार्ड और सोशल पोस्ट लिखता है, फिर उन्हें शेड्यूल करता है, ताकि आपके चैनल दिन भर कीबोर्ड पर",
      "h1": "कंटेंट और मार्केटिंग के लिए Accio Work",
      "intro": "मार्केटिंग कंटेंट एक ट्रेडमिल है। Accio Work लैंडिंग पेज, प्रोडक्ट कार्ड और सोशल पोस्ट लिखता है, फिर उन्हें शेड्यूल करता है, ताकि आपके चैनल दिन भर कीबोर्ड पर बैठे बिना जीवित रहें।",
      "pain": [
        "हर प्रोडक्ट लॉन्च पर खाली पन्ना",
        "वही कॉपी पांच चैनलों के लिए दोबारा लिखना",
        "एक एक पोस्ट हाथ से प्रकाशित करना"
      ],
      "caps": [
        {
          "title": "लैंडिंग पेज लिखना",
          "desc": "संरचना, कॉपी और कॉल टू एक्शन, प्रकाशन के लिए तैयार।"
        },
        {
          "title": "प्रोडक्ट कार्ड भरना",
          "desc": "आपके कैटलॉग से मेल खाते शीर्षक, बुलेट और विवरण।"
        },
        {
          "title": "सोशल पोस्ट बनाना",
          "desc": "प्लेटफॉर्म के लिए तैयार, हुक वाले पोस्ट, भराव नहीं।"
        },
        {
          "title": "शेड्यूल और प्रकाशित",
          "desc": "आपके तय समय पर कतार में लगाकर पोस्ट करता है।"
        }
      ],
      "outcomes": [
        "एक पूरा लैंडिंग पेज",
        "भरे हुए प्रोडक्ट कार्ड",
        "एक हफ्ते के सोशल पोस्ट",
        "चलता हुआ प्रकाशन शेड्यूल"
      ],
      "faq": [
        {
          "q": "क्या Accio Work मेरे लिए कंटेंट पब्लिश करेगा?",
          "a": "हां, यह सिर्फ टेक्स्ट नहीं, आपके चैनलों पर शेड्यूल और पब्लिश भी कर सकता है।"
        },
        {
          "q": "क्या कॉपी मेरे ब्रांड से मेल खाएगी?",
          "a": "आप टोन और प्रोडक्ट देते हैं, यह उसी के अनुसार लिखता है, सामान्य भराव नहीं।"
        },
        {
          "q": "क्या यह मुफ्त आज़माने योग्य है?",
          "a": "हां, बिना कार्ड मुफ्त प्लान पर शुरू करें।"
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "मार्केट रिसर्च के लिए Accio Work",
      "tagline": "प्रतियोगी, मांग और कीमत, आपके लिए पढ़े गए",
      "metaTitle": "मार्केट रिसर्च के लिए Accio Work | AI मार्केट रिसर्च",
      "metaDescription": "अच्छे फैसले बाजार की साफ समझ से शुरू होते हैं। Accio Work प्रतियोगियों की चालें, मांग के संकेत और कीमतें जुटाता है, फिर ढेर सारे टैब के बजाय काम लायक सारांश",
      "h1": "मार्केट रिसर्च के लिए Accio Work",
      "intro": "अच्छे फैसले बाजार की साफ समझ से शुरू होते हैं। Accio Work प्रतियोगियों की चालें, मांग के संकेत और कीमतें जुटाता है, फिर ढेर सारे टैब के बजाय काम लायक सारांश देता है।",
      "pain": [
        "रिसर्च टैब और स्क्रीनशॉट में बिखरी",
        "प्रतियोगियों के पेज हर हफ्ते हाथ से जांचना",
        "मांग और कीमत कहां है, इस पर अंदाज़ा"
      ],
      "caps": [
        {
          "title": "प्रतियोगियों का नक्शा",
          "desc": "कौन बेच रहा है, किस कीमत पर, किस एंगल से।"
        },
        {
          "title": "मांग के संकेत पढ़ना",
          "desc": "रुचि कहां बढ़ रही और कहां घट रही।"
        },
        {
          "title": "कीमत ट्रैक करना",
          "desc": "बाजार किसी प्रोडक्ट की कीमत कैसे तय करता है और गैप कहां हैं।"
        },
        {
          "title": "नतीजा संक्षेप",
          "desc": "कच्चे डेटा नहीं, फैसले वाला छोटा ब्रीफ।"
        }
      ],
      "outcomes": [
        "प्रतियोगियों का नक्शा",
        "मांग की समझ",
        "कीमत का दृश्य",
        "काम लायक ब्रीफ"
      ],
      "faq": [
        {
          "q": "Accio Work क्या रिसर्च कर सकता है?",
          "a": "किसी प्रोडक्ट या निच के लिए प्रतियोगी, मांग के संकेत और कीमत, एक छोटे ब्रीफ में।"
        },
        {
          "q": "क्या यह लाइव डेटा इस्तेमाल करता है?",
          "a": "यह मौजूदा स्रोत और असली Alibaba ट्रेड डेटा लेता है, सिर्फ याद किया ज्ञान नहीं।"
        },
        {
          "q": "क्या मुफ्त आज़मा सकता हूं?",
          "a": "हां, मुफ्त प्लान बिना कार्ड एक रिसर्च चलाता है।"
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "वर्कफ्लो ऑटोमेशन के लिए Accio Work",
      "tagline": "दोहराए जाने वाले काम एजेंट तय समय पर चलाता है",
      "metaTitle": "वर्कफ्लो ऑटोमेशन के लिए Accio Work | AI वर्कफ्लो ऑटोमेशन",
      "metaDescription": "जो काम आपका हफ्ता खा जाते हैं, वे अक्सर हर बार एक जैसे होते हैं। Accio Work उन्हें ऑटोमेशन में बदलता है, जो तय समय पर और आपके मौजूदा ऐप्स में चलते हैं, ताकि",
      "h1": "वर्कफ्लो ऑटोमेशन के लिए Accio Work",
      "intro": "जो काम आपका हफ्ता खा जाते हैं, वे अक्सर हर बार एक जैसे होते हैं। Accio Work उन्हें ऑटोमेशन में बदलता है, जो तय समय पर और आपके मौजूदा ऐप्स में चलते हैं, ताकि रूटीन खुद चले।",
      "pain": [
        "हर दिन वही मैनुअल कदम",
        "उन ऐप्स के बीच कॉपी पेस्ट जो आपस में बात नहीं करते",
        "काम तभी होता है जब आपको याद आता है"
      ],
      "caps": [
        {
          "title": "वर्कफ्लो बनाना",
          "desc": "काम बताइए, एजेंट कदम तय कर देता है।"
        },
        {
          "title": "अपने ऐप्स जोड़ना",
          "desc": "आपके पहले से इस्तेमाल किए टूल के साथ चलता है।"
        },
        {
          "title": "तय समय पर चलाना",
          "desc": "सेट कीजिए और काम आपके बिना चल पड़ता है।"
        },
        {
          "title": "देखना और सुधारना",
          "desc": "रन देखें, कदम बदलें, भरोसेमंद बनाए रखें।"
        }
      ],
      "outcomes": [
        "एक चलती ऑटोमेशन",
        "जुड़े हुए ऐप्स",
        "चलता हुआ शेड्यूल",
        "हर हफ्ते वापस मिले घंटे"
      ],
      "faq": [
        {
          "q": "Accio Work क्या ऑटोमेट कर सकता है?",
          "a": "आपके ऐप्स में दोहराए जाने वाले कई चरणों के काम, आपके तय शेड्यूल पर।"
        },
        {
          "q": "क्या यह दूसरे टूल से जुड़ता है?",
          "a": "हां, यह कई ऐप्स में काम करता है ताकि कदमों में मैनुअल कॉपी पेस्ट न लगे।"
        },
        {
          "q": "क्या मुफ्त प्लान है?",
          "a": "हां, बिना कार्ड शुरू करें और अपनी पहली ऑटोमेशन बनाएं।"
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "कस्टम टूल्स के लिए Accio Work",
      "tagline": "छोटे आंतरिक टूल, बस बताकर बन जाते हैं",
      "metaTitle": "कस्टम टूल्स के लिए Accio Work | AI कस्टम टूल्स",
      "metaDescription": "कभी कभी जो टूल आपको चाहिए वह अभी होता ही नहीं। Accio Work एक सादे विवरण से छोटे आंतरिक टूल बनाता है, ताकि आपको डेवलपर की कतार बिना कैलकुलेटर, ट्रैकर या",
      "h1": "कस्टम टूल्स के लिए Accio Work",
      "intro": "कभी कभी जो टूल आपको चाहिए वह अभी होता ही नहीं। Accio Work एक सादे विवरण से छोटे आंतरिक टूल बनाता है, ताकि आपको डेवलपर की कतार बिना कैलकुलेटर, ट्रैकर या डैशबोर्ड मिल जाए।",
      "pain": [
        "रेडीमेड टूल कभी ठीक काम में फिट नहीं बैठते",
        "सरल आंतरिक जरूरतें डेव बैकलॉग के पीछे इंतजार करती हैं",
        "स्प्रेडशीट अपनी सीमा से कहीं आगे खिंची हुई"
      ],
      "caps": [
        {
          "title": "टूल का विवरण दें",
          "desc": "सादे शब्दों में बताइए इसे क्या करना है।"
        },
        {
          "title": "चलती हुई बिल्ड पाएं",
          "desc": "एजेंट काम की चीज देता है, कोई स्पेसिफिकेशन नहीं।"
        },
        {
          "title": "अपना डेटा जोड़ें",
          "desc": "टूल को जिन स्रोतों की जरूरत हो, उनसे जोड़ता है।"
        },
        {
          "title": "चैट से सुधारें",
          "desc": "मांगकर बदलें, शून्य से दोबारा बनाने की जरूरत नहीं।"
        }
      ],
      "outcomes": [
        "एक चलता आंतरिक टूल",
        "जुड़ा हुआ आपका डेटा",
        "चैट से बदलाव",
        "कोई डेव कतार नहीं"
      ],
      "faq": [
        {
          "q": "यह किस तरह के टूल बना सकता है?",
          "a": "एक सादे विवरण से कैलकुलेटर, ट्रैकर और सरल डैशबोर्ड जैसे छोटे आंतरिक टूल।"
        },
        {
          "q": "क्या मुझे कोड करना होगा?",
          "a": "नहीं, आप बताते हैं क्या चाहिए और चैट से बदलते हैं।"
        },
        {
          "q": "क्या मुफ्त आज़मा सकता हूं?",
          "a": "हां, मुफ्त प्लान बिना कार्ड पहला टूल बनाने देता है।"
        }
      ]
    }
  },
  "fr": {
    "dropshipping": {
      "slug": "dropshipping",
      "name": "Accio Work pour le dropshipping",
      "tagline": "De la tendance à la première vente sans changer d'outil",
      "metaTitle": "Accio Work pour le dropshipping | outil IA pour le dropshipping",
      "metaDescription": "En dropshipping, tout se joue sur la vitesse. Accio Work parcourt toute la boucle, repère un produit, trouve un fournisseur, monte la fiche et rédige les",
      "h1": "Accio Work pour le dropshipping",
      "intro": "En dropshipping, tout se joue sur la vitesse. Accio Work parcourt toute la boucle, repère un produit, trouve un fournisseur, monte la fiche et rédige les annonces, pour que vous agissiez pendant que la tendance est chaude.",
      "pain": [
        "Les tendances vont plus vite que votre recherche à la main",
        "Vérifier les fournisseurs mange des jours avant la moindre vente",
        "Fiches, images et annonces vivent dans cinq outils différents"
      ],
      "caps": [
        {
          "title": "Trouver des produits qui valent le coup",
          "desc": "L'agent regarde les signaux de demande et les marges, pas seulement ce qui a l'air populaire."
        },
        {
          "title": "Sourcer et vérifier les fournisseurs",
          "desc": "Il remonte des fournisseurs Alibaba vérifiés, vérifie l'historique et rédige la première demande."
        },
        {
          "title": "Monter la fiche",
          "desc": "Images produit, descriptions et une page boutique prêtes à publier."
        },
        {
          "title": "Rédiger le jeu d'annonces",
          "desc": "Angles, textes et visuels que vous pouvez mettre en ligne le jour même."
        }
      ],
      "outcomes": [
        "Une liste de produits à marge réelle",
        "Des fournisseurs vérifiés avec demandes envoyées",
        "Une page boutique prête à publier",
        "Textes et visuels d'annonces à lancer"
      ],
      "faq": [
        {
          "q": "Accio Work peut il trouver des produits de dropshipping ?",
          "a": "Oui, il analyse la demande et les marges, renvoie une liste et source des fournisseurs pour vos choix."
        },
        {
          "q": "Fonctionne t il avec les fournisseurs Alibaba ?",
          "a": "Oui, la recherche et la vérification utilisent de vraies données Alibaba, et il rédige la première demande."
        },
        {
          "q": "Y a t il une offre gratuite ?",
          "a": "Oui, démarrez sans carte et déroulez tout le flux du produit au fournisseur."
        }
      ]
    },
    "sourcing": {
      "slug": "sourcing",
      "name": "Accio Work pour le sourcing fournisseurs",
      "tagline": "Fournisseurs vérifiés et demandes envoyées, sans allers-retours",
      "metaTitle": "Accio Work pour le sourcing fournisseurs | sourcing fournisseurs par IA",
      "metaDescription": "Le sourcing est lent parce que tout est manuel, chercher, comparer, écrire, relancer. Accio Work fait le gros du travail, fait remonter des fournisseurs",
      "h1": "Accio Work pour le sourcing fournisseurs",
      "intro": "Le sourcing est lent parce que tout est manuel, chercher, comparer, écrire, relancer. Accio Work fait le gros du travail, fait remonter des fournisseurs vérifiés et rédige la prise de contact, pour que vous passiez du temps à décider, pas à fouiller.",
      "pain": [
        "Des onglets sans fin avec des fournisseurs invérifiables",
        "Écrire encore et encore la même demande",
        "Aucun moyen simple de comparer les devis côte à côte"
      ],
      "caps": [
        {
          "title": "Découvrir des fournisseurs vérifiés",
          "desc": "Il cherche dans les vraies données commerciales d'Alibaba et filtre selon l'historique."
        },
        {
          "title": "Comparer l'essentiel",
          "desc": "Prix, MOQ, taux de réponse et historique en une seule vue."
        },
        {
          "title": "Envoyer la première demande",
          "desc": "Il rédige et envoie un message clair adapté à chaque fournisseur."
        },
        {
          "title": "Suivre les réponses",
          "desc": "Il garde devis et échanges ensemble pour décider vite."
        }
      ],
      "outcomes": [
        "Une liste de fournisseurs vérifiés",
        "Des demandes rédigées et envoyées",
        "Des devis alignés pour comparer",
        "Un choix clair avec des raisons"
      ],
      "faq": [
        {
          "q": "Comment Accio Work vérifie t il les fournisseurs ?",
          "a": "Il utilise de vraies données Alibaba pour vérifier historique, taux de réponse et fiabilité avant tout contact."
        },
        {
          "q": "Peut il contacter les fournisseurs pour moi ?",
          "a": "Oui, il rédige et peut envoyer la première demande, puis garde les réponses ensemble."
        },
        {
          "q": "Faut il une offre payante pour essayer ?",
          "a": "Non, l'offre gratuite permet une tâche de sourcing sans carte."
        }
      ]
    },
    "content": {
      "slug": "content",
      "name": "Accio Work pour le contenu et le marketing",
      "tagline": "Pages de destination, textes produit et posts, publiés selon le planning",
      "metaTitle": "Accio Work pour le contenu et le marketing | contenu IA pour l'e-commerce",
      "metaDescription": "Le contenu marketing est un tapis roulant. Accio Work écrit la page de destination, les fiches produit et les posts sociaux, puis les programme, pour que vos",
      "h1": "Accio Work pour le contenu et le marketing",
      "intro": "Le contenu marketing est un tapis roulant. Accio Work écrit la page de destination, les fiches produit et les posts sociaux, puis les programme, pour que vos canaux restent vivants sans vous au clavier toute la journée.",
      "pain": [
        "Page blanche à chaque lancement de produit",
        "Réécrire le même texte pour cinq canaux",
        "Publier à la main, post après post"
      ],
      "caps": [
        {
          "title": "Écrire la page de destination",
          "desc": "Structure, textes et appels à l'action prêts à publier."
        },
        {
          "title": "Remplir les fiches produit",
          "desc": "Titres, puces et descriptions conformes à votre catalogue."
        },
        {
          "title": "Créer les posts sociaux",
          "desc": "Des posts prêts pour la plateforme avec des accroches, pas du remplissage."
        },
        {
          "title": "Planifier et publier",
          "desc": "Il met en file et publie aux heures que vous fixez."
        }
      ],
      "outcomes": [
        "Une page de destination terminée",
        "Des fiches produit remplies",
        "Une semaine de posts sociaux",
        "Un planning de publication actif"
      ],
      "faq": [
        {
          "q": "Accio Work peut il publier du contenu pour moi ?",
          "a": "Oui, il peut programmer et publier sur vos canaux, pas seulement rédiger le texte."
        },
        {
          "q": "Le texte collera t il à ma marque ?",
          "a": "Vous lui donnez votre ton et vos produits, et il écrit en conséquence, pas du remplissage."
        },
        {
          "q": "Peut on l'essayer gratuitement ?",
          "a": "Oui, démarrez avec l'offre gratuite sans carte."
        }
      ]
    },
    "market-research": {
      "slug": "market-research",
      "name": "Accio Work pour l'étude de marché",
      "tagline": "Concurrents, demande et prix, analysés pour vous",
      "metaTitle": "Accio Work pour l'étude de marché | étude de marché par IA",
      "metaDescription": "Les bonnes décisions commencent par une lecture claire du marché. Accio Work réunit les mouvements des concurrents, les signaux de demande et les prix, puis",
      "h1": "Accio Work pour l'étude de marché",
      "intro": "Les bonnes décisions commencent par une lecture claire du marché. Accio Work réunit les mouvements des concurrents, les signaux de demande et les prix, puis vous remet un résumé exploitable plutôt qu'une pile d'onglets.",
      "pain": [
        "Recherche éparpillée entre onglets et captures",
        "Pages concurrentes vérifiées à la main chaque semaine",
        "Deviner où se situent la demande et le prix"
      ],
      "caps": [
        {
          "title": "Cartographier les concurrents",
          "desc": "Qui vend, à quel prix, avec quel angle."
        },
        {
          "title": "Lire les signaux de demande",
          "desc": "Où l'intérêt monte et où il retombe."
        },
        {
          "title": "Suivre les prix",
          "desc": "Comment le marché fixe un prix et où sont les écarts."
        },
        {
          "title": "Résumer la décision",
          "desc": "Un brief court avec la décision, pas des données brutes."
        }
      ],
      "outcomes": [
        "Une carte des concurrents",
        "Une lecture de la demande",
        "Une vue des prix",
        "Un brief exploitable"
      ],
      "faq": [
        {
          "q": "Que peut rechercher Accio Work ?",
          "a": "Concurrents, signaux de demande et prix pour un produit ou une niche, résumés dans un bref."
        },
        {
          "q": "Utilise t il des données à jour ?",
          "a": "Il puise dans des sources actuelles et de vraies données Alibaba, pas seulement des connaissances stockées."
        },
        {
          "q": "Puis je l'essayer gratuitement ?",
          "a": "Oui, l'offre gratuite lance une recherche sans carte."
        }
      ]
    },
    "automation": {
      "slug": "automation",
      "name": "Accio Work pour l'automatisation des flux",
      "tagline": "Des tâches répétitives que l'agent exécute selon un planning",
      "metaTitle": "Accio Work pour l'automatisation des flux | automatisation des flux par IA",
      "metaDescription": "Les tâches qui dévorent votre semaine sont souvent les mêmes. Accio Work les transforme en automatisations, qui tournent selon un planning et à travers les",
      "h1": "Accio Work pour l'automatisation des flux",
      "intro": "Les tâches qui dévorent votre semaine sont souvent les mêmes. Accio Work les transforme en automatisations, qui tournent selon un planning et à travers les applis que vous utilisez déjà, pour que la routine se fasse seule.",
      "pain": [
        "Les mêmes étapes manuelles chaque jour",
        "Copier coller entre des applis qui ne se parlent pas",
        "Un travail qui n'a lieu que quand vous y pensez"
      ],
      "caps": [
        {
          "title": "Construire le flux",
          "desc": "Décrivez la tâche et l'agent pose les étapes."
        },
        {
          "title": "Connecter vos applis",
          "desc": "Il fonctionne avec les outils que vous utilisez déjà."
        },
        {
          "title": "Exécuter selon un planning",
          "desc": "Vous réglez et la tâche se déclenche sans vous."
        },
        {
          "title": "Surveiller et ajuster",
          "desc": "Voyez les exécutions, ajustez les étapes, gardez la fiabilité."
        }
      ],
      "outcomes": [
        "Une automatisation qui tourne",
        "Des applis connectées",
        "Un planning qui s'exécute",
        "Des heures gagnées chaque semaine"
      ],
      "faq": [
        {
          "q": "Que peut automatiser Accio Work ?",
          "a": "Des tâches répétitives à plusieurs étapes entre vos applis, selon un planning que vous fixez."
        },
        {
          "q": "Se connecte t il à d'autres outils ?",
          "a": "Oui, il fonctionne avec de nombreuses applis pour éviter le copier coller manuel."
        },
        {
          "q": "Y a t il une offre gratuite ?",
          "a": "Oui, démarrez sans carte et créez votre première automatisation."
        }
      ]
    },
    "custom-tools": {
      "slug": "custom-tools",
      "name": "Accio Work pour des outils sur mesure",
      "tagline": "De petits outils internes, créés en les décrivant",
      "metaTitle": "Accio Work pour des outils sur mesure | outils sur mesure par IA",
      "metaDescription": "Parfois l'outil dont vous avez besoin n'existe pas encore. Accio Work crée de petits outils internes à partir d'une simple description, pour que vous ayez le",
      "h1": "Accio Work pour des outils sur mesure",
      "intro": "Parfois l'outil dont vous avez besoin n'existe pas encore. Accio Work crée de petits outils internes à partir d'une simple description, pour que vous ayez le calculateur, le suivi ou le tableau de bord sans file d'attente côté développeur.",
      "pain": [
        "Les outils tout faits ne collent jamais au besoin exact",
        "De simples besoins internes attendent derrière le backlog dev",
        "Des tableurs étirés bien au-delà de leur rôle"
      ],
      "caps": [
        {
          "title": "Décrire l'outil",
          "desc": "Dites en mots simples ce qu'il doit faire."
        },
        {
          "title": "Obtenir une version fonctionnelle",
          "desc": "L'agent produit quelque chose d'utilisable, pas une spécification."
        },
        {
          "title": "Brancher vos données",
          "desc": "Il se connecte aux sources dont l'outil a besoin."
        },
        {
          "title": "Itérer par chat",
          "desc": "Vous le changez en demandant, sans tout refaire."
        }
      ],
      "outcomes": [
        "Un outil interne fonctionnel",
        "Vos données branchées",
        "Des changements par chat",
        "Pas de file d'attente dev"
      ],
      "faq": [
        {
          "q": "Quels outils peut il créer ?",
          "a": "De petits outils internes comme des calculateurs, suivis et tableaux de bord simples, à partir d'une description."
        },
        {
          "q": "Faut il coder ?",
          "a": "Non, vous décrivez ce que vous voulez et l'ajustez en discutant."
        },
        {
          "q": "Puis je l'essayer gratuitement ?",
          "a": "Oui, l'offre gratuite permet de créer un premier outil sans carte."
        }
      ]
    }
  }
};

export const ucOrder: string[] = ["dropshipping", "sourcing", "content", "market-research", "automation", "custom-tools"];
