# Project architecture rules

- Build localized internal URLs through the shared helpers in `src/lib/i18n.tsx` so every supported language follows one prefix rule and new languages cannot silently fall back to English.