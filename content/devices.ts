// The canonical nine hero devices, in order. Every concept renders these
// nine, in this order. Facts come from the client brief; anything not
// sourced there carries a verify note that renders as an HTML comment.

export type DeviceFamily = "BTL" | "Alma" | "Laser" | "Miradry" | "Hydrafacial";
export type TreatmentArea = "Face" | "Body" | "Face and body" | "Underarms" | "Pelvic floor";

export interface Device {
  slug: string;
  name: string;
  family: DeviceFamily;
  /** One function line, house wording. */
  fn: string;
  area: TreatmentArea;
  /** Qualitative downtime tag. The whole column is a verify item. */
  downtime: "None" | "Minimal" | "A few days" | "About a week";
  /** Spelled ordinal for Atelier ("The first"). */
  ordinal: string;
  verify?: string;
  /** Abstract silhouette key for placeholder art. */
  shape: "console" | "arm" | "handpiece" | "chair" | "bed" | "tower";
}

export const devices: Device[] = [
  {
    slug: "emsculpt-neo",
    name: "Emsculpt Neo",
    family: "BTL",
    fn: "Builds muscle and reduces fat in one session, no surgery.",
    area: "Body",
    downtime: "None",
    ordinal: "The first",
    shape: "console",
  },
  {
    slug: "emface",
    name: "Emface",
    family: "BTL",
    fn: "Improves facial tone and lift without needles.",
    area: "Face",
    downtime: "None",
    ordinal: "The second",
    verify: "Emface function line: confirm claim wording with BTL materials",
    shape: "arm",
  },
  {
    slug: "exion",
    name: "Exion",
    family: "BTL",
    fn: "Skin tightening and collagen support for face and body.",
    area: "Face and body",
    downtime: "Minimal",
    ordinal: "The third",
    shape: "tower",
  },
  {
    slug: "emsella",
    name: "Emsella",
    family: "BTL",
    fn: "Pelvic floor strengthening, fully clothed, 28 minutes.",
    area: "Pelvic floor",
    downtime: "None",
    ordinal: "The fourth",
    verify: "Emsella session length and clothed claim: confirm with BTL materials",
    shape: "chair",
  },
  {
    slug: "opus-plasma",
    name: "Opus Plasma",
    family: "Alma",
    fn: "Fractional plasma resurfacing with shorter downtime than traditional ablative lasers.",
    area: "Face",
    downtime: "A few days",
    ordinal: "The fifth",
    verify: "Opus Plasma downtime comparison: confirm with Alma materials",
    shape: "handpiece",
  },
  {
    slug: "co2-fractional-laser",
    name: "CO2 fractional laser",
    family: "Laser",
    fn: "The deepest resurfacing in the clinic, for texture, scars, and lines.",
    area: "Face",
    downtime: "About a week",
    ordinal: "The sixth",
    shape: "tower",
  },
  {
    slug: "miradry",
    name: "Miradry",
    family: "Miradry",
    fn: "Lasting reduction of underarm sweat.",
    area: "Underarms",
    downtime: "Minimal",
    ordinal: "The seventh",
    verify: "Miradry 'lasting' claim: confirm with manufacturer labeling",
    shape: "console",
  },
  {
    slug: "hydrafacial",
    name: "Hydrafacial",
    family: "Hydrafacial",
    fn: "The medical-grade facial: cleanse, extract, hydrate.",
    area: "Face",
    downtime: "None",
    ordinal: "The eighth",
    shape: "tower",
  },
  {
    slug: "exion-rf-microneedling",
    name: "Exion RF microneedling",
    family: "BTL",
    fn: "Radiofrequency microneedling for texture, scars, and tightening.",
    area: "Face and body",
    downtime: "A few days",
    ordinal: "The ninth",
    shape: "handpiece",
  },
];

export const downtimeVerify =
  "Downtime tags are qualitative placeholders; clinic to confirm per device";

export const treatmentAreas: TreatmentArea[] = [
  "Face",
  "Body",
  "Face and body",
  "Underarms",
  "Pelvic floor",
];

/** Secondary "full menu" index. Text only. */
export interface MenuItem {
  name: string;
  verify?: string;
}

export const fullMenu: MenuItem[] = [
  { name: "Emfemme 360", verify: "Women's wellness: use cleared indication only, no 'rejuvenation' language" },
  { name: "Opus Colibri" },
  { name: "Erbium resurfacing" },
  { name: "Laser Genesis" },
  { name: "IPL" },
  { name: "Laser hair removal" },
  { name: "Tattoo removal" },
  { name: "Spider and facial vein removal" },
  { name: "Mole removal" },
  { name: "Glo2Facial (Geneo)" },
  { name: "Diamondglow" },
  { name: "Cryo Lift" },
  { name: "Hydra Dew" },
  { name: "Chemical peels" },
  { name: "Dermaplaning" },
  { name: "PCA body peels" },
  { name: "IV therapy" },
  { name: "Lash lift and tint" },
];

export const injectables = [
  "Botox Cosmetic",
  "Xeomin",
  "Revanesse Versa",
  "Belotero",
  "Radiesse",
  "Kybella",
  "PDO threads",
];

export const skincareLines = ["Alastin", "ZO Skin Health", "Skinbetter Science"];

/** Concern-first selector. Mapping is clinical and needs the clinic's sign-off. */
export interface Concern {
  key: string;
  label: string;
  question: string;
  treatments: string[];
}

export const concernsVerify = "Treatment-to-concern mapping: clinic to confirm";

export const concerns: Concern[] = [
  {
    key: "texture",
    label: "Skin texture",
    question: "Texture, scars, fine lines",
    treatments: ["Opus Plasma", "CO2 fractional laser", "Exion RF microneedling", "Hydrafacial", "Chemical peels"],
  },
  {
    key: "lifting",
    label: "Facial lifting",
    question: "Tone and lift, without surgery",
    treatments: ["Emface", "Exion", "PDO threads", "Radiesse"],
  },
  {
    key: "body",
    label: "Body contouring",
    question: "Muscle, fat, and skin on the body",
    treatments: ["Emsculpt Neo", "Exion", "Kybella"],
  },
  {
    key: "sweat",
    label: "Sweat",
    question: "Underarm sweat",
    treatments: ["Miradry"],
  },
  {
    key: "wellness",
    label: "Wellness",
    question: "Pelvic floor and recovery",
    treatments: ["Emsella", "Emfemme 360", "IV therapy"],
  },
  {
    key: "injectables",
    label: "Injectables",
    question: "Lines, volume, and contour",
    treatments: injectables,
  },
];
