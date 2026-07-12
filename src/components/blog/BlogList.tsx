import { useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listArticles, type ArticleListItem } from "@/lib/blog.functions";
import { BlogShell } from "./BlogShell";

const COPY: Record<"en" | "ru" | "de", { title: string; lede: string; empty: string; read: string; minutes: string }> = {
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
};

export function BlogList({ lang }: { lang: "en" | "ru" | "de" }) {
  const fetchArticles = useServerFn(listArticles);
  const { data } = useSuspenseQuery({
    queryKey: ["blog", "list", lang],
    queryFn: () => fetchArticles({ data: { lang, limit: 60 } }),
  });

  const copy = COPY[lang];
  const base = lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : "/blog";
  const articles = data as ArticleListItem[];

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
                  {new Date(a.published_at).toLocaleDateString(lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : "de-DE", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
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