// Merges Spanish translations over the English source objects. Facts, links,
// images, and slugs never change; only human-readable fields do.
import type { Lang } from "@/content/ui";
import type { Area, Concern, Post, Service } from "@/content/types";
import type { TeamMember } from "@/content/team";
import type { CategoryMeta } from "@/content/site";
import { servicesEs1 } from "@/content/es/services-1";
import { servicesEs2 } from "@/content/es/services-2";
import { concernsEs } from "@/content/es/concerns";
import { areasEs } from "@/content/es/areas";
import { postsEs } from "@/content/es/blog";
import { teamEs, categoriesEs } from "@/content/es/team";

const servicesEs = { ...servicesEs1, ...servicesEs2 };

export function localizeService(s: Service, lang: Lang): Service {
  const t = lang === "es" ? servicesEs[s.slug] : undefined;
  if (!t) return s;
  return { ...s, name: t.name, tag: t.tag, headline: t.headline, summary: t.summary, intro: t.intro, benefits: t.benefits, session: { ...s.session, ...t.session }, goodFor: t.goodFor, faqs: t.faqs, seo: t.seo, image: { ...s.image, alt: t.name } };
}

export function localizeConcern(c: Concern, lang: Lang): Concern {
  const t = lang === "es" ? concernsEs[c.slug] : undefined;
  if (!t) return c;
  return { ...c, name: t.name, question: t.question, summary: t.summary, intro: t.intro, faqs: t.faqs, seo: t.seo, image: { ...c.image, alt: t.name } };
}

export function localizeArea(a: Area, lang: Lang): Area {
  const t = lang === "es" ? areasEs[a.slug] : undefined;
  if (!t) return a;
  return { ...a, name: t.name, travel: t.travel, route: t.route, intro: t.intro, notes: t.notes, seo: t.seo };
}

export function localizePost(p: Post, lang: Lang): Post {
  const t = lang === "es" ? postsEs[p.slug] : undefined;
  if (!t) return p;
  return { ...p, title: t.title, excerpt: t.excerpt, sections: t.sections, seo: t.seo };
}

export function localizeMember(m: TeamMember, lang: Lang): TeamMember {
  const t = lang === "es" ? teamEs[m.slug] : undefined;
  if (!t) return m;
  return { ...m, role: t.role, short: t.short, bio: t.bio, focus: t.focus };
}

export function localizeCategory(c: CategoryMeta, lang: Lang): CategoryMeta {
  const t = lang === "es" ? categoriesEs[c.key] : undefined;
  if (!t) return c;
  return { ...c, name: t.name, short: t.short, line: t.line };
}

import { membershipTiers, specials, financing, skincare } from "@/content/offers";
import { membershipTiersEs, specialsEs, financingEs, skincareEs } from "@/content/es/offers";
import { forPatients, giftCards } from "@/content/patients";
import { forPatientsEs, giftCardsEs } from "@/content/es/patients";
import { testimonialsNote } from "@/content/testimonials";
import { testimonialsNoteEs, doctorEs } from "@/content/es/team";
import { doctor } from "@/content/clinic";

export function offersFor(lang: Lang) {
  return lang === "es" ? { membershipTiers: membershipTiersEs, specials: specialsEs, financing: financingEs, skincare: skincareEs } : { membershipTiers, specials, financing, skincare };
}

export function patientsFor(lang: Lang) {
  return lang === "es" ? { forPatients: forPatientsEs, giftCards: giftCardsEs } : { forPatients, giftCards };
}

export function testimonialsNoteFor(lang: Lang) {
  return lang === "es" ? testimonialsNoteEs : testimonialsNote;
}

export function doctorFor(lang: Lang) {
  return lang === "es" ? { credentials: doctorEs.credentials, boardLine: doctorEs.boardLine } : { credentials: [...doctor.credentials], boardLine: doctor.boardLine };
}
