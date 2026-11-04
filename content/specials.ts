// Current specials, transcribed from the clinic's flyers (October and November 2026). Prices,
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
  /** Kept off the page until switched on, even inside its dates. */
  hidden?: boolean;
  /** The clinic's flyers for this campaign, shown above the prices while it runs. */
  images?: { src: string; width: number; height: number; alt: T }[];
}

const one = (price: number, per?: Per): Tier[] => [{ rows: [{ price, per }] }];
const pkg = (newer: [number, number], touch: [number, number]): Tier[] => [
  { label: { en: "New package", es: "Paquete nuevo" }, rows: [{ sessions: 4, price: newer[0] }, { sessions: 6, price: newer[1] }] },
  { label: { en: "Touch up", es: "Retoque" }, rows: [{ sessions: 4, price: touch[0] }, { sessions: 6, price: touch[1] }] },
];

const series = (main: [number, number], touch: [number, number]): Tier[] => [
  { rows: [{ sessions: 4, price: main[0] }, { sessions: 6, price: main[1] }] },
  { label: { en: "Touch up package", es: "Paquete de retoque" }, rows: [{ sessions: 4, price: touch[0] }, { sessions: 6, price: touch[1] }] },
];
const touchVerify = "Confirm who qualifies for touch up pricing (prior series patients only?).";
const noPage = (name: string) => `${name}: no treatment page on the site yet, so this item is unlinked`;
const flyer = (n: number, en: string, es: string) => ({ src: `/specials/olivo-november-specials-${n}.webp`, width: 600, height: 928, alt: { en, es } });

export const campaigns: Campaign[] = [
  {
    id: "november-specials-2026",
    title: { en: "Black Friday Specials", es: "Especiales de Black Friday" },
    note: { en: "November only.", es: "Solo en noviembre." },
    from: "2026-11-01",
    until: "2026-11-30",
    layout: "menu",
    images: [
      flyer(1, "Olivo Med Spa November specials: miraDry, microneedling and Rohrer RF microneedling pricing", "Especiales de noviembre de Olivo Med Spa: precios de miraDry, microneedling y microneedling RF con Rohrer"),
      flyer(2, "Olivo Med Spa November specials: HydraFacial, EMSculpt NEO and EMFACE pricing", "Especiales de noviembre de Olivo Med Spa: precios de HydraFacial, EMSculpt NEO y EMFACE"),
    ],
    offers: [
      {
        id: "miradry",
        name: { en: "miraDry", es: "miraDry" },
        line: { en: "Lasting reduction of underarm sweat and odor, usually in one or two sessions.", es: "Reducción duradera del sudor y el olor de las axilas, normalmente en una o dos sesiones." },
        href: "/treatments/miradry",
        verify: "miraDry 2 and 3 session rows: Nov 2 plan recommended advertising one session only; flyer lists 2 and 3 sessions. Nate to confirm before merge.",
        tiers: [{ rows: [{ sessions: 1, price: 1800 }, { sessions: 2, price: 3200 }, { sessions: 3, price: 4500 }] }],
      },
      { id: "microneedling", name: { en: "Microneedling", es: "Microneedling" }, verify: noPage("Microneedling"), tiers: [{ rows: [{ sessions: 1, price: 170 }, { sessions: 3, price: 450, save: 60 }] }] },
      { id: "rf-microneedling-rohrer", name: { en: "Microneedling RF with Rohrer", es: "Microneedling RF con Rohrer" }, verify: noPage("Microneedling RF with Rohrer (a different device from Exion RF microneedling)"), tiers: [{ rows: [{ sessions: 1, price: 250 }, { sessions: 3, price: 675, save: 75 }] }] },
      { id: "neck-add-on", name: { en: "Neck add-on", es: "Complemento para el cuello" }, line: { en: "With either microneedling.", es: "Con cualquiera de los dos microneedling." }, tiers: one(50, "session") },
      {
        id: "hydrafacial",
        name: { en: "HydraFacial", es: "HydraFacial" },
        line: { en: "Cleanse, extract, and hydrate in one 30 to 45 minute visit. Skin looks fresh the same day.", es: "Limpia, extrae e hidrata en una sola visita de 30 a 45 minutos. La piel luce fresca el mismo día." },
        href: "/treatments/hydrafacial",
        tiers: [
          { rows: [{ sessions: 1, price: 170 }, { sessions: 3, price: 450, save: 60 }] },
          { rows: [{ label: { en: "Dermaplane or mask add-on", es: "Complemento de dermaplaning o mascarilla" }, price: 30, per: "each" }] },
        ],
      },
      { id: "emsculpt-neo", name: { en: "EMSculpt NEO", es: "EMSculpt NEO" }, line: { en: "Builds muscle and reduces fat in the same 30-minute session, without surgery.", es: "Desarrolla músculo y reduce grasa en la misma sesión de 30 minutos, sin cirugía." }, href: "/treatments/emsculpt-neo", verify: touchVerify, tiers: series([1700, 2200], [1250, 1500]) },
      { id: "emface", name: { en: "EMFACE", es: "EMFACE" }, line: { en: "Lifts and tones the face with synchronized radiofrequency and muscle stimulation, no needles.", es: "Eleva y tonifica el rostro con radiofrecuencia y estimulación muscular sincronizadas, sin agujas." }, href: "/treatments/emface", verify: touchVerify, tiers: series([1700, 2200], [1200, 1500]) },
    ],
  },
  {
    id: "black-friday-2026",
    title: { en: "Black Friday to Cyber Monday", es: "Del Black Friday al Cyber Monday" },
    note: { en: "Book miraDry by Monday, November 30 and your next microneedling session ($170 value) is on us.", es: "Reserve miraDry antes del lunes 30 de noviembre y su próxima sesión de microneedling (valor de $170) es cortesía de la clínica." },
    from: "2026-11-27",
    until: "2026-11-30",
    layout: "cards",
    hidden: true,
    verify: "Black Friday add-on: switched off until Dr. Olivo confirms the weekend offer; set hidden to false to show it",
    offers: [
      {
        id: "miradry-bf",
        name: { en: "miraDry plus a free microneedling session", es: "miraDry más una sesión de microneedling gratis" },
        href: "/treatments/miradry",
        tiers: [{ rows: [{ label: { en: "One miraDry treatment", es: "Un tratamiento de miraDry" }, price: 1800 }, { label: { en: "Next microneedling session", es: "Próxima sesión de microneedling" }, price: 0 }] }],
      },
    ],
  },
  {
    id: "fall-holiday",
    title: { en: "Fall and Holiday Specials", es: "Promociones de otoño y fiestas" },
    note: { en: "Offers valid only while supplies last.", es: "Ofertas válidas hasta agotar existencias." },
    // Emsculpt Neo and Emface are priced by the November campaign, so they are not repeated here.
    from: "2026-10-14",
    until: "2026-12-01",
    layout: "cards",
    offers: [
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
  return campaigns.filter((c) => !c.hidden && c.from <= today && today <= c.until).sort((a, b) => a.until.localeCompare(b.until) || b.from.localeCompare(a.from));
}

/** The one session miraDry price from the running campaign, for the ad landing page. */
export function miradryPrice(today = chicagoToday()): number | undefined {
  for (const c of activeCampaigns(today)) {
    const row = c.offers.find((o) => o.id === "miradry")?.tiers[0]?.rows[0];
    if (row) return row.price;
  }
  return undefined;
}
