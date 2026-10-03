export type PromoVideoLabels = { play: string; pause: string; soundOn: string; soundOff: string };

export type PromoVideoDef = {
  wide: { src: string; poster: string; duration: number };
  tall: { src: string; poster: string; duration: number };
  title: string;
  caption: string;
  uploadDate: string;
  labels: PromoVideoLabels;
};

type Copy = { title: string; caption: string; labels: PromoVideoLabels };

const COPY: Record<string, Copy> = {
  ru: {
    title: "63 вкладки против одной фразы: как Accio Work ищет поставщиков",
    caption: "Как это выглядит на деле: одна фраза, и задачу берёт команда агентов.",
    labels: { play: "Смотреть", pause: "Пауза", soundOn: "Включить звук", soundOff: "Выключить звук" },
  },
  en: {
    title: "63 tabs vs one sentence: how Accio Work finds suppliers",
    caption: "What it looks like in practice: one sentence, and a team of agents takes the task.",
    labels: { play: "Play", pause: "Pause", soundOn: "Turn sound on", soundOff: "Turn sound off" },
  },
  de: {
    title: "63 Tabs gegen einen Satz: So findet Accio Work Lieferanten",
    caption: "So sieht es in der Praxis aus: ein Satz, und ein Team aus Agenten übernimmt die Aufgabe.",
    labels: { play: "Abspielen", pause: "Pause", soundOn: "Ton an", soundOff: "Ton aus" },
  },
  it: {
    title: "63 schede contro una frase: come Accio Work trova i fornitori",
    caption: "Ecco come funziona davvero: una frase, e un team di agenti prende in mano il lavoro.",
    labels: { play: "Riproduci", pause: "Pausa", soundOn: "Attiva audio", soundOff: "Disattiva audio" },
  },
  es: {
    title: "63 pestañas contra una frase: así encuentra proveedores Accio Work",
    caption: "Así se ve en la práctica: una frase, y un equipo de agentes se encarga de la tarea.",
    labels: { play: "Reproducir", pause: "Pausa", soundOn: "Activar sonido", soundOff: "Silenciar" },
  },
  pt: {
    title: "63 abas contra uma frase: como o Accio Work encontra fornecedores",
    caption: "Na prática é assim: uma frase, e uma equipe de agentes assume a tarefa.",
    labels: { play: "Reproduzir", pause: "Pausar", soundOn: "Ativar som", soundOff: "Desativar som" },
  },
  fr: {
    title: "63 onglets contre une phrase : comment Accio Work trouve des fournisseurs",
    caption: "Voilà ce que ça donne : une phrase, et une équipe d'agents prend la tâche en main.",
    labels: { play: "Lire", pause: "Pause", soundOn: "Activer le son", soundOff: "Couper le son" },
  },
  zh: {
    title: "63个标签页对一句话：Accio Work 如何找供应商",
    caption: "实际效果：一句话，智能体团队就接手整个任务。",
    labels: { play: "播放", pause: "暂停", soundOn: "打开声音", soundOff: "关闭声音" },
  },
  hi: {
    title: "63 टैब बनाम एक वाक्य: Accio Work सप्लायर कैसे खोजता है",
    caption: "असल में ऐसा दिखता है: एक वाक्य, और एजेंटों की टीम काम संभाल लेती है।",
    labels: { play: "चलाएँ", pause: "रोकें", soundOn: "आवाज़ चालू करें", soundOff: "आवाज़ बंद करें" },
  },
  ar: {
    title: "63 تبويبًا مقابل جملة واحدة: كيف يجد Accio Work المورّدين",
    caption: "هكذا يبدو الأمر عمليًا: جملة واحدة، ويتولّى فريق من الوكلاء المهمة.",
    labels: { play: "تشغيل", pause: "إيقاف مؤقت", soundOn: "تشغيل الصوت", soundOff: "كتم الصوت" },
  },
};

const adFor = (lang: string): PromoVideoDef => ({
  wide: { src: `/video/accio-ad-${lang}-wide.mp4`, poster: `/video/accio-ad-${lang}-wide.jpg`, duration: 60 },
  tall: { src: `/video/accio-ad-${lang}-tall.mp4`, poster: `/video/accio-ad-${lang}-tall.jpg`, duration: 30 },
  uploadDate: "2026-10-03",
  ...COPY[lang],
});

/** Videos shown inside pillar articles, keyed by `${lang}:${slug}`. */
export const PILLAR_VIDEOS: Record<string, PromoVideoDef> = Object.fromEntries(
  Object.keys(COPY).map((lang) => [`${lang}:chatgpt-vs-accio-sourcing-agents`, adFor(lang)]),
);

export const pillarVideo = (lang: string, slug: string) => PILLAR_VIDEOS[`${lang}:${slug}`];
