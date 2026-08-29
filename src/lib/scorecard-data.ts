// AUTO GENERATED supplier scorecard content. Edit gen_scorecard_data.py to change.
export type ScLang = "en" | "ru" | "de" | "it" | "es" | "zh" | "pt" | "hi" | "fr";
type L = Record<ScLang, string>;
export interface ScOption { s: number; l: L; }
export interface ScCriterion { q: L; opts: ScOption[]; }
export interface ScVerdict { min: number; title: L; body: L; tips: Record<ScLang, string[]>; }
export interface ScChrome { kicker: string; h1: string; intro: string; scoreLabel: string; recommendations: string; share: string; copied: string; resultKicker: string; cta: string; ctaNote: string; accioLabel: string; ctaLine: string; note: string; metaTitle: string; metaDesc: string; }
export const scChrome: Record<ScLang, ScChrome> = {
  "en": {
    "kicker": "Free interactive tool",
    "h1": "Supplier reliability scorecard",
    "intro": "Rate a supplier across six factors that predict trouble, and get an honest reliability score with what to check before you wire money. You enter what you know, this does the math, no supplier data is invented.",
    "scoreLabel": "Reliability score",
    "recommendations": "What to do next",
    "share": "Share result",
    "copied": "Link copied",
    "resultKicker": "Supplier reliability score",
    "cta": "Vet suppliers with Accio Work",
    "ctaNote": "Free plan, no card required",
    "accioLabel": "Let AI cross-check for you",
    "ctaLine": "Accio Work checks suppliers and products against live Alibaba data and cross-verifies them, so you catch risks a checklist alone can miss.",
    "note": "This is a self-assessment aid, not a guarantee. Always order a sample and use secure payment before a large order.",
    "metaTitle": "Supplier reliability scorecard (free tool) | Accio Work",
    "metaDesc": "Free interactive scorecard to rate an Alibaba supplier across six risk factors and get a reliability score with next steps. Nine languages."
  },
  "ru": {
    "kicker": "Бесплатный интерактивный инструмент",
    "h1": "Скоринг надёжности поставщика",
    "intro": "Оцените поставщика по шести факторам, которые предсказывают проблемы, и получите честный балл надёжности плюс что проверить до перевода денег. Вы вводите то, что знаете, расчёт делает инструмент, данные о поставщиках не выдумываются.",
    "scoreLabel": "Балл надёжности",
    "recommendations": "Что делать дальше",
    "share": "Поделиться результатом",
    "copied": "Ссылка скопирована",
    "resultKicker": "Балл надёжности поставщика",
    "cta": "Проверять поставщиков в Accio Work",
    "ctaNote": "Бесплатный план, карта не нужна",
    "accioLabel": "Пусть AI перепроверит за вас",
    "ctaLine": "Accio Work сверяет поставщиков и товары с живыми данными Alibaba и перепроверяет их, так вы ловите риски, которые чек-лист один пропустит.",
    "note": "Это помощник для самооценки, не гарантия. Всегда заказывайте образец и используйте безопасную оплату до крупного заказа.",
    "metaTitle": "Скоринг надёжности поставщика (бесплатно) | Accio Work",
    "metaDesc": "Бесплатный интерактивный скоринг: оцените поставщика Alibaba по шести факторам риска и получите балл надёжности с шагами. 9 языков."
  },
  "de": {
    "kicker": "Kostenloses interaktives Tool",
    "h1": "Scorecard für Lieferantenzuverlässigkeit",
    "intro": "Bewerte einen Lieferanten anhand von sechs Faktoren, die Ärger vorhersagen, und erhalte einen ehrlichen Zuverlässigkeitswert plus was du vor der Überweisung prüfen solltest. Du gibst ein, was du weißt, die Rechnung macht das Tool, keine Lieferantendaten werden erfunden.",
    "scoreLabel": "Zuverlässigkeitswert",
    "recommendations": "Nächste Schritte",
    "share": "Ergebnis teilen",
    "copied": "Link kopiert",
    "resultKicker": "Zuverlässigkeitswert des Lieferanten",
    "cta": "Lieferanten mit Accio Work prüfen",
    "ctaNote": "Kostenloser Plan, keine Karte nötig",
    "accioLabel": "KI gegenprüfen lassen",
    "ctaLine": "Accio Work gleicht Lieferanten und Produkte mit Live-Alibaba-Daten ab und verifiziert sie, so erkennst du Risiken, die eine Checkliste allein übersieht.",
    "note": "Dies ist eine Selbsteinschätzungshilfe, keine Garantie. Bestelle immer ein Muster und nutze sichere Zahlung vor einer großen Bestellung.",
    "metaTitle": "Scorecard für Lieferantenzuverlässigkeit | Accio Work",
    "metaDesc": "Kostenlose interaktive Scorecard: bewerte einen Alibaba-Lieferanten anhand sechs Risikofaktoren und erhalte einen Zuverlässigkeitswert mit Schritten."
  },
  "it": {
    "kicker": "Strumento interattivo gratuito",
    "h1": "Scorecard di affidabilità del fornitore",
    "intro": "Valuta un fornitore su sei fattori che predicono i problemi e ottieni un punteggio di affidabilità onesto con cosa controllare prima di inviare denaro. Inserisci ciò che sai, il calcolo lo fa lo strumento, nessun dato del fornitore viene inventato.",
    "scoreLabel": "Punteggio di affidabilità",
    "recommendations": "Cosa fare dopo",
    "share": "Condividi risultato",
    "copied": "Link copiato",
    "resultKicker": "Punteggio di affidabilità del fornitore",
    "cta": "Valuta i fornitori con Accio Work",
    "ctaNote": "Piano gratuito, nessuna carta",
    "accioLabel": "Fai verificare all'AI",
    "ctaLine": "Accio Work confronta fornitori e prodotti con i dati Alibaba in tempo reale e li verifica, così cogli rischi che una checklist da sola può perdere.",
    "note": "È un aiuto all'autovalutazione, non una garanzia. Ordina sempre un campione e usa un pagamento sicuro prima di un ordine grande.",
    "metaTitle": "Scorecard di affidabilità del fornitore | Accio Work",
    "metaDesc": "Scorecard interattiva gratuita: valuta un fornitore Alibaba su sei fattori di rischio e ottieni un punteggio di affidabilità con i passi successivi."
  },
  "es": {
    "kicker": "Herramienta interactiva gratis",
    "h1": "Scorecard de fiabilidad del proveedor",
    "intro": "Evalúa a un proveedor en seis factores que predicen problemas y obtén una puntuación de fiabilidad honesta con qué revisar antes de enviar dinero. Tú ingresas lo que sabes, la herramienta calcula, no se inventan datos del proveedor.",
    "scoreLabel": "Puntuación de fiabilidad",
    "recommendations": "Qué hacer ahora",
    "share": "Compartir resultado",
    "copied": "Enlace copiado",
    "resultKicker": "Puntuación de fiabilidad del proveedor",
    "cta": "Evalúa proveedores con Accio Work",
    "ctaNote": "Plan gratuito, sin tarjeta",
    "accioLabel": "Deja que la IA verifique",
    "ctaLine": "Accio Work coteja proveedores y productos con datos de Alibaba en vivo y los verifica, así detectas riesgos que una lista sola puede pasar por alto.",
    "note": "Es una ayuda de autoevaluación, no una garantía. Pide siempre una muestra y usa pago seguro antes de un pedido grande.",
    "metaTitle": "Scorecard de fiabilidad del proveedor (gratis) | Accio Work",
    "metaDesc": "Scorecard interactiva gratis: evalúa a un proveedor de Alibaba en seis factores de riesgo y obtén una puntuación de fiabilidad con pasos."
  },
  "zh": {
    "kicker": "免费互动工具",
    "h1": "供应商可靠度评分卡",
    "intro": "从六个能预示麻烦的维度给供应商打分，得到一个诚实的可靠度分值，以及打款前该核查什么。你填你知道的，计算由工具完成，不虚构任何供应商数据。",
    "scoreLabel": "可靠度分值",
    "recommendations": "下一步怎么做",
    "share": "分享结果",
    "copied": "链接已复制",
    "resultKicker": "供应商可靠度分值",
    "cta": "用 Accio Work 核验供应商",
    "ctaNote": "免费方案，无需绑卡",
    "accioLabel": "让 AI 替你交叉核验",
    "ctaLine": "Accio Work 依据阿里实时数据核对供应商与产品并交叉验证，帮你发现清单单独可能漏掉的风险。",
    "note": "这是自评辅助，不是担保。大额下单前务必先取样并使用安全支付。",
    "metaTitle": "供应商可靠度评分卡（免费工具）| Accio Work",
    "metaDesc": "免费互动评分卡：从六个风险维度评估阿里供应商，得到可靠度分值与后续步骤。九种语言。"
  },
  "pt": {
    "kicker": "Ferramenta interativa grátis",
    "h1": "Scorecard de confiabilidade do fornecedor",
    "intro": "Avalie um fornecedor em seis fatores que preveem problemas e obtenha uma pontuação de confiabilidade honesta com o que checar antes de enviar dinheiro. Você insere o que sabe, a ferramenta calcula, nenhum dado do fornecedor é inventado.",
    "scoreLabel": "Pontuação de confiabilidade",
    "recommendations": "O que fazer agora",
    "share": "Compartilhar resultado",
    "copied": "Link copiado",
    "resultKicker": "Pontuação de confiabilidade do fornecedor",
    "cta": "Avalie fornecedores com Accio Work",
    "ctaNote": "Plano gratuito, sem cartão",
    "accioLabel": "Deixe a IA verificar",
    "ctaLine": "O Accio Work compara fornecedores e produtos com dados ao vivo da Alibaba e os verifica, assim você pega riscos que uma checklist sozinha pode perder.",
    "note": "É um apoio de autoavaliação, não uma garantia. Peça sempre uma amostra e use pagamento seguro antes de um pedido grande.",
    "metaTitle": "Scorecard de confiabilidade do fornecedor | Accio Work",
    "metaDesc": "Scorecard interativa grátis: avalie um fornecedor da Alibaba em seis fatores de risco e obtenha uma pontuação de confiabilidade com passos."
  },
  "hi": {
    "kicker": "मुफ्त इंटरैक्टिव टूल",
    "h1": "सप्लायर विश्वसनीयता स्कोरकार्ड",
    "intro": "छह कारकों पर सप्लायर को आंकें जो दिक्कत की भविष्यवाणी करते हैं, और पैसे भेजने से पहले क्या जाँचना है के साथ एक ईमानदार विश्वसनीयता स्कोर पाएं। आप जो जानते हैं वह भरते हैं, गणना टूल करता है, कोई सप्लायर डेटा नहीं गढ़ा जाता।",
    "scoreLabel": "विश्वसनीयता स्कोर",
    "recommendations": "आगे क्या करें",
    "share": "परिणाम शेयर करें",
    "copied": "लिंक कॉपी हो गया",
    "resultKicker": "सप्लायर विश्वसनीयता स्कोर",
    "cta": "Accio Work से सप्लायर परखें",
    "ctaNote": "मुफ्त प्लान, कार्ड की जरूरत नहीं",
    "accioLabel": "AI से क्रॉस-चेक कराएं",
    "ctaLine": "Accio Work सप्लायर और उत्पादों को अलीबाबा के लाइव डेटा से मिलाकर सत्यापित करता है, ताकि आप वे जोखिम पकड़ें जो अकेली चेकलिस्ट छोड़ सकती है।",
    "note": "यह स्व-आकलन सहायक है, गारंटी नहीं। बड़े ऑर्डर से पहले हमेशा सैंपल मंगाएं और सुरक्षित भुगतान करें।",
    "metaTitle": "सप्लायर विश्वसनीयता स्कोरकार्ड (मुफ्त टूल) | Accio Work",
    "metaDesc": "मुफ्त इंटरैक्टिव स्कोरकार्ड: अलीबाबा सप्लायर को छह जोखिम कारकों पर आंकें और अगले कदमों के साथ विश्वसनीयता स्कोर पाएं। नौ भाषाएं।"
  },
  "fr": {
    "kicker": "Outil interactif gratuit",
    "h1": "Scorecard de fiabilité du fournisseur",
    "intro": "Évaluez un fournisseur sur six facteurs qui annoncent des ennuis et obtenez un score de fiabilité honnête avec quoi vérifier avant de virer de l'argent. Vous saisissez ce que vous savez, l'outil calcule, aucune donnée fournisseur n'est inventée.",
    "scoreLabel": "Score de fiabilité",
    "recommendations": "Que faire ensuite",
    "share": "Partager le résultat",
    "copied": "Lien copié",
    "resultKicker": "Score de fiabilité du fournisseur",
    "cta": "Évaluez les fournisseurs avec Accio Work",
    "ctaNote": "Offre gratuite, sans carte",
    "accioLabel": "Laissez l'IA recouper",
    "ctaLine": "Accio Work compare fournisseurs et produits aux données Alibaba en direct et les vérifie, vous repérez ainsi des risques qu'une checklist seule peut manquer.",
    "note": "C'est une aide à l'auto-évaluation, pas une garantie. Commandez toujours un échantillon et utilisez un paiement sécurisé avant une grosse commande.",
    "metaTitle": "Scorecard de fiabilité du fournisseur (gratuit) | Accio Work",
    "metaDesc": "Scorecard interactive gratuite : évaluez un fournisseur Alibaba sur six facteurs de risque et obtenez un score de fiabilité avec des étapes."
  }
};

