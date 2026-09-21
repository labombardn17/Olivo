// Patient information, gift cards, and Spanish strings for the public site.
// Anything the clinic has not confirmed carries a verify note. No prices.
import type { CategoryKey } from "./types";

export interface FirstVisitStep {
  step: string;
  line: string;
}

export interface Policy {
  title: string;
  lines: string[];
  verify: string;
}

export interface Aftercare {
  category: CategoryKey;
  title: string;
  lines: string[];
  verify: string;
}

export interface PatientFaq {
  q: string;
  a: string;
  verify?: string;
}

export const forPatients = {
  intro:
    "Every visit at Olivo Med Spa begins with a conversation and ends with a written plan. This page covers what to expect, what to bring, and how the clinic handles the practical side of your care.",
  firstVisit: [
    { step: "Booking", line: "Book online through Vagaro, or call or text the clinic during hours. Choose a consultation if you are new or unsure which treatment fits." },
    { step: "Arrival and intake", line: "Arrive a few minutes early. You will complete a short medical history and a consent for the visit, on paper or on a tablet." },
    { step: "Consultation", line: "You meet with the clinical team. They look, listen, and ask about your goals, your history, and your schedule." },
    { step: "Written plan", line: "You leave with a plan in plain words: the treatment, the number of visits, the expected downtime, and what results to expect." },
    { step: "Treatment or scheduling", line: "If you are a candidate and the plan allows, treatment can happen the same day. Otherwise you schedule the first session before you leave." },
  ] satisfies FirstVisitStep[],
  firstVisitVerify: "Same-day treatment availability and intake format (paper or tablet): clinic to confirm",
  bring: [
    "A photo ID",
    "A list of your medications, supplements, and allergies",
    "The skincare products you use now, or a photo of them",
    "Your questions, written down",
    "Records from any prior aesthetic treatments, if you have them",
  ],
  policies: [
    {
      title: "Appointment changes and cancellations",
      lines: [
        "The clinic asks for notice if you need to move or cancel an appointment so the time can be offered to another patient.",
        "The current policy, including the notice period and any fee for late cancellations or missed visits, is confirmed with you at booking.",
      ],
      verify: "Cancellation policy: clinic to supply the exact hours of notice and any fee",
    },
    {
      title: "Late arrivals",
      lines: [
        "If you are running late, call or text so the team can adjust.",
        "A late arrival may shorten your treatment time or require rescheduling so the next patient starts on time.",
      ],
      verify: "Late arrival grace period: clinic to confirm",
    },
    {
      title: "Minors and guests",
      lines: [
        "Patients under 18 need a parent or legal guardian present for the consultation and for consent.",
        "You are welcome to bring one guest to the waiting area. For safety and privacy, guests generally wait outside the treatment room.",
        "Children cannot be left unattended in the waiting area.",
      ],
      verify: "Minor treatment policy and guest rules: clinic to confirm",
    },
    {
      title: "Payment methods",
      lines: [
        "The clinic accepts major credit and debit cards.",
        "Financing available through Cherry. Terms are set by Cherry at application.",
        "Memberships are managed through the clinic's member portal and applied at checkout.",
      ],
      verify: "Accepted payment methods (cash, HSA/FSA, checks): clinic to confirm",
    },
    {
      title: "Medical history and consent",
      lines: [
        "You complete a medical history at your first visit and update it when anything changes.",
        "A consent form specific to each new treatment is reviewed with you before that treatment begins, and you can ask questions at any point.",
      ],
      verify: "Consent workflow: clinic to confirm",
    },
    {
      title: "Photography",
      lines: [
        "Clinical photographs are taken before and after treatment for your chart. They help the team track your progress.",
        "These photos are part of your medical record and are never published, posted, or shared without your separate written authorization.",
      ],
      verify: "Photo consent language: counsel to review",
    },
  ] satisfies Policy[],
  aftercare: [
    {
      category: "body-contouring",
      title: "Body contouring",
      lines: [
        "Drink water through the rest of the day. Light activity is fine.",
        "Mild soreness or warmth in the treated area is common and fades on its own.",
        "Keep the treated area free of heat sources for the window the team gives you.",
        "Call the clinic if you notice blistering, marked swelling, or pain that gets worse instead of better.",
      ],
      verify: "Body contouring aftercare: clinical team to confirm against device protocols",
    },
    {
      category: "facial-lifting",
      title: "Facial lifting",
      lines: [
        "Wash gently and apply sunscreen before going outside.",
        "Skip heat, saunas, and hard exercise for the window the team tells you applies to you.",
        "Redness or a feeling of tightness usually settles within a day.",
        "Call the clinic if redness deepens, swelling spreads, or you develop a fever.",
      ],
      verify: "Facial lifting aftercare: clinical team to confirm",
    },
    {
      category: "injectables",
      title: "Injectables",
      lines: [
        "Stay upright and avoid pressing on the treated area for the rest of the day.",
        "Hold off on strenuous exercise, alcohol, and heat for the window the team gives you.",
        "Small bumps or bruises are common and usually resolve within days.",
        "Call the clinic right away for unusual pain, skin color changes, or vision changes.",
      ],
      verify: "Injectable aftercare: clinical team to confirm",
    },
    {
      category: "skin-resurfacing",
      title: "Skin resurfacing",
      lines: [
        "Keep the skin clean and moisturized with the products the team recommends.",
        "Avoid direct sun and wear sunscreen daily. The team will tell you the window that applies to you.",
        "Do not pick or peel flaking skin. Let it come away on its own.",
        "Call the clinic if you see signs of infection, such as spreading redness, pus, or fever.",
      ],
      verify: "Resurfacing aftercare: clinical team to confirm by depth of treatment",
    },
    {
      category: "laser-and-light",
      title: "Laser and light",
      lines: [
        "Cool compresses help with warmth or redness in the first hours.",
        "Protect the treated area from sun and avoid tanning for the window the team gives you.",
        "Skip hot showers, saunas, and heavy exercise until the team says you can resume.",
        "Call the clinic if you notice blistering, crusting, or a burning feeling that does not ease.",
      ],
      verify: "Laser aftercare: clinical team to confirm per device",
    },
    {
      category: "facials-and-peels",
      title: "Facials and peels",
      lines: [
        "Use a gentle cleanser and moisturizer, and apply sunscreen every morning.",
        "Pause retinoids, exfoliants, and acids for the window the team tells you.",
        "Light peeling or flaking after a peel is expected. Do not scrub it off.",
        "Call the clinic if you develop swelling, hives, or discomfort that lasts beyond a day.",
      ],
      verify: "Facial and peel aftercare: esthetics team to confirm",
    },
    {
      category: "sweat",
      title: "Underarm sweat",
      lines: [
        "Ice the underarms as directed and take the over-the-counter pain relief the team recommends.",
        "Swelling and tenderness are expected for several days. Loose clothing helps.",
        "Avoid heavy exercise and deodorant for the window the team gives you.",
        "Call the clinic if you notice a blister, an open area, or numbness that persists.",
      ],
      verify: "Miradry aftercare: clinical team to confirm against manufacturer guidance",
    },
    {
      category: "wellness",
      title: "Wellness",
      lines: [
        "Drink water and eat normally unless the team tells you otherwise.",
        "Most wellness visits have no downtime. You can return to your day.",
        "Follow the specific instructions for your service, and the team will tell you what to watch for.",
        "Call the clinic with any new symptom you are unsure about.",
      ],
      verify: "Wellness aftercare varies by service; clinical team to supply per-service instructions",
    },
    {
      category: "removals",
      title: "Removals",
      lines: [
        "Keep the area clean, covered as instructed, and dry for the first day.",
        "Avoid sun exposure and picking at scabs or crusts while the area heals.",
        "Skip swimming, hot tubs, and heavy sweating for the window the team gives you.",
        "Call the clinic for signs of infection, bleeding that does not stop, or worsening pain.",
      ],
      verify: "Removal aftercare: clinical team to confirm by procedure",
    },
  ] satisfies Aftercare[],
  aftercareNote: "These are general guidelines. The instructions you receive at your visit are specific to you and take priority.",
  faqs: [
    { q: "Where do I park?", a: "Street parking is available on Fullerton and the nearby side streets. The California Blue Line stop and the 74 Fullerton bus are both a short walk.", verify: "Parking and transit: clinic to confirm" },
    { q: "What should I wear?", a: "Something comfortable that gives easy access to the area being treated. For body treatments, loose clothing you can change out of. For facial treatments, arrive with a clean face if you can." },
    { q: "Do I need a consultation first?", a: "New patients start with a consultation. It sets candidacy and expectations, and it is where your written plan comes from. Returning patients on an existing plan can book treatment directly." },
    { q: "Can I bring a friend?", a: "Yes. One guest is welcome in the waiting area. Guests generally wait outside the treatment room for privacy and safety." },
    { q: "Can I be seen in Spanish?", a: "Yes. The team includes Spanish speakers. Let the front desk know when you book and they will schedule accordingly.", verify: "Spanish-speaking staff availability by day: clinic to confirm" },
    { q: "How do I reach the clinic after hours?", a: "Leave a voicemail or send a text and the team replies during clinic hours. For a medical emergency, call 911." },
  ] satisfies PatientFaq[],
};

