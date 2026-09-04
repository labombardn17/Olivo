import type { Metadata } from "next";
import { clinic, doctor } from "./clinic";

export const siteTitle = "Olivo Med Spa | Physician-Led Med Spa in Logan Square, Chicago";

export const descriptions = {
  home: "Physician owned and led since 2013. Emsculpt Neo, Emface, Exion, Opus Plasma, CO2 laser and Miradry under one roof at 2550 W. Fullerton, Logan Square.",
  emsculptNeo: "Emsculpt Neo at Olivo Med Spa, Logan Square. Builds muscle and reduces fat in one session, no surgery. Physician owned and led since 2013.",
  chooser: "Five homepage concepts for Olivo Med Spa. Private design review.",
} as const;

/** Every route is a prototype: noindex, nofollow. */
export const noindex: Metadata["robots"] = { index: false, follow: false, nocache: true };

export function pageMetadata(description: string, title = siteTitle): Metadata {
  return {
    title,
    description,
    robots: noindex,
    openGraph: { title, description, type: "website", siteName: clinic.name },
  };
}

/** JSON-LD for the clinic. Emitted only when NEXT_PUBLIC_EMIT_SCHEMA=true. */
export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    telephone: "+1-872-315-3481",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.zip,
      addressCountry: "US",
    },
    foundingDate: String(clinic.founded),
    founder: { "@type": "Physician", name: doctor.name },
    url: clinic.booking,
  };
}

export const emitSchema = process.env.NEXT_PUBLIC_EMIT_SCHEMA === "true";
