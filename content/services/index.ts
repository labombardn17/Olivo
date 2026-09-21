// All services in one list, plus lookups. Category files stay under 300 lines each.
import type { CategoryKey, Service } from "../types";
import { bodyServices } from "./body";
import { faceServices } from "./face";
import { wellnessServices } from "./wellness";
import { skinServices } from "./skin";
import { laserServices } from "./laser";
import { facialServices } from "./facials";

export const services: Service[] = [...bodyServices, ...faceServices, ...skinServices, ...laserServices, ...facialServices, ...wellnessServices];

const bySlug = new Map(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return bySlug.get(slug);
}

export function servicesIn(category: CategoryKey): Service[] {
  return services.filter((s) => s.category === category);
}

export function servicesFor(concern: string): Service[] {
  return services.filter((s) => s.concerns.includes(concern));
}

/** Nine flagship device platforms shown on the homepage, in the clinic's order. */
export const flagshipSlugs = ["emsculpt-neo", "emface", "exion-body", "emsella", "opus-plasma", "co2-fractional-laser", "miradry", "hydrafacial", "exion-rf-microneedling"] as const;

export const flagship = () => flagshipSlugs.map((s) => bySlug.get(s)).filter((s): s is Service => Boolean(s));
