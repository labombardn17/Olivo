import Link from "next/link";
import { giftCards } from "@/content/patients";
import { site } from "@/content/site";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Crumbs, CtaBand, Steps } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";

export const metadata = buildMeta({ title: "Gift Cards | Olivo Med Spa, Logan Square Chicago", description: "Give a treatment or skincare at Olivo Med Spa in Logan Square, Chicago. Gift cards are available in the clinic and online and can be used on any treatment or product.", path: "/gift-cards" });

export default function GiftCards() {
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "Gift cards" }]} /><p className="kicker mt-6">Gift cards</p><h1 className="display-xl mt-3 balance">Give them the visit, not the guesswork.</h1><p className="lede mt-5 max-w-[50ch]">{giftCards.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.booking} className="btn btn-primary">Buy through the booking site</a><a href={site.sms("Hi Olivo, I would like to buy a gift card.")} className="btn btn-outline">Text us to arrange one</a></div><Verify note={giftCards.verify} /></div>
        <Photo slot="skincare" fallback="light-1" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
      </div></section>
      <section className="py-20 md:py-24"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><Steps title="How it works" steps={giftCards.how} /></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Good to know</h2><ul className="mt-8 space-y-3 text-[1.0625rem] text-ink-2">{giftCards.notes.map((n) => <li key={n} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{n}</li>)}</ul><p className="mt-8 text-[0.9375rem] text-ink-2">Not sure what they would like? Point them at the <Link href="/quiz" className="link-arrow">two-minute quiz</Link> or a <Link href="/treatments" className="link-arrow">treatment page</Link>.</p></Reveal>
      </div></section>
      <CtaBand title="Ask us to set one up." sms="Hi Olivo, I would like to buy a gift card." />
    </>
  );
}
