import Link from "next/link";
import { site } from "@/content/site";
import { Crumbs } from "@/components/site/Blocks";
import { BookingWidget } from "@/components/site/BookingWidget";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Phone } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Book a Consultation or Treatment | Olivo Med Spa, Chicago", description: "Book online at Olivo Med Spa in Logan Square, Chicago. Pick a consultation or treatment and a time, or text 872-315-3481 and the team will book it for you.", path: "/book" });

export default function Book() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-x">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Book" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <div>
            <p className="kicker">Book online</p>
            <h1 className="section-title mt-3 balance">Pick a time. We will take it from there.</h1>
            <p className="lede mt-4">New here? Choose a consultation. Already have a plan? Book the treatment directly. The calendar is live and confirms by text or email.</p>
            <ul className="mt-6 space-y-2 text-[0.9375rem] text-ink-2">
              <li>Mon to Fri 10 AM to 7 PM, Sat 10 AM to 5 PM</li>
              <li>2550 W. Fullerton Ave, Logan Square</li>
              <li>Financing available through Cherry. Terms are set by Cherry at application.</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <a href={site.sms("Hi Olivo, I would like to book a consultation.")} className="btn btn-outline">Prefer to text? Text us</a>
              <a href={site.phoneTel} className="btn btn-outline"><Phone />Call {site.phoneDisplay}</a>
              <a href={site.bookingExternal} target="_blank" rel="noopener noreferrer" className="link-arrow text-[0.875rem]">Open the booking page on Vagaro instead</a>
            </div>
            <p className="mt-6 text-[0.8125rem] text-ink-2">Not sure what to book? <Link href="/quiz" className="link-arrow">Take the two-minute quiz</Link> first.</p>
            <Verify note={site.bookingVerify} />
          </div>
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
