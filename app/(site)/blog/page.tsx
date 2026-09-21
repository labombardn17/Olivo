import Link from "next/link";
import { posts } from "@/content/blog";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { Stagger } from "@/components/site/Motion";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Journal | Skin, Body, and Wellness Notes | Olivo Med Spa", description: "Plain-language notes from the physician-led team at Olivo Med Spa in Logan Square, Chicago: what treatments do, what a first visit is like, and how to prepare.", path: "/blog" });

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Journal" }]} />
        <p className="kicker mt-8">Journal</p>
        <h1 className="section-title mt-3 balance">Notes from the clinic, in plain words.</h1>
        <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (<li key={p.slug}><Link href={`/blog/${p.slug}`} className="card card-link lift flex h-full flex-col p-7"><p className="kicker">{new Date(p.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {p.readMinutes} min</p><h2 className="font-display mt-3 text-[1.6rem] leading-tight">{p.title}</h2><p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{p.excerpt}</p><span className="link-arrow mt-5 text-[0.875rem]">Read <Arrow /></span></Link></li>))}
        </Stagger>
      </div></section>
      <CtaBand />
    </>
  );
}
