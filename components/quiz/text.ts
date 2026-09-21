// Quiz strings per language. English mirrors the QuizEs.ui shape; Spanish comes from content/es/quiz.ts.
import type { Lang } from "@/content/ui";
import type { Option, Recommendation, Step } from "@/content/quiz";
import { joinNames } from "@/content/quiz";
import { quizEs, type QuizEs } from "@/content/es/quiz";
import { href } from "@/lib/i18n";

const uiEn: QuizEs["ui"] = {
  kicker: "Treatment quiz",
  stepOf: (c, t) => `Step ${c} of ${t}`,
  back: "Back",
  startOver: "Start over",
  resultsPill: "Your results",
  resultsTitle: "A good place to start the conversation.",
  resultsEmptyTitle: "Let us point you in the right direction.",
  resultsEmptyLine: "Tell us what you have in mind and the clinical team will match it to the right treatment.",
  consultFallback: "a consultation",
  ctaTitle: "Next step: talk it through with the clinical team.",
  ctaLine: "Bring your results. The consultation is where the plan gets written.",
  book: "Book a consultation",
  textResults: "Text us your results",
  call: (p) => `Call ${p}`,
  about: (n) => `About ${n}`,
  smallPrint: "A quiz is a starting point. Candidacy and expectations are set at your consultation.",
  sms: (names) => `Hi Olivo, I took the quiz. I'm interested in ${names}. Can we set up a consultation?`,
  joinNames,
};

export function quizText(lang: Lang) {
  const es = lang === "es";
  return {
    ui: es ? quizEs.ui : uiEn,
    stepTitle: (s: Step) => (es ? quizEs.steps[s.id]?.title ?? s.title : s.title),
    stepSub: (s: Step) => (es ? quizEs.steps[s.id]?.sub : s.sub),
    option: (o: Option): Option => (es && quizEs.options[o.id as keyof typeof quizEs.options] ? { ...o, ...quizEs.options[o.id as keyof typeof quizEs.options] } : o),
    rec: (r: Recommendation): Recommendation => { const t = es ? quizEs.services[r.slug] : undefined; return { ...r, name: t?.name ?? r.name, why: t?.why ?? r.why, href: href(lang, r.href) }; },
  };
}
