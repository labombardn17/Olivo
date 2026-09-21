// Spanish translations of blog posts, keyed by the English slug. Structure,
// dates, related links, and verify notes stay in content/blog.ts and
// content/blog-2.ts. See docs/CONTENT-RULES.md before editing.
import type { PostEs } from "./types";
import { postsEsMore } from "./blog-2";
import { postsEsMore2 } from "./blog-3";

const postsEsBase: Record<string, PostEs> = {
  "when-moisturizer-is-not-enough": {
    title: "Cuando la crema hidratante no es suficiente",
    excerpt: "La piel cambia de maneras que una crema no puede alcanzar. Aquí le explicamos cómo saber cuándo es momento de un facial, un peeling o un resurfacing en lugar de otro producto.",
    sections: [
      { h: "Qué cambia a medida que la piel envejece", p: [
        "A los veinte años la piel renueva su capa externa aproximadamente cada mes. Ese ciclo se hace más lento con el tiempo, así que las células muertas permanecen más tiempo en la superficie y la piel se ve menos luminosa. Por debajo, el cuerpo produce menos colágeno y elastina cada año, y las almohadillas de grasa que dan forma al rostro comienzan a adelgazarse. La exposición al sol acelera todo este proceso.",
        "La crema hidratante hace bien una sola cosa: retiene el agua en la capa externa y mantiene la barrera cómoda. Eso importa. No acelera la renovación celular, no reconstruye el colágeno ni elimina el pigmento que ya se ha asentado. Cuando el problema está debajo de la superficie, un producto que actúa en la superficie solo puede llegar hasta cierto punto.",
      ] },
      { h: "Cuándo tiene sentido un facial", p: [
        "Si su piel se ve opaca, se siente áspera o tiene congestión, un facial profesional es el primer paso adecuado. Hydrafacial y DiamondGlow exfolian, extraen e infunden hidratación en una sola visita y sin tiempo de recuperación. El dermaplaning retira la capa superficial y el vello fino para que los productos se absorban mejor. Son tratamientos de mantenimiento y funcionan bien con un ritmo de cuatro a seis semanas.",
      ] },
      { h: "Cuándo tiene sentido un peeling o un resurfacing", p: [
        "Los peelings van un paso más allá. Un peeling químico de grado médico retira la superficie de forma controlada y le indica a la piel que se renueve, lo que ayuda con el tono desigual, la textura fina y el daño solar leve. Espere algo de descamación durante unos días después de las versiones más fuertes, y planifique en consecuencia.",
        "El resurfacing es para cambios que un peeling no puede alcanzar: líneas marcadas, cicatrices de acné, daño solar más profundo y textura crepé. Tratamientos como Opus Plasma, el microneedling con radiofrecuencia y el láser fraccionado crean una lesión controlada para que la piel se reconstruya con colágeno nuevo. El tiempo de recuperación va de un par de días a aproximadamente una semana, y es común hacer una serie.",
      ] },
      { h: "Cómo decidir", p: [
        "La respuesta honesta es que la mayoría de las personas se benefician de combinar una rutina en casa con cuidados periódicos en el consultorio. En Olivo Med Spa, la Dra. Olivo examina su piel en persona, le pregunta qué ha cambiado y qué le molesta, y recomienda el tratamiento más ligero que realmente marque una diferencia. A veces es un mejor producto de ZO Skin Health o Skinbetter Science. A veces es una serie de peelings. La candidatura y las expectativas se definen en la consulta, no en una publicación de blog.",
      ] },
    ],
    seo: { title: "Cuando la crema no es suficiente | Olivo Med Spa", description: "Cómo cambia la piel con la edad y cuándo un facial, un peeling o un resurfacing tiene más sentido que otro producto. Olivo Med Spa, Logan Square, Chicago." },
  },
  "wrinkle-relaxers-explained": {
    title: "Relajantes de arrugas explicados: Botox Cosmetic y Xeomin",
    excerpt: "Cómo funcionan Botox Cosmetic y Xeomin, cómo es una primera visita y cuánto tiempo suele esperar la gente entre visitas.",
    sections: [
      { h: "Cómo funcionan", p: [
        "Botox Cosmetic y Xeomin son ambos formas de toxina botulínica tipo A. Inyectados en pequeñas cantidades en un músculo específico, bloquean la señal que le indica a ese músculo que se contraiga. El músculo se relaja, la piel que lo cubre deja de plegarse y la línea que estaba creando se suaviza. Las líneas que aparecen solo con la expresión son las que mejor responden. Las líneas marcadas en la piel en reposo se suavizan de forma más gradual y pueden necesitar otros tratamientos complementarios.",
        "Los dos productos están estrechamente relacionados. Xeomin es una forma purificada sin las proteínas accesorias que se encuentran en Botox Cosmetic, algo que algunos clínicos y pacientes prefieren. En la práctica, la Dra. Olivo elige entre ellos según su historial, la zona y lo que ha funcionado para usted antes.",
      ] },
      { h: "Cómo es una primera visita", p: [
        "Comienza con una conversación. La Dra. Olivo le pregunta qué le molesta, observa cómo se mueve su rostro y le explica lo que un relajante puede y no puede hacer por esas líneas. Revisa su historial médico y sus medicamentos. Si el tratamiento es adecuado para usted, suele realizarse el mismo día.",
        "Las inyecciones en sí toman entre diez y quince minutos. La aguja es muy fina y la mayoría de las personas describen un pinchazo rápido. No se necesita anestesia tópica en la mayoría de las zonas. Puede tener pequeños bultos en los puntos de inyección que se asientan en menos de una hora, y puede regresar al trabajo después.",
      ] },
      { h: "Qué sucede después", p: [
        "Nada cambia de inmediato. El relajante tarda unos días en comenzar a actuar y el efecto completo se establece en aproximadamente dos semanas. La Dra. Olivo suele programar un breve seguimiento por esas fechas para revisar la simetría y hacer pequeños ajustes si es necesario.",
        "El efecto desaparece gradualmente a medida que el músculo recupera su señal. La mayoría de las personas regresan típicamente cada tres o cuatro meses. Algunas esperan más, sobre todo después de varios tratamientos consistentes. Su intervalo es algo que usted y la Dra. Olivo definen con el tiempo, no una regla fija.",
      ] },
      { h: "Cuidados posteriores en términos sencillos", p: [
        "Durante el resto del día, mantenga una postura erguida durante unas horas, evite el ejercicio intenso y no frote ni masajee la zona tratada. El maquillaje puede aplicarse después de una breve espera. Los moretones son posibles pero poco comunes, y si aparecen se desvanecen como cualquier moretón pequeño. Los resultados individuales varían, y la dosis adecuada para usted se define en su consulta.",
      ] },
    ],
    seo: { title: "Relajantes de arrugas explicados | Olivo Med Spa", description: "Cómo funcionan Botox Cosmetic y Xeomin, qué implica una primera visita y con qué frecuencia regresan los pacientes. Dra. Olivo, Logan Square, Chicago." },
  },
  "emsculpt-neo-what-to-expect": {
    title: "Emsculpt Neo: qué esperar en su primera sesión",
    excerpt: "Un recorrido sencillo por una primera sesión de Emsculpt Neo, desde la consulta hasta el regreso a casa.",
    sections: [
      { h: "Antes de llegar", p: [
        "Su consulta viene primero. La Dra. Olivo confirma la zona, verifica cualquier factor que descarte el tratamiento, como implantes metálicos cerca del sitio o embarazo, y planifica una serie. El día de la sesión, coma con normalidad, beba agua y use ropa cómoda. No hay nada que rasurar ni preparar, y no necesita ayunar.",
      ] },
      { h: "En la sala", p: [
        "Usted se recuesta en la camilla de tratamiento y el aplicador se sujeta sobre la zona, generalmente el abdomen, los glúteos, los brazos, los muslos o las pantorrillas. La sesión comienza a baja intensidad. Primero siente el calor de la radiofrecuencia y luego los pulsos electromagnéticos comienzan a contraer el músculo. El ritmo alterna entre contracciones y una fase de golpeteo que ayuda a eliminar lo que el músculo libera.",
        "La intensidad se aumenta gradualmente durante la sesión según lo que usted pueda tolerar con comodidad. Se siente como un entrenamiento intenso que usted no está realizando por su cuenta. Puede conversar, escuchar música o mirar el temporizador. El equipo permanece en la sala durante los primeros minutos para verificar el ajuste del aplicador y la intensidad. Todo el proceso dura unos treinta minutos.",
      ] },
      { h: "Después", p: [
        "Se levanta, se viste y se va. No hay tiempo de recuperación. Algunas personas sienten calor en la zona durante un rato y un leve dolor muscular al día siguiente, similar al de una sesión de entrenamiento exigente. Puede conducir, trabajar y hacer ejercicio como de costumbre. Beba agua a lo largo del día; algunas personas notan que ayuda con las molestias del día siguiente.",
        "Una serie estándar consta de cuatro sesiones con un intervalo de cinco a diez días. Como el cuerpo elimina la grasa tratada y desarrolla músculo a lo largo de semanas, el cambio es gradual y no inmediato. La Dra. Olivo programa una revisión después de la serie y conversa sobre el mantenimiento a través del Emsculpt NEO Club si le conviene.",
      ] },
      { h: "Para quién es", p: [
        "Emsculpt Neo es adecuado para personas que ya están cerca de su objetivo y quieren más definición en una zona específica. No es un tratamiento para bajar de peso. Los implantes metálicos o electrónicos cerca de la zona de tratamiento, el embarazo y algunas condiciones médicas lo descartan, y por eso el historial va primero. Si el peso es la preocupación principal, la Dra. Olivo puede hablar primero sobre el manejo médico del peso y dejar el contorno corporal para después. La candidatura y las expectativas se definen en la consulta. Los resultados individuales varían.",
      ] },
    ],
    seo: { title: "Emsculpt Neo: qué esperar | Olivo Med Spa", description: "Cómo es una primera sesión de Emsculpt Neo en Olivo Med Spa en Chicago: preparación, sensaciones, cuidados posteriores y cómo se planifica la serie." },
  },
  "sweating-through-shirts-miradry-vs-other-options": {
    title: "Sudar hasta empapar la camisa: Miradry frente a otras opciones",
    excerpt: "Antitranspirante de potencia clínica, inyecciones y Miradry comparados en términos sencillos, para que decida sobre qué preguntar.",
    sections: [
      { h: "Por qué algunas personas sudan más", p: [
        "Sudar es la forma en que el cuerpo se enfría. En algunas personas, las glándulas sudoríparas de las axilas responden mucho más de lo que el enfriamiento requiere, una condición llamada hiperhidrosis. El calor, el estrés, la cafeína y las hormonas la intensifican. Es común, no es un problema de higiene y existen opciones reales más allá de un desodorante más fuerte. Algunas personas han sudado en exceso desde la adolescencia. Otras lo notan más tarde, a veces junto con un cambio hormonal o de medicación. En cualquier caso, una médica debe conocer el historial antes de recomendar cualquier cosa.",
      ] },
      { h: "Antitranspirante de potencia clínica", p: [
        "Los productos de potencia clínica de venta libre y los antitranspirantes de receta utilizan sales de aluminio para taponar temporalmente los conductos sudoríparos. Aplicados por la noche sobre la piel seca y retirados por la mañana, funcionan razonablemente bien en casos leves. Las desventajas son la irritación, las manchas y el hecho de que deben reaplicarse constantemente. Si le están funcionando, no hay razón para cambiar.",
      ] },
      { h: "Inyecciones", p: [
        "Las inyecciones de toxina botulínica, de la misma familia que Botox Cosmetic y Xeomin, pueden aplicarse en forma de cuadrícula en cada axila para bloquear la señal nerviosa hacia las glándulas sudoríparas. La visita es corta y el efecto dura varios meses, tras lo cual se repite. Los moretones y una leve sensibilidad en los puntos de inyección son los efectos secundarios habituales. Es una opción intermedia razonable para quienes quieren una prueba de concepto antes de comprometerse con un dispositivo, o para quienes prefieren no recibir un tratamiento con dispositivo en absoluto.",
      ] },
      { h: "Miradry", p: [
        "Miradry utiliza energía de microondas aplicada mediante una pieza de mano en la capa de la piel donde se encuentran las glándulas del sudor y del olor. Las glándulas quedan desactivadas y no se regeneran, por lo que el cambio perdura. Primero se anestesia la axila, el tratamiento dura aproximadamente una hora, y es normal tener hinchazón y sensibilidad durante varios días después. Muchas personas quedan satisfechas después de una sesión y algunas eligen una segunda.",
        "La contrapartida es una cita más compleja y un compromiso inicial mayor a cambio de un resultado que no necesita repetirse cada pocos meses. Miradry trata únicamente las axilas. La sudoración en las palmas, los pies o el cuero cabelludo requiere un plan diferente. La Dra. Olivo revisa lo que usted ha probado y dónde suda. La candidatura y las expectativas se definen en la consulta. Los resultados individuales varían.",
      ] },
    ],
    seo: { title: "Miradry frente a otras opciones | Olivo Med Spa", description: "Antitranspirante clínico, inyecciones y Miradry comparados en términos sencillos por el equipo de Olivo Med Spa, dirigido por una médica, en Chicago." },
  },
};

export const postsEs: Record<string, PostEs> = { ...postsEsBase, ...postsEsMore, ...postsEsMore2 };
