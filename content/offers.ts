// Memberships, specials, financing, skincare. Names match the clinic's
// current programs; terms and prices are never shown until supplied.
export const membershipTiers = [
  { slug: "skin-club", name: "Skin Club", family: "Skin", line: "A standing place in the calendar for your skin, built around facials and the lines we carry.", tiers: ["Skin Club", "Skin Club VIP", "Skin Club Elite"], perks: ["A monthly facial credit", "Member pricing on Alastin, ZO Skin Health, and Skinbetter Science", "Priority booking with the esthetics team"], services: ["hydrafacial", "pca-chemical-peels", "dermaplaning"] },
  { slug: "body-club", name: "Emsculpt NEO Club and Sculpt It", family: "Body", line: "Muscle and fat work on a schedule that compounds, with Exion tightening as the body changes.", tiers: ["Emsculpt NEO Club", "Sculpt It"], perks: ["A monthly Emsculpt Neo or Exion credit", "Member pricing on body treatments", "A quarterly plan review with the clinical team"], services: ["emsculpt-neo", "exion-body", "emsella"] },
  { slug: "laser-hair-club", name: "Laser Hair Reduction Club", family: "Laser", line: "A series priced as a program rather than a visit, so you finish what you start.", tiers: ["Laser Hair Reduction Club"], perks: ["Scheduled sessions through the full series", "Member pricing on additional areas", "Touch-up sessions at member rates"], services: ["laser-hair-removal"] },
] as const;

export const membershipsVerify = "Membership perks, tier names, and terms: clinic to supply the real program details before launch";

export const specials = {
  intro: "Specials change monthly. The current offers live in the clinic's member portal and are confirmed at booking.",
  verify: "Specials: pull the live monthly offers from the clinic before launch; no prices shown until supplied",
  items: [
    { name: "This month's featured treatment", line: "Ask about the current featured device treatment when you book." },
    { name: "New patient consultation", line: "A consultation with the clinical team to build a written plan." },
    { name: "Membership month", line: "Join Skin Club or the body clubs and your first month's credit applies to your next visit.", verify: "Membership month offer: illustrative, clinic to confirm or remove" },
  ],
};

export const financing = {
  headline: "Pay over time through Cherry.",
  lines: [
    "Cherry is a third-party payment plan provider used by the clinic. You apply online in a few minutes, Cherry tells you what you qualify for, and you choose a plan at checkout.",
    "Applying does not affect your credit score in the way a hard inquiry does. Terms, rates, and approval are set by Cherry, not by Olivo Med Spa.",
  ],
  verify: "Cherry application mechanics and credit-check language: confirm with Cherry's current merchant guidance",
  faqs: [
    { q: "Which treatments can I finance?", a: "Any treatment or package at the clinic can be paid through Cherry, subject to approval." },
    { q: "When do I apply?", a: "Before your visit through the Cherry link, or at the front desk on the day." },
    { q: "Does Olivo set the terms?", a: "No. Cherry sets every term at application. The clinic simply accepts Cherry as a way to pay." },
  ],
};

export const skincare = {
  lines: [
    { name: "Alastin", line: "Peptide-based skincare designed around procedures: before, after, and every day in between.", verify: "Alastin line description: confirm with brand materials" },
    { name: "ZO Skin Health", line: "Physician-dispensed protocols by Dr. Zein Obagi for tone, texture, and pigment." },
    { name: "Skinbetter Science", line: "Clinically studied formulas dispensed only through authorized providers." },
  ],
  note: "Dispensed by the clinical team after a skin consultation. Shop in the clinic or ask about ordering.",
  verify: "Online skincare store link: clinic to supply",
};
