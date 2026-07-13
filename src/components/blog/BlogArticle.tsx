import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ArticleFull } from "@/lib/blog.functions";
import { BlogShell } from "./BlogShell";

const BACK: Record<"en" | "ru" | "de", string> = {
  en: "← All articles",
  ru: "← Все статьи",
  de: "← Alle Artikel",
};

const MIN: Record<"en" | "ru" | "de", string> = {
  en: "min read",
  ru: "мин чтения",
  de: "Min. Lesezeit",
};

const CTA: Record<"en" | "ru" | "de", { title: string; body: string; button: string; note: string }> = {
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
};

export function BlogArticle({
  lang,
  article,
}: {
  lang: "en" | "ru" | "de";
  article: ArticleFull;
}) {
  const base = lang === "ru" ? "/ru/blog" : lang === "de" ? "/de/blog" : "/blog";
  const cta = CTA[lang];
  const date = new Date(article.published_at).toLocaleDateString(
    lang === "en" ? "en-US" : lang === "ru" ? "ru-RU" : "de-DE",
    { day: "numeric", month: "long", year: "numeric" },
  );

  return (
    <BlogShell>
      <a href={base} className="mb-8 inline-block text-sm text-foreground/60 hover:text-foreground">
        {BACK[lang]}
      </a>

      <article className="mx-auto max-w-3xl">
        <div className="mb-6 text-xs uppercase tracking-[0.2em] text-emerald-700/80">
          {date} · {article.reading_minutes} {MIN[lang]}
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg text-foreground/70">{article.description}</p>

        {article.cover_url ? (
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-muted/40">
            <img src={article.cover_url} alt="" className="h-auto w-full" />
          </div>
        ) : null}

        <div className="prose prose-neutral prose-lg mt-12 max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-emerald-800 prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body_md}</ReactMarkdown>
        </div>

        <aside className="mt-16 rounded-2xl bg-emerald-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-emerald-950">{cta.title}</h2>
          <p className="mt-3 text-foreground/75">{cta.body}</p>
          <a
            href="https://www.accio.com/invite-work?sId=KECtp1GttZ42%2FwpJUH5IxQ%3D%3D&ic=IC506004212009&tenant=accio&src=p_referral_IC506004212009&return_url=https%3A%2F%2Fwww.accio.com%2Fwork%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            {cta.button}
          </a>
          <p className="mt-3 text-xs text-foreground/60">{cta.note}</p>
        </aside>
      </article>
    </BlogShell>
  );
}