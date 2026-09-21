// Treatment quiz data. Five steps, then up to three suggestions. Nothing here
// promises an outcome: candidacy and expectations are set at a consultation.

export type StepId = "area" | "concern" | "downtime" | "experience" | "timing";
export type AreaId = "face" | "body" | "skin" | "sweat" | "hair" | "wellness";
export type DowntimeId = "none" | "days" | "week";

export type ConcernId =
  | "lines" | "volume" | "sagging" | "chin"
  | "fat" | "muscle" | "loose" | "pelvic"
  | "texture" | "sun" | "redness" | "acne" | "dull"
  | "sweat"
  | "hair" | "tattoo" | "veins"
  | "energy" | "weight" | "hormones";

export type ServiceSlug =
  | "emsculpt-neo" | "exion-body" | "emsella" | "kybella" | "miradry"
  | "emface" | "exion-face" | "pdo-threads" | "radiesse" | "botox-and-xeomin" | "dermal-fillers"
  | "iv-therapy" | "glp-1-weight-management" | "hormone-therapy"
  | "opus-plasma" | "co2-fractional-laser" | "erbium-resurfacing" | "exion-rf-microneedling"
  | "laser-hair-removal" | "ipl-photofacial" | "laser-genesis" | "tattoo-removal"
  | "vein-removal" | "mole-removal"
  | "hydrafacial" | "glass-skin-facial" | "red-out-facial" | "pca-chemical-peels" | "dermaplaning";

export interface Option {
  id: string;
  label: string;
  hint?: string;
}

export interface Step {
  id: StepId;
  title: string;
  sub?: string;
  /** Fixed options for most steps. */
  options?: Option[];
  /** The concern step reads its options from the chosen area. */
  optionsByArea?: Record<AreaId, Option[]>;
}

/** Answers are stored by step id as option ids. */
export type Answers = Partial<Record<StepId, string>>;

export interface Recommendation {
  slug: ServiceSlug;
  name: string;
  why: string;
  href: string;
}

const concernsByArea: Record<AreaId, Option[]> = {
  face: [
    { id: "lines", label: "Lines and wrinkles" },
    { id: "volume", label: "Volume or lips" },
    { id: "sagging", label: "Sagging or jawline" },
    { id: "chin", label: "Double chin" },
  ],
  body: [
    { id: "fat", label: "Stubborn fat" },
    { id: "muscle", label: "Muscle definition" },
    { id: "loose", label: "Loose skin" },
    { id: "pelvic", label: "Pelvic floor" },
  ],
  skin: [
    { id: "texture", label: "Texture or scars" },
    { id: "sun", label: "Sun damage or dark spots" },
    { id: "redness", label: "Redness" },
    { id: "acne", label: "Acne" },
    { id: "dull", label: "Dull or dry" },
  ],
  sweat: [{ id: "sweat", label: "Underarm sweat" }],
  hair: [
    { id: "hair", label: "Unwanted hair" },
    { id: "tattoo", label: "Tattoo" },
    { id: "veins", label: "Veins or moles" },
  ],
  wellness: [
    { id: "energy", label: "Energy and hydration" },
    { id: "weight", label: "Weight management" },
    { id: "hormones", label: "Hormones" },
  ],
};

export const questions: Step[] = [
  {
    id: "area",
    title: "What would you like to work on?",
    sub: "Pick the area that matters most right now.",
    options: [
      { id: "face", label: "Face" },
      { id: "body", label: "Body" },
      { id: "skin", label: "Skin quality" },
      { id: "sweat", label: "Sweat" },
      { id: "hair", label: "Hair or tattoo" },
      { id: "wellness", label: "Wellness" },
    ],
  },
  {
    id: "concern",
    title: "What is the main concern?",
    sub: "One is enough. You can talk through the rest at your visit.",
    optionsByArea: concernsByArea,
  },
  {
    id: "downtime",
    title: "How much downtime can you give?",
    sub: "Some treatments need a few quiet days. Others need none.",
    options: [
      { id: "none", label: "None", hint: "Back to normal the same day" },
      { id: "days", label: "A day or two", hint: "Some redness or swelling is fine" },
      { id: "week", label: "Up to a week", hint: "Open to a stronger treatment" },
    ],
  },
  {
    id: "experience",
    title: "Have you had aesthetic treatments before?",
    options: [
      { id: "never", label: "Never" },
      { id: "few", label: "A few times" },
      { id: "regular", label: "Regularly" },
    ],
  },
  {
    id: "timing",
    title: "How soon?",
    options: [
      { id: "month", label: "This month" },
      { id: "months", label: "In the next few months" },
      { id: "exploring", label: "Just exploring" },
    ],
  },
];

