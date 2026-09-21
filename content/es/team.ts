// Spanish (Latin American) copy for team pages, treatment categories, the
// testimonials note, and the doctor's credentials. Keyed by the English slug
// or category key. Names, slots, and verify notes stay in the English files.
import type { CategoryEs, TeamEs } from "./types";

export const teamEs: Record<string, TeamEs> = {
  "jacqueline-olivo-md": {
    role: "Fundadora, directora ejecutiva y directora médica",
    short: "Médica, fundadora y la razón por la que la lista de equipos es la que es.",
    bio: [
      "La Dra. Olivo obtuvo su título de medicina en la Universidad San Luis Gonzaga, en Perú, y completó una residencia en medicina familiar en la Universidad de Illinois. Cuenta con licencia y ejerce desde 2007.",
      "Abrió Olivo Med Spa en Logan Square en 2013 y lo ha dirigido como médica desde entonces: elige la tecnología, se capacita en ella, redacta los planes de tratamiento y sigue siendo la directora médica de todo lo que se realiza en la clínica.",
      "Su enfoque es simple. Empezar con una conversación sobre lo que usted quiere cambiar, ajustar el tratamiento a la persona y no la persona a un menú, y decir con claridad lo que un tratamiento puede y no puede hacer.",
    ],
    focus: ["Inyectables y armonización facial", "Planes de contorno corporal en la plataforma BTL", "Renovación con láser y plasma", "Programas de bienestar con supervisión médica"],
  },
  "michelina-quaranta-faber": {
    role: "Esteticista líder sénior",
    short: "Lidera el equipo de estética y los programas de faciales y peelings.",
    bio: [
      "Michelina es esteticista licenciada y líder sénior del equipo de estética en Olivo Med Spa. Los pacientes vuelven con ella por Hydrafacial, peelings químicos, dermaplaning y planes de piel construidos en torno a las líneas que la clínica ofrece.",
      "Es conocida por explicar cada paso antes de que ocurra y por planes de piel que se ajustan a una agenda real.",
    ],
    focus: ["Hydrafacial y faciales de la casa", "Peelings PCA y dermaplaning", "Consultas de cuidado de la piel", "Lifting y tinte de pestañas"],
  },
  "bianca-esparza": {
    role: "Esteticista licenciada",
    short: "Faciales, peelings y reducción de vello con láser con el equipo de estética.",
    bio: ["Bianca es esteticista licenciada en el equipo de Olivo y trabaja en faciales, peelings y el programa de reducción de vello con láser bajo la dirección de la Dra. Olivo."],
    focus: ["Faciales y peelings", "Reducción de vello con láser", "Revisiones de salud de la piel"],
  },
  "valeria-mendez": {
    role: "Esteticista licenciada",
    short: "Faciales, tratamientos corporales y atención al paciente en inglés y español.",
    bio: ["Valeria es esteticista licenciada en el equipo de Olivo. Trabaja en faciales y tratamientos corporales con dispositivos, y ayuda a que los pacientes de habla hispana se sientan como en casa en la clínica."],
    focus: ["Faciales", "Sesiones de Emsculpt Neo y Exion", "Atención al paciente en español"],
  },
};

export const categoriesEs: Record<string, CategoryEs> = {
  "body-contouring": { name: "Contorno corporal", short: "Cuerpo", line: "Músculo, grasa y piel del cuerpo, sin cirugía." },
  "facial-lifting": { name: "Lifting facial", short: "Lifting", line: "Tono y elevación para el rostro, con o sin agujas." },
  "injectables": { name: "Inyectables", short: "Inyectables", line: "Botox Cosmetic, Xeomin y rellenos aplicados dentro de una clínica dirigida por una médica." },
  "skin-resurfacing": { name: "Renovación de la piel", short: "Renovación", line: "Textura, cicatrices y líneas, según la profundidad y el tiempo de recuperación." },
  "laser-and-light": { name: "Láser y luz", short: "Láser", line: "Vello, daño solar, enrojecimiento y tono." },
  "facials-and-peels": { name: "Faciales y peelings", short: "Faciales", line: "Hydrafacial, peelings y salud de la piel con el equipo de estética." },
  "sweat": { name: "Sudoración axilar", short: "Sudoración", line: "Miradry para una reducción duradera del sudor axilar." },
  "wellness": { name: "Bienestar", short: "Bienestar", line: "Piso pélvico, terapia IV, manejo del peso y hormonas." },
  "removals": { name: "Eliminaciones", short: "Eliminaciones", line: "Tatuajes, venas, lunares y acrocordones." },
};

export const testimonialsNoteEs = "Testimonios publicados por pacientes en olivomedspa.com. Las experiencias individuales varían.";

export const doctorEs = {
  credentials: [
    "MD, Universidad San Luis Gonzaga, Perú",
    "Residencia en medicina familiar, Universidad de Illinois",
    "Con licencia desde 2007, más de 15 años ejerciendo la medicina",
    "Fundadora, Olivo Medical Wellness Center",
  ] as string[],
  boardLine: "Certificada en medicina estética por el American Board of Aesthetic Medicine",
};
