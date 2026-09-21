// Spanish (Latin American) copy for concern pages and quiz options, keyed by
// the English slug. Structure, treatments, images, and verify notes stay in
// content/concerns.ts. See docs/CONTENT-RULES.md before editing.
import type { ConcernEs } from "./types";

export const concernsEs: Record<string, ConcernEs> = {
  "fine-lines-wrinkles": {
    name: "Líneas finas y arrugas",
    question: "Líneas y arrugas",
    summary: "Las líneas de expresión y las arrugas marcadas tienen causas distintas, por eso la clínica trata el movimiento muscular y el adelgazamiento de la piel como problemas separados.",
    intro: [
      "Las líneas se forman donde los músculos pliegan la piel de la misma manera miles de veces: la frente, el entrecejo, el contorno de los ojos. Al principio solo aparecen con la expresión. Con el tiempo el colágeno se adelgaza, la piel pierde parte de su elasticidad y el pliegue permanece aunque el rostro esté en reposo. El sol y el tabaco aceleran este proceso.",
      "En la consulta, la Dra. Olivo distingue las líneas causadas por el movimiento de las causadas por el adelgazamiento de la piel. Las líneas de movimiento suelen responder a un relajante de arrugas. Las líneas marcadas y la textura arrugada requieren algo que reconstruya colágeno, como las microagujas con radiofrecuencia o un láser de renovación. Muchas personas obtienen buenos resultados con una combinación escalonada a lo largo de unos meses.",
    ],
    faqs: [
      { q: "¿Con qué debería empezar, un relajante de arrugas o un láser?", a: "Depende de qué origina la línea. Si se suaviza cuando relaja el rostro, un relajante de arrugas suele ser el primer paso. Si permanece, los tratamientos de piel hacen más. La Dra. Olivo le mostrará la diferencia en el espejo." },
      { q: "¿A qué edad conviene empezar a tratar las líneas?", a: "No hay una edad correcta. Las personas acuden cuando una línea empieza a molestarles. Empezar antes puede significar tratamientos más pequeños y menos frecuentes, pero es una decisión personal tomada junto con una médica, no una regla." },
    ],
    seo: { title: "Líneas finas y arrugas en Chicago | Olivo Med Spa", description: "Relajantes de arrugas, microagujas con radiofrecuencia y láser para líneas y arrugas, planificados por una médica en Olivo Med Spa, Logan Square, Chicago." },
  },
  "volume-loss": {
    name: "Pérdida de volumen",
    question: "Zonas hundidas o planas",
    summary: "Las mejillas, las sienes y las ojeras pierden grasa y soporte óseo con la edad; los rellenos y los estimuladores de colágeno restauran la estructura en pasos medidos.",
    intro: [
      "La pérdida de volumen es la razón por la que un rostro puede verse cansado aunque haya dormido bien. Las bolsas de grasa de las mejillas y las sienes se reducen y descienden, el hueso que las sostiene se remodela lentamente y la piel cae sobre menos soporte. El resultado son ojeras hundidas, mejillas más planas y surcos que se profundizan de la nariz a la boca.",
      "La Dra. Olivo trata el volumen como estructura, no como superficie. Observa dónde se ha perdido el soporte antes de decidir entre un relleno de ácido hialurónico como Revanesse Versa, un estimulador de colágeno como Radiesse o una elevación con hilos PDO. El objetivo es un rostro descansado que siga siendo el suyo, construido en una o dos visitas en lugar de todo de una vez.",
    ],
    faqs: [
      { q: "¿El relleno dará un aspecto exagerado?", a: "No cuando se coloca para reemplazar el soporte perdido en lugar de agregar tamaño. La Dra. Olivo trabaja de forma conservadora y por etapas. Siempre puede agregar más en una visita posterior; quitar es más difícil." },
      { q: "¿Cuánto dura el relleno?", a: "Depende del producto, la zona y la rapidez con que su cuerpo lo degrada. La Dra. Olivo le dará un rango realista en la consulta y planificará los retoques en función de ello." },
    ],
    seo: { title: "Pérdida de volumen y rellenos faciales | Olivo Med Spa", description: "Recupere el volumen perdido en mejillas, sienes y ojeras con rellenos y estimuladores de colágeno colocados por una médica en Olivo Med Spa, Chicago." },
  },
  "sagging-skin": {
    name: "Flacidez de la piel",
    question: "Piel floja o flácida",
    summary: "La piel se afloja cuando el colágeno se degrada más rápido de lo que se reconstruye; Emface, Exion y los hilos PDO reafirman y elevan sin cirugía.",
    intro: [
      "La piel se descuelga cuando el colágeno y la elastina que la mantienen firme se degradan más rápido de lo que el cuerpo los reconstruye. Sume la gravedad, el sol y la pérdida de volumen que ocurre debajo, y la línea de la mandíbula se suaviza, el cuello se afloja y la ceja se asienta más abajo. En el cuerpo, el mismo proceso se nota en el abdomen, los brazos y por encima de las rodillas.",
      "Reafirmar sin cirugía significa estimular a la piel para que produzca colágeno nuevo y, en el rostro, trabajar los músculos que lo sostienen. Emface hace ambas cosas en una sesión sin agujas. Exion utiliza radiofrecuencia y ultrasonido para rostro y cuerpo. Los hilos PDO ofrecen una elevación mecánica. La Dra. Olivo decide en la consulta cuál es realista para el grado de flacidez que usted tiene.",
    ],
    faqs: [
      { q: "¿Un dispositivo realmente puede elevar la piel?", a: "Los dispositivos de energía tensan al generar colágeno y, en el caso de Emface, al tonificar los músculos elevadores del rostro. El cambio es gradual y moderado en comparación con la cirugía. La Dra. Olivo le dirá con franqueza si su caso supera lo que un dispositivo puede hacer." },
      { q: "¿Cuántas sesiones requiere reafirmar la piel?", a: "La mayoría de los protocolos son una serie corta, con frecuencia cuatro sesiones, seguida de mantenimiento. El número exacto depende del dispositivo y de la zona." },
    ],
    seo: { title: "Flacidez y lifting sin cirugía | Olivo Med Spa", description: "Emface, Exion e hilos PDO para la piel flácida de rostro, cuello y cuerpo, planificados por una médica en Olivo Med Spa, Logan Square, Chicago." },
  },
  "stubborn-fat": {
    name: "Grasa localizada",
    question: "Grasa localizada",
    summary: "Los depósitos de grasa que ignoran la dieta y el ejercicio pueden tratarse con calor, luz o inyección, según la zona y sus tiempos.",
    intro: [
      "Parte de la grasa no responde a la dieta ni al entrenamiento. El bajo abdomen, los flancos, la cara interna de los muslos y la zona bajo el mentón contienen células de grasa resistentes por naturaleza, y una vez que se llega a la edad adulta el número de esas células se mantiene bastante fijo. Bajar de peso las reduce. No necesariamente las elimina de la zona que a usted le importa.",
      "La reducción de grasa sin cirugía funciona dañando las células de grasa con calor, luz o un agente disolvente para que el cuerpo las elimine en las semanas siguientes. Emsculpt Neo calienta la grasa mientras desarrolla músculo. La lipo láser apunta a la grasa con luz. Kybella se inyecta bajo el mentón. La Dra. Olivo elige el método según la zona, el grosor de la grasa y sus tiempos.",
    ],
    faqs: [
      { q: "¿Esto es pérdida de peso?", a: "No. El contorno corporal trata un depósito de grasa específico. Es adecuado para personas cercanas a su peso objetivo. Si el peso en sí es el problema, la Dra. Olivo puede hablar primero del manejo médico del peso." },
      { q: "¿Cuánto tarda en notarse el cambio?", a: "La eliminación de la grasa es gradual. La mayoría de las personas notan el cambio en las semanas posteriores a una serie, no al día siguiente de una sesión." },
    ],
    seo: { title: "Reducción de grasa localizada en Chicago | Olivo Med Spa", description: "Reducción de grasa sin cirugía en Logan Square, Chicago. Emsculpt Neo, lipo láser, Exion y Kybella, elegidos según la zona por la Dra. Olivo en Olivo Med Spa." },
  },
  "muscle-tone": {
    name: "Tono muscular",
    question: "Tono y definición muscular",
    summary: "La definición depende de la masa muscular y de la grasa que la cubre; Emsculpt Neo trabaja ambas como complemento del entrenamiento, no como sustituto.",
    intro: [
      "La definición muscular depende de dos cosas: cuánto músculo tiene y cuánta grasa lo cubre. El entrenamiento desarrolla lo primero. La edad, las lesiones, el trabajo de oficina y el tiempo lejos del gimnasio juegan en contra, y algunos músculos, como el core profundo después del embarazo, son difíciles de alcanzar solo con ejercicio.",
      "Emsculpt Neo contrae un grupo muscular muchas más veces en treinta minutos de lo que usted podría hacer de forma voluntaria, mientras su radiofrecuencia calienta la grasa que lo cubre. Es un complemento del entrenamiento, no un sustituto. La Dra. Olivo lo utiliza en abdomen, glúteos, brazos, muslos y pantorrillas, y lo combina con Exion cuando la firmeza de la piel también forma parte del objetivo.",
    ],
    faqs: [
      { q: "¿Todavía necesito hacer ejercicio?", a: "Sí. Emsculpt Neo funciona junto con el entrenamiento y una rutina estable. Las personas que se mantienen activas tienden a conservar lo que ganan." },
      { q: "¿Puede ayudar con la debilidad del core después del embarazo?", a: "Puede formar parte de un plan de fortalecimiento del core una vez que su propio médico le dé el alta. La Dra. Olivo revisará primero su historial, y puede añadir Emsella si la fuerza del piso pélvico también es una preocupación." },
    ],
    seo: { title: "Tono y definición muscular | Olivo Med Spa", description: "Definición muscular en abdomen, glúteos, brazos y piernas con Emsculpt Neo en un med spa dirigido por una médica en Logan Square, Chicago. Olivo Med Spa." },
  },
  "double-chin": {
    name: "Papada",
    question: "Papada",
    summary: "La plenitud bajo el mentón puede ser grasa, piel floja o ambas; Kybella, Exion y la lipo láser abordan cada una una causa distinta.",
    intro: [
      "La plenitud bajo el mentón puede ser grasa, piel floja, un músculo del cuello de inserción baja o una mezcla de los tres. El peso es solo una parte. La genética y la edad importan igual, por eso las personas delgadas también tienen papada y por eso rara vez desaparece por sí sola, por más disciplina que tenga en lo demás.",
      "El tratamiento correcto depende de lo que haya debajo. Kybella disuelve la grasa con una serie de pequeñas inyecciones. Exion tensa la piel con radiofrecuencia y ultrasonido. La lipo láser puede tratar un depósito más grande. La Dra. Olivo examina la zona, pellizca el tejido y le dice cuál, o qué combinación, se ajusta a su anatomía.",
    ],
    faqs: [
      { q: "¿Cuántas sesiones de Kybella son habituales?", a: "Con frecuencia entre dos y cuatro, con cerca de un mes de separación, según la cantidad de grasa presente." },
      { q: "¿Se aflojará la piel cuando la grasa desaparezca?", a: "A veces la piel que estuvo estirada necesita ayuda para reafirmarse. Por eso la Dra. Olivo evalúa primero la calidad de la piel y puede combinar la reducción de grasa con un tratamiento tensor." },
    ],
    seo: { title: "Tratamiento de papada en Chicago | Olivo Med Spa", description: "Kybella, Exion y lipo láser para la plenitud bajo el mentón, elegidos tras un examen médico en Olivo Med Spa, Logan Square, Chicago. Reserve una consulta." },
  },
  "skin-texture-scars": {
    name: "Textura de la piel y cicatrices",
    question: "Textura áspera o cicatrices",
    summary: "Los poros dilatados, la superficie irregular y las cicatrices de acné responden a tratamientos que retiran la superficie dañada y reconstruyen el colágeno debajo.",
    intro: [
      "Los problemas de textura viven en las capas superiores de la piel: poros dilatados, una superficie rugosa o irregular y cicatrices de acné donde el colágeno cicatrizó en forma de hoyo o de relieve. La renovación celular se ralentiza con la edad, así que la piel muerta permanece y la superficie se ve áspera y refleja la luz de manera desigual aunque la piel esté sana en lo demás.",
      "Los tratamientos funcionan retirando la superficie dañada, estimulando colágeno nuevo debajo, o ambas cosas. Las opciones suaves como Hydrafacial y el dermaplaning alisan la superficie. Las microagujas con radiofrecuencia, Opus Plasma y los láseres fraccionados llegan más profundo para las cicatrices. La Dra. Olivo ajusta la profundidad según el problema y el tiempo de recuperación que usted pueda permitirse.",
    ],
    faqs: [
      { q: "¿Las cicatrices de acné realmente pueden mejorar?", a: "Muchos tipos responden a tratamientos estimuladores de colágeno a lo largo de una serie. Las cicatrices profundas en pica de hielo son más difíciles. La Dra. Olivo le dirá cuáles de sus cicatrices tienen probabilidad de responder." },
      { q: "¿Cuánto tiempo de recuperación debo esperar?", a: "Va desde ninguno en un facial hasta cerca de una semana en una renovación profunda. Usted elige el equilibrio entre el tiempo de recuperación y cuánto cambio logra cada sesión." },
    ],
    seo: { title: "Textura de la piel y cicatrices de acné | Olivo Med Spa", description: "Textura áspera, poros y cicatrices de acné con microagujas con radiofrecuencia y Opus Plasma en Olivo Med Spa, clínica médica en Logan Square, Chicago." },
  },
  "sun-damage-pigment": {
    name: "Daño solar y pigmentación",
    question: "Manchas solares o tono desigual",
    summary: "Las manchas marrones, el tono irregular y el melasma requieren enfoques distintos; la luz, los peelings y el cuidado de la piel se eligen según la causa y su tipo de piel.",
    intro: [
      "Años de sol le indican a la piel que produzca pigmento extra en parches. El resultado son manchas marrones en el rostro, el escote y las manos, un tono irregular y a veces finos vasos rojos. El melasma es distinto: tiene origen hormonal y se agrava con el calor y la luz, por lo que requiere un enfoque más suave y paciente.",
      "Los tratamientos con luz como el IPL actúan directamente sobre el pigmento y el enrojecimiento. Los peelings y los láseres de renovación retiran el pigmento junto con la superficie. Para el melasma, la Dra. Olivo suele empezar con cuidado de la piel de grado médico y opciones de bajo calor, porque un tratamiento agresivo puede empeorarlo. El protector solar diario forma parte de cada plan que ella prescribe.",
    ],
    faqs: [
      { q: "¿El IPL es adecuado para el melasma?", a: "Con frecuencia no. El calor puede desencadenar el melasma. La Dra. Olivo suele empezar el melasma con cuidado de la piel de potencia de prescripción y peelings elegidos para su piel, y decide caso por caso sobre los tratamientos con luz." },
      { q: "¿Las manchas vuelven a aparecer?", a: "Pueden formarse manchas nuevas con nueva exposición al sol. Las manchas tratadas suelen desvanecerse, y el uso constante de protector solar es lo que mantiene el resultado." },
    ],
    seo: { title: "Daño solar y manchas en la piel | Olivo Med Spa", description: "IPL, peelings y renovación para manchas solares, tono irregular y melasma en Olivo Med Spa, Logan Square, Chicago. Planes definidos por una médica." },
  },
  "acne-breakouts": {
    name: "Acné y brotes",
    question: "Acné y brotes",
    summary: "El acné adulto es común y tratable; la clínica combina el cuidado en consultorio con un cuidado de la piel guiado por una médica y, cuando corresponde, medicamentos con receta.",
    intro: [
      "El acné aparece cuando los poros se obstruyen con grasa y piel muerta, las bacterias se multiplican dentro y la piel responde con inflamación. Las hormonas, el estrés y algunos productos lo empujan. El acné adulto es común y suele asentarse en la mandíbula y el mentón, lo que resulta frustrante cuando creía haberlo dejado atrás hace años.",
      "Una clínica dirigida por una médica puede combinar el tratamiento médico con el cuidado en consultorio. Hydrafacial limpia la congestión e hidrata sin resecar. Los peelings químicos reducen la grasa y aceleran la renovación. Laser Genesis y el IPL calman el enrojecimiento. La Dra. Olivo también revisa las hormonas cuando el patrón lo sugiere, y establece una rutina con ZO Skin Health o Skinbetter Science para mantener la piel tranquila.",
    ],
    faqs: [
      { q: "¿Debería hacerme un facial mientras tengo un brote?", a: "Con frecuencia sí, si es del tipo adecuado. Hydrafacial y los peelings purificantes están diseñados para el acné activo. Evite cualquier cosa con exfoliación intensa o calor mientras la piel esté inflamada." },
      { q: "¿Pueden recetar medicamentos?", a: "La Dra. Olivo es médica y puede hablar de opciones con receta como parte de su plan cuando sean apropiadas." },
    ],
    seo: { title: "Tratamiento del acné en Chicago | Olivo Med Spa", description: "Hydrafacial, peelings y cuidado de la piel guiado por una médica para el acné adulto en Olivo Med Spa, Logan Square, Chicago. Reserve su consulta." },
  },
  "dull-tired-skin": {
    name: "Piel apagada y cansada",
    question: "Piel apagada o con aspecto cansado",
    summary: "Las células muertas y la deshidratación apagan la luminosidad de la piel; un facial bien elegido la devuelve en una visita y sin tiempo de recuperación.",
    intro: [
      "La piel se ve apagada cuando las células muertas se acumulan en la superficie y dispersan la luz en lugar de reflejarla. La deshidratación, un ciclo de renovación lento, el aire de la ciudad y unas cuantas noches cortas contribuyen. No hay nada malo exactamente. La piel simplemente no hace su limpieza tan rápido como antes, y se nota.",
      "Esta es la preocupación donde un buen facial se gana su lugar. Hydrafacial, DiamondGlow y Glo2Facial exfolian, extraen e infunden hidratación en una visita sin tiempo de recuperación. El dermaplaning retira la capa superficial y el vello fino. Para un cambio más duradero, la Dra. Olivo puede sugerir una serie de peelings o Laser Genesis junto con una rutina en casa.",
    ],
    faqs: [
      { q: "¿Con qué frecuencia debería hacerme un facial?", a: "Aproximadamente cada cuatro a seis semanas coincide con el ciclo de renovación de la piel. Las membresías Skin Club están construidas alrededor de ese ritmo." },
      { q: "¿Puedo hacerme un facial antes de un evento?", a: "Sí. Hydrafacial y DiamondGlow son habituales uno o dos días antes de un evento. Reserve los peelings y la renovación para al menos dos semanas antes." },
    ],
    seo: { title: "Piel apagada y cansada en Chicago | Olivo Med Spa", description: "Recupere la luminosidad con Hydrafacial, DiamondGlow, Glo2Facial y dermaplaning en Olivo Med Spa, Logan Square, Chicago. Sin tiempo de recuperación." },
  },
  "excessive-sweating": {
    name: "Sudoración excesiva",
    question: "Sudoración excesiva",
    summary: "La sudoración axilar que supera las necesidades del cuerpo puede tratarse a largo plazo con Miradry o durante varios meses con inyecciones.",
    intro: [
      "Las glándulas sudoríparas de las axilas responden al calor, al estrés y a las hormonas. En algunas personas se activan mucho más de lo que el cuerpo necesita para refrescarse, una condición llamada hiperhidrosis. Se manifiesta en camisas empapadas, telas arruinadas y un día organizado en torno a ello. Los antitranspirantes bloquean los conductos brevemente y luego pierden efecto.",
      "Miradry utiliza energía de microondas para desactivar las glándulas de sudor y olor de las axilas, y esas glándulas no vuelven a crecer, por lo que el cambio es duradero. Los relajantes de arrugas también pueden reducir el sudor durante varios meses. La Dra. Olivo revisa lo que usted ya ha probado y si su sudoración es solo axilar, que es lo que Miradry trata.",
    ],
    faqs: [
      { q: "¿Miradry es un tratamiento de una sola vez?", a: "Muchas personas quedan satisfechas después de una sesión y algunas eligen una segunda. La Dra. Olivo establece las expectativas en la consulta." },
      { q: "¿Necesito esas glándulas sudoríparas?", a: "Las axilas contienen una pequeña parte de las glándulas sudoríparas del cuerpo, así que tratarlas no afecta su capacidad de refrescarse." },
    ],
    seo: { title: "Sudoración excesiva y Miradry en Chicago | Olivo Med Spa", description: "Alivio duradero de la sudoración axilar con Miradry, además de relajantes de arrugas, en Olivo Med Spa, Logan Square, Chicago. Dirigido por una médica." },
  },
  "unwanted-hair": {
    name: "Vello no deseado",
    question: "Vello no deseado",
    summary: "La reducción de vello con láser actúa sobre el folículo a lo largo de una serie de sesiones, con parámetros elegidos según su tono de piel y el color del vello.",
    intro: [
      "El vello crece en ciclos, y solo el vello en fase de crecimiento activo responde al láser. Por eso se necesita una serie: cada sesión alcanza los folículos que están creciendo esa semana. El afeitado y la cera retiran el tallo del vello. El láser actúa sobre el propio folículo, de modo que el crecimiento se vuelve más lento y fino con el tiempo.",
      "La clínica trata rostro, axilas, zona del bikini, piernas, espalda y pecho. La Dra. Olivo elige los parámetros según su tono de piel y el color del vello, ya que el láser se dirige al pigmento del folículo. El dermaplaning es la opción para el vello facial fino que el láser no detecta. La membresía Laser Hair Reduction Club estructura la serie.",
    ],
    faqs: [
      { q: "¿Cuántas sesiones necesitaré?", a: "Normalmente una serie de seis o más, con varias semanas de separación, y luego mantenimiento ocasional. Varía según la zona y su vello." },
      { q: "¿Funciona en pieles más oscuras?", a: "Los láseres modernos pueden tratar una amplia gama de tonos de piel con la longitud de onda y los parámetros correctos. La Dra. Olivo evalúa su piel y hace una prueba en una zona pequeña cuando es necesario." },
    ],
    seo: { title: "Depilación láser en Logan Square, Chicago | Olivo Med Spa", description: "Reducción de vello con láser para rostro y cuerpo en una clínica dirigida por una médica en Logan Square, Chicago. Parámetros según su tono de piel." },
  },
  "unwanted-tattoos": {
    name: "Tatuajes no deseados",
    question: "Un tatuaje del que se arrepiente",
    summary: "El láser fragmenta la tinta en partículas que el cuerpo puede eliminar; la eliminación es una serie, con una estimación honesta dada en la consulta.",
    intro: [
      "La tinta del tatuaje se aloja en la dermis en partículas demasiado grandes para que el cuerpo las elimine. Un láser rompe esas partículas en fragmentos lo bastante pequeños para que el sistema inmunitario los retire en las semanas siguientes. Cada color absorbe una longitud de onda distinta, así que el negro suele desaparecer más rápido y algunos verdes y azules tardan más.",
      "La eliminación es una serie, no una sesión. Las sesiones se separan por semanas para que la piel sane y el cuerpo elimine la tinta. La Dra. Olivo evalúa la densidad de la tinta, los colores, la antigüedad del tatuaje y su ubicación para darle un rango honesto, y conversa sobre un aclarado parcial para cubrirlo si ese es el objetivo.",
    ],
    faqs: [
      { q: "¿Cuántas sesiones requiere la eliminación?", a: "Comúnmente entre seis y doce, con seis a ocho semanas de separación, según el tatuaje. La Dra. Olivo le da un rango en la consulta." },
      { q: "¿Dejará cicatriz?", a: "Las cicatrices son poco frecuentes cuando los parámetros son adecuados y se siguen los cuidados posteriores. La Dra. Olivo revisa su historial de cicatrización y su tipo de piel antes de tratar. Si el enrojecimiento o la textura persisten después de la serie, Laser Genesis puede ayudar a calmarlos." },
    ],
    seo: { title: "Eliminación de tatuajes en Chicago | Olivo Med Spa", description: "Eliminación de tatuajes con láser dirigida por una médica en Logan Square, Chicago. Estimaciones honestas y parámetros según su tinta y su piel." },
  },
  "veins-and-moles": {
    name: "Venas y lunares",
    question: "Venas o lunares visibles",
    summary: "Los vasos pequeños, los lunares y los acrocordones se tratan en consultorio, y una médica examina cada lesión antes de retirar cualquier cosa.",
    intro: [
      "Los pequeños vasos rojos o morados en el rostro y las piernas aparecen cuando venas diminutas se dilatan y permanecen así, a menudo por el sol, la presión, las hormonas o la herencia. Los lunares y los acrocordones son cúmulos de células pigmentadas o de piel suelta. La mayoría son inofensivos. Algunos necesitan que una médica los examine de cerca antes de hacerles algo.",
      "El tratamiento de venas utiliza láser o luz para colapsar el vaso de modo que el cuerpo lo reabsorba. La extracción de lunares y acrocordones es un procedimiento menor en consultorio. Como la Dra. Olivo es médica, examina primero cualquier lesión y deriva a biopsia cuando un lunar parece atípico en lugar de retirarlo por motivos estéticos.",
    ],
    faqs: [
      { q: "¿Pueden retirar cualquier lunar?", a: "Solo después de un examen. Un lunar con características irregulares se deriva para evaluación, no se trata de forma estética. Los lunares benignos y los acrocordones suelen retirarse en una visita." },
      { q: "¿Las venas tratadas vuelven a aparecer?", a: "Los vasos tratados se eliminan, pero pueden formarse otros con el tiempo, sobre todo en las piernas. A veces se necesitan sesiones de mantenimiento." },
    ],
    seo: { title: "Eliminación de venas y lunares en Chicago | Olivo Med Spa", description: "Tratamiento láser de venas y extracción de lunares y acrocordones con examen médico previo en Olivo Med Spa, Logan Square, Chicago." },
  },
  "pelvic-floor": {
    name: "Piso pélvico",
    question: "Pérdidas de orina o debilidad del piso pélvico",
    summary: "Las pérdidas al toser o correr suelen deberse a un piso pélvico debilitado; Emsella lo fortalece mientras usted permanece sentada y completamente vestida.",
    intro: [
      "El piso pélvico es una banda de músculo que sostiene la vejiga, el intestino y el útero. El parto, la edad, la menopausia y el levantamiento de peso lo debilitan. La señal más común es la pérdida de orina al toser, estornudar, reír o correr, junto con urgencia y menor sensibilidad. Es común, y tiene tratamiento.",
      "Emsella es una silla. Usted se sienta completamente vestida mientras la energía electromagnética contrae el piso pélvico miles de veces en una sesión, un ejercicio que no podría hacer por su cuenta. Emfemme 360 utiliza radiofrecuencia y se ofrece para el bienestar íntimo dentro de su indicación. La Dra. Olivo revisa su historial y sus síntomas antes de recomendar cualquiera de los dos.",
    ],
    faqs: [
      { q: "¿Emsella es incómodo?", a: "Se sienten hormigueos y contracciones intensos, pero usted permanece vestida y sentada. La mayoría de las personas leen o conversan durante la sesión." },
      { q: "¿Cuántas sesiones de Emsella son habituales?", a: "Un protocolo común es de seis sesiones en unas tres semanas, y luego mantenimiento según sea necesario." },
    ],
    seo: { title: "Piso pélvico y Emsella en Chicago | Olivo Med Spa", description: "Fortalecimiento del piso pélvico con Emsella para pérdidas de orina y debilidad, sin invasión y con la ropa puesta, en Olivo Med Spa, Logan Square, Chicago." },
  },
  "low-energy": {
    name: "Baja energía",
    question: "Baja energía o peso que no baja",
    summary: "La fatiga, la niebla mental y el peso resistente son cuestiones médicas; la clínica empieza con historial y análisis antes de la terapia hormonal, los GLP-1 o la terapia IV.",
    intro: [
      "La fatiga persistente, la niebla mental, el mal sueño y el peso que se resiste al esfuerzo suelen tener origen en las hormonas, la nutrición o ambas. La tiroides, la testosterona, el estrógeno y el cortisol cambian con la edad y el estrés. Son cuestiones médicas, y merecen análisis de laboratorio y la lectura de una médica en lugar de una suposición o un suplemento.",
      "La Dra. Olivo ejerce la medicina desde 2007 y aborda esto primero como doctora. La visita empieza con historial y análisis. Las opciones pueden incluir terapia hormonal, manejo del peso con GLP-1 bajo supervisión médica o terapia IV para hidratación y aporte de nutrientes. Nada se prescribe sin una evaluación, y el seguimiento forma parte del plan.",
    ],
    faqs: [
      { q: "¿Necesito análisis primero?", a: "Para la terapia hormonal y el manejo del peso, sí. Los análisis le indican a la Dra. Olivo qué está ocurriendo realmente para que el tratamiento sea específico y no genérico." },
      { q: "¿El manejo del peso con GLP-1 es adecuado para mí?", a: "Es adecuado para algunas personas y no para otras. La candidatura depende de su historial de salud, sus medicamentos actuales y sus objetivos, todo revisado en una consulta médica." },
    ],
    seo: { title: "Baja energía, hormonas y peso | Olivo Med Spa", description: "Terapia hormonal, manejo del peso con GLP-1 y terapia IV dirigidos por una médica para la fatiga y el peso resistente en Olivo Med Spa, Chicago." },
  },
};
