// Blog posts. Educational tone, no outcomes promised, no figures.
// Anything a physician should approve is listed in `verify`.
// See docs/CONTENT-RULES.md before editing.
import type { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "when-moisturizer-is-not-enough",
    title: "When Moisturizer Is Not Enough",
    date: "2026-08-04",
    readMinutes: 3,
    excerpt: "Skin changes in ways a cream cannot reach. Here is how to tell when it is time for a facial, a peel, or resurfacing instead of another product.",
    sections: [
      { h: "What changes as skin ages", p: [
        "In your twenties the skin replaces its outer layer roughly every month. That cycle slows over time, so dead cells stay on the surface longer and the skin looks less bright. Beneath that, the body makes less collagen and elastin each year, and the fat pads that give the face its shape begin to thin. Sun exposure speeds all of it up.",
        "Moisturizer does one job well: it holds water in the outer layer and keeps the barrier comfortable. That matters. It does not speed turnover, rebuild collagen, or remove pigment that has already settled in. When the problem is below the surface, a product that works on the surface will only get you so far.",
      ] },
      { h: "When a facial makes sense", p: [
        "If your skin looks dull, feels rough, or has congestion, a professional facial is the right first step. Hydrafacial and DiamondGlow exfoliate, extract, and infuse hydration in a single visit with no downtime. Dermaplaning removes the surface layer and fine hair so products absorb better. These are maintenance treatments, and they work well on a four to six week rhythm.",
      ] },
      { h: "When a peel or resurfacing makes sense", p: [
        "Peels go a step further. A medical-grade chemical peel removes the surface in a controlled way and signals the skin to renew, which helps with uneven tone, fine texture, and mild sun damage. Expect some flaking for a few days after the stronger versions, and plan around it.",
        "Resurfacing is for change that a peel cannot reach: etched lines, acne scars, deeper sun damage, and crepey texture. Treatments such as Opus Plasma, RF microneedling, and fractional laser create a controlled injury so the skin rebuilds with new collagen. Downtime ranges from a couple of days to about a week, and a series is common.",
      ] },
      { h: "How to decide", p: [
        "The honest answer is that most people benefit from a home routine and periodic in-office care together. At Olivo Med Spa, Dr. Olivo looks at your skin in person, asks what has changed and what bothers you, and recommends the lightest treatment that will actually make a difference. Sometimes that is a better product from ZO Skin Health or Skinbetter Science. Sometimes it is a peel series. Candidacy and expectations are set at the consultation, not in a blog post.",
      ] },
    ],
    related: ["hydrafacial", "pca-chemical-peels", "opus-plasma"],
    seo: { title: "When Moisturizer Is Not Enough | Olivo Med Spa", description: "How skin changes with age and when a facial, peel, or resurfacing makes more sense than another product. From the team at Olivo Med Spa, Logan Square, Chicago." },
    verify: ["Turnover cycle length and slowing with age: physician to approve", "Downtime ranges for peels and resurfacing: physician to approve"],
  },
  {
    slug: "wrinkle-relaxers-explained",
    title: "Wrinkle Relaxers Explained: Botox Cosmetic and Xeomin",
    date: "2026-08-18",
    readMinutes: 4,
    excerpt: "How Botox Cosmetic and Xeomin work, what a first visit is like, and how long people typically wait between visits.",
    sections: [
      { h: "How they work", p: [
        "Botox Cosmetic and Xeomin are both forms of botulinum toxin type A. Injected in small amounts into a specific muscle, they block the signal that tells that muscle to contract. The muscle relaxes, the skin over it stops folding, and the line it was creating softens. Lines that appear only with expression respond most. Lines etched into skin at rest soften more gradually and may need other treatments alongside.",
        "The two products are closely related. Xeomin is a purified form without the accessory proteins found in Botox Cosmetic, which some clinicians and patients prefer. In practice, Dr. Olivo chooses between them based on your history, the area, and what has worked for you before.",
      ] },
      { h: "What a first visit is like", p: [
        "You start with a conversation. Dr. Olivo asks what bothers you, watches your face move, and explains what a relaxer can and cannot do for those lines. She reviews your medical history and medications. If you are a candidate, treatment usually happens the same day.",
        "The injections themselves take about ten to fifteen minutes. The needle is very fine and most people describe a quick pinch. Numbing is not needed for most areas. You may have small bumps at the injection sites that settle within the hour, and you can go back to work afterward.",
      ] },
      { h: "What happens next", p: [
        "Nothing changes immediately. The relaxer takes a few days to begin working and the full effect settles in over about two weeks. Dr. Olivo often schedules a brief follow-up around then to check symmetry and make small adjustments if needed.",
        "The effect wears off gradually as the muscle regains its signal. Most people return typically every three to four months. Some go longer, especially after several consistent treatments. Your interval is something you and Dr. Olivo work out over time, not a fixed rule.",
      ] },
      { h: "Aftercare in plain terms", p: [
        "For the rest of the day, stay upright for a few hours, skip strenuous exercise, and avoid rubbing or massaging the treated area. Makeup can go on after a short wait. Bruising is possible but uncommon, and if it happens it fades like any small bruise. Individual results vary, and the right dose for you is set at your consultation.",
      ] },
    ],
    related: ["botox-and-xeomin", "dermal-fillers", "emface"],
    seo: { title: "Wrinkle Relaxers Explained | Olivo Med Spa", description: "How Botox Cosmetic and Xeomin work, what a first visit involves, and how often people return. Dr. Olivo's physician-led clinic in Logan Square, Chicago." },
    verify: ["'Typically every three to four months' interval: physician to approve", "Onset in a few days and full effect at about two weeks: physician to approve", "Xeomin accessory protein statement: confirm against Merz labeling", "Aftercare instructions: physician to approve"],
  },
  {
    slug: "emsculpt-neo-what-to-expect",
    title: "Emsculpt Neo: What to Expect at Your First Session",
    date: "2026-08-27",
    readMinutes: 3,
    excerpt: "A plain walkthrough of a first Emsculpt Neo session, from the consultation to the drive home.",
    sections: [
      { h: "Before you arrive", p: [
        "Your consultation comes first. Dr. Olivo confirms the area, checks for anything that rules the treatment out, such as metal implants near the site or pregnancy, and maps out a series. On the day, eat normally, drink water, and wear comfortable clothes. There is nothing to shave or prepare, and you do not need to fast.",
      ] },
      { h: "In the room", p: [
        "You lie on the treatment table and the applicator is strapped over the area, usually the abdomen, buttocks, arms, thighs, or calves. The session starts low. You feel warmth from the radiofrequency first, then the electromagnetic pulses begin contracting the muscle. The rhythm alternates between contractions and a tapping phase that helps clear what the muscle releases.",
        "Intensity is raised gradually through the session based on what you can comfortably hold. It feels like an intense workout you are not doing yourself. You can talk, listen to music, or watch the timer. The team stays in the room for the first few minutes to check the fit of the applicator and the intensity. The whole thing is about thirty minutes.",
      ] },
      { h: "Afterward", p: [
        "You get up, get dressed, and go. There is no downtime. Some people feel warm in the area for a short while and mild muscle soreness the next day, similar to a hard training session. You can drive, work, and exercise as usual. Drink water through the day; some people find it helps with next-day soreness.",
        "A standard series is four sessions spaced five to ten days apart. Because the body clears treated fat and builds muscle over weeks, the change is gradual rather than same-day. Dr. Olivo schedules a check-in after the series and discusses maintenance through the Emsculpt NEO Club if it suits you.",
      ] },
      { h: "Who it is for", p: [
        "Emsculpt Neo suits people who are already near their goal and want more definition in a specific area. It is not a weight loss treatment. Metal or electronic implants near the treatment area, pregnancy, and some medical conditions rule it out, which is why the history comes first. If weight is the main concern, Dr. Olivo may talk about medical weight management first and body contouring later. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["emsculpt-neo", "exion-body", "emsella"],
    seo: { title: "Emsculpt Neo: What to Expect | Olivo Med Spa", description: "What a first Emsculpt Neo session is like at Olivo Med Spa in Logan Square, Chicago: preparation, what it feels like, aftercare, and how a series is planned." },
    verify: ["Contraindications named (metal implants, pregnancy): confirm against BTL guidance", "Four sessions five to ten days apart: confirm BTL protocol", "Tapping phase description: confirm against BTL device description"],
  },
  {
    slug: "sweating-through-shirts-miradry-vs-other-options",
    title: "Sweating Through Shirts: Miradry vs. Other Options",
    date: "2026-09-03",
    readMinutes: 4,
    excerpt: "Clinical-strength antiperspirant, injections, and Miradry compared in plain terms, so you can decide what to ask about.",
    sections: [
      { h: "Why some people sweat more", p: [
        "Sweating is how the body cools itself. In some people the sweat glands under the arms respond far more than cooling requires, a condition called hyperhidrosis. Heat, stress, caffeine, and hormones all turn it up. It is common, it is not a hygiene problem, and there are real options beyond a stronger deodorant. Some people have sweated heavily since adolescence. Others notice it starting later, sometimes alongside a change in hormones or medication. Either way, a physician should hear the history before anything is recommended.",
      ] },
      { h: "Clinical-strength antiperspirant", p: [
        "Over-the-counter clinical-strength products and prescription antiperspirants use aluminum salts to plug the sweat ducts temporarily. Applied at night to dry skin and washed off in the morning, they work reasonably well for mild cases. The downsides are irritation, staining, and the fact that they must be reapplied constantly. If they are working for you, there is no reason to change.",
      ] },
      { h: "Injections", p: [
        "Botulinum toxin injections, the same family as Botox Cosmetic and Xeomin, can be placed in a grid across each underarm to block the nerve signal to the sweat glands. The visit is short and the effect lasts several months, after which it is repeated. Bruising and mild tenderness at the injection sites are the usual side effects. It is a reasonable middle option for people who want proof of concept before committing to a device, or who prefer not to have a device treatment at all.",
      ] },
      { h: "Miradry", p: [
        "Miradry uses microwave energy delivered through a handpiece to the layer of skin where the sweat and odor glands sit. The glands are disabled and do not regenerate, so the change lasts. The underarm is numbed first, the treatment takes about an hour, and swelling and tenderness for several days afterward are normal. Many people are satisfied after one session and some choose a second.",
        "The trade-off is a more involved appointment and a larger upfront commitment in exchange for a result that does not need repeating every few months. Miradry treats the underarms only. Sweating on the palms, feet, or scalp calls for a different plan. Dr. Olivo reviews what you have tried and where you sweat. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["miradry", "botox-and-xeomin"],
    seo: { title: "Miradry vs. Other Sweat Options | Olivo Med Spa", description: "Clinical-strength antiperspirant, injections, and Miradry compared in plain terms by the physician-led team at Olivo Med Spa in Logan Square, Chicago." },
    verify: ["Aluminum salt mechanism and nighttime application: physician to approve", "Duration of injection effect for sweating: physician to approve", "Miradry procedure length, numbing, and recovery: confirm with Miradry materials", "Injection side effects for sweating: physician to approve", "Glands do not regenerate: confirm with Miradry materials"],
  },
  {
    slug: "hydrafacial-for-acne-prone-skin",
    title: "Hydrafacial for Acne-Prone Skin",
    date: "2026-09-10",
    readMinutes: 3,
    excerpt: "Why clearing pores and hydrating at the same time helps acne-prone skin, and what to avoid the week before your appointment.",
    sections: [
      { h: "Why acne-prone skin needs both extraction and hydration", p: [
        "Acne starts in a clogged pore. Oil and dead skin build up, bacteria multiply, and inflammation follows. The instinct is to dry everything out, but stripped skin often responds by producing more oil and becoming more reactive. Acne-prone skin usually needs two things at once: pores cleared and the barrier kept calm and hydrated.",
      ] },
      { h: "What Hydrafacial does", p: [
        "Hydrafacial uses a spiral tip with gentle suction to exfoliate, loosen debris, and lift it out of the pores while delivering a serum at the same time. There are no manual extractions with fingers or tools unless the esthetician decides a spot needs it. Boosters can be added for congestion or redness. The whole treatment takes about thirty minutes and nothing about it should hurt.",
        "Because it cleans and hydrates in one pass, Hydrafacial is one of the few in-office treatments that suits skin in the middle of a breakout. It is not a fix for cystic acne on its own, and Dr. Olivo may add a peel series, Laser Genesis, or prescription care to the plan when the pattern calls for it.",
      ] },
      { h: "What to avoid the week before", p: [
        "Stop retinoids and exfoliating acids a few days ahead, unless Dr. Olivo tells you otherwise. Skip waxing, dermaplaning, and laser hair removal on the face for the week. Avoid sunburn. If you use isotretinoin or have used it recently, say so, because it changes how your skin heals and what can be done that day. Tell the team about any new prescription, including oral antibiotics, so the serums can be matched to it.",
        "On the day, come with a clean face if you can, and bring a list of what you use at home. The esthetician adjusts the tip and serums to your skin, not a preset.",
      ] },
      { h: "Afterward", p: [
        "Most people leave with skin that looks clearer and feels hydrated. Mild redness fades within a few hours. Hold off on makeup for the rest of the day if you can, and restart actives after a couple of days. On a four to six week schedule, and with the right home routine, Hydrafacial fits into a longer plan for keeping breakouts quiet. Sunscreen every morning is part of that plan. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["hydrafacial", "pca-chemical-peels", "laser-genesis"],
    seo: { title: "Hydrafacial for Acne-Prone Skin | Olivo Med Spa", description: "Why Hydrafacial suits acne-prone skin, what the treatment does, and what to avoid the week before. From the team at Olivo Med Spa in Logan Square, Chicago." },
    verify: ["Pre-treatment hold on retinoids and acids, and isotretinoin caution: physician to approve", "Stripped skin producing more oil: physician to approve general statement", "Post-treatment restart of actives: physician to approve", "Hydrafacial duration and comfort statement: physician to approve"],
  },
  {
    slug: "a-first-visit-to-olivo",
    title: "A First Visit to Olivo: What to Expect",
    date: "2026-09-17",
    readMinutes: 4,
    excerpt: "Booking through Vagaro, getting to Fullerton Avenue, what a physician-led consultation covers, and how financing and memberships work.",
    sections: [
      { h: "Booking", p: [
        "Appointments are booked through Vagaro, online or by calling 872-315-3481. The clinic is open Monday to Friday from 10 AM to 7 PM and Saturday from 10 AM to 5 PM, and closed Sunday. If you are not sure which treatment to book, choose a consultation. That is the point of the first visit, and there is no pressure to decide anything in advance. A consultation is also the right choice if you are combining a medical service with an aesthetic one.",
      ] },
      { h: "Getting here", p: [
        "Olivo Med Spa is at 2550 W. Fullerton Ave in Logan Square, near Fullerton and Rockwell. Street parking is available on Fullerton and nearby side streets. By transit, the California Blue Line stop is a short walk and the 74 Fullerton bus stops close to the door. If you are driving from downtown or the North Side, the Kennedy Expressway's Fullerton exit is the usual route.",
      ] },
      { h: "What a consultation covers", p: [
        "This is a physician-led clinic, and the consultation reflects that. Dr. Olivo or a member of her team takes a medical history: medications, allergies, past procedures, and anything that would change the plan. Then you talk about what you actually want to change. Not the treatment you read about, the thing that bothers you when you look in the mirror.",
        "From there you get a direct assessment of which options fit, what each involves, how many sessions, what downtime looks like, and what a realistic expectation is. Some treatments can begin the same day. Others, such as hormone therapy or weight management, start with lab work. You are never obligated to book anything on the spot.",
      ] },
      { h: "Cost, financing, and memberships", p: [
        "Pricing is discussed at the consultation because it depends on your plan. Financing available through Cherry. Terms are set by Cherry at application. For ongoing care, memberships such as Skin Club and Emsculpt NEO Club structure a series or a maintenance rhythm, and the team can explain whether one fits what you are planning.",
        "Bring a list of your skincare products and any questions you have written down. Wear something that gives easy access to the area you want to discuss. And expect to be spoken to like an adult who owns their own decisions. Candidacy and expectations are set at the consultation, and every plan is personal.",
      ] },
    ],
    related: ["hydrafacial", "botox-and-xeomin", "emsculpt-neo"],
    seo: { title: "A First Visit to Olivo Med Spa | Olivo Med Spa", description: "What to expect at a first visit to Olivo Med Spa in Logan Square, Chicago: Vagaro booking, hours, parking, the consultation, and Cherry financing." },
    verify: ["Street parking availability: client to confirm", "74 Fullerton bus stop location: confirm", "Kennedy Fullerton exit routing: confirm", "Membership terms: to be supplied by the clinic"],
  },
];
