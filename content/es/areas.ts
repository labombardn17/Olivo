// Spanish (Latin American) copy for neighborhood pages, keyed by the English
// slug. Neighborhood, street, and transit names stay in English. Structure,
// popular treatments, and verify notes stay in content/areas.ts.
import type { AreaEs } from "./types";

export const areasEs: Record<string, AreaEs> = {
  "logan-square": {
    name: "Logan Square",
    travel: "Una caminata corta o un trayecto en autobús desde la mayor parte del barrio",
    route: "La clínica está en Fullerton entre Maplewood y Rockwell, dos cuadras al oeste de Western. Desde la estación California de la Blue Line, camine hacia el norte por California hasta Fullerton y luego unas cuadras hacia el este. El autobús 74 Fullerton se detiene cerca de la puerta en ambas direcciones.",
    intro: [
      "Olivo Med Spa forma parte de Logan Square desde 2013, cuando la Dra. Jacqueline Olivo abrió una práctica dirigida por una médica en Fullerton Avenue. El barrio ha cambiado mucho desde entonces. La clínica ha mantenido la misma idea: una doctora le atiende, le escucha y construye un plan que se ajusta a su rostro, su cuerpo y su agenda.",
      "Por la cercanía, muchos pacientes de Logan Square usan la clínica como usarían a un buen dentista: un facial Skin Club cada mes, relajantes de arrugas algunas veces al año y una serie de Emsculpt Neo o de reducción de vello con láser cuando el momento es el adecuado. Todo bajo un mismo techo, con nueve plataformas de dispositivos en el lugar.",
    ],
    notes: ["A pie desde los bulevares, Palmer Square y el corredor de Milwaukee Avenue", "Estacionamiento en la calle en Fullerton y en las calles laterales cercanas", "Los vecinos suelen reservar visitas de mantenimiento de camino a casa desde el trabajo"],
    seo: { title: "Med spa en Logan Square, Chicago | Olivo Med Spa", description: "Olivo Med Spa es un med spa dirigido por una médica en Fullerton Ave, Logan Square, Chicago, desde 2013. Inyectables, Emsculpt Neo, láseres y faciales." },
  },
  "bucktown": {
    name: "Bucktown",
    travel: "Entre 5 y 10 minutos en auto",
    route: "Tome Damen o Western hacia el norte hasta Fullerton y luego diríjase al oeste hasta Rockwell. El autobús 74 Fullerton va hacia el oeste desde las esquinas de Damen y Western directo a la clínica. Desde la estación Damen de la Blue Line, viaje tres paradas al noroeste hasta California y camine hacia el norte.",
    intro: [
      "Bucktown está justo al sureste de la clínica, tan cerca que un tratamiento cabe entre los mandados en Damen y la cena en Armitage. Muchos pacientes vienen primero por algo rápido, como una visita de relajante de arrugas o un Hydrafacial, y luego descubren el menú más amplio que ofrece una clínica dirigida por una médica.",
      "La Dra. Olivo ha atendido a residentes de Bucktown durante más de una década. El barrio tiende a pedir inyectables de aspecto natural, renovación de la piel que se acomode a un calendario laboral y contorno corporal antes del verano. Cada plan empieza con una consulta donde se definen la candidatura y las expectativas.",
    ],
    notes: ["Un trayecto corto en auto o un solo autobús por Fullerton", "Popular para visitas de inyectables a la hora del almuerzo", "Desde tan cerca, las series de Emsculpt Neo son fáciles de mantener en un ritmo de cinco a diez días"],
    seo: { title: "Med spa cerca de Bucktown, Chicago | Olivo Med Spa", description: "Olivo Med Spa es una clínica dirigida por una médica a minutos de Bucktown, en Fullerton Ave, Logan Square, Chicago. Inyectables, Emsculpt Neo y faciales." },
  },
  "wicker-park": {
    name: "Wicker Park",
    travel: "Unos 10 minutos en auto o 15 minutos en la Blue Line",
    route: "Siga Milwaukee Avenue hacia el noroeste a través de Six Corners en Logan Square, gire a la derecha en California y a la izquierda en Fullerton. O tome la Blue Line desde Damen o Division hasta California y camine hacia el norte hasta Fullerton. En auto, Damen hacia el norte hasta Fullerton también funciona.",
    intro: [
      "Wicker Park y Logan Square comparten Milwaukee Avenue, así que llegar a la clínica es una línea recta. Los pacientes de Wicker Park tienden a llegar bien informados. Saben la diferencia entre un relleno de ácido hialurónico y un estimulador de colágeno y quieren que una médica les diga cuál necesita realmente su rostro.",
      "Eso encaja con la forma de trabajar de la Dra. Olivo. Las consultas son sin prisa y específicas. Los pacientes de Wicker Park suelen venir por relleno de labios y mejillas, Opus Plasma o microagujas con radiofrecuencia para la textura, y membresías de piel que mantienen los resultados estables entre tratamientos mayores.",
    ],
    notes: ["Un solo viaje en la Blue Line, sin transbordo", "Pacientes bien informados que quieren la opinión de una doctora, no un menú", "Es común programar la renovación de la piel alrededor de los fines de semana"],
    seo: { title: "Med spa cerca de Wicker Park, Chicago | Olivo Med Spa", description: "Olivo Med Spa atiende a Wicker Park desde Logan Square, un viaje en la Blue Line por Milwaukee Ave. Inyectables, Opus Plasma y faciales en Chicago." },
  },
  "lincoln-park": {
    name: "Lincoln Park",
    travel: "Entre 10 y 15 minutos en auto por Fullerton",
    route: "Fullerton va en línea recta desde el lago hasta la clínica. Conduzca hacia el oeste por Fullerton pasando Ashland, Damen y Western, y la clínica está en el lado norte justo antes de Rockwell. El autobús 74 Fullerton cubre la misma ruta desde cualquier parada del recorrido.",
    intro: [
      "Lincoln Park y la clínica comparten una calle. Fullerton Avenue empieza en la orilla del lago y pasa por DePaul, la Kennedy y Western antes de llegar a la clínica en el 2550 West. Eso hace de Olivo Med Spa una alternativa sencilla a las prácticas del centro, sin el estacionamiento ni la espera.",
      "Los pacientes de Lincoln Park suelen venir por toda la gama de atención dirigida por una médica: relajantes de arrugas y relleno, Emface para lifting sin cirugía, renovación con láser y servicios médicos como terapia hormonal y manejo del peso. La formación en medicina familiar de la Dra. Olivo importa para el lado médico del menú.",
    ],
    notes: ["Una sola calle, sin giros, desde la mayor parte del barrio", "Estacionar es más sencillo que en el centro o en Clybourn", "Atención médica y estética en una sola práctica dirigida por una médica"],
    seo: { title: "Med spa cerca de Lincoln Park, Chicago | Olivo Med Spa", description: "Olivo Med Spa es un med spa dirigido por una médica, un trayecto al oeste por Fullerton desde Lincoln Park a Logan Square, Chicago. Inyectables y Emface." },
  },
  "avondale": {
    name: "Avondale",
    travel: "Unos 5 minutos en auto",
    route: "Diríjase al sur por Kedzie o California hasta Fullerton, y luego al este hacia Rockwell. Milwaukee Avenue hacia el sureste hasta Fullerton también funciona. En la Blue Line, viaje desde Belmont dos paradas al sureste hasta California y camine hacia el norte por California hasta Fullerton.",
    intro: [
      "Avondale está directamente al norte de la clínica, y para muchos residentes es el med spa dirigido por una médica más cercano. El trayecto por California o Kedzie toma pocos minutos. Entre los pacientes de Avondale hay vecinos de toda la vida que siguen la práctica desde 2013 y recién llegados que buscan una doctora en lugar de una franquicia.",
      "La mezcla del barrio se nota en lo que la gente reserva: membresías de reducción de vello con láser, eliminación de tatuajes, IPL para el daño solar y Emsella para la fuerza del piso pélvico después del parto. En la clínica se habla español, lo que importa a muchas familias de Avondale.",
    ],
    notes: ["El más cercano de los barrios del norte en auto", "Pacientes de larga data de las comunidades polaca y latina", "Los tratamientos con láser y de eliminación son reservas frecuentes"],
    seo: { title: "Med spa cerca de Avondale, Chicago | Olivo Med Spa", description: "Los residentes de Avondale llegan a Olivo Med Spa en pocos minutos por California hasta Fullerton Ave, en Logan Square, Chicago. Láseres e inyectables." },
  },
  "humboldt-park": {
    name: "Humboldt Park",
    travel: "Entre 5 y 10 minutos en auto",
    route: "Tome California o Kedzie hacia el norte desde North Avenue o Division hasta Fullerton, y luego al este por Fullerton hacia Rockwell. Western hacia el norte hasta Fullerton y un tramo corto al oeste también funciona. El autobús 74 Fullerton conecta desde los corredores de California y Kedzie.",
    intro: [
      "Humboldt Park está a un trayecto corto al sur y al oeste de la clínica, y Olivo Med Spa ha atendido a familias del barrio durante años. La Dra. Olivo se formó en Perú y completó su residencia en la Universidad de Illinois. Los pacientes suelen decir que vinieron por una doctora que se tomara el tiempo de explicar las cosas, en inglés o en español.",
      "Los tratamientos populares entre los pacientes de Humboldt Park van desde faciales y peelings elegidos para tonos de piel más profundos hasta contorno corporal y manejo médico del peso. Como la Dra. Olivo es médica, la clínica puede revisar las hormonas y el metabolismo junto con los objetivos estéticos, todo en un mismo lugar.",
    ],
    notes: ["Un trayecto directo subiendo por California o Kedzie", "Tratamientos de piel seleccionados pensando en los tonos de piel más oscuros", "Manejo médico del peso y terapia IV junto con la estética"],
    seo: { title: "Med spa cerca de Humboldt Park, Chicago | Olivo Med Spa", description: "Olivo Med Spa es una clínica dirigida por una médica a minutos de Humboldt Park, en Logan Square, Chicago. Faciales, contorno corporal y control de peso." },
  },
  "ukrainian-village": {
    name: "Ukrainian Village",
    travel: "Entre 10 y 15 minutos en auto",
    route: "Tome Western o Damen hacia el norte desde Chicago Avenue hasta Fullerton, y luego unas cuadras al oeste hasta Rockwell. En transporte público, la Blue Line desde Division hasta California es un viaje corto, seguido de una caminata hacia el norte por California hasta Fullerton.",
    intro: [
      "Ukrainian Village está justo al sur de la clínica siguiendo Western y Damen. Es un barrio de residentes de toda la vida y de recién llegados cuidadosos, y ambos tienden a valorar una práctica que lleva en el mismo lugar y con la misma médica desde 2013.",
      "Los pacientes de Ukrainian Village preguntan con frecuencia por un trabajo sutil: un poco de relajante de arrugas, relleno conservador y tratamientos de piel que no llamen la atención. El enfoque de la Dra. Olivo es empezar suave e ir construyendo, lo que encaja. Miradry para la sudoración axilar es otra solicitud habitual desde esta parte de la ciudad.",
    ],
    notes: ["Un trayecto directo hacia el norte por Western o Damen", "Los inyectables sutiles y conservadores son la solicitud habitual", "Las consultas de Miradry suelen empezar aquí"],
    seo: { title: "Med spa cerca de Ukrainian Village, Chicago | Olivo Med Spa", description: "Olivo Med Spa atiende a Ukrainian Village desde Logan Square, un trayecto corto al norte por Western. Inyectables, cuidado de la piel y Miradry en Chicago." },
  },
  "roscoe-village": {
    name: "Roscoe Village",
    travel: "Unos 10 minutos en auto",
    route: "Tome Western hacia el sur pasando Belmont y Diversey hasta Fullerton, luego gire a la derecha y avance dos cuadras al oeste hacia Rockwell. Damen hacia el sur hasta Fullerton y luego al oeste también funciona. El autobús de Western hasta Fullerton conecta con el autobús 74 Fullerton para el último tramo.",
    intro: [
      "Roscoe Village está a un trayecto corto bajando por Western, y la clínica es el primer med spa dirigido por una médica que muchos residentes encuentran cuando miran al oeste del río. Las familias del barrio suelen venir por razones prácticas: fuerza del core y del piso pélvico después del parto, reducción de vello con láser y cuidado de la piel que se acomode a un calendario ocupado.",
      "Emsculpt Neo y Emsella son reservas comunes desde Roscoe Village, a menudo juntas. La Dra. Olivo revisa primero el historial, sobre todo después del embarazo, y define un calendario que funcione con las salidas de la escuela y los trayectos al trabajo. Las membresías Skin Club mantienen constante el lado de los faciales.",
    ],
    notes: ["Directo al sur por Western y luego dos cuadras al oeste", "Los planes de core y piso pélvico después del parto son comunes", "El ritmo de membresía se adapta a los calendarios familiares ocupados"],
    seo: { title: "Med spa cerca de Roscoe Village, Chicago | Olivo Med Spa", description: "Los residentes de Roscoe Village llegan a Olivo Med Spa en Logan Square con un trayecto corto por Western. Emsculpt Neo, Emsella, láseres y faciales." },
  },
  "irving-park": {
    name: "Irving Park",
    travel: "Entre 10 y 15 minutos en auto o 20 minutos en la Blue Line",
    route: "Tome la Kennedy Expressway hacia el sureste hasta la salida de Fullerton y diríjase al oeste por Fullerton hasta Rockwell, o siga Milwaukee Avenue hacia el sureste hasta Fullerton. En transporte público, la Blue Line desde Irving Park hasta California es un viaje directo; luego camine hacia el norte por California.",
    intro: [
      "Irving Park está subiendo por el corredor de la Kennedy y Milwaukee desde la clínica. Ambas rutas llevan a Fullerton, y la Blue Line recorre la misma línea sin tráfico. Los pacientes de Irving Park suelen empezar con la recomendación de un vecino y se quedan porque una médica dirige la práctica.",
      "Las solicitudes desde Irving Park se inclinan hacia los servicios médicos y la reparación de la piel: terapia hormonal, manejo del peso con GLP-1, IPL para manchas solares y de la edad, y renovación con láser fraccionado CO2 programada para los meses más frescos. La Dra. Olivo se encarga directamente del lado médico y define las expectativas en la consulta.",
    ],
    notes: ["La Kennedy o Milwaukee en auto, o un solo viaje en la Blue Line", "Los servicios médicos son un motivo frecuente de visita", "La renovación de la piel suele programarse para otoño e invierno"],
    seo: { title: "Med spa cerca de Irving Park, Chicago | Olivo Med Spa", description: "Olivo Med Spa es un med spa dirigido por una médica en Logan Square, a un viaje desde Irving Park por la Kennedy o la Blue Line. Atención médica y estética." },
  },
  "old-town": {
    name: "Old Town",
    travel: "Entre 15 y 20 minutos en auto",
    route: "Tome Armitage o North Avenue hacia el oeste hasta Western, gire al norte hasta Fullerton y avance dos cuadras al oeste hacia Rockwell. Como alternativa, conduzca al norte hasta Fullerton y sígala hacia el oeste todo el camino. El autobús 74 Fullerton va desde Halsted y Clark hasta la clínica.",
    intro: [
      "Los pacientes de Old Town suelen encontrar la clínica cuando quieren una práctica dirigida por una médica sin lo que cuesta el centro en estacionamiento y tiempo. El trayecto al oeste por Armitage o North es directo, y la propia Fullerton va desde el borde norte de Old Town directo hasta la puerta.",
      "El barrio tiende a reservar planes faciales completos: relajantes de arrugas, relleno colocado para dar estructura y no tamaño, Emface para lifting y una serie de renovación para la textura. La Dra. Olivo los construye a lo largo de varias visitas para que los cambios se mantengan naturales y el calendario sea manejable.",
    ],
    notes: ["Un trayecto directo hacia el oeste por Armitage, North o Fullerton", "Planes de rostro completo escalonados en varias visitas", "Las citas entre semana por la tarde, hasta las 7 PM, son populares"],
    seo: { title: "Med spa cerca de Old Town, Chicago | Olivo Med Spa", description: "Olivo Med Spa es un med spa dirigido por una médica en Logan Square, un trayecto al oeste desde Old Town por Armitage. Inyectables y Emface en Chicago." },
  },
  "lakeview": {
    name: "Lakeview",
    travel: "Unos 15 minutos en auto",
    route: "Tome Diversey hacia el oeste hasta Western, gire al sur hasta Fullerton y avance dos cuadras al oeste hacia Rockwell. O tome Ashland hacia el sur hasta Fullerton y siga Fullerton al oeste pasando Western. Desde el sur de Lakeview, el autobús 74 Fullerton es un solo viaje.",
    intro: [
      "Lakeview está a un trayecto corto atravesando la ciudad desde la clínica por Diversey o Belmont, y luego bajando por Western hasta Fullerton. Muchos pacientes de Lakeview comparan con las opciones de Lincoln Park y del centro y eligen Olivo Med Spa porque una doctora, y no una licenciataria, dirige la práctica.",
      "Las solicitudes comunes desde Lakeview incluyen membresías de reducción de vello con láser, Kybella o Exion para la zona bajo el mentón, Hydrafacial y DiamondGlow a ritmo de Skin Club, y contorno corporal antes de viajar. Cada plan empieza con una consulta donde se definen la candidatura y las expectativas.",
    ],
    notes: ["Diversey o Belmont hacia el oeste, luego Western al sur hasta Fullerton", "Los tratamientos de mentón y línea de la mandíbula son una solicitud frecuente", "Los miembros de Skin Club suelen combinar un facial con una visita de inyectables"],
    seo: { title: "Med spa cerca de Lakeview, Chicago | Olivo Med Spa", description: "Olivo Med Spa atiende a Lakeview desde Logan Square, un trayecto por Diversey hasta Western. Láseres, Kybella y faciales dirigidos por una médica en Chicago." },
  },
  "river-north": {
    name: "River North",
    travel: "Unos 20 minutos en auto o 25 minutos en la Blue Line",
    route: "Tome la Kennedy Expressway hacia el noroeste hasta la salida de Fullerton, y luego al oeste por Fullerton pasando Western hasta Rockwell. En transporte público, aborde la Blue Line en Grand o Chicago y viaje al noroeste hasta California; luego camine hacia el norte por California hasta Fullerton.",
    intro: [
      "River North tiene muchas prácticas estéticas. Los pacientes que hacen el viaje a Logan Square lo hacen por una razón concreta: una clínica propiedad de una médica con nueve plataformas de dispositivos bajo un mismo techo, consultas que no son discursos de venta y precios que reflejan una dirección de barrio y no un alquiler del centro.",
      "Los profesionales del centro que viven en River North suelen reservar Emsculpt Neo, Emface y Miradry, tratamientos que premian a una clínica con la plataforma completa de dispositivos y una doctora supervisando los parámetros. El horario vespertino hasta las 7 PM entre semana y el horario de los sábados hacen viable el viaje con una agenda del centro.",
    ],
    notes: ["La Kennedy hasta Fullerton en auto, o la Blue Line sin transbordo", "Tratamientos con dispositivos que se benefician de una plataforma completa en el lugar", "El horario vespertino y de sábados se adapta a las agendas del centro"],
    seo: { title: "Med spa cerca de River North, Chicago | Olivo Med Spa", description: "Olivo Med Spa es un med spa propiedad de una médica en Logan Square, a un viaje en la Blue Line desde River North. Emsculpt Neo, Emface y Miradry en Chicago." },
  },
};
