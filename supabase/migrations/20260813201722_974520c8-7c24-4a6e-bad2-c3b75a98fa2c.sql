DROP POLICY IF EXISTS "Public can read scan runs" ON public.seo_scan_runs;
DROP POLICY IF EXISTS "Public can read scan issues" ON public.seo_scan_issues;
REVOKE ALL ON public.seo_scan_runs FROM anon, authenticated;
REVOKE ALL ON public.seo_scan_issues FROM anon, authenticated;
GRANT ALL ON public.seo_scan_runs TO service_role;
GRANT ALL ON public.seo_scan_issues TO service_role;