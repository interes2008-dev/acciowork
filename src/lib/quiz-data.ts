// AUTO GENERATED quiz content. Edit gen_quiz_data.py to change.
export type QzLang = "en" | "ru" | "de" | "it" | "es" | "zh" | "pt" | "hi" | "fr";
type L = Record<QzLang, string>;
export interface QzOption { label: L; score: number; }
export interface QzQuestion { q: L; options: QzOption[]; }
export interface QzResult { title: L; body: L; cta: boolean; }
export interface QzChrome { kicker: string; h1: string; intro: string; next: string; back: string; seeResult: string; retake: string; of: string; question: string; resultKicker: string; ctaFit: string; ctaNote: string; tryLine: string; weakNote: string; disclaimer: string; metaTitle: string; metaDesc: string; }
export const qzChrome: Record<QzLang, QzChrome> = {
  "en": {
    "kicker": "2 minute check",
    "h1": "Is Accio Work right for you?",
    "intro": "Five quick questions. You get an honest read on whether this agent fits your business, including when it does not.",
    "next": "Next",
    "back": "Back",
    "seeResult": "See my result",
    "retake": "Start over",
    "of": "of",
    "question": "Question",
    "resultKicker": "Your result",
    "ctaFit": "Start free on Accio Work",
    "ctaNote": "Free plan, no card required",
    "tryLine": "Try it on a real task and judge for yourself.",
    "weakNote": "No hard feelings. A general purpose agent may serve you better.",
    "disclaimer": "This is a quick guide, not a verdict. Your own trial is the real test.",
    "metaTitle": "Is Accio Work right for you? | 2 minute fit check",
    "metaDesc": "Answer five quick questions and get an honest read on whether Accio Work, Alibaba's AI agent, fits your business, including when it does not."
  },
  "ru": {
    "kicker": "Проверка за 2 минуты",
    "h1": "Подходит ли вам Accio Work?",
    "intro": "Пять коротких вопросов. Получите честный ответ, подходит ли этот агент вашему делу, включая случаи, когда нет.",
    "next": "Дальше",
    "back": "Назад",
    "seeResult": "Показать результат",
    "retake": "Заново",
    "of": "из",
    "question": "Вопрос",
    "resultKicker": "Ваш результат",
    "ctaFit": "Начать бесплатно в Accio Work",
    "ctaNote": "Бесплатный план, карта не нужна",
    "tryLine": "Проверьте на реальной задаче и решите сами.",
    "weakNote": "Ничего страшного. Универсальный агент подойдёт вам лучше.",
    "disclaimer": "Это быстрый ориентир, а не приговор. Настоящая проверка это ваш тест.",
    "metaTitle": "Подходит ли вам Accio Work? | Проверка за 2 минуты",
    "metaDesc": "Ответьте на пять коротких вопросов и получите честный ответ, подходит ли Accio Work, AI-агент Alibaba, вашему делу, включая случаи, когда нет."
  },
  "de": {
    "kicker": "2 Minuten Check",
    "h1": "Passt Accio Work zu dir?",
    "intro": "Fünf kurze Fragen. Du bekommst eine ehrliche Einschätzung, ob dieser Agent zu deinem Geschäft passt, auch wann nicht.",
    "next": "Weiter",
    "back": "Zurück",
    "seeResult": "Ergebnis zeigen",
    "retake": "Neu starten",
    "of": "von",
    "question": "Frage",
    "resultKicker": "Dein Ergebnis",
    "ctaFit": "Kostenlos mit Accio Work starten",
    "ctaNote": "Kostenloser Plan, keine Karte nötig",
    "tryLine": "Teste es an einer echten Aufgabe und urteile selbst.",
    "weakNote": "Kein Problem. Ein Allzweck-Agent dient dir vielleicht besser.",
    "disclaimer": "Das ist ein schneller Wegweiser, kein Urteil. Der echte Test ist dein eigener Versuch.",
    "metaTitle": "Passt Accio Work zu dir? | 2 Minuten Check",
    "metaDesc": "Beantworte fünf kurze Fragen und erhalte eine ehrliche Einschätzung, ob Accio Work, Alibabas KI-Agent, zu deinem Geschäft passt, auch wann nicht."
  },
  "it": {
    "kicker": "Verifica in 2 minuti",
    "h1": "Accio Work fa per te?",
    "intro": "Cinque domande veloci. Ottieni una lettura onesta se questo agente si adatta alla tua attività, anche quando no.",
    "next": "Avanti",
    "back": "Indietro",
    "seeResult": "Vedi il risultato",
    "retake": "Ricomincia",
    "of": "di",
    "question": "Domanda",
    "resultKicker": "Il tuo risultato",
    "ctaFit": "Inizia gratis su Accio Work",
    "ctaNote": "Piano gratuito, nessuna carta richiesta",
    "tryLine": "Provalo su un caso reale e giudica da te.",
    "weakNote": "Nessun problema. Un agente generico potrebbe servirti meglio.",
    "disclaimer": "È una guida rapida, non un verdetto. La vera prova è il tuo test.",
    "metaTitle": "Accio Work fa per te? | Verifica in 2 minuti",
    "metaDesc": "Rispondi a cinque domande veloci e ottieni una lettura onesta se Accio Work, l'agente AI di Alibaba, si adatta alla tua attività, anche quando no."
  },
  "es": {
    "kicker": "Chequeo de 2 minutos",
    "h1": "¿Accio Work es para ti?",
    "intro": "Cinco preguntas rápidas. Obtienes una lectura honesta de si este agente encaja con tu negocio, incluso cuando no.",
    "next": "Siguiente",
    "back": "Atrás",
    "seeResult": "Ver mi resultado",
    "retake": "Empezar de nuevo",
    "of": "de",
    "question": "Pregunta",
    "resultKicker": "Tu resultado",
    "ctaFit": "Empieza gratis en Accio Work",
    "ctaNote": "Plan gratuito, sin tarjeta",
    "tryLine": "Pruébalo en una tarea real y juzga por ti mismo.",
    "weakNote": "Sin problema. Un agente de propósito general podría servirte mejor.",
    "disclaimer": "Es una guía rápida, no un veredicto. La prueba real es tu propio ensayo.",
    "metaTitle": "¿Accio Work es para ti? | Chequeo de 2 minutos",
    "metaDesc": "Responde cinco preguntas rápidas y obtén una lectura honesta de si Accio Work, el agente de IA de Alibaba, encaja con tu negocio, incluso cuando no."
  },
  "zh": {
    "kicker": "2 分钟自测",
    "h1": "Accio Work 适合你吗？",
    "intro": "五个快速问题。你会得到一个诚实的判断，看它是否适合你的生意，也包括不适合的情况。",
    "next": "下一题",
    "back": "上一题",
    "seeResult": "查看结果",
    "retake": "重新开始",
    "of": "/",
    "question": "第",
    "resultKicker": "你的结果",
    "ctaFit": "免费开始使用 Accio Work",
    "ctaNote": "免费方案，无需绑定银行卡",
    "tryLine": "用一个真实任务试试，自己判断。",
    "weakNote": "没关系。通用型智能体也许更适合你。",
    "disclaimer": "这是快速参考，不是定论。真正的检验是你自己的试用。",
    "metaTitle": "Accio Work 适合你吗？| 2 分钟自测",
    "metaDesc": "回答五个快速问题，得到一个诚实的判断，看阿里的 AI 智能体 Accio Work 是否适合你的生意，也包括不适合的情况。"
  },
  "pt": {
    "kicker": "Teste de 2 minutos",
    "h1": "O Accio Work é para você?",
    "intro": "Cinco perguntas rápidas. Você recebe uma leitura honesta se este agente combina com seu negócio, inclusive quando não.",
    "next": "Próxima",
    "back": "Voltar",
    "seeResult": "Ver meu resultado",
    "retake": "Recomeçar",
    "of": "de",
    "question": "Pergunta",
    "resultKicker": "Seu resultado",
    "ctaFit": "Comece grátis no Accio Work",
    "ctaNote": "Plano gratuito, sem cartão",
    "tryLine": "Teste em uma tarefa real e julgue você mesmo.",
    "weakNote": "Sem problema. Um agente de uso geral pode te servir melhor.",
    "disclaimer": "É um guia rápido, não um veredito. O teste real é o seu próprio ensaio.",
    "metaTitle": "O Accio Work é para você? | Teste de 2 minutos",
    "metaDesc": "Responda cinco perguntas rápidas e receba uma leitura honesta se o Accio Work, agente de IA da Alibaba, combina com seu negócio, inclusive quando não."
  },
  "hi": {
    "kicker": "2 मिनट की जांच",
    "h1": "क्या Accio Work आपके लिए है?",
    "intro": "पांच त्वरित सवाल। आपको ईमानदार जवाब मिलेगा कि यह एजेंट आपके कारोबार में फिट है या नहीं, यह भी कि कब नहीं।",
    "next": "आगे",
    "back": "पीछे",
    "seeResult": "मेरा नतीजा देखें",
    "retake": "फिर से शुरू",
    "of": "में से",
    "question": "सवाल",
    "resultKicker": "आपका नतीजा",
    "ctaFit": "Accio Work मुफ्त में शुरू करें",
    "ctaNote": "मुफ्त प्लान, कार्ड की जरूरत नहीं",
    "tryLine": "किसी असली काम पर आज़माएं और खुद तय करें।",
    "weakNote": "कोई बात नहीं। एक सामान्य एजेंट आपके लिए बेहतर हो सकता है।",
    "disclaimer": "यह त्वरित मार्गदर्शन है, फैसला नहीं। असली परख आपका अपना ट्रायल है।",
    "metaTitle": "क्या Accio Work आपके लिए है? | 2 मिनट की जांच",
    "metaDesc": "पांच त्वरित सवालों के जवाब दें और ईमानदार जवाब पाएं कि Alibaba का AI एजेंट Accio Work आपके कारोबार में फिट है या नहीं, यह भी कि कब नहीं।"
  },
  "fr": {
    "kicker": "Test de 2 minutes",
    "h1": "Accio Work est-il fait pour vous ?",
    "intro": "Cinq questions rapides. Vous obtenez un avis honnête sur l'adéquation de cet agent à votre activité, y compris quand ce n'est pas le cas.",
    "next": "Suivant",
    "back": "Retour",
    "seeResult": "Voir mon résultat",
    "retake": "Recommencer",
    "of": "sur",
    "question": "Question",
    "resultKicker": "Votre résultat",
    "ctaFit": "Commencer gratuitement sur Accio Work",
    "ctaNote": "Offre gratuite, sans carte",
    "tryLine": "Testez sur une vraie tâche et jugez par vous-même.",
    "weakNote": "Pas de souci. Un agent généraliste vous conviendra peut-être mieux.",
    "disclaimer": "C'est un guide rapide, pas un verdict. Le vrai test, c'est votre propre essai.",
    "metaTitle": "Accio Work est-il fait pour vous ? | Test de 2 minutes",
    "metaDesc": "Répondez à cinq questions rapides et obtenez un avis honnête sur l'adéquation d'Accio Work, l'agent IA d'Alibaba, à votre activité, y compris quand ce n'est"
  }
};

