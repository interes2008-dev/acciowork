import en from "./news-sell-2027/en.json";
import ru from "./news-sell-2027/ru.json";
import de from "./news-sell-2027/de.json";
import it from "./news-sell-2027/it.json";
import es from "./news-sell-2027/es.json";
import zh from "./news-sell-2027/zh.json";
import pt from "./news-sell-2027/pt.json";
import hi from "./news-sell-2027/hi.json";
import fr from "./news-sell-2027/fr.json";
import ar from "./news-sell-2027/ar.json";
import { newsHead } from "./news-head";

export type SellNews = typeof en;

export const SELL_SLUG = "what-to-sell-2027-trending-products-europe";
export const SELL_PATH = `/blog/${SELL_SLUG}`;
export const SELL_PUBLISHED = "2026-11-24";

const DATA: Record<string, SellNews> = { en, ru, de, it, es, zh, pt, hi, fr, ar };

export const sellNews = (lang: string): SellNews => DATA[lang] ?? en;

export const SELL_SOURCES = [
  "https://en.tmtpost.com/news/8212529",
  "https://english.ebrun.com/20261120/721705.shtml",
  "https://www.prnewswire.com/news-releases/alibabacom-launches-european-sme-startup-pack-making-accio-sourcing-expert-free-302944448.html",
];

export const sellHead = (lang: string) => newsHead(lang, SELL_PATH, SELL_PUBLISHED, sellNews(lang), SELL_SOURCES[0]);
