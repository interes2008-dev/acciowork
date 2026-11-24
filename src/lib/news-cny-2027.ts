import en from "./news-cny-2027/en.json";
import ru from "./news-cny-2027/ru.json";
import de from "./news-cny-2027/de.json";
import it from "./news-cny-2027/it.json";
import es from "./news-cny-2027/es.json";
import zh from "./news-cny-2027/zh.json";
import pt from "./news-cny-2027/pt.json";
import hi from "./news-cny-2027/hi.json";
import fr from "./news-cny-2027/fr.json";
import ar from "./news-cny-2027/ar.json";
import { newsHead } from "./news-head";

export type CnyNews = typeof en;

export const CNY_SLUG = "chinese-new-year-2027-order-deadlines";
export const CNY_PATH = `/blog/${CNY_SLUG}`;
export const CNY_PUBLISHED = "2026-11-24";

const DATA: Record<string, CnyNews> = { en, ru, de, it, es, zh, pt, hi, fr, ar };

export const cnyNews = (lang: string): CnyNews => DATA[lang] ?? en;

export const CNY_SOURCES = [
  "https://camchinabridge.co.uk/guides/chinese-new-year-2027-factory-closure-dates/",
  "https://www.kehuitrading.com/news/2027-chinese-new-year-production-schedule-pre-holiday-order-and-shipment-cut-off-notice/",
  "https://www.ifunsmart.com/posts/chinese-new-year-2027-order-deadline",
];

export const cnyHead = (lang: string) => newsHead(lang, CNY_PATH, CNY_PUBLISHED, cnyNews(lang));
