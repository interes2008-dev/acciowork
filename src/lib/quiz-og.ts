import { qzQuestions, qzResults, type QzLang } from "./quiz-data";

export interface QuizSearch {
  a?: string;
}

function toStr(x: unknown): string | undefined {
  return typeof x === "string" && x ? x : undefined;
}

export function validateQuizSearch(search: Record<string, unknown>): QuizSearch {
  return { a: toStr(search.a) };
}

// Recomputes the quiz result from a shared answers string and returns a
// personalized OG title/description, or null when the answers are invalid.
export function quizOg(search: QuizSearch, lang: QzLang): { title: string; desc: string } | null {
  if (!search.a) return null;
  const idx = search.a.split("-").map((x) => parseInt(x, 10));
  if (idx.length !== qzQuestions.length) return null;

  let score = 0;
  for (let i = 0; i < qzQuestions.length; i++) {
    const opt = qzQuestions[i].options[idx[i]];
    if (!opt) return null;
    score += opt.score;
  }
  const tier = score >= 7 ? "strong" : score >= 4 ? "partial" : "weak";
  const r = qzResults[tier];
  const title = r.title[lang];
  let desc = r.body[lang];
  if (desc.length > 200) desc = `${desc.slice(0, 200).trimEnd()}...`;
  return { title, desc };
}