const areaIds: readonly AreaId[] = ["face", "body", "skin", "sweat", "hair", "wellness"];

export function isArea(value: string | undefined): value is AreaId {
  return areaIds.some((a) => a === value);
}

/** Options for a step given the answers so far. */
export function optionsFor(step: Step, answers: Answers): Option[] {
  if (step.optionsByArea) {
    const area = answers.area;
    return isArea(area) ? step.optionsByArea[area] : [];
  }
  return step.options ?? [];
}

/** Display names and one plain sentence each. No outcome claims. */
const services: Record<ServiceSlug, { name: string; why: string }> = {
  "emsculpt-neo": { name: "Emsculpt Neo", why: "Used for muscle and fat in the same session, with no downtime." },
  "exion-body": { name: "Exion body", why: "Radiofrequency and ultrasound used for fat and skin laxity on the body." },
  "emsella": { name: "Emsella", why: "A seated treatment used for pelvic floor strengthening, fully clothed." },
  "kybella": { name: "Kybella", why: "An injectable used for fullness under the chin, with swelling for a few days." },
  "miradry": { name: "Miradry", why: "A single-session treatment used for underarm sweat." },
  "emface": { name: "Emface", why: "Needle-free energy used for facial muscle tone, with no downtime." },
  "exion-face": { name: "Exion face", why: "Radiofrequency used for skin quality and firmness on the face and neck." },
  "pdo-threads": { name: "PDO threads", why: "Dissolvable threads placed to support the jawline and mid face." },
  "radiesse": { name: "Radiesse", why: "A collagen-stimulating filler used for structure along the jawline and cheeks." },
  "botox-and-xeomin": { name: "Botox Cosmetic and Xeomin", why: "Neuromodulators used to soften lines of expression, placed by a physician-led team." },
  "dermal-fillers": { name: "Dermal fillers", why: "Hyaluronic acid fillers used for lips, cheeks, and lost volume." },
  "iv-therapy": { name: "IV therapy", why: "Hydration and vitamin blends chosen with the clinical team." },
  "glp-1-weight-management": { name: "GLP-1 weight management", why: "Physician-supervised weight management, with GLP-1 medication when appropriate." },
  "hormone-therapy": { name: "Hormone therapy", why: "A physician-led review of your hormones with a plan built around your labs." },
  "opus-plasma": { name: "Opus Plasma", why: "Fractional plasma used for texture and fine lines, with a few days of downtime." },
  "co2-fractional-laser": { name: "CO2 fractional laser", why: "Deeper resurfacing used for scars, sun damage, and etched lines, with about a week of healing." },
  "erbium-resurfacing": { name: "Erbium resurfacing", why: "A lighter resurfacing laser used for tone and texture, with a short recovery." },
  "exion-rf-microneedling": { name: "Exion RF microneedling", why: "Microneedling with radiofrequency used for texture, scars, and laxity." },
  "laser-hair-removal": { name: "Laser hair removal", why: "A series of sessions used to reduce unwanted hair on the face and body." },
  "ipl-photofacial": { name: "IPL photofacial", why: "Broad-spectrum light used for sun spots and redness, with little downtime." },
  "laser-genesis": { name: "Laser Genesis", why: "A gentle laser used for redness, pores, and overall tone, with no downtime." },
  "tattoo-removal": { name: "Tattoo removal", why: "Laser sessions used to fade tattoo ink over a series of visits." },
  "vein-removal": { name: "Vein removal", why: "Laser treatment used for small facial and leg veins." },
  "mole-removal": { name: "Mole removal", why: "In-office removal of benign moles and skin tags after a physician review." },
  "hydrafacial": { name: "Hydrafacial", why: "A cleansing and hydrating facial with no downtime." },
  "glass-skin-facial": { name: "Glass skin facial", why: "A layered facial used for glow and hydration before an event." },
  "red-out-facial": { name: "Red-out facial", why: "A calming facial designed for reactive, redness-prone skin." },
  "pca-chemical-peels": { name: "PCA chemical peels", why: "Medical-grade peels used for tone, breakouts, and texture, with light peeling for a few days." },
  "dermaplaning": { name: "Dermaplaning", why: "Manual exfoliation that lifts dead skin and fine facial hair, with no downtime." },
};

