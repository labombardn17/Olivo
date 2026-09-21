// Site-wide configuration for the public Olivo site (not the concept review).
import { clinic } from "./clinic";
import type { CategoryKey } from "./types";
import { withBase } from "@/lib/base";

/** Canonical origin. Preview deploys stay noindex until NEXT_PUBLIC_INDEXABLE=1. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://olivo-med-spa.vercel.app").replace(/\/$/, "");
export const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "1";

export const site = {
  name: clinic.name,
  legalName: "Olivo Med Spa",
  tagline: "Physician-led med spa in Logan Square, Chicago",
  phoneDisplay: clinic.phoneDisplay,
  phoneTel: clinic.phoneTel,
  /** Text now. Whether the clinic line receives SMS is a verify item. */
  smsNumber: "+18723153481",
  sms: (body?: string) => `sms:+18723153481${body ? `?&body=${encodeURIComponent(body)}` : ""}`,
  smsVerify: "Confirm 872-315-3481 receives text messages, or supply the texting number",
  /** On-site booking page with the Vagaro widget embedded. */
  booking: withBase("/book"),
  bookingExternal: "https://www.vagaro.com/olivomedspa/book-now",
  bookingWidget: "https://www.vagaro.com/Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVGA1QjI5GH1p2XyHEYe23LheLozkQ3HKf4HbvU78PJurSCzXClDbUF/tG0rGPy1y2A9Dq+OUvLRvvdLaYCCQC4QVr4shlYmE8mhiaXedCcCUmrowDvtBYrcLfjzh+gzb+QIrl2bpNV24dz88kmPeFIGDximN2x5YeQsejOrI/p4n68BPzf82Lnk1bbcIqH38svP/SPRNn1VWIlF2nh1dJUlXH4tmOAdBW6kHNrLjtrVmPed/2C/FTjiMwsh+AhtS32Bz44KiW00Y9HRV9TgvqvZk4V0VW1NPWmdOru/9dj5Qiy/HyRNBBPwxMhqzZ6PIAHPBS0LhTArgjR++lm96vrCNHW+6P5YRK+vO2y8HpyJ/XEDwXfFRUl1TSeA+HIWL6wspcnyqMF+e83mpBcRdxPc=",
  bookingVerify: "Vagaro widget and book-now links: confirm with the clinic's Vagaro account",
  memberships: "https://olivomedspa.repeatmd.app/",
  membershipsVerify: "RepeatMD membership portal link: confirm",
  financing: "https://tree.withcherry.com/olivomedspa",
  financingVerify: "Cherry application link: confirm",
  email: "",
  address: clinic.address,
  addressLine: `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`,
  geo: { lat: 41.9249979, lng: -87.6922262 },
  placeId: "ChIJd9bIVzjTD4gRgCJNyOPUiwY",
  mapsUrl: "https://maps.app.goo.gl/sboaSLri4Cd6KR5q9",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=2550+W+Fullerton+Ave+Chicago+IL+60618&destination_place_id=ChIJd9bIVzjTD4gRgCJNyOPUiwY",
  hours: [
    { days: "Monday to Friday", open: "10 AM", close: "7 PM" },
    { days: "Saturday", open: "10 AM", close: "5 PM" },
    { days: "Sunday", open: "", close: "", closed: true },
  ],
  hoursSpec: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
    { dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/olivomedspa/",
    facebook: "https://www.facebook.com/profile.php?id=61552240762086",
    youtube: "https://www.youtube.com/channel/UCGe_FVrCQR0BTJpMs5tIOqQ",
    twitter: "https://twitter.com/olivomedspa",
  },
  transit: "Street parking on Fullerton and nearby side streets. The California Blue Line stop and the 74 Fullerton bus are both a short walk.",
  transitVerify: "Parking and transit note: clinic to confirm",
  founded: clinic.founded,
} as const;

export interface CategoryMeta {
  key: CategoryKey;
  name: string;
  short: string;
  line: string;
  slot: string;
  fallback: "room-1" | "room-2" | "room-3" | "skin-1" | "skin-2" | "hands-1" | "steel-1" | "light-1";
}

export const categories: CategoryMeta[] = [
  { key: "body-contouring", name: "Body contouring", short: "Body", line: "Muscle, fat, and skin on the body, without surgery.", slot: "body-contouring", fallback: "room-1" },
  { key: "facial-lifting", name: "Facial lifting", short: "Lifting", line: "Tone and lift for the face, with or without needles.", slot: "facial-lifting", fallback: "skin-1" },
  { key: "injectables", name: "Injectables", short: "Injectables", line: "Botox Cosmetic, Xeomin, and fillers placed inside a physician-led clinic.", slot: "injectables", fallback: "hands-1" },
  { key: "skin-resurfacing", name: "Skin resurfacing", short: "Resurfacing", line: "Texture, scars, and lines, chosen by depth and downtime.", slot: "skin-resurfacing", fallback: "skin-2" },
  { key: "laser-and-light", name: "Laser and light", short: "Laser", line: "Hair, sun damage, redness, and tone.", slot: "laser-and-light", fallback: "steel-1" },
  { key: "facials-and-peels", name: "Facials and peels", short: "Facials", line: "Hydrafacial, peels, and skin health with the esthetics team.", slot: "facials-and-peels", fallback: "light-1" },
  { key: "sweat", name: "Underarm sweat", short: "Sweat", line: "Miradry for lasting reduction of underarm sweat.", slot: "sweat", fallback: "steel-1" },
  { key: "wellness", name: "Wellness", short: "Wellness", line: "Pelvic floor, IV therapy, weight management, and hormones.", slot: "wellness", fallback: "room-2" },
  { key: "removals", name: "Removals", short: "Removals", line: "Tattoos, veins, moles, and skin tags.", slot: "removals", fallback: "room-3" },
];

export const categoryByKey = (k: CategoryKey) => categories.find((c) => c.key === k)!;

export const mainNav = [
  { label: "Treatments", href: "/treatments", mega: true },
  { label: "Concerns", href: "/concerns" },
  { label: "Memberships", href: "/memberships" },
  { label: "Specials", href: "/specials" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/visit" },
] as const;
