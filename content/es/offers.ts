// Spanish versions of the exports in content/offers.ts. Slugs, tier names,
// service slugs, and verify notes stay unchanged. No prices.
import type { membershipTiers, specials, financing, skincare } from "../offers";

/** One membership row with the readable fields widened to string. */
type TierEs<T> = { readonly [K in keyof T]: K extends "name" | "family" | "line" ? string : K extends "perks" ? readonly string[] : T[K] };

export const membershipTiersEs: readonly TierEs<(typeof membershipTiers)[number]>[] = [
  { slug: "skin-club", name: "Skin Club", family: "Piel", line: "Un lugar fijo en el calendario para su piel, basado en faciales y las líneas que ofrecemos.", tiers: ["Skin Club", "Skin Club VIP", "Skin Club Elite"], perks: ["Un crédito mensual para facial", "Precios para miembros en Alastin, ZO Skin Health y Skinbetter Science", "Reserva prioritaria con el equipo de estética"], services: ["hydrafacial", "pca-chemical-peels", "dermaplaning"] },
  { slug: "body-club", name: "Emsculpt NEO Club y Sculpt It", family: "Cuerpo", line: "Trabajo de músculo y grasa con un calendario que se acumula, con tensado Exion a medida que el cuerpo cambia.", tiers: ["Emsculpt NEO Club", "Sculpt It"], perks: ["Un crédito mensual de Emsculpt Neo o Exion", "Precios para miembros en tratamientos corporales", "Una revisión trimestral del plan con el equipo clínico"], services: ["emsculpt-neo", "exion-body", "emsella"] },
  { slug: "laser-hair-club", name: "Laser Hair Reduction Club (club de reducción de vello con láser)", family: "Láser", line: "Una serie con precio de programa y no de visita, para que termine lo que empieza.", tiers: ["Laser Hair Reduction Club"], perks: ["Sesiones programadas durante toda la serie", "Precios para miembros en zonas adicionales", "Sesiones de retoque a tarifas de miembro"], services: ["laser-hair-removal"] },
];

export const specialsEs: typeof specials = {
  intro: "Las promociones cambian cada mes. Las ofertas vigentes están en el portal de miembros de la clínica y se confirman al reservar.",
  verify: "Specials: pull the live monthly offers from the clinic before launch; no prices shown until supplied",
  items: [
    { name: "Tratamiento destacado del mes", line: "Pregunte por el tratamiento con dispositivo destacado de este mes cuando reserve." },
    { name: "Consulta para pacientes nuevos", line: "Una consulta con el equipo clínico para elaborar un plan por escrito." },
    { name: "Mes de membresía", line: "Únase a Skin Club o a los clubes corporales y el crédito de su primer mes se aplica a su próxima visita.", verify: "Membership month offer: illustrative, clinic to confirm or remove" },
  ],
};

export const financingEs: typeof financing = {
  headline: "Pague a plazos a través de Cherry.",
  lines: [
    "Cherry es un proveedor externo de planes de pago que utiliza la clínica. Usted solicita en línea en unos minutos, Cherry le indica para qué califica y usted elige un plan al pagar.",
    "Solicitar no afecta su puntaje de crédito de la manera en que lo hace una consulta formal. Los términos, las tasas y la aprobación los establece Cherry, no Olivo Med Spa.",
  ],
  verify: "Cherry application mechanics and credit-check language: confirm with Cherry's current merchant guidance",
  faqs: [
    { q: "¿Qué tratamientos puedo financiar?", a: "Cualquier tratamiento o paquete de la clínica puede pagarse a través de Cherry, sujeto a aprobación." },
    { q: "¿Cuándo debo solicitarlo?", a: "Antes de su visita a través del enlace de Cherry, o en la recepción el mismo día." },
    { q: "¿Olivo establece los términos?", a: "No. Cherry establece todos los términos al momento de la solicitud. La clínica simplemente acepta Cherry como forma de pago." },
  ],
};

export const skincareEs: typeof skincare = {
  lines: [
    { name: "Alastin", line: "Cuidado de la piel a base de péptidos diseñado en torno a los procedimientos: antes, después y todos los días entre uno y otro.", verify: "Alastin line description: confirm with brand materials" },
    { name: "ZO Skin Health", line: "Protocolos dispensados por médicos, creados por el Dr. Zein Obagi para tono, textura y pigmentación." },
    { name: "Skinbetter Science", line: "Fórmulas con estudios clínicos dispensadas únicamente a través de proveedores autorizados." },
  ],
  note: "Dispensado por el equipo clínico después de una consulta de piel. Compre en la clínica o pregunte cómo hacer un pedido.",
  verify: "Online skincare store link: clinic to supply",
};
