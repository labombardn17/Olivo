// Spanish translations of forPatients and giftCards in content/patients.ts.
// Same shapes. Category keys and verify notes stay in English, unchanged.
import type { forPatients, giftCards } from "../patients";

export const forPatientsEs: typeof forPatients = {
  intro:
    "Cada visita a Olivo Med Spa comienza con una conversación y termina con un plan por escrito. Esta página explica qué esperar, qué traer y cómo maneja la clínica el lado práctico de su atención.",
  firstVisit: [
    { step: "Reserva", line: "Reserve en línea a través de Vagaro, o llame o escriba a la clínica en horario de atención. Elija una consulta si es su primera visita o no sabe qué tratamiento le conviene." },
    { step: "Llegada y admisión", line: "Llegue unos minutos antes. Completará un breve historial médico y un consentimiento para la visita, en papel o en una tableta." },
    { step: "Consulta", line: "Se reúne con el equipo clínico. Observan, escuchan y preguntan sobre sus objetivos, su historial y su disponibilidad." },
    { step: "Plan por escrito", line: "Se va con un plan en palabras sencillas: el tratamiento, el número de visitas, el tiempo de recuperación previsto y qué resultados esperar." },
    { step: "Tratamiento o programación", line: "Si cumple los criterios y el plan lo permite, el tratamiento puede realizarse el mismo día. De lo contrario, programa la primera sesión antes de irse." },
  ],
  firstVisitVerify: "Same-day treatment availability and intake format (paper or tablet): clinic to confirm",
  bring: [
    "Una identificación con fotografía",
    "Una lista de sus medicamentos, suplementos y alergias",
    "Los productos de cuidado de la piel que usa actualmente, o una foto de ellos",
    "Sus preguntas, por escrito",
    "Registros de tratamientos estéticos previos, si los tiene",
  ],
  policies: [
    {
      title: "Cambios y cancelaciones de citas",
      lines: [
        "La clínica pide aviso previo si necesita cambiar o cancelar una cita, para que el horario pueda ofrecerse a otro paciente.",
        "La política vigente, incluido el plazo de aviso y cualquier cargo por cancelación tardía o inasistencia, se le confirma al reservar.",
      ],
      verify: "Cancellation policy: clinic to supply the exact hours of notice and any fee",
    },
    {
      title: "Llegadas tarde",
      lines: [
        "Si va con retraso, llame o escriba para que el equipo pueda ajustarse.",
        "Una llegada tarde puede acortar el tiempo de su tratamiento o requerir reprogramación, para que el siguiente paciente comience a tiempo.",
      ],
      verify: "Late arrival grace period: clinic to confirm",
    },
    {
      title: "Menores de edad y acompañantes",
      lines: [
        "Los pacientes menores de 18 años necesitan la presencia de un padre, madre o tutor legal para la consulta y el consentimiento.",
        "Puede traer un acompañante a la sala de espera. Por seguridad y privacidad, los acompañantes generalmente esperan fuera de la sala de tratamiento.",
        "Los niños no pueden quedarse sin supervisión en la sala de espera.",
      ],
      verify: "Minor treatment policy and guest rules: clinic to confirm",
    },
    {
      title: "Formas de pago",
      lines: [
        "La clínica acepta las principales tarjetas de crédito y débito.",
        "Financiamiento disponible a través de Cherry. Los términos los establece Cherry al momento de la solicitud.",
        "Las membresías se gestionan a través del portal de miembros de la clínica y se aplican al momento de pagar.",
      ],
      verify: "Accepted payment methods (cash, HSA/FSA, checks): clinic to confirm",
    },
    {
      title: "Historial médico y consentimiento",
      lines: [
        "Completa un historial médico en su primera visita y lo actualiza cuando algo cambia.",
        "Antes de cada tratamiento nuevo se revisa con usted un formulario de consentimiento específico, y puede hacer preguntas en cualquier momento.",
      ],
      verify: "Consent workflow: clinic to confirm",
    },
    {
      title: "Fotografías",
      lines: [
        "Se toman fotografías clínicas antes y después del tratamiento para su expediente. Ayudan al equipo a seguir su progreso.",
        "Estas fotos forman parte de su historial médico y nunca se publican, comparten ni difunden sin su autorización escrita por separado.",
      ],
      verify: "Photo consent language: counsel to review",
    },
  ],
  aftercare: [
    {
      category: "body-contouring",
      title: "Contorno corporal",
      lines: [
        "Beba agua durante el resto del día. La actividad ligera está bien.",
        "Es común sentir molestias leves o calor en la zona tratada, y desaparecen por sí solos.",
        "Mantenga la zona tratada alejada de fuentes de calor durante el periodo que le indique el equipo.",
        "Llame a la clínica si nota ampollas, hinchazón marcada o un dolor que empeora en lugar de mejorar.",
      ],
      verify: "Body contouring aftercare: clinical team to confirm against device protocols",
    },
    {
      category: "facial-lifting",
      title: "Lifting facial",
      lines: [
        "Lávese con suavidad y aplique protector solar antes de salir.",
        "Evite el calor, los saunas y el ejercicio intenso durante el periodo que el equipo le indique.",
        "El enrojecimiento o la sensación de tirantez suelen desaparecer en un día.",
        "Llame a la clínica si el enrojecimiento se intensifica, la hinchazón se extiende o presenta fiebre.",
      ],
      verify: "Facial lifting aftercare: clinical team to confirm",
    },
    {
      category: "injectables",
      title: "Inyectables",
      lines: [
        "Manténgase erguido y evite presionar la zona tratada durante el resto del día.",
        "Evite el ejercicio intenso, el alcohol y el calor durante el periodo que le indique el equipo.",
        "Los pequeños bultos o moretones son comunes y suelen desaparecer en pocos días.",
        "Llame a la clínica de inmediato si presenta dolor inusual, cambios en el color de la piel o cambios en la visión.",
      ],
      verify: "Injectable aftercare: clinical team to confirm",
    },
    {
      category: "skin-resurfacing",
      title: "Renovación de la piel",
      lines: [
        "Mantenga la piel limpia e hidratada con los productos que recomiende el equipo.",
        "Evite el sol directo y use protector solar a diario. El equipo le indicará el periodo que aplica en su caso.",
        "No se rasque ni retire la piel que se descama. Deje que se desprenda por sí sola.",
        "Llame a la clínica si observa signos de infección, como enrojecimiento que se extiende, pus o fiebre.",
      ],
      verify: "Resurfacing aftercare: clinical team to confirm by depth of treatment",
    },
    {
      category: "laser-and-light",
      title: "Láser y luz",
      lines: [
        "Las compresas frías ayudan con el calor o el enrojecimiento en las primeras horas.",
        "Proteja la zona tratada del sol y evite broncearse durante el periodo que le indique el equipo.",
        "Evite las duchas calientes, los saunas y el ejercicio intenso hasta que el equipo le indique que puede retomarlos.",
        "Llame a la clínica si nota ampollas, costras o una sensación de ardor que no cede.",
      ],
      verify: "Laser aftercare: clinical team to confirm per device",
    },
    {
      category: "facials-and-peels",
      title: "Faciales y peelings",
      lines: [
        "Use un limpiador suave e hidratante, y aplique protector solar cada mañana.",
        "Suspenda los retinoides, exfoliantes y ácidos durante el periodo que le indique el equipo.",
        "Es normal una descamación leve después de un peeling. No la frote para quitarla.",
        "Llame a la clínica si presenta hinchazón, urticaria o molestias que duren más de un día.",
      ],
      verify: "Facial and peel aftercare: esthetics team to confirm",
    },
    {
      category: "sweat",
      title: "Sudoración axilar",
      lines: [
        "Aplique hielo en las axilas según las indicaciones y tome el analgésico de venta libre que recomiende el equipo.",
        "Es normal tener hinchazón y sensibilidad durante varios días. La ropa holgada ayuda.",
        "Evite el ejercicio intenso y el desodorante durante el periodo que le indique el equipo.",
        "Llame a la clínica si nota una ampolla, una zona abierta o un entumecimiento que persiste.",
      ],
      verify: "Miradry aftercare: clinical team to confirm against manufacturer guidance",
    },
    {
      category: "wellness",
      title: "Bienestar",
      lines: [
        "Beba agua y coma con normalidad, a menos que el equipo le indique lo contrario.",
        "La mayoría de las visitas de bienestar no requieren recuperación. Puede continuar con su día.",
        "Siga las instrucciones específicas de su servicio; el equipo le dirá a qué prestar atención.",
        "Llame a la clínica ante cualquier síntoma nuevo que le genere dudas.",
      ],
      verify: "Wellness aftercare varies by service; clinical team to supply per-service instructions",
    },
    {
      category: "removals",
      title: "Eliminaciones",
      lines: [
        "Mantenga la zona limpia, cubierta según las indicaciones y seca durante el primer día.",
        "Evite la exposición al sol y no se rasque las costras mientras la zona cicatriza.",
        "Evite nadar, los jacuzzis y sudar en exceso durante el periodo que le indique el equipo.",
        "Llame a la clínica ante signos de infección, sangrado que no se detiene o dolor que empeora.",
      ],
      verify: "Removal aftercare: clinical team to confirm by procedure",
    },
  ],
  aftercareNote: "Estas son pautas generales. Las instrucciones que reciba en su visita son específicas para usted y tienen prioridad.",
  faqs: [
    { q: "¿Dónde puedo estacionar?", a: "Hay estacionamiento en la calle en Fullerton y en las calles cercanas. La estación California de la Línea Azul y el autobús 74 Fullerton quedan a pocos pasos.", verify: "Parking and transit: clinic to confirm" },
    { q: "¿Qué debo vestir?", a: "Algo cómodo que permita acceder fácilmente a la zona que se va a tratar. Para tratamientos corporales, ropa holgada que pueda quitarse. Para tratamientos faciales, llegue con el rostro limpio si le es posible." },
    { q: "¿Necesito una consulta primero?", a: "Los pacientes nuevos comienzan con una consulta. Allí se definen la candidatura y las expectativas, y de allí sale su plan por escrito. Los pacientes que ya tienen un plan pueden reservar el tratamiento directamente." },
    { q: "¿Puedo traer a alguien?", a: "Sí. Puede traer un acompañante a la sala de espera. Por privacidad y seguridad, los acompañantes generalmente esperan fuera de la sala de tratamiento." },
    { q: "¿Pueden atenderme en español?", a: "Sí. El equipo incluye personas que hablan español. Avise en la recepción al reservar y programarán su cita en consecuencia.", verify: "Spanish-speaking staff availability by day: clinic to confirm" },
    { q: "¿Cómo me comunico con la clínica fuera del horario de atención?", a: "Deje un mensaje de voz o envíe un mensaje de texto y el equipo le responderá en horario de atención. En caso de emergencia médica, llame al 911." },
  ],
};

export const giftCardsEs: typeof giftCards = {
  intro: "Una tarjeta de regalo de Olivo Med Spa permite que la persona elija su propio tratamiento o productos de cuidado de la piel, con una consulta incluida en la visita.",
  how: [
    { step: "Elija un monto", line: "Elija el valor que desea regalar. La tarjeta no está ligada a un tratamiento específico." },
    { step: "Se la entregamos", line: "La tarjeta se envía por correo electrónico a usted o a la persona destinataria, o se le entrega en la clínica." },
    { step: "La persona reserva", line: "La persona destinataria reserva cualquier tratamiento o retira cualquier producto dispensado y aplica la tarjeta al pagar." },
  ],
  notes: [
    "Válida para cualquier tratamiento o producto dispensado en la clínica.",
    "Los términos se entregan junto con la tarjeta.",
    "Disponible en la clínica y en línea a través del sistema de reservas.",
  ],
  verify: "Gift card purchase link, expiration terms, and delivery method: clinic to confirm",
};
