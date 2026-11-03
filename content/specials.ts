// Current specials, transcribed from the clinic's flyers and ads (October and November 2026). Prices,
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
    id: "november",
    title: { en: "November Specials", es: "Promociones de noviembre" },
    note: { en: "Sweater season is miraDry season, and your holiday glow starts now.", es: "La temporada de suéteres es temporada de miraDry, y su brillo para las fiestas empieza ahora." },
    from: "2026-11-01",
    until: "2026-11-30",
    verify: "November ads: no end date printed; set to November 30, confirm with the clinic",
    layout: "cards",
    footer: { text: { en: "Gift certificates available", es: "Certificados de regalo disponibles" }, href: "/gift-cards" },
    offers: [
      {
        id: "miradry",
        name: { en: "miraDry", es: "miraDry" },
        line: { en: "Physician-led with Dr. Jacqueline Olivo. Reduces underarm sweat and odor, non-surgical and lasting. Most people need one or two visits.", es: "Dirigido por la Dra. Jacqueline Olivo. Reduce el sudor y el olor de las axilas, no quirúrgico y duradero. La mayoría necesita una o dos visitas." },
        href: "/treatments/miradry",
        tiers: [{ rows: [{ label: { en: "One treatment", es: "Un tratamiento" }, price: 1800 }] }],
      },
      {
        id: "microneedling",
        name: { en: "Microneedling", es: "Microneedling" },
        line: { en: "For texture, tone and collagen: smoother texture, a brighter complexion.", es: "Para la textura, el tono y el colágeno: textura más suave y un cutis más luminoso." },
        tiers: [
          { rows: [{ sessions: 1, price: 199 }, { label: { en: "3 sessions, about $183 each", es: "3 sesiones, unos $183 c/u" }, price: 550 }] },
          { label: { en: "Add the neck", es: "Agregue el cuello" }, rows: [{ price: 100, per: "session" }] },
        ],
      },
    ],
  },
  {
    id: "black-friday",
    title: { en: "Black Friday to Cyber Monday", es: "Del Black Friday al Cyber Monday" },
    note: { en: "Book miraDry by November 30 and your next microneedling session ($199 value) is on us.", es: "Reserve miraDry antes del 30 de noviembre y su próxima sesión de microneedling (valor de $199) va por nuestra cuenta." },
    from: "2026-11-27",
    until: "2026-11-30",
    layout: "cards",
    offers: [
      {
        id: "miradry-bf",
        name: { en: "miraDry plus a free microneedling session", es: "miraDry más una sesión de microneedling gratis" },
        line: { en: "One miraDry treatment, and your next microneedling session is included.", es: "Un tratamiento de miraDry, y su próxima sesión de microneedling va incluida." },
        href: "/treatments/miradry",
        tiers: [{ rows: [{ label: { en: "One miraDry treatment", es: "Un tratamiento de miraDry" }, price: 1800 }, { label: { en: "Next microneedling session", es: "Próxima sesión de microneedling" }, price: 0 }] }],
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

/** Campaigns running today, soonest to end first; on a tie the newer one leads. */
export function activeCampaigns(today = chicagoToday()): Campaign[] {
  return campaigns.filter((c) => c.from <= today && today <= c.until).sort((a, b) => a.until.localeCompare(b.until) || b.from.localeCompare(a.from));
}
