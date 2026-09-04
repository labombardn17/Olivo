// Clinic facts. Everything here is sourced from the client brief unless it
// carries a verify note.

export const clinic = {
  name: "Olivo Med Spa",
  wordmark: "OLIVO",
  wordmarkSub: "Med Spa",
  founded: 2013,
  phoneDisplay: "872-315-3481",
  phoneTel: "tel:+18723153481",
  address: {
    line1: "2550 W. Fullerton Ave",
    city: "Chicago",
    state: "IL",
    zip: "60618",
    neighborhood: "Logan Square",
  },
  booking: "https://www.vagaro.com/olivomedspa",
  financing: { name: "Cherry", line: "Financing available through Cherry." },
  instagram: {
    handle: "@olivomedspa",
    verify: "Instagram handle: client to confirm",
  },
  hours: { placeholder: "Hours to be supplied by the clinic.", verify: "Hours: client to supply" },
  transit: {
    line: "Street parking on Fullerton. The Blue Line is a short walk.",
    verify: "Parking and transit note: client to confirm",
  },
  language: { verify: "Client to confirm Spanish content" },
  trademarkLine: "All product names are trademarks of their respective owners.",
  medicalDirector: "Medical director: Jacqueline Olivo, MD.",
  accessibility:
    "We want everyone to be able to use this site. If something is hard to reach, call us and we will help.",
} as const;

export const doctor = {
  name: "Jacqueline Olivo, MD",
  short: "Dr. Olivo",
  role: "Founder, CEO, and medical director",
  quote: "aging is optional.",
  credentials: [
    "MD, San Luis Gonzaga University, Peru",
    "Family medicine residency, University of Illinois",
    "Licensed since 2007, practicing medicine for more than 15 years",
    "Founder, Olivo Medical Wellness Center",
  ],
  boardLine: "Certified in aesthetic medicine by the American Board of Aesthetic Medicine",
  boardVerify: "counsel to confirm board name and advertising compliance",
  bio: "Dr. Olivo trained in family medicine and has practiced since 2007. She opened Olivo Med Spa in 2013 and leads it as a physician, not a licensee.",
  bioVerify: "'leads it as a physician, not a licensee' is inferred; client to confirm",
} as const;

export const team = [
  { name: "Jacqueline Olivo, MD", role: "Founder and medical director" },
  { name: "Michelina Quaranta-Faber, LE", role: "Licensed esthetician" },
  { name: "Bianca Esparza", role: "Aesthetics team" },
  { name: "Valeria Mendez", role: "Aesthetics team" },
] as const;

export const teamRoleVerify = "Team roles beyond credentials shown: client to confirm";

/** Trust facts, sourced. Concepts rotate order and phrasing. */
export const proof = {
  physician: "Physician owned and led since 2013",
  platforms: "BTL and Alma platforms under one roof",
  place: "Logan Square, Chicago",
  since: "Practicing medicine since 2007",
  nine: "Nine device platforms on site",
} as const;

export const memberships = {
  verify: "Membership perks are placeholders; client to supply the real terms",
  tiers: [
    {
      name: "Skincare membership",
      perks: ["A monthly facial credit", "Member pricing on Alastin, ZO Skin Health, and Skinbetter Science", "Priority booking"],
    },
    {
      name: "Body membership",
      perks: ["A monthly Emsculpt Neo or Exion credit", "Member pricing on body treatments", "A quarterly plan review"],
    },
  ],
} as const;

export const reviewPlaceholder =
  "[PLACEHOLDER REVIEW: replace with a verified Google review and reviewer permission]";

export const results = [
  { treatment: "Emsculpt Neo", sessions: "4 sessions" },
  { treatment: "Opus Plasma", sessions: "1 session" },
  { treatment: "Emface", sessions: "4 sessions" },
] as const;

export const resultsVerify = "Session counts are illustrative until real cases are authorized";

export const firstVisit = [
  { step: "Consultation", line: "A conversation with the clinical team about what you want to change." },
  { step: "Plan", line: "A written plan, in plain words, with what to expect." },
  { step: "Treatment", line: "Treatment in the clinic, on the device the plan calls for." },
  { step: "Aftercare", line: "Instructions for the days after, and a number to call." },
  { step: "Follow-up", line: "A check on the result and what, if anything, comes next." },
] as const;

export const firstVisitVerify = "First-visit steps describe a typical process; clinic to confirm";

export const nav = [
  { label: "Treatments", href: "#treatments" },
  { label: "Technology", href: "#technology" },
  { label: "Dr. Olivo", href: "#doctor" },
  { label: "Memberships", href: "#memberships" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#visit" },
] as const;

export const footerPolicies = ["Privacy", "Terms", "Accessibility", "Patient rights"] as const;