export const qzQuestions: QzQuestion[] = [
  {
    "q": {
      "en": "Where do you mainly sell?",
      "ru": "Где вы в основном продаёте?",
      "de": "Wo verkaufst du hauptsächlich?",
      "it": "Dove vendi principalmente?",
      "es": "¿Dónde vendes principalmente?",
      "zh": "你主要在哪里销售？",
      "pt": "Onde você vende principalmente?",
      "hi": "आप मुख्य रूप से कहां बेचते हैं?",
      "fr": "Où vendez-vous principalement ?"
    },
    "options": [
      {
        "label": {
          "en": "Cross border, international",
          "ru": "Трансгранично, за рубеж",
          "de": "Grenzüberschreitend, international",
          "it": "Transfrontaliero, internazionale",
          "es": "Transfronterizo, internacional",
          "zh": "跨境、面向国际",
          "pt": "Transfronteiriço, internacional",
          "hi": "सीमापार, अंतरराष्ट्रीय",
          "fr": "Transfrontalier, international"
        },
        "score": 2
      },
      {
        "label": {
          "en": "Mostly one local market",
          "ru": "В основном один локальный рынок",
          "de": "Meist ein lokaler Markt",
          "it": "Soprattutto un mercato locale",
          "es": "Sobre todo un mercado local",
          "zh": "主要是一个本地市场",
          "pt": "Sobretudo um mercado local",
          "hi": "ज्यादातर एक स्थानीय बाजार",
          "fr": "Surtout un marché local"
        },
        "score": 0
      },
      {
        "label": {
          "en": "Not selling yet, exploring",
          "ru": "Пока не продаю, изучаю",
          "de": "Verkaufe noch nicht, erkunde",
          "it": "Non vendo ancora, esploro",
          "es": "Aún no vendo, explorando",
          "zh": "还没开始卖，在了解",
          "pt": "Ainda não vendo, explorando",
          "hi": "अभी बेच नहीं रहा, देख रहा हूं",
          "fr": "Je ne vends pas encore, j'explore"
        },
        "score": 1
      }
    ]
  },
  {
    "q": {
      "en": "Where do you source products?",
      "ru": "Где вы закупаете товары?",
      "de": "Wo beziehst du Produkte?",
      "it": "Dove ti rifornisci di prodotti?",
      "es": "¿Dónde te abasteces de productos?",
      "zh": "你从哪里采购商品？",
      "pt": "Onde você compra produtos?",
      "hi": "आप उत्पाद कहां से खरीदते हैं?",
      "fr": "Où vous approvisionnez-vous ?"
    },
    "options": [
      {
        "label": {
          "en": "Alibaba.com or AliExpress",
          "ru": "Alibaba.com или AliExpress",
          "de": "Alibaba.com oder AliExpress",
          "it": "Alibaba.com o AliExpress",
          "es": "Alibaba.com o AliExpress",
          "zh": "阿里巴巴或全球速卖通",
          "pt": "Alibaba.com ou AliExpress",
          "hi": "Alibaba.com या AliExpress",
          "fr": "Alibaba.com ou AliExpress"
        },
        "score": 3
      },
      {
        "label": {
          "en": "Other overseas suppliers",
          "ru": "Другие зарубежные поставщики",
          "de": "Andere Übersee-Lieferanten",
          "it": "Altri fornitori esteri",
          "es": "Otros proveedores del extranjero",
          "zh": "其他海外供应商",
          "pt": "Outros fornecedores no exterior",
          "hi": "अन्य विदेशी सप्लायर",
          "fr": "D'autres fournisseurs étrangers"
        },
        "score": 2
      },
      {
        "label": {
          "en": "Domestic only, or I make my own",
          "ru": "Только внутри страны или делаю сам",
          "de": "Nur inländisch, oder Eigenproduktion",
          "it": "Solo nazionali, o produco io",
          "es": "Solo nacionales, o los fabrico",
          "zh": "仅本地，或自己生产",
          "pt": "Só nacionais, ou eu fabrico",
          "hi": "केवल घरेलू, या खुद बनाता हूं",
          "fr": "Nationaux seulement, ou je fabrique"
        },
        "score": 0
      },
      {
        "label": {
          "en": "I don't source physical products",
          "ru": "Я не закупаю физические товары",
          "de": "Ich beziehe keine physischen Produkte",
          "it": "Non mi rifornisco di prodotti fisici",
          "es": "No me abastezco de productos físicos",
          "zh": "我不采购实物商品",
          "pt": "Não compro produtos físicos",
          "hi": "मैं भौतिक उत्पाद नहीं खरीदता",
          "fr": "Je ne source pas de produits physiques"
        },
        "score": 0
      }
    ]
  },
  {
    "q": {
      "en": "How much of your week goes to repetitive work like sourcing, research, listings and admin?",
      "ru": "Сколько времени в неделю уходит на рутину: закупки, ресёрч, карточки, админку?",
      "de": "Wie viel deiner Woche geht für Routine wie Sourcing, Recherche, Listings und Verwaltung drauf?",
      "it": "Quanta parte della settimana va in lavoro ripetitivo come sourcing, ricerca, schede e gestione?",
      "es": "¿Cuánto de tu semana se va en trabajo repetitivo como sourcing, investigación, fichas y administración?",
      "zh": "你每周有多少时间花在寻源、调研、上架和行政这类重复工作上？",
      "pt": "Quanto da sua semana vai para trabalho repetitivo como sourcing, pesquisa, fichas e administração?",
      "hi": "आपका कितना हफ्ता सोर्सिंग, रिसर्च, लिस्टिंग और प्रशासन जैसे दोहराव वाले काम में जाता है?",
      "fr": "Quelle part de votre semaine part dans le répétitif comme sourcing, recherche, fiches et administration ?"
    },
    "options": [
      {
        "label": {
          "en": "A lot, it eats my week",
          "ru": "Много, съедает неделю",
          "de": "Viel, frisst meine Woche",
          "it": "Tanta, mi divora la settimana",
          "es": "Mucho, se come mi semana",
          "zh": "很多，占掉我一周",
          "pt": "Muito, devora minha semana",
          "hi": "बहुत, हफ्ता खा जाता है",
          "fr": "Beaucoup, ça dévore ma semaine"
        },
        "score": 2
      },
      {
        "label": {
          "en": "Some",
          "ru": "Средне",
          "de": "Etwas",
          "it": "Un po'",
          "es": "Algo",
          "zh": "一些",
          "pt": "Um pouco",
          "hi": "थोड़ा",
          "fr": "Un peu"
        },
        "score": 1
      },
      {
        "label": {
          "en": "Very little",
          "ru": "Совсем немного",
          "de": "Sehr wenig",
          "it": "Molto poca",
          "es": "Muy poco",
          "zh": "很少",
          "pt": "Muito pouco",
          "hi": "बहुत कम",
          "fr": "Très peu"
        },
        "score": 0
      }
    ]
  },
  {
    "q": {
      "en": "Your setup?",
      "ru": "Ваша команда?",
      "de": "Dein Setup?",
      "it": "La tua struttura?",
      "es": "¿Tu estructura?",
      "zh": "你的团队规模？",
      "pt": "Sua estrutura?",
      "hi": "आपकी टीम?",
      "fr": "Votre structure ?"
    },
    "options": [
      {
        "label": {
          "en": "Solo or tiny team",
          "ru": "Один или крошечная команда",
          "de": "Allein oder winziges Team",
          "it": "Da solo o team minimo",
          "es": "Solo o equipo diminuto",
          "zh": "个人或很小的团队",
          "pt": "Sozinho ou equipe minúscula",
          "hi": "अकेले या बहुत छोटी टीम",
          "fr": "Seul ou toute petite équipe"
        },
        "score": 2
      },
      {
        "label": {
          "en": "Small team",
          "ru": "Небольшая команда",
          "de": "Kleines Team",
          "it": "Piccolo team",
          "es": "Equipo pequeño",
          "zh": "小团队",
          "pt": "Equipe pequena",
          "hi": "छोटी टीम",
          "fr": "Petite équipe"
        },
        "score": 1
      },
      {
        "label": {
          "en": "Larger team with ops people",
          "ru": "Крупнее, с операционным отделом",
          "de": "Größeres Team mit Ops-Leuten",
          "it": "Team più grande con persone operative",
          "es": "Equipo mayor con gente de operaciones",
          "zh": "较大团队，有运营人员",
          "pt": "Equipe maior com pessoal de operações",
          "hi": "बड़ी टीम, ऑपरेशन लोग हैं",
          "fr": "Équipe plus grande avec des opérationnels"
        },
        "score": 0
      }
    ]
  },
  {
    "q": {
      "en": "How do you feel about an AI agent doing real tasks, not just chatting?",
      "ru": "Как относитесь к тому, что AI-агент выполняет реальные задачи, а не просто общается?",
      "de": "Wie stehst du dazu, dass ein AI-Agent echte Aufgaben erledigt, nicht nur chattet?",
      "it": "Cosa pensi di un agente AI che svolge compiti reali, non solo chiacchiere?",
      "es": "¿Qué opinas de un agente de IA que hace tareas reales, no solo chatea?",
      "zh": "对于让 AI 智能体真正干活而不只是聊天，你怎么看？",
      "pt": "O que acha de um agente de IA que faz tarefas reais, não só conversa?",
      "hi": "एक AI एजेंट जो सिर्फ बात नहीं, असली काम करे, इस पर आप क्या सोचते हैं?",
      "fr": "Que pensez-vous d'un agent IA qui fait de vraies tâches, pas seulement du chat ?"
    },
    "options": [
      {
        "label": {
          "en": "Keen to try",
          "ru": "Хочу попробовать",
          "de": "Will es ausprobieren",
          "it": "Voglio provare",
          "es": "Con ganas de probar",
          "zh": "很想试",
          "pt": "Animado para testar",
          "hi": "आज़माने को उत्सुक",
          "fr": "Envie d'essayer"
        },
        "score": 1
      },
      {
        "label": {
          "en": "Curious but cautious",
          "ru": "Интересно, но осторожно",
          "de": "Neugierig, aber vorsichtig",
          "it": "Curioso ma cauto",
          "es": "Curioso pero cauto",
          "zh": "好奇但谨慎",
          "pt": "Curioso mas cauteloso",
          "hi": "जिज्ञासु पर सतर्क",
          "fr": "Curieux mais prudent"
        },
        "score": 1
      },
      {
        "label": {
          "en": "Skeptical",
          "ru": "Скептически",
          "de": "Skeptisch",
          "it": "Scettico",
          "es": "Escéptico",
          "zh": "持怀疑",
          "pt": "Cético",
          "hi": "संशयी",
          "fr": "Sceptique"
        },
        "score": 0
      }
    ]
  }
];

