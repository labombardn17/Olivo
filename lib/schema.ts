// JSON-LD builders. Every builder returns a plain object; pages stringify it.
import { clinic, doctor } from "@/content/clinic";
import { site, siteUrl } from "@/content/site";
import type { Faq, Service } from "@/content/types";

const id = (frag: string) => `${siteUrl}/#${frag}`;

export function medicalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic"],
    "@id": id("clinic"),
    name: site.name,
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    logo: `${siteUrl}/icon.svg`,
    telephone: "+1-872-315-3481",
    priceRange: "$$",
    address: { "@type": "PostalAddress", streetAddress: clinic.address.line1, addressLocality: clinic.address.city, addressRegion: clinic.address.state, postalCode: clinic.address.zip, addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: `https://www.google.com/maps/place/?q=place_id:${site.placeId}`,
    areaServed: ["Logan Square", "Bucktown", "Wicker Park", "Lincoln Park", "Avondale", "Humboldt Park", "Chicago, IL"].map((n) => ({ "@type": "Place", name: n })),
    openingHoursSpecification: site.hoursSpec.map((h) => ({ "@type": "OpeningHoursSpecification", ...h })),
    sameAs: [...Object.values(site.social), site.mapsUrl],
    foundingDate: String(clinic.founded),
    founder: { "@id": id("dr-olivo") },
    medicalSpecialty: ["Dermatology", "PlasticSurgery"],
    isAcceptingNewPatients: true,
    potentialAction: { "@type": "ReserveAction", target: { "@type": "EntryPoint", urlTemplate: site.bookingExternal, actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] }, result: { "@type": "Reservation", name: "Consultation" } },
  };
}

export function physician() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": id("dr-olivo"),
    name: doctor.name,
    honorificSuffix: "MD",
    jobTitle: "Founder and Medical Director",
    worksFor: { "@id": id("clinic") },
    url: `${siteUrl}/team/jacqueline-olivo-md`,
    medicalSpecialty: "Aesthetic medicine",
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "San Luis Gonzaga University" }, { "@type": "CollegeOrUniversity", name: "University of Illinois" }],
  };
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: s.name,
    description: s.summary,
    url: `${siteUrl}/treatments/${s.slug}`,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    howPerformed: s.session.feels,
    provider: { "@id": id("clinic") },
    areaServed: { "@type": "City", name: "Chicago" },
  };
}

export function faqSchema(faqs: Faq[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${siteUrl}${it.path}` })) };
}

export function article(p: { title: string; description: string; path: string; date: string }) {
  return { "@context": "https://schema.org", "@type": "Article", headline: p.title, description: p.description, datePublished: p.date, author: { "@id": id("dr-olivo") }, publisher: { "@id": id("clinic") }, mainEntityOfPage: `${siteUrl}${p.path}` };
}
