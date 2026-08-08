// AUTO GENERATED guide content. Edit gen_guide_data.py to change.
export type GdLang = "en" | "ru" | "de" | "it" | "es" | "zh" | "pt" | "hi" | "fr";
export interface GdStep { title: string; desc: string; }
export interface GdFaq { q: string; a: string; }
export interface GdPage {
  slug: string; name: string; tagline: string; metaTitle: string; metaDescription: string; h1: string; intro: string;
  steps: GdStep[]; tips: string[]; faq: GdFaq[];
}
export interface GdChrome {
  kicker: string; stepsTitle: string; tipsTitle: string; faqTitle: string; ctaPrimary: string; ctaNote: string; tryLine: string; backHome: string; allGuides: string; readMore: string; hubTitle: string; hubIntro: string; hubMetaTitle: string; hubMetaDesc: string;
}
export const gdChrome: Record<GdLang, GdChrome> = {
  "en": {
    "kicker": "Guide",
    "stepsTitle": "Step by step",
    "tipsTitle": "Tips",
    "faqTitle": "Common questions",
    "ctaPrimary": "Start free on Accio Work",
    "ctaNote": "Free plan, no card required",
    "tryLine": "Open Accio Work and try it as you read.",
    "backHome": "Home",
    "allGuides": "All guides",
    "readMore": "Read guide",
    "hubTitle": "Getting started with Accio Work",
    "hubIntro": "New to Accio Work? These short guides take you from sign up to your first finished result, then on to connecting your tools and automating the work that repeats.",
    "hubMetaTitle": "Accio Work guides | Getting started, first task, apps, automations",
    "hubMetaDesc": "Step by step guides for Accio Work: get started, run your first task, connect apps and channels, and set up scheduled automations. Free plan, no card."
  },
  "ru": {
    "kicker": "Гайд",
    "stepsTitle": "Пошагово",
    "tipsTitle": "Советы",
    "faqTitle": "Частые вопросы",
    "ctaPrimary": "Начать бесплатно в Accio Work",
    "ctaNote": "Бесплатный план, карта не нужна",
    "tryLine": "Откройте Accio Work и пробуйте по ходу чтения.",
    "backHome": "На главную",
    "allGuides": "Все гайды",
    "readMore": "Читать гайд",
    "hubTitle": "Как начать работу с Accio Work",
    "hubIntro": "Впервые в Accio Work? Эти короткие гайды проведут от регистрации до первого готового результата, а дальше к подключению инструментов и автоматизации того, что повторяется.",
    "hubMetaTitle": "Гайды Accio Work | Старт, первая задача, приложения, автоматизации",
    "hubMetaDesc": "Пошаговые гайды по Accio Work: как начать, выполнить первую задачу, подключить приложения и каналы, настроить автоматизации по расписанию. Бесплатный план, без карты."
  },
  "de": {
    "kicker": "Anleitung",
    "stepsTitle": "Schritt für Schritt",
    "tipsTitle": "Tipps",
    "faqTitle": "Häufige Fragen",
    "ctaPrimary": "Kostenlos mit Accio Work starten",
    "ctaNote": "Kostenloser Plan, keine Karte nötig",
    "tryLine": "Öffne Accio Work und probiere es beim Lesen aus.",
    "backHome": "Startseite",
    "allGuides": "Alle Anleitungen",
    "readMore": "Anleitung lesen",
    "hubTitle": "Erste Schritte mit Accio Work",
    "hubIntro": "Neu bei Accio Work? Diese kurzen Anleitungen führen dich von der Anmeldung zum ersten fertigen Ergebnis und weiter zum Verbinden deiner Tools und zum Automatisieren wiederkehrender Arbeit.",
    "hubMetaTitle": "Accio Work Anleitungen | Start, erste Aufgabe, Apps, Automatisierungen",
    "hubMetaDesc": "Schritt für Schritt Anleitungen für Accio Work: starten, erste Aufgabe ausführen, Apps und Kanäle verbinden, geplante Automatisierungen einrichten. Gratisplan, keine Karte."
  },
  "it": {
    "kicker": "Guida",
    "stepsTitle": "Passo dopo passo",
    "tipsTitle": "Consigli",
    "faqTitle": "Domande frequenti",
    "ctaPrimary": "Inizia gratis su Accio Work",
    "ctaNote": "Piano gratuito, nessuna carta richiesta",
    "tryLine": "Apri Accio Work e prova mentre leggi.",
    "backHome": "Home",
    "allGuides": "Tutte le guide",
    "readMore": "Leggi la guida",
    "hubTitle": "Come iniziare con Accio Work",
    "hubIntro": "Nuovo su Accio Work? Queste brevi guide ti portano dalla registrazione al primo risultato finito, poi al collegamento dei tuoi strumenti e all'automazione del lavoro che si ripete.",
    "hubMetaTitle": "Guide di Accio Work | Avvio, prima attività, app, automazioni",
    "hubMetaDesc": "Guide passo passo per Accio Work: iniziare, eseguire la prima attività, collegare app e canali, impostare automazioni pianificate. Piano gratuito, senza carta."
  },
  "es": {
    "kicker": "Guía",
    "stepsTitle": "Paso a paso",
    "tipsTitle": "Consejos",
    "faqTitle": "Preguntas frecuentes",
    "ctaPrimary": "Empieza gratis en Accio Work",
    "ctaNote": "Plan gratuito, sin tarjeta",
    "tryLine": "Abre Accio Work y pruébalo mientras lees.",
    "backHome": "Inicio",
    "allGuides": "Todas las guías",
    "readMore": "Leer guía",
    "hubTitle": "Cómo empezar con Accio Work",
    "hubIntro": "¿Nuevo en Accio Work? Estas guías cortas te llevan del registro a tu primer resultado terminado, y luego a conectar tus herramientas y automatizar el trabajo que se repite.",
    "hubMetaTitle": "Guías de Accio Work | Empezar, primera tarea, apps, automatizaciones",
    "hubMetaDesc": "Guías paso a paso de Accio Work: empezar, ejecutar tu primera tarea, conectar apps y canales, configurar automatizaciones programadas. Plan gratis, sin tarjeta."
  },
  "zh": {
    "kicker": "指南",
    "stepsTitle": "分步操作",
    "tipsTitle": "小提示",
    "faqTitle": "常见问题",
    "ctaPrimary": "免费开始使用 Accio Work",
    "ctaNote": "免费方案，无需绑定银行卡",
    "tryLine": "打开 Accio Work，边读边试。",
    "backHome": "首页",
    "allGuides": "全部指南",
    "readMore": "阅读指南",
    "hubTitle": "开始使用 Accio Work",
    "hubIntro": "第一次用 Accio Work？这些简短指南带你从注册走到第一个完成的结果，再到连接你的工具、把重复的工作自动化。",
    "hubMetaTitle": "Accio Work 指南 | 上手、第一个任务、应用、自动化",
    "hubMetaDesc": "Accio Work 分步指南：上手、运行第一个任务、连接应用与渠道、设置定时自动化。提供免费方案，无需绑卡。"
  },
  "pt": {
    "kicker": "Guia",
    "stepsTitle": "Passo a passo",
    "tipsTitle": "Dicas",
    "faqTitle": "Perguntas frequentes",
    "ctaPrimary": "Comece grátis no Accio Work",
    "ctaNote": "Plano gratuito, sem cartão",
    "tryLine": "Abra o Accio Work e teste enquanto lê.",
    "backHome": "Início",
    "allGuides": "Todos os guias",
    "readMore": "Ler guia",
    "hubTitle": "Como começar no Accio Work",
    "hubIntro": "Novo no Accio Work? Estes guias curtos levam você do cadastro ao primeiro resultado pronto, e depois a conectar suas ferramentas e automatizar o trabalho que se repete.",
    "hubMetaTitle": "Guias do Accio Work | Começar, primeira tarefa, apps, automações",
    "hubMetaDesc": "Guias passo a passo do Accio Work: começar, executar a primeira tarefa, conectar apps e canais, configurar automações agendadas. Plano grátis, sem cartão."
  },
  "hi": {
    "kicker": "गाइड",
    "stepsTitle": "कदम दर कदम",
    "tipsTitle": "सुझाव",
    "faqTitle": "आम सवाल",
    "ctaPrimary": "Accio Work मुफ्त में शुरू करें",
    "ctaNote": "मुफ्त प्लान, कार्ड की जरूरत नहीं",
    "tryLine": "Accio Work खोलें और पढ़ते हुए आज़माएं।",
    "backHome": "होम",
    "allGuides": "सभी गाइड",
    "readMore": "गाइड पढ़ें",
    "hubTitle": "Accio Work के साथ शुरुआत",
    "hubIntro": "Accio Work पर नए हैं? ये छोटे गाइड आपको साइन अप से पहले तैयार नतीजे तक, फिर अपने टूल जोड़ने और दोहराए जाने वाले काम को ऑटोमेट करने तक ले जाते हैं।",
    "hubMetaTitle": "Accio Work गाइड | शुरुआत, पहला काम, ऐप्स, ऑटोमेशन",
    "hubMetaDesc": "Accio Work के कदम दर कदम गाइड: शुरू करें, पहला काम चलाएं, ऐप्स और चैनल जोड़ें, शेड्यूल ऑटोमेशन सेट करें। मुफ्त प्लान, कार्ड नहीं।"
  },
  "fr": {
    "kicker": "Guide",
    "stepsTitle": "Étape par étape",
    "tipsTitle": "Astuces",
    "faqTitle": "Questions fréquentes",
    "ctaPrimary": "Commencer gratuitement sur Accio Work",
    "ctaNote": "Offre gratuite, sans carte",
    "tryLine": "Ouvrez Accio Work et testez en lisant.",
    "backHome": "Accueil",
    "allGuides": "Tous les guides",
    "readMore": "Lire le guide",
    "hubTitle": "Bien démarrer avec Accio Work",
    "hubIntro": "Nouveau sur Accio Work ? Ces guides courts vous mènent de l'inscription au premier résultat terminé, puis à la connexion de vos outils et à l'automatisation du travail qui se répète.",
    "hubMetaTitle": "Guides Accio Work | Démarrer, première tâche, applis, automatisations",
    "hubMetaDesc": "Guides pas à pas pour Accio Work : démarrer, lancer votre première tâche, connecter applis et canaux, configurer des automatisations planifiées. Offre gratuite, sans carte."
  }
};