export const qzResults: { strong: QzResult; partial: QzResult; weak: QzResult } = {
  "strong": {
    "title": {
      "en": "Accio Work looks like a strong fit",
      "ru": "Accio Work вам явно подходит",
      "de": "Accio Work passt sehr gut",
      "it": "Accio Work sembra molto adatto",
      "es": "Accio Work encaja muy bien",
      "zh": "Accio Work 很适合你",
      "pt": "O Accio Work parece encaixar muito bem",
      "hi": "Accio Work आपके लिए अच्छा फिट लगता है",
      "fr": "Accio Work semble très adapté"
    },
    "body": {
      "en": "You sell across borders and source the way Accio Work is built for. The sourcing, negotiation and research it automates map directly onto your week. Start free and put it on one real task.",
      "ru": "Вы торгуете трансгранично и закупаетесь так, под что Accio Work и создан. Сорсинг, переговоры и ресёрч, которые он автоматизирует, ложатся прямо на вашу неделю. Начните бесплатно и дайте ему одну реальную задачу.",
      "de": "Du verkaufst grenzüberschreitend und beschaffst so, wofür Accio Work gebaut ist. Sourcing, Verhandlung und Recherche, die er automatisiert, passen direkt auf deine Woche. Starte kostenlos an einer echten Aufgabe.",
      "it": "Vendi oltre confine e ti rifornisci come Accio Work è pensato. Sourcing, trattativa e ricerca che automatizza si adattano alla tua settimana. Inizia gratis su un compito reale.",
      "es": "Vendes a través de fronteras y te abasteces como Accio Work fue diseñado. El sourcing, la negociación y la investigación que automatiza calzan con tu semana. Empieza gratis en una tarea real.",
      "zh": "你做跨境，采购方式正是 Accio Work 所擅长的。它自动化的寻源、谈判和调研，正好贴合你的一周。免费开始，先跑一个真实任务。",
      "pt": "Você vende além-fronteiras e compra do jeito para o qual o Accio Work foi feito. O sourcing, a negociação e a pesquisa que ele automatiza encaixam na sua semana. Comece grátis em uma tarefa real.",
      "hi": "आप सीमापार बेचते हैं और वैसे ही सोर्स करते हैं जिसके लिए Accio Work बना है। यह जो सोर्सिंग, बातचीत और रिसर्च ऑटोमेट करता है, वह सीधे आपके हफ्ते पर बैठता है। मुफ्त शुरू करें और एक असली काम दें।",
      "fr": "Vous vendez à l'international et sourcez comme Accio Work est conçu. Le sourcing, la négociation et la recherche qu'il automatise collent à votre semaine. Commencez gratuitement sur une vraie tâche."
    },
    "cta": true
  },
  "partial": {
    "title": {
      "en": "It could help with parts of your work",
      "ru": "Он может помочь с частью вашей работы",
      "de": "Er könnte bei Teilen deiner Arbeit helfen",
      "it": "Potrebbe aiutare con parti del tuo lavoro",
      "es": "Podría ayudar con partes de tu trabajo",
      "zh": "它能帮上你工作的一部分",
      "pt": "Pode ajudar em partes do seu trabalho",
      "hi": "यह आपके काम के कुछ हिस्सों में मदद कर सकता है",
      "fr": "Il pourrait aider sur une partie de votre travail"
    },
    "body": {
      "en": "Some of what you do lines up with Accio Work, some does not. Its strength is cross border sourcing and the Alibaba ecosystem, so the value depends on how much of that you do. A free trial on one task will tell you fast.",
      "ru": "Часть того, чем вы занимаетесь, совпадает с Accio Work, часть нет. Его сила это трансграничный сорсинг и экосистема Alibaba, так что польза зависит от того, сколько у вас такого. Бесплатный тест на одной задаче быстро покажет.",
      "de": "Ein Teil deiner Arbeit passt zu Accio Work, ein Teil nicht. Seine Stärke ist grenzüberschreitendes Sourcing und das Alibaba-Ökosystem, der Nutzen hängt also davon ab, wie viel davon du machst. Ein Gratistest an einer Aufgabe zeigt es schnell.",
      "it": "Una parte di ciò che fai è in linea con Accio Work, una parte no. La sua forza è il sourcing transfrontaliero e l'ecosistema Alibaba, quindi il valore dipende da quanto ne fai. Una prova gratuita su un compito te lo dirà in fretta.",
      "es": "Parte de lo que haces encaja con Accio Work, parte no. Su fuerza es el sourcing transfronterizo y el ecosistema Alibaba, así que el valor depende de cuánto de eso hagas. Una prueba gratis en una tarea te lo dirá rápido.",
      "zh": "你做的事一部分契合 Accio Work，一部分不契合。它的强项是跨境寻源和阿里生态，所以价值取决于你这类工作有多少。用一个任务免费试一下，很快就知道。",
      "pt": "Parte do que você faz combina com o Accio Work, parte não. A força dele é o sourcing transfronteiriço e o ecossistema Alibaba, então o valor depende de quanto disso você faz. Um teste grátis em uma tarefa mostra rápido.",
      "hi": "आप जो करते हैं उसका कुछ हिस्सा Accio Work से मेल खाता है, कुछ नहीं। इसकी ताकत सीमापार सोर्सिंग और Alibaba इकोसिस्टम है, तो फायदा इस पर निर्भर है कि आप उसमें कितना करते हैं। एक काम पर मुफ्त ट्रायल जल्दी बता देगा।",
      "fr": "Une partie de ce que vous faites colle à Accio Work, une autre non. Sa force est le sourcing transfrontalier et l'écosystème Alibaba, donc la valeur dépend de la part que cela représente. Un essai gratuit sur une tâche vous le dira vite."
    },
    "cta": true
  },
  "weak": {
    "title": {
      "en": "Accio Work is probably not your best tool",
      "ru": "Accio Work вам, скорее всего, не лучший вариант",
      "de": "Accio Work ist wohl nicht dein bestes Werkzeug",
      "it": "Accio Work probabilmente non è lo strumento migliore per te",
      "es": "Accio Work probablemente no es tu mejor herramienta",
      "zh": "Accio Work 可能不是最适合你的工具",
      "pt": "O Accio Work provavelmente não é a sua melhor ferramenta",
      "hi": "Accio Work शायद आपके लिए सबसे अच्छा टूल नहीं है",
      "fr": "Accio Work n'est sans doute pas votre meilleur outil"
    },
    "body": {
      "en": "Accio Work shines for cross border sellers tied to the Alibaba ecosystem. From your answers, that is not really your setup, so a general purpose agent or a tool built for your channel would likely serve you better. We would rather tell you straight than oversell.",
      "ru": "Accio Work раскрывается у трансграничных продавцов внутри экосистемы Alibaba. По вашим ответам это не совсем ваш случай, поэтому универсальный агент или инструмент под ваш канал подойдут лучше. Лучше сказать честно, чем навязывать.",
      "de": "Accio Work glänzt bei grenzüberschreitenden Verkäufern im Alibaba-Ökosystem. Nach deinen Antworten ist das nicht wirklich dein Setup, daher würde dir ein Allzweck-Agent oder ein Tool für deinen Kanal wohl besser dienen. Lieber ehrlich als überverkauft.",
      "it": "Accio Work brilla con i venditori transfrontalieri legati all'ecosistema Alibaba. Dalle tue risposte non è proprio il tuo caso, quindi un agente generico o uno strumento per il tuo canale ti servirebbe meglio. Meglio dirtelo chiaro che vendertelo a forza.",
      "es": "Accio Work brilla con vendedores transfronterizos ligados al ecosistema Alibaba. Por tus respuestas ese no es tu caso, así que un agente general o una herramienta para tu canal te servirían mejor. Preferimos decírtelo claro que sobrevender.",
      "zh": "Accio Work 最适合绑定阿里生态的跨境卖家。从你的回答看，这并不太是你的情况，所以通用型智能体或专为你渠道打造的工具可能更合适。我们宁可直说，也不夸大。",
      "pt": "O Accio Work brilha com vendedores transfronteiriços ligados ao ecossistema Alibaba. Pelas suas respostas, esse não é bem o seu caso, então um agente de uso geral ou uma ferramenta para o seu canal serviriam melhor. Preferimos falar reto a empurrar.",
      "hi": "Accio Work उन सीमापार विक्रेताओं के लिए चमकता है जो Alibaba इकोसिस्टम से जुड़े हैं। आपके जवाबों से यह ठीक आपका मामला नहीं लगता, इसलिए एक सामान्य एजेंट या आपके चैनल के लिए बना टूल शायद बेहतर रहेगा। हम बेचने के बजाय सीधा कहना पसंद करते हैं।",
      "fr": "Accio Work brille pour les vendeurs transfrontaliers liés à l'écosystème Alibaba. D'après vos réponses, ce n'est pas vraiment votre cas, donc un agent généraliste ou un outil dédié à votre canal vous conviendrait mieux. On préfère vous le dire franchement que trop vendre."
    },
    "cta": false
  }
};
