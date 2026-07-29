import type { ArticleListItem } from "@/lib/blog.functions";
import { BlogShell } from "./BlogShell";

const COPY: Record<"en" | "ru" | "de" | "it" | "es" | "zh" | "pt" | "hi" | "fr", { title: string; lede: string; empty: string; read: string; minutes: string }> = {
  en: {
    title: "The Accio Work journal",
    lede: "Field notes on running a modern business with an AI team you can actually direct.",
    empty: "New writing lands here every day. Come back tomorrow.",
    read: "Read",
    minutes: "min read",
  },
  ru: {
    title: "Журнал Accio Work",
    lede: "Полевые заметки о том, как вести современный бизнес с командой ИИ, которой можно управлять.",
    empty: "Новые материалы появляются здесь каждый день. Загляните завтра.",
    read: "Читать",
    minutes: "мин чтения",
  },
  de: {
    title: "Das Accio Work Journal",
    lede: "Feldnotizen über modernes Unternehmertum mit einem KI-Team, das du wirklich lenken kannst.",
    empty: "Jeden Tag erscheint hier ein neuer Beitrag. Schau morgen wieder vorbei.",
    read: "Lesen",
    minutes: "Min. Lesezeit",
  },
  it: {
    title: "Il journal di Accio Work",
    lede: "Appunti dal campo su come si conduce un business moderno con un team di AI che puoi davvero dirigere.",
    empty: "Ogni giorno atterra qui un nuovo articolo. Torna domani.",
    read: "Leggi",
    minutes: "min di lettura",
  },
  es: {
    title: "El journal de Accio Work",
    lede: "Apuntes de campo sobre cómo llevar un negocio moderno con un equipo de IA al que de verdad puedes dirigir.",
    empty: "Cada día aterriza aquí un nuevo artículo. Vuelve mañana.",
    read: "Leer",
    minutes: "min de lectura",
  },
  zh: {
    title: "Accio Work 博客",
    lede: "关于如何用一个真正听你指挥的 AI 团队经营现代生意的一线笔记。",
    empty: "每天都会有新文章上线，明天再来看看。",
    read: "阅读",
    minutes: "分钟阅读",
  },
  pt: {
    title: "O journal da Accio Work",
    lede: "Notas de campo sobre como tocar um negócio moderno com um time de IA que você realmente dirige.",
    empty: "Todo dia entra um novo artigo por aqui. Volte amanhã.",
    read: "Ler",
    minutes: "min de leitura",
  },
  hi: {
    title: "Accio Work जर्नल",
    lede: "एक ऐसी AI टीम के साथ आधुनिक बिज़नेस चलाने के फ़ील्ड नोट्स जिसे आप सच में निर्देश दे सकते हैं।",
    empty: "यहाँ रोज़ नई सामग्री आती है। कल फिर आइए।",
    read: "पढ़ें",
    minutes: "मिनट पढ़ाई",
  },
};

export function BlogList({ lang, articles }: { lang: "en" | "ru" | "de" | "it" | "es" | "zh" | "pt" | "hi" | "fr"; articles: ArticleListItem[] }) {
  const copy = COPY[lang];
  const base =
    lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : lang === "it" ? "/it/blog" : lang === "es" ? "/es/blog" : lang === "zh" ? "/zh/blog" : lang === "pt" ? "/pt/blog" : lang === "hi" ? "/hi/blog" : "/blog";

  return (
    <BlogShell>
      <section className="mb-14 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/80">Accio Work</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 text-lg text-foreground/70">{copy.lede}</p>
      </section>

      {articles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/70 bg-muted/40 px-8 py-16 text-center text-foreground/60">
          {copy.empty}
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.id}
              href={`${base}/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
                {a.cover_url ? (
                  <img
                    src={a.cover_url}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="text-xs text-foreground/50">
                  {new Date(a.published_at).toLocaleDateString(
                    lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : lang === "it" ? "it-IT" : lang === "es" ? "es-ES" : lang === "zh" ? "zh-CN" : lang === "pt" ? "pt-BR" : lang === "hi" ? "hi-IN" : "de-DE",
                    {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    },
                  )}{" "}
                  · {a.reading_minutes} {copy.minutes}
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-emerald-800">
                  {a.title}
                </h2>
                <p className="line-clamp-3 text-sm text-foreground/70">{a.description}</p>
                <span className="mt-auto text-sm font-medium text-emerald-800">{copy.read} →</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </BlogShell>
  );
}