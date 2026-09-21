// Shared content types for the Olivo site. Every content file imports from
// here so pages can render any service, concern, area, or post the same way.
import type { Shot } from "@/components/shared/Placeholder";

export type CategoryKey =
  | "body-contouring"
  | "facial-lifting"
  | "skin-resurfacing"
  | "injectables"
  | "laser-and-light"
  | "facials-and-peels"
  | "wellness"
  | "sweat"
  | "removals";

export interface Faq {
  q: string;
  a: string;
  verify?: string;
}

export interface SessionFacts {
  /** "30 minutes" */
  duration: string;
  /** "4 sessions, 5 to 10 days apart" or "Single session" */
  sessions: string;
  /** "None" | "Minimal" | "A few days" | "About a week" */
  downtime: string;
  /** What it feels like, one line. */
  feels: string;
  /** When people typically notice change. Never a guarantee. */
  results: string;
  verify?: string;
}

export interface Service {
  slug: string;
  name: string;
  category: CategoryKey;
  /** Manufacturer or brand, if any: "BTL", "Alma", "Miradry", "Allergan". */
  brand?: string;
  /** Short label under the eyebrow pill: "Body · No downtime". */
  tag: string;
  /** One line under the H1. Plain, specific, no superlatives. */
  headline: string;
  /** One or two sentences. Also seeds the meta description. */
  summary: string;
  /** Two or three paragraphs, 40 to 90 words each. */
  intro: string[];
  /** Three to five outcome bullets, each under 12 words. */
  benefits: string[];
  /** Concern slugs this treatment addresses. */
  concerns: string[];
  session: SessionFacts;
  /** Who it tends to suit. Three bullets. Candidacy always decided at consultation. */
  goodFor: string[];
  faqs: Faq[];
  /** Related service slugs, two to four. */
  related: string[];
  /** Image slot key for when photography is delivered; every slot renders a coming soon tile today. */
  image: { slot: string; alt: string; fallback: Shot };
  /** Path on the current olivomedspa.com site, for image sourcing and the 301 map. */
  live?: string;
  seo: { title: string; description: string };
  es?: { name: string; summary: string };
  /** Any claim that needs a source before launch. Rendered as HTML comments. */
  verify?: string[];
}

export interface Concern {
  slug: string;
  name: string;
  /** Question form used on the quiz and hub: "Lines and wrinkles?" */
  question: string;
  summary: string;
  intro: string[];
  /** Ordered by how often the clinic reaches for them. Service slugs. */
  treatments: string[];
  faqs: Faq[];
  image: { slot: string; alt: string; fallback: Shot };
  seo: { title: string; description: string };
  verify?: string[];
}

export interface Area {
  slug: string;
  name: string;
  /** "10 minutes by car" style. Always a verify item. */
  travel: string;
  route: string;
  intro: string[];
  /** Why people from this area come, two or three lines. */
  notes: string[];
  popular: string[];
  seo: { title: string; description: string };
  verify?: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  /** Sections: heading plus paragraphs. */
  sections: { h: string; p: string[] }[];
  related: string[];
  seo: { title: string; description: string };
  verify?: string[];
}
