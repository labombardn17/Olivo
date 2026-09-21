// Spanish version of the `pages` object in components/site/LegalPage.tsx.
// Same shape: title, updated, and [heading, paragraphs[]] sections. Counsel to review before launch.

export type LegalKind = "privacy" | "terms" | "accessibility";

export interface LegalPageEs {
  title: string;
  updated: string;
  sections: readonly (readonly [string, readonly string[]])[];
}

export const legalEs: Record<LegalKind, LegalPageEs> = {
  privacy: { title: "Política de privacidad", updated: "septiembre de 2026", sections: [
    ["Qué recopilamos", ["Cuando reserva a través de Vagaro, escribe o llama a la clínica, o responde el cuestionario de tratamientos, podemos recibir su nombre, sus datos de contacto y los tratamientos que le interesan. El cuestionario no guarda nada en nuestros servidores; sus respuestas permanecen en la sesión de su navegador.", "La información clínica que comparte con la práctica se maneja como información médica conforme a la ley aplicable y se mantiene separada de las analíticas del sitio web."]],
    ["Cómo la usamos", ["Para responderle, programar y confirmar visitas, enviar los recordatorios de cita que usted haya aceptado y mejorar el sitio. No vendemos información personal."]],
    ["Terceros", ["Vagaro (reservas), Cherry (financiamiento), RepeatMD (membresías) y Google (mapas y analíticas) tienen cada uno su propia política de privacidad. Los enlaces a ellas se incluyen donde se utilizan."]],
    ["Sus opciones", ["Puede pedirnos que corrijamos o eliminemos la información de contacto que conservamos con fines de marketing llamando al 872-315-3481. Responda STOP a cualquier mensaje de texto de la clínica para dejar de recibir mensajes."]],
  ]},
  terms: { title: "Términos de uso", updated: "septiembre de 2026", sections: [
    ["Contenido educativo", ["Todo lo que aparece en este sitio es información general sobre los tratamientos que ofrece Olivo Med Spa. No constituye asesoramiento médico ni crea una relación médico-paciente. La candidatura, los riesgos y las expectativas se definen en una consulta presencial con el equipo clínico."]],
    ["Resultados", ["Los resultados individuales varían. Cualquier imagen o testimonio que se muestre refleja la experiencia de una persona y no es una promesa de resultado."]],
    ["Marcas registradas", ["Emsculpt Neo, Emface, Exion, Emsella, Emfemme 360, Opus, Miradry, Hydrafacial, Botox Cosmetic, Xeomin, Revanesse, Belotero, Radiesse, Kybella, Alastin, ZO Skin Health y Skinbetter Science son marcas registradas de sus respectivos propietarios."]],
    ["Reservas y financiamiento", ["Las reservas en línea las proporciona Vagaro y el financiamiento Cherry, cada uno bajo sus propios términos. Olivo Med Spa no establece los términos de financiamiento."]],
  ]},
  accessibility: { title: "Declaración de accesibilidad", updated: "septiembre de 2026", sections: [
    ["Nuestro compromiso", ["Queremos que todas las personas puedan usar este sitio y visitar la clínica. El sitio está construido según WCAG 2.2 AA: operable con teclado, etiquetado para lectores de pantalla, con foco visible, contraste suficiente y movimiento que respeta su configuración de movimiento reducido."]],
    ["La clínica", ["2550 W. Fullerton Ave está a nivel de calle. Si necesita alguna adaptación específica para su visita, llame con anticipación y la organizaremos."]],
    ["Cuéntenos", ["Si algo en este sitio le resulta difícil de acceder o usar, llame o escriba al 872-315-3481 y le ayudaremos y lo corregiremos."]],
  ]},
};