export const gdPages: Record<GdLang, Record<string, GdPage>> = {
  "en": {
    "getting-started": {
      "slug": "getting-started",
      "name": "How to get started with Accio Work",
      "tagline": "From sign up to your first result in one sitting",
      "metaTitle": "How to get started with Accio Work",
      "metaDescription": "Accio Work is an AI agent that does real work, not just chat. This guide walks you from creating an account to getting your first finished result, so you know exactly what to expect before you start.",
      "h1": "How to get started with Accio Work",
      "intro": "Accio Work is an AI agent that does real work, not just chat. This guide walks you from creating an account to getting your first finished result, so you know exactly what to expect before you start.",
      "steps": [
        {
          "title": "Create your account",
          "desc": "Sign up free, no card needed. You land in the workspace where every task starts."
        },
        {
          "title": "Pick a goal",
          "desc": "Tell the agent what you want in plain language, like find a supplier for a product or write a landing page."
        },
        {
          "title": "Watch it plan",
          "desc": "A general agent breaks the goal into steps and hands parts to specialist agents for sourcing, writing or analysis."
        },
        {
          "title": "Approve and adjust",
          "desc": "You see the plan and results as they come, approve what looks right and redirect anything that does not."
        },
        {
          "title": "Ship the result",
          "desc": "Export the output, publish it or send it on. The work is done, not just described."
        }
      ],
      "tips": [
        "Start with one clear goal rather than a vague request",
        "Be specific about the product, market or channel",
        "You can run it on desktop or straight in the browser"
      ],
      "faq": [
        {
          "q": "Do I need to install anything?",
          "a": "No, you can use Accio Work in the browser. Desktop apps for macOS and Windows are also available."
        },
        {
          "q": "Is it free to start?",
          "a": "Yes, the free plan needs no card and lets you run real tasks."
        },
        {
          "q": "Is it a chatbot?",
          "a": "No, it plans and executes tasks with real tools and data, then hands you a finished result."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "How to run your first task in Accio Work",
      "tagline": "Write a goal the agent can actually finish",
      "metaTitle": "How to run your first task in Accio Work",
      "metaDescription": "The difference between a weak result and a strong one is usually the goal you give. This guide shows how to phrase a first task so the agent runs it start to finish and hands back something you can use.",
      "h1": "How to run your first task in Accio Work",
      "intro": "The difference between a weak result and a strong one is usually the goal you give. This guide shows how to phrase a first task so the agent runs it start to finish and hands back something you can use.",
      "steps": [
        {
          "title": "State the outcome",
          "desc": "Describe the finished result you want, not the steps. Say build a store page for X, not open a page builder."
        },
        {
          "title": "Add the specifics",
          "desc": "Name the product, the market, the tone or the budget. Detail turns a generic run into a useful one."
        },
        {
          "title": "Let it plan and start",
          "desc": "The agent lays out the steps and begins. You do not micromanage each click."
        },
        {
          "title": "Review as it works",
          "desc": "Results stream in. Approve good steps, correct anything off, and it keeps going."
        }
      ],
      "tips": [
        "One outcome per task beats a long wish list",
        "Give an example if you have one",
        "If a run drifts, correct it once and let it continue"
      ],
      "faq": [
        {
          "q": "What makes a good first task?",
          "a": "A single clear outcome with a few specifics, like sourcing a named product or drafting one landing page."
        },
        {
          "q": "Can I change direction mid task?",
          "a": "Yes, you review and redirect as it works rather than waiting until the end."
        },
        {
          "q": "How long does a task take?",
          "a": "Simple tasks finish in minutes. Larger ones run longer and you can check in as they go."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "How to connect apps and channels in Accio Work",
      "tagline": "Let the agent work across the tools you already use",
      "metaTitle": "How to connect apps and channels in Accio Work",
      "metaDescription": "Accio Work is more useful when it can reach your tools. This guide covers connecting apps and messaging channels so the agent can pull data, take action and reach you where you already work.",
      "h1": "How to connect apps and channels in Accio Work",
      "intro": "Accio Work is more useful when it can reach your tools. This guide covers connecting apps and messaging channels so the agent can pull data, take action and reach you where you already work.",
      "steps": [
        {
          "title": "Open connections",
          "desc": "In the workspace, find the apps and channels area where integrations live."
        },
        {
          "title": "Connect your apps",
          "desc": "Link the tools you use so the agent can read and act across them instead of manual copy paste."
        },
        {
          "title": "Add a channel",
          "desc": "Connect a channel like Telegram, Discord, DingTalk, Feishu or WeChat to trigger and receive work in chat."
        },
        {
          "title": "Test it",
          "desc": "Send a small task through the channel or an app to confirm the connection works end to end."
        }
      ],
      "tips": [
        "Connect only what a task needs to keep things simple",
        "Channels are handy for kicking off tasks from your phone",
        "Add more connections as your workflows grow"
      ],
      "faq": [
        {
          "q": "Which channels are supported?",
          "a": "Telegram, Discord, DingTalk, Feishu and WeChat, so you can run tasks from chat."
        },
        {
          "q": "How many apps can it reach?",
          "a": "It works across many apps, so multi step tasks do not need manual handoffs."
        },
        {
          "q": "Do I need all of them?",
          "a": "No, connect only the tools a given task needs."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "How to set up scheduled automations in Accio Work",
      "tagline": "Turn a repeatable task into one that runs itself",
      "metaTitle": "How to set up scheduled automations in Accio Work",
      "metaDescription": "Once a task works, you can make it repeat. This guide shows how to turn a one off run into a scheduled automation so routine work happens on its own.",
      "h1": "How to set up scheduled automations in Accio Work",
      "intro": "Once a task works, you can make it repeat. This guide shows how to turn a one off run into a scheduled automation so routine work happens on its own.",
      "steps": [
        {
          "title": "Get the task working once",
          "desc": "Run it manually first and confirm the result is what you want."
        },
        {
          "title": "Save it as a workflow",
          "desc": "Keep the steps so the agent can repeat them without you describing it again."
        },
        {
          "title": "Set a schedule",
          "desc": "Choose when it runs, daily, weekly or on your own timing."
        },
        {
          "title": "Monitor and tweak",
          "desc": "Check runs, adjust steps and keep it reliable as things change."
        }
      ],
      "tips": [
        "Automate tasks that repeat the same way each time",
        "Start with one schedule before stacking more",
        "Review the first few runs to catch edge cases"
      ],
      "faq": [
        {
          "q": "What can I schedule?",
          "a": "Any repeatable multi step task, run on the timing you set."
        },
        {
          "q": "Will it run without me?",
          "a": "Yes, once scheduled it fires on its own across your connected apps."
        },
        {
          "q": "Can I change it later?",
          "a": "Yes, edit the steps or schedule any time."
        }
      ]
    }
  },
  "ru": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Как начать работу с Accio Work",
      "tagline": "От регистрации до первого результата за один заход",
      "metaTitle": "Как начать работу с Accio Work",
      "metaDescription": "Accio Work это AI агент, который делает реальную работу, а не просто общается. Гайд проведёт от создания аккаунта до первого готового результата, чтобы вы точно понимали, чего ждать перед стартом.",
      "h1": "Как начать работу с Accio Work",
      "intro": "Accio Work это AI агент, который делает реальную работу, а не просто общается. Гайд проведёт от создания аккаунта до первого готового результата, чтобы вы точно понимали, чего ждать перед стартом.",
      "steps": [
        {
          "title": "Создайте аккаунт",
          "desc": "Регистрация бесплатна, карта не нужна. Вы попадаете в рабочее пространство, откуда стартует любая задача."
        },
        {
          "title": "Поставьте цель",
          "desc": "Скажите обычными словами, что нужно: найти поставщика под товар или написать лендинг."
        },
        {
          "title": "Смотрите, как он планирует",
          "desc": "Общий агент разбивает цель на шаги и передаёт части специалистам по закупкам, тексту или анализу."
        },
        {
          "title": "Одобряйте и правьте",
          "desc": "Вы видите план и результаты по мере готовности, одобряете верное и перенаправляете лишнее."
        },
        {
          "title": "Заберите результат",
          "desc": "Выгрузите, опубликуйте или отправьте дальше. Работа сделана, а не просто описана."
        }
      ],
      "tips": [
        "Начните с одной ясной цели, а не с расплывчатой просьбы",
        "Уточняйте товар, рынок или канал",
        "Можно работать в десктопе или прямо в браузере"
      ],
      "faq": [
        {
          "q": "Нужно ли что-то устанавливать?",
          "a": "Нет, Accio Work работает в браузере. Есть и десктоп приложения для macOS и Windows."
        },
        {
          "q": "Старт бесплатный?",
          "a": "Да, бесплатный план не требует карты и позволяет выполнять реальные задачи."
        },
        {
          "q": "Это чат-бот?",
          "a": "Нет, он планирует и выполняет задачи реальными инструментами и данными, а затем отдаёт готовый результат."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "Как выполнить первую задачу в Accio Work",
      "tagline": "Сформулируйте задачу, которую агент реально доведёт до конца",
      "metaTitle": "Как выполнить первую задачу в Accio Work",
      "metaDescription": "Разница между слабым и сильным результатом обычно в том, какую задачу вы поставили. Гайд показывает, как сформулировать первую задачу, чтобы агент выполнил её от начала до конца и отдал то, чем можно пользоваться.",
      "h1": "Как выполнить первую задачу в Accio Work",
      "intro": "Разница между слабым и сильным результатом обычно в том, какую задачу вы поставили. Гайд показывает, как сформулировать первую задачу, чтобы агент выполнил её от начала до конца и отдал то, чем можно пользоваться.",
      "steps": [
        {
          "title": "Опишите результат",
          "desc": "Скажите, какой готовый результат нужен, а не шаги. Собери страницу магазина для X, а не открой конструктор."
        },
        {
          "title": "Добавьте конкретику",
          "desc": "Назовите товар, рынок, тон или бюджет. Детали превращают общий запуск в полезный."
        },
        {
          "title": "Дайте спланировать и начать",
          "desc": "Агент раскладывает шаги и приступает. Каждый клик контролировать не нужно."
        },
        {
          "title": "Проверяйте по ходу",
          "desc": "Результаты идут потоком. Одобряйте верное, поправляйте лишнее, и он продолжит."
        }
      ],
      "tips": [
        "Одна цель на задачу лучше длинного списка желаний",
        "Дайте пример, если он есть",
        "Если запуск ушёл в сторону, поправьте раз и дайте продолжить"
      ],
      "faq": [
        {
          "q": "Что такое хорошая первая задача?",
          "a": "Одна ясная цель с парой уточнений, например найти конкретный товар или написать один лендинг."
        },
        {
          "q": "Можно менять курс по ходу?",
          "a": "Да, вы проверяете и перенаправляете во время работы, не дожидаясь конца."
        },
        {
          "q": "Сколько идёт задача?",
          "a": "Простые завершаются за минуты. Крупные дольше, и вы можете заглядывать по ходу."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Как подключить приложения и каналы в Accio Work",
      "tagline": "Дайте агенту работать в инструментах, что у вас уже есть",
      "metaTitle": "Как подключить приложения и каналы в Accio Work",
      "metaDescription": "Accio Work полезнее, когда дотягивается до ваших инструментов. Гайд про подключение приложений и мессенджеров, чтобы агент брал данные, выполнял действия и находил вас там, где вы уже работаете.",
      "h1": "Как подключить приложения и каналы в Accio Work",
      "intro": "Accio Work полезнее, когда дотягивается до ваших инструментов. Гайд про подключение приложений и мессенджеров, чтобы агент брал данные, выполнял действия и находил вас там, где вы уже работаете.",
      "steps": [
        {
          "title": "Откройте подключения",
          "desc": "В рабочем пространстве найдите раздел приложений и каналов, где живут интеграции."
        },
        {
          "title": "Подключите приложения",
          "desc": "Свяжите нужные инструменты, чтобы агент читал и действовал в них без ручного копипаста."
        },
        {
          "title": "Добавьте канал",
          "desc": "Подключите канал вроде Telegram, Discord, DingTalk, Feishu или WeChat, чтобы запускать и получать работу в чате."
        },
        {
          "title": "Проверьте",
          "desc": "Отправьте небольшую задачу через канал или приложение, чтобы убедиться, что связь работает целиком."
        }
      ],
      "tips": [
        "Подключайте только то, что нужно задаче",
        "Каналы удобны, чтобы запускать задачи с телефона",
        "Добавляйте новые подключения по мере роста процессов"
      ],
      "faq": [
        {
          "q": "Какие каналы поддерживаются?",
          "a": "Telegram, Discord, DingTalk, Feishu и WeChat, чтобы запускать задачи из чата."
        },
        {
          "q": "Со сколькими приложениями работает?",
          "a": "Со многими, поэтому многошаговые задачи не требуют ручных передач."
        },
        {
          "q": "Нужны ли все сразу?",
          "a": "Нет, подключайте только то, что нужно конкретной задаче."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Как настроить автоматизации по расписанию в Accio Work",
      "tagline": "Превратите повторяющуюся задачу в ту, что работает сама",
      "metaTitle": "Как настроить автоматизации по расписанию в Accio Work",
      "metaDescription": "Когда задача заработала, её можно сделать повторяющейся. Гайд показывает, как превратить разовый запуск в автоматизацию по расписанию, чтобы рутина шла сама.",
      "h1": "Как настроить автоматизации по расписанию в Accio Work",
      "intro": "Когда задача заработала, её можно сделать повторяющейся. Гайд показывает, как превратить разовый запуск в автоматизацию по расписанию, чтобы рутина шла сама.",
      "steps": [
        {
          "title": "Сначала выполните задачу один раз",
          "desc": "Запустите вручную и убедитесь, что результат тот, что нужен."
        },
        {
          "title": "Сохраните как процесс",
          "desc": "Оставьте шаги, чтобы агент повторял их без нового описания."
        },
        {
          "title": "Задайте расписание",
          "desc": "Выберите, когда запускать: ежедневно, еженедельно или по своему графику."
        },
        {
          "title": "Следите и правьте",
          "desc": "Проверяйте запуски, правьте шаги и держите стабильность, когда что-то меняется."
        }
      ],
      "tips": [
        "Автоматизируйте задачи, что повторяются одинаково",
        "Начните с одного расписания, прежде чем добавлять ещё",
        "Просмотрите первые запуски, чтобы поймать крайние случаи"
      ],
      "faq": [
        {
          "q": "Что можно ставить в расписание?",
          "a": "Любую повторяющуюся многошаговую задачу с выбранным вами временем."
        },
        {
          "q": "Будет ли работать без меня?",
          "a": "Да, после настройки запускается сама в ваших подключённых приложениях."
        },
        {
          "q": "Можно ли потом изменить?",
          "a": "Да, шаги и расписание правятся в любой момент."
        }
      ]
    }
  },
  "de": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Erste Schritte mit Accio Work",
      "tagline": "Von der Anmeldung zum ersten Ergebnis in einer Sitzung",
      "metaTitle": "Erste Schritte mit Accio Work",
      "metaDescription": "Accio Work ist ein AI Agent, der echte Arbeit erledigt, nicht nur chattet. Diese Anleitung führt dich vom Anlegen des Kontos bis zum ersten fertigen Ergebnis, damit du genau weißt, was dich erwartet.",
      "h1": "Erste Schritte mit Accio Work",
      "intro": "Accio Work ist ein AI Agent, der echte Arbeit erledigt, nicht nur chattet. Diese Anleitung führt dich vom Anlegen des Kontos bis zum ersten fertigen Ergebnis, damit du genau weißt, was dich erwartet.",
      "steps": [
        {
          "title": "Konto anlegen",
          "desc": "Kostenlos registrieren, keine Karte nötig. Du landest im Workspace, wo jede Aufgabe startet."
        },
        {
          "title": "Ein Ziel wählen",
          "desc": "Sag in einfachen Worten, was du willst, etwa einen Lieferanten finden oder eine Landingpage schreiben."
        },
        {
          "title": "Beim Planen zusehen",
          "desc": "Ein General Agent zerlegt das Ziel in Schritte und gibt Teile an Spezialagenten für Sourcing, Text oder Analyse."
        },
        {
          "title": "Freigeben und anpassen",
          "desc": "Du siehst Plan und Ergebnisse laufend, gibst Richtiges frei und lenkst Abweichungen um."
        },
        {
          "title": "Ergebnis ausliefern",
          "desc": "Exportieren, veröffentlichen oder weitergeben. Die Arbeit ist erledigt, nicht nur beschrieben."
        }
      ],
      "tips": [
        "Starte mit einem klaren Ziel statt einer vagen Bitte",
        "Sei konkret bei Produkt, Markt oder Kanal",
        "Du kannst es am Desktop oder direkt im Browser nutzen"
      ],
      "faq": [
        {
          "q": "Muss ich etwas installieren?",
          "a": "Nein, du kannst Accio Work im Browser nutzen. Desktop Apps für macOS und Windows gibt es auch."
        },
        {
          "q": "Ist der Start gratis?",
          "a": "Ja, der Gratisplan braucht keine Karte und lässt dich echte Aufgaben ausführen."
        },
        {
          "q": "Ist es ein Chatbot?",
          "a": "Nein, es plant und führt Aufgaben mit echten Tools und Daten aus und liefert ein fertiges Ergebnis."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "So führst du deine erste Aufgabe in Accio Work aus",
      "tagline": "Formuliere ein Ziel, das der Agent wirklich abschließt",
      "metaTitle": "So führst du deine erste Aufgabe in Accio Work aus",
      "metaDescription": "Der Unterschied zwischen schwachem und starkem Ergebnis liegt meist im Ziel, das du vorgibst. Diese Anleitung zeigt, wie du eine erste Aufgabe formulierst, damit der Agent sie ganz ausführt und dir etwas Nutzbares zurückgibt.",
      "h1": "So führst du deine erste Aufgabe in Accio Work aus",
      "intro": "Der Unterschied zwischen schwachem und starkem Ergebnis liegt meist im Ziel, das du vorgibst. Diese Anleitung zeigt, wie du eine erste Aufgabe formulierst, damit der Agent sie ganz ausführt und dir etwas Nutzbares zurückgibt.",
      "steps": [
        {
          "title": "Das Ergebnis nennen",
          "desc": "Beschreibe das fertige Ergebnis, nicht die Schritte. Sag baue eine Shopseite für X, nicht öffne einen Baukasten."
        },
        {
          "title": "Details ergänzen",
          "desc": "Nenne Produkt, Markt, Ton oder Budget. Details machen aus einem generischen Lauf einen nützlichen."
        },
        {
          "title": "Planen und starten lassen",
          "desc": "Der Agent legt die Schritte fest und beginnt. Du steuerst nicht jeden Klick."
        },
        {
          "title": "Beim Arbeiten prüfen",
          "desc": "Ergebnisse laufen ein. Gute Schritte freigeben, Abweichungen korrigieren, es geht weiter."
        }
      ],
      "tips": [
        "Ein Ergebnis pro Aufgabe schlägt eine lange Wunschliste",
        "Gib ein Beispiel, falls vorhanden",
        "Driftet ein Lauf, korrigiere einmal und lass ihn weiterlaufen"
      ],
      "faq": [
        {
          "q": "Was ist eine gute erste Aufgabe?",
          "a": "Ein klares Ergebnis mit ein paar Details, etwa ein bestimmtes Produkt sourcen oder eine Landingpage entwerfen."
        },
        {
          "q": "Kann ich mittendrin umlenken?",
          "a": "Ja, du prüfst und lenkst während der Arbeit um, statt bis zum Ende zu warten."
        },
        {
          "q": "Wie lange dauert eine Aufgabe?",
          "a": "Einfache in Minuten. Größere laufen länger und du kannst zwischendurch reinschauen."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Apps und Kanäle in Accio Work verbinden",
      "tagline": "Lass den Agenten über deine bestehenden Tools arbeiten",
      "metaTitle": "Apps und Kanäle in Accio Work verbinden",
      "metaDescription": "Accio Work ist nützlicher, wenn es deine Tools erreicht. Diese Anleitung behandelt das Verbinden von Apps und Messaging Kanälen, damit der Agent Daten zieht, handelt und dich dort erreicht, wo du arbeitest.",
      "h1": "Apps und Kanäle in Accio Work verbinden",
      "intro": "Accio Work ist nützlicher, wenn es deine Tools erreicht. Diese Anleitung behandelt das Verbinden von Apps und Messaging Kanälen, damit der Agent Daten zieht, handelt und dich dort erreicht, wo du arbeitest.",
      "steps": [
        {
          "title": "Verbindungen öffnen",
          "desc": "Finde im Workspace den Bereich Apps und Kanäle, wo die Integrationen liegen."
        },
        {
          "title": "Deine Apps verbinden",
          "desc": "Verknüpfe deine Tools, damit der Agent darin lesen und handeln kann, ohne Copy Paste."
        },
        {
          "title": "Einen Kanal hinzufügen",
          "desc": "Verbinde einen Kanal wie Telegram, Discord, DingTalk, Feishu oder WeChat, um Arbeit im Chat zu starten und zu erhalten."
        },
        {
          "title": "Testen",
          "desc": "Schicke eine kleine Aufgabe über Kanal oder App, um die Verbindung ganz zu prüfen."
        }
      ],
      "tips": [
        "Verbinde nur, was eine Aufgabe braucht",
        "Kanäle sind praktisch, um Aufgaben vom Handy zu starten",
        "Füge weitere Verbindungen hinzu, wenn die Workflows wachsen"
      ],
      "faq": [
        {
          "q": "Welche Kanäle werden unterstützt?",
          "a": "Telegram, Discord, DingTalk, Feishu und WeChat, damit du Aufgaben aus dem Chat startest."
        },
        {
          "q": "Wie viele Apps erreicht es?",
          "a": "Viele, sodass mehrstufige Aufgaben keine manuelle Übergabe brauchen."
        },
        {
          "q": "Brauche ich alle?",
          "a": "Nein, verbinde nur, was die jeweilige Aufgabe braucht."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Geplante Automatisierungen in Accio Work einrichten",
      "tagline": "Mach aus einer wiederkehrenden Aufgabe eine, die von selbst läuft",
      "metaTitle": "Geplante Automatisierungen in Accio Work einrichten",
      "metaDescription": "Sobald eine Aufgabe funktioniert, kannst du sie wiederholen lassen. Diese Anleitung zeigt, wie du aus einem einmaligen Lauf eine geplante Automatisierung machst, damit Routinearbeit von selbst passiert.",
      "h1": "Geplante Automatisierungen in Accio Work einrichten",
      "intro": "Sobald eine Aufgabe funktioniert, kannst du sie wiederholen lassen. Diese Anleitung zeigt, wie du aus einem einmaligen Lauf eine geplante Automatisierung machst, damit Routinearbeit von selbst passiert.",
      "steps": [
        {
          "title": "Die Aufgabe einmal zum Laufen bringen",
          "desc": "Führe sie erst manuell aus und prüfe, ob das Ergebnis passt."
        },
        {
          "title": "Als Workflow speichern",
          "desc": "Behalte die Schritte, damit der Agent sie ohne neue Beschreibung wiederholt."
        },
        {
          "title": "Zeitplan festlegen",
          "desc": "Wähle, wann sie läuft, täglich, wöchentlich oder nach deinem Takt."
        },
        {
          "title": "Beobachten und justieren",
          "desc": "Läufe prüfen, Schritte anpassen und zuverlässig halten, wenn sich etwas ändert."
        }
      ],
      "tips": [
        "Automatisiere Aufgaben, die stets gleich ablaufen",
        "Starte mit einem Zeitplan, bevor du weitere stapelst",
        "Prüfe die ersten Läufe, um Sonderfälle zu erwischen"
      ],
      "faq": [
        {
          "q": "Was kann ich planen?",
          "a": "Jede wiederkehrende mehrstufige Aufgabe, nach deinem Zeitplan."
        },
        {
          "q": "Läuft es ohne mich?",
          "a": "Ja, einmal geplant startet es von selbst über deine verbundenen Apps."
        },
        {
          "q": "Kann ich es später ändern?",
          "a": "Ja, Schritte oder Zeitplan jederzeit bearbeiten."
        }
      ]
    }
  },
  "it": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Come iniziare con Accio Work",
      "tagline": "Dalla registrazione al primo risultato in una sola sessione",
      "metaTitle": "Come iniziare con Accio Work",
      "metaDescription": "Accio Work è un agente AI che fa lavoro reale, non solo chatta. Questa guida ti porta dalla creazione dell'account al primo risultato finito, così sai cosa aspettarti prima di iniziare.",
      "h1": "Come iniziare con Accio Work",
      "intro": "Accio Work è un agente AI che fa lavoro reale, non solo chatta. Questa guida ti porta dalla creazione dell'account al primo risultato finito, così sai cosa aspettarti prima di iniziare.",
      "steps": [
        {
          "title": "Crea l'account",
          "desc": "Registrati gratis, senza carta. Arrivi nel workspace da cui parte ogni attività."
        },
        {
          "title": "Scegli un obiettivo",
          "desc": "Di in parole semplici cosa vuoi, come trovare un fornitore o scrivere una landing page."
        },
        {
          "title": "Guardalo pianificare",
          "desc": "Un agente generale scompone l'obiettivo in passi e affida le parti ad agenti specialisti per sourcing, testo o analisi."
        },
        {
          "title": "Approva e regola",
          "desc": "Vedi piano e risultati man mano, approvi ciò che va e reindirizzi ciò che non va."
        },
        {
          "title": "Consegna il risultato",
          "desc": "Esporta, pubblica o inoltra. Il lavoro è fatto, non solo descritto."
        }
      ],
      "tips": [
        "Parti da un obiettivo chiaro, non da una richiesta vaga",
        "Sii specifico su prodotto, mercato o canale",
        "Puoi usarlo su desktop o direttamente nel browser"
      ],
      "faq": [
        {
          "q": "Devo installare qualcosa?",
          "a": "No, puoi usare Accio Work nel browser. Sono disponibili anche le app desktop per macOS e Windows."
        },
        {
          "q": "Iniziare è gratis?",
          "a": "Sì, il piano gratuito non richiede carta e ti fa eseguire attività reali."
        },
        {
          "q": "È un chatbot?",
          "a": "No, pianifica ed esegue attività con strumenti e dati reali, poi ti consegna un risultato finito."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "Come eseguire la prima attività in Accio Work",
      "tagline": "Scrivi un obiettivo che l'agente porti davvero a termine",
      "metaTitle": "Come eseguire la prima attività in Accio Work",
      "metaDescription": "La differenza tra un risultato debole e uno forte sta di solito nell'obiettivo che dai. Questa guida mostra come formulare la prima attività così che l'agente la esegua dall'inizio alla fine e restituisca qualcosa di utile.",
      "h1": "Come eseguire la prima attività in Accio Work",
      "intro": "La differenza tra un risultato debole e uno forte sta di solito nell'obiettivo che dai. Questa guida mostra come formulare la prima attività così che l'agente la esegua dall'inizio alla fine e restituisca qualcosa di utile.",
      "steps": [
        {
          "title": "Dichiara il risultato",
          "desc": "Descrivi il risultato finito, non i passi. Di costruisci una pagina store per X, non apri un page builder."
        },
        {
          "title": "Aggiungi i dettagli",
          "desc": "Indica prodotto, mercato, tono o budget. Il dettaglio trasforma un'esecuzione generica in una utile."
        },
        {
          "title": "Lascia pianificare e partire",
          "desc": "L'agente imposta i passi e inizia. Non controlli ogni clic."
        },
        {
          "title": "Rivedi mentre lavora",
          "desc": "I risultati arrivano. Approva i passi buoni, correggi ciò che non va e prosegue."
        }
      ],
      "tips": [
        "Un risultato per attività batte una lunga lista di desideri",
        "Dai un esempio se ce l'hai",
        "Se un'esecuzione devia, correggi una volta e lascia continuare"
      ],
      "faq": [
        {
          "q": "Cos'è una buona prima attività?",
          "a": "Un risultato chiaro con qualche dettaglio, come cercare un prodotto preciso o abbozzare una landing page."
        },
        {
          "q": "Posso cambiare direzione a metà?",
          "a": "Sì, rivedi e reindirizzi mentre lavora, senza aspettare la fine."
        },
        {
          "q": "Quanto dura un'attività?",
          "a": "Quelle semplici in minuti. Le più grandi durano di più e puoi controllare strada facendo."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Come collegare app e canali in Accio Work",
      "tagline": "Fai lavorare l'agente tra gli strumenti che già usi",
      "metaTitle": "Come collegare app e canali in Accio Work",
      "metaDescription": "Accio Work è più utile quando raggiunge i tuoi strumenti. Questa guida spiega come collegare app e canali di messaggistica così che l'agente prenda dati, agisca e ti raggiunga dove già lavori.",
      "h1": "Come collegare app e canali in Accio Work",
      "intro": "Accio Work è più utile quando raggiunge i tuoi strumenti. Questa guida spiega come collegare app e canali di messaggistica così che l'agente prenda dati, agisca e ti raggiunga dove già lavori.",
      "steps": [
        {
          "title": "Apri le connessioni",
          "desc": "Nel workspace trova l'area app e canali dove stanno le integrazioni."
        },
        {
          "title": "Collega le tue app",
          "desc": "Collega gli strumenti che usi così l'agente legge e agisce senza copia incolla."
        },
        {
          "title": "Aggiungi un canale",
          "desc": "Collega un canale come Telegram, Discord, DingTalk, Feishu o WeChat per avviare e ricevere lavoro in chat."
        },
        {
          "title": "Provalo",
          "desc": "Manda una piccola attività tramite canale o app per confermare che la connessione funzioni del tutto."
        }
      ],
      "tips": [
        "Collega solo ciò che serve all'attività",
        "I canali sono comodi per avviare attività dal telefono",
        "Aggiungi altre connessioni man mano che i flussi crescono"
      ],
      "faq": [
        {
          "q": "Quali canali sono supportati?",
          "a": "Telegram, Discord, DingTalk, Feishu e WeChat, così avvii attività dalla chat."
        },
        {
          "q": "Con quante app funziona?",
          "a": "Con molte, così le attività a più passaggi non richiedono passaggi manuali."
        },
        {
          "q": "Servono tutte?",
          "a": "No, collega solo gli strumenti che servono a quella attività."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Come impostare automazioni pianificate in Accio Work",
      "tagline": "Trasforma un'attività ripetitiva in una che si esegue da sola",
      "metaTitle": "Come impostare automazioni pianificate in Accio Work",
      "metaDescription": "Quando un'attività funziona, puoi farla ripetere. Questa guida mostra come trasformare un'esecuzione singola in un'automazione pianificata, così la routine avviene da sola.",
      "h1": "Come impostare automazioni pianificate in Accio Work",
      "intro": "Quando un'attività funziona, puoi farla ripetere. Questa guida mostra come trasformare un'esecuzione singola in un'automazione pianificata, così la routine avviene da sola.",
      "steps": [
        {
          "title": "Fai funzionare l'attività una volta",
          "desc": "Eseguila prima a mano e conferma che il risultato sia quello giusto."
        },
        {
          "title": "Salvala come workflow",
          "desc": "Conserva i passi così l'agente li ripete senza che tu li descriva di nuovo."
        },
        {
          "title": "Imposta una pianificazione",
          "desc": "Scegli quando parte, ogni giorno, ogni settimana o con la tua tempistica."
        },
        {
          "title": "Monitora e ritocca",
          "desc": "Controlla le esecuzioni, regola i passi e resta affidabile quando le cose cambiano."
        }
      ],
      "tips": [
        "Automatizza le attività che si ripetono uguali",
        "Parti da una pianificazione prima di aggiungerne altre",
        "Rivedi le prime esecuzioni per cogliere i casi limite"
      ],
      "faq": [
        {
          "q": "Cosa posso pianificare?",
          "a": "Qualsiasi attività ripetibile a più passaggi, con la tempistica che imposti."
        },
        {
          "q": "Gira senza di me?",
          "a": "Sì, una volta pianificata parte da sola tra le tue app collegate."
        },
        {
          "q": "Posso cambiarla dopo?",
          "a": "Sì, modifica passi o pianificazione quando vuoi."
        }
      ]
    }
  },
  "es": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Cómo empezar con Accio Work",
      "tagline": "Del registro a tu primer resultado de una sentada",
      "metaTitle": "Cómo empezar con Accio Work",
      "metaDescription": "Accio Work es un agente de IA que hace trabajo real, no solo chatea. Esta guía te lleva de crear una cuenta a tu primer resultado terminado, para que sepas qué esperar antes de empezar.",
      "h1": "Cómo empezar con Accio Work",
      "intro": "Accio Work es un agente de IA que hace trabajo real, no solo chatea. Esta guía te lleva de crear una cuenta a tu primer resultado terminado, para que sepas qué esperar antes de empezar.",
      "steps": [
        {
          "title": "Crea tu cuenta",
          "desc": "Regístrate gratis, sin tarjeta. Llegas al workspace desde donde parte cada tarea."
        },
        {
          "title": "Elige un objetivo",
          "desc": "Di en palabras simples qué quieres, como encontrar un proveedor o escribir una landing page."
        },
        {
          "title": "Míralo planificar",
          "desc": "Un agente general divide el objetivo en pasos y reparte partes a agentes especialistas de sourcing, texto o análisis."
        },
        {
          "title": "Aprueba y ajusta",
          "desc": "Ves el plan y los resultados según llegan, apruebas lo correcto y rediriges lo que no."
        },
        {
          "title": "Entrega el resultado",
          "desc": "Exporta, publica o envía. El trabajo está hecho, no solo descrito."
        }
      ],
      "tips": [
        "Empieza con un objetivo claro, no con una petición vaga",
        "Sé específico sobre producto, mercado o canal",
        "Puedes usarlo en desktop o directo en el navegador"
      ],
      "faq": [
        {
          "q": "¿Necesito instalar algo?",
          "a": "No, puedes usar Accio Work en el navegador. También hay apps de escritorio para macOS y Windows."
        },
        {
          "q": "¿Empezar es gratis?",
          "a": "Sí, el plan gratuito no pide tarjeta y te deja ejecutar tareas reales."
        },
        {
          "q": "¿Es un chatbot?",
          "a": "No, planifica y ejecuta tareas con herramientas y datos reales, y luego entrega un resultado terminado."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "Cómo ejecutar tu primera tarea en Accio Work",
      "tagline": "Escribe un objetivo que el agente pueda terminar de verdad",
      "metaTitle": "Cómo ejecutar tu primera tarea en Accio Work",
      "metaDescription": "La diferencia entre un resultado flojo y uno fuerte suele estar en el objetivo que das. Esta guía muestra cómo plantear una primera tarea para que el agente la ejecute de principio a fin y devuelva algo utilizable.",
      "h1": "Cómo ejecutar tu primera tarea en Accio Work",
      "intro": "La diferencia entre un resultado flojo y uno fuerte suele estar en el objetivo que das. Esta guía muestra cómo plantear una primera tarea para que el agente la ejecute de principio a fin y devuelva algo utilizable.",
      "steps": [
        {
          "title": "Indica el resultado",
          "desc": "Describe el resultado terminado, no los pasos. Di crea una página de tienda para X, no abre un creador."
        },
        {
          "title": "Añade lo específico",
          "desc": "Nombra el producto, el mercado, el tono o el presupuesto. El detalle vuelve útil una ejecución genérica."
        },
        {
          "title": "Deja que planifique y empiece",
          "desc": "El agente arma los pasos y empieza. No microgestionas cada clic."
        },
        {
          "title": "Revisa mientras trabaja",
          "desc": "Los resultados llegan. Aprueba pasos buenos, corrige lo que falle y continúa."
        }
      ],
      "tips": [
        "Un resultado por tarea supera una larga lista de deseos",
        "Da un ejemplo si lo tienes",
        "Si una ejecución se desvía, corrige una vez y deja que siga"
      ],
      "faq": [
        {
          "q": "¿Qué hace buena a una primera tarea?",
          "a": "Un resultado claro con algunos detalles, como buscar un producto concreto o redactar una landing page."
        },
        {
          "q": "¿Puedo cambiar el rumbo a mitad?",
          "a": "Sí, revisas y rediriges mientras trabaja, sin esperar al final."
        },
        {
          "q": "¿Cuánto tarda una tarea?",
          "a": "Las simples en minutos. Las grandes tardan más y puedes ir revisando."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Cómo conectar apps y canales en Accio Work",
      "tagline": "Deja que el agente trabaje entre las herramientas que ya usas",
      "metaTitle": "Cómo conectar apps y canales en Accio Work",
      "metaDescription": "Accio Work es más útil cuando alcanza tus herramientas. Esta guía cubre conectar apps y canales de mensajería para que el agente tome datos, actúe y te alcance donde ya trabajas.",
      "h1": "Cómo conectar apps y canales en Accio Work",
      "intro": "Accio Work es más útil cuando alcanza tus herramientas. Esta guía cubre conectar apps y canales de mensajería para que el agente tome datos, actúe y te alcance donde ya trabajas.",
      "steps": [
        {
          "title": "Abre conexiones",
          "desc": "En el workspace, encuentra el área de apps y canales donde están las integraciones."
        },
        {
          "title": "Conecta tus apps",
          "desc": "Enlaza las herramientas que usas para que el agente lea y actúe sin copiar y pegar."
        },
        {
          "title": "Añade un canal",
          "desc": "Conecta un canal como Telegram, Discord, DingTalk, Feishu o WeChat para lanzar y recibir trabajo en chat."
        },
        {
          "title": "Pruébalo",
          "desc": "Envía una tarea pequeña por el canal o una app para confirmar que la conexión funciona por completo."
        }
      ],
      "tips": [
        "Conecta solo lo que la tarea necesita",
        "Los canales sirven para lanzar tareas desde el móvil",
        "Añade más conexiones a medida que crecen tus flujos"
      ],
      "faq": [
        {
          "q": "¿Qué canales admite?",
          "a": "Telegram, Discord, DingTalk, Feishu y WeChat, para lanzar tareas desde el chat."
        },
        {
          "q": "¿Con cuántas apps funciona?",
          "a": "Con muchas, así las tareas de varios pasos no necesitan traspasos manuales."
        },
        {
          "q": "¿Necesito todas?",
          "a": "No, conecta solo las herramientas que esa tarea requiere."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Cómo configurar automatizaciones programadas en Accio Work",
      "tagline": "Convierte una tarea repetitiva en una que se ejecuta sola",
      "metaTitle": "Cómo configurar automatizaciones programadas en Accio Work",
      "metaDescription": "Cuando una tarea funciona, puedes hacerla repetir. Esta guía muestra cómo convertir una ejecución única en una automatización programada para que lo rutinario ocurra solo.",
      "h1": "Cómo configurar automatizaciones programadas en Accio Work",
      "intro": "Cuando una tarea funciona, puedes hacerla repetir. Esta guía muestra cómo convertir una ejecución única en una automatización programada para que lo rutinario ocurra solo.",
      "steps": [
        {
          "title": "Haz que la tarea funcione una vez",
          "desc": "Ejecútala a mano primero y confirma que el resultado es el que quieres."
        },
        {
          "title": "Guárdala como flujo",
          "desc": "Conserva los pasos para que el agente los repita sin que la describas otra vez."
        },
        {
          "title": "Fija una agenda",
          "desc": "Elige cuándo corre, diario, semanal o con tu propia frecuencia."
        },
        {
          "title": "Vigila y ajusta",
          "desc": "Revisa las ejecuciones, ajusta pasos y mantenla fiable cuando algo cambie."
        }
      ],
      "tips": [
        "Automatiza tareas que se repiten igual cada vez",
        "Empieza con una agenda antes de apilar más",
        "Revisa las primeras ejecuciones para pillar casos límite"
      ],
      "faq": [
        {
          "q": "¿Qué puedo programar?",
          "a": "Cualquier tarea repetible de varios pasos, con el horario que fijes."
        },
        {
          "q": "¿Correrá sin mí?",
          "a": "Sí, una vez programada se dispara sola entre tus apps conectadas."
        },
        {
          "q": "¿Puedo cambiarla luego?",
          "a": "Sí, edita los pasos o la agenda cuando quieras."
        }
      ]
    }
  },
  "zh": {
    "getting-started": {
      "slug": "getting-started",
      "name": "如何开始使用 Accio Work",
      "tagline": "一次坐下，从注册到第一个结果",
      "metaTitle": "如何开始使用 Accio Work",
      "metaDescription": "Accio Work 是一个做真实工作的 AI 智能体，而不只是聊天。本指南带你从注册账号走到第一个完成的结果，让你在开始前就清楚会发生什么。",
      "h1": "如何开始使用 Accio Work",
      "intro": "Accio Work 是一个做真实工作的 AI 智能体，而不只是聊天。本指南带你从注册账号走到第一个完成的结果，让你在开始前就清楚会发生什么。",
      "steps": [
        {
          "title": "创建账号",
          "desc": "免费注册，无需绑卡。你会进入工作区，一切任务从这里开始。"
        },
        {
          "title": "选定目标",
          "desc": "用大白话说清你要什么，比如为某商品找供应商，或写一个落地页。"
        },
        {
          "title": "看它规划",
          "desc": "一个通用智能体把目标拆成步骤，再把各部分交给选品、写作或分析的专项智能体。"
        },
        {
          "title": "审批并调整",
          "desc": "你实时看到计划和结果，认可对的，纠正偏的。"
        },
        {
          "title": "交付结果",
          "desc": "导出、发布或转发。工作是做完了，而不只是描述。"
        }
      ],
      "tips": [
        "从一个清晰目标开始，而不是含糊的请求",
        "把商品、市场或渠道说具体",
        "可在桌面端或直接在浏览器里使用"
      ],
      "faq": [
        {
          "q": "需要安装什么吗？",
          "a": "不需要，你可以在浏览器里用 Accio Work。也有 macOS 和 Windows 的桌面应用。"
        },
        {
          "q": "开始是免费的吗？",
          "a": "是的，免费方案无需绑卡，就能运行真实任务。"
        },
        {
          "q": "它是聊天机器人吗？",
          "a": "不是，它用真实工具和数据规划并执行任务，然后交给你完成的结果。"
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "如何在 Accio Work 中运行第一个任务",
      "tagline": "写一个智能体真能完成的目标",
      "metaTitle": "如何在 Accio Work 中运行第一个任务",
      "metaDescription": "结果强弱的差别，往往在于你给的目标。本指南教你如何组织第一个任务，让智能体从头做到尾，交回你能用的东西。",
      "h1": "如何在 Accio Work 中运行第一个任务",
      "intro": "结果强弱的差别，往往在于你给的目标。本指南教你如何组织第一个任务，让智能体从头做到尾，交回你能用的东西。",
      "steps": [
        {
          "title": "说明结果",
          "desc": "描述你要的成品，而不是步骤。说为 X 搭一个店铺页，而不是打开页面搭建器。"
        },
        {
          "title": "补上具体信息",
          "desc": "写明商品、市场、语气或预算。细节让泛泛的运行变得有用。"
        },
        {
          "title": "让它规划并开始",
          "desc": "智能体排好步骤就开始，你无需盯着每一次点击。"
        },
        {
          "title": "边做边审阅",
          "desc": "结果不断出来。认可好的步骤，纠正偏的，它继续推进。"
        }
      ],
      "tips": [
        "每个任务一个结果，胜过一长串愿望",
        "有例子就给一个",
        "若运行跑偏，纠正一次让它继续"
      ],
      "faq": [
        {
          "q": "什么算好的第一个任务？",
          "a": "一个清晰结果加几处具体信息，比如寻源某个指定商品，或起草一个落地页。"
        },
        {
          "q": "中途能改方向吗？",
          "a": "能，你在它工作时审阅并调整，而不必等到结束。"
        },
        {
          "q": "一个任务要多久？",
          "a": "简单的几分钟完成，较大的耗时更长，你可以随时查看。"
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "如何在 Accio Work 中连接应用与渠道",
      "tagline": "让智能体贯穿你已在用的工具",
      "metaTitle": "如何在 Accio Work 中连接应用与渠道",
      "metaDescription": "当 Accio Work 能触达你的工具时，它更有用。本指南讲如何连接应用和消息渠道，让智能体取数据、执行动作，并在你办公的地方找到你。",
      "h1": "如何在 Accio Work 中连接应用与渠道",
      "intro": "当 Accio Work 能触达你的工具时，它更有用。本指南讲如何连接应用和消息渠道，让智能体取数据、执行动作，并在你办公的地方找到你。",
      "steps": [
        {
          "title": "打开连接",
          "desc": "在工作区找到应用与渠道区域，集成都在那里。"
        },
        {
          "title": "连接你的应用",
          "desc": "关联你在用的工具，让智能体在其中读取和执行，免去手动复制粘贴。"
        },
        {
          "title": "添加一个渠道",
          "desc": "连接 Telegram、Discord、钉钉、飞书或微信等渠道，在聊天里触发并接收工作。"
        },
        {
          "title": "测试一下",
          "desc": "通过渠道或某个应用发一个小任务，确认连接端到端可用。"
        }
      ],
      "tips": [
        "只连接任务需要的，保持简单",
        "用渠道从手机上发起任务很方便",
        "随着工作流增多再添加更多连接"
      ],
      "faq": [
        {
          "q": "支持哪些渠道？",
          "a": "Telegram、Discord、钉钉、飞书和微信，你可以从聊天里运行任务。"
        },
        {
          "q": "它能触达多少应用？",
          "a": "很多，因此多步骤任务无需手动交接。"
        },
        {
          "q": "都要连吗？",
          "a": "不用，只连当前任务需要的工具。"
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "如何在 Accio Work 中设置定时自动化",
      "tagline": "把重复任务变成自动运行的任务",
      "metaTitle": "如何在 Accio Work 中设置定时自动化",
      "metaDescription": "任务跑通后，就可以让它重复。本指南教你把一次性运行变成定时自动化，让例行工作自行发生。",
      "h1": "如何在 Accio Work 中设置定时自动化",
      "intro": "任务跑通后，就可以让它重复。本指南教你把一次性运行变成定时自动化，让例行工作自行发生。",
      "steps": [
        {
          "title": "先让任务跑通一次",
          "desc": "先手动运行，确认结果就是你要的。"
        },
        {
          "title": "存为工作流",
          "desc": "保留步骤，让智能体无需你重新描述就能重复。"
        },
        {
          "title": "设置排期",
          "desc": "选择运行时间，每天、每周或按你的节奏。"
        },
        {
          "title": "监控与微调",
          "desc": "查看运行、调整步骤，在情况变化时保持可靠。"
        }
      ],
      "tips": [
        "把每次都一样的重复任务自动化",
        "先设一个排期，再逐步叠加",
        "查看前几次运行，抓住边界情况"
      ],
      "faq": [
        {
          "q": "我能排期什么？",
          "a": "任何可重复的多步骤任务，按你设定的时间运行。"
        },
        {
          "q": "它会自己运行吗？",
          "a": "会，排期后就在你连接的应用间自动触发。"
        },
        {
          "q": "以后能修改吗？",
          "a": "能，随时编辑步骤或排期。"
        }
      ]
    }
  },
  "pt": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Como começar no Accio Work",
      "tagline": "Do cadastro ao primeiro resultado de uma vez",
      "metaTitle": "Como começar no Accio Work",
      "metaDescription": "O Accio Work é um agente de IA que faz trabalho real, não só conversa. Este guia leva você da criação da conta ao primeiro resultado pronto, para saber o que esperar antes de começar.",
      "h1": "Como começar no Accio Work",
      "intro": "O Accio Work é um agente de IA que faz trabalho real, não só conversa. Este guia leva você da criação da conta ao primeiro resultado pronto, para saber o que esperar antes de começar.",
      "steps": [
        {
          "title": "Crie sua conta",
          "desc": "Cadastre-se grátis, sem cartão. Você chega ao workspace de onde parte cada tarefa."
        },
        {
          "title": "Escolha um objetivo",
          "desc": "Diga em palavras simples o que quer, como achar um fornecedor ou escrever uma landing page."
        },
        {
          "title": "Veja ele planejar",
          "desc": "Um agente geral divide o objetivo em passos e passa partes a agentes especialistas de sourcing, texto ou análise."
        },
        {
          "title": "Aprove e ajuste",
          "desc": "Você vê o plano e os resultados conforme chegam, aprova o certo e redireciona o que não está."
        },
        {
          "title": "Entregue o resultado",
          "desc": "Exporte, publique ou envie. O trabalho está feito, não só descrito."
        }
      ],
      "tips": [
        "Comece com um objetivo claro, não um pedido vago",
        "Seja específico sobre produto, mercado ou canal",
        "Dá para usar no desktop ou direto no navegador"
      ],
      "faq": [
        {
          "q": "Preciso instalar algo?",
          "a": "Não, dá para usar o Accio Work no navegador. Também há apps de desktop para macOS e Windows."
        },
        {
          "q": "Começar é grátis?",
          "a": "Sim, o plano gratuito não pede cartão e deixa você rodar tarefas reais."
        },
        {
          "q": "É um chatbot?",
          "a": "Não, ele planeja e executa tarefas com ferramentas e dados reais, e entrega um resultado pronto."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "Como executar sua primeira tarefa no Accio Work",
      "tagline": "Escreva um objetivo que o agente realmente conclua",
      "metaTitle": "Como executar sua primeira tarefa no Accio Work",
      "metaDescription": "A diferença entre um resultado fraco e um forte costuma estar no objetivo que você dá. Este guia mostra como formular a primeira tarefa para o agente executá-la do início ao fim e devolver algo utilizável.",
      "h1": "Como executar sua primeira tarefa no Accio Work",
      "intro": "A diferença entre um resultado fraco e um forte costuma estar no objetivo que você dá. Este guia mostra como formular a primeira tarefa para o agente executá-la do início ao fim e devolver algo utilizável.",
      "steps": [
        {
          "title": "Diga o resultado",
          "desc": "Descreva o resultado pronto, não os passos. Diga monte uma página de loja para X, não abra um construtor."
        },
        {
          "title": "Adicione os detalhes",
          "desc": "Nomeie produto, mercado, tom ou orçamento. Detalhe transforma uma execução genérica em útil."
        },
        {
          "title": "Deixe planejar e começar",
          "desc": "O agente monta os passos e começa. Você não microgerencia cada clique."
        },
        {
          "title": "Revise enquanto trabalha",
          "desc": "Os resultados chegam. Aprove passos bons, corrija o que sair torto e ele segue."
        }
      ],
      "tips": [
        "Um resultado por tarefa supera uma longa lista de desejos",
        "Dê um exemplo se tiver",
        "Se a execução desviar, corrija uma vez e deixe seguir"
      ],
      "faq": [
        {
          "q": "O que faz uma boa primeira tarefa?",
          "a": "Um resultado claro com alguns detalhes, como buscar um produto específico ou rascunhar uma landing page."
        },
        {
          "q": "Posso mudar o rumo no meio?",
          "a": "Sim, você revisa e redireciona enquanto ele trabalha, sem esperar o fim."
        },
        {
          "q": "Quanto demora uma tarefa?",
          "a": "As simples em minutos. As maiores levam mais e você acompanha ao longo."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Como conectar apps e canais no Accio Work",
      "tagline": "Deixe o agente trabalhar entre as ferramentas que você já usa",
      "metaTitle": "Como conectar apps e canais no Accio Work",
      "metaDescription": "O Accio Work é mais útil quando alcança suas ferramentas. Este guia cobre conectar apps e canais de mensagens para o agente puxar dados, agir e falar com você onde já trabalha.",
      "h1": "Como conectar apps e canais no Accio Work",
      "intro": "O Accio Work é mais útil quando alcança suas ferramentas. Este guia cobre conectar apps e canais de mensagens para o agente puxar dados, agir e falar com você onde já trabalha.",
      "steps": [
        {
          "title": "Abra as conexões",
          "desc": "No workspace, encontre a área de apps e canais onde ficam as integrações."
        },
        {
          "title": "Conecte seus apps",
          "desc": "Ligue as ferramentas que usa para o agente ler e agir sem copiar e colar."
        },
        {
          "title": "Adicione um canal",
          "desc": "Conecte um canal como Telegram, Discord, DingTalk, Feishu ou WeChat para disparar e receber trabalho no chat."
        },
        {
          "title": "Teste",
          "desc": "Envie uma tarefa pequena pelo canal ou app para confirmar que a conexão funciona de ponta a ponta."
        }
      ],
      "tips": [
        "Conecte só o que a tarefa precisa",
        "Canais são úteis para iniciar tarefas pelo celular",
        "Adicione mais conexões conforme os fluxos crescem"
      ],
      "faq": [
        {
          "q": "Quais canais são suportados?",
          "a": "Telegram, Discord, DingTalk, Feishu e WeChat, para rodar tarefas pelo chat."
        },
        {
          "q": "Com quantos apps ele funciona?",
          "a": "Com muitos, então tarefas de vários passos não precisam de repasses manuais."
        },
        {
          "q": "Preciso de todos?",
          "a": "Não, conecte só as ferramentas que a tarefa exige."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Como configurar automações agendadas no Accio Work",
      "tagline": "Transforme uma tarefa repetitiva em uma que roda sozinha",
      "metaTitle": "Como configurar automações agendadas no Accio Work",
      "metaDescription": "Quando uma tarefa funciona, você pode fazê-la repetir. Este guia mostra como transformar uma execução única em automação agendada para o trabalho rotineiro acontecer sozinho.",
      "h1": "Como configurar automações agendadas no Accio Work",
      "intro": "Quando uma tarefa funciona, você pode fazê-la repetir. Este guia mostra como transformar uma execução única em automação agendada para o trabalho rotineiro acontecer sozinho.",
      "steps": [
        {
          "title": "Faça a tarefa funcionar uma vez",
          "desc": "Rode manualmente primeiro e confirme que o resultado é o que você quer."
        },
        {
          "title": "Salve como fluxo",
          "desc": "Guarde os passos para o agente repetir sem você descrever de novo."
        },
        {
          "title": "Defina um agendamento",
          "desc": "Escolha quando roda, diário, semanal ou no seu ritmo."
        },
        {
          "title": "Monitore e ajuste",
          "desc": "Confira as execuções, ajuste passos e mantenha confiável quando algo mudar."
        }
      ],
      "tips": [
        "Automatize tarefas que se repetem do mesmo jeito",
        "Comece com um agendamento antes de empilhar mais",
        "Revise as primeiras execuções para pegar casos extremos"
      ],
      "faq": [
        {
          "q": "O que posso agendar?",
          "a": "Qualquer tarefa repetível de vários passos, no horário que você definir."
        },
        {
          "q": "Roda sem mim?",
          "a": "Sim, uma vez agendada dispara sozinha entre seus apps conectados."
        },
        {
          "q": "Posso mudar depois?",
          "a": "Sim, edite os passos ou o agendamento quando quiser."
        }
      ]
    }
  },
  "hi": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Accio Work कैसे शुरू करें",
      "tagline": "साइन अप से पहले नतीजे तक, एक ही बैठक में",
      "metaTitle": "Accio Work कैसे शुरू करें",
      "metaDescription": "Accio Work एक AI एजेंट है जो सिर्फ बातचीत नहीं, असली काम करता है। यह गाइड आपको अकाउंट बनाने से पहले तैयार नतीजे तक ले जाती है, ताकि शुरू करने से पहले आप ठीक से जानें कि क्या होगा।",
      "h1": "Accio Work कैसे शुरू करें",
      "intro": "Accio Work एक AI एजेंट है जो सिर्फ बातचीत नहीं, असली काम करता है। यह गाइड आपको अकाउंट बनाने से पहले तैयार नतीजे तक ले जाती है, ताकि शुरू करने से पहले आप ठीक से जानें कि क्या होगा।",
      "steps": [
        {
          "title": "अपना अकाउंट बनाएं",
          "desc": "मुफ्त साइन अप करें, कार्ड नहीं चाहिए। आप वर्कस्पेस में पहुंचते हैं, जहां से हर काम शुरू होता है।"
        },
        {
          "title": "लक्ष्य चुनें",
          "desc": "सादे शब्दों में बताएं क्या चाहिए, जैसे किसी प्रोडक्ट के लिए सप्लायर ढूंढना या लैंडिंग पेज लिखना।"
        },
        {
          "title": "योजना बनते देखें",
          "desc": "एक जनरल एजेंट लक्ष्य को कदमों में बांटता है और हिस्से सोर्सिंग, लेखन या विश्लेषण के विशेषज्ञ एजेंट को देता है।"
        },
        {
          "title": "मंज़ूरी दें और सुधारें",
          "desc": "आप योजना और नतीजे आते ही देखते हैं, सही को मंज़ूर करते हैं और बाकी को दिशा देते हैं।"
        },
        {
          "title": "नतीजा भेजें",
          "desc": "एक्सपोर्ट करें, प्रकाशित करें या आगे भेजें। काम हो गया, सिर्फ बताया नहीं गया।"
        }
      ],
      "tips": [
        "अस्पष्ट अनुरोध नहीं, एक साफ लक्ष्य से शुरू करें",
        "प्रोडक्ट, बाजार या चैनल के बारे में विशिष्ट रहें",
        "इसे डेस्कटॉप पर या सीधे ब्राउज़र में चला सकते हैं"
      ],
      "faq": [
        {
          "q": "क्या मुझे कुछ इंस्टॉल करना होगा?",
          "a": "नहीं, आप Accio Work ब्राउज़र में इस्तेमाल कर सकते हैं। macOS और Windows के डेस्कटॉप ऐप भी हैं।"
        },
        {
          "q": "शुरू करना मुफ्त है?",
          "a": "हां, मुफ्त प्लान कार्ड नहीं मांगता और असली काम चलाने देता है।"
        },
        {
          "q": "क्या यह चैटबॉट है?",
          "a": "नहीं, यह असली टूल और डेटा से काम की योजना बनाकर करता है, फिर तैयार नतीजा देता है।"
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "Accio Work में पहला काम कैसे चलाएं",
      "tagline": "ऐसा लक्ष्य लिखें जिसे एजेंट सच में पूरा कर सके",
      "metaTitle": "Accio Work में पहला काम कैसे चलाएं",
      "metaDescription": "कमजोर और मजबूत नतीजे का फर्क अक्सर आपके दिए लक्ष्य में होता है। यह गाइड बताती है कि पहला काम कैसे लिखें ताकि एजेंट उसे शुरू से अंत तक चलाए और काम की चीज लौटाए।",
      "h1": "Accio Work में पहला काम कैसे चलाएं",
      "intro": "कमजोर और मजबूत नतीजे का फर्क अक्सर आपके दिए लक्ष्य में होता है। यह गाइड बताती है कि पहला काम कैसे लिखें ताकि एजेंट उसे शुरू से अंत तक चलाए और काम की चीज लौटाए।",
      "steps": [
        {
          "title": "नतीजा बताएं",
          "desc": "तैयार नतीजा बताएं, कदम नहीं। कहें X के लिए स्टोर पेज बनाओ, न कि पेज बिल्डर खोलो।"
        },
        {
          "title": "ब्योरा जोड़ें",
          "desc": "प्रोडक्ट, बाजार, टोन या बजट बताएं। ब्योरा सामान्य रन को उपयोगी बना देता है।"
        },
        {
          "title": "योजना बनाकर शुरू करने दें",
          "desc": "एजेंट कदम तय कर शुरू कर देता है। हर क्लिक संभालने की जरूरत नहीं।"
        },
        {
          "title": "काम के दौरान जांचें",
          "desc": "नतीजे आते रहते हैं। सही कदम मंज़ूर करें, गड़बड़ सुधारें, वह चलता रहता है।"
        }
      ],
      "tips": [
        "हर काम में एक नतीजा, लंबी इच्छा सूची से बेहतर",
        "उदाहरण हो तो दें",
        "रन भटके तो एक बार सुधारें और चलने दें"
      ],
      "faq": [
        {
          "q": "अच्छा पहला काम क्या होता है?",
          "a": "कुछ ब्योरे के साथ एक साफ नतीजा, जैसे किसी तय प्रोडक्ट की सोर्सिंग या एक लैंडिंग पेज का ड्राफ्ट।"
        },
        {
          "q": "क्या बीच में दिशा बदल सकता हूं?",
          "a": "हां, अंत का इंतजार किए बिना, काम के दौरान ही जांचें और दिशा दें।"
        },
        {
          "q": "एक काम में कितना समय लगता है?",
          "a": "सरल काम मिनटों में, बड़े ज्यादा समय लेते हैं और आप बीच में देख सकते हैं।"
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Accio Work में ऐप्स और चैनल कैसे जोड़ें",
      "tagline": "एजेंट को आपके मौजूदा टूल में काम करने दें",
      "metaTitle": "Accio Work में ऐप्स और चैनल कैसे जोड़ें",
      "metaDescription": "जब Accio Work आपके टूल तक पहुंच सके, तो यह ज्यादा उपयोगी होता है। यह गाइड ऐप्स और मैसेजिंग चैनल जोड़ने पर है, ताकि एजेंट डेटा ले, काम करे और आपको वहीं मिले जहां आप पहले से काम करते हैं।",
      "h1": "Accio Work में ऐप्स और चैनल कैसे जोड़ें",
      "intro": "जब Accio Work आपके टूल तक पहुंच सके, तो यह ज्यादा उपयोगी होता है। यह गाइड ऐप्स और मैसेजिंग चैनल जोड़ने पर है, ताकि एजेंट डेटा ले, काम करे और आपको वहीं मिले जहां आप पहले से काम करते हैं।",
      "steps": [
        {
          "title": "कनेक्शन खोलें",
          "desc": "वर्कस्पेस में ऐप्स और चैनल वाला हिस्सा ढूंढें, जहां इंटीग्रेशन होते हैं।"
        },
        {
          "title": "अपने ऐप्स जोड़ें",
          "desc": "अपने टूल जोड़ें ताकि एजेंट उनमें पढ़े और काम करे, बिना मैनुअल कॉपी पेस्ट।"
        },
        {
          "title": "एक चैनल जोड़ें",
          "desc": "Telegram, Discord, DingTalk, Feishu या WeChat जैसा चैनल जोड़ें ताकि चैट में काम शुरू और प्राप्त हो।"
        },
        {
          "title": "परखें",
          "desc": "चैनल या किसी ऐप से एक छोटा काम भेजें ताकि पूरा कनेक्शन सही चलता दिखे।"
        }
      ],
      "tips": [
        "सरल रखने के लिए बस वही जोड़ें जो काम को चाहिए",
        "फोन से काम शुरू करने के लिए चैनल आसान हैं",
        "फ्लो बढ़ने के साथ और कनेक्शन जोड़ें"
      ],
      "faq": [
        {
          "q": "कौन से चैनल समर्थित हैं?",
          "a": "Telegram, Discord, DingTalk, Feishu और WeChat, ताकि आप चैट से काम चला सकें।"
        },
        {
          "q": "यह कितने ऐप्स तक पहुंचता है?",
          "a": "कई तक, इसलिए कई चरणों वाले काम में मैनुअल हैंडऑफ नहीं लगते।"
        },
        {
          "q": "क्या सभी चाहिए?",
          "a": "नहीं, बस वही जोड़ें जो उस काम को चाहिए।"
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Accio Work में शेड्यूल ऑटोमेशन कैसे सेट करें",
      "tagline": "दोहराए जाने वाले काम को खुद चलने वाला बनाएं",
      "metaTitle": "Accio Work में शेड्यूल ऑटोमेशन कैसे सेट करें",
      "metaDescription": "जब कोई काम चल जाए, तो उसे दोहराया जा सकता है। यह गाइड बताती है कि एक बार के रन को शेड्यूल ऑटोमेशन में कैसे बदलें ताकि रूटीन खुद चले।",
      "h1": "Accio Work में शेड्यूल ऑटोमेशन कैसे सेट करें",
      "intro": "जब कोई काम चल जाए, तो उसे दोहराया जा सकता है। यह गाइड बताती है कि एक बार के रन को शेड्यूल ऑटोमेशन में कैसे बदलें ताकि रूटीन खुद चले।",
      "steps": [
        {
          "title": "पहले काम को एक बार चलाएं",
          "desc": "पहले मैनुअल चलाएं और पक्का करें कि नतीजा वही है जो चाहिए।"
        },
        {
          "title": "वर्कफ्लो के रूप में सहेजें",
          "desc": "कदम रख लें ताकि एजेंट उन्हें दोबारा बताए बिना दोहरा सके।"
        },
        {
          "title": "शेड्यूल तय करें",
          "desc": "चुनें कब चले, रोज, साप्ताहिक या अपने समय पर।"
        },
        {
          "title": "निगरानी और सुधार",
          "desc": "रन देखें, कदम बदलें और बदलावों के बीच भरोसेमंद रखें।"
        }
      ],
      "tips": [
        "उन कामों को ऑटोमेट करें जो हर बार एक जैसे दोहराते हैं",
        "और जोड़ने से पहले एक शेड्यूल से शुरू करें",
        "किनारे के मामले पकड़ने के लिए पहले कुछ रन देखें"
      ],
      "faq": [
        {
          "q": "मैं क्या शेड्यूल कर सकता हूं?",
          "a": "कोई भी दोहराने योग्य कई चरणों वाला काम, आपके तय समय पर।"
        },
        {
          "q": "क्या यह मेरे बिना चलेगा?",
          "a": "हां, शेड्यूल होते ही यह आपके जुड़े ऐप्स में खुद चलता है।"
        },
        {
          "q": "क्या बाद में बदल सकता हूं?",
          "a": "हां, कदम या शेड्यूल कभी भी बदलें।"
        }
      ]
    }
  },
  "fr": {
    "getting-started": {
      "slug": "getting-started",
      "name": "Comment démarrer avec Accio Work",
      "tagline": "De l'inscription au premier résultat en une seule fois",
      "metaTitle": "Comment démarrer avec Accio Work",
      "metaDescription": "Accio Work est un agent IA qui fait un vrai travail, pas seulement du chat. Ce guide vous mène de la création du compte au premier résultat terminé, pour savoir à quoi vous attendre avant de commencer.",
      "h1": "Comment démarrer avec Accio Work",
      "intro": "Accio Work est un agent IA qui fait un vrai travail, pas seulement du chat. Ce guide vous mène de la création du compte au premier résultat terminé, pour savoir à quoi vous attendre avant de commencer.",
      "steps": [
        {
          "title": "Créez votre compte",
          "desc": "Inscrivez-vous gratuitement, sans carte. Vous arrivez dans l'espace de travail d'où part chaque tâche."
        },
        {
          "title": "Choisissez un objectif",
          "desc": "Dites en mots simples ce que vous voulez, comme trouver un fournisseur ou écrire une page de destination."
        },
        {
          "title": "Regardez-le planifier",
          "desc": "Un agent général découpe l'objectif en étapes et confie des parties à des agents spécialistes du sourcing, du texte ou de l'analyse."
        },
        {
          "title": "Validez et ajustez",
          "desc": "Vous voyez le plan et les résultats au fil de l'eau, validez le bon et réorientez le reste."
        },
        {
          "title": "Livrez le résultat",
          "desc": "Exportez, publiez ou transmettez. Le travail est fait, pas seulement décrit."
        }
      ],
      "tips": [
        "Commencez par un objectif clair plutôt qu'une demande vague",
        "Soyez précis sur le produit, le marché ou le canal",
        "Vous pouvez l'utiliser sur desktop ou directement dans le navigateur"
      ],
      "faq": [
        {
          "q": "Dois-je installer quelque chose ?",
          "a": "Non, vous pouvez utiliser Accio Work dans le navigateur. Des apps desktop pour macOS et Windows existent aussi."
        },
        {
          "q": "Le démarrage est-il gratuit ?",
          "a": "Oui, l'offre gratuite ne demande pas de carte et permet d'exécuter de vraies tâches."
        },
        {
          "q": "Est-ce un chatbot ?",
          "a": "Non, il planifie et exécute des tâches avec de vrais outils et données, puis vous remet un résultat fini."
        }
      ]
    },
    "first-task": {
      "slug": "first-task",
      "name": "Comment lancer votre première tâche dans Accio Work",
      "tagline": "Formulez un objectif que l'agent peut vraiment terminer",
      "metaTitle": "Comment lancer votre première tâche dans Accio Work",
      "metaDescription": "La différence entre un résultat faible et un bon tient souvent à l'objectif que vous donnez. Ce guide montre comment formuler une première tâche pour que l'agent la mène de bout en bout et vous rende quelque chose d'utilisable.",
      "h1": "Comment lancer votre première tâche dans Accio Work",
      "intro": "La différence entre un résultat faible et un bon tient souvent à l'objectif que vous donnez. Ce guide montre comment formuler une première tâche pour que l'agent la mène de bout en bout et vous rende quelque chose d'utilisable.",
      "steps": [
        {
          "title": "Énoncez le résultat",
          "desc": "Décrivez le résultat fini, pas les étapes. Dites crée une page boutique pour X, pas ouvre un éditeur."
        },
        {
          "title": "Ajoutez les détails",
          "desc": "Nommez le produit, le marché, le ton ou le budget. Le détail rend utile une exécution générique."
        },
        {
          "title": "Laissez-le planifier et démarrer",
          "desc": "L'agent pose les étapes et commence. Vous ne pilotez pas chaque clic."
        },
        {
          "title": "Vérifiez pendant le travail",
          "desc": "Les résultats arrivent. Validez les bonnes étapes, corrigez ce qui dévie, il poursuit."
        }
      ],
      "tips": [
        "Un résultat par tâche vaut mieux qu'une longue liste de souhaits",
        "Donnez un exemple si vous en avez un",
        "Si une exécution dévie, corrigez une fois et laissez continuer"
      ],
      "faq": [
        {
          "q": "Qu'est-ce qu'une bonne première tâche ?",
          "a": "Un résultat clair avec quelques détails, comme sourcer un produit précis ou rédiger une page de destination."
        },
        {
          "q": "Puis-je changer de cap en cours ?",
          "a": "Oui, vous vérifiez et réorientez pendant le travail, sans attendre la fin."
        },
        {
          "q": "Combien de temps dure une tâche ?",
          "a": "Les simples en minutes. Les plus grosses durent plus et vous pouvez suivre au fil de l'eau."
        }
      ]
    },
    "connect-apps": {
      "slug": "connect-apps",
      "name": "Comment connecter apps et canaux dans Accio Work",
      "tagline": "Laissez l'agent travailler à travers vos outils actuels",
      "metaTitle": "Comment connecter apps et canaux dans Accio Work",
      "metaDescription": "Accio Work est plus utile quand il atteint vos outils. Ce guide explique comment connecter applis et canaux de messagerie pour que l'agent récupère des données, agisse et vous joigne là où vous travaillez déjà.",
      "h1": "Comment connecter apps et canaux dans Accio Work",
      "intro": "Accio Work est plus utile quand il atteint vos outils. Ce guide explique comment connecter applis et canaux de messagerie pour que l'agent récupère des données, agisse et vous joigne là où vous travaillez déjà.",
      "steps": [
        {
          "title": "Ouvrez les connexions",
          "desc": "Dans l'espace de travail, trouvez la zone applis et canaux où vivent les intégrations."
        },
        {
          "title": "Connectez vos applis",
          "desc": "Reliez vos outils pour que l'agent y lise et agisse sans copier coller."
        },
        {
          "title": "Ajoutez un canal",
          "desc": "Connectez un canal comme Telegram, Discord, DingTalk, Feishu ou WeChat pour lancer et recevoir du travail en chat."
        },
        {
          "title": "Testez",
          "desc": "Envoyez une petite tâche via le canal ou une appli pour confirmer que la connexion fonctionne de bout en bout."
        }
      ],
      "tips": [
        "Connectez seulement ce dont la tâche a besoin",
        "Les canaux sont pratiques pour lancer des tâches depuis le téléphone",
        "Ajoutez d'autres connexions à mesure que vos flux grandissent"
      ],
      "faq": [
        {
          "q": "Quels canaux sont pris en charge ?",
          "a": "Telegram, Discord, DingTalk, Feishu et WeChat, pour lancer des tâches depuis le chat."
        },
        {
          "q": "Combien d'applis peut-il atteindre ?",
          "a": "Beaucoup, donc les tâches à plusieurs étapes n'ont pas besoin de transferts manuels."
        },
        {
          "q": "Faut-il toutes les connecter ?",
          "a": "Non, connectez seulement les outils dont la tâche a besoin."
        }
      ]
    },
    "automations": {
      "slug": "automations",
      "name": "Comment configurer des automatisations planifiées dans Accio Work",
      "tagline": "Transformez une tâche répétitive en une tâche qui tourne seule",
      "metaTitle": "Comment configurer des automatisations planifiées dans Accio Work",
      "metaDescription": "Une fois qu'une tâche fonctionne, vous pouvez la faire se répéter. Ce guide montre comment transformer une exécution unique en automatisation planifiée pour que la routine se fasse seule.",
      "h1": "Comment configurer des automatisations planifiées dans Accio Work",
      "intro": "Une fois qu'une tâche fonctionne, vous pouvez la faire se répéter. Ce guide montre comment transformer une exécution unique en automatisation planifiée pour que la routine se fasse seule.",
      "steps": [
        {
          "title": "Faites fonctionner la tâche une fois",
          "desc": "Exécutez-la d'abord à la main et confirmez que le résultat convient."
        },
        {
          "title": "Enregistrez-la comme flux",
          "desc": "Gardez les étapes pour que l'agent les répète sans que vous les redécriviez."
        },
        {
          "title": "Définissez un planning",
          "desc": "Choisissez quand elle tourne, chaque jour, chaque semaine ou à votre rythme."
        },
        {
          "title": "Surveillez et ajustez",
          "desc": "Vérifiez les exécutions, ajustez les étapes et gardez la fiabilité quand les choses changent."
        }
      ],
      "tips": [
        "Automatisez les tâches qui se répètent à l'identique",
        "Commencez par un planning avant d'en empiler d'autres",
        "Vérifiez les premières exécutions pour repérer les cas limites"
      ],
      "faq": [
        {
          "q": "Que puis-je planifier ?",
          "a": "Toute tâche répétable à plusieurs étapes, selon l'horaire que vous fixez."
        },
        {
          "q": "Tourne-t-elle sans moi ?",
          "a": "Oui, une fois planifiée elle se déclenche seule à travers vos applis connectées."
        },
        {
          "q": "Puis-je la modifier ensuite ?",
          "a": "Oui, modifiez les étapes ou le planning à tout moment."
        }
      ]
    }
  }
};

export const gdOrder: string[] = ["getting-started", "first-task", "connect-apps", "automations"];
