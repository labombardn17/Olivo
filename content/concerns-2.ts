// Concerns, second half. Combined and exported from concerns.ts.
// See docs/CONTENT-RULES.md before editing.
import type { Concern } from "./types";

export const concernsMore: Concern[] = [
  {
    slug: "acne-breakouts",
    name: "Acne and breakouts",
    question: "Acne and breakouts",
    summary: "Adult acne is common and treatable; the clinic combines in-office care with physician-guided skincare and, when appropriate, prescriptions.",
    intro: [
      "Acne happens when pores clog with oil and dead skin, bacteria multiply inside, and the skin responds with inflammation. Hormones, stress, and some products push it along. Adult acne is common and often sits along the jaw and chin, which is frustrating when you thought you had left it behind years ago.",
      "A physician-led clinic can combine medical treatment with in-office care. Hydrafacial clears congestion and hydrates without stripping. Chemical peels reduce oil and speed turnover. Laser Genesis and IPL calm redness. Dr. Olivo also looks at hormones when the pattern suggests it, and sets up skincare from ZO Skin Health or Skinbetter Science to keep things quiet.",
    ],
    treatments: ["hydrafacial", "pca-chemical-peels", "laser-genesis", "ipl-photofacial", "red-out-facial"],
    faqs: [
      { q: "Should I get a facial while I am breaking out?", a: "Often yes, if it is the right kind. Hydrafacial and clarifying peels are designed for active acne. Avoid anything with heavy exfoliation or heat while skin is inflamed." },
      { q: "Can you prescribe medication?", a: "Dr. Olivo is a physician and can discuss prescription options as part of your plan when they are appropriate." },
    ],
    image: { slot: "acne-breakouts", alt: "Close view of clear skin after a facial, acne concern at Olivo Med Spa", fallback: "skin-2" },
    seo: { title: "Acne and Breakout Treatment in Chicago | Olivo Med Spa", description: "Hydrafacial, peels, and physician-guided skincare for adult acne and breakouts at Olivo Med Spa in Logan Square, Chicago. Book a consultation with Dr. Olivo." },
  },
  {
    slug: "dull-tired-skin",
    name: "Dull, tired skin",
    question: "Dull or tired-looking skin",
    summary: "Dead cells and dehydration flatten the skin's glow; a well-chosen facial restores it in one visit with no downtime.",
    intro: [
      "Skin looks dull when dead cells pile up on the surface and scatter light instead of reflecting it. Dehydration, a slow turnover cycle, city air, and a few short nights all contribute. Nothing is wrong exactly. The skin just is not doing its housekeeping as quickly as it used to, and it shows.",
      "This is the concern where a good facial earns its place. Hydrafacial, DiamondGlow, and Glo2Facial exfoliate, extract, and infuse hydration in one visit with no downtime. Dermaplaning removes the surface layer and fine hair. For a longer-lasting shift, Dr. Olivo may suggest a peel series or Laser Genesis alongside a home routine.",
    ],
    treatments: ["hydrafacial", "glass-skin-facial", "diamondglow", "glo2facial", "dermaplaning"],
    faqs: [
      { q: "How often should I get a facial?", a: "Roughly every four to six weeks matches the skin's turnover cycle. Skin Club memberships are built around that rhythm." },
      { q: "Can I get a facial before an event?", a: "Yes. Hydrafacial and DiamondGlow are common the day or two before an event. Save peels and resurfacing for at least two weeks out." },
    ],
    image: { slot: "dull-tired-skin", alt: "Hydrated skin in soft light, dull skin concern at Olivo Med Spa", fallback: "skin-1" },
    seo: { title: "Dull, Tired Skin Treatments in Chicago | Olivo Med Spa", description: "Bring back glow with Hydrafacial, DiamondGlow, Glo2Facial, and dermaplaning at Olivo Med Spa in Logan Square, Chicago. Physician-led, no downtime, easy to book." },
  },
  {
    slug: "excessive-sweating",
    name: "Excessive sweating",
    question: "Excessive sweating",
    summary: "Underarm sweating that outpaces the body's needs can be treated for the long term with Miradry or for several months with injections.",
    intro: [
      "Sweat glands under the arms respond to heat, stress, and hormones. In some people they fire far more than the body needs to cool down, a condition called hyperhidrosis. It shows up as soaked shirts, ruined fabric, and planning your day around it. Antiperspirants block the ducts briefly and then wear off.",
      "Miradry uses microwave energy to disable the sweat and odor glands under the arms, and those glands do not grow back, so the change is lasting. Wrinkle relaxers can also quiet sweat for several months. Dr. Olivo reviews what you have tried and whether your sweating is underarm only, which is what Miradry treats.",
    ],
    treatments: ["miradry", "botox-and-xeomin"],
    faqs: [
      { q: "Is Miradry a one-time treatment?", a: "Many people are satisfied after one session and some choose a second. Dr. Olivo sets expectations at consultation.", verify: "One versus two sessions: confirm with Miradry clinical guidance" },
      { q: "Do I need those sweat glands?", a: "The underarms hold a small share of the body's sweat glands, so treating them does not affect your ability to cool down.", verify: "Share of body sweat glands in underarms: confirm with Miradry materials before adding a figure" },
    ],
    image: { slot: "excessive-sweating", alt: "Miradry handpiece detail at Olivo Med Spa", fallback: "steel-1" },
    seo: { title: "Excessive Sweating and Miradry in Chicago | Olivo Med Spa", description: "Lasting relief from underarm sweating with Miradry, plus wrinkle relaxer options, at Olivo Med Spa in Logan Square, Chicago. Physician-led since 2013." },
    verify: ["Glands do not regenerate after Miradry: confirm with Miradry materials"],
  },
  {
    slug: "unwanted-hair",
    name: "Unwanted hair",
    question: "Unwanted hair",
    summary: "Laser hair reduction targets the follicle over a series of sessions, with settings chosen for your skin tone and hair color.",
    intro: [
      "Hair grows in cycles, and only hair in its active growth phase responds to laser. That is why a series is needed: each session catches the follicles that happen to be growing that week. Shaving and waxing remove the hair shaft. Laser targets the follicle itself so regrowth slows and thins over time.",
      "The clinic treats face, underarms, bikini, legs, back, and chest. Dr. Olivo chooses settings for your skin tone and hair color, since the laser is drawn to pigment in the follicle. Dermaplaning is the option for fine facial hair that laser cannot see. The Laser Hair Reduction Club membership structures the series.",
    ],
    treatments: ["laser-hair-removal", "dermaplaning"],
    faqs: [
      { q: "How many sessions will I need?", a: "Typically a series of six or more, spaced several weeks apart, then occasional maintenance. It varies with the area and your hair.", verify: "Session count and spacing: confirm with device manufacturer guidance" },
      { q: "Does it work on darker skin?", a: "Modern lasers can treat a wide range of skin tones with the right wavelength and settings. Dr. Olivo assesses your skin and does a test spot when needed." },
    ],
    image: { slot: "unwanted-hair", alt: "Laser treatment room light at Olivo Med Spa", fallback: "light-1" },
    seo: { title: "Laser Hair Removal in Logan Square, Chicago | Olivo Med Spa", description: "Laser hair reduction for face and body at a physician-led clinic in Logan Square, Chicago. Settings chosen for your skin tone at Olivo Med Spa." },
  },
  {
    slug: "unwanted-tattoos",
    name: "Unwanted tattoos",
    question: "A tattoo you regret",
    summary: "Laser breaks ink into fragments the body can clear; removal is a series, with an honest estimate given at consultation.",
    intro: [
      "Tattoo ink sits in the dermis in particles too large for the body to clear. A laser shatters those particles into fragments small enough for the immune system to carry away over the following weeks. Different colors absorb different wavelengths, so black usually clears fastest and some greens and blues take longer.",
      "Removal is a series, not a session. Sessions are spaced weeks apart to let the skin heal and the body clear ink. Dr. Olivo assesses ink density, colors, age of the tattoo, and its location to give you an honest range, and talks through partial fading for a cover-up if that is the goal instead.",
    ],
    treatments: ["tattoo-removal", "laser-genesis"],
    faqs: [
      { q: "How many sessions does removal take?", a: "Commonly somewhere between six and twelve, spaced six to eight weeks apart, depending on the tattoo. Dr. Olivo gives you a range at consultation.", verify: "Session range and spacing: confirm with laser manufacturer guidance" },
      { q: "Will it scar?", a: "Scarring is uncommon when settings are appropriate and aftercare is followed. Dr. Olivo reviews your healing history and skin type before treating. If redness or texture lingers after the series, Laser Genesis can help calm it." },
    ],
    image: { slot: "unwanted-tattoos", alt: "Laser handpiece detail at Olivo Med Spa", fallback: "steel-1" },
    seo: { title: "Laser Tattoo Removal in Chicago | Olivo Med Spa", description: "Physician-led laser tattoo removal in Logan Square, Chicago. Honest session estimates and settings chosen for your ink and skin at Olivo Med Spa." },
  },
  {
    slug: "veins-and-moles",
    name: "Veins and moles",
    question: "Visible veins or moles",
    summary: "Small vessels, moles, and skin tags are treated in-office, and every lesion is examined by a physician before anything is removed.",
    intro: [
      "Small red or purple vessels on the face and legs appear when tiny veins dilate and stay that way, often from sun, pressure, hormones, or heredity. Moles and skin tags are clusters of pigment cells or loose skin. Most are harmless. Some need a physician to look closely before anything is done to them.",
      "Vein treatment uses laser or light to collapse the vessel so the body reabsorbs it. Mole and skin tag removal is a minor in-office procedure. Because Dr. Olivo is a physician, she examines any lesion first and refers for biopsy when a mole looks atypical rather than removing it for cosmetic reasons.",
    ],
    treatments: ["vein-removal", "mole-removal", "ipl-photofacial", "laser-genesis"],
    faqs: [
      { q: "Can you remove any mole?", a: "Only after an exam. A mole with irregular features is referred for evaluation, not treated cosmetically. Benign moles and skin tags can usually be removed in one visit." },
      { q: "Do treated veins come back?", a: "Treated vessels are cleared, but new ones can form over time, especially on the legs. Maintenance sessions are sometimes needed." },
    ],
    image: { slot: "veins-and-moles", alt: "Clinician's hands examining skin at Olivo Med Spa", fallback: "hands-1" },
    seo: { title: "Vein and Mole Removal in Chicago | Olivo Med Spa", description: "Laser vein treatment and physician-examined mole and skin tag removal at Olivo Med Spa in Logan Square, Chicago. Dr. Olivo examines every lesion first." },
  },
  {
    slug: "pelvic-floor",
    name: "Pelvic floor",
    question: "Bladder leaks or pelvic floor weakness",
    summary: "Leaking with a cough or a run usually traces to a weakened pelvic floor; Emsella strengthens it while you sit fully clothed.",
    intro: [
      "The pelvic floor is a sling of muscle that supports the bladder, bowel, and uterus. Childbirth, age, menopause, and heavy lifting weaken it. The most common sign is leaking with a cough, sneeze, laugh, or run, along with urgency and less sensation. It is common, and it is treatable.",
      "Emsella is a chair. You sit fully clothed while electromagnetic energy contracts the pelvic floor thousands of times in a session, a workout you could not do on your own. Emfemme 360 uses radiofrequency and is offered for intimate wellness within its indication. Dr. Olivo reviews your history and symptoms before recommending either.",
    ],
    treatments: ["emsella", "emfemme-360", "emsculpt-neo"],
    faqs: [
      { q: "Is Emsella uncomfortable?", a: "You feel strong tingling and contractions but remain clothed and seated. Most people read or talk through the session." },
      { q: "How many Emsella sessions are typical?", a: "A common protocol is six sessions over about three weeks, then maintenance as needed.", verify: "Emsella protocol: confirm with BTL guidance" },
    ],
    image: { slot: "pelvic-floor", alt: "Consultation room at Olivo Med Spa", fallback: "room-3" },
    seo: { title: "Pelvic Floor Strengthening with Emsella | Olivo Med Spa", description: "Emsella pelvic floor strengthening for bladder leaks and weakness, fully clothed and non-invasive, at Olivo Med Spa in Logan Square, Chicago. Physician-led." },
    verify: ["Emfemme 360 indication wording: confirm against BTL cleared indication before publishing"],
  },
  {
    slug: "low-energy",
    name: "Low energy",
    question: "Low energy or weight that will not move",
    summary: "Fatigue, fog, and stubborn weight are medical questions; the clinic starts with history and labs before hormone, GLP-1, or IV therapy.",
    intro: [
      "Persistent fatigue, brain fog, poor sleep, and weight that resists effort often trace back to hormones, nutrition, or both. Thyroid, testosterone, estrogen, and cortisol all shift with age and stress. These are medical questions, and they deserve lab work and a physician's read rather than a guess or a supplement.",
      "Dr. Olivo has practiced medicine since 2007 and approaches this as a doctor first. A visit starts with history and labs. Options may include hormone therapy, medically supervised GLP-1 weight management, or IV therapy for hydration and nutrient support. Nothing is prescribed without an evaluation, and follow-up is built into the plan.",
    ],
    treatments: ["hormone-therapy", "glp-1-weight-management", "iv-therapy"],
    faqs: [
      { q: "Do I need labs first?", a: "For hormone therapy and weight management, yes. Labs tell Dr. Olivo what is actually happening so treatment is specific rather than generic." },
      { q: "Is GLP-1 weight management right for me?", a: "It suits some people and not others. Candidacy depends on your health history, current medications, and goals, all reviewed at a medical consultation." },
    ],
    image: { slot: "low-energy", alt: "Consultation room at Olivo Med Spa", fallback: "room-3" },
    seo: { title: "Low Energy, Hormones, and Weight | Olivo Med Spa", description: "Physician-led hormone therapy, GLP-1 weight management, and IV therapy for fatigue and stubborn weight at Olivo Med Spa in Logan Square, Chicago. Labs first." },
  },
];
