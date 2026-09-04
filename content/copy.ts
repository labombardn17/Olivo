// Headline variants and sub lines per concept. Rhythm varies on purpose:
// each concept has one long line with a finite verb, one question or
// unpunctuated line, and no two concepts open with the same word.

export type ConceptKey = "atelier" | "cinema" | "precision" | "residence" | "current";

export interface HeadlineVariant {
  /** Plain text. An asterisk pair marks the italic accent word (Cinema). */
  text: string;
  verify?: string;
}

export const headlines: Record<ConceptKey, HeadlineVariant[]> = {
  atelier: [
    { text: "Aesthetic medicine, practiced." },
    { text: "The physician's studio in Logan Square" },
    { text: "Skin, structure, and time, attended to by a doctor who has done this since 2007." },
  ],
  cinema: [
    { text: "Aging is *optional*." },
    { text: "The instruments of *staying*." },
    { text: "What if the machines were the least impressive thing here?" },
  ],
  precision: [
    { text: "Every platform. One physician." },
    { text: "Physician-led and device-complete since 2013" },
    { text: "We measure what most clinics describe.", verify: "Measurement claim: confirm the clinic documents outcomes" },
  ],
  residence: [
    { text: "A quiet room on Fullerton where the technology is complete and the doctor is in." },
    { text: "Come as you are. Leave as you intend." },
    { text: "Would you like to see the rooms?" },
  ],
  current: [
    { text: "Nine machines. One doctor." },
    { text: "Built different, on Fullerton" },
    { text: "Dr. Olivo bought the full BTL and Alma platforms so you would not have to go anywhere else.", verify: "Ownership and completeness claim: client to confirm" },
  ],
};

/** The variant each concept uses on its hero. */
export const heroIndex: Record<ConceptKey, number> = {
  atelier: 0,
  cinema: 0,
  precision: 0,
  residence: 0,
  current: 0,
};

export const subLines: Record<ConceptKey, string> = {
  atelier: "Physician owned and led since 2013.",
  cinema: "The full BTL and Alma platforms, under one roof in Logan Square.",
  precision: "Practicing medicine since 2007. Practicing aesthetics since 2013.",
  residence: "Physician owned and led since 2013.",
  current: "The full BTL and Alma platforms, under one roof in Logan Square.",
};

export const cta = {
  primary: "Book a consultation",
  secondary: "See the technology",
  film: "Watch film",
  book: "Book",
  call: "Call",
  shop: "Shop",
  bio: "Read her bio",
} as const;

export const concepts: { key: ConceptKey; number: string; name: string; line: string; defaultPalette: string }[] = [
  { key: "atelier", number: "01", name: "Atelier", line: "Editorial. Type is the image. Paper and ink.", defaultPalette: "olivo" },
  { key: "cinema", number: "02", name: "Cinema", line: "A dark screening room. Devices as sculpture.", defaultPalette: "champagne" },
  { key: "precision", number: "03", name: "Precision", line: "Swiss clinic. Data, grid, exactness.", defaultPalette: "glacier" },
  { key: "residence", number: "04", name: "Residence", line: "A boutique hotel. Image is the type, framed.", defaultPalette: "champagne" },
  { key: "current", number: "05", name: "Current", line: "Bold, contemporary. Color blocks and motion.", defaultPalette: "orchid" },
];

export const sectionCopy = {
  technologyIntro: "Nine platforms, named by brand, in the order the clinic uses them most.",
  technologyIntroVerify: "'in the order the clinic uses them most' is a framing device; client to confirm or drop",
  concernIntro: "Start with what you would like to change.",
  resultsNote: "Treatment and session count only. No ages, no initials.",
  resultsPlaceholder: "Placeholder frame. Real before and after images require written patient authorization.",
  membershipsIntro: "Two memberships, one for skin and one for body.",
  skincareLine: "Alastin, ZO Skin Health, and Skinbetter Science, dispensed by the clinical team.",
  reviewsIntro: "What patients say",
  followIntro: "Follow the clinic",
  visitIntro: "Visit",
  finalCta: "Book a consultation with Dr. Olivo's team.",
  finalCtaVerify: "'Dr. Olivo's team' phrasing: client to confirm who conducts consultations",
} as const;
