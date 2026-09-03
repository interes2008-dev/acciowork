// Self-updating market alerts.
// Alerts render from curated fallback content on the server (SEO safe), then the
// client refreshes them from a Supabase table if it exists. Editing the table
// updates the site with no redeploy; expired rows hide themselves.

export interface AlertItem {
  tag: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  img: string;
}

// Reads public alerts for a language via the Supabase REST endpoint using the
// publishable (anon) key. Returns null on any error or when nothing is set, so
// the caller keeps its curated fallback. Never throws.
export async function fetchAlerts(lang: string): Promise<AlertItem[] | null> {
  if (typeof window === "undefined") return null;
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
  if (!url || !key) return null;
  try {
    const q =
      `${url}/rest/v1/market_alerts` +
      `?select=tag,title,body,cta,href,img,sort,expires_at` +
      `&lang=eq.${encodeURIComponent(lang)}` +
      `&active=is.true&order=sort.asc`;
    const res = await fetch(q, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
    if (!res.ok) return null;
    const rows = (await res.json()) as (AlertItem & { expires_at: string | null })[];
    if (!Array.isArray(rows) || rows.length === 0) return null;
    const now = Date.now();
    const live = rows.filter((r) => !r.expires_at || new Date(r.expires_at).getTime() > now);
    if (live.length === 0) return null;
    return live.map((r) => ({ tag: r.tag, title: r.title, body: r.body, cta: r.cta, href: r.href, img: r.img }));
  } catch {
    return null;
  }
}
