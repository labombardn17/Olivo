// Spanish labels for the treatment quiz (content/quiz.ts, components/quiz/Quiz.tsx,
// components/quiz/QuizParts.tsx). Logic, ids, slugs, and hrefs stay in the English source.
//
// Shape (see QuizEs below):
//   quizEs.steps[stepId]        -> { title, sub? }            replaces Step.title / Step.sub
//   quizEs.options[optionId]    -> { label, hint? }           replaces Option.label / Option.hint
//                                  (option ids are unique across all steps and areas)
//   quizEs.services[slug]       -> { name, why }              replaces Recommendation.name / .why
//   quizEs.ui                   -> strings and helpers shown by Quiz.tsx and QuizParts.tsx
//   quizEs.ui.joinNames(names)  -> "A", "A y B", "A, B y C"   Spanish replacement for joinNames()
//   quizEs.ui.sms(names)        -> SMS body for smsHref()
import type { AreaId, ConcernId, DowntimeId, ServiceSlug, StepId } from "../quiz";

type ExperienceId = "never" | "few" | "regular";
type TimingId = "month" | "months" | "exploring";
type OptionId = AreaId | ConcernId | DowntimeId | ExperienceId | TimingId;

export interface QuizEs {
  steps: Record<StepId, { title: string; sub?: string }>;
  options: Record<OptionId, { label: string; hint?: string }>;
  services: Record<ServiceSlug, { name: string; why: string }>;
  ui: {
    kicker: string;
    stepOf: (current: number, total: number) => string;
    back: string;
    startOver: string;
    resultsPill: string;
    resultsTitle: string;
    resultsEmptyTitle: string;
    resultsEmptyLine: string;
    consultFallback: string;
    ctaTitle: string;
    ctaLine: string;
    book: string;
    textResults: string;
    call: (phone: string) => string;
    about: (name: string) => string;
    smallPrint: string;
    sms: (names: string) => string;
    joinNames: (names: string[]) => string;
  };
}

export const quizEs: QuizEs = {
  steps: {
    area: { title: "¿En qué le gustaría trabajar?", sub: "Elija la zona que más le importa en este momento." },
    concern: { title: "¿Cuál es la inquietud principal?", sub: "Con una basta. El resto puede conversarlo en su visita." },
    downtime: { title: "¿Cuánto tiempo de recuperación puede dedicar?", sub: "Algunos tratamientos requieren unos días de calma. Otros no requieren ninguno." },
    experience: { title: "¿Se ha hecho tratamientos estéticos antes?" },
    timing: { title: "¿Para cuándo?" },
  },
  options: {
    face: { label: "Rostro" },
    body: { label: "Cuerpo" },
    skin: { label: "Calidad de la piel" },
    sweat: { label: "Sudoración" },
    hair: { label: "Vello o tatuaje" },
    wellness: { label: "Bienestar" },
    lines: { label: "Líneas y arrugas" },
    volume: { label: "Volumen o labios" },
    sagging: { label: "Flacidez o línea de la mandíbula" },
    chin: { label: "Papada" },
    fat: { label: "Grasa localizada" },
    muscle: { label: "Definición muscular" },
    loose: { label: "Piel flácida" },
    pelvic: { label: "Piso pélvico" },
    texture: { label: "Textura o cicatrices" },
    sun: { label: "Daño solar o manchas oscuras" },
    redness: { label: "Enrojecimiento" },
    acne: { label: "Acné" },
    dull: { label: "Piel apagada o seca" },
    tattoo: { label: "Tatuaje" },
    veins: { label: "Venas o lunares" },
    energy: { label: "Energía e hidratación" },
    weight: { label: "Control de peso" },
    hormones: { label: "Hormonas" },
    none: { label: "Ninguno", hint: "De vuelta a la normalidad el mismo día" },
    days: { label: "Uno o dos días", hint: "Algo de enrojecimiento o hinchazón está bien" },
    week: { label: "Hasta una semana", hint: "Con disposición a un tratamiento más intenso" },
    never: { label: "Nunca" },
    few: { label: "Algunas veces" },
    regular: { label: "Con regularidad" },
    month: { label: "Este mes" },
    months: { label: "En los próximos meses" },
    exploring: { label: "Solo estoy explorando" },
  },
  services: {
    "emsculpt-neo": { name: "Emsculpt Neo", why: "Se usa para músculo y grasa en la misma sesión, sin tiempo de recuperación." },
    "exion-body": { name: "Exion corporal", why: "Radiofrecuencia y ultrasonido usados para la grasa y la flacidez de la piel en el cuerpo." },
    "emsella": { name: "Emsella", why: "Un tratamiento sentado que se usa para fortalecer el piso pélvico, con la ropa puesta." },
    "kybella": { name: "Kybella", why: "Un inyectable que se usa para la plenitud debajo del mentón, con hinchazón durante unos días." },
    "miradry": { name: "Miradry", why: "Un tratamiento de una sola sesión que se usa para la sudoración axilar." },
    "emface": { name: "Emface", why: "Energía sin agujas que se usa para el tono muscular del rostro, sin tiempo de recuperación." },
    "exion-face": { name: "Exion facial", why: "Radiofrecuencia que se usa para la calidad y firmeza de la piel en el rostro y el cuello." },
    "pdo-threads": { name: "Hilos PDO", why: "Hilos reabsorbibles colocados para dar soporte a la línea de la mandíbula y el tercio medio del rostro." },
    "radiesse": { name: "Radiesse", why: "Un relleno estimulador de colágeno que se usa para dar estructura a lo largo de la mandíbula y los pómulos." },
    "botox-and-xeomin": { name: "Botox Cosmetic y Xeomin", why: "Neuromoduladores que se usan para suavizar las líneas de expresión, aplicados por un equipo dirigido por una médica." },
    "dermal-fillers": { name: "Rellenos dérmicos", why: "Rellenos de ácido hialurónico que se usan para labios, pómulos y volumen perdido." },
    "iv-therapy": { name: "Terapia intravenosa", why: "Mezclas de hidratación y vitaminas elegidas junto con el equipo clínico." },
    "glp-1-weight-management": { name: "Control de peso con GLP-1", why: "Control de peso supervisado por una médica, con medicamentos GLP-1 cuando corresponde." },
    "hormone-therapy": { name: "Terapia hormonal", why: "Una revisión de sus hormonas dirigida por una médica, con un plan basado en sus análisis de laboratorio." },
    "opus-plasma": { name: "Opus Plasma", why: "Plasma fraccionado que se usa para la textura y las líneas finas, con unos días de recuperación." },
    "co2-fractional-laser": { name: "Láser fraccionado CO2", why: "Renovación más profunda que se usa para cicatrices, daño solar y líneas marcadas, con aproximadamente una semana de cicatrización." },
    "erbium-resurfacing": { name: "Renovación con erbio", why: "Un láser de renovación más suave que se usa para el tono y la textura, con una recuperación corta." },
    "exion-rf-microneedling": { name: "Microneedling con radiofrecuencia Exion", why: "Microneedling con radiofrecuencia que se usa para la textura, las cicatrices y la flacidez." },
    "laser-hair-removal": { name: "Depilación láser", why: "Una serie de sesiones que se usa para reducir el vello no deseado en el rostro y el cuerpo." },
    "ipl-photofacial": { name: "Fotofacial IPL", why: "Luz de amplio espectro que se usa para manchas solares y enrojecimiento, con poco tiempo de recuperación." },
    "laser-genesis": { name: "Laser Genesis", why: "Un láser suave que se usa para el enrojecimiento, los poros y el tono general, sin tiempo de recuperación." },
    "tattoo-removal": { name: "Eliminación de tatuajes", why: "Sesiones de láser que se usan para desvanecer la tinta del tatuaje a lo largo de una serie de visitas." },
    "vein-removal": { name: "Eliminación de venas", why: "Tratamiento láser que se usa para venas pequeñas del rostro y las piernas." },
    "mole-removal": { name: "Eliminación de lunares", why: "Eliminación en consultorio de lunares benignos y verrugas cutáneas tras una revisión médica." },
    "hydrafacial": { name: "Hydrafacial", why: "Un facial de limpieza e hidratación sin tiempo de recuperación." },
    "glass-skin-facial": { name: "Facial glass skin", why: "Un facial en capas que se usa para luminosidad e hidratación antes de un evento." },
    "red-out-facial": { name: "Facial calmante red-out", why: "Un facial calmante diseñado para pieles reactivas y propensas al enrojecimiento." },
    "pca-chemical-peels": { name: "Peelings químicos PCA", why: "Peelings de grado médico que se usan para el tono, los brotes y la textura, con una descamación leve durante unos días." },
    "dermaplaning": { name: "Dermaplaning", why: "Exfoliación manual que retira la piel muerta y el vello facial fino, sin tiempo de recuperación." },
  },
  ui: {
    kicker: "Cuestionario de tratamientos",
    stepOf: (current, total) => `Paso ${current} de ${total}`,
    back: "Atrás",
    startOver: "Empezar de nuevo",
    resultsPill: "Sus resultados",
    resultsTitle: "Un buen punto de partida para la conversación.",
    resultsEmptyTitle: "Permítanos orientarle en la dirección correcta.",
    resultsEmptyLine: "Cuéntenos qué tiene en mente y el equipo clínico lo relacionará con el tratamiento adecuado.",
    consultFallback: "una consulta",
    ctaTitle: "Siguiente paso: conversarlo con el equipo clínico.",
    ctaLine: "Traiga sus resultados. La consulta es donde se escribe el plan.",
    book: "Reservar una consulta",
    textResults: "Envíenos sus resultados por mensaje",
    call: (phone) => `Llamar al ${phone}`,
    about: (name) => `Sobre ${name}`,
    smallPrint: "El cuestionario es un punto de partida. La candidatura y las expectativas se definen en su consulta.",
    sms: (names) => `Hola Olivo, respondí el cuestionario. Me interesa ${names}. ¿Podemos agendar una consulta?`,
    joinNames: (names) => {
      if (names.length <= 1) return names[0] ?? "";
      return `${names.slice(0, -1).join(", ")} y ${names[names.length - 1]}`;
    },
  },
};
