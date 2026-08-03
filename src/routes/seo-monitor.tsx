import { createFileRoute } from "@tanstack/react-router";
import { getSeoMonitorOverview, type ScanIssue, type ScanRun } from "@/lib/seo-monitor.functions";

export const Route = createFileRoute("/seo-monitor")({
  loader: async () => await getSeoMonitorOverview(),
  head: () => ({
    meta: [
      { title: "SEO-мониторинг — Accio Work" },
      {
        name: "description",
        content:
          "Внутренняя панель ежедневного SEO-мониторинга Accio Work: title, описания, структурированные данные и данные Google Search Console.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "SEO-мониторинг — Accio Work" },
      { property: "og:description", content: "Ежедневные SEO-проверки и алерты." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SeoMonitor,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
});

function fmt(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleString("ru-RU", { dateStyle: "short", timeStyle: "short" });
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-2 text-3xl font-bold text-foreground">{value}</div>
      {hint ? <div className="mt-1 text-xs text-muted-foreground">{hint}</div> : null}
    </div>
  );
}

function delta(now: number | null, prev: number | null) {
  if (now == null || prev == null || prev === 0) return undefined;
  const pct = Math.round(((now - prev) / prev) * 100);
  return `${pct >= 0 ? "+" : ""}${pct}% к прошлой неделе`;
}

function SeoMonitor() {
  const { runs, latest, issues } = Route.useLoaderData();
  const critical = issues.filter((i: ScanIssue) => i.severity === "critical");
  const warnings = issues.filter((i: ScanIssue) => i.severity !== "critical");

  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <h1 className="text-3xl font-bold text-foreground sm:text-4xl">SEO-мониторинг</h1>
      <p className="mt-2 text-muted-foreground">
        Ежедневная автоматическая проверка title, описаний, структурированных данных, canonical,
        hreflang и данных Google Search Console по всем 9 языковым версиям.
      </p>

      {!latest ? (
        <p className="mt-10 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
          Проверок пока не было — первая запустится по расписанию.
        </p>
      ) : (
        <>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Страниц проверено" value={String(latest.pages_checked)} hint={fmt(latest.started_at)} />
            <Stat label="Критических проблем" value={String(latest.critical_count)} hint={`новых: ${latest.new_issues_count}`} />
            <Stat label="Всего замечаний" value={String(latest.issues_count)} />
            <Stat
              label="Индексация главной"
              value={latest.gsc_index_state ?? "нет данных"}
              hint={latest.gsc_coverage_state ?? undefined}
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat
              label="Клики (7 дней)"
              value={latest.gsc_clicks?.toLocaleString("ru-RU") ?? "—"}
              hint={delta(latest.gsc_clicks, latest.gsc_prev_clicks)}
            />
            <Stat
              label="Показы (7 дней)"
              value={latest.gsc_impressions?.toLocaleString("ru-RU") ?? "—"}
              hint={delta(latest.gsc_impressions, latest.gsc_prev_impressions)}
            />
            <Stat
              label="CTR"
              value={latest.gsc_ctr != null ? `${(latest.gsc_ctr * 100).toFixed(2)}%` : "—"}
            />
            <Stat
              label="Средняя позиция"
              value={latest.gsc_position != null ? latest.gsc_position.toFixed(1) : "—"}
            />
          </div>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              Проблемы последней проверки ({issues.length})
            </h2>
            {issues.length === 0 ? (
              <p className="mt-3 rounded-2xl border border-border bg-card p-6 text-muted-foreground">
                Проблем не найдено — все проверки пройдены.
              </p>
            ) : (
              <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Уровень</th>
                      <th className="px-4 py-3">Категория</th>
                      <th className="px-4 py-3">Проблема</th>
                      <th className="px-4 py-3">Страница</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...critical, ...warnings].map((i: ScanIssue) => (
                      <tr key={i.id} className="border-t border-border">
                        <td className="whitespace-nowrap px-4 py-3">
                          <span
                            className={
                              i.severity === "critical"
                                ? "rounded-full bg-destructive/10 px-2 py-1 text-xs font-semibold text-destructive"
                                : "rounded-full bg-muted px-2 py-1 text-xs font-semibold text-muted-foreground"
                            }
                          >
                            {i.severity === "critical" ? "критично" : "внимание"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{i.category}</td>
                        <td className="px-4 py-3 text-foreground">
                          {i.message}
                          {i.detail ? (
                            <span className="block text-xs text-muted-foreground">{i.detail}</span>
                          ) : null}
                        </td>
                        <td className="px-4 py-3">
                          <a className="text-primary underline" href={i.url}>
                            {i.url.replace("https://acciowork.pro", "") || "/"}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">История проверок</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Дата</th>
                    <th className="px-4 py-3">Статус</th>
                    <th className="px-4 py-3">Страниц</th>
                    <th className="px-4 py-3">Проблем</th>
                    <th className="px-4 py-3">Критических</th>
                    <th className="px-4 py-3">Алерт</th>
                  </tr>
                </thead>
                <tbody>
                  {runs.map((r: ScanRun) => (
                    <tr key={r.id} className="border-t border-border">
                      <td className="px-4 py-3 text-foreground">{fmt(r.started_at)}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {r.status === "ok" ? "готово" : r.status === "error" ? "ошибка" : "в работе"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{r.pages_checked}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.issues_count}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.critical_count}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r.alert_sent ? "отправлен" : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
