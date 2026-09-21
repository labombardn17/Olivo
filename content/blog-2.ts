// Additional blog posts, dated before those in blog.ts. Educational tone,
// no outcomes promised, no figures. Anything a physician should approve is
// listed in `verify`. See docs/CONTENT-RULES.md before editing.
import type { Post } from "./types";

export const postsMore: Post[] = [
  {
    slug: "emsculpt-neo-vs-exion-which-body-treatment",
    title: "Emsculpt Neo vs. Exion: Which Body Treatment?",
    date: "2026-06-10",
    readMinutes: 4,
    excerpt: "Emsculpt Neo works on muscle and fat. Exion for body works on skin. How Dr. Olivo decides between them, and when she plans both in sequence.",
    sections: [
      { h: "Two different jobs", p: [
        "Emsculpt Neo and Exion both treat the body, and people often ask which one they should book. The short answer is that they do different jobs. Emsculpt Neo works on what sits under the skin: the muscle and the fat layer over it. Exion for body works on the skin itself, the layer that can look loose or crepey even when the shape underneath is fine. Once you know which problem you are describing, the choice is usually clear. Sometimes the answer is both, in a planned order.",
      ] },
      { h: "When the concern is muscle and fat", p: [
        "Emsculpt Neo combines radiofrequency heating with high-intensity electromagnetic energy in a single applicator. The heat is delivered to the fat layer while the electromagnetic pulses contract the muscle beneath it, far more times than you could manage in a workout. The usual areas are the abdomen, buttocks, arms, thighs, and calves. Dr. Olivo reaches for it when someone describes a soft midsection that will not respond to training, a flat seat, or arms and thighs that lack definition. A series is four sessions spaced about a week apart, and there is no downtime.",
      ] },
      { h: "When the concern is skin", p: [
        "Exion for body uses radiofrequency and targeted ultrasound to heat the deeper layers of the skin, where the body responds by producing new collagen and elastin over the following weeks. It does not contract muscle and it is not designed to reduce fat. Dr. Olivo reaches for it when the issue is laxity: loose skin on the abdomen after pregnancy or weight change, crepey texture on the arms and above the knees, or softness at the neck and jawline. Sessions feel like a warm massage and are typically done in a series of four spaced a week or so apart. There is no downtime.",
      ] },
      { h: "When both are used in sequence", p: [
        "Many people describe both problems at once: a stomach that is both soft and loose. In that case Dr. Olivo usually plans Emsculpt Neo first, so the fat and muscle work is done, and Exion afterward to address the skin over the new shape. The two are not run on the same area on the same day. Spacing them lets each series do its work and lets her see how the tissue responds before adding the next step.",
        "Which device, in what order, and how many sessions is settled at the consultation after a physical assessment of the area. Neither treatment is a substitute for weight loss, and if weight is the main concern that conversation comes first. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["emsculpt-neo", "exion-body", "glp-1-weight-management"],
    seo: { title: "Emsculpt Neo vs. Exion for Body | Olivo Med Spa", description: "How Olivo Med Spa in Logan Square, Chicago decides between Emsculpt Neo for muscle and fat and Exion for skin tightening, and when both are used in sequence." },
    verify: ["Exion for body energy description (radiofrequency plus targeted ultrasound): confirm against BTL materials", "Series counts and spacing for both devices: confirm BTL protocols", "Sequencing Emsculpt Neo before Exion and not same day on the same area: physician to approve", "Collagen and elastin response statement: physician to approve"],
  },
  {
    slug: "opus-plasma-vs-co2-choosing-your-resurfacing-depth",
    title: "Opus Plasma vs. CO2: Choosing Your Resurfacing Depth",
    date: "2026-06-18",
    readMinutes: 4,
    excerpt: "Opus Plasma and the CO2 fractional laser sit at different points on the depth and downtime scale. What each is used for, and how the depth gets decided.",
    sections: [
      { h: "What resurfacing means", p: [
        "Resurfacing treatments remove or injure the outer layers of the skin in a controlled way so the body replaces them with fresher tissue and new collagen. The deeper the treatment goes, the more it can change, and the longer the skin takes to recover. Opus Plasma and the CO2 fractional laser are both resurfacing tools. They sit at different points on that depth and downtime scale, and the consultation is where the depth gets decided.",
      ] },
      { h: "Opus Plasma", p: [
        "Opus Plasma uses fractional plasma energy. Tiny metal pins on the handpiece are charged with radiofrequency, and when they come close to the skin the energy ionizes the air in the gap and creates small plasma channels in the surface. The depth is adjustable, from a light pass that mostly affects the surface to a deeper setting that reaches further into the dermis.",
        "Dr. Olivo uses it for fine lines, mild texture, uneven tone, early sun damage, and skin that looks tired rather than damaged. The face, neck, chest, and hands are common areas, and settings are adjusted for each. Recovery is usually a few days of redness and light peeling, and most people plan a series rather than one visit.",
      ] },
      { h: "CO2 fractional laser", p: [
        "The CO2 fractional laser goes deeper. It uses a carbon dioxide laser to vaporize narrow columns of tissue, leaving untouched skin between them to speed healing. Because it removes tissue and delivers more heat, it can address problems that a lighter treatment cannot: etched lines around the mouth and eyes, acne scarring, deeper sun damage, and crepey texture.",
        "The trade-off is downtime. Expect about a week of redness, swelling, and peeling, followed by pinkness that fades over several weeks. It is more often a single treatment than a series, and it calls for strict sun avoidance before and after.",
      ] },
      { h: "How the depth is chosen", p: [
        "Dr. Olivo looks at three things: what you want to change, how much downtime you can take, and your skin type and history. Lighter concerns and a busy calendar point to Opus Plasma. Deeper damage and a week you can set aside point to CO2. Darker skin tones need extra care with any heat-based treatment, and that shapes the settings or the choice itself. Some people do a CO2 treatment once and maintain with Opus Plasma later. Candidacy, depth, and the number of sessions are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["opus-plasma", "co2-fractional-laser", "erbium-resurfacing"],
    seo: { title: "Opus Plasma vs. CO2 Resurfacing | Olivo Med Spa", description: "Opus Plasma and CO2 fractional laser compared on depth, downtime, and what each is used for, from the physician-led team at Olivo Med Spa in Logan Square." },
    verify: ["Opus Plasma mechanism (charged pins, ionized air, plasma channels): confirm against Alma materials", "Opus Plasma recovery of a few days: physician to approve", "CO2 downtime of about a week and pinkness for several weeks: physician to approve", "Darker skin tone caution with heat-based resurfacing: physician to approve"],
  },
  {
    slug: "botox-cosmetic-vs-xeomin-what-is-actually-different",
    title: "Botox Cosmetic vs. Xeomin: What Is Actually Different",
    date: "2026-06-25",
    readMinutes: 4,
    excerpt: "Both are neuromodulators with the same active ingredient. What differs in the vial, why some clinicians care, and why the clinic carries both.",
    sections: [
      { h: "The same active ingredient", p: [
        "Botox Cosmetic and Xeomin are both neuromodulators. Each contains botulinum toxin type A, and each works the same way: injected in a small dose into a chosen muscle, it interrupts the nerve signal that makes that muscle contract. The muscle rests, and the line it was folding into the skin softens. Both are used for expression lines such as frown lines, and both wear off gradually over a few months as the nerve signal returns. If you have had one and not the other, the visit and the effect will feel familiar.",
      ] },
      { h: "What is different in the vial", p: [
        "The difference is in what surrounds the active molecule. Botox Cosmetic is made with the toxin bound to accessory proteins, which are a natural part of how the bacterium produces it. Xeomin is manufactured with those accessory proteins removed, so the vial contains the active neurotoxin on its own. The manufacturer describes this as a purified form. The other practical difference is storage: Xeomin can be kept at room temperature before it is mixed, while Botox Cosmetic is refrigerated. Neither difference is something you feel during treatment.",
      ] },
      { h: "Why some clinicians care about the proteins", p: [
        "The accessory proteins are the source of a long-running discussion. Some clinicians believe that a small number of patients form antibodies to those proteins over years of repeated treatment, and that this could make the product feel less effective for them over time. Others consider the effect rare enough that it does not change their practice. It is a reasonable topic to raise with your physician, especially if you have had treatments for many years and feel they are not lasting as long as they used to. Dr. Olivo will give you her view in person rather than in a blog post.",
      ] },
      { h: "Why the clinic carries both", p: [
        "Having both on the shelf means the choice can follow the patient instead of the inventory. Dr. Olivo may prefer one for a particular area, for someone who has had a good history with a specific product, or for someone who wants to try the alternative after years on the other. Units are not interchangeable one to one between neuromodulators, so dosing is planned per product rather than copied across.",
        "Whatever is chosen, the process is the same: a review of history and medications, a look at how your face moves, treatment the same day if you are a candidate, and a follow-up around two weeks later. Candidacy, product, and dose are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["botox-and-xeomin", "dermal-fillers", "emface"],
    seo: { title: "Botox Cosmetic vs. Xeomin | Olivo Med Spa", description: "Botox Cosmetic and Xeomin are both neuromodulators. What differs in the vial, why some clinicians care, and why Olivo Med Spa in Chicago carries both." },
    verify: ["Accessory protein and purified form description: confirm against Merz and Allergan labeling", "Xeomin room temperature storage before reconstitution: confirm against Merz labeling", "Antibody formation discussion: physician to approve wording", "Units not interchangeable between neuromodulators: physician to approve", "Areas of use: keep 'used for' language and confirm each product's labeled indications"],
  },
  {
    slug: "hydrafacial-vs-chemical-peel-which-one-this-month",
    title: "Hydrafacial vs. Chemical Peel: Which One This Month?",
    date: "2026-07-02",
    readMinutes: 3,
    excerpt: "One is a no-downtime maintenance treatment. The other asks for a few days of flaking in exchange for a bigger change. How to match them to your skin and your calendar.",
    sections: [
      { h: "Two tools for the same skin", p: [
        "Hydrafacial and chemical peels are both in-office treatments for the surface of the skin, and many people at Olivo Med Spa use both over the course of a year. They are not interchangeable. One is a hydrating, no-downtime maintenance treatment. The other is a controlled exfoliation that asks for a few days of flaking in exchange for a bigger change. Which one you book in a given month depends on what your skin is doing and what your calendar looks like.",
      ] },
      { h: "What each one does", p: [
        "Hydrafacial uses a spiral tip with gentle suction to exfoliate, clear pores, and deliver serums in one pass. Skin looks brighter and feels hydrated when you leave, and there is nothing to hide. It suits dull, congested, or dehydrated skin and works well on a four to six week rhythm.",
        "A PCA chemical peel applies a blend of acids to the skin for a set time to loosen the outer layer and prompt renewal underneath. Depending on the strength, the visible effect ranges from light flaking to several days of peeling. Peels are chosen for uneven tone, sun spots, breakout patterns, fine texture, and skin that a facial alone is not shifting.",
      ] },
      { h: "Matching the treatment to the calendar", p: [
        "If you have an event within the week, Hydrafacial is the easy choice. Book a peel when you have a stretch of ordinary days ahead: three to seven days without photos, travel, or heavy sun. Winter and early spring are popular peel seasons in Chicago because sun exposure is low and skin is often dull from indoor heat. Summer tends to favor Hydrafacial, since peeled skin and strong sun do not mix. Peels are often done in a series spaced about a month apart, and a Hydrafacial fits in between or on the off months.",
      ] },
      { h: "How the team decides", p: [
        "At the consultation, Dr. Olivo and the esthetician look at your skin, ask what has changed, and check what you are using at home, since retinoids and acids affect how a peel behaves. Some people alternate month to month. Others stay on Hydrafacial and add one or two peels a year. If you are on isotretinoin, have a cold sore history, or have recently had resurfacing, say so, because it changes the plan. The Skin Club memberships are built around this kind of rhythm and the team can explain whether one fits. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["hydrafacial", "pca-chemical-peels", "opus-plasma"],
    seo: { title: "Hydrafacial vs. Chemical Peel | Olivo Med Spa", description: "How Olivo Med Spa in Logan Square, Chicago matches Hydrafacial and PCA chemical peels to your skin goals and calendar, including downtime and timing." },
    verify: ["Peel downtime range and series spacing: physician to approve", "Seasonal guidance on peels and sun exposure: physician to approve", "Isotretinoin, cold sore history, and recent resurfacing as planning factors: physician to approve", "Hydrafacial four to six week rhythm: physician to approve"],
  },
  {
    slug: "laser-hair-removal-how-to-prepare-and-what-to-expect",
    title: "Laser Hair Removal: How to Prepare and What to Expect",
    date: "2026-07-09",
    readMinutes: 4,
    excerpt: "Shave, do not wax, stay out of the sun. What a session feels like, how sessions are spaced, and how skin tone is assessed at the consultation.",
    sections: [
      { h: "How it works, briefly", p: [
        "Laser hair removal sends a pulse of light into the skin, where the pigment in the hair shaft absorbs it and converts it to heat. That heat damages the follicle enough to slow or stop regrowth. The laser only affects hairs that are in their active growth phase, and at any moment only a portion of your hair is in that phase. That is why treatment is a series rather than a single visit, and why the change builds gradually.",
      ] },
      { h: "Preparing for a session", p: [
        "Shave the area within twenty-four hours before your appointment. The laser needs the hair root in place under the skin, but hair above the surface only absorbs energy where it does no good and can cause irritation. Do not wax, thread, tweeze, or use depilatory creams for several weeks beforehand, because those remove the root the laser is aiming for.",
        "Avoid sun exposure and self-tanner on the area for a couple of weeks before and after. Tanned skin holds more pigment, which competes with the hair for the laser's energy and raises the chance of a burn. Come with clean skin, no lotion or deodorant on the area, and tell the team about any new medication, since some raise light sensitivity.",
      ] },
      { h: "What a session is like", p: [
        "You wear protective eyewear. The technician marks the area, applies a cooling gel or uses the device's built-in cooling, and moves the handpiece in a grid. Each pulse feels like a quick snap of a rubber band with a flash of warmth. Small areas such as the upper lip take minutes. Larger areas such as the legs or back take longer.",
        "Afterward the skin is usually pink and a little warm for a few hours, similar to mild sunburn. You can return to your day. Skip hot showers, workouts, and sun for the rest of the day and use sunscreen on exposed areas going forward. Treated hairs shed over the following week or two, which can look like regrowth before it falls out.",
      ] },
      { h: "Session rhythm and skin tones", p: [
        "Sessions are spaced according to the growth cycle of the area, usually four to six weeks for the face and six to eight weeks for the body. A series of several sessions is standard, with maintenance visits afterward as needed. Skin tone and hair color matter for both safety and settings. Dark hair on lighter skin responds most readily. Darker skin tones can be treated with the right wavelength and settings, and very light, gray, or red hair has little pigment for the laser to target. All of this is assessed in person at the consultation, where a test spot may be done. The Laser Hair Reduction Club structures a series if that suits you. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["laser-hair-removal", "hydrafacial", "miradry"],
    seo: { title: "Laser Hair Removal: Prep and Expectations | Olivo Med Spa", description: "How to prepare for laser hair removal, what a session feels like, how sessions are spaced, and how skin tone is assessed at Olivo Med Spa in Chicago." },
    verify: ["Shaving within twenty-four hours and no waxing for several weeks: physician to approve", "Sun and self-tanner avoidance window: physician to approve", "Session spacing by area: physician to approve", "Statements on darker skin tones and wavelength, and on light, gray, or red hair: physician to approve", "Photosensitizing medication caution: physician to approve"],
  },
  {
    slug: "emface-the-needle-free-option-explained",
    title: "Emface: The Needle-Free Option Explained",
    date: "2026-07-16",
    readMinutes: 3,
    excerpt: "How Emface pairs synchronized radiofrequency with facial muscle stimulation, what the four session series looks like, and who tends to ask for it.",
    sections: [
      { h: "What Emface is", p: [
        "Emface is a facial treatment that uses no needles and no injected product. Applicators are placed on the forehead and cheeks and deliver two kinds of energy at the same time: synchronized radiofrequency and a form of electrical stimulation designed for facial muscles. The radiofrequency heats the skin and the layer beneath it, where the body responds by producing collagen and elastin. The stimulation contracts selected lifting muscles of the face in a rhythm that is difficult to reproduce on your own. The idea is to treat the skin and its support structure together in one session.",
      ] },
      { h: "How the two energies work together", p: [
        "Think of the face as skin resting on a frame of muscle. Neuromodulators relax muscles that pull lines into the skin. Fillers add volume where it has been lost. Emface does neither. It works the muscles that hold the face up and warms the tissue over them. Sessions are about twenty minutes. You lie back with the pads in place, feel warmth and a rhythmic pulling sensation, and can talk through it. There is no numbing, no downtime, and nothing on your face when you leave. Makeup can go on right away, and many people book a session on a lunch break and go straight back to work.",
      ] },
      { h: "The four session series", p: [
        "The standard plan is four sessions spaced about a week apart. Because the tissue changes over the weeks after treatment as collagen builds and muscles respond, change is gradual rather than same-day. Dr. Olivo schedules a check-in a few weeks after the last session to assess the forehead, cheeks, and jawline and to talk about maintenance if it fits. Emface pairs with other treatments: some people use it alongside a neuromodulator, or after resurfacing once the skin has healed.",
      ] },
      { h: "Who asks for it", p: [
        "Three groups tend to ask about Emface. People who want a lifted, rested look but do not want needles or injected product. People who already use neuromodulators and fillers and want something that addresses muscle tone and skin quality in between. And people in their thirties and forties who notice early softening along the jawline and brow and want to start with something that requires no recovery. Metal or electronic implants near the treatment area, pregnancy, and some medical conditions rule it out, which is why a history is taken first. Candidacy and expectations are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["emface", "botox-and-xeomin", "exion-face"],
    seo: { title: "Emface: The Needle-Free Option | Olivo Med Spa", description: "How Emface combines synchronized radiofrequency and facial muscle stimulation in a four session series, and who asks for it. Olivo Med Spa, Chicago." },
    verify: ["Emface energy description (synchronized radiofrequency plus facial muscle stimulation): confirm against BTL materials", "Four sessions about a week apart and twenty minute session length: confirm BTL protocol", "Contraindications named (implants, pregnancy): confirm against BTL guidance", "Combination with neuromodulators and after resurfacing: physician to approve"],
  },
  {
    slug: "medical-weight-management-what-a-physician-led-program-looks-like",
    title: "Medical Weight Management: What a Physician-Led Program Looks Like",
    date: "2026-07-23",
    readMinutes: 5,
    excerpt: "Consultation, labs, the tools a physician may consider, and how progress is monitored. A plain description of a medical program, not a promise about any drug.",
    sections: [
      { h: "It starts with a medical visit", p: [
        "Medical weight management at Olivo Med Spa is a medical service, not a spa service. The first appointment is a consultation with Dr. Olivo, who has practiced medicine since 2007. She takes a full history: weight over time, what you have tried, sleep, stress, activity, eating patterns, medications, and family history. She asks about conditions that often travel with weight, such as blood pressure, blood sugar, thyroid function, and sleep apnea. The point is to understand why weight has been hard to move for you, because the answer shapes the plan.",
      ] },
      { h: "Labs before decisions", p: [
        "Before any treatment is recommended, lab work is ordered. A typical panel looks at metabolic markers, thyroid function, lipids, liver and kidney function, and other values that Dr. Olivo considers relevant to your history. Labs do two things. They rule out a medical cause that needs its own treatment, and they set a baseline so progress can be measured on something other than the scale. Results are reviewed with you at a follow-up visit, in plain terms.",
      ] },
      { h: "The tools a physician may consider", p: [
        "A physician-led program draws on several tools, and the plan is built for the person rather than the other way round. Nutrition guidance and structure around eating patterns. Activity that fits your body and schedule. Attention to sleep and stress. And, for some patients, prescription medication.",
        "GLP-1 medications are one category a physician may consider when the history, labs, and goals support it. They are prescription drugs with their own screening, side effects, and monitoring requirements, and they are not right for everyone. Dr. Olivo discusses whether any medication belongs in your plan, and which, only after the evaluation. No medication is promised at booking, and no specific drug is the goal of the program.",
      ] },
      { h: "Monitoring and what to expect", p: [
        "Once a plan is in place, follow-up visits are scheduled at regular intervals to check weight, review labs when they are repeated, adjust any medication, and address side effects early. The team tracks how you feel, not only the number. Body contouring treatments such as Emsculpt Neo are discussed later, if at all, once weight has settled. Because this is a medical program, it also ends thoughtfully: Dr. Olivo talks about maintenance and what happens if a medication is tapered. Candidacy and expectations are set at the consultation. Individual results vary, and nothing in this post is a substitute for that visit.",
      ] },
    ],
    related: ["glp-1-weight-management", "hormone-therapy", "emsculpt-neo", "iv-therapy"],
    seo: { title: "Physician-Led Weight Management | Olivo Med Spa", description: "What a physician-led weight management program involves: consultation, labs, the tools a physician may consider, and monitoring. Olivo Med Spa, Chicago." },
    verify: ["Conditions listed as associated with weight: physician to approve", "Lab panel contents: physician to specify and approve", "GLP-1 medications described as one category a physician may consider: physician to approve all wording", "Screening, side effect, and monitoring statements for GLP-1 medications: physician to approve against current prescribing information", "Follow-up interval and monitoring description: physician to approve", "Tapering and maintenance statement: physician to approve", "Practicing medicine since 2007: confirm against content/clinic.ts"],
  },
  {
    slug: "skincare-routines-alastin-zo-skinbetter-how-the-clinic-chooses",
    title: "Skincare Routines: How the Clinic Chooses Between Alastin, ZO Skin Health, and Skinbetter Science",
    date: "2026-08-05",
    readMinutes: 4,
    excerpt: "Dispensed skincare is matched after a skin consultation, not picked off a shelf. How the three lines the clinic carries differ in how they are built.",
    sections: [
      { h: "Why dispensed skincare is different", p: [
        "Dispensed skincare means products sold through a medical practice rather than a store. The formulas tend to use higher concentrations of active ingredients, and the lines are built to be used before and after in-office procedures. That is also why they are sold through clinics: someone should be matching them to your skin and your treatment plan. At Olivo Med Spa, no product is recommended before a skin consultation, and the routine is built around the fewest products that do the job.",
      ] },
      { h: "The skin consultation", p: [
        "The consultation starts with what you are using now. Bring the bottles or a list. Dr. Olivo or the esthetician looks at your skin under good light, asks about sensitivity, breakouts, pigment, dryness, and sun habits, and asks what you are trying to change. They also account for any treatment you have planned, since a peel, resurfacing, or laser hair removal changes what your skin can tolerate in the weeks around it. From there they build a morning and evening routine, usually a cleanser, a treatment step, a moisturizer if needed, and sunscreen. Products are introduced one at a time so you can tell what is helping.",
      ] },
      { h: "The three lines the clinic carries", p: [
        "Olivo Med Spa carries Alastin, ZO Skin Health, and Skinbetter Science. Each line has a character. Alastin is known for products designed around procedures, with formulas intended for use before and after treatments such as resurfacing and injectables. ZO Skin Health is a structured, protocol-based line developed by a dermatologist, with programs that move skin through phases and include stronger prescription-strength steps for those who need them. Skinbetter Science focuses on a small number of multitasking products, including retinoid and antioxidant formulations, with an emphasis on simplicity. None of these descriptions is a claim about what a product will do for you. They describe how each line is built, which is what guides the match.",
      ] },
      { h: "How the match is made", p: [
        "Someone preparing for a CO2 treatment may be started on Alastin in the weeks before. Someone with stubborn pigment and a willingness to follow a strict program may be a ZO Skin Health candidate. Someone who wants two or three products and no fuss often lands with Skinbetter Science. Many routines mix lines. The team also says when a product you already own is fine and does not need replacing. Routines are reviewed at follow-up visits and adjusted with the seasons, since Chicago winters and summers ask different things of the skin. Candidacy and product choices are set at the consultation. Individual results vary.",
      ] },
    ],
    related: ["hydrafacial", "pca-chemical-peels", "co2-fractional-laser"],
    seo: { title: "How the Clinic Chooses Your Skincare | Olivo Med Spa", description: "How Olivo Med Spa in Logan Square, Chicago matches Alastin, ZO Skin Health, and Skinbetter Science to your skin after a consultation and builds a routine." },
    verify: ["Line descriptions for Alastin, ZO Skin Health, and Skinbetter Science: confirm against each manufacturer's published positioning", "Higher concentration of actives in dispensed skincare: physician to approve general statement", "Pre-procedure use of Alastin before resurfacing: physician to approve", "Prescription-strength steps in ZO Skin Health programs: confirm wording"],
  },
];
