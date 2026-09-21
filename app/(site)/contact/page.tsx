import { site } from "@/content/site";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { VisitBlock } from "@/components/site/home/HomeSections2";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Phone } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Contact Olivo Med Spa | Text, Call, or Book Online", description: "Text or call Olivo Med Spa at 872-315-3481, book online through Vagaro, or visit 2550 W. Fullerton Ave in Logan Square, Chicago.", path: "/contact" });

export default function Contact() {
  const sms = "Hi Olivo, I have a question about a treatment.";
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />
        <h1 className="section-title mt-8 balance">Text us. It is the fastest way to reach the clinic.</h1>
        <p className="lede mt-3 max-w-[52ch]">Send a text with what you are thinking about and the team will reply during clinic hours. Or book straight into the calendar.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a href={site.sms(sms)} className="card lift p-7"><p className="kicker">Text now</p><p className="font-display mt-2 text-[1.75rem]">{site.phoneDisplay}</p><p className="mt-2 text-[0.9375rem] text-ink-2">Opens your messages with a note already written.</p><Verify note={site.smsVerify} /></a>
          <a href={site.phoneTel} className="card lift p-7"><p className="kicker">Call</p><p className="font-display mt-2 inline-flex items-center gap-3 text-[1.75rem]"><Phone className="h-5 w-5 text-accent-text" />{site.phoneDisplay}</p><p className="mt-2 text-[0.9375rem] text-ink-2">Mon to Fri 10 to 7, Sat 10 to 5.</p></a>
          <a href={site.booking} target="_blank" rel="noopener noreferrer" className="card lift p-7 !border-accent"><p className="kicker">Book online</p><p className="font-display mt-2 text-[1.75rem]">Vagaro, any time</p><p className="mt-2 text-[0.9375rem] text-ink-2">Pick a consultation or a treatment and a time that suits you.</p></a>
        </div>
      </div></section>
      <VisitBlock />
      <CtaBand sms={sms} />
    </>
  );
}