export const giftCards = {
  intro: "A gift card from Olivo Med Spa lets someone choose their own treatment or skincare, with a consultation included in the visit.",
  how: [
    { step: "Choose an amount", line: "Pick the value you want to give. The card is not tied to a specific treatment." },
    { step: "We deliver it", line: "The card is emailed to you or the recipient, or handed to you in the clinic." },
    { step: "They book", line: "The recipient books any treatment or picks up any dispensed product and applies the card at checkout." },
  ],
  notes: [
    "Valid for any treatment or dispensed product at the clinic.",
    "Terms are provided with the card.",
    "Available in the clinic and online through the booking system.",
  ],
  verify: "Gift card purchase link, expiration terms, and delivery method: clinic to confirm",
};

export const esCategories: Record<CategoryKey, { name: string; line: string }> = {
  "body-contouring": { name: "Contorno corporal", line: "Músculo, grasa y piel del cuerpo, sin cirugía." },
  "facial-lifting": { name: "Lifting facial", line: "Tono y firmeza para el rostro, con o sin agujas." },
  injectables: { name: "Inyectables", line: "Botox Cosmetic, Xeomin y rellenos aplicados en una clínica dirigida por una médica." },
  "skin-resurfacing": { name: "Renovación de la piel", line: "Textura, cicatrices y líneas, según la profundidad y el tiempo de recuperación." },
  "laser-and-light": { name: "Láser y luz", line: "Vello, daño solar, enrojecimiento y tono de la piel." },
  "facials-and-peels": { name: "Faciales y peelings", line: "Hydrafacial, peelings y salud de la piel con el equipo de estética." },
  sweat: { name: "Sudoración axilar", line: "Miradry para reducir de forma duradera el sudor de las axilas." },
  wellness: { name: "Bienestar", line: "Piso pélvico, terapia intravenosa, control de peso y hormonas." },
  removals: { name: "Eliminaciones", line: "Tatuajes, venas, lunares y verrugas cutáneas." },
};

export const esUi = {
  treatments: "Tratamientos",
  allTreatments: "Todos los tratamientos",
  byConcern: "Por inquietud",
  quiz: "Encuentre su tratamiento",
  book: "Reservar cita",
  text: "Enviar mensaje de texto",
  call: "Llamar",
  hours: "Horario",
  address: "Dirección",
  seeAll: "Ver todo",
  backHome: "Volver al inicio",
  viewEnglish: "Ver en inglés",
  intro: "Cada plan comienza con una consulta, y el equipo puede atenderle en español.",
  introVerify: "Spanish-language visits and translation of clinic materials: clinic to confirm",
};
