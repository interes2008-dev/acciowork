import { ArrowRight, Sparkles } from "lucide-react";
import { BlogShell } from "@/components/blog/BlogShell";
import { ZH_SELLER_ARTICLES, zhSellerArticle, zhSellerPath, type ZhSection } from "@/lib/news-zh-sellers";
import { pillarsFor } from "@/lib/sourcing-i18n";
import { localizedPath } from "@/lib/i18n";
import { COPY_UI, H2, PromptBlock } from "@/components/news/NovUpdatesArticle";

function Section({ s }: { s: ZhSection }) {
  return (
    <>
      <H2>{s.h2}</H2>
      {s.paras?.map((t) => (
        <p key={t} className="mb-4">{t}</p>
      ))}
      {s.stats && (
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {s.stats.map((st) => (
            <div key={st.label} className="rounded-[24px] border border-border/70 bg-card p-6">
              <p className="text-[32px] font-bold leading-none tracking-tight text-primary">{st.value}</p>
              <p className="mt-3 text-[15px] leading-snug text-foreground/70">{st.label}</p>
            </div>
          ))}
        </div>
      )}
      {s.bullets && (
        <ul className="mb-4 list-disc space-y-3 ps-6">
          {s.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {s.table && (
        <div className="my-6 overflow-x-auto rounded-2xl border border-border/70">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <thead className="bg-muted/60 text-foreground">
              <tr>
                {s.table.head.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.table.rows.map((r) => (
                <tr key={r.join("|")} className="border-t border-border/60 align-top">
                  {r.map((c, i) => (
                    <td key={c} className={`px-4 py-3 ${i === 0 ? "font-semibold text-foreground" : "text-foreground/75"}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.steps && (
        <ol className="my-4 space-y-4">
          {s.steps.map((st, i) => (
            <li key={st.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground">{st.title}</p>
                <p className="mt-1 text-[16px] text-foreground/70">{st.body}</p>
              </div>
            </li>
          ))}
        </ol>
      )}
      {s.after && <p className="mb-4">{s.after}</p>}
    </>
  );
}

export function ZhSellerArticle({ slug }: { slug: string }) {
  const a = zhSellerArticle(slug);
  const [copy, copied] = COPY_UI.zh ?? ["复制指令", "已复制"];
  const go = `/api/public/go?src=${a.slug}&lang=zh`;
  const others = ZH_SELLER_ARTICLES.filter((x) => x.slug !== a.slug);
  const guides = pillarsFor("zh").slice(0, 2);

  return (
    <BlogShell>
      <article className="mx-auto max-w-3xl text-[18px] leading-relaxed text-foreground/85">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Sparkles className="h-3.5 w-3.5" /> {a.badge}
        </span>
        <h1 className="mt-4 text-[30px] font-bold leading-tight tracking-tight text-foreground md:text-[42px]">{a.title}</h1>
        <p className="mt-4 text-xl text-foreground/70">{a.lede}</p>
        <p className="mt-3 text-sm text-foreground/50">
          {a.dateLabel} - {a.readMin}
        </p>

        {a.sections.slice(0, 3).map((s) => (
          <Section key={s.h2} s={s} />
        ))}

        <section className="my-12 overflow-hidden rounded-[32px] bg-foreground p-8 text-background md:p-10">
          <h2 className="text-[26px] font-bold leading-tight md:text-[32px]">{a.ctaTitle}</h2>
          <p className="mt-3 max-w-2xl text-lg opacity-80">{a.ctaText}</p>
          <a
            href={go}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90"
          >
            {a.ctaBtn} <ArrowRight className="h-4 w-4" />
          </a>
        </section>

        {a.sections.slice(3).map((s) => (
          <Section key={s.h2} s={s} />
        ))}

        <div className="mt-8">
          <PromptBlock label={a.promptLabel} text={a.prompt} copy={copy} copied={copied} />
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">常见问题</h2>
        <div className="space-y-3">
          {a.faq.map((f) => (
            <details key={f.q} className="rounded-2xl border border-border/70 bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-2 text-[16px] text-foreground/70">{f.a}</p>
            </details>
          ))}
        </div>

        <a
          href={go}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:opacity-90"
        >
          {a.ctaBtn} <ArrowRight className="h-4 w-4" />
        </a>

        <div className="mt-8 space-y-1 text-sm text-foreground/55">
          {a.sources.map((s) => (
            <p key={s.url}>
              来源：
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                {s.label}
              </a>
            </p>
          ))}
        </div>

        <h2 className="mb-5 mt-14 text-[28px] font-bold text-foreground">本系列其他文章</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {others.map((o) => (
            <a
              key={o.slug}
              href={zhSellerPath(o.slug)}
              className="rounded-2xl border border-primary/40 bg-primary/5 p-5 transition hover:border-primary"
            >
              <p className="text-xs font-semibold text-primary">{o.badge.split(" - ")[0]}</p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{o.cardTitle}</p>
            </a>
          ))}
          {guides.map((g) => (
            <a
              key={g.slug}
              href={localizedPath(`/blog/${g.slug}`, "zh")}
              className="rounded-2xl border border-border/70 bg-card p-5 transition hover:border-primary"
            >
              <p className="text-xs font-semibold text-primary">{g.badge}</p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{g.title}</p>
            </a>
          ))}
        </div>
      </article>
    </BlogShell>
  );
}
