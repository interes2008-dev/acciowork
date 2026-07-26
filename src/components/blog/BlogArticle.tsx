import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ArticleFull } from "@/lib/blog.functions";
import { BlogShell } from "./BlogShell";

const BACK: Record<"en" | "ru" | "de" | "it" | "es" | "zh", string> = {
  en: "← All articles",
  ru: "← Все статьи",
  de: "← Alle Artikel",
  it: "← Tutti gli articoli",
  es: "← Todos los artículos",
  zh: "← 全部文章",
};

const MIN: Record<"en" | "ru" | "de" | "it" | "es" | "zh", string> = {
  en: "min read",
  ru: "мин чтения",
  de: "Min. Lesezeit",
  it: "min di lettura",
  es: "min de lectura",
  zh: "分钟阅读",
};

const CTA: Record<"en" | "ru" | "de" | "it" | "es" | "zh", { title: string; body: string; button: string; note: string }> = {
  en: {
    title: "Try Accio Work for yourself",
    body: "Everything in this article is one download away. Free trial with bonus credits, macOS and Windows.",
    button: "Download Accio Work",
    note: "Works on Apple Silicon and Intel Macs, and on Windows 10 or later.",
  },
  ru: {
    title: "Попробуйте Accio Work сами",
    body: "Всё, о чём написано выше, уже в приложении. Бесплатный триал с бонусными кредитами, macOS и Windows.",
    button: "Скачать Accio Work",
    note: "Работает на Apple Silicon и Intel Mac, а также на Windows 10 и новее.",
  },
  de: {
    title: "Probier Accio Work selbst aus",
    body: "Alles aus diesem Artikel steckt schon im Client. Kostenlose Testphase mit Bonus-Guthaben, macOS und Windows.",
    button: "Accio Work herunterladen",
    note: "Läuft auf Apple Silicon und Intel Macs sowie unter Windows 10 oder neuer.",
  },
  it: {
    title: "Prova Accio Work in prima persona",
    body: "Tutto ciò che leggi in questo articolo è a un download di distanza. Prova gratuita con crediti bonus, per macOS e Windows.",
    button: "Scarica Accio Work",
    note: "Funziona su Mac Apple Silicon e Intel, e su Windows 10 o versioni successive.",
  },
  es: {
    title: "Prueba Accio Work tú mismo",
    body: "Todo lo que lees en este artículo está a un descargar de distancia. Prueba gratuita con créditos de bonificación, para macOS y Windows.",
    button: "Descargar Accio Work",
    note: "Funciona en Mac Apple Silicon e Intel, y en Windows 10 o posterior.",
  },
  zh: {
    title: "亲自体验 Accio Work",
    body: "本文提到的一切，下载客户端就能用上。免费试用附赠额度，支持 macOS 和 Windows。",
    button: "下载 Accio Work",
    note: "支持 Apple Silicon 与 Intel 的 Mac，以及 Windows 10 及更高版本。",
  },
};

export function BlogArticle({
  lang,
  article,
}: {
  lang: "en" | "ru" | "de" | "it" | "es" | "zh";
  article: ArticleFull;
}) {
  const base =
    lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : lang === "it" ? "/it/blog" : lang === "es" ? "/es/blog" : lang === "zh" ? "/zh/blog" : "/blog";
  const cta = CTA[lang];
  const date = new Date(article.published_at).toLocaleDateString(
    lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : lang === "it" ? "it-IT" : lang === "es" ? "es-ES" : lang === "zh" ? "zh-CN" : "de-DE",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <BlogShell>
      <a href={base} className="mb-10 inline-block text-sm text-foreground/60 hover:text-foreground">
        {BACK[lang]}
      </a>

      <article className="mx-auto max-w-[46rem]">
        <header className="text-center">
          <div className="mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-800/80">
            <span>{date}</span>
            <span className="mx-3 text-foreground/25">·</span>
            <span>{article.reading_minutes} {MIN[lang]}</span>
          </div>
          <h1 className="font-serif-display text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.025em] text-foreground md:text-[3.5rem]">
            {article.title}
          </h1>
          <div className="mx-auto mt-8 h-px w-16 bg-emerald-700/40" />
          <p className="font-serif-display mx-auto mt-8 max-w-[38rem] text-xl italic leading-relaxed text-foreground/70 md:text-[1.35rem]">
            {article.description}
          </p>
        </header>

        {article.cover_url ? (
          <figure className="mt-14 overflow-hidden rounded-2xl border border-border/40 bg-muted/40 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
            <img src={article.cover_url} alt="" className="h-auto w-full" />
          </figure>
        ) : null}

        <div className="article-prose mt-14">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body_md}</ReactMarkdown>
        </div>

        <div className="mx-auto my-16 flex items-center justify-center gap-3 text-emerald-800/60">
          <span className="h-px w-16 bg-emerald-800/20" />
          <span className="text-xs tracking-[0.4em]">ACCIO</span>
          <span className="h-px w-16 bg-emerald-800/20" />
        </div>

        <aside className="rounded-3xl bg-gradient-to-br from-emerald-50 via-emerald-50/60 to-white p-8 ring-1 ring-emerald-100 md:p-12">
          <h2 className="font-serif-display text-3xl font-semibold tracking-tight text-emerald-950 md:text-4xl">{cta.title}</h2>
          <p className="mt-4 text-lg text-foreground/75">{cta.body}</p>
          <a
            href="https://www.accio.com/invite-work?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            {cta.button}
          </a>
          <p className="mt-3 text-xs text-foreground/60">{cta.note}</p>
        </aside>
      </article>
    </BlogShell>
  );
}