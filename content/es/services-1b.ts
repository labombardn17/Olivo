// Spanish translations for the wellness services and the men's overview.
// Keyed by the English slug. Facts mirror content/services/wellness.ts.
// See docs/CONTENT-RULES.md before editing.
import type { ServiceEs } from "./types";

export const servicesEs1b: Record<string, ServiceEs> = {
  "iv-therapy": {
    name: "Terapia intravenosa",
    tag: "Bienestar · Unos 45 minutos",
    headline: "Sueros de vitaminas e hidratación, administrados por el equipo clínico en una sala tranquila.",
    summary: "La terapia intravenosa aporta líquidos, vitaminas y minerales directamente al torrente sanguíneo. Los sueros se eligen para hidratación, energía o recuperación, y los administra el equipo clínico en una clínica dirigida por una médica en Logan Square.",
    intro: [
      "Un suero intravenoso lleva líquido y nutrientes directamente al torrente sanguíneo, sin pasar por la digestión. Las personas lo reservan después de un viaje, una enfermedad, una semana difícil o una carrera larga, o como parte habitual de su cuidado personal. Los sueros se preparan a partir de una base de solución salina con vitaminas y minerales añadidos.",
      "Una sesión toma de cuarenta y cinco minutos a una hora. Usted se sienta en un sillón, un profesional clínico coloca la vía y usted descansa. No hay recuperación. La clínica ofrece varias mezclas, y una consulta confirma cuál se ajusta a su objetivo y que la terapia intravenosa es adecuada para usted.",
      "La terapia intravenosa es un servicio de bienestar, no un tratamiento para enfermedades. La Dra. Olivo revisa su historial antes de su primer suero, y la candidatura y las expectativas se definen en esa visita.",
    ],
    benefits: ["Hidratación y nutrientes administrados directamente", "Unos cuarenta y cinco minutos, sin recuperación", "Varias mezclas para distintos objetivos", "Administrada por el equipo clínico", "Revisión por una médica antes de su primer suero"],
    session: { duration: "Unos 45 a 60 minutos", sessions: "Una sola sesión; algunas personas reservan cada mes", downtime: "Ninguna", feels: "Un pinchazo pequeño al colocar la vía, y luego una sensación fresca", results: "Muchas personas se sienten más hidratadas el mismo día; los efectos varían según la mezcla y la persona" },
    goodFor: ["Adultos que buscan hidratación después de un viaje, una enfermedad o un esfuerzo físico", "Personas a quienes les cuesta mantener los suplementos orales", "Cualquier persona autorizada en la consulta, incluida una revisión del historial renal y cardíaco"],
    faqs: [
      { q: "¿Quién coloca la vía intravenosa?", a: "Un profesional clínico con licencia del equipo. La Dra. Olivo revisa su historial antes de su primer suero." },
      { q: "¿Qué sueros ofrecen?", a: "Varias mezclas centradas en hidratación, energía, recuperación y piel. El menú se revisa en su visita." },
      { q: "¿Duele?", a: "Siente un pinchazo pequeño cuando se coloca la vía. La mayoría de las personas lee o descansa durante la sesión." },
      { q: "¿Con qué frecuencia puedo venir?", a: "Depende de la mezcla y de su salud. Muchas personas reservan cada mes. Su calendario se define con el equipo clínico." },
    ],
    seo: { title: "Terapia intravenosa en Logan Square, Chicago | Olivo Med Spa", description: "Terapia intravenosa en Olivo Med Spa, Logan Square: sueros de vitaminas e hidratación por el equipo clínico. Unos 45 minutos, sin recuperación." },
  },
  "glp-1-weight-management": {
    name: "Control de peso médico con GLP-1",
    tag: "Bienestar · Supervisado por una médica",
    headline: "Un programa de control de peso supervisado por una médica, construido en torno a la medicación GLP-1, cuando es adecuada para usted.",
    summary: "El control de peso médico en Olivo Med Spa comienza con una consulta y análisis de laboratorio. Si un medicamento GLP-1 es apropiado, la Dra. Olivo lo prescribe como parte de un programa supervisado con seguimientos regulares. Logan Square, Chicago.",
    intro: [
      "Los medicamentos GLP-1 han cambiado la conversación sobre el peso. Actúan sobre el apetito y sobre cómo el cuerpo maneja el azúcar en la sangre. Son medicamentos de prescripción con efectos reales y consideraciones reales, y por eso la clínica los ofrece solo dentro de un programa supervisado por una médica.",
      "El programa comienza con una consulta y análisis de laboratorio. La Dra. Olivo revisa su historial, sus medicamentos actuales y sus objetivos, y decide si un medicamento GLP-1 es apropiado. Si lo es, usted comienza con una dosis inicial y seguimientos programados para ajustar el plan y monitorear cómo se siente.",
      "La medicación es una parte del programa. La nutrición, el movimiento y, para algunas personas, Emsculpt Neo para el tono a medida que cambia el peso, lo complementan. La candidatura y las expectativas se definen en su consulta. No se promete ningún resultado específico.",
    ],
    benefits: ["Supervisado por una médica desde la primera visita", "Consulta y análisis de laboratorio antes de cualquier prescripción", "Seguimientos regulares y ajustes de dosis", "Orientación sobre nutrición y movimiento incluida", "Se combina con Emsculpt Neo a medida que cambia el peso"],
    session: { duration: "Consulta inicial de unos 45 minutos", sessions: "Programa continuo con seguimientos programados", downtime: "Ninguna", feels: "Una pequeña inyección semanal, a menudo autoadministrada en casa tras recibir instrucción", results: "El cambio ocurre a lo largo de meses y varía ampliamente; el progreso se revisa en cada seguimiento" },
    goodFor: ["Adultos que no han alcanzado su objetivo solo con dieta y ejercicio", "Personas que buscan supervisión médica y seguimientos regulares", "Cualquier persona autorizada en la consulta y tras la revisión de laboratorio"],
    faqs: [
      { q: "¿Qué medicamento me van a prescribir?", a: "Eso se decide en su consulta después de los análisis de laboratorio. Existen varios medicamentos GLP-1 y la Dra. Olivo elige según su historial, si es que alguno es apropiado." },
      { q: "¿Cuáles son los efectos secundarios?", a: "Las náuseas, el estreñimiento y la reducción del apetito son comunes, sobre todo al inicio. La Dra. Olivo revisa la lista completa con usted y ajusta la dosis para manejarlos." },
      { q: "¿Cuánto dura el programa?", a: "Varía. Muchas personas permanecen con la medicación durante meses, con seguimientos a lo largo del proceso. El plan se revisa con regularidad." },
      { q: "¿Lo cubre el seguro?", a: "Pregunte en su consulta. Financiamiento disponible a través de Cherry. Los términos los establece Cherry al momento de la solicitud." },
    ],
    seo: { title: "Control de peso con GLP-1 en Chicago | Olivo Med Spa", description: "Control de peso con medicación GLP-1, supervisado por una médica, en Olivo Med Spa, Logan Square. Consulta y análisis primero, seguimientos regulares." },
  },
  "hormone-therapy": {
    name: "Terapia hormonal",
    tag: "Bienestar · Supervisado por una médica",
    headline: "Evaluación y reemplazo hormonal para adultos, supervisados por una médica, comenzando con análisis de laboratorio.",
    summary: "La terapia hormonal en Olivo Med Spa comienza con una consulta y análisis de sangre. La Dra. Olivo revisa sus síntomas y resultados y, cuando es apropiado, prescribe y monitorea el reemplazo hormonal. Logan Square, Chicago.",
    intro: [
      "Los cambios en el sueño, la energía, el estado de ánimo, el peso y la libido en la mediana edad pueden tener muchas causas. Las hormonas son una de ellas. La clínica ofrece una evaluación supervisada por una médica: una conversación sobre sus síntomas y su historial, y luego análisis de laboratorio para medir dónde están sus niveles.",
      "Si los resultados y sus síntomas apuntan al reemplazo hormonal, la Dra. Olivo conversa con usted sobre las opciones, lo que pueden y no pueden abordar, y el monitoreo que implican. El tratamiento es individualizado y se revisa en seguimientos regulares con análisis repetidos.",
      "La terapia hormonal no es adecuada para todas las personas y nunca se inicia sin análisis de laboratorio y una revisión médica. La candidatura y las expectativas se definen en su consulta.",
    ],
    benefits: ["Evaluación de síntomas y análisis dirigida por una médica", "Análisis de laboratorio antes de cualquier prescripción", "Plan individualizado", "Seguimientos regulares con análisis repetidos", "Opciones y monitoreo explicados con claridad"],
    session: { duration: "Consulta inicial de unos 45 minutos", sessions: "Continuo, con seguimientos y análisis repetidos", downtime: "Ninguna", feels: "Una extracción de sangre y una conversación; el formato del tratamiento varía según el plan", results: "Cualquier cambio se desarrolla en semanas a meses y se revisa frente a sus análisis y síntomas" },
    goodFor: ["Adultos con síntomas de la mediana edad que podrían relacionarse con los niveles hormonales", "Personas que buscan una evaluación médica antes de decidir un tratamiento", "Cualquier persona autorizada en la consulta tras la revisión de laboratorio"],
    faqs: [
      { q: "¿En qué consiste la primera visita?", a: "Una revisión de sus síntomas y su historial, y luego una orden de análisis de laboratorio. Los resultados se comentan en un seguimiento antes de cualquier decisión sobre el tratamiento." },
      { q: "¿Atienden a mujeres y a hombres?", a: "La evaluación está disponible para adultos. Que se ofrezca tratamiento depende de sus análisis y su historial." },
      { q: "¿Qué formas toma el tratamiento?", a: "Depende del plan que recomiende la Dra. Olivo. Las opciones se comentan en su seguimiento junto con sus requisitos de monitoreo." },
      { q: "¿Con qué frecuencia se repiten los análisis?", a: "En los intervalos que define la Dra. Olivo según su plan. El monitoreo es parte del tratamiento." },
    ],
    seo: { title: "Terapia hormonal en Logan Square, Chicago | Olivo Med Spa", description: "Evaluación y reemplazo hormonal para adultos, supervisados por una médica, en Olivo Med Spa, Logan Square. Análisis primero, seguimientos regulares." },
  },
  "emfemme-360": {
    name: "Emfemme 360",
    tag: "Bienestar íntimo · Sin recuperación",
    headline: "Un tratamiento de radiofrecuencia para el bienestar íntimo, de unos ocho minutos, sin recuperación.",
    summary: "Emfemme 360 es un tratamiento de radiofrecuencia para el bienestar íntimo de BTL. Las sesiones son cortas, cómodas y no requieren recuperación. Se ofrece como parte de un plan de bienestar femenino dirigido por una médica en Logan Square.",
    intro: [
      "Emfemme 360 forma parte de la plataforma BTL de la clínica. Emite energía de radiofrecuencia en un patrón controlado de 360 grados para calentar suavemente el tejido como parte de un plan de bienestar íntimo. Las sesiones son cortas y cómodas, y no hay recuperación.",
      "Un plan típico es una serie corta de sesiones con alrededor de una semana de separación, y cada sesión toma unos ocho minutos. Muchas personas combinan Emfemme 360 con Emsella para el fortalecimiento del suelo pélvico. La Dra. Olivo conversa con usted sobre si esa combinación tiene sentido en su caso.",
      "Este es un tratamiento médico, y se conversa en privado. La candidatura, el uso del tratamiento y las expectativas se definen en una consulta con la Dra. Olivo.",
    ],
    benefits: ["Tratamiento de radiofrecuencia para el bienestar íntimo", "Sesiones cortas, de unos ocho minutos", "Sin recuperación", "Se combina con Emsella", "Dirigido por una médica y tratado en privado"],
    session: { duration: "Unos 8 minutos", sessions: "Una serie corta, con alrededor de una semana de separación", downtime: "Ninguna", feels: "Calor suave", results: "El cambio suele notarse en las semanas posteriores a la serie" },
    goodFor: ["Mujeres adultas que consideran un plan de bienestar íntimo", "Personas que ya usan Emsella para el fortalecimiento del suelo pélvico", "Cualquier persona autorizada en la consulta"],
    faqs: [
      { q: "¿Qué se siente en la sesión?", a: "Calor suave. Es corta y la mayoría de las personas la describe como cómoda." },
      { q: "¿Requiere tiempo de recuperación?", a: "No. Puede retomar su día con normalidad." },
      { q: "¿En qué se diferencia de Emsella?", a: "Emsella fortalece los músculos del suelo pélvico desde una silla, con la ropa puesta. Emfemme 360 es un tratamiento de radiofrecuencia para el bienestar íntimo. Suelen usarse juntos." },
      { q: "¿Cuántas sesiones?", a: "Una serie corta, normalmente con alrededor de una semana de separación. La Dra. Olivo define su plan en la consulta." },
    ],
    seo: { title: "Emfemme 360 en Logan Square, Chicago | Olivo Med Spa", description: "Emfemme 360 en Olivo Med Spa, Logan Square: radiofrecuencia para el bienestar íntimo. Sesiones cortas, sin recuperación, dirigido por una médica." },
  },
  "for-men": {
    name: "Tratamientos para hombres",
    tag: "Para hombres · Cuerpo, sudor, vello, rostro",
    headline: "Los tratamientos que más reservan los hombres: Emsculpt Neo, Miradry, depilación láser, Botox Cosmetic e Hydrafacial.",
    summary: "Los hombres acuden a la clínica por razones prácticas. Esta página cubre lo que más reservan: Emsculpt Neo para músculo y grasa, Miradry para el sudor de las axilas, depilación láser, Botox Cosmetic e Hydrafacial, todo dirigido por una médica en Logan Square.",
    intro: [
      "Los hombres vienen a la clínica por razones prácticas. Quieren un abdomen más plano, dejar de sudar a través de la camisa, eliminar el vello de la espalda o el cuello, o verse menos cansados sin que nadie note por qué. Los tratamientos a continuación son los que más reservan los hombres, y la Dra. Olivo planifica cada uno de la misma manera que para cualquier paciente.",
      "Emsculpt Neo desarrolla músculo y reduce grasa en el abdomen, los brazos y las piernas en sesiones de treinta minutos. Miradry ofrece una reducción duradera del sudor de las axilas, normalmente en una o dos visitas. La depilación láser se ocupa de la espalda, los hombros, el cuello y el pecho a lo largo de una serie de sesiones.",
      "Botox Cosmetic suaviza las líneas de la frente y del entrecejo sin perder la expresión. Hydrafacial limpia e hidrata la piel en unos treinta minutos, sin recuperación. La candidatura y las expectativas de cada uno se definen en una consulta.",
    ],
    benefits: ["Emsculpt Neo para músculo y grasa", "Miradry para el sudor de las axilas", "Depilación láser para espalda, cuello y pecho", "Botox Cosmetic para las líneas de la frente y del entrecejo", "Hydrafacial para una piel limpia e hidratada"],
    session: { duration: "Varía según el tratamiento, unos 30 minutos en la mayoría", sessions: "Se define por tratamiento en la consulta", downtime: "De ninguna a mínima en los tratamientos listados", feels: "Depende del tratamiento; cada uno se describe en su propia página", results: "El tiempo depende del tratamiento y se revisa en la consulta" },
    goodFor: ["Hombres que buscan un resultado específico y práctico", "Hombres que nunca han ido a un med spa", "Cualquier persona autorizada en la consulta"],
    faqs: [
      { q: "¿La clínica es cómoda para los hombres?", a: "Sí. Las salas de tratamiento son privadas y las citas son individuales. Muchos pacientes son hombres." },
      { q: "¿Con qué tratamiento debo empezar?", a: "Empiece con una consulta. La Dra. Olivo le preguntará qué le molesta y le sugerirá el tratamiento o los dos tratamientos que lo abordan." },
      { q: "¿Botox Cosmetic se ve natural en los hombres?", a: "Sí, cuando se dosifica para un rostro masculino. El objetivo es menos líneas, no un cambio en la expresión." },
      { q: "¿Cuánto tarda la depilación láser?", a: "Una serie de sesiones con varias semanas de separación. La espalda y los hombros toman más tiempo por sesión que el cuello." },
    ],
    seo: { title: "Tratamientos para hombres en Chicago | Olivo Med Spa", description: "Tratamientos para hombres en Olivo Med Spa, Logan Square: Emsculpt Neo, Miradry, depilación láser, Botox Cosmetic e Hydrafacial. Dirigido por una médica." },
  },
};
