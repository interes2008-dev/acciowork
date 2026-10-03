export type PromoVideoDef = {
  wide: { src: string; poster: string; duration: number };
  tall: { src: string; poster: string; duration: number };
  title: string;
  caption: string;
  uploadDate: string;
};

const RU_AD: PromoVideoDef = {
  wide: { src: "/video/accio-ad-ru-wide.mp4", poster: "/video/accio-ad-ru-wide.jpg", duration: 60 },
  tall: { src: "/video/accio-ad-ru-tall.mp4", poster: "/video/accio-ad-ru-tall.jpg", duration: 30 },
  title: "63 вкладки против одной фразы: как Accio Work ищет поставщиков",
  caption: "Как это выглядит на деле: одна фраза, и задачу берёт команда агентов.",
  uploadDate: "2026-10-03",
};

/** Videos shown inside pillar articles, keyed by `${lang}:${slug}`. */
export const PILLAR_VIDEOS: Record<string, PromoVideoDef> = {
  "ru:chatgpt-vs-accio-sourcing-agents": RU_AD,
};

export const pillarVideo = (lang: string, slug: string) => PILLAR_VIDEOS[`${lang}:${slug}`];