/** Candidate services per concern, in order of preference before the downtime filter. */
const byConcern: Record<ConcernId, ServiceSlug[]> = {
  lines: ["botox-and-xeomin", "emface", "opus-plasma", "exion-face", "erbium-resurfacing"],
  volume: ["dermal-fillers", "radiesse", "exion-face", "pdo-threads"],
  sagging: ["emface", "pdo-threads", "radiesse", "exion-face", "opus-plasma"],
  chin: ["kybella", "exion-face", "emface", "exion-body"],
  fat: ["emsculpt-neo", "exion-body", "glp-1-weight-management", "kybella"],
  muscle: ["emsculpt-neo", "exion-body"],
  loose: ["exion-body", "emsculpt-neo", "exion-rf-microneedling", "opus-plasma"],
  pelvic: ["emsella"],
  texture: ["co2-fractional-laser", "opus-plasma", "exion-rf-microneedling", "erbium-resurfacing", "pca-chemical-peels", "laser-genesis", "hydrafacial", "dermaplaning"],
  sun: ["ipl-photofacial", "co2-fractional-laser", "pca-chemical-peels", "erbium-resurfacing", "hydrafacial", "glass-skin-facial"],
  redness: ["laser-genesis", "red-out-facial", "ipl-photofacial"],
  acne: ["pca-chemical-peels", "hydrafacial", "laser-genesis", "red-out-facial"],
  dull: ["hydrafacial", "glass-skin-facial", "dermaplaning", "pca-chemical-peels", "iv-therapy"],
  sweat: ["miradry", "botox-and-xeomin"],
  hair: ["laser-hair-removal"],
  tattoo: ["tattoo-removal"],
  veins: ["vein-removal", "mole-removal"],
  energy: ["iv-therapy", "hormone-therapy"],
  weight: ["glp-1-weight-management", "emsculpt-neo", "exion-body"],
  hormones: ["hormone-therapy", "iv-therapy"],
};

/** Least downtime a service asks for. Anything not listed fits a no-downtime answer. */
const minDowntime: Partial<Record<ServiceSlug, DowntimeId>> = {
  "co2-fractional-laser": "week",
  "opus-plasma": "days",
  "erbium-resurfacing": "days",
  "exion-rf-microneedling": "days",
  "pdo-threads": "days",
  "kybella": "days",
  "pca-chemical-peels": "days",
  "tattoo-removal": "days",
  "mole-removal": "days",
};

const downtimeRank: Record<DowntimeId, number> = { none: 0, days: 1, week: 2 };

function isConcern(value: string | undefined): value is ConcernId {
  return value !== undefined && Object.prototype.hasOwnProperty.call(byConcern, value);
}

function isDowntime(value: string | undefined): value is DowntimeId {
  return value === "none" || value === "days" || value === "week";
}

function toRecommendation(slug: ServiceSlug): Recommendation {
  const s = services[slug];
  return { slug, name: s.name, why: s.why, href: `/treatments/${slug}` };
}

/** Up to three suggestions from the concern and the downtime answer. */
export function recommend(answers: Answers): Recommendation[] {
  let concern = answers.concern;
  if (!isConcern(concern) && isArea(answers.area)) {
    concern = concernsByArea[answers.area][0]?.id;
  }
  if (!isConcern(concern)) return [];
  const allowed = isDowntime(answers.downtime) ? downtimeRank[answers.downtime] : downtimeRank.none;
  const candidates = byConcern[concern];
  const fits = candidates.filter((slug) => downtimeRank[minDowntime[slug] ?? "none"] <= allowed);
  const picks = fits.length > 0 ? fits : candidates.slice(0, 1);
  return picks.slice(0, 3).map(toRecommendation);
}

/** "A", "A and B", or "A, B, and C" for the text message body. */
export function joinNames(names: string[]): string {
  if (names.length <= 1) return names[0] ?? "";
  if (names.length === 2) return `${names[0]} and ${names[1]}`;
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}
