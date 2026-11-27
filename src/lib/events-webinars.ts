import en from "./events-webinars/en.json";
import ru from "./events-webinars/ru.json";
import de from "./events-webinars/de.json";
import it from "./events-webinars/it.json";
import es from "./events-webinars/es.json";
import zh from "./events-webinars/zh.json";
import pt from "./events-webinars/pt.json";
import hi from "./events-webinars/hi.json";
import fr from "./events-webinars/fr.json";
import ar from "./events-webinars/ar.json";
import { newsHead } from "./news-head";

export type WebinarsEvent = typeof en;
export type WebinarTopic = keyof WebinarsEvent["topics"];

export const WEBINARS_SLUG = "accio-live-webinars";
export const WEBINARS_PATH = `/events/${WEBINARS_SLUG}`;
export const WEBINARS_PUBLISHED = "2026-11-27";

const DATA: Record<string, WebinarsEvent> = { en, ru, de, it, es, zh, pt, hi, fr, ar };
export const webinarsEvent = (lang: string): WebinarsEvent => DATA[lang] ?? en;

/** Sessions from official Accio event pages (Luma / LinkedIn). `iso` is the session date. */
export const SESSIONS: {
  iso: string;
  title: string;
  topic: WebinarTopic;
  when: string;
  url: string;
}[] = [
  { iso: "2026-12-02", title: "AI Work Wednesday: Get Found by AI", topic: "geo", when: "17:00 CET - Barcelona", url: "https://luma.com/7qb6igpf" },
  { iso: "2026-11-24", title: "Accio Live Ep. 4: Shopify SEO & GEO for Black Friday", topic: "shopify", when: "10:00 PT - YouTube / Instagram", url: "https://luma.com/accio1124" },
  { iso: "2026-11-17", title: "From Sourcing to Selling: AI Tools for Trendyol", topic: "trendyol", when: "10:00 EET - Zoom", url: "https://luma.com/6k6jmv77" },
  { iso: "2026-10-29", title: "Descubre Productos en Tendencia para Black Friday", topic: "trends", when: "17:00 CEST - Zoom", url: "https://luma.com/vsbmfsbg" },
  { iso: "2026-10-28", title: "Market Research & Trend Discovery with AI Agents", topic: "trends", when: "11:00 CEST - Zoom", url: "https://luma.com/jgi62bwj" },
  { iso: "2026-10-27", title: "AI-Powered Site Building", topic: "sites", when: "18:00 CEST - Zoom", url: "https://luma.com/0ek6dob7" },
  { iso: "2026-10-21", title: "Listing Images that Convert: Black Friday Edition", topic: "visuals", when: "11:00 CEST - Zoom", url: "https://luma.com/sp4t5i05" },
];

/** Fixed reference date so server and browser render the same status. */
export const WEBINARS_AS_OF = "2026-11-27";

export const webinarsHead = (lang: string) =>
  newsHead(lang, WEBINARS_PATH, WEBINARS_PUBLISHED, webinarsEvent(lang), "https://luma.com/accio1124");
