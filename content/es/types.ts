// Shapes for Spanish translations. Each record is keyed by the English slug
// and carries only the human-readable fields; structure, images, links, and
// facts stay in the English source files.
import type { Faq } from "../types";

export interface ServiceEs {
  name: string;
  tag: string;
  headline: string;
  summary: string;
  intro: string[];
  benefits: string[];
  session: { duration: string; sessions: string; downtime: string; feels: string; results: string };
  goodFor: string[];
  faqs: Faq[];
  seo: { title: string; description: string };
}

export interface ConcernEs {
  name: string;
  question: string;
  summary: string;
  intro: string[];
  faqs: Faq[];
  seo: { title: string; description: string };
}

export interface AreaEs {
  name: string;
  travel: string;
  route: string;
  intro: string[];
  notes: string[];
  seo: { title: string; description: string };
}

export interface PostEs {
  title: string;
  excerpt: string;
  sections: { h: string; p: string[] }[];
  seo: { title: string; description: string };
}

export interface TeamEs {
  role: string;
  short: string;
  bio: string[];
  focus: string[];
}

export interface CategoryEs {
  name: string;
  short: string;
  line: string;
}
