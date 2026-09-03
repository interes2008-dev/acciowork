-- Self-updating market alerts for the Events page.
-- Run once in Supabase (SQL editor). After that, edit rows in the Table editor
-- and the site updates with no redeploy. Set active=false or an expires_at in the
-- past to hide an alert automatically. If the table is empty or unreachable, the
-- site keeps its built-in curated alerts, so nothing breaks.

create table if not exists public.market_alerts (
  id          uuid primary key default gen_random_uuid(),
  lang        text not null,                 -- en, ru, de, it, es, zh, pt, hi, fr
  tag         text not null,                 -- e.g. "Customs · 2026"
  title       text not null,
  body        text not null,
  cta         text not null,                 -- link label
  href        text not null,                 -- e.g. "/duty" or "/ru/duty" or full URL
  img         text not null default '/img/landing-duty.webp',
  sort        int  not null default 0,
  active      boolean not null default true,
  expires_at  timestamptz,                   -- null = never expires
  created_at  timestamptz not null default now()
);

create index if not exists market_alerts_lang_idx on public.market_alerts (lang, active, sort);

-- Public read only (anon key). No public writes: edit via the dashboard.
alter table public.market_alerts enable row level security;
drop policy if exists "market_alerts public read" on public.market_alerts;
create policy "market_alerts public read"
  on public.market_alerts for select
  to anon, authenticated
  using (active = true);

-- Seed with the current three alerts (EN + RU shown as examples; add other langs the same way).
insert into public.market_alerts (lang, tag, title, body, cta, href, img, sort) values
('en','Customs · 2026','The de minimis threshold is gone','The duty-free exemption for cheap parcels into the US has ended, and the EU is adding fees on low-value goods. Every parcel is costed differently now, which changes your real landed price.','Recalculate landed cost','/duty','/img/landing-duty.webp',1),
('en','Channels · 2026','TikTok Shop is booming, windows close fast','Marketplace volume is climbing hard, but winning products saturate within days. Whoever finds and launches faster keeps the margin.','How to enter TikTok Shop','/tiktok-shop','/img/landing-tiktok.webp',2),
('en','Suppliers · 2026','Reliable suppliers are pain number one','Most sellers name finding reliable suppliers as their biggest challenge. One bad batch eats your margin and your timeline.','Score a supplier','/supplier-scorecard','/img/feature-sourcing.webp',3),
('ru','Таможня · 2026','Порог de minimis отменён','Освобождение от пошлин для дешёвых посылок в США закрыто, а ЕС добавляет сборы на товары низкой стоимости. Каждая посылка теперь считается иначе, и это меняет вашу реальную себестоимость.','Пересчитать себестоимость','/ru/duty','/img/landing-duty.webp',1),
('ru','Каналы · 2026','TikTok Shop растёт, окна закрываются быстро','Оборот площадки резко растёт, но выигрышные товары насыщаются за считанные дни. Кто быстрее находит и запускает, тот и снимает маржу.','Как выходить в TikTok Shop','/ru/tiktok-shop','/img/landing-tiktok.webp',2),
('ru','Поставщики · 2026','Надёжный поставщик, боль номер один','Большинство продавцов называют поиск надёжных поставщиков главной трудностью. Одной плохой партии хватает, чтобы съесть маржу и сорвать сроки.','Оценить поставщика','/ru/supplier-scorecard','/img/feature-sourcing.webp',3);
