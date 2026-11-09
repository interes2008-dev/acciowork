import { ArrowRight, Check } from "lucide-react";
import type { Lang } from "@/lib/translations";
import { localizedPath } from "@/lib/i18n";
import { FREE_SOURCING_PATH, FREE_SOURCING_SLUG, freeSourcingNews } from "@/lib/news-free-sourcing";

export function FreeSourcingSection({ lang }: { lang: Lang }) {
  const n = freeSourcingNews(lang);
  const free = n.freeItems.filter((i) => i.free);
  return (
    <section className="bg-card px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1100px] gap-10 rounded-[32px] border border-primary/30 bg-primary/5 p-7 md:grid-cols-[1.1fr_1fr] md:p-12">
        <div>
          <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            {n.sectionBadge}
          </span>
          <h2 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-tight md:text-[44px]">
            {n.sectionTitle} <span className="text-primary">{n.sectionAccent}</span>
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-foreground/70 md:text-[18px]">{n.sectionLead}</p>
          <p className="mt-2 text-[14px] text-foreground/55">{n.sectionPaid}</p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={`/api/public/go?src=${FREE_SOURCING_SLUG}-event&lang=${lang}`}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {n.ctaBtn}
            </a>
            <a
              href={localizedPath(FREE_SOURCING_PATH, lang)}
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-foreground hover:text-primary"
            >
              {n.sectionMore} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>
        </div>
        <ul className="space-y-3 self-center">
          {free.map((i) => (
            <li key={i.name} className="flex items-start gap-3 rounded-2xl bg-background p-4 shadow-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-[15px] font-medium text-foreground">{i.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