export const scCriteria: ScCriterion[] = [
  {
    "q": {
      "en": "Verification and Trade Assurance",
      "ru": "Верификация и Trade Assurance",
      "de": "Verifizierung und Trade Assurance",
      "it": "Verifica e Trade Assurance",
      "es": "Verificación y Trade Assurance",
      "zh": "认证与 Trade Assurance",
      "pt": "Verificação e Trade Assurance",
      "hi": "सत्यापन और Trade Assurance",
      "fr": "Vérification et Trade Assurance"
    },
    "opts": [
      {
        "s": 2,
        "l": {
          "en": "Verified plus Trade Assurance",
          "ru": "Верифицирован и Trade Assurance",
          "de": "Verifiziert plus Trade Assurance",
          "it": "Verificato e Trade Assurance",
          "es": "Verificado y Trade Assurance",
          "zh": "已认证且有 Trade Assurance",
          "pt": "Verificado e Trade Assurance",
          "hi": "सत्यापित और Trade Assurance",
          "fr": "Vérifié et Trade Assurance"
        }
      },
      {
        "s": 1,
        "l": {
          "en": "Verified only",
          "ru": "Только верифицирован",
          "de": "Nur verifiziert",
          "it": "Solo verificato",
          "es": "Solo verificado",
          "zh": "仅已认证",
          "pt": "Apenas verificado",
          "hi": "केवल सत्यापित",
          "fr": "Vérifié seulement"
        }
      },
      {
        "s": 0,
        "l": {
          "en": "Neither",
          "ru": "Ни то ни другое",
          "de": "Weder noch",
          "it": "Nessuno dei due",
          "es": "Ninguno",
          "zh": "两者都无",
          "pt": "Nenhum",
          "hi": "कोई नहीं",
          "fr": "Ni l'un ni l'autre"
        }
      }
    ]
  },
  {
    "q": {
      "en": "Years in business",
      "ru": "Лет на рынке",
      "de": "Jahre im Geschäft",
      "it": "Anni di attività",
      "es": "Años en el negocio",
      "zh": "经营年限",
      "pt": "Anos de atuação",
      "hi": "व्यवसाय में वर्ष",
      "fr": "Années d'activité"
    },
    "opts": [
      {
        "s": 2,
        "l": {
          "en": "More than 5 years",
          "ru": "Более 5 лет",
          "de": "Mehr als 5 Jahre",
          "it": "Più di 5 anni",
          "es": "Más de 5 años",
          "zh": "超过 5 年",
          "pt": "Mais de 5 anos",
          "hi": "5 साल से ज्यादा",
          "fr": "Plus de 5 ans"
        }
      },
      {
        "s": 1,
        "l": {
          "en": "2 to 5 years",
          "ru": "От 2 до 5 лет",
          "de": "2 bis 5 Jahre",
          "it": "Da 2 a 5 anni",
          "es": "De 2 a 5 años",
          "zh": "2 到 5 年",
          "pt": "2 a 5 anos",
          "hi": "2 से 5 साल",
          "fr": "2 à 5 ans"
        }
      },
      {
        "s": 0,
        "l": {
          "en": "Under 2 years",
          "ru": "Менее 2 лет",
          "de": "Unter 2 Jahren",
          "it": "Meno di 2 anni",
          "es": "Menos de 2 años",
          "zh": "不足 2 年",
          "pt": "Menos de 2 anos",
          "hi": "2 साल से कम",
          "fr": "Moins de 2 ans"
        }
      }
    ]
  },
  {
    "q": {
      "en": "Sample outcome",
      "ru": "Результат по образцу",
      "de": "Musterergebnis",
      "it": "Esito del campione",
      "es": "Resultado de la muestra",
      "zh": "样品结果",
      "pt": "Resultado da amostra",
      "hi": "सैंपल का नतीजा",
      "fr": "Résultat de l'échantillon"
    },
    "opts": [
      {
        "s": 2,
        "l": {
          "en": "Ordered, quality was good",
          "ru": "Заказал, качество хорошее",
          "de": "Bestellt, Qualität war gut",
          "it": "Ordinato, qualità buona",
          "es": "Pedida, calidad buena",
          "zh": "已下样，质量良好",
          "pt": "Pedida, qualidade boa",
          "hi": "मंगाया, गुणवत्ता अच्छी",
          "fr": "Commandé, bonne qualité"
        }
      },
      {
        "s": 1,
        "l": {
          "en": "Ordered, mixed result",
          "ru": "Заказал, результат смешанный",
          "de": "Bestellt, gemischtes Ergebnis",
          "it": "Ordinato, esito misto",
          "es": "Pedida, resultado mixto",
          "zh": "已下样，结果一般",
          "pt": "Pedida, resultado misto",
          "hi": "मंगाया, नतीजा मिला-जुला",
          "fr": "Commandé, résultat mitigé"
        }
      },
      {
        "s": 0,
        "l": {
          "en": "No sample yet",
          "ru": "Образца ещё нет",
          "de": "Noch kein Muster",
          "it": "Ancora nessun campione",
          "es": "Sin muestra aún",
          "zh": "尚未取样",
          "pt": "Sem amostra ainda",
          "hi": "अभी सैंपल नहीं",
          "fr": "Pas encore d'échantillon"
        }
      }
    ]
  },
  {
    "q": {
      "en": "Certifications for your market",
      "ru": "Сертификаты для вашего рынка",
      "de": "Zertifikate für deinen Markt",
      "it": "Certificazioni per il tuo mercato",
      "es": "Certificaciones para tu mercado",
      "zh": "面向你市场的认证",
      "pt": "Certificações para o seu mercado",
      "hi": "आपके बाज़ार के प्रमाणपत्र",
      "fr": "Certifications pour votre marché"
    },
    "opts": [
      {
        "s": 2,
        "l": {
          "en": "Provided and relevant",
          "ru": "Предоставлены и релевантны",
          "de": "Vorhanden und relevant",
          "it": "Forniti e pertinenti",
          "es": "Aportadas y relevantes",
          "zh": "已提供且相关",
          "pt": "Fornecidas e relevantes",
          "hi": "दिए और प्रासंगिक",
          "fr": "Fournies et pertinentes"
        }
      },
      {
        "s": 1,
        "l": {
          "en": "Some or unclear",
          "ru": "Частично или неясно",
          "de": "Teilweise oder unklar",
          "it": "Alcune o poco chiare",
          "es": "Algunas o poco claras",
          "zh": "部分或不明确",
          "pt": "Algumas ou pouco claras",
          "hi": "कुछ या अस्पष्ट",
          "fr": "Certaines ou floues"
        }
      },
      {
        "s": 0,
        "l": {
          "en": "None provided",
          "ru": "Не предоставлены",
          "de": "Keine vorhanden",
          "it": "Nessuna fornita",
          "es": "Ninguna aportada",
          "zh": "未提供",
          "pt": "Nenhuma fornecida",
          "hi": "कोई नहीं दिए",
          "fr": "Aucune fournie"
        }
      }
    ]
  },
  {
    "q": {
      "en": "Communication speed and clarity",
      "ru": "Скорость и ясность общения",
      "de": "Kommunikation: Tempo und Klarheit",
      "it": "Comunicazione: velocità e chiarezza",
      "es": "Comunicación: rapidez y claridad",
      "zh": "沟通的速度与清晰度",
      "pt": "Comunicação: rapidez e clareza",
      "hi": "संवाद की गति और स्पष्टता",
      "fr": "Communication: rapidité et clarté"
    },
    "opts": [
      {
        "s": 2,
        "l": {
          "en": "Fast and detailed",
          "ru": "Быстро и подробно",
          "de": "Schnell und detailliert",
          "it": "Veloce e dettagliata",
          "es": "Rápida y detallada",
          "zh": "迅速且详尽",
          "pt": "Rápida e detalhada",
          "hi": "तेज़ और विस्तृत",
          "fr": "Rapide et détaillée"
        }
      },
      {
        "s": 1,
        "l": {
          "en": "Some friction",
          "ru": "Есть трения",
          "de": "Etwas holprig",
          "it": "Qualche attrito",
          "es": "Con algo de fricción",
          "zh": "略有摩擦",
          "pt": "Com algum atrito",
          "hi": "थोड़ी दिक्कत",
          "fr": "Quelques frictions"
        }
      },
      {
        "s": 0,
        "l": {
          "en": "Slow or vague",
          "ru": "Медленно или размыто",
          "de": "Langsam oder vage",
          "it": "Lenta o vaga",
          "es": "Lenta o vaga",
          "zh": "迟缓或含糊",
          "pt": "Lenta ou vaga",
          "hi": "धीमा या अस्पष्ट",
          "fr": "Lente ou vague"
        }
      }
    ]
  },
  {
    "q": {
      "en": "Payment terms",
      "ru": "Условия оплаты",
      "de": "Zahlungsbedingungen",
      "it": "Condizioni di pagamento",
      "es": "Condiciones de pago",
      "zh": "付款条件",
      "pt": "Condições de pagamento",
      "hi": "भुगतान शर्तें",
      "fr": "Conditions de paiement"
    },
    "opts": [
      {
        "s": 2,
        "l": {
          "en": "Secure (escrow or Trade Assurance)",
          "ru": "Безопасные (эскроу или Trade Assurance)",
          "de": "Sicher (Treuhand oder Trade Assurance)",
          "it": "Sicure (deposito o Trade Assurance)",
          "es": "Seguras (depósito o Trade Assurance)",
          "zh": "安全（担保或 Trade Assurance）",
          "pt": "Seguras (custódia ou Trade Assurance)",
          "hi": "सुरक्षित (एस्क्रो या Trade Assurance)",
          "fr": "Sécurisées (séquestre ou Trade Assurance)"
        }
      },
      {
        "s": 1,
        "l": {
          "en": "Partial deposit",
          "ru": "Частичный аванс",
          "de": "Teilanzahlung",
          "it": "Acconto parziale",
          "es": "Depósito parcial",
          "zh": "部分定金",
          "pt": "Depósito parcial",
          "hi": "आंशिक अग्रिम",
          "fr": "Acompte partiel"
        }
      },
      {
        "s": 0,
        "l": {
          "en": "Full upfront wire",
          "ru": "Полная предоплата переводом",
          "de": "Volle Vorkasse per Überweisung",
          "it": "Bonifico totale anticipato",
          "es": "Transferencia total por adelantado",
          "zh": "全额预付电汇",
          "pt": "Transferência total antecipada",
          "hi": "पूरा अग्रिम वायर",
          "fr": "Virement total d'avance"
        }
      }
    ]
  }
];

