import Link from "next/link";
import { HomeHero, heroEs } from "@/components/site/home/HomeHero";
import { DeviceMarquee } from "@/components/site/home/HomeSections";
import { Stagger } from "@/components/site/Motion";
import { Photo } from "@/components/site/Photo";
import { services, flagship } from "@/content/services";
import { categories, site } from "@/content/site";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Arrow, Phone } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Olivo Med Spa | Med spa en Logan Square, Chicago", description: "Dirigido por una médica desde 2013. Emsculpt Neo, Emface, Exion, Opus Plasma, Miradry, inyectables e Hydrafacial en Logan Square, Chicago. Atención en español.", path: "/es", languages: { en: "/", es: "/es", "x-default": "/" } });

const catEs: Record<string, string> = { "body-contouring": "Contorno corporal", "facial-lifting": "Lifting facial", injectables: "Inyectables", "skin-resurfacing": "Rejuvenecimiento de la piel", "laser-and-light": "Láser y luz", "facials-and-peels": "Faciales y peelings", sweat: "Sudoración axilar", wellness: "Bienestar", removals: "Eliminaciones" };

export default function Es() {
  const withEs = services.filter((s) => s.es);
  return (
    <>
      <HomeHero copy={heroEs} />
      <DeviceMarquee />
      <section id="tratamientos" className="py-20 md:py-28"><div className="container-x">
        <div className="mx-auto max-w-2xl text-center"><p className="kicker">Tratamientos</p><h2 className="section-title mt-3 balance">¿En qué podemos ayudarte?</h2><p className="section-sub mx-auto mt-4">Cada plan comienza con una consulta, y cada tratamiento se ajusta a ti, no a un menú. Atendemos en español.<Verify note="Spanish-language care: clinic to confirm who provides it" /></p></div>
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{categories.map((c) => (<li key={c.key}><Link href={`/treatments/${c.key}`} className="group card card-link lift relative block h-[18rem] overflow-hidden"><Photo slot={c.slot} fallback={c.fallback} className="absolute inset-0 h-full" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.05]" sizes="(min-width: 64rem) 33vw, 100vw" /><div className="absolute inset-0 scrim-up" /><div className="absolute inset-x-0 bottom-0 p-6 text-[#fff]"><h3 className="font-display text-[1.6rem]">{catEs[c.key]}</h3><span className="link-arrow mt-2 !text-[#fff] text-[0.875rem]">Ver <Arrow /></span></div></Link></li>))}</Stagger>
      </div></section>
      <section className="bg-ground-2 py-20"><div className="container-x"><p className="kicker">Tecnología</p><h2 className="section-title mt-3 balance">Las plataformas completas de BTL y Alma, bajo un mismo techo</h2><ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{flagship().map((s) => (<li key={s.slug}><Link href={`/treatments/${s.slug}`} className="card card-link lift block p-5"><h3 className="font-display text-[1.35rem]">{s.es?.name ?? s.name}</h3><p className="mt-1.5 text-[0.9rem] text-ink-2">{s.es?.summary ?? s.summary}</p></Link></li>))}</ul><p className="mt-6 text-[0.9375rem] text-ink-2">{withEs.length} tratamientos en total. <Link href="/es/tratamientos" className="link-arrow">Ver todos los tratamientos en español <Arrow /></Link></p></div></section>
      <section className="py-20"><div className="container-x grid gap-10 md:grid-cols-2"><div><p className="kicker">La Dra. Olivo</p><h2 className="section-title mt-3">Propiedad de una médica. Dirigido por una médica.</h2><p className="prose mt-2"><span>La Dra. Jacqueline Olivo se formó en medicina familiar y ejerce desde 2007. Abrió Olivo Med Spa en 2013 y sigue siendo su directora médica: elige la tecnología, se capacita en ella y escribe los planes de tratamiento.</span></p><Link href="/team/jacqueline-olivo-md" className="btn btn-outline mt-6">Conócela</Link></div><div className="card p-7"><p className="kicker">Visítanos</p><p className="mt-3 text-[1.0625rem]">{site.address.line1}<br />{site.address.city}, {site.address.state} {site.address.zip}</p><p className="mt-3 text-ink-2">Lun a vie 10 AM a 7 PM · Sáb 10 AM a 5 PM · Dom cerrado</p><div className="mt-6 flex flex-col gap-3"><a href={site.booking} className="btn btn-primary">Reservar una consulta</a><a href={site.sms("Hola Olivo, quisiera reservar una consulta.")} className="btn btn-outline">Escríbenos por texto</a><a href={site.phoneTel} className="btn btn-outline"><Phone />Llamar al {site.phoneDisplay}</a></div></div></div></section>
    </>
  );
}
