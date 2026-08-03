import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

function publicClient() {
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  return createClient(process.env.SUPABASE_URL!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export type ScanRun = {
  id: string;
  started_at: string;
  finished_at: string | null;
  status: string;
  pages_checked: number;
  issues_count: number;
  critical_count: number;
  new_issues_count: number;
  alert_sent: boolean;
  error_message: string | null;
  gsc_site_url: string | null;
  gsc_clicks: number | null;
  gsc_impressions: number | null;
  gsc_ctr: number | null;
  gsc_position: number | null;
  gsc_prev_clicks: number | null;
  gsc_prev_impressions: number | null;
  gsc_index_state: string | null;
  gsc_coverage_state: string | null;
};

export type ScanIssue = {
  id: string;
  url: string;
  lang: string | null;
  category: string;
  severity: string;
  message: string;
  detail: string | null;
};

export const getSeoMonitorOverview = createServerFn({ method: "GET" }).handler(async () => {
  const supabase = publicClient();
  const { data: runs } = await supabase
    .from("seo_scan_runs")
    .select("*")
    .order("started_at", { ascending: false })
    .limit(30);

  const list = (runs ?? []) as ScanRun[];
  const latest = list.find((r) => r.status === "ok") ?? list[0] ?? null;

  let issues: ScanIssue[] = [];
  if (latest) {
    const { data } = await supabase
      .from("seo_scan_issues")
      .select("id, url, lang, category, severity, message, detail")
      .eq("run_id", latest.id)
      .order("severity", { ascending: true });
    issues = (data ?? []) as ScanIssue[];
  }

  return { runs: list, latest, issues };
});
