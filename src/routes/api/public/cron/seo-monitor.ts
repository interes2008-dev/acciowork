import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import {
  evaluatePage,
  fetchGsc,
  findDuplicates,
  inspectPage,
  monitoredUrls,
  type Issue,
  type PageFacts,
} from "@/lib/seo-monitor.server";

function adminClient() {
  return createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function alertHtml(runId: string, issues: Issue[], stats: string) {
  const rows = issues
    .slice(0, 40)
    .map(
      (i) =>
        `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">${i.severity === "critical" ? "🔴" : "🟡"}</td><td style="padding:6px 10px;border-bottom:1px solid #eee">${i.category}</td><td style="padding:6px 10px;border-bottom:1px solid #eee">${i.message}${i.detail ? ` <span style="color:#666">(${i.detail})</span>` : ""}</td><td style="padding:6px 10px;border-bottom:1px solid #eee"><a href="${i.url}">${i.url.replace("https://acciowork.pro", "") || "/"}</a></td></tr>`,
    )
    .join("");
  return `<div style="font-family:Arial,sans-serif;color:#111"><h2>SEO-алерт acciowork.pro</h2><p>${stats}</p><table style="border-collapse:collapse;font-size:14px">${rows}</table><p style="margin-top:16px"><a href="https://acciowork.pro/seo-monitor">Открыть дашборд мониторинга</a></p><p style="color:#888;font-size:12px">Проверка ${runId}</p></div>`;
}

async function trySendAlert(origin: string, to: string, runId: string, issues: Issue[], stats: string) {
  try {
    const res = await fetch(`${origin}/lovable/email/transactional/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({
        templateName: "seo-alert",
        recipientEmail: to,
        idempotencyKey: `seo-alert-${runId}`,
        templateData: { html: alertHtml(runId, issues, stats), issuesCount: issues.length },
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export const Route = createFileRoute("/api/public/cron/seo-monitor")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabase = adminClient();
        const origin = new URL(request.url).origin;

        const { data: run, error: runErr } = await supabase
          .from("seo_scan_runs")
          .insert({ status: "running" })
          .select("id")
          .single();
        if (runErr || !run) {
          return new Response(JSON.stringify({ error: runErr?.message ?? "run insert failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
        const runId = run.id as string;

        try {
          const targets = monitoredUrls();
          const pages: PageFacts[] = [];
          const issues: Issue[] = [];

          for (const t of targets) {
            try {
              const facts = await inspectPage(t.url, t.lang);
              pages.push(facts);
              issues.push(...evaluatePage(facts));
            } catch (e) {
              issues.push({
                url: t.url,
                lang: t.lang,
                category: "indexing",
                severity: "critical",
                message: "Страница недоступна для проверки",
                detail: e instanceof Error ? e.message : String(e),
              });
            }
          }

          issues.push(...findDuplicates(pages));

          const gsc = await fetchGsc();
          if (gsc) issues.push(...gsc.issues);

          if (issues.length) {
            await supabase.from("seo_scan_issues").insert(
              issues.map((i) => ({
                run_id: runId,
                url: i.url,
                lang: i.lang,
                category: i.category,
                severity: i.severity,
                message: i.message,
                detail: i.detail ?? null,
              })),
            );
          }

          // compare with the previous completed run to find NEW issues
          const { data: prevRun } = await supabase
            .from("seo_scan_runs")
            .select("id")
            .eq("status", "ok")
            .order("started_at", { ascending: false })
            .limit(1)
            .maybeSingle();

          let previousKeys = new Set<string>();
          if (prevRun?.id) {
            const { data: prevIssues } = await supabase
              .from("seo_scan_issues")
              .select("url, category, message")
              .eq("run_id", prevRun.id);
            previousKeys = new Set(
              (prevIssues ?? []).map((p) => `${p.url}|${p.category}|${p.message}`),
            );
          }
          const newIssues = issues.filter(
            (i) => !previousKeys.has(`${i.url}|${i.category}|${i.message}`),
          );
          const criticalCount = issues.filter((i) => i.severity === "critical").length;

          const { data: config } = await supabase
            .from("seo_monitor_config")
            .select("alert_email, alerts_enabled")
            .eq("id", 1)
            .maybeSingle();

          let alertSent = false;
          const shouldAlert =
            !!config?.alerts_enabled &&
            !!config?.alert_email &&
            newIssues.some((i) => i.severity === "critical");
          if (shouldAlert) {
            const stats = `Проверено страниц: ${pages.length}. Проблем: ${issues.length} (критических: ${criticalCount}, новых: ${newIssues.length}).`;
            alertSent = await trySendAlert(origin, config!.alert_email as string, runId, newIssues, stats);
          }

          await supabase
            .from("seo_scan_runs")
            .update({
              status: "ok",
              finished_at: new Date().toISOString(),
              pages_checked: pages.length,
              issues_count: issues.length,
              critical_count: criticalCount,
              new_issues_count: newIssues.length,
              alert_sent: alertSent,
              gsc_site_url: gsc?.siteUrl ?? null,
              gsc_clicks: gsc?.clicks ?? null,
              gsc_impressions: gsc?.impressions ?? null,
              gsc_ctr: gsc?.ctr ?? null,
              gsc_position: gsc?.position ?? null,
              gsc_prev_clicks: gsc?.prevClicks ?? null,
              gsc_prev_impressions: gsc?.prevImpressions ?? null,
              gsc_index_state: gsc?.indexState ?? null,
              gsc_coverage_state: gsc?.coverageState ?? null,
            })
            .eq("id", runId);

          return new Response(
            JSON.stringify({
              ok: true,
              runId,
              pages: pages.length,
              issues: issues.length,
              critical: criticalCount,
              newIssues: newIssues.length,
              alertSent,
              gsc: gsc ? { site: gsc.siteUrl, clicks: gsc.clicks, impressions: gsc.impressions } : null,
            }),
            { headers: { "Content-Type": "application/json" } },
          );
        } catch (e) {
          const message = e instanceof Error ? e.message : String(e);
          await supabase
            .from("seo_scan_runs")
            .update({ status: "error", error_message: message, finished_at: new Date().toISOString() })
            .eq("id", runId);
          return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
