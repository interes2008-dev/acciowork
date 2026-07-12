
## Blog with daily auto-generated SEO articles (EN / RU / DE)

Goal: add a "Blog" section that publishes new long-form articles automatically every day, in all site languages, to attract organic traffic and drive product downloads. Articles are written in a magazine/expert tone with anti-AI-tell rules (no em-dashes, no "delve/moreover" filler, natural rhythm), grounded in Accio Work's real capabilities (Agents, Automations, Browser, Connectors, Skills, Channels, Pairing, Teams).

---

### 1. Backend (Lovable Cloud)

Enable Lovable Cloud (needed for DB + cron + AI). Create tables:

- `blog_topics` — pool of SEO topics (title seed, angle, target keyword, target audience, capability focus). Seeded from site capabilities + keyword ideas.
- `blog_articles` — one row per language per topic. Columns: `id`, `topic_id`, `lang` (`en|ru|de`), `slug`, `title`, `description` (meta), `keywords`, `cover_prompt`, `cover_url`, `body_md` (long form), `reading_minutes`, `published_at`, `status` (`draft|published`).
- Unique index on `(lang, slug)`; index on `(lang, published_at desc)`.
- RLS: public `SELECT` on `status='published'` only; writes restricted to `service_role`.

### 2. Daily generation job

- Server route `src/routes/api/public/cron/generate-articles.ts` (POST). Verified with a `CRON_SECRET` header so only pg_cron can invoke it.
- Logic per run:
  1. Pick 1 unused topic from `blog_topics` (or synthesize a new one from a rotating capability + keyword template if pool empty).
  2. For each language `en`, `ru`, `de`:
     - Call Lovable AI (`google/gemini-3.5-flash`) with a strict system prompt:
       - Write as an experienced product/ops writer for a glossy tech magazine.
       - Ban list: em-dash `—`, "delve", "moreover", "furthermore", "in today's fast-paced world", "unlock", "leverage" as verb, "in conclusion", excessive bullet spam, robotic tri-colons.
       - Use short varied sentences, first-person plural where natural, one concrete scenario per section, real Accio Work features only (from a capability sheet passed in the prompt).
       - Structured JSON output: `{ title, description, slug, keywords[], body_md, cover_prompt }`.
       - `body_md` 1200–1800 words, H2/H3 hierarchy, ends with a soft CTA to download Accio Work.
     - Generate cover via Lovable AI image model, store URL.
     - Insert row with `status='published'`, `published_at=now()`.
  3. Return summary JSON.
- pg_cron schedule: daily at 07:00 UTC, `net.http_post` to the route with `CRON_SECRET`.

### 3. Frontend routes

Flat file names (TanStack convention):

- `src/routes/blog.tsx` — EN index (list latest published `lang='en'`).
- `src/routes/blog.$slug.tsx` — EN article.
- `src/routes/ru.blog.tsx`, `src/routes/ru.blog.$slug.tsx` — RU.
- `src/routes/de.blog.tsx`, `src/routes/de.blog.$slug.tsx` — DE.

Each route:
- Loader fetches via a `createServerFn` (`listArticles({ lang })`, `getArticle({ lang, slug })`).
- `head()` sets locale-correct `title`, `description`, `canonical`, `hreflang` triple, `og:*`, `twitter:*`, `Article` JSON-LD (with `datePublished`, `author: Accio Work`, `inLanguage`).
- Article page renders markdown (add `react-markdown` + `remark-gfm`), cover image, reading time, sticky "Download Accio Work" CTA at end and mid-article.

### 4. Nav + i18n

- Add "Blog / Блог / Blog" link to `Navbar` in `LandingPage.tsx`, pointing to `/blog`, `/ru/blog`, `/de/blog` based on current lang.
- Add translation keys `nav.blog`, `blog.latest`, `blog.readMore`, `blog.readingTime`, `blog.cta.title`, `blog.cta.button` in `translations.ts` for en/ru/de.

### 5. Sitemap + SEO plumbing

- Extend `src/routes/sitemap[.]xml.ts` to fetch all published articles and emit one `<url>` per article with `xhtml:link` alternates across languages when the same `topic_id` has multiple lang rows.
- Add blog index URLs (`/blog`, `/ru/blog`, `/de/blog`) with mutual alternates.

### 6. Quality guardrails against "AI feel"

Central prompt module `src/lib/blog-prompt.server.ts` used by the cron:
- Style rubric with concrete do/don't examples.
- Forbidden characters (`—`, `–` when used as em-dash, curly quotes optional).
- Post-generation sanitizer: replace stray `—` with `.` or `,` based on context; strip trailing "In conclusion" paragraphs; collapse >3 consecutive bullet lists.
- Capability sheet (short factual bullets about Agent Hub, Automations, Browser, Connectors, Skills, Channels, Pairing, Teams) injected into every prompt so content stays grounded and download-oriented.

### 7. Seed + first run

- Migration seeds ~30 starter topics covering supplier sourcing, competitor monitoring, content ops, AI agent teams, browser automation, Shopify workflows, Telegram/Discord bots, etc.
- After deploy, trigger one manual run to publish an initial batch (1 topic × 3 languages) so the blog isn't empty.

---

### Technical notes

- Uses TanStack `createServerFn` for reads; server route only for the cron webhook (external caller).
- `LOVABLE_API_KEY` and `CRON_SECRET` stored as secrets, read inside handlers only.
- Markdown rendering client-side via `react-markdown`; cover images served from Lovable AI image URLs (stored as strings, no binary in repo).
- All new tables get explicit `GRANT` statements (anon `SELECT` on `blog_articles` where `status='published'`, service_role full).

Approve and I will implement in this order: enable Cloud, migration + seed, cron route + prompt module, server functions, routes, nav + translations, sitemap update, trigger first run.
