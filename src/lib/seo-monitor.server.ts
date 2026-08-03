const BASE_URL = "https://acciowork.pro";
const LANGS = ["en", "ru", "de", "it", "es", "zh", "pt", "hi", "fr"] as const;

export type Lang = (typeof LANGS)[number];

export type Issue = {
  url: string;
  lang: string | null;
  category: string;
  severity: "critical" | "warning";
  message: string;
  detail?: string;
};

export function monitoredUrls(): { url: string; lang: string }[] {
  const list: { url: string; lang: string }[] = [];
  for (const lang of LANGS) {
    const prefix = lang === "en" ? "" : `/${lang}`;
    list.push({ url: `${BASE_URL}${prefix || "/"}`, lang });
    list.push({ url: `${BASE_URL}${prefix}/blog`, lang });
    list.push({ url: `${BASE_URL}${prefix}/events/free-forever`, lang });
  }
  return list;
}

function pick(html: string, re: RegExp): string | null {
  const m = html.match(re);
  return m?.[1]?.trim() ?? null;
}

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—");
}

export type PageFacts = {
  url: string;
  lang: string;
  status: number;
  title: string | null;
  description: string | null;
  canonical: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  h1Count: number;
  jsonLdTypes: string[];
  hreflangCount: number;
};

export async function inspectPage(url: string, lang: string): Promise<PageFacts> {
  const res = await fetch(url, {
    headers: { "user-agent": "AccioWorkSeoMonitor/1.0" },
    redirect: "follow",
  });
  const html = res.ok ? await res.text() : "";
  const head = html.slice(0, 200000);

  const jsonLdTypes: string[] = [];
  for (const m of head.matchAll(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const parsed = JSON.parse(m[1]!.trim()) as { "@type"?: string } | Array<{ "@type"?: string }>;
      const arr = Array.isArray(parsed) ? parsed : [parsed];
      for (const it of arr) if (it && it["@type"]) jsonLdTypes.push(String(it["@type"]));
    } catch {
      jsonLdTypes.push("INVALID_JSON");
    }
  }

  return {
    url,
    lang,
    status: res.status,
    title: pick(head, /<title[^>]*>([\s\S]*?)<\/title>/i)
      ? decode(pick(head, /<title[^>]*>([\s\S]*?)<\/title>/i)!)
      : null,
    description: pick(head, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
      ? decode(pick(head, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)!)
      : null,
    canonical: pick(head, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i),
    ogTitle: pick(head, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i),
    ogDescription: pick(
      head,
      /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i,
    ),
    h1Count: [...head.matchAll(/<h1[\s>]/gi)].length,
    jsonLdTypes,
    hreflangCount: [...head.matchAll(/hreflang=/gi)].length,
  };
}

export function evaluatePage(p: PageFacts): Issue[] {
  const issues: Issue[] = [];
  const add = (
    category: string,
    severity: Issue["severity"],
    message: string,
    detail?: string,
  ) => issues.push({ url: p.url, lang: p.lang, category, severity, message, detail });

  if (p.status !== 200) {
    add("indexing", "critical", `Страница отвечает ${p.status}`, `HTTP ${p.status}`);
    return issues;
  }

  if (!p.title) add("title", "critical", "Отсутствует <title>");
  else {
    if (p.title.length < 20) add("title", "warning", "Слишком короткий title", `${p.title.length} симв.`);
    if (p.title.length > 60) add("title", "warning", "Title длиннее 60 символов", `${p.title.length} симв.`);
    if (/lovable/i.test(p.title)) add("title", "critical", "Дефолтный title", p.title);
  }

  if (!p.description) add("description", "critical", "Отсутствует meta description");
  else {
    if (p.description.length < 70)
      add("description", "warning", "Слишком короткое описание", `${p.description.length} симв.`);
    if (p.description.length > 160)
      add("description", "warning", "Описание длиннее 160 символов", `${p.description.length} симв.`);
    if (/lovable/i.test(p.description)) add("description", "critical", "Дефолтное описание", p.description);
  }

  if (!p.canonical) add("canonical", "critical", "Отсутствует canonical");
  else if (!p.canonical.startsWith("http"))
    add("canonical", "warning", "Canonical не абсолютный", p.canonical);

  if (!p.ogTitle || !p.ogDescription)
    add("open_graph", "warning", "Неполные OpenGraph-теги для соцсетей");

  if (p.h1Count === 0) add("headings", "critical", "На странице нет H1");
  else if (p.h1Count > 1) add("headings", "warning", `На странице ${p.h1Count} тегов H1`);

  if (p.jsonLdTypes.includes("INVALID_JSON"))
    add("structured_data", "critical", "Невалидный JSON-LD на странице");
  else if (p.jsonLdTypes.length === 0)
    add("structured_data", "critical", "Нет структурированных данных (JSON-LD)");

  if (p.hreflangCount < 9)
    add("hreflang", "warning", "Неполный набор hreflang", `найдено ${p.hreflangCount}`);

  return issues;
}

export function findDuplicates(pages: PageFacts[]): Issue[] {
  const issues: Issue[] = [];
  const byTitle = new Map<string, string[]>();
  const byDesc = new Map<string, string[]>();
  for (const p of pages) {
    if (p.status !== 200) continue;
    if (p.title) byTitle.set(p.title, [...(byTitle.get(p.title) ?? []), p.url]);
    if (p.description) byDesc.set(p.description, [...(byDesc.get(p.description) ?? []), p.url]);
  }
  for (const [title, urls] of byTitle)
    if (urls.length > 1)
      issues.push({
        url: urls[0]!,
        lang: null,
        category: "title",
        severity: "warning",
        message: "Дублирующийся title на нескольких страницах",
        detail: `${title} → ${urls.join(", ")}`,
      });
  for (const [, urls] of byDesc)
    if (urls.length > 1)
      issues.push({
        url: urls[0]!,
        lang: null,
        category: "description",
        severity: "warning",
        message: "Дублирующееся описание на нескольких страницах",
        detail: urls.join(", "),
      });
  return issues;
}

/* ---------- Google Search Console ---------- */

const GSC = "https://connector-gateway.lovable.dev/google_search_console";

function gscHeaders() {
  const lovable = process.env.LOVABLE_API_KEY;
  const conn = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovable || !conn) return null;
  return { Authorization: `Bearer ${lovable}`, "X-Connection-Api-Key": conn };
}

