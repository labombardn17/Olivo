// Shared params, metadata, and render helpers for the dynamic routes in both
// language trees. Route files stay thin: they pick a lang and pass the slug.
import { notFound } from "next/navigation";
import { categories } from "@/content/site";
import { services, getService } from "@/content/services";
import { concerns } from "@/content/concerns";
import { areas } from "@/content/areas";
import { posts } from "@/content/blog";
import type { CategoryKey } from "@/content/types";
import type { Lang } from "@/content/ui";
import { localizeArea, localizeCategory, localizeConcern, localizePost, localizeService } from "@/lib/localize";
import { buildMeta } from "@/lib/meta";
import { ServiceTemplate } from "@/components/site/templates/ServiceTemplate";
import { CategoryTemplate } from "@/components/site/templates/CategoryTemplate";
import { ConcernTemplate } from "@/components/site/templates/ConcernTemplate";
import { AreaTemplate } from "@/components/site/templates/AreaTemplate";
import { PostTemplate } from "@/components/site/templates/PostTemplate";

export type SlugParams = { params: Promise<{ slug: string }> };
type Route = { slug: string; lang: Lang };

/* Treatments: category overview or single service */
export const treatmentParams = () => [...categories.map((c) => ({ slug: c.key })), ...services.map((s) => ({ slug: s.slug }))];

export function treatmentMeta(slug: string, lang: Lang) {
  const cat = categories.find((c) => c.key === slug);
  if (cat) {
    const c = localizeCategory(cat, lang);
    const full = lang === "es" ? `${c.name} en Logan Square, Chicago | Olivo Med Spa` : `${c.name} in Logan Square, Chicago | Olivo Med Spa`;
    const title = full.length <= 60 ? full : full.replace(", Chicago", "");
    const description = lang === "es"
      ? `${c.line} ${c.name} con un equipo dirigido por una médica en Olivo Med Spa, Logan Square, Chicago.`
      : `${c.line} Physician-led ${c.name.toLowerCase()} at Olivo Med Spa in Logan Square, Chicago.`;
    return buildMeta({ title, description: description.slice(0, 158), path: `/treatments/${slug}`, lang });
  }
  const raw = getService(slug);
  if (!raw) return {};
  const s = localizeService(raw, lang);
  return buildMeta({ title: s.seo.title, description: s.seo.description, path: `/treatments/${slug}`, lang });
}

export function TreatmentRoute({ slug, lang }: Route) {
  const cat = categories.find((c) => c.key === (slug as CategoryKey));
  if (cat) return <CategoryTemplate c={cat} lang={lang} />;
  const s = getService(slug);
  if (!s) notFound();
  return <ServiceTemplate s={s} lang={lang} />;
}

/* Concerns */
export const concernParams = () => concerns.map((c) => ({ slug: c.slug }));
export function concernMeta(slug: string, lang: Lang) {
  const raw = concerns.find((x) => x.slug === slug);
  if (!raw) return {};
  const c = localizeConcern(raw, lang);
  return buildMeta({ title: c.seo.title, description: c.seo.description, path: `/concerns/${slug}`, lang });
}
export function ConcernRoute({ slug, lang }: Route) {
  const c = concerns.find((x) => x.slug === slug);
  if (!c) notFound();
  return <ConcernTemplate c={c} lang={lang} />;
}

/* Neighborhood pages */
export const areaParams = () => areas.map((a) => ({ slug: a.slug }));
export function areaMeta(slug: string, lang: Lang) {
  const raw = areas.find((x) => x.slug === slug);
  if (!raw) return {};
  const a = localizeArea(raw, lang);
  return buildMeta({ title: a.seo.title, description: a.seo.description, path: `/med-spa/${slug}`, lang });
}
export function AreaRoute({ slug, lang }: Route) {
  const a = areas.find((x) => x.slug === slug);
  if (!a) notFound();
  return <AreaTemplate a={a} lang={lang} />;
}

/* Journal */
export const postParams = () => posts.map((p) => ({ slug: p.slug }));
export function postMeta(slug: string, lang: Lang) {
  const raw = posts.find((x) => x.slug === slug);
  if (!raw) return {};
  const p = localizePost(raw, lang);
  return buildMeta({ title: p.seo.title, description: p.seo.description, path: `/blog/${slug}`, lang, type: "article" });
}
export function PostRoute({ slug, lang }: Route) {
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return <PostTemplate p={p} lang={lang} />;
}
