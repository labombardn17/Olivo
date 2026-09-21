import { VisitBlock } from "@/components/site/home/HomeSections2";
import { Crumbs, CtaBand, FaqList } from "@/components/site/Blocks";
import { faq } from "@/content/featured";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({ title: "Visit Olivo Med Spa | 2550 W Fullerton Ave, Logan Square", description: "Olivo Med Spa is at 2550 W. Fullerton Ave, Chicago, IL 60618 in Logan Square. Hours, parking, transit, directions, and how to book or text the clinic.", path: "/visit" });

export default function Visit() {
  return (
    <>
      <section className="pt-12 md:pt-20"><div className="container-x"><Crumbs items={[{ name: "Home", href: "/" }, { name: "Visit" }]} /><h1 className="section-title mt-8">Visit and contact</h1></div></section>
      <VisitBlock />
      <FaqList faqs={faq} />
      <CtaBand />
    </>
  );
}
