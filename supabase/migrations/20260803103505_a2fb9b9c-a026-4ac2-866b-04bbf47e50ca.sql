CREATE TABLE public.seo_scan_runs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  started_at timestamptz NOT NULL DEFAULT now(),
  finished_at timestamptz,
  status text NOT NULL DEFAULT 'running',
  pages_checked integer NOT NULL DEFAULT 0,
  issues_count integer NOT NULL DEFAULT 0,
  critical_count integer NOT NULL DEFAULT 0,
  new_issues_count integer NOT NULL DEFAULT 0,
  gsc_site_url text,
  gsc_clicks integer,
  gsc_impressions integer,
  gsc_ctr numeric,
  gsc_position numeric,
  gsc_prev_clicks integer,
  gsc_prev_impressions integer,
  gsc_index_state text,
  gsc_coverage_state text,
  alert_sent boolean NOT NULL DEFAULT false,
  error_message text
);

CREATE TABLE public.seo_scan_issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  run_id uuid NOT NULL REFERENCES public.seo_scan_runs(id) ON DELETE CASCADE,
  url text NOT NULL,
  lang text,
  category text NOT NULL,
  severity text NOT NULL DEFAULT 'warning',
  message text NOT NULL,
  detail text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX seo_scan_issues_run_id_idx ON public.seo_scan_issues(run_id);
CREATE INDEX seo_scan_runs_started_at_idx ON public.seo_scan_runs(started_at DESC);

CREATE TABLE public.seo_monitor_config (
  id integer PRIMARY KEY DEFAULT 1,
  alert_email text,
  alerts_enabled boolean NOT NULL DEFAULT true,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT seo_monitor_config_single_row CHECK (id = 1)
);

INSERT INTO public.seo_monitor_config (id, alert_email, alerts_enabled) VALUES (1, NULL, true);

GRANT SELECT ON public.seo_scan_runs TO anon, authenticated;
GRANT SELECT ON public.seo_scan_issues TO anon, authenticated;
GRANT ALL ON public.seo_scan_runs TO service_role;
GRANT ALL ON public.seo_scan_issues TO service_role;
GRANT ALL ON public.seo_monitor_config TO service_role;

ALTER TABLE public.seo_scan_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_scan_issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_monitor_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read scan runs" ON public.seo_scan_runs FOR SELECT USING (true);
CREATE POLICY "Public can read scan issues" ON public.seo_scan_issues FOR SELECT USING (true);
CREATE POLICY "No public access to monitor config" ON public.seo_monitor_config FOR SELECT USING (false);