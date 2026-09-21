// Team pages. Roles as published on the clinic's current site. Bios are
// drafted for review; anything beyond published facts carries a verify note.
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  slot: string;
  short: string;
  bio: string[];
  focus: string[];
  verify: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "jacqueline-olivo-md",
    name: "Jacqueline Olivo, MD",
    role: "Founder, CEO, and medical director",
    slot: "dr-olivo",
    short: "Physician, founder, and the reason the equipment list reads the way it does.",
    bio: [
      "Dr. Olivo earned her medical degree at San Luis Gonzaga University in Peru and completed a family medicine residency at the University of Illinois. She has been licensed and practicing since 2007.",
      "She opened Olivo Med Spa in Logan Square in 2013 and has led it as a physician ever since: she chooses the technology, trains on it, writes the treatment plans, and remains the medical director for everything performed in the clinic.",
      "Her approach is simple. Start with a conversation about what you want to change, match the treatment to the person rather than the person to a menu, and say plainly what a treatment can and cannot do.",
    ],
    focus: ["Injectables and facial balancing", "Body contouring plans on the BTL platform", "Laser and plasma resurfacing", "Physician-supervised wellness programs"],
    verify: "Bio details beyond the published credentials, and the treatment focus list: Dr. Olivo to confirm",
  },
  {
    slug: "michelina-quaranta-faber",
    name: "Michelina Quaranta-Faber, LE",
    role: "Senior lead aesthetician",
    slot: "michelina",
    short: "Leads the esthetics team and the facial and peel programs.",
    bio: [
      "Michelina is a licensed esthetician and the senior lead of the esthetics team at Olivo Med Spa. Patients return to her for Hydrafacial, chemical peels, dermaplaning, and skin plans built around the lines the clinic carries.",
      "She is known for explaining every step before it happens and for skin plans that fit a real schedule.",
    ],
    focus: ["Hydrafacial and signature facials", "PCA peels and dermaplaning", "Skincare consultations", "Lash lift and tint"],
    verify: "Michelina's bio, tenure, and focus list: clinic to confirm",
  },
  {
    slug: "bianca-esparza",
    name: "Bianca Esparza",
    role: "Licensed aesthetician",
    slot: "bianca",
    short: "Facials, peels, and laser hair reduction with the esthetics team.",
    bio: ["Bianca is a licensed aesthetician on the Olivo team, working across facials, peels, and the laser hair reduction program under the direction of Dr. Olivo."],
    focus: ["Facials and peels", "Laser hair reduction", "Skin health check-ins"],
    verify: "Bianca's credentials and focus list: clinic to confirm",
  },
  {
    slug: "valeria-mendez",
    name: "Valeria Mendez",
    role: "Licensed aesthetician",
    slot: "valeria",
    short: "Facials, body treatments, and patient care in English and Spanish.",
    bio: ["Valeria is a licensed aesthetician on the Olivo team. She works across facials and device-based body treatments and helps Spanish-speaking patients feel at home in the clinic."],
    focus: ["Facials", "Emsculpt Neo and Exion sessions", "Spanish-language patient care"],
    verify: "Valeria's credentials, languages, and focus list: clinic to confirm",
  },
];

export const getMember = (slug: string) => teamMembers.find((t) => t.slug === slug);
