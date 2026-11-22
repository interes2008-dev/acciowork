# Project architecture rules

- Build localized internal URLs through the shared helpers in `src/lib/i18n.tsx` so every supported language follows one prefix rule and new languages cannot silently fall back to English.
- Keep product-news articles as static localized pages (content JSON per language under `src/lib/news-*/`, one route per language) so they stay online even when the database is unavailable.
- Keep the Chinese seller/factory series (`src/lib/news-zh-sellers/`) as zh-only static pages without cross-language hreflang, because its audience (Chinese exporters) differs from the buyer-focused content in other languages.
