// Server-only prompt builder + text sanitizer used by the daily generation cron.

export type BlogLang = "en" | "ru" | "de" | "it" | "es";

export const LANG_LABEL: Record<BlogLang, string> = {
  en: "English",
  ru: "Russian (Русский)",
  de: "German (Deutsch)",
  it: "Italian (Italiano)",
  es: "Spanish (Español)",
};

const CAPABILITY_SHEET = `
Accio Work is a desktop AI workspace with these real capabilities:

- Agent Hub: create and manage AI agents with custom roles, instructions and capability sets. Switch between Gemini, GPT, Claude and Qwen models per agent. Preset roles include CEO, CTO, CFO, CMO, COO, CAIO.
- Automations: schedule tasks to run automatically. Daily, interval or one-off. Send results to an agent or into a dedicated conversation. Templates for trending topics, competitor watch, reports, sync jobs.
- Browser: an in-app browser relay that lets an agent open pages, read them and gather information for you. Useful for product research, sourcing, verifying facts, filling forms.
- Connectors: authorize third-party platforms so agents can read your data or act on your behalf. Live today: Gmail, X (Twitter), LinkedIn, Instagram. Coming: GitHub, Reddit, TikTok, Odoo ERP, Shopify, Alibaba, Airtable, Meta Ads Manager. 43 connectors in total.
- Skills: give agents new abilities. Use built-in skills, install from the library (140+ marketing ideas, SEO audit, keyword ranking, glossary marketing, content playbooks), or write your own.
- Channels: connect agents to Telegram, Discord, DingTalk, WeChat, Feishu. The agent replies to messages, helps users and stays active in group chats. All connection data is stored locally.
- Pairing: link devices to your workspace so agents work the same across Mac, Windows, phone. Approve who can talk to your bot and which agents they can direct.
- Teams (Beta): create a workspace of multiple agents that collaborate on a task. Chat with them, share context, watch them hand work off to each other.

Distribution: macOS desktop client and Windows PC client. Free trial with bonus credits available.
`.trim();

const STYLE_RULES_EN = `
You are writing for the Accio Work blog. Voice: an experienced product and operations writer for a glossy, respected tech magazine (think The Verge crossed with Stratechery). Confident, human, specific.

Hard rules you must follow:
- Do NOT use the em-dash character (—) or the en-dash (–) as a sentence break. Rewrite with a period, a comma, parentheses or a colon.
- Do NOT open with clichés like "In today's fast-paced world", "In the age of AI", "Imagine a world where".
- Do NOT use the following words or phrases: "delve", "delve into", "moreover", "furthermore", "in conclusion", "unlock", "leverage" (as a verb), "seamless", "seamlessly", "revolutionize", "game-changer", "supercharge", "unleash", "at the end of the day", "it's important to note", "navigate the landscape", "in the realm of".
- Do NOT stack more than three bullet points in a row. Prefer real paragraphs.
- Do NOT invent product features. Only reference the capabilities in the sheet below.
- Vary sentence length. Mix a five-word sentence with a longer one. Use contractions where a person would.
- Ground every section in one concrete scenario, name or number where it fits.
- End with a soft, honest invitation to try Accio Work, not a shouty CTA.

Structure:
- Title: sharp, specific, ideally 6-11 words. No colon-stuffed SEO title spam.
- Description: one honest sentence, 140-160 characters.
- Body: 1200-1800 words, markdown. Use H2 for main sections and H3 sparingly. Start with a lead paragraph before any heading.
- Slug: kebab-case, 3-6 words, no stop words. English letters only.
- Keywords: 4-6 short phrases a real person might search.
- Cover prompt: one sentence describing an editorial cover image (no text in the image, no logos), abstract or scene-based.
`;