function covers(siteUrl: string, host: string) {
  if (siteUrl.startsWith("sc-domain:")) {
    const d = siteUrl.slice(10).toLowerCase();
    return host === d || host.endsWith(`.${d}`);
  }
  try {
    return new URL(siteUrl).hostname.toLowerCase().replace(/^www\./, "") === host.replace(/^www\./, "");
  } catch {
    return false;
  }
}

export type GscSnapshot = {
  siteUrl: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  prevClicks: number;
  prevImpressions: number;
  indexState: string | null;
  coverageState: string | null;
  issues: Issue[];
};

function daysAgo(n: number) {
  return new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
}

export async function fetchGsc(): Promise<GscSnapshot | null> {
  const headers = gscHeaders();
  if (!headers) return null;

  const sitesRes = await fetch(`${GSC}/webmasters/v3/sites`, { headers });
  if (!sitesRes.ok) return null;
  const { siteEntry = [] } = (await sitesRes.json()) as {
    siteEntry?: { siteUrl: string; permissionLevel?: string }[];
  };
  const host = new URL(BASE_URL).hostname;
  const match = siteEntry.find(
    (e) => e.permissionLevel !== "siteUnverifiedUser" && covers(e.siteUrl, host),
  );
  if (!match) return null;
  const siteUrl = match.siteUrl;

  const query = async (startDate: string, endDate: string) => {
    const r = await fetch(
      `${GSC}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
      {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ startDate, endDate }),
      },
    );
    if (!r.ok) return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const j = (await r.json()) as {
      rows?: { clicks: number; impressions: number; ctr: number; position: number }[];
    };
    const row = j.rows?.[0];
    return {
      clicks: row?.clicks ?? 0,
      impressions: row?.impressions ?? 0,
      ctr: row?.ctr ?? 0,
      position: row?.position ?? 0,
    };
  };

  const current = await query(daysAgo(10), daysAgo(3));
  const previous = await query(daysAgo(17), daysAgo(10));

  let indexState: string | null = null;
  let coverageState: string | null = null;
  const inspect = await fetch(`${GSC}/v1/urlInspection/index:inspect`, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ inspectionUrl: `${BASE_URL}/`, siteUrl }),
  });
  if (inspect.ok) {
    const j = (await inspect.json()) as {
      inspectionResult?: { indexStatusResult?: { verdict?: string; coverageState?: string } };
    };
    indexState = j.inspectionResult?.indexStatusResult?.verdict ?? null;
    coverageState = j.inspectionResult?.indexStatusResult?.coverageState ?? null;
  }

  const issues: Issue[] = [];
  if (indexState && indexState !== "PASS")
    issues.push({
      url: `${BASE_URL}/`,
      lang: null,
      category: "indexing",
      severity: "critical",
      message: "Google сообщает о проблеме с индексацией главной",
      detail: `${indexState}${coverageState ? ` — ${coverageState}` : ""}`,
    });

  const drop = (now: number, before: number) => before > 20 && now < before * 0.7;
  if (drop(current.clicks, previous.clicks))
    issues.push({
      url: BASE_URL,
      lang: null,
      category: "traffic",
      severity: "critical",
      message: "Клики из поиска упали более чем на 30%",
      detail: `${previous.clicks} → ${current.clicks} за 7 дней`,
    });
  if (drop(current.impressions, previous.impressions))
    issues.push({
      url: BASE_URL,
      lang: null,
      category: "traffic",
      severity: "warning",
      message: "Показы в поиске упали более чем на 30%",
      detail: `${previous.impressions} → ${current.impressions} за 7 дней`,
    });

  return {
    siteUrl,
    ...current,
    prevClicks: previous.clicks,
    prevImpressions: previous.impressions,
    indexState,
    coverageState,
    issues,
  };
}
