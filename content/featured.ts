// Featured service cards and FAQ for the functional homepage. Six outcome-led
// cards route visitors; the nine devices and the full menu sit one level down.

import type { Shot } from "@/components/shared/Placeholder";

export interface FeaturedService {
  slug: string;
  title: string;
  line: string;
  devices: string[];
  shot: Shot;
  verify?: string;
}

export const featured: FeaturedService[] = [
  { slug: "body-contouring", title: "Body contouring", line: "Build muscle and reduce fat with Emsculpt Neo, no surgery and no downtime.", devices: ["Emsculpt Neo", "Exion"], shot: "room-1" },
  { slug: "facial-lifting", title: "Facial lifting", line: "Needle-free tone and lift with Emface, plus Exion for tightening.", devices: ["Emface", "Exion", "PDO threads"], shot: "skin-1", verify: "Emface claim wording: confirm with BTL materials" },
  { slug: "skin-resurfacing", title: "Skin resurfacing", line: "Opus Plasma and CO2 laser for texture, scars, and lines, chosen by depth and downtime.", devices: ["Opus Plasma", "CO2 fractional laser", "Exion RF microneedling"], shot: "skin-2" },
  { slug: "injectables", title: "Injectables", line: "Botox Cosmetic, Xeomin, and fillers placed by a physician-led team.", devices: ["Botox Cosmetic", "Xeomin", "Revanesse Versa", "Belotero", "Radiesse", "Kybella"], shot: "hands-1", verify: "Who injects: client to confirm" },
  { slug: "sweat", title: "Underarm sweat", line: "Miradry for lasting reduction of underarm sweat.", devices: ["Miradry"], shot: "steel-1", verify: "Miradry 'lasting' claim: confirm with manufacturer labeling" },
  { slug: "wellness", title: "Wellness and intimate health", line: "Emsella pelvic floor strengthening, fully clothed, plus IV therapy.", devices: ["Emsella", "Emfemme 360", "IV therapy"], shot: "light-1", verify: "Emsella and Emfemme claims: use cleared indications only" },
];

export interface FaqItem {
  q: string;
  a: string;
  verify?: string;
}

export const faq: FaqItem[] = [
  { q: "Do I need a consultation first?", a: "Yes for most device treatments. A consultation confirms you are a good candidate, sets expectations, and gives you a written plan before anything is booked.", verify: "Consultation policy: clinic to confirm" },
  { q: "Who performs the treatments?", a: "Olivo Med Spa is physician owned and led by Jacqueline Olivo, MD. Treatments are performed by Dr. Olivo and her aesthetics team under her direction.", verify: "Who performs which treatments: clinic to confirm" },
  { q: "Is financing available?", a: "Financing is available through Cherry. Ask at your consultation or apply before your visit.", verify: "Cherry application link: client to supply" },
  { q: "How do I book?", a: "Book online through Vagaro any time, or call 872-315-3481 during clinic hours." },
  { q: "Where are you?", a: "2550 W. Fullerton Ave in Logan Square, Chicago. Street parking is on Fullerton and the Blue Line is a short walk.", verify: "Parking and transit note: client to confirm" },
];
