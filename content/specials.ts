// Current specials, transcribed from the clinic's October 2026 flyers. Prices,
// session counts and dates are shared; only the words are per language. Each
// campaign shows from `from` to `until` (inclusive, Chicago time) and drops off
// the page on its own: the specials routes revalidate daily.
import type { Lang } from "./ui";

export type T = Record<Lang, string>;
export type Per = "each" | "month" | "session" | "syringe";

export interface PriceRow {
  sessions?: number;
  label?: T;
  price: number;
  per?: Per;
  save?: number;
}

export interface Tier {
  label?: T;
  rows: PriceRow[];
}

export interface Offer {
  id: string;
  name: T;
  line?: T;
  tiers: Tier[];
  /** Treatment page, when there is one. */
  href?: string;
  verify?: string;
}

export interface Campaign {
  id: string;
  title: T;
  note?: T;
  from: string;
  until: string;
  layout: "cards" | "menu";
  offers: Offer[];
  footer?: { text: T; href: string };
  verify?: string;
}

const one = (price: number, per?: Per): Tier[] => [{ rows: [{ price, per }] }];
const pkg = (newer: [number, number], touch: [number, number]): Tier[] => [
  { label: { en: "New package", es: "Paquete nuevo" }, rows: [{ sessions: 4, price: newer[0] }, { sessions: 6, price: newer[1] }] },
  { label: { en: "Touch up", es: "Retoque" }, rows: [{ sessions: 4, price: touch[0] }, { sessions: 6, price: touch[1] }] },
];

