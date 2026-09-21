import Link from "next/link";
import { concerns } from "@/content/concerns";
import { Photo } from "@/components/site/Photo";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { Stagger } from "@/components/site/Motion";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Treatments by Concern | Olivo Med Spa, Logan Square", description: "Start with what you would like to change. Lines, volume, sagging, stubborn fat, sweat, texture, pigment, hair, and more, matched to treatments at Olivo Med Spa in Chicago.", path: "/concerns" });

export default function Concerns() {
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Concerns" }]} />
        <p className="kicker mt-8">By concern</p>
        <h1 className="section-title mt-3 balance">Start with what you would like to change.</h1>
        <p className="lede mt-4 max-w-[52ch]">Sixteen common reasons people come in, each with the treatments the clinic reaches for and why. Or <Link href="/quiz" className="link-arrow">take the quiz</Link>.</p>
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" amount={0.04}>
          {concerns.map((c) => (<li key={c.slug}><Link href={`/concerns/${c.slug}`} className="group card card-link lift flex h-full flex-col overflow-hidden"><Photo slot={c.image.slot} fallback={c.image.fallback} alt={c.image.alt} className="aspect-[4/3]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.05]" sizes="(min-width: 64rem) 25vw, (min-width: 40rem) 50vw, 100vw" /><div className="flex flex-1 flex-col p-5"><h2 className="font-display text-[1.4rem] leading-tight">{c.name}</h2><p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-ink-2">{c.summary}</p><span className="link-arrow mt-3 text-[0.8125rem]">See treatments <Arrow /></span></div></Link></li>))}
        </Stagger>
      </div></section>
      <CtaBand />
    </>
  );
}