export const scVerdicts = {
  "strong": {
    "min": 9,
    "title": {
      "en": "Looks reliable",
      "ru": "Выглядит надёжно",
      "de": "Wirkt zuverlässig",
      "it": "Sembra affidabile",
      "es": "Parece fiable",
      "zh": "看起来可靠",
      "pt": "Parece confiável",
      "hi": "विश्वसनीय लगता है",
      "fr": "Semble fiable"
    },
    "body": {
      "en": "Strong signals across the board. Still verify the final order the same way you verified the sample.",
      "ru": "Сильные сигналы по всем пунктам. Всё равно проверяйте финальный заказ так же, как проверяли образец.",
      "de": "Starke Signale überall. Prüfe die finale Bestellung trotzdem wie das Muster.",
      "it": "Segnali forti su tutto. Verifica comunque l'ordine finale come hai verificato il campione.",
      "es": "Señales fuertes en todo. Aun así verifica el pedido final como verificaste la muestra.",
      "zh": "各项信号都不错。仍要像验样一样验收最终订单。",
      "pt": "Sinais fortes em tudo. Ainda assim verifique o pedido final como verificou a amostra.",
      "hi": "सभी में मजबूत संकेत। फिर भी अंतिम ऑर्डर को सैंपल की तरह जाँचें।",
      "fr": "Signaux forts partout. Vérifiez quand même la commande finale comme l'échantillon."
    },
    "tips": {
      "en": [
        "Lock terms in writing before production",
        "Use Trade Assurance or escrow anyway",
        "Inspect the batch before final payment"
      ],
      "ru": [
        "Зафиксируйте условия письменно до производства",
        "Всё равно используйте Trade Assurance или эскроу",
        "Проверьте партию до финальной оплаты"
      ],
      "de": [
        "Bedingungen vor der Produktion schriftlich fixieren",
        "Trotzdem Trade Assurance oder Treuhand nutzen",
        "Charge vor der Schlusszahlung prüfen"
      ],
      "it": [
        "Fissa le condizioni per iscritto prima della produzione",
        "Usa comunque Trade Assurance o deposito",
        "Ispeziona il lotto prima del saldo"
      ],
      "es": [
        "Fija las condiciones por escrito antes de producir",
        "Usa igualmente Trade Assurance o depósito",
        "Inspecciona el lote antes del pago final"
      ],
      "zh": [
        "生产前把条款写清楚",
        "仍使用 Trade Assurance 或担保",
        "尾款前验批"
      ],
      "pt": [
        "Fixe as condições por escrito antes da produção",
        "Use mesmo assim Trade Assurance ou custódia",
        "Inspecione o lote antes do pagamento final"
      ],
      "hi": [
        "उत्पादन से पहले शर्तें लिखित करें",
        "फिर भी Trade Assurance या एस्क्रो लें",
        "अंतिम भुगतान से पहले बैच जाँचें"
      ],
      "fr": [
        "Fixez les conditions par écrit avant production",
        "Utilisez quand même Trade Assurance ou séquestre",
        "Inspectez le lot avant le paiement final"
      ]
    }
  },
  "caution": {
    "min": 5,
    "title": {
      "en": "Proceed with caution",
      "ru": "Действуйте осторожно",
      "de": "Mit Vorsicht fortfahren",
      "it": "Procedi con cautela",
      "es": "Procede con cautela",
      "zh": "谨慎推进",
      "pt": "Prossiga com cautela",
      "hi": "सावधानी से बढ़ें",
      "fr": "Avancez avec prudence"
    },
    "body": {
      "en": "Some gaps that could bite you. Close them before you commit to volume.",
      "ru": "Есть пробелы, которые могут выйти боком. Закройте их до крупного объёма.",
      "de": "Einige Lücken, die dich treffen könnten. Schließe sie vor größeren Mengen.",
      "it": "Alcune lacune che potrebbero costarti. Colmale prima dei volumi.",
      "es": "Hay huecos que pueden costarte. Ciérralos antes del volumen.",
      "zh": "存在可能反噬的缺口。上量前先补齐。",
      "pt": "Algumas lacunas que podem custar. Feche-as antes do volume.",
      "hi": "कुछ कमियाँ जो भारी पड़ सकती हैं। बड़ी मात्रा से पहले भरें।",
      "fr": "Des lacunes qui peuvent vous coûter. Comblez-les avant le volume."
    },
    "tips": {
      "en": [
        "Order a paid sample first",
        "Ask for market-specific certifications",
        "Start with a small trial order"
      ],
      "ru": [
        "Сначала закажите платный образец",
        "Запросите сертификаты под ваш рынок",
        "Начните с небольшого пробного заказа"
      ],
      "de": [
        "Zuerst ein bezahltes Muster bestellen",
        "Marktspezifische Zertifikate anfragen",
        "Mit kleiner Testbestellung starten"
      ],
      "it": [
        "Ordina prima un campione a pagamento",
        "Chiedi certificazioni per il tuo mercato",
        "Inizia con un piccolo ordine di prova"
      ],
      "es": [
        "Pide primero una muestra pagada",
        "Solicita certificaciones para tu mercado",
        "Empieza con un pedido de prueba pequeño"
      ],
      "zh": [
        "先下一个付费样",
        "索取面向你市场的认证",
        "从小批试单开始"
      ],
      "pt": [
        "Peça primeiro uma amostra paga",
        "Solicite certificações para o seu mercado",
        "Comece com um pedido de teste pequeno"
      ],
      "hi": [
        "पहले भुगतान वाला सैंपल मंगाएं",
        "अपने बाज़ार के प्रमाणपत्र मांगें",
        "छोटे ट्रायल ऑर्डर से शुरू करें"
      ],
      "fr": [
        "Commandez d'abord un échantillon payant",
        "Demandez des certifications pour votre marché",
        "Commencez par une petite commande test"
      ]
    }
  },
  "risk": {
    "min": 0,
    "title": {
      "en": "High risk",
      "ru": "Высокий риск",
      "de": "Hohes Risiko",
      "it": "Rischio alto",
      "es": "Riesgo alto",
      "zh": "高风险",
      "pt": "Risco alto",
      "hi": "उच्च जोखिम",
      "fr": "Risque élevé"
    },
    "body": {
      "en": "Too many red flags to send money yet. Treat this as a lead to qualify, not a supplier to pay.",
      "ru": "Слишком много тревожных сигналов, чтобы переводить деньги. Считайте это лидом для проверки, а не поставщиком для оплаты.",
      "de": "Zu viele Warnzeichen, um jetzt Geld zu senden. Behandle das als zu qualifizierenden Lead, nicht als zu bezahlenden Lieferanten.",
      "it": "Troppi campanelli d'allarme per inviare denaro ora. Trattalo come un contatto da qualificare, non un fornitore da pagare.",
      "es": "Demasiadas señales de alarma para enviar dinero. Trátalo como un contacto a calificar, no un proveedor a pagar.",
      "zh": "危险信号太多，暂不宜打款。把它当作需甄别的线索，而非可付款的供应商。",
      "pt": "Bandeiras vermelhas demais para enviar dinheiro. Trate como um contato a qualificar, não um fornecedor a pagar.",
      "hi": "पैसे भेजने के लिए बहुत सारे खतरे के संकेत। इसे परखने योग्य लीड मानें, भुगतान योग्य सप्लायर नहीं।",
      "fr": "Trop de signaux d'alerte pour envoyer de l'argent. Traitez-le comme une piste à qualifier, pas un fournisseur à payer."
    },
    "tips": {
      "en": [
        "Never pay full amount upfront by wire",
        "Verify the company independently",
        "Compare with two or three other suppliers"
      ],
      "ru": [
        "Никогда не платите всю сумму переводом вперёд",
        "Проверьте компанию независимо",
        "Сравните с двумя-тремя другими поставщиками"
      ],
      "de": [
        "Nie den vollen Betrag per Vorkasse überweisen",
        "Firma unabhängig überprüfen",
        "Mit zwei bis drei anderen Lieferanten vergleichen"
      ],
      "it": [
        "Mai pagare tutto in anticipo con bonifico",
        "Verifica l'azienda in modo indipendente",
        "Confronta con altri due o tre fornitori"
      ],
      "es": [
        "Nunca pagues todo por adelantado por transferencia",
        "Verifica la empresa de forma independiente",
        "Compara con otros dos o tres proveedores"
      ],
      "zh": [
        "切勿电汇全额预付",
        "独立核实该公司",
        "与另外两三家供应商比较"
      ],
      "pt": [
        "Nunca pague tudo antecipado por transferência",
        "Verifique a empresa de forma independente",
        "Compare com outros dois ou três fornecedores"
      ],
      "hi": [
        "वायर से पूरा अग्रिम कभी न दें",
        "कंपनी को स्वतंत्र रूप से जाँचें",
        "दो-तीन अन्य सप्लायरों से तुलना करें"
      ],
      "fr": [
        "Ne payez jamais tout d'avance par virement",
        "Vérifiez l'entreprise de façon indépendante",
        "Comparez avec deux ou trois autres fournisseurs"
      ]
    }
  }
} as { strong: ScVerdict; caution: ScVerdict; risk: ScVerdict };

export const SC_MAX = scCriteria.length * 2;
