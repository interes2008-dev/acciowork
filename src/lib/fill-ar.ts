import type { Lang } from "@/lib/translations";

/**
 * Phase 1 Arabic fallback.
 *
 * Widening `Lang` with "ar" makes every `Record<Lang, T>` require an "ar"
 * entry. For modules that are not yet localized to Arabic (events, ecom and
 * credits blocks, which have no /ar route yet) we reuse the English content so
 * the record stays type-complete and nothing breaks at module load. Swap the
 * fallback for real Arabic data as each module gets its own /ar page.
 */
export function fillAr<T>(o: Record<Exclude<Lang, "ar">, T>): Record<Lang, T> {
  return { ...o, ar: o.en };
}