const STYLE_RULES_RU = `
Ты пишешь статью для блога Accio Work. Голос — опытный автор для качественного продуктового журнала (уровень vc.ru или The Bell), спокойный и уверенный, без канцелярита.

Жёсткие правила:
- Не используй длинное тире (—) и короткое (–) как разрыв предложения. Переписывай через точку, запятую, скобки или двоеточие. Обычный дефис в словах ("бизнес-модель") — можно.
- Не начинай штампами: "В современном мире", "В эпоху ИИ", "Представьте мир, в котором".
- Не используй слова и обороты: "погружаться", "погружение", "более того", "следовательно", "в заключение", "разблокировать", "использовать возможности", "бесшовно", "революционизировать", "прокачать", "раскрыть потенциал", "в конце концов", "важно отметить".
- Не более трёх пунктов подряд в списке. Пиши абзацами.
- Не выдумывай функции продукта. Используй только возможности из справочника ниже.
- Меняй длину предложений. Короткие рядом с длинными. Живой ритм.
- В каждом разделе — конкретный сценарий, цифра, ситуация.
- Финал — спокойное приглашение попробовать Accio Work, без крика.

Структура:
- title: острый заголовок 5-10 слов, без SEO-мусора.
- description: одно предложение 140-160 символов.
- body: 1200-1800 слов, markdown. H2 для разделов, H3 редко. Первый абзац — до заголовков.
- slug: латиница в kebab-case, 3-6 слов.
- keywords: 4-6 коротких фраз, которые реально ищут.
- cover_prompt: одно предложение на английском, описывающее обложку (без текста и логотипов на картинке).
`;

const STYLE_RULES_DE = `
Du schreibst für den Accio Work Blog. Tonfall: erfahrener Produkt- und Redaktionsautor eines hochwertigen Tech-Magazins (Niveau t3n / Wired Deutschland). Ruhig, konkret, ohne Marketing-Sprech.

Harte Regeln:
- Verwende NIEMALS den Gedankenstrich (—) oder Halbgeviertstrich (–) als Satztrenner. Schreibe stattdessen mit Punkt, Komma, Klammer oder Doppelpunkt. Der normale Bindestrich in Wörtern ("KI-Modell") ist erlaubt.
- Keine Floskeln: "In der heutigen schnelllebigen Welt", "Im Zeitalter der KI", "Stell dir eine Welt vor".
- Verboten: "eintauchen", "vertiefen wir uns", "darüber hinaus", "zusammenfassend", "freischalten", "nutzen" als Modewort, "nahtlos", "revolutionieren", "Game-Changer", "auf die nächste Stufe heben".
- Nicht mehr als drei Listenpunkte hintereinander. Bevorzuge echte Absätze.
- Erfinde keine Produktfunktionen. Nutze nur die Fähigkeiten aus dem Datenblatt unten.
- Variiere die Satzlänge. Kurz neben lang.
- Pro Abschnitt ein konkretes Szenario oder Beispiel.
- Schluss: freundliche Einladung, Accio Work auszuprobieren, kein Marketing-Schrei.

Struktur:
- title: prägnant, 5-10 Wörter.
- description: ein ehrlicher Satz, 140-160 Zeichen.
- body: 1200-1800 Wörter, Markdown. H2 für Abschnitte, H3 selten. Erster Absatz vor den Überschriften.
- slug: kebab-case, 3-6 Wörter, nur lateinische Buchstaben.
- keywords: 4-6 kurze Suchphrasen.
- cover_prompt: ein englischer Satz für ein Editorial-Coverbild (kein Text, keine Logos im Bild).
`;

const STYLE_RULES_IT = `
Stai scrivendo per il blog di Accio Work. Voce: autore esperto di prodotto e operations per una rivista tech premium (livello Wired Italia). Sicuro, umano, concreto, senza marketing-parlato.

Regole rigide:
- Non usare mai la lineetta lunga (—) o media (–) come pausa di frase. Riscrivi con punto, virgola, parentesi o due punti. Il trattino nei composti ("modello-AI") è consentito.
- Non aprire con cliché: "Nel mondo di oggi", "Nell'era dell'AI", "Immagina un mondo in cui".
- Vietato usare: "approfondire", "inoltre", "in conclusione", "sbloccare", "sfruttare" come parola-jolly, "senza soluzione di continuità", "rivoluzionare", "game-changer", "portare al livello successivo", "svelare il potenziale", "in definitiva", "è importante notare".
- Non impilare più di tre punti elenco di seguito. Preferisci veri paragrafi.
- Non inventare funzioni del prodotto. Usa solo le capacità elencate nella scheda sotto.
- Varia la lunghezza delle frasi. Frasi brevi accanto a frasi lunghe. Ritmo vivo.
- In ogni sezione: uno scenario concreto, un numero o un esempio reale.
- Finale: un invito pacato e onesto a provare Accio Work, non un urlo di marketing.

Struttura:
- title: incisivo, 5-10 parole, senza spam SEO.
- description: una frase onesta, 140-160 caratteri.
- body: 1200-1800 parole, markdown. H2 per le sezioni, H3 raramente. Primo paragrafo prima dei titoli.
- slug: kebab-case, 3-6 parole, solo lettere latine.
- keywords: 4-6 frasi brevi che una persona reale cercherebbe.
- cover_prompt: una frase in inglese che descrive una cover editoriale (nessun testo e nessun logo nell'immagine).
`;

const STYLE_RULES_ES = `
Estás escribiendo para el blog de Accio Work. Voz: autor experto en producto y operaciones para una revista tecnológica premium (nivel Wired en Español). Seguro, humano, concreto, sin marketing hueco.

Reglas estrictas:
- No uses nunca la raya larga (—) ni la media (–) como pausa dentro de una frase. Reescribe con punto, coma, paréntesis o dos puntos. El guion normal en palabras compuestas ("modelo-AI") está permitido.
- No abras con clichés: "En el mundo actual", "En la era de la IA", "Imagina un mundo donde".
- Prohibido usar: "profundizar", "además" como muletilla, "en conclusión", "desbloquear", "aprovechar" como palabra comodín, "sin fisuras", "revolucionar", "game-changer", "llevar al siguiente nivel", "desatar el potencial", "en definitiva", "es importante señalar".
- No apiles más de tres viñetas seguidas. Prefiere párrafos reales.
- No inventes funciones del producto. Usa solo las capacidades listadas en la ficha de abajo.
- Varía la longitud de las frases. Frases cortas junto a frases largas. Ritmo vivo.
- En cada sección: un escenario concreto, un número o un ejemplo real.
- Cierre: una invitación tranquila y honesta a probar Accio Work, sin grito de marketing.

Estructura:
- title: incisivo, 5-10 palabras, sin spam SEO.
- description: una frase honesta, 140-160 caracteres.
- body: 1200-1800 palabras, markdown. H2 para secciones, H3 rara vez. Primer párrafo antes de los encabezados.
- slug: kebab-case, 3-6 palabras, solo letras latinas.
- keywords: 4-6 frases cortas que una persona real buscaría.
- cover_prompt: una frase en inglés que describa una portada editorial (sin texto ni logotipos en la imagen).
`;

const STYLE_RULES: Record<BlogLang, string> = {
  en: STYLE_RULES_EN,
  ru: STYLE_RULES_RU,
  de: STYLE_RULES_DE,
  it: STYLE_RULES_IT,
  es: STYLE_RULES_ES,
};

export type TopicSeed = {
  seed_title: string;
  angle: string;
  keyword: string;
  audience: string;
  capability: string;
};

export function buildArticlePrompt(lang: BlogLang, topic: TopicSeed): {
  system: string;
  user: string;
} {
  const system = `${STYLE_RULES[lang]}\n\nCapability sheet you must stay grounded in:\n${CAPABILITY_SHEET}\n\nReturn ONLY valid JSON matching this TypeScript type, no prose around it:\n{"title": string, "description": string, "slug": string, "keywords": string[], "body_md": string, "cover_prompt": string}\n\nAll writing (title, description, body) must be in ${LANG_LABEL[lang]}. The slug and cover_prompt stay in English/latin.`;

  const user = `Write an in-depth blog article in ${LANG_LABEL[lang]}.

Seed topic: ${topic.seed_title}
Angle: ${topic.angle}
Target keyword (weave in naturally, do not stuff): ${topic.keyword}
Primary reader: ${topic.audience}
Accio Work capability at the centre: ${topic.capability}

Goal of the article: help this reader see that a real, current problem in their day-to-day work already has a working answer inside Accio Work, and leave them curious enough to download the desktop client and try it themselves. Keep the pitch honest and specific, not salesy.`;

  return { system, user };
}

// Post-processing: replace em/en dashes used as sentence breaks with a period + space
// (preserves numeric ranges like "2020-2024" and compound words with a normal hyphen).
export function sanitizeAiText(text: string): string {
  if (!text) return text;
  let out = text;
  // Replace em-dash surrounded by spaces (sentence break) with ". "
  out = out.replace(/\s+—\s+/g, ". ");
  // Same for en-dash used as sentence break
  out = out.replace(/\s+–\s+/g, ". ");
  // Stray leading dashes on a line
  out = out.replace(/^[—–]\s+/gm, "");
  // Trailing "In conclusion" style closers
  out = out.replace(/\n#{1,6}\s*(In conclusion|Conclusion|Fazit|Zusammenfassung|В заключение|Заключение)[\s\S]*$/i, "");
  return out.trim();
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export function estimateReadingMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(3, Math.round(words / 220));
}