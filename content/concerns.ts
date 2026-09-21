// Concern pages and quiz options. See docs/CONTENT-RULES.md before editing.
// Treatment slugs are ordered by how often the clinic reaches for them.
import type { Concern } from "./types";
import { concernsMore } from "./concerns-2";

const concernsFirst: Concern[] = [
  {
    slug: "fine-lines-wrinkles",
    name: "Fine lines and wrinkles",
    question: "Lines and wrinkles",
    summary: "Expression lines and etched wrinkles come from different causes, so the clinic treats muscle movement and thinning skin as separate problems.",
    intro: [
      "Lines form where muscles fold the skin the same way thousands of times: the forehead, between the brows, around the eyes. Early on they show only with expression. Over time collagen thins, the skin loses some of its spring, and the crease stays put when your face is at rest. Sun and smoking speed this up.",
      "At a consultation Dr. Olivo separates lines caused by movement from lines caused by thinning skin. Movement lines usually respond to a wrinkle relaxer. Etched lines and crepey texture call for something that rebuilds collagen, such as RF microneedling or a resurfacing laser. Many people do well with a combination staged over a few months.",
    ],
    treatments: ["botox-and-xeomin", "dermal-fillers", "exion-rf-microneedling", "co2-fractional-laser", "emface"],
    faqs: [
      { q: "Which should I start with, a wrinkle relaxer or a laser?", a: "It depends on what is driving the line. If it softens when you relax your face, a wrinkle relaxer is usually the first step. If it stays, skin treatments do more. Dr. Olivo will show you the difference in the mirror." },
      { q: "How soon should I start treating lines?", a: "There is no correct age. People come in when a line starts to bother them. Starting earlier can mean smaller, less frequent treatments, but it is a personal choice made with a physician, not a rule." },
    ],
    image: { slot: "fine-lines-wrinkles", alt: "Close view of skin around the eyes, fine lines concern at Olivo Med Spa", fallback: "skin-1" },
    seo: { title: "Fine Lines and Wrinkles Treatment | Olivo Med Spa", description: "Wrinkle relaxers, RF microneedling, and laser resurfacing for fine lines and wrinkles, planned by a physician at Olivo Med Spa in Logan Square, Chicago." },
  },
  {
    slug: "volume-loss",
    name: "Volume loss",
    question: "Hollow or flat areas",
    summary: "Cheeks, temples, and under-eyes lose fat and bone support with age; fillers and collagen stimulators restore structure in measured steps.",
    intro: [
      "Volume loss is why a face can look tired even when you have slept. Fat pads in the cheeks and temples shrink and slide, the bone beneath them slowly remodels, and the skin drapes over less support. The result is hollows under the eyes, flatter cheeks, and folds that deepen from the nose to the mouth.",
      "Dr. Olivo treats volume as structure, not surface. She looks at where support has gone before deciding on a hyaluronic acid filler such as Revanesse Versa, a collagen stimulator such as Radiesse, or a lift with PDO threads. The goal is to look rested and like yourself, built over one or two visits rather than all at once.",
    ],
    treatments: ["dermal-fillers", "revanesse-versa", "radiesse", "pdo-threads"],
    faqs: [
      { q: "Will filler make me look overdone?", a: "Not when it is placed to replace lost support rather than to add size. Dr. Olivo works conservatively and in stages. You can always add more at a later visit; taking away is harder." },
      { q: "How long does filler last?", a: "It depends on the product, the area, and how quickly your body breaks it down. Dr. Olivo will give you a realistic range at your consultation and plan touch-ups around it.", verify: "Typical duration ranges by product: confirm with manufacturer labeling" },
    ],
    image: { slot: "volume-loss", alt: "Profile view of the cheek and temple, volume loss concern at Olivo Med Spa", fallback: "skin-2" },
    seo: { title: "Volume Loss and Facial Fillers | Olivo Med Spa", description: "Restore lost volume in the cheeks, temples, and under-eyes with physician-placed fillers and collagen stimulators at Olivo Med Spa in Logan Square, Chicago." },
  },
  {
    slug: "sagging-skin",
    name: "Sagging skin",
    question: "Loose or sagging skin",
    summary: "Skin loosens when collagen breaks down faster than it is rebuilt; Emface, Exion, and PDO threads firm and lift without surgery.",
    intro: [
      "Skin sags when the collagen and elastin that hold it firm break down faster than the body rebuilds them. Add gravity, sun, and the volume loss happening underneath, and the jawline softens, the neck loosens, and the brow sits lower. On the body the same process shows on the abdomen, arms, and above the knees.",
      "Firming without surgery means prompting the skin to make new collagen and, on the face, working the muscles that hold it up. Emface does both in a needle-free session. Exion uses radiofrequency and ultrasound for face and body. PDO threads give a mechanical lift. Dr. Olivo decides at consultation which is realistic for the laxity you have.",
    ],
    treatments: ["emface", "exion-face", "exion-body", "pdo-threads", "radiesse"],
    faqs: [
      { q: "Can a device really lift skin?", a: "Energy devices tighten by building collagen and, in Emface's case, toning the lifting muscles of the face. The change is gradual and modest compared with surgery. Dr. Olivo will tell you honestly if you are past what a device can do." },
      { q: "How many sessions does tightening take?", a: "Most protocols are a short series, often four sessions, followed by maintenance. The exact number depends on the device and the area.", verify: "Session counts: confirm against BTL and Alma protocols" },
    ],
    image: { slot: "sagging-skin", alt: "Jawline and neck, sagging skin concern at Olivo Med Spa", fallback: "room-2" },
    seo: { title: "Sagging Skin and Non-Surgical Lifting | Olivo Med Spa", description: "Emface, Exion, and PDO threads for loose skin on the face, neck, and body, planned by a physician at Olivo Med Spa in Logan Square, Chicago. No surgery." },
  },
  {
    slug: "stubborn-fat",
    name: "Stubborn fat",
    question: "Stubborn fat",
    summary: "Pockets of fat that ignore diet and training can be treated with heat, light, or injection, matched to the area and your timeline.",
    intro: [
      "Some fat does not respond to diet or training. The lower abdomen, flanks, inner thighs, and under the chin hold fat cells that are stubborn by design, and once you reach adulthood the number of those cells stays fairly fixed. Losing weight shrinks them. It does not necessarily remove them from the area you care about.",
      "Non-surgical fat reduction works by damaging fat cells with heat, light, or a dissolving agent so the body clears them over the following weeks. Emsculpt Neo heats fat while building muscle. Laser lipo targets fat with light. Kybella is injected under the chin. Dr. Olivo matches the method to the area, the thickness of the fat, and your timeline.",
    ],
    treatments: ["emsculpt-neo", "laser-lipo", "exion-body", "kybella", "glp-1-weight-management"],
    faqs: [
      { q: "Is this weight loss?", a: "No. Body contouring treats a specific pocket of fat. It suits people close to their goal weight. If weight itself is the issue, Dr. Olivo may discuss medical weight management first." },
      { q: "How long until I see a change?", a: "Fat clearance is gradual. Most people notice change over the weeks after a series rather than the day after a session.", verify: "Timing of visible change: confirm with manufacturer materials" },
    ],
    image: { slot: "stubborn-fat", alt: "Body contouring treatment room at Olivo Med Spa", fallback: "room-1" },
    seo: { title: "Stubborn Fat Reduction in Chicago | Olivo Med Spa", description: "Non-surgical fat reduction in Logan Square, Chicago. Emsculpt Neo, laser lipo, Exion, and Kybella, matched to the area by Dr. Olivo at Olivo Med Spa." },
  },
  {
    slug: "muscle-tone",
    name: "Muscle tone",
    question: "Muscle tone and definition",
    summary: "Definition depends on muscle mass and the fat above it; Emsculpt Neo works on both as a supplement to training, not a replacement.",
    intro: [
      "Muscle definition depends on two things: how much muscle you have and how much fat sits over it. Training builds the first. Age, injury, a desk job, and time away from the gym all work against it, and some muscles, such as the deep core after pregnancy, are hard to reach with exercise alone.",
      "Emsculpt Neo contracts a muscle group far more times in thirty minutes than you could voluntarily, while its radiofrequency warms the fat above. It is a supplement to training, not a replacement. Dr. Olivo uses it for the abdomen, buttocks, arms, thighs, and calves, and pairs it with Exion when skin firmness is also part of the goal.",
    ],
    treatments: ["emsculpt-neo", "exion-body", "emsella"],
    faqs: [
      { q: "Do I still need to exercise?", a: "Yes. Emsculpt Neo works alongside training and a stable routine. People who keep moving tend to hold on to what they gain." },
      { q: "Can it help with core weakness after pregnancy?", a: "It can be part of a plan for core strength once you are cleared by your own physician. Dr. Olivo will review your history first, and Emsella may be added if pelvic floor strength is also a concern." },
    ],
    image: { slot: "muscle-tone", alt: "Emsculpt Neo applicator ready for a session at Olivo Med Spa", fallback: "room-1" },
    seo: { title: "Muscle Tone and Definition | Olivo Med Spa", description: "Build muscle definition in the abdomen, glutes, arms, and legs with Emsculpt Neo at a physician-led med spa in Logan Square, Chicago. Book at Olivo Med Spa." },
  },
  {
    slug: "double-chin",
    name: "Double chin",
    question: "Double chin",
    summary: "Fullness under the chin can be fat, loose skin, or both; Kybella, Exion, and laser lipo each address a different cause.",
    intro: [
      "Fullness under the chin can be fat, loose skin, a low-set neck muscle, or a mix of all three. Weight is only part of it. Genetics and age matter as much, which is why slim people get a double chin too and why it rarely goes away on its own, no matter how disciplined you are elsewhere.",
      "The right treatment depends on what is under there. Kybella dissolves fat with a series of small injections. Exion tightens skin with radiofrequency and ultrasound. Laser lipo can treat a fuller pocket. Dr. Olivo examines the area, pinches the tissue, and tells you which one, or which combination, fits your anatomy.",
    ],
    treatments: ["kybella", "exion-face", "laser-lipo", "emface"],
    faqs: [
      { q: "How many Kybella sessions are typical?", a: "Often two to four, spaced about a month apart, depending on how much fat is present.", verify: "Kybella session count and spacing: confirm with Allergan labeling" },
      { q: "Will my skin sag after the fat is gone?", a: "Sometimes skin that was stretched needs help firming. That is why Dr. Olivo assesses skin quality first and may pair fat reduction with a tightening treatment." },
    ],
    image: { slot: "double-chin", alt: "Clinician's hands assessing the area under the chin at Olivo Med Spa", fallback: "hands-1" },
    seo: { title: "Double Chin Treatment in Chicago | Olivo Med Spa", description: "Kybella, Exion, and laser lipo for fullness under the chin, chosen after a physician exam at Olivo Med Spa in Logan Square, Chicago. Book a consultation." },
  },
  {
    slug: "skin-texture-scars",
    name: "Skin texture and scars",
    question: "Rough texture or scars",
    summary: "Enlarged pores, uneven surface, and acne scars respond to treatments that remove damaged surface and rebuild collagen beneath it.",
    intro: [
      "Texture problems live in the top layers of the skin: enlarged pores, a bumpy or uneven surface, and acne scars where collagen healed in a pit or a ridge. Cell turnover slows with age, so dead skin lingers and the surface looks rough and catches light unevenly even when the skin is otherwise healthy.",
      "Treatments work by removing the damaged surface, stimulating new collagen beneath it, or both. Light options such as Hydrafacial and dermaplaning smooth the surface. RF microneedling, Opus Plasma, and fractional lasers reach deeper for scars. Dr. Olivo sets the depth to match the problem and how much downtime you can take.",
    ],
    treatments: ["exion-rf-microneedling", "opus-plasma", "co2-fractional-laser", "pca-chemical-peels", "hydrafacial"],
    faqs: [
      { q: "Can acne scars really be improved?", a: "Many types respond to collagen-stimulating treatments over a series. Deep ice-pick scars are harder. Dr. Olivo will tell you which of your scars are likely to respond." },
      { q: "How much downtime should I expect?", a: "It ranges from none for a facial to about a week for deeper resurfacing. You choose the trade-off between downtime and how much change each session makes." },
    ],
    image: { slot: "skin-texture-scars", alt: "Close view of skin texture, resurfacing concern at Olivo Med Spa", fallback: "skin-1" },
    seo: { title: "Skin Texture and Acne Scar Treatment | Olivo Med Spa", description: "Smooth rough texture, pores, and acne scars with RF microneedling and Opus Plasma at Olivo Med Spa, a physician-led clinic in Logan Square, Chicago." },
  },
  {
    slug: "sun-damage-pigment",
    name: "Sun damage and pigmentation",
    question: "Sun spots or uneven tone",
    summary: "Brown spots, blotchy tone, and melasma need different approaches; light, peels, and skincare are chosen for the cause and your skin type.",
    intro: [
      "Years of sun tell the skin to make extra pigment in patches. The result is brown spots on the face, chest, and hands, a blotchy tone, and sometimes fine red vessels. Melasma is different: it is hormonally driven and flares with heat and light, so it needs a gentler and more patient approach.",
      "Light-based treatments such as IPL target pigment and redness directly. Peels and resurfacing lasers lift pigment along with the surface. For melasma Dr. Olivo tends to start with medical-grade skincare and low-heat options because aggressive treatment can make it worse. Daily sunscreen is part of every plan she writes.",
    ],
    treatments: ["ipl-photofacial", "pca-chemical-peels", "co2-fractional-laser", "laser-genesis", "erbium-resurfacing"],
    faqs: [
      { q: "Is IPL right for melasma?", a: "Often not. Heat can trigger melasma. Dr. Olivo usually starts melasma with prescription-strength skincare and peels chosen for your skin, and decides on light-based treatment case by case." },
      { q: "Do spots come back?", a: "New spots can form with new sun exposure. Treated spots typically fade, and consistent sunscreen is what keeps the result." },
    ],
    image: { slot: "sun-damage-pigment", alt: "Light falling across skin, sun damage concern at Olivo Med Spa", fallback: "light-1" },
    seo: { title: "Sun Damage and Pigmentation Treatment | Olivo Med Spa", description: "IPL, peels, and resurfacing for sun spots, uneven tone, and melasma at Olivo Med Spa in Logan Square, Chicago. Plans set by a physician for your skin type." },
  },
];

export const concerns: Concern[] = [...concernsFirst, ...concernsMore];
