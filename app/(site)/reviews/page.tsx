import { Testimonials } from "@/components/site/home/HomeSections";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { site } from "@/content/site";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({ title: "Patient Reviews | Olivo Med Spa, Logan Square Chicago", description: "What patients say about Olivo Med Spa in Logan Square, Chicago, and where to read every review on Google.", path: "/reviews" });

export default function Reviews() {
  return (
    <>
      <section className="pt-12 md:pt-20"><div className="container-x"><Crumbs items={[{ name: "Home", href: "/" }, { name: "Reviews" }]} /><h1 className="section-title mt-8 balance">Reviews</h1><p className="lede mt-3 max-w-[52ch]">A few in their own words below. Every public review lives on <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">Google</a>, where we cannot edit them.</p></div></section>
      <Testimonials />
      <CtaBand title="Come form your own opinion." />
    </>
  );
}