export const campaigns: Campaign[] = [
  {
    id: "october",
    title: { en: "October Spooktacular Specials", es: "Promociones espeluznantes de octubre" },
    from: "2026-10-01",
    until: "2026-10-31",
    layout: "menu",
    offers: [
      { id: "glacier-ghoul", name: { en: "Glacier Ghoul", es: "Glacier Ghoul" }, line: { en: "Cryo facial with peptides and seaweed extracts.", es: "Facial criogénico con péptidos y extractos de algas." }, tiers: one(225) },
      { id: "serpents-eyes", name: { en: "The Serpent's Eyes", es: "The Serpent's Eyes" }, line: { en: "Exion eye sculpting and Opti-Firm eye mask.", es: "Esculpido de ojos con Exion y mascarilla Opti-Firm para ojos." }, tiers: one(150), href: "/treatments/exion-face" },
      { id: "pumpkin-spice", name: { en: "Pumpkin Spice Facial", es: "Pumpkin Spice Facial" }, line: { en: "Dermaplane, pumpkin enzyme, extractions and pumpkin jelly mask.", es: "Dermaplaning, enzima de calabaza, extracciones y mascarilla de gel de calabaza." }, tiers: one(150) },
      { id: "witch-please", name: { en: "Witch, Please Facial", es: "Witch, Please Facial" }, line: { en: "Dermaplane, enzyme, extractions and green pore refining treatment.", es: "Dermaplaning, enzima, extracciones y tratamiento verde para refinar poros." }, tiers: one(150) },
      { id: "walking-dead", name: { en: "Walking Dead Rejuvenation", es: "Walking Dead Rejuvenation" }, verify: "Walking Dead: the clinic's own facial name, kept as printed; it is a facial, not an energy device", line: { en: "Dermaplane, enzyme, extractions and zombie wrinkle treatment.", es: "Dermaplaning, enzima, extracciones y tratamiento zombie para arrugas." }, tiers: one(150) },
      { id: "black-cat", name: { en: "Black Cat Hydrafacial", es: "Black Cat Hydrafacial" }, line: { en: "Dermaplane, signature Hydrafacial and charcoal jelly mask.", es: "Dermaplaning, Hydrafacial signature y mascarilla de gel de carbón." }, tiers: one(225), href: "/treatments/hydrafacial" },
      { id: "vampire", name: { en: "Fang-tastic Vampire Facial", es: "Fang-tastic Vampire Facial" }, line: { en: "Dermaplane, Laser Genesis and vampire jelly mask.", es: "Dermaplaning, Laser Genesis y mascarilla de gel vampiro." }, tiers: one(225), href: "/treatments/laser-genesis" },
      { id: "tox-bank", name: { en: "Tox bank", es: "Banco de tox" }, line: { en: "50 units.", es: "50 unidades." }, tiers: one(600), href: "/treatments/botox-and-xeomin" },
      { id: "filler", name: { en: "Filler", es: "Relleno" }, tiers: one(600, "syringe"), href: "/treatments/dermal-fillers" },
    ],
  },
  {
    id: "sweat",
    title: { en: "Spook the Sweat Away", es: "Espante el sudor" },
    note: { en: "miraDry and microneedling with Rohrer.", es: "miraDry y microneedling con Rohrer." },
    from: "2026-10-01",
    until: "2026-10-31",
    verify: "Spook the Sweat Away: flyer has no end date; set to October 31, confirm with the clinic",
    layout: "cards",
    footer: { text: { en: "Gift certificates available", es: "Certificados de regalo disponibles" }, href: "/gift-cards" },
    offers: [
      {
        id: "miradry",
        name: { en: "miraDry", es: "miraDry" },
        line: { en: "A one-visit treatment used for underarm sweat.", es: "Un tratamiento de una visita usado para el sudor de las axilas." },
        href: "/treatments/miradry",
        tiers: [{ rows: [{ sessions: 1, price: 1800 }, { sessions: 2, price: 3200, save: 400 }, { sessions: 3, price: 4500, save: 900 }] }],
      },
      {
        id: "microneedling",
        name: { en: "Microneedling with Rohrer", es: "Microneedling con Rohrer" },
        line: { en: "Collagen induction for skin texture and tone.", es: "Inducción de colágeno para la textura y el tono de la piel." },
        tiers: [
          { rows: [{ sessions: 1, price: 199 }, { sessions: 3, price: 550 }] },
          { label: { en: "Neck add-on", es: "Complemento de cuello" }, rows: [{ price: 100, per: "session" }] },
          { label: { en: "Neck package", es: "Paquete de cuello" }, rows: [{ sessions: 1, price: 150 }, { sessions: 3, price: 399 }] },
        ],
      },
    ],
  },
  {
    id: "fall-holiday",
    title: { en: "Fall and Holiday Specials", es: "Promociones de otoño y fiestas" },
    note: { en: "Offers valid only while supplies last.", es: "Ofertas válidas hasta agotar existencias." },
    from: "2026-10-14",
    until: "2026-12-01",
    layout: "cards",
    offers: [
      { id: "emsculpt-neo", name: { en: "Emsculpt Neo", es: "Emsculpt Neo" }, line: { en: "Muscle and fat in the same session.", es: "Músculo y grasa en la misma sesión." }, href: "/treatments/emsculpt-neo", tiers: pkg([1800, 2200], [1250, 1500]) },
      { id: "emface", name: { en: "Emface", es: "Emface" }, line: { en: "Facial muscle tone without needles.", es: "Tono muscular facial sin agujas." }, href: "/treatments/emface", tiers: pkg([1800, 1600], [1200, 1500]), verify: "Emface new package: flyer lists 6 sessions at $1,600, below the 4 session price; confirm with the clinic" },
      { id: "exion-face", name: { en: "Exion facial", es: "Exion facial" }, line: { en: "Radiofrequency for facial skin quality.", es: "Radiofrecuencia para la calidad de la piel del rostro." }, href: "/treatments/exion-face", tiers: pkg([1800, 2400], [1400, 1800]) },
      { id: "exion-body", name: { en: "Exion body, per area", es: "Exion corporal, por zona" }, line: { en: "Radiofrequency and ultrasound for skin on the body.", es: "Radiofrecuencia y ultrasonido para la piel del cuerpo." }, href: "/treatments/exion-body", tiers: pkg([1400, 1800], [1200, 1500]) },
      {
        id: "emsella",
        name: { en: "Emsella", es: "Emsella" },
        line: { en: "Seated pelvic floor strengthening, fully clothed.", es: "Fortalecimiento del piso pélvico sentada y con la ropa puesta." },
        href: "/treatments/emsella",
        verify: "Emsella and CO2 rows: flyer prints 'each' after package prices; confirm whether that means per session",
        tiers: [
          { rows: [{ sessions: 6, price: 599, per: "each" }] },
          { label: { en: "Add the CO2 intimate laser, only with Emsella", es: "Agregue el láser CO2 íntimo, solo con Emsella" }, rows: [{ sessions: 3, price: 1500, per: "each" }] },
        ],
      },
      {
        id: "emsella-membership",
        name: { en: "Emsella membership", es: "Membresía de Emsella" },
        line: { en: "Covers 6 Emsella sessions and one CO2 intimate laser treatment every other month.", es: "Incluye 6 sesiones de Emsella y un tratamiento con láser CO2 íntimo cada dos meses." },
        tiers: one(450, "month"),
      },
      {
        id: "co2-intimate",
        name: { en: "CO2 intimate laser", es: "Láser CO2 íntimo" },
        verify: "CO2 intimate laser: flyer says 'CO2 vaginal rejuvenation'; renamed and its benefit claims left off because the FDA has warned against marketing energy devices for vaginal rejuvenation. Medical director to confirm wording",
        tiers: [{ rows: [{ sessions: 3, price: 1800, per: "each" }, { sessions: 6, price: 3000, per: "each" }] }],
      },
    ],
  },
];

/** Today in Chicago as YYYY-MM-DD. */
export function chicagoToday(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

/** Campaigns running today, soonest to end first. */
export function activeCampaigns(today = chicagoToday()): Campaign[] {
  return campaigns.filter((c) => c.from <= today && today <= c.until).sort((a, b) => a.until.localeCompare(b.until));
}
