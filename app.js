/* ══════════════════════════════════════════════════════
   ALTOYSIGA — Navigation, Tips & Preguntas Module
   Static export — zero dependencies
   ══════════════════════════════════════════════════════ */
"use strict";

// ─── TIP DATA ─────────────────────────────────────────
var TIPS = [
  { en: "Speed limit", es: "Límite de velocidad" },
  { en: "Right of way", es: "Derecho de paso" },
  { en: "Yield", es: "Ceder el paso" },
  { en: "Merge", es: "Incorporarse al tráfico" },
  { en: "Pedestrian", es: "Peatón" },
  { en: "Crosswalk", es: "Cruce peatonal" },
  { en: "Traffic signal", es: "Señal de tráfico" },
  { en: "Stop sign", es: "Señal de alto" },
  { en: "Lane", es: "Carril" },
  { en: "Blind spot", es: "Punto ciego" },
  { en: "Turn signal", es: "Señal de giro" },
  { en: "Rearview mirror", es: "Espejo retrovisor" },
  { en: "Shoulder", es: "Acotamiento / berma" },
  { en: "Intersection", es: "Intersección" },
  { en: "Freeway", es: "Autopista" },
  { en: "Roundabout", es: "Glorieta / rotonda" },
  { en: "Parking", es: "Estacionamiento" },
  { en: "U-turn", es: "Vuelta en U" },
  { en: "Flashing light", es: "Luz intermitente" },
  { en: "Railroad crossing", es: "Cruce de ferrocarril" },
];

// ─── NAVIGATION ───────────────────────────────────────
function goTo(name) {
  document.querySelectorAll(".screen").forEach(function (s) {
    s.classList.remove("active");
  });
  var target = document.getElementById("screen-" + name);
  if (target) {
    target.classList.add("active");
    target.scrollTop = 0;
  }
}

function bindNavigation() {
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-goto]");
    if (!el) return;
    var dest = el.getAttribute("data-goto");
    // If navigating to preguntas, show level sub-screen
    if (dest === "preguntas") {
      pqShowSub("pq-levels");
    }
    // If navigating to asociar, show setup sub-screen
    if (dest === "asociar") {
      asShowSub("as-setup");
    }
    // If navigating to flashcards, show setup sub-screen
    if (dest === "flashcards") {
      fcShowSub("fc-setup");
    }
    // If navigating to senales, reset to first sign
    if (dest === "senales") {
      snInit();
    }
    // "Practica el examen" → run maestro mode via existing preguntas logic
    if (dest === "examen") {
      PQ.niv = "maestro";
      pqStart();
      goTo("preguntas");
      return;
    }
    goTo(dest);
  });
}

// ─── TIP ROTATION ─────────────────────────────────────
var tipIndex = 0;
var tipEnEl, tipEsEl;

function rotateTip() {
  if (!tipEnEl || !tipEsEl) return;
  tipIndex = (tipIndex + 1) % TIPS.length;
  var tip = TIPS[tipIndex];
  tipEnEl.style.opacity = "0";
  tipEsEl.style.opacity = "0";
  setTimeout(function () {
    tipEnEl.textContent = tip.en;
    tipEsEl.textContent = tip.es;
    tipEnEl.style.opacity = "1";
    tipEsEl.style.opacity = "1";
  }, 220);
}

function startTipRotation() {
  tipEnEl = document.getElementById("tip-en");
  tipEsEl = document.getElementById("tip-es");
  if (!tipEnEl || !tipEsEl) return;
  var style = document.createElement("style");
  style.textContent = "#tip-en,#tip-es{transition:opacity 0.22s ease;}";
  document.head.appendChild(style);
  setInterval(rotateTip, 4000);
}
var QUESTIONS = [
  {
    id: 1,
    es_n: "¿Qué documento permite conducir a una persona que no puede comprobar su presencia legal en Estados Unidos?",
    es: "¿Qué documento permite conducir a una persona que no puede prove su lawful presence en Estados Unidos?",
    en: "What document allows driving for a person who cannot prove lawful presence in the United States?",
    kt: "lawful presence",
    kt_es: "presencia legal",
    tc: "prove",
    tc_es: "comprobar",
    ops: [
      "Licencia de término limitado",
      "Tarjeta de privilegio de manejo",
      "Licencia de conducir comercial",
    ],
    ops_en: [
      "Limited-Term License",
      "Driving Privilege Card",
      "Commercial Driver License",
    ],
    ok: "Tarjeta de privilegio de manejo",
    ok_en: "Driving Privilege Card",
  },
  {
    id: 2,
    es_n: "¿Cuál es el propósito del examen escrito para obtener tu licencia?",
    es: "¿Cuál es el purpose del written knowledge test para obtener tu licencia?",
    en: "What is the purpose of the written knowledge test to obtain your license?",
    kt: "written knowledge test",
    kt_es: "examen escrito",
    tc: "purpose",
    tc_es: "propósito",
    ops: [
      "Evaluar el vocabulario en inglés del solicitante",
      "Confirmar que tienes el conocimiento para manejar con seguridad",
      "Recaudar fondos para el estado de Utah",
    ],
    ops_en: [
      "Evaluate your English vocabulary",
      "Confirm you have the knowledge to drive safely",
      "Generate state revenue",
    ],
    ok: "Confirmar que tienes el conocimiento para manejar con seguridad",
    ok_en: "Confirm you have the knowledge to drive safely",
  },
  {
    id: 3,
    es_n: "¿Por cuánto tiempo es válido el permiso de aprendizaje en Utah?",
    es: "¿Por cuánto tiempo es valid el learner permit en Utah?",
    en: "How long is a learner permit valid in Utah?",
    kt: "learner permit",
    kt_es: "permiso de aprendizaje",
    tc: "valid",
    tc_es: "válido",
    ops: ["12 meses", "18 meses", "24 meses"],
    ops_en: ["12 months", "18 months", "24 months"],
    ok: "18 meses",
    ok_en: "18 months",
  },
  {
    id: 4,
    es_n: "¿Cuánto tiempo dura el período mínimo con permiso en Utah?",
    es: "¿Cuánto tiempo dura el holding period con permit en Utah?",
    en: "How long is the holding period with a permit in Utah?",
    kt: "holding period",
    kt_es: "período mínimo",
    tc: "permit",
    tc_es: "permiso",
    ops: ["3 meses", "6 meses", "12 meses"],
    ops_en: ["3 months", "6 months", "12 months"],
    ok: "6 meses",
    ok_en: "6 months",
  },
  {
    id: 5,
    es_n: "¿Qué distancia mínima debes mantener al rebasar a un ciclista?",
    es: "¿Qué clearance mínimo debes mantener al passing a un ciclista?",
    en: "How much clearance must you give when passing a bicyclist?",
    kt: "clearance",
    kt_es: "distancia mínima de seguridad",
    tc: "passing",
    tc_es: "rebasar",
    ops: ["1 pie", "3 pies", "5 pies"],
    ops_en: ["1 foot", "3 feet", "5 feet"],
    ok: "3 pies",
    ok_en: "3 feet",
  },
  {
    id: 6,
    es_n: "Si dañas un vehículo estacionado y el conductor no está presente, ¿qué debes hacer?",
    es: "Si dañas un parked vehicle y el driver no está presente, ¿qué debes hacer?",
    en: "If you damage a parked vehicle and the driver is not present, what must you do?",
    kt: "parked vehicle",
    kt_es: "vehículo estacionado",
    tc: "driver",
    tc_es: "conductor",
    ops: [
      "Puedes irte si el daño es menor",
      "Debes quedarte o dejar una nota con tu información",
      "No es necesario hacer nada si no hay testigos",
    ],
    ops_en: [
      "You may leave if damage is minor",
      "You must stay or leave a note with your information",
      "No action is required if no one saw it",
    ],
    ok: "Debes quedarte o dejar una nota con tu información",
    ok_en: "You must stay or leave a note with your information",
  },
  {
    id: 7,
    es_n: "¿Quiénes deben usar casco por ley al conducir un scooter de motor asistido en Utah?",
    es: "¿Quiénes deben usar helmet por ley al conducir un motor-assisted scooter en Utah?",
    en: "Who must wear a helmet by law when operating a motor-assisted scooter in Utah?",
    kt: "motor-assisted scooter",
    kt_es: "scooter de motor asistido",
    tc: "helmet",
    tc_es: "casco",
    ops: [
      "Todos los conductores",
      "Menores de 21 años",
      "Solo menores de 18 años",
    ],
    ops_en: ["All riders", "Under 21", "Under 18 only"],
    ok: "Menores de 21 años",
    ok_en: "Under 21",
  },
  {
    id: 8,
    es_n: "¿Está permitido una vuelta en U en la autopista?",
    es: "¿Está permitido un U-turn en el freeway?",
    en: "Is a U-turn on the freeway allowed?",
    kt: "U-turn",
    kt_es: "vuelta en U",
    tc: "freeway",
    tc_es: "autopista",
    ops: ["Sí, está permitido", "No, está prohibido", "Solo en emergencias"],
    ops_en: [
      "Yes, it is allowed",
      "No, it is prohibited",
      "Only in emergencies",
    ],
    ok: "No, está prohibido",
    ok_en: "No, it is prohibited",
  },
  {
    id: 9,
    es_n: "Al consumir alcohol o drogas antes de conducir, ¿qué funciones se afectan?",
    es: "Al consumir alcohol o impairing drugs antes de driving, ¿qué funciones se afectan?",
    en: "When consuming alcohol or impairing drugs before driving, which functions are affected?",
    kt: "impairing drugs",
    kt_es: "drogas o fármacos que afectan la conducción",
    tc: "driving",
    tc_es: "conducir",
    ops: [
      "Solo los reflejos físicos del conductor",
      "Solo la visión y la percepción de colores",
      "El juicio, la visión y la distinción de colores",
    ],
    ops_en: [
      "Only the driver's physical reflexes",
      "Only vision and color perception",
      "Judgment, vision and color distinction",
    ],
    ok: "El juicio, la visión y la distinción de colores",
    ok_en: "Judgment, vision and color distinction",
  },
  {
    id: 10,
    es_n: "Si transportas pirotecnia en un vehículo, ¿qué está prohibido transportar en el mismo viaje?",
    es: "Si transport pyrotechnics en un vehículo, ¿qué está prohibido transport en el mismo viaje?",
    en: "If you transport pyrotechnics in a vehicle, what is prohibited to transport in the same trip?",
    kt: "pyrotechnics",
    kt_es: "pirotecnia",
    tc: "transport",
    tc_es: "transportar",
    ops: [
      "Agua en recipientes sellados",
      "Explosivos, líquidos inflamables o gas comprimido",
      "Herramientas de trabajo no inflamables",
    ],
    ops_en: [
      "Water in sealed containers",
      "Explosives, flammable liquids, or compressed gas",
      "Non-flammable work tools",
    ],
    ok: "Explosivos, líquidos inflamables o gas comprimido",
    ok_en: "Explosives, flammable liquids, or compressed gas",
  },
  {
    id: 11,
    es_n: "¿Qué delito cometes si abandonas la escena de un accidente con heridos?",
    es: "¿Qué offense cometes si abandonas la escena de un accidente con injuries?",
    en: "What offense do you commit if you leave the scene of an accident with injuries?",
    kt: "offense",
    kt_es: "delito",
    tc: "injuries",
    tc_es: "heridos",
    ops: [
      "Un delito de tercer grado",
      "Una infracción menor",
      "Ningún delito si no hay daños graves",
    ],
    ops_en: [
      "A third-degree felony",
      "A minor infraction",
      "No offense if there is no serious damage",
    ],
    ok: "Un delito de tercer grado",
    ok_en: "A third-degree felony",
  },
  {
    id: 12,
    es_n: "¿Se requiere licencia de manejo para manejar equipo de agricultura como un tractor en una carretera?",
    es: "¿Se require licencia de manejo para manejar agriculture equipment como un tractor en una carretera?",
    en: "Do you require a driver license to operate agricultural equipment, such as a tractor, on a highway?",
    kt: "agriculture equipment",
    kt_es: "equipo de agricultura",
    tc: "require",
    tc_es: "requiere",
    ops: ["Sí, siempre", "No, no se requiere", "Solo si supera 50 mph"],
    ops_en: [
      "Yes, always",
      "No, it is not required",
      "Only if it exceeds 50 mph",
    ],
    ok: "No, no se requiere",
    ok_en: "No, it is not required",
  },
  {
    id: 13,
    es_n: "Ves un vehículo detenido con luces de emergencia. ¿Qué debes hacer?",
    es: "Ves un stopped vehicle con hazard lights. ¿Qué debes hacer?",
    en: "You see a stopped vehicle with hazard lights. What should you do?",
    kt: "hazard lights",
    kt_es: "luces de emergencia",
    tc: "stopped vehicle",
    tc_es: "vehículo detenido",
    ops: [
      "Mantener la velocidad, continuar, y prender tus luces altas",
      "Frenar bruscamente, detenerte y auxiliar al conductor",
      "Reducir la velocidad y cambiar de carril si es seguro y posible",
    ],
    ops_en: [
      "Maintain speed, continue and turn on your high beams",
      "Brake suddenly, stop and assist the driver",
      "Slow down and change lanes if it is safe and possible",
    ],
    ok: "Reducir la velocidad y cambiar de carril",
    ok_en: "Slow down and change lanes if it is safe and possible",
  },
  {
    id: 14,
    es_n: "Cuando vas detrás de un autobús escolar que se detiene y activa sus luces rojas, ¿qué indica?",
    es: "Cuando vas behind de un autobús escolar que se detiene y activa sus red lights, ¿qué indica?",
    en: "When you are behind a school bus that stops and activates its red lights, what does it indicate?",
    kt: "behind",
    kt_es: "detras",
    tc: "red lights",
    tc_es: "luces rojas",
    ops: [
      "Puedes continuar con precaución",
      "Debes detenerte completamente",
      "Solo reduces la velocidad",
    ],
    ops_en: [
      "You may proceed with caution",
      "You must stop completely",
      "You only need to slow down",
    ],
    ok: "Debes detenerte completamente",
    ok_en: "You must stop completely",
  },
  {
    id: 15,
    es_n: "¿Cuál es una planeación segura para viajes largos?",
    es: "¿Which es un trip plan seguro para viajes largos?",
    en: "Which is a safe trip plan for long trips?",
    kt: "trip plan",
    kt_es: "planeación de viaje",
    tc: "which",
    tc_es: "cuál",
    ops: [
      "Dormir bien y planear paradas cada dos horas",
      "Conducir sin parar para llegar más rápido",
      "Dormir bien y planear paradas cada cuatro horas",
    ],
    ops_en: [
      "Get enough rest and plan stops every two hours",
      "Drive without stopping to arrive faster",
      "Get enough rest and plan stops every four hours",
    ],
    ok: "Dormir bien y planear paradas cada dos horas",
    ok_en: "Get enough rest and plan stops every two hours",
  },
  {
    id: 16,
    es_n: "Si el estado tiene dudas sobre tus habilidades para conducir, ¿qué podría suceder?",
    es: "Si el estado tiene dudas sobre tus driving skills, ¿qué may suceder?",
    en: "If the state has doubts about your driving skills, what may happen?",
    kt: "driving skills",
    kt_es: "habilidades para conducir",
    tc: "may",
    tc_es: "podría",
    ops: [
      "Pueden requerir una examinación de revisión",
      "Recibes una multa automática",
      "Pierdes la licencia de inmediato",
    ],
    ops_en: [
      "They may require a review examination",
      "You receive an automatic fine",
      "You lose your license immediately",
    ],
    ok: "Pueden requerir una examinación de revisión",
    ok_en: "They may require a review examination",
  },
  {
    id: 17,
    es_n: "Si un doctor considera que una condición médica afecta parcialmente tu capacidad para conducir, ¿qué sucede?",
    es: "Si un doctor considera que una medical condition afecta parcialmente tu ability para conducir, ¿qué sucede?",
    en: "If a doctor determines that a medical condition partially affects your ability to drive, what happens?",
    kt: "medical condition",
    kt_es: "condición médica",
    tc: "ability",
    tc_es: "capacidad",
    ops: [
      "Recomienda restricciones en tu licencia",
      "Se cancela tu licencia de inmediato",
      "No sucede nada",
    ],
    ops_en: [
      "Recommends restrictions on your license",
      "Your license is canceled immediately",
      "Nothing happens",
    ],
    ok: "Recomienda restricciones en tu licencia",
    ok_en: "Recommends restrictions on your license",
  },
  {
    id: 18,
    es_n: "Un peatón cruza la calle en una zona no designada, ¿qué debes hacer?",
    es: "Un pedestrian cruza la street en una zona no designada, ¿qué debes hacer?",
    en: "A pedestrian crosses the street outside a designated area. What should you do?",
    kt: "pedestrian",
    kt_es: "peatón",
    tc: "street",
    tc_es: "calle",
    ops: [
      "Disminuir la velocidad, detenerte y cederle el paso",
      "Disminuir la velocidad y cederle el paso mientras el vehiculo continua avanzando",
      "Disminuir la velocidad y cederle el paso solo si el peatón está en tu carril",
    ],
    ops_en: [
      "Slow down, stop, and yield",
      "Slow down and yield while the vehicle continues moving",
      "Slow down and yield only if the pedestrian is in your lane",
    ],
    ok: "Disminuir la velocidad, detenerte y cederle el paso",
    ok_en: "Slow down, stop, and yield",
  },
  {
    id: 19,
    es_n: "Después de detenerte, el policía requiere una prueba sanguínea para determinar la toxicología y te niegas, ¿qué sucede?",
    es: "Después de detenerte, el policía requiere un blood test para determinar la toxicología y you refuse, ¿qué sucede?",
    en: "After stopping you, the officer requires a blood test to determine toxicology and you refuse. What happens?",
    kt: "blood test",
    kt_es: "prueba de sangre",
    tc: "refuse",
    tc_es: "negarse",
    ops: [
      "Se revoca tu licencia automáticamente",
      "Recibes solo una advertencia",
      "No hay consecuencias legales",
    ],
    ops_en: [
      "Your license is automatically revoked",
      "You receive only a warning",
      "There are no legal consequences",
    ],
    ok: "Se revoca tu licencia automáticamente",
    ok_en: "Your license is automatically revoked",
  },
  {
    id: 20,
    es_n: "¿Qué es conocido como un punto ciego?",
    es: "¿What is known como un blind spot?",
    en: "What is known as a blind spot?",
    kt: "blind spot",
    kt_es: "punto ciego",
    tc: "what is known",
    tc_es: "qué es conocido",
    ops: [
      "Área que no puedes ver en los espejos",
      "Zona visible a través del espejo retrovisor",
      "Espacio frente al vehículo",
    ],
    ops_en: [
      "An area you cannot see in your mirrors",
      "An area visible through the rearview mirror",
      "The space in front of the vehicle",
    ],
    ok: "Área que no puedes ver en los espejos",
    ok_en: "An area you cannot see in your mirrors",
  },
  {
    id: 21,
    es_n: "¿Qué forma tienen los warning signs en Utah?",
    es: "¿Qué shape tienen los warning signs en Utah?",
    en: "What shape are warning signs in Utah?",
    kt: "warning signs",
    kt_es: "señales de advertencia",
    tc: "shape",
    tc_es: "forma",
    ops: [
      "Tienen forma cuadrada y color verde",
      "Tienen forma de rombo y color amarillo con letras negras",
      "Tienen forma rectangular y color blanco",
    ],
    ops_en: [
      "They are square and green",
      "They are diamond-shaped and yellow with black letters",
      "They are rectangular and white",
    ],
    ok: "Tienen forma de rombo y color amarillo con letras negras",
    ok_en: "They are diamond-shaped and yellow with black letters",
  },
  {
    id: 22,
    es_n: "¿Qué indica un regulatory sign con círculo rojo y diagonal?",
    es: "¿Qué indica un regulatory sign con red circle y diagonal?",
    en: "What does a regulatory sign with a red circle and slash indicate?",
    kt: "regulatory sign",
    kt_es: "señal de reglamentación",
    tc: "red circle",
    tc_es: "círculo rojo",
    ops: [
      "Indica precaución",
      "Indica que la acción está prohibida",
      "Indica una zona de trabajo",
    ],
    ops_en: [
      "It indicates caution",
      "It indicates the action is prohibited",
      "It indicates a work zone",
    ],
    ok: "Indica que la acción está prohibida",
    ok_en: "It indicates the action is prohibited",
  },
  {
    id: 23,
    es_n: "¿Qué indican las señales de guía sobre servicios?",
    es: "¿Qué indican los guide signs sobre services?",
    en: "What do guide signs indicate about services?",
    kt: "guide signs",
    kt_es: "señales de guía",
    tc: "services",
    tc_es: "servicios",
    ops: [
      "Indican peligros en la vía",
      "Indican rutas, direcciones y servicios disponibles",
      "Indican zonas de trabajo",
    ],
    ops_en: [
      "They indicate hazards",
      "They indicate routes, directions, and services",
      "They indicate work zones",
    ],
    ok: "Indican rutas, direcciones y servicios disponibles",
    ok_en: "They indicate routes, directions, and services",
  },
  {
    id: 24,
    es_n: "¿Qué indican las señales de zona de trabajo cuando dicen que hay trabajadores adelante?",
    es: "¿Qué indican los work zone signs cuando dicen workers ahead?",
    en: "What do work zone signs indicate when they say workers ahead?",
    kt: "work zone signs",
    kt_es: "señales de zona de trabajo",
    tc: "workers ahead",
    tc_es: "trabajadores adelante",
    ops: [
      "Indican advertencias generales",
      "Indican trabajadores adelante y posibles cambios en el tráfico",
      "Indican direcciones obligatorias",
    ],
    ops_en: [
      "They indicate general warnings",
      "They indicate workers ahead and possible traffic changes",
      "They indicate required directions",
    ],
    ok: "Indican trabajadores adelante y posibles cambios en el tráfico",
    ok_en: "They indicate workers ahead and possible traffic changes",
  },
  {
    id: 25,
    es_n: "Si hay un banderero dirigiendo el tráfico en una zona de trabajo, ¿qué debes hacer?",
    es: "Si hay un flagger dirigiendo el tráfico en una work zone, ¿qué debes hacer?",
    en: "If a flagger is directing traffic in a work zone, what must you do?",
    kt: "flagger",
    kt_es: "banderero",
    tc: "work zone",
    tc_es: "zona de trabajo",
    ops: [
      "Continuar normalmente",
      "Seguir las instrucciones del flagger",
      "Ignorarlo si el semáforo está en verde",
    ],
    ops_en: [
      "Continue normally",
      "Follow the flagger’s instructions",
      "Ignore them if the light is green",
    ],
    ok: "Seguir las instrucciones del flagger",
    ok_en: "Follow the flagger’s instructions",
  },
][
  ({
    id: 26,
    es_n: "¿Qué pasa con la multa por exceso de velocidad en una zona de construcción en Utah?",
    es: "¿Qué pasa con el speeding fine en una work zone en Utah?",
    en: "What happens to fines for speeding in a work zone in Utah?",
    kt: "speeding fine",
    kt_es: "multa por exceso de velocidad",
    tc: "work zone",
    tc_es: "zona de construcción",
    ops: ["Se reduce a la mitad", "Se duplica", "Es igual"],
    ops_en: ["It is reduced by half", "It is doubled", "It is the same"],
    ok: "Se duplica",
    ok_en: "It is doubled",
  },
  {
    id: 27,
    es_n: "¿Qué significa que una marca de pavimento amarilla entre carriles sea continua?",
    es: "¿Qué significa que una yellow pavement marking entre carriles sea solid?",
    en: "What does it mean when a yellow pavement marking between lanes is solid?",
    kt: "yellow pavement marking",
    kt_es: "marca de pavimento amarilla",
    tc: "solid",
    tc_es: "continua",
    ops: [
      "Puedes adelantar",
      "No debes adelantar",
      "Solo puedes adelantar si hay espacio",
    ],
    ops_en: [
      "You may pass",
      "You must not pass",
      "You may pass if there is space",
    ],
    ok: "No debes adelantar",
    ok_en: "You must not pass",
  },
  {
    id: 28,
    es_n: "Una marca de pavimento blanca continua que separa un carril compartido indica:",
    es: "Una white pavement marking continua que separa un carpool lane indica:",
    en: "A solid white pavement marking separating a carpool lane indicates:",
    kt: "white pavement marking",
    kt_es: "marca de pavimento blanca",
    tc: "carpool lane",
    tc_es: "carril compartido",
    ops: ["Puedes cruzarla", "Va en dirección contraria", "No debes cruzarla"],
    ops_en: [
      "You may cross",
      "It goes opposite direction",
      "You must not cross",
    ],
    ok: "No debes cruzarla",
    ok_en: "You must not cross",
  },
  {
    id: 29,
    es_n: "En una intersección donde los semáforos no funcionan, debes:",
    es: "En una intersection donde los traffic lights no funcionan, debes:",
    en: "At an intersection where traffic lights are not working, you must:",
    kt: "traffic lights",
    kt_es: "semáforos",
    tc: "intersection",
    tc_es: "intersección",
    ops: [
      "Continuar sin detenerte",
      "Detenerte completamente y ceder el paso",
      "Reducir velocidad sin detenerte",
    ],
    ops_en: [
      "Continue without stopping",
      "Come to a complete stop and yield",
      "Slow down without stopping",
    ],
    ok: "Detenerte completamente y ceder el paso",
    ok_en: "Come to a complete stop and yield",
  },
  {
    id: 21,
    es_n: "¿Qué forma tienen las señales de advertencia en Utah?",
    es: "¿Qué shape tienen los warning signs en Utah?",
    en: "What shape are warning signs in Utah?",
    kt: "warning signs",
    kt_es: "señales de advertencia",
    tc: "shape",
    tc_es: "forma",
    ops: [
      "Cuadradas y verdes",
      "En forma de rombo y amarillas con letras negras",
      "Rectangulares y blancas",
    ],
    ops_en: [
      "Square and green",
      "Diamond-shaped and yellow with black letters",
      "Rectangular and white",
    ],
    ok: "En forma de rombo y amarillas con letras negras",
    ok_en: "Diamond-shaped and yellow with black letters",
  },
  {
    id: 22,
    es_n: "¿Qué indica una señal de reglamentación con círculo rojo y diagonal?",
    es: "¿Qué indica un regulatory sign con red circle y diagonal?",
    en: "What does a regulatory sign with a red circle and slash indicate?",
    kt: "regulatory sign",
    kt_es: "señal de reglamentación",
    tc: "red circle",
    tc_es: "círculo rojo",
    ops: ["Precaución", "Acción prohibida", "Zona de trabajo"],
    ops_en: ["Caution", "Action is prohibited", "Work zone"],
    ok: "Acción prohibida",
    ok_en: "Action is prohibited",
  },
  {
    id: 23,
    es_n: "¿Qué indican las señales de guía sobre servicios?",
    es: "¿Qué indican los guide signs sobre services?",
    en: "What do guide signs indicate about services?",
    kt: "guide signs",
    kt_es: "señales de guía",
    tc: "services",
    tc_es: "servicios",
    ops: [
      "Peligros en la vía",
      "Rutas, direcciones y servicios disponibles",
      "Zonas de trabajo",
    ],
    ops_en: ["Hazards", "Routes, directions, and services", "Work zones"],
    ok: "Rutas, direcciones y servicios disponibles",
    ok_en: "Routes, directions, and services",
  },
  {
    id: 24,
    es_n: "¿Qué indican las señales de zona de trabajo cuando dicen que hay trabajadores adelante?",
    es: "¿Qué indican los work zone signs cuando dicen workers ahead?",
    en: "What do work zone signs indicate when they say workers ahead?",
    kt: "work zone signs",
    kt_es: "señales de zona de trabajo",
    tc: "workers ahead",
    tc_es: "trabajadores adelante",
    ops: [
      "Advertencias generales",
      "Trabajadores adelante y posibles cambios en el tráfico",
      "Direcciones obligatorias",
    ],
    ops_en: [
      "General warnings",
      "Workers ahead and possible traffic changes",
      "Required directions",
    ],
    ok: "Trabajadores adelante y posibles cambios en el tráfico",
    ok_en: "Workers ahead and possible traffic changes",
  },
  {
    id: 25,
    es_n: "Si hay un banderero dirigiendo el tráfico en una zona de trabajo, ¿qué debes hacer?",
    es: "Si hay un flagger dirigiendo el tráfico en una work zone, ¿qué debes hacer?",
    en: "If a flagger is directing traffic in a work zone, what must you do?",
    kt: "flagger",
    kt_es: "banderero",
    tc: "work zone",
    tc_es: "zona de trabajo",
    ops: [
      "Continuar normalmente",
      "Seguir las instrucciones del flagger",
      "Ignorarlo si el semáforo está en verde",
    ],
    ops_en: [
      "Continue normally",
      "Follow the flagger’s instructions",
      "Ignore them if the light is green",
    ],
    ok: "Seguir las instrucciones del flagger",
    ok_en: "Follow the flagger’s instructions",
  },
  {
    id: 26,
    es_n: "¿Qué pasa con la multa por exceso de velocidad en una zona de trabajo en Utah?",
    es: "¿Qué pasa con el speeding fine en una work zone en Utah?",
    en: "What happens to fines for speeding in a work zone in Utah?",
    kt: "speeding fine",
    kt_es: "multa por exceso de velocidad",
    tc: "work zone",
    tc_es: "zona de trabajo",
    ops: ["Se reduce a la mitad", "Se duplica", "Es igual"],
    ops_en: ["Reduced by half", "Doubled", "The same"],
    ok: "Se duplica",
    ok_en: "Doubled",
  },
  {
    id: 27,
    es_n: "¿Qué significa que una marca de pavimento amarilla entre carriles sea continua?",
    es: "¿Qué significa que una yellow pavement marking entre carriles sea solid?",
    en: "What does it mean when a yellow pavement marking between lanes is solid?",
    kt: "yellow pavement marking",
    kt_es: "marca de pavimento amarilla",
    tc: "solid",
    tc_es: "continua",
    ops: [
      "Puedes adelantar",
      "No debes adelantar",
      "Solo puedes adelantar si hay espacio",
    ],
    ops_en: [
      "You may pass",
      "You must not pass",
      "You may pass if there is space",
    ],
    ok: "No debes adelantar",
    ok_en: "You must not pass",
  },
  {
    id: 28,
    es_n: "Una marca de pavimento blanca continua que separa un carril compartido indica:",
    es: "Una white pavement marking continua que separa un carpool lane indica:",
    en: "A solid white pavement marking separating a carpool lane indicates:",
    kt: "white pavement marking",
    kt_es: "marca de pavimento blanca",
    tc: "carpool lane",
    tc_es: "carril compartido",
    ops: ["Puedes cruzarla", "Va en dirección contraria", "No debes cruzarla"],
    ops_en: [
      "You may cross",
      "It goes opposite direction",
      "You must not cross",
    ],
    ok: "No debes cruzarla",
    ok_en: "You must not cross",
  },
  {
    id: 29,
    es_n: "En una intersección donde los semáforos no funcionan, debes:",
    es: "En una intersection donde los traffic lights no funcionan, debes:",
    en: "At an intersection where traffic lights are not working, you must:",
    kt: "traffic lights",
    kt_es: "semáforos",
    tc: "intersection",
    tc_es: "intersección",
    ops: [
      "Continuar sin detenerte",
      "Detenerte completamente y ceder el paso",
      "Reducir la velocidad sin detenerte",
    ],
    ops_en: [
      "Continue without stopping",
      "Come to a complete stop and yield",
      "Slow down without stopping",
    ],
    ok: "Detenerte completamente y ceder el paso",
    ok_en: "Come to a complete stop and yield",
  },
  {
    id: 30,
    es_n: "¿Cuándo debes obedecer a un oficial de policía aunque el semáforo esté en verde?",
    es: "¿Cuándo debes obedecer a un police officer aunque el semáforo esté en green?",
    en: "When must you obey a police officer even if the traffic light is green?",
    kt: "police officer",
    kt_es: "oficial de policía",
    tc: "green",
    tc_es: "verde",
    ops: [
      "Solo si hace señal de alto",
      "Siempre, sus instrucciones tienen prioridad",
      "Solo en emergencias",
    ],
    ops_en: [
      "Only if they signal stop",
      "Always, their instructions take priority",
      "Only in emergencies",
    ],
    ok: "Siempre, sus instrucciones tienen prioridad",
    ok_en: "Always, their instructions take priority",
  },
  {
    id: 31,
    es_n: "Una flecha verde sobre un carril flexible indica:",
    es: "Una green arrow sobre un flex lane indica:",
    en: "A green arrow above a flex lane indicates:",
    kt: "green arrow",
    kt_es: "flecha verde",
    tc: "flex lane",
    tc_es: "carril flexible",
    ops: [
      "El carril está cerrado",
      "El carril puede usarse",
      "Debes reducir la velocidad",
    ],
    ops_en: [
      "The lane is closed",
      "The lane can be used",
      "You must slow down",
    ],
    ok: "El carril puede usarse",
    ok_en: "The lane can be used",
  },
  {
    id: 32,
    es_n: "Una X roja sobre un carril flexible indica:",
    es: "Una red X sobre un flex lane indica:",
    en: "A red X above a flex lane indicates:",
    kt: "red X",
    kt_es: "X roja",
    tc: "flex lane",
    tc_es: "carril flexible",
    ops: [
      "Puedes usar el carril con precaución",
      "No puedes usar ese carril",
      "Es solo para emergencias",
    ],
    ops_en: [
      "You may use the lane with caution",
      "You cannot use that lane",
      "It is for emergencies only",
    ],
    ok: "No puedes usar ese carril",
    ok_en: "You cannot use that lane",
  },
  {
    id: 33,
    es_n: "En una zona escolar, el límite de velocidad es:",
    es: "En una school zone, el speed limit es:",
    en: "In a school zone, the speed limit is:",
    kt: "speed limit",
    kt_es: "límite de velocidad",
    tc: "school zone",
    tc_es: "zona escolar",
    ops: ["15 mph", "20 mph", "25 mph"],
    ops_en: ["15 mph", "20 mph", "25 mph"],
    ok: "20 mph",
    ok_en: "20 mph",
  },
  {
    id: 34,
    es_n: "En un área residencial en Utah, el límite de velocidad es:",
    es: "En un residential area en Utah, el speed limit es:",
    en: "In a residential area in Utah, the speed limit is:",
    kt: "speed limit",
    kt_es: "límite de velocidad",
    tc: "residential area",
    tc_es: "área residencial",
    ops: ["20 mph", "25 mph", "35 mph"],
    ops_en: ["20 mph", "25 mph", "35 mph"],
    ok: "25 mph",
    ok_en: "25 mph",
  },
  {
    id: 35,
    es_n: "En una carretera principal en Utah, el límite de velocidad es:",
    es: "En un major highway en Utah, el speed limit es:",
    en: "On a major highway in Utah, the speed limit is:",
    kt: "speed limit",
    kt_es: "límite de velocidad",
    tc: "major highway",
    tc_es: "carretera principal",
    ops: ["45 mph", "55 mph", "65 mph"],
    ops_en: ["45 mph", "55 mph", "65 mph"],
    ok: "55 mph",
    ok_en: "55 mph",
  },
  {
    id: 36,
    es_n: "Un medidor de rampa en una entrada a autopista indica:",
    es: "Un ramp meter en una freeway on-ramp indica:",
    en: "A ramp meter on a freeway on-ramp indicates:",
    kt: "ramp meter",
    kt_es: "medidor de rampa",
    tc: "freeway on-ramp",
    tc_es: "entrada a la autopista",
    ops: [
      "Una señal de velocidad máxima",
      "Un semáforo que controla el acceso",
      "Un carril para emergencias",
    ],
    ops_en: [
      "A speed limit sign",
      "A signal that controls entry",
      "A lane for emergencies",
    ],
    ok: "Un semáforo que controla el acceso",
    ok_en: "A signal that controls entry",
  },
  {
    id: 37,
    es_n: "Un medidor de rampa con luz verde permite pasar:",
    es: "Un ramp meter con green light permite pasar:",
    en: "A ramp meter with a green light allows:",
    kt: "ramp meter",
    kt_es: "medidor de rampa",
    tc: "green light",
    tc_es: "luz verde",
    ops: ["Dos vehículos", "Un vehículo", "Tres o más vehículos"],
    ops_en: ["Two vehicles", "One vehicle", "Three or more vehicles"],
    ok: "Un vehículo",
    ok_en: "One vehicle",
  },
  {
    id: 38,
    es_n: "En un paso peatonal, debes ceder el paso:",
    es: "En una crosswalk, debes ceder el paso a pedestrians:",
    en: "At a crosswalk, you must yield to pedestrians:",
    kt: "crosswalk",
    kt_es: "paso peatonal",
    tc: "pedestrians",
    tc_es: "peatones",
    ops: [
      "Solo si está marcado",
      "Siempre que un peatón esté presente",
      "Solo con señal de alto",
    ],
    ops_en: [
      "Only if marked",
      "Whenever a pedestrian is present",
      "Only with a stop sign",
    ],
    ok: "Siempre que un peatón esté presente",
    ok_en: "Whenever a pedestrian is present",
  },
  {
    id: 39,
    es_n: "La ley básica de velocidad establece:",
    es: "La basic speed law establece que debes conducir reasonably safe",
    en: "The basic speed law states that you must drive at a reasonably safe speed:",
    kt: "basic speed law",
    kt_es: "ley básica de velocidad",
    tc: "reasonably safe",
    tc_es: "razonablemente seguro",
    ops: [
      "Puedes manejar al límite",
      "No debes manejar más rápido de lo seguro",
      "La velocidad mínima es 45 mph",
    ],
    ops_en: [
      "You may drive at the limit",
      "You must not drive faster than safe",
      "Minimum speed is 45 mph",
    ],
    ok: "No debes manejar más rápido de lo seguro",
    ok_en: "You must not drive faster than safe",
  },
  {
    id: 40,
    es_n: "¿Qué forma tienen las señales de cruce de ferrocarril?",
    es: "¿Qué forma tienen los railroad crossing signs que son round yellow?",
    en: "Railroad crossing signs are round and yellow:",
    kt: "railroad crossing signs",
    kt_es: "señales de cruce de ferrocarril",
    tc: "round yellow",
    tc_es: "redonda y amarilla",
    ops: [
      "Rombos amarillos",
      "Redondos amarillos con X y RR",
      "Rectángulos blancos",
    ],
    ops_en: [
      "Yellow diamonds",
      "Round yellow with X and RR",
      "White rectangles",
    ],
    ok: "Redondos amarillos con X y RR",
    ok_en: "Round yellow with X and RR",
  })
];

// ─── PREGUNTAS MODULE ──────────────────────────────────
var PQ = {
  niv: "basico",
  questions: [],
  idx: 0,
  cor: 0,
  inc: 0,
  wrongIds: [],
  done: false,
};

function pqShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

function pqShowSub(id) {
  document.querySelectorAll(".pq-sub").forEach(function (s) {
    s.classList.remove("active");
  });
  var sub = document.getElementById(id);
  if (sub) sub.classList.add("active");
  var screen = document.getElementById("screen-preguntas");
  if (screen) screen.scrollTop = 0;
}

function pqStart() {
  PQ.idx = 0;
  PQ.cor = 0;
  PQ.inc = 0;
  PQ.wrongIds = [];
  PQ.done = false;
  PQ.questions = pqShuffle(QUESTIONS.slice()).slice(0, 20);
  pqShowSub("pq-question");
  pqRender();
}

function pqRetry() {
  var wq = QUESTIONS.filter(function (q) {
    return PQ.wrongIds.indexOf(q.id) >= 0;
  });
  PQ.idx = 0;
  PQ.cor = 0;
  PQ.inc = 0;
  PQ.wrongIds = [];
  PQ.done = false;
  PQ.questions = pqShuffle(wq.slice());
  pqShowSub("pq-question");
  pqRender();
}

function pqMore() {
  PQ.idx = 0;
  PQ.cor = 0;
  PQ.inc = 0;
  PQ.wrongIds = [];
  PQ.done = false;
  PQ.questions = pqShuffle(QUESTIONS.slice()).slice(0, 20);
  pqShowSub("pq-question");
  pqRender();
}

function pqShowReview() {
  var listEl = document.getElementById("pq-review-list");
  var wq = QUESTIONS.filter(function (q) {
    return PQ.wrongIds.indexOf(q.id) >= 0;
  });
  listEl.innerHTML = wq
    .map(function (q, i) {
      var qtext = PQ.niv === "dificil" ? q.en : q.es_n;
      var ans = PQ.niv === "dificil" ? q.ok_en : q.ok;
      return (
        '<div class="pq-review-item">' +
        '<div class="pq-ri-num">' +
        (i + 1) +
        "</div>" +
        '<div class="pq-ri-body">' +
        '<div class="pq-ri-q">' +
        qtext +
        "</div>" +
        '<div class="pq-ri-ans">✓ ' +
        ans +
        "</div>" +
        "</div>" +
        "</div>"
      );
    })
    .join("");
  pqShowSub("pq-review");
}

function pqRender() {
  var tot = PQ.questions.length;
  var q = PQ.questions[PQ.idx];
  PQ.done = false;

  // Progress bar & counters
  document.getElementById("pq-prog-bar").style.width =
    (PQ.idx / tot) * 100 + "%";
  document.getElementById("pq-qnum").textContent = PQ.idx + 1 + " / " + tot;
  document.getElementById("pq-cor").textContent = PQ.cor;
  document.getElementById("pq-inc").textContent = PQ.inc;
  document.getElementById("pq-next-btn").style.display = "none";

  // Question text
  var qtxtEl = document.getElementById("pq-qtxt");
  var hintEl = document.getElementById("pq-hint");

  // ── NIVEL 1 (basico): Spanish question, kt hover only, Spanish answers
  // ── NIVEL 2 (normal): Spanish question, kt + tc hover, Spanish answers
  // ── NIVEL 3 (dificil): English question, no hover, Spanish answers
  // ── NIVEL 4 (maestro): English question, no hover, English answers

  if (PQ.niv === "dificil" || PQ.niv === "maestro") {
    // English question — no hover terms
    qtxtEl.textContent = q.en;
    hintEl.style.display = "none";
  } else {
    // Spanish question with hover terms
    hintEl.style.display = "block";
    hintEl.textContent =
      "💡 Toca los términos en inglés para ver la traducción";

    var html = q.es;

    // ===== NIVEL 1: replace tc with Spanish before rendering =====
    // Same base question for all levels — only the render layer changes.
    // For basico, any tc in English must be converted to Spanish so only kt remains English.
    if (PQ.niv === "basico" && q.tc && q.tc_es && html.indexOf(q.tc) >= 0) {
      html = html.replace(q.tc, q.tc_es);
    }

    // ===== KEY TERM (all Spanish levels) =====
    if (q.kt && html.indexOf(q.kt) >= 0) {
      html = html.replace(
        q.kt,
        '<span class="kt kt1" id="pq-kt1">' +
          q.kt +
          "</span>" +
          '<span class="tb" id="pq-tb1"></span>',
      );
    }

    // ===== CONTEXT WORD (normal = Nivel 2 only + redundancy rule) =====
    var canUseTc =
      PQ.niv === "normal" &&
      q.tc &&
      q.tc_es &&
      html.indexOf(q.tc) >= 0 &&
      q.kt.toLowerCase().indexOf(q.tc.toLowerCase()) < 0;

    if (canUseTc) {
      html = html.replace(
        q.tc,
        '<span class="kt kt2" id="pq-kt2">' +
          q.tc +
          "</span>" +
          '<span class="tb" id="pq-tb2"></span>',
      );
    }

    qtxtEl.innerHTML = html;

    // Bind kt1 tooltip
    var kt1 = document.getElementById("pq-kt1");
    if (kt1) {
      kt1.addEventListener(
        "click",
        (function (ktEs) {
          return function () {
            pqTogTip("pq-tb1", ktEs);
          };
        })(q.kt_es),
      );
    }

    // Bind kt2 tooltip
    var kt2 = document.getElementById("pq-kt2");
    if (kt2 && q.tc_es) {
      kt2.addEventListener(
        "click",
        (function (tcEs) {
          return function () {
            pqTogTip("pq-tb2", tcEs);
          };
        })(q.tc_es),
      );
    }
  }

  // Render answer options — English only for maestro
  var optsEl = document.getElementById("pq-opts");
  optsEl.innerHTML = "";
  var ops =
    PQ.niv === "maestro"
      ? pqShuffle(q.ops_en.slice())
      : pqShuffle(q.ops.slice());

  ops.forEach(function (op) {
    var div = document.createElement("div");
    div.className = "pq-opt";
    div.innerHTML = '<div class="pq-opt-dot"></div><span>' + op + "</span>";
    div.addEventListener(
      "click",
      (function (o, el) {
        return function () {
          pqPick(el, o, q);
        };
      })(op, div),
    );
    optsEl.appendChild(div);
  });
}

function pqTogTip(bid, txt) {
  var b = document.getElementById(bid);
  if (!b) return;
  if (b.style.display === "inline-block") {
    b.style.display = "none";
    b.textContent = "";
  } else {
    b.textContent = txt;
    b.style.display = "inline-block";
  }
}

function pqPick(el, op, q) {
  if (PQ.done) return;
  PQ.done = true;

  var ok = PQ.niv === "maestro" ? q.ok_en : q.ok;

  if (op === ok) {
    PQ.cor++;
    el.classList.add("cor");
  } else {
    PQ.inc++;
    PQ.wrongIds.push(q.id);
    el.classList.add("wrg");
    // Highlight the correct answer
    document.querySelectorAll(".pq-opt").forEach(function (d) {
      var span = d.querySelector("span");
      if (span && span.textContent === ok) d.classList.add("cor");
    });
  }

  document.getElementById("pq-cor").textContent = PQ.cor;
  document.getElementById("pq-inc").textContent = PQ.inc;

  var nextBtn = document.getElementById("pq-next-btn");
  nextBtn.style.display = "block";
  nextBtn.textContent =
    PQ.idx < PQ.questions.length - 1 ? "Siguiente →" : "Ver resultados →";
}

function pqNext() {
  PQ.idx++;
  if (PQ.idx >= PQ.questions.length) {
    pqResults();
  } else {
    pqRender();
    var screen = document.getElementById("screen-preguntas");
    if (screen) screen.scrollTop = 0;
  }
}

function pqResults() {
  var tot = PQ.questions.length;
  var pct = Math.round((PQ.cor / tot) * 100);

  // Score color
  var color = pct >= 80 ? "#64B21C" : pct >= 50 ? "#C9A000" : "#C62020";
  var pctEl = document.getElementById("pq-res-pct");
  pctEl.textContent = pct + "%";
  pctEl.style.color = color;

  // Message — 4 tiers
  var ti, su;
  if (pct >= 90) {
    ti = "¡Excelente! 🎯";
    su = "Dominas el material. Estás listo para el examen real.";
  } else if (pct >= 80) {
    ti = "¡Muy bien! 💪";
    su = "Vas por buen camino. Un poco más de práctica y lo tendrás.";
  } else if (pct >= 70) {
    ti = "Sigue practicando";
    su = "Ya entiendes los conceptos básicos. Repasa los temas que fallaste.";
  } else {
    ti = "Necesitas más estudio 📖";
    su = "No te rindas — revisa las preguntas falladas y vuelve a intentarlo.";
  }

  document.getElementById("pq-res-title").textContent = ti;
  document.getElementById("pq-res-sub").textContent = su;
  document.getElementById("pq-res-cor").textContent = PQ.cor;
  document.getElementById("pq-res-inc").textContent = PQ.inc;

  // Wrong terms
  var wrongsEl = document.getElementById("pq-wrongs");
  var retryBtn = document.getElementById("pq-retry-btn");
  var listEl = document.getElementById("pq-wrong-list");

  if (PQ.wrongIds.length > 0) {
    var wq = QUESTIONS.filter(function (q) {
      return PQ.wrongIds.indexOf(q.id) >= 0;
    });
    listEl.innerHTML = wq
      .map(function (q) {
        return (
          '<div class="pq-wrong-item">' +
          '<div class="pq-wi-en">' +
          q.kt +
          "</div>" +
          '<div class="pq-wi-es">' +
          q.kt_es +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    wrongsEl.style.display = "block";
    retryBtn.style.display = "block";
  } else {
    wrongsEl.style.display = "none";
    retryBtn.style.display = "none";
  }

  pqShowSub("pq-results");
}

function pqInit() {
  // Buttons
  var startBtn = document.getElementById("pq-start-btn");
  if (startBtn) startBtn.addEventListener("click", pqStart);

  var nextBtn = document.getElementById("pq-next-btn");
  if (nextBtn) nextBtn.addEventListener("click", pqNext);

  // "Ver preguntas falladas" → review screen
  var retryBtn = document.getElementById("pq-retry-btn");
  if (retryBtn) retryBtn.addEventListener("click", pqShowReview);

  // "Practicar otras 20" → new shuffle same level
  var moreBtn = document.getElementById("pq-more-btn");
  if (moreBtn) moreBtn.addEventListener("click", pqMore);

  // "Elegir nivel" → back to level selector
  var againBtn = document.getElementById("pq-again-btn");
  if (againBtn)
    againBtn.addEventListener("click", function () {
      pqShowSub("pq-levels");
    });

  // pq-review: back to results
  var reviewBackBtn = document.getElementById("pq-review-back-btn");
  if (reviewBackBtn)
    reviewBackBtn.addEventListener("click", function () {
      pqShowSub("pq-results");
    });

  // pq-review: retry failed questions
  var retryReviewBtn = document.getElementById("pq-retry-review-btn");
  if (retryReviewBtn) retryReviewBtn.addEventListener("click", pqRetry);

  // pq-review: go home
  var homeFromReviewBtn = document.getElementById("pq-home-from-review-btn");
  if (homeFromReviewBtn)
    homeFromReviewBtn.addEventListener("click", function () {
      goTo("home");
    });

  // Level card selection + instrucciones
  var levelCards = document.querySelectorAll(".level-option");

  levelCards.forEach(function (card) {
    card.addEventListener("click", function () {
      // activar tarjeta seleccionada
      levelCards.forEach(function (c) {
        c.classList.remove("active");
      });
      card.classList.add("active");

      // guardar nivel
      PQ.niv = card.dataset.level;

      // borrar instrucciones anteriores
      document.querySelectorAll(".pq-instructions").forEach(function (el) {
        el.remove();
      });

      // texto según nivel
      var text = "";

      if (PQ.niv === "basico") {
        text =
          "En este nivel vas a ver un término en inglés dentro de la pregunta. Al colocar el mouse sobre la palabra en inglés, verás su significado en español. Esto te ayuda a familiarizarte con el inglés.";
      }

      if (PQ.niv === "normal") {
        text =
          "En este nivel vas a ver dos términos en inglés dentro de la pregunta. Al colocar el mouse sobre cada término, verás su significado en español. Esto te ayuda a avanzar más rápido en tu comprensión del inglés.";
      }

      if (PQ.niv === "dificil") {
        text =
          "En este nivel se te presenta la pregunta en inglés y las opciones en español.";
      }

      // crear bloque de instrucciones
      var box = document.createElement("div");
      box.className = "pq-instructions";
      box.innerHTML =
        '<div class="pq-instructions-box">' +
        "<p>" +
        text +
        "</p>" +
        '<button class="pq-action-btn primary pq-inline-start">Empezar</button>' +
        "</div>";

      // insertarlo debajo de la tarjeta seleccionada
      card.insertAdjacentElement("afterend", box);

      // botón empezar
      box
        .querySelector(".pq-inline-start")
        .addEventListener("click", function () {
          pqStart();
        });
    });
  });
}
// ─── INIT ──────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  bindNavigation();
  startTipRotation();
  pqValidatorReport(); // modular validator — results in console
  pqInit();

  // ── Asociar bindings ──
  var asStartBtn = document.getElementById("as-start-btn");
  if (asStartBtn) asStartBtn.addEventListener("click", asInit);

  var asPlayAgainBtn = document.getElementById("as-play-again-btn");
  if (asPlayAgainBtn) asPlayAgainBtn.addEventListener("click", asInit);

  var asBackMini = document.getElementById("as-back-mini");
  if (asBackMini)
    asBackMini.addEventListener("click", function () {
      asShowSub("as-setup");
    });

  // ── Flashcards bindings ──
  var fcStartBtn = document.getElementById("fc-start-btn");
  if (fcStartBtn) fcStartBtn.addEventListener("click", fcInit);

  var fcBackMini = document.getElementById("fc-back-mini");
  if (fcBackMini)
    fcBackMini.addEventListener("click", function () {
      fcShowSub("fc-setup");
    });

  var fcPrevBtn = document.getElementById("fc-prev-btn");
  if (fcPrevBtn) fcPrevBtn.addEventListener("click", prevFlashcard);

  var fcNextBtn = document.getElementById("fc-next-btn");
  if (fcNextBtn) fcNextBtn.addEventListener("click", nextFlashcard);

  var fcContinueBtn = document.getElementById("fc-continue-btn");
  if (fcContinueBtn)
    fcContinueBtn.addEventListener("click", function () {
      fcShowSub("fc-viewer");
    });

  var fcCardWrap = document.getElementById("fc-card-wrap");
  if (fcCardWrap) fcCardWrap.addEventListener("click", flipFlashcard);

  bindFlashcardsControls();

  // ── Señales bindings ──
  var snLangBtn = document.getElementById("sn-lang-btn");
  if (snLangBtn) snLangBtn.addEventListener("click", toggleSignsLanguage);

  goTo("splash");
});

// ══════════════════════════════════════════════════════
// VALIDATION + ID SYSTEM
// ══════════════════════════════════════════════════════

function pqValidateQuestion(q) {
  var errors = [];

  if (q.id === undefined || q.id === null) errors.push("missing id");
  if (!q.kt) errors.push("missing kt");
  if (!q.kt_es) errors.push("missing kt_es");
  if (!q.es) errors.push("missing es");
  if (!q.en) errors.push("missing en");

  if (!q.ops || q.ops.length !== 3) errors.push("invalid ops");
  if (!q.ops_en || q.ops_en.length !== 3) errors.push("invalid ops_en");

  if (!q.ok) errors.push("missing ok");
  if (!q.ok_en) errors.push("missing ok_en");

  if (q.es && q.kt && q.es.indexOf(q.kt) < 0) {
    errors.push("kt not in es");
  }

  if (q.tc && q.kt && q.kt.toLowerCase().indexOf(q.tc.toLowerCase()) >= 0) {
    errors.push("tc inside kt — will be suppressed at render");
  }

  if (q.tc && q.es && q.es.indexOf(q.tc) < 0) {
    errors.push("tc not in es — tc hover will not render");
  }

  return errors;
}

function pqValidateBank() {
  var seen = {};
  QUESTIONS.forEach(function (q) {
    if (seen[q.id]) {
      console.error("Duplicate ID:", q.id);
    }
    seen[q.id] = true;

    var errs = pqValidateQuestion(q);
    if (errs.length) {
      console.warn("Q " + q.id + ":", errs);
    }
  });
}

// ══════════════════════════════════════════════════════
// NEXT ID GENERATOR
// ══════════════════════════════════════════════════════

function pqGetNextId() {
  var maxId = 0;
  QUESTIONS.forEach(function (q) {
    if (q.id > maxId) maxId = q.id;
  });
  return maxId + 1;
}

// ══════════════════════════════════════════════════════════════
// MODULAR QUESTION BANK VALIDATOR
// Checks question quality, answer quality, level behavior,
// term count per level, and hover reference mapping.
// Internal level names: basico | normal | dificil | maestro
// Internal term names:  kt | kt_es | tc | tc_es
// ══════════════════════════════════════════════════════════════

var PQ_RULES = {};

// ── RULE: decision_based_rule ─────────────────────────────────
// Rejects definition-style or abstract confirmation stems.
// Requires scenario-first structure (Si… / Cuando…).
PQ_RULES.decision_based_rule = function (q) {
  var violations = [];
  var es = q.es || "";
  var esL = es.toLowerCase();

  // ── HARD VIOLATION: explicit definition, classification, or abstract
  //    confirmation stems that clearly violate DMV decision-based format.
  var hardPatterns = [
    { re: /^¿qué es/i, msg: 'Definition stem: "¿Qué es…"' },
    { re: /^¿qué son/i, msg: 'Definition stem: "¿Qué son…"' },
    { re: /^¿cómo se clasifica/i, msg: "Classification stem" },
    { re: /^¿cómo se llama/i, msg: "Naming stem" },
    {
      re: /¿el .{1,50} implica/i,
      msg: '"el X implica" — abstract confirmation',
    },
    {
      re: /¿la .{1,50} implica/i,
      msg: '"la X implica" — abstract confirmation',
    },
  ];

  for (var i = 0; i < hardPatterns.length; i++) {
    if (hardPatterns[i].re.test(esL)) {
      violations.push({
        severity: "hard_violation",
        reason: hardPatterns[i].msg,
        text: es.slice(0, 80),
      });
      return violations;
    }
  }

  // ── HARD VIOLATION: abstract ¿El/La/Los/Las + pure state verb
  //    (not action verbs — these are abstract conceptual questions)
  var abstractState =
    /^¿(el|la|los|las)\s+\S+(\s+\S+)?\s+(reduce|reducen|implica|implican|afecta|afectan|se considera|es un|son un)/i;
  if (abstractState.test(esL)) {
    violations.push({
      severity: "hard_violation",
      reason:
        'Abstract "¿El/La/Los/Las X + state verb" — no scenario, no decision',
      text: es.slice(0, 80),
    });
    return violations;
  }

  // ── NEEDS REVIEW: direct factual stems without scenario opener.
  //    These may still be valid exam-style questions (¿Cuántos…? ¿Qué indica…?)
  //    but should be reviewed to confirm they present a clear decision prompt.
  var scenarioOpener =
    /^[¿¡]?(si|cuando|al|antes de|después de|despues de|tras|en caso de|en un[ao]?|estás|estas|vas|ves|tienes)/i;
  // Direct factual openers — valid but not scenario-first
  var factualOpener =
    /^[¿¡]?(cuál|cual|cuánto|cuanto|cuántos|cuantos|cuántas|cuantas|cuándo|cuando|dónde|donde|quién|quien|qué|que|cómo|como|a qué|a que|en qué|en que|de qué|de que|por cuánto|por cuanto|a partir de|debes|debe|puedes|puede|pueden|solo los|sólo los|para|además|ademas|entre las|aplica|aplican)/i;

  if (!scenarioOpener.test(esL) && !factualOpener.test(esL)) {
    violations.push({
      severity: "needs_review",
      reason:
        "No scenario opener (Si/Cuando/Al) and no recognized factual stem — verify question is decision-based",
      text: es.slice(0, 80),
    });
  }

  return violations;
};

// ── RULE: single_idea_rule ────────────────────────────────────
// Rejects stems with multiple question marks (stacked questions).
PQ_RULES.single_idea_rule = function (q) {
  var violations = [];
  var es = q.es || "";
  var count = (es.match(/[?]/g) || []).length;
  if (count > 1) {
    violations.push({
      severity: "hard_violation",
      reason: "Multiple question marks (" + count + ") — stacked question",
      text: es.slice(0, 80),
    });
  }
  return violations;
};

// ── RULE: no_clueing_rule ─────────────────────────────────────
// Rejects answer sets where correct answer is significantly
// longer than distractors (1.8x threshold).
PQ_RULES.no_clueing_rule = function (q) {
  var violations = [];
  var ops = q.ops || [];
  var ok = q.ok || "";
  if (!ops.length || !ok) return violations;
  var okLen = ok.length;
  var others = ops
    .filter(function (o) {
      return o !== ok;
    })
    .map(function (o) {
      return o.length;
    });
  var maxOther = Math.max.apply(null, others);
  var ratio = okLen / maxOther;
  if (ratio > 1.8) {
    violations.push({
      severity: "hard_violation",
      reason:
        "Correct answer is " +
        ratio.toFixed(1) +
        "x longer than longest distractor (" +
        okLen +
        "c vs " +
        maxOther +
        "c)",
      text: ok.slice(0, 80),
    });
  } else if (ratio > 1.4) {
    violations.push({
      severity: "needs_review",
      reason:
        "Correct answer is " +
        ratio.toFixed(1) +
        "x longer than longest distractor (" +
        okLen +
        "c vs " +
        maxOther +
        "c)",
      text: ok.slice(0, 80),
    });
  }
  return violations;
};

// ── RULE: answer_coverage_rule ────────────────────────────────
// Confirms ops_en and ok_en exist and are complete.
PQ_RULES.answer_coverage_rule = function (q) {
  var violations = [];
  if (!q.ops_en || q.ops_en.length !== 3) {
    violations.push({
      severity: "hard_violation",
      reason:
        "ops_en missing or does not have exactly 3 choices — maestro level will break",
      text: (q.es || "").slice(0, 80),
    });
  }
  if (!q.ok_en) {
    violations.push({
      severity: "hard_violation",
      reason: "ok_en missing — maestro level correct answer undefined",
      text: (q.es || "").slice(0, 80),
    });
  }
  return violations;
};

// ── RULE: level_term_enforcement_rule ─────────────────────────
// Validates kt, kt_es, tc, tc_es existence and placement in es.
// Validates hover reference mapping by level.
// Level names are INTERNAL code variables:
//   basico | normal | dificil | maestro
PQ_RULES.level_term_enforcement_rule = function (q) {
  var violations = [];
  var es = q.es || "";
  var en = q.en || "";
  var kt = q.kt || "";
  var ktEs = q.kt_es || "";
  var tc = q.tc || "";
  var tcEs = q.tc_es || "";

  function hard(reason, text) {
    violations.push({
      severity: "hard_violation",
      reason: reason,
      text: (text || "").slice(0, 80),
    });
  }
  function review(reason, text) {
    violations.push({
      severity: "needs_review",
      reason: reason,
      text: (text || "").slice(0, 80),
    });
  }

  if (!kt) hard("kt missing — basico/normal will have no hover term", es);
  else if (kt && es && es.indexOf(kt) < 0)
    hard('kt="' + kt + '" not in es — hover will not render', es);
  if (!ktEs) hard("kt_es missing — tooltip will be empty", es);

  if (!tc) review("tc missing — normal level falls back to 1 English term", es);
  else {
    if (!tcEs) hard("tc_es missing — normal level tooltip will be empty", es);
    if (es && es.indexOf(tc) < 0)
      hard(
        'tc="' + tc + '" not in es — normal level hover will not render',
        es,
      );
    if (kt && kt.toLowerCase().indexOf(tc.toLowerCase()) >= 0)
      hard('tc="' + tc + '" inside kt="' + kt + '" — redundancy violation', es);
    if (kt && tc.toLowerCase() === kt.toLowerCase())
      hard("tc equals kt — rendering collision", es);
  }

  if (!en) hard("en missing — dificil/maestro will render blank", es);

  return violations;
};

// ── RUNNER ────────────────────────────────────────────────────
// Each rule returns an array of:
//   { severity: 'hard_violation'|'needs_review', reason: string, text: string }
// or legacy strings (converted here for backward compat).
function pqRunValidator() {
  var results = [];

  QUESTIONS.forEach(function (q) {
    var qViolations = [];

    Object.keys(PQ_RULES).forEach(function (ruleName) {
      var raw = PQ_RULES[ruleName](q);
      raw.forEach(function (v) {
        if (typeof v === "string") {
          // legacy string format — convert
          var sev =
            v.indexOf("[HARD]") >= 0 ? "hard_violation" : "needs_review";
          qViolations.push({
            rule: ruleName,
            severity: sev,
            reason: v.replace(/\[(HARD|SUSPICIOUS)\]\s*/, ""),
            text: (q.es || "").slice(0, 80),
          });
        } else {
          qViolations.push({
            rule: ruleName,
            severity: v.severity,
            reason: v.reason,
            text: v.text || (q.es || "").slice(0, 80),
          });
        }
      });
    });

    if (qViolations.length) {
      results.push({
        id: q.id,
        es: (q.es || "").slice(0, 80),
        violations: qViolations,
      });
    }
  });

  return results;
}

// ── REPORTER ─────────────────────────────────────────────────
// Groups results by rule + severity (hard_violation | needs_review).
function pqValidatorReport() {
  var results = pqRunValidator();

  if (!results.length) {
    console.log(
      "%c✅ ALTOYSIGA Validator: All 320 questions passed.",
      "color:green;font-weight:bold",
    );
    return results;
  }

  var hardCount = 0,
    reviewCount = 0;
  results.forEach(function (r) {
    r.violations.forEach(function (v) {
      if (v.severity === "hard_violation") hardCount++;
      else reviewCount++;
    });
  });

  console.warn(
    "%c⚠ ALTOYSIGA Validator — " +
      results.length +
      " questions flagged: " +
      hardCount +
      " hard_violation  ·  " +
      reviewCount +
      " needs_review",
    "color:orange;font-weight:bold;font-size:13px",
  );

  // Group by rule → severity
  var byKey = {};
  results.forEach(function (r) {
    r.violations.forEach(function (v) {
      var key = v.rule + " [" + v.severity + "]";
      if (!byKey[key]) byKey[key] = [];
      byKey[key].push({ id: r.id, reason: v.reason, text: v.text || r.es });
    });
  });

  Object.keys(byKey)
    .sort()
    .forEach(function (key) {
      var items = byKey[key];
      var isHard = key.indexOf("hard_violation") >= 0;
      var color = isHard
        ? "color:#e74c3c;font-weight:bold"
        : "color:#e67e22;font-weight:bold";
      console.groupCollapsed("%c" + key + " (" + items.length + ")", color);
      items.forEach(function (item) {
        if (isHard) console.error("Q" + item.id + ": " + item.reason);
        else console.warn("Q" + item.id + ": " + item.reason);
        console.log("  → " + item.text);
      });
      console.groupEnd();
    });

  return results;
}

// ── RULE: spanglish_naturality_rule ─────────────────────────
// Flags unnatural hybrid phrasing where a Spanish auxiliary verb
// is immediately followed by an English verb form.
// Allows natural bilingual noun/label mixing.
PQ_RULES.spanglish_naturality_rule = function (q) {
  var violations = [];
  var esL = (q.es || "").toLowerCase();

  var allowed = [
    "passing",
    "turning",
    "backing",
    "parking",
    "speeding",
    "merging",
    "driving",
    "following",
    "stopping",
    "starting",
    "yielding",
  ];

  var badPatterns = [
    {
      re: /est[aá]\w*\s+being/,
      msg: 'estar + "being" — replace with a natural verb or allowed -ing label',
    },
    {
      re: /te est[aá]\s+being/,
      msg: 'te está being — unnatural; try "te está passing"',
    },
    {
      re: /est[aá]\s+making/,
      msg: "está making — replace with hacer or rewrite",
    },
    {
      re: /est[aá]\s+doing/,
      msg: "está doing — replace with hacer or rewrite",
    },
    {
      re: /fue\s+[a-z]+ed/,
      msg: "fue + English -ed — unnatural passive hybrid",
    },
    {
      re: /siendo\s+[a-z]+ed/,
      msg: "siendo + English -ed — unnatural passive hybrid",
    },
    {
      re: /ha\s+sido\s+[a-z]+ing/,
      msg: "ha sido + English -ing — unnatural hybrid tense",
    },
  ];

  badPatterns.forEach(function (p) {
    var m = esL.match(p.re);
    if (m) {
      var words = m[0].split(/\s+/);
      var eng = words[words.length - 1];
      if (
        !allowed.some(function (w) {
          return eng === w;
        })
      ) {
        violations.push({
          severity: "hard_violation",
          reason: 'Unnatural Spanglish: "' + m[0] + '" — ' + p.msg,
          text: (q.es || "").slice(0, 80),
        });
      }
    }
  });

  return violations;
};

// ── ADD A RULE ────────────────────────────────────────────────
// Call this to register additional rules at any time.
// fn(q) must return an array of violation strings (empty = pass).
// Example:
//   pqAddRule('my_rule', function(q) {
//     return q.es.length > 200 ? ['Stem too long'] : [];
//   });
function pqAddRule(name, fn) {
  if (typeof fn !== "function") {
    console.error("pqAddRule: fn must be a function");
    return;
  }
  PQ_RULES[name] = fn;
  console.log("Rule registered: " + name);
}

// ══════════════════════════════════════════════════════════════
// ASOCIAR MODULE — Quizlet-style matching mode
// Vocabulary: DMV_TERMS (priority: "high" used in match mode)
// Functions:  getRandomTerms(n), getMatchPairs(),
//             asShowSub, asInit, asRender, asHandleClick,
//             asUpdateStatus, asShowResults
// ══════════════════════════════════════════════════════════════

// ─── VOCABULARY DATASET ───────────────────────────────────────
var DMV_TERMS = [
  {
    id: 1,
    en: "yield",
    es: "ceder el paso",
    category: "right-of-way",
    priority: "high",
  },
  {
    id: 2,
    en: "merge",
    es: "incorporarse",
    category: "maneuvers",
    priority: "high",
  },
  { id: 3, en: "lane", es: "carril", category: "road", priority: "high" },
  {
    id: 4,
    en: "shoulder",
    es: "acotamiento",
    category: "road",
    priority: "high",
  },
  {
    id: 5,
    en: "blind spot",
    es: "punto ciego",
    category: "visibility",
    priority: "high",
  },
  {
    id: 6,
    en: "crosswalk",
    es: "paso peatonal",
    category: "pedestrian",
    priority: "high",
  },
  {
    id: 7,
    en: "right-of-way",
    es: "derecho de paso",
    category: "right-of-way",
    priority: "high",
  },
  {
    id: 8,
    en: "pull over",
    es: "orillarse",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 9,
    en: "back up",
    es: "retroceder",
    category: "maneuvers",
    priority: "high",
  },
  { id: 10, en: "ramp", es: "rampa", category: "road", priority: "high" },
  {
    id: 11,
    en: "on-ramp",
    es: "entrada a autopista",
    category: "road",
    priority: "high",
  },
  {
    id: 12,
    en: "off-ramp",
    es: "salida de autopista",
    category: "road",
    priority: "high",
  },
  { id: 13, en: "median", es: "camellón", category: "road", priority: "high" },
  {
    id: 14,
    en: "turn lane",
    es: "carril de giro",
    category: "road",
    priority: "high",
  },
  {
    id: 15,
    en: "headlights",
    es: "luces delanteras",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 16,
    en: "high beams",
    es: "luces altas",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 17,
    en: "low beams",
    es: "luces bajas",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 18,
    en: "glare",
    es: "deslumbramiento",
    category: "visibility",
    priority: "high",
  },
  { id: 19, en: "hazard", es: "peligro", category: "safety", priority: "high" },
  { id: 20, en: "skid", es: "derrape", category: "safety", priority: "high" },
  { id: 21, en: "brake", es: "frenar", category: "vehicle", priority: "high" },
  {
    id: 22,
    en: "traction",
    es: "tracción",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 23,
    en: "following distance",
    es: "distancia de seguimiento",
    category: "safety",
    priority: "high",
  },
  {
    id: 24,
    en: "tailgating",
    es: "seguir muy de cerca",
    category: "safety",
    priority: "high",
  },
  {
    id: 25,
    en: "work zone",
    es: "zona de construcción",
    category: "signs",
    priority: "high",
  },
  {
    id: 26,
    en: "school zone",
    es: "zona escolar",
    category: "signs",
    priority: "high",
  },
  {
    id: 27,
    en: "carpool lane",
    es: "carril compartido",
    category: "road",
    priority: "high",
  },
  {
    id: 28,
    en: "flex lane",
    es: "carril reversible",
    category: "road",
    priority: "high",
  },
  { id: 29, en: "detour", es: "desvío", category: "road", priority: "high" },
  {
    id: 30,
    en: "flagger",
    es: "banderero",
    category: "work-zone",
    priority: "high",
  },
  {
    id: 31,
    en: "railroad crossing",
    es: "cruce de tren",
    category: "road",
    priority: "high",
  },
  { id: 32, en: "train", es: "tren", category: "road", priority: "high" },
  {
    id: 33,
    en: "emergency vehicle",
    es: "vehículo de emergencia",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 34,
    en: "sirens",
    es: "sirenas",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 35,
    en: "flashing lights",
    es: "luces intermitentes",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 36,
    en: "intersection",
    es: "intersección",
    category: "road",
    priority: "high",
  },
  {
    id: 37,
    en: "sidewalk",
    es: "banqueta",
    category: "pedestrian",
    priority: "high",
  },
  { id: 38, en: "curve", es: "curva", category: "road", priority: "high" },
  { id: 39, en: "hill", es: "colina", category: "road", priority: "high" },
  {
    id: 40,
    en: "roundabout",
    es: "glorieta",
    category: "road",
    priority: "high",
  },
  // ── Extended flashcard deck (ids 41–100) ──────────────────
  {
    id: 41,
    en: "speed limit",
    es: "límite de velocidad",
    category: "signs",
    priority: "high",
  },
  {
    id: 42,
    en: "stop sign",
    es: "señal de alto",
    category: "signs",
    priority: "high",
  },
  {
    id: 43,
    en: "traffic light",
    es: "semáforo",
    category: "signs",
    priority: "high",
  },
  {
    id: 44,
    en: "freeway",
    es: "autopista",
    category: "road",
    priority: "high",
  },
  {
    id: 45,
    en: "highway",
    es: "carretera",
    category: "road",
    priority: "high",
  },
  {
    id: 46,
    en: "U-turn",
    es: "vuelta en U",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 47,
    en: "turn signal",
    es: "señal de giro",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 48,
    en: "lane change",
    es: "cambio de carril",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 49,
    en: "right turn",
    es: "giro a la derecha",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 50,
    en: "left turn",
    es: "giro a la izquierda",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 51,
    en: "four-way stop",
    es: "alto de cuatro vías",
    category: "road",
    priority: "high",
  },
  {
    id: 52,
    en: "pedestrian",
    es: "peatón",
    category: "pedestrian",
    priority: "high",
  },
  {
    id: 53,
    en: "bicyclist",
    es: "ciclista",
    category: "road",
    priority: "high",
  },
  {
    id: 54,
    en: "school bus",
    es: "autobús escolar",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 55,
    en: "emergency lane",
    es: "carril de emergencia",
    category: "road",
    priority: "high",
  },
  {
    id: 56,
    en: "passing",
    es: "rebasar",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 57,
    en: "no-zone",
    es: "zona de punto ciego",
    category: "safety",
    priority: "high",
  },
  {
    id: 58,
    en: "parking",
    es: "estacionamiento",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 59,
    en: "parallel parking",
    es: "estacionamiento en paralelo",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 60,
    en: "fire hydrant",
    es: "hidrante de incendios",
    category: "road",
    priority: "high",
  },
  { id: 61, en: "curb", es: "bordillo", category: "road", priority: "high" },
  {
    id: 62,
    en: "road rage",
    es: "furia al volante",
    category: "safety",
    priority: "high",
  },
  {
    id: 63,
    en: "aggressive driving",
    es: "manejo agresivo",
    category: "safety",
    priority: "high",
  },
  {
    id: 64,
    en: "defensive driving",
    es: "conducción defensiva",
    category: "safety",
    priority: "high",
  },
  {
    id: 65,
    en: "acceleration lane",
    es: "carril de aceleración",
    category: "road",
    priority: "high",
  },
  {
    id: 66,
    en: "deceleration lane",
    es: "carril de desaceleración",
    category: "road",
    priority: "high",
  },
  {
    id: 67,
    en: "zipper merge",
    es: "fusión en cremallera",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 68,
    en: "snowplow",
    es: "quitanieves",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 69,
    en: "ramp meter",
    es: "medidor de rampa",
    category: "signs",
    priority: "high",
  },
  {
    id: 70,
    en: "gore area",
    es: "zona de separación",
    category: "road",
    priority: "high",
  },
  {
    id: 71,
    en: "three-point turn",
    es: "vuelta de tres puntos",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 72,
    en: "backing",
    es: "retroceder",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 73,
    en: "hazard lights",
    es: "luces de emergencia",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 74,
    en: "parking brake",
    es: "freno de estacionamiento",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 75,
    en: "steering wheel",
    es: "volante",
    category: "vehicle",
    priority: "high",
  },
  {
    id: 76,
    en: "distraction",
    es: "distracción",
    category: "safety",
    priority: "high",
  },
  {
    id: 77,
    en: "head check",
    es: "revisión de punto ciego",
    category: "safety",
    priority: "high",
  },
  {
    id: 78,
    en: "vehicle breakdown",
    es: "descompostura vehicular",
    category: "safety",
    priority: "high",
  },
  {
    id: 79,
    en: "warning sign",
    es: "señal de advertencia",
    category: "signs",
    priority: "high",
  },
  {
    id: 80,
    en: "regulatory sign",
    es: "señal de reglamentación",
    category: "signs",
    priority: "high",
  },
  {
    id: 81,
    en: "guide sign",
    es: "señal de guía",
    category: "signs",
    priority: "high",
  },
  {
    id: 82,
    en: "yield sign",
    es: "señal de ceda el paso",
    category: "signs",
    priority: "high",
  },
  {
    id: 83,
    en: "double white line",
    es: "doble línea blanca",
    category: "road",
    priority: "high",
  },
  {
    id: 84,
    en: "solid yellow line",
    es: "línea amarilla continua",
    category: "road",
    priority: "high",
  },
  {
    id: 85,
    en: "dashed yellow line",
    es: "línea amarilla discontinua",
    category: "road",
    priority: "high",
  },
  {
    id: 86,
    en: "interstate highway",
    es: "autopista interestatal",
    category: "road",
    priority: "high",
  },
  {
    id: 87,
    en: "residential area",
    es: "zona residencial",
    category: "road",
    priority: "high",
  },
  {
    id: 88,
    en: "fire station",
    es: "estación de bomberos",
    category: "road",
    priority: "high",
  },
  { id: 89, en: "bridge", es: "puente", category: "road", priority: "high" },
  {
    id: 90,
    en: "one-way street",
    es: "calle de un sentido",
    category: "road",
    priority: "high",
  },
  {
    id: 91,
    en: "divided highway",
    es: "autopista dividida",
    category: "road",
    priority: "high",
  },
  {
    id: 92,
    en: "entrance ramp",
    es: "rampa de entrada",
    category: "road",
    priority: "high",
  },
  {
    id: 93,
    en: "exit lane",
    es: "carril de salida",
    category: "road",
    priority: "high",
  },
  {
    id: 94,
    en: "complete stop",
    es: "detención completa",
    category: "maneuvers",
    priority: "high",
  },
  {
    id: 95,
    en: "right-of-way sign",
    es: "señal de derecho de paso",
    category: "signs",
    priority: "high",
  },
  {
    id: 96,
    en: "traffic check",
    es: "revisión de tráfico",
    category: "safety",
    priority: "high",
  },
  {
    id: 97,
    en: "driver license",
    es: "licencia de manejo",
    category: "legal",
    priority: "high",
  },
  {
    id: 98,
    en: "speed zone",
    es: "zona de velocidad",
    category: "signs",
    priority: "high",
  },
  {
    id: 99,
    en: "road conditions",
    es: "condiciones del camino",
    category: "safety",
    priority: "high",
  },
  {
    id: 100,
    en: "traffic flow",
    es: "flujo de tráfico",
    category: "road",
    priority: "high",
  },
];

// ─── VOCABULARY HELPERS ───────────────────────────────────────
function getRandomTerms(n) {
  var pool = DMV_TERMS.filter(function (t) {
    return t.priority === "high";
  });
  var copy = pool.slice();
  for (var i = copy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy.slice(0, n);
}

function getMatchPairs() {
  var terms = getRandomTerms(6);
  var cards = [];
  terms.forEach(function (t) {
    cards.push({ id: t.id, lang: "en", text: t.en });
    cards.push({ id: t.id, lang: "es", text: t.es });
  });
  for (var i = cards.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = cards[i];
    cards[i] = cards[j];
    cards[j] = tmp;
  }
  return cards;
}

// ─── STATE ────────────────────────────────────────────────────
var AS = {
  cards: [],
  selected: null,
  locked: false,
  matched: 0,
  attempts: 0,
};

// ─── SUB-SCREEN SWITCHER (mirrors pqShowSub) ──────────────────
function asShowSub(id) {
  document.querySelectorAll(".as-sub").forEach(function (s) {
    s.classList.remove("active");
  });
  var sub = document.getElementById(id);
  if (sub) sub.classList.add("active");
  var screen = document.getElementById("screen-asociar");
  if (screen) screen.scrollTop = 0;
}

// ─── INIT A NEW ROUND ─────────────────────────────────────────
function asInit() {
  AS.cards = getMatchPairs();
  AS.selected = null;
  AS.locked = false;
  AS.matched = 0;
  AS.attempts = 0;
  asRender();
  asShowSub("as-board");
}

// ─── RENDER GRID ──────────────────────────────────────────────
function asRender() {
  var grid = document.getElementById("as-grid");
  if (!grid) return;
  grid.innerHTML = "";
  AS.cards.forEach(function (card) {
    var el = document.createElement("div");
    el.className =
      "as-card " + (card.lang === "en" ? "as-card-en" : "as-card-es");
    el.setAttribute("data-id", card.id);
    el.setAttribute("data-lang", card.lang);
    el.textContent = card.text;
    el.addEventListener("click", function () {
      asHandleClick(el, card);
    });
    grid.appendChild(el);
  });
  asUpdateStatus();
}

// ─── UPDATE COUNTERS ──────────────────────────────────────────
function asUpdateStatus() {
  var m = document.getElementById("as-matched");
  var a = document.getElementById("as-attempts");
  if (m) m.textContent = AS.matched;
  if (a) a.textContent = AS.attempts;
}

// ─── CARD CLICK HANDLER ───────────────────────────────────────
function asHandleClick(el, card) {
  if (AS.locked) return;
  if (el.classList.contains("as-matched-done")) return;
  if (el.classList.contains("as-wrong")) return;

  // No selection yet → select this card
  if (!AS.selected) {
    AS.selected = { el: el, card: card };
    el.classList.add("as-selected");
    return;
  }

  // Tap same card → deselect
  if (AS.selected.el === el) {
    el.classList.remove("as-selected");
    AS.selected = null;
    return;
  }

  // Second card tapped — evaluate pair
  AS.locked = true;
  AS.attempts++;
  asUpdateStatus();

  var firstEl = AS.selected.el;
  var firstCard = AS.selected.card;
  AS.selected = null;

  if (firstCard.id === card.id && firstCard.lang !== card.lang) {
    // ✓ CORRECT MATCH
    firstEl.classList.remove("as-selected");
    firstEl.classList.add("as-correct");
    el.classList.add("as-correct");
    setTimeout(function () {
      firstEl.classList.remove("as-correct");
      el.classList.remove("as-correct");
      firstEl.classList.add("as-matched-done");
      el.classList.add("as-matched-done");
      AS.matched++;
      asUpdateStatus();
      AS.locked = false;
      if (AS.matched === 6) {
        setTimeout(asShowResults, 600);
      }
    }, 480);
  } else {
    // ✗ WRONG — flash and reset
    firstEl.classList.remove("as-selected");
    firstEl.classList.add("as-wrong");
    el.classList.add("as-wrong");
    setTimeout(function () {
      firstEl.classList.remove("as-wrong");
      el.classList.remove("as-wrong");
      AS.locked = false;
    }, 700);
  }
}

// ─── RESULTS SCREEN ───────────────────────────────────────────
function asShowResults() {
  var attempts = AS.attempts;
  var accuracy = Math.round((6 / attempts) * 100);
  var iconEl = document.getElementById("as-result-icon");
  var headingEl = document.getElementById("as-result-heading");
  var accEl = document.getElementById("as-result-acc");
  var finalEl = document.getElementById("as-final-attempts");

  if (finalEl) finalEl.textContent = attempts;

  if (accuracy === 100) {
    if (iconEl) iconEl.textContent = "🏆";
    if (headingEl) headingEl.textContent = "¡Perfecto!";
    if (accEl) {
      accEl.textContent = "100% de precisión";
      accEl.style.color = "#64B21C";
    }
  } else if (accuracy >= 70) {
    if (iconEl) iconEl.textContent = "⭐";
    if (headingEl) headingEl.textContent = "¡Bien hecho!";
    if (accEl) {
      accEl.textContent = accuracy + "% de precisión";
      accEl.style.color = "#C9A000";
    }
  } else {
    if (iconEl) iconEl.textContent = "💪";
    if (headingEl) headingEl.textContent = "¡Sigue practicando!";
    if (accEl) {
      accEl.textContent = accuracy + "% de precisión";
      accEl.style.color = "#D95528";
    }
  }

  asShowSub("as-results");
}

// ══════════════════════════════════════════════════════════════
// FLASHCARDS MODULE — Quizlet-style sequential card viewer
// Data: DMV_TERMS (all 100 high-priority terms)
// Functions: fcShowSub, fcInit, renderFlashcard, flipFlashcard,
//            nextFlashcard, prevFlashcard,
//            showFlashcardsCheckpoint, bindFlashcardsControls
// ══════════════════════════════════════════════════════════════

// ─── STATE ────────────────────────────────────────────────────
var FC = {
  deck: [], // full ordered deck (all 100 terms)
  idx: 0, // current card index
  flipped: false, // showing back (Spanish)?
  viewed: 0, // cards navigated away from (for checkpoint)
  lastCheckpoint: 0, // viewed count at last checkpoint
  touchStartX: 0,
  touchStartY: 0,
  touchActive: false,
};

// ─── SUB-SCREEN SWITCHER ──────────────────────────────────────
function fcShowSub(id) {
  document.querySelectorAll(".fc-sub").forEach(function (s) {
    s.classList.remove("active");
  });
  var sub = document.getElementById(id);
  if (sub) sub.classList.add("active");
  var screen = document.getElementById("screen-flashcards");
  if (screen) screen.scrollTop = 0;
}

// ─── INIT A SESSION ───────────────────────────────────────────
function fcInit() {
  FC.deck = DMV_TERMS.slice(); // ordered 1–100
  FC.idx = 0;
  FC.flipped = false;
  FC.viewed = 0;
  FC.lastCheckpoint = 0;
  renderFlashcard();
  fcShowSub("fc-viewer");
}

// ─── RENDER CURRENT CARD ──────────────────────────────────────
function renderFlashcard() {
  var card = FC.deck[FC.idx];
  var total = FC.deck.length;

  // Text content
  var frontEl = document.getElementById("fc-front-term");
  var backEl = document.getElementById("fc-back-term");
  if (frontEl) frontEl.textContent = card.en;
  if (backEl) backEl.textContent = card.es;

  // Counter
  var curEl = document.getElementById("fc-idx-cur");
  var totEl = document.getElementById("fc-idx-tot");
  if (curEl) curEl.textContent = FC.idx + 1;
  if (totEl) totEl.textContent = total;

  // Progress bar
  var bar = document.getElementById("fc-progress-bar");
  if (bar) bar.style.width = ((FC.idx + 1) / total) * 100 + "%";

  // Nav label (category)
  var lbl = document.getElementById("fc-nav-label");
  if (lbl) lbl.textContent = card.category;

  // Ensure card is showing front
  FC.flipped = false;
  var inner = document.getElementById("fc-card-inner");
  if (inner) inner.classList.remove("fc-flipped");

  // Flip hint
  var hint = document.getElementById("fc-flip-hint");
  if (hint) hint.textContent = "tap para voltear";

  // Prev button state
  var prevBtn = document.getElementById("fc-prev-btn");
  if (prevBtn) prevBtn.style.opacity = FC.idx === 0 ? "0.25" : "1";
}

// ─── FLIP CARD ────────────────────────────────────────────────
function flipFlashcard() {
  FC.flipped = !FC.flipped;
  var inner = document.getElementById("fc-card-inner");
  if (inner) {
    if (FC.flipped) {
      inner.classList.add("fc-flipped");
    } else {
      inner.classList.remove("fc-flipped");
    }
  }
  var hint = document.getElementById("fc-flip-hint");
  if (hint)
    hint.textContent = FC.flipped
      ? "tap para ver en inglés"
      : "tap para voltear";
}

// ─── NEXT CARD ────────────────────────────────────────────────
function nextFlashcard() {
  if (FC.idx >= FC.deck.length - 1) return;
  FC.viewed++;
  FC.idx++;
  fcSlideCard("left");
  // Checkpoint every 10 viewed cards
  if (
    FC.viewed > 0 &&
    FC.viewed % 10 === 0 &&
    FC.viewed !== FC.lastCheckpoint
  ) {
    FC.lastCheckpoint = FC.viewed;
    setTimeout(showFlashcardsCheckpoint, 350);
    return;
  }
}

// ─── PREV CARD ────────────────────────────────────────────────
function prevFlashcard() {
  if (FC.idx <= 0) return;
  FC.idx--;
  fcSlideCard("right");
}

// ─── SLIDE ANIMATION ─────────────────────────────────────────
function fcSlideCard(direction) {
  var wrap = document.getElementById("fc-card-wrap");
  if (!wrap) {
    renderFlashcard();
    return;
  }
  var cls = direction === "left" ? "fc-slide-out-left" : "fc-slide-out-right";
  var inCls = direction === "left" ? "fc-slide-in-right" : "fc-slide-in-left";
  wrap.classList.add(cls);
  setTimeout(function () {
    wrap.classList.remove(cls);
    renderFlashcard();
    wrap.classList.add(inCls);
    setTimeout(function () {
      wrap.classList.remove(inCls);
    }, 280);
  }, 180);
}

// ─── CHECKPOINT ───────────────────────────────────────────────
function showFlashcardsCheckpoint() {
  var countEl = document.getElementById("fc-chk-count");
  if (countEl) countEl.textContent = FC.viewed + " tarjetas vistas";
  fcShowSub("fc-checkpoint");
}

// ─── KEYBOARD + SWIPE CONTROLS ───────────────────────────────
function bindFlashcardsControls() {
  // Keyboard: space (flip), arrows (navigate)
  document.addEventListener("keydown", function (e) {
    var screen = document.getElementById("screen-flashcards");
    if (!screen || !screen.classList.contains("active")) return;
    var sub = document.getElementById("fc-viewer");
    if (!sub || !sub.classList.contains("active")) return;

    if (e.key === " " || e.code === "Space") {
      e.preventDefault(); // prevent page scroll
      flipFlashcard();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextFlashcard();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevFlashcard();
    }
  });

  // Touch swipe
  var stage = document.getElementById("fc-viewer");
  if (!stage) return;

  stage.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches.length !== 1) return;
      FC.touchStartX = e.touches[0].clientX;
      FC.touchStartY = e.touches[0].clientY;
      FC.touchActive = true;
    },
    { passive: true },
  );

  stage.addEventListener(
    "touchend",
    function (e) {
      if (!FC.touchActive) return;
      FC.touchActive = false;
      var dx = e.changedTouches[0].clientX - FC.touchStartX;
      var dy = e.changedTouches[0].clientY - FC.touchStartY;
      // Only fire if horizontal swipe dominates and exceeds 50px threshold
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) {
        nextFlashcard(); // swipe left → next
      } else {
        prevFlashcard(); // swipe right → prev
      }
    },
    { passive: true },
  );
}

// ══════════════════════════════════════════════════════════════
// SEÑALES MODULE v2 — DMV-style traffic sign quiz
// State: signsLanguage, snDeck, snQueueIdx,
//        snShuffledAnswers, snAnswered
// Functions: snInit, snShuffle, snBuildDeck, renderSign,
//            handleSignAnswer, toggleSignsLanguage,
//            snShowCheckpoint, snPreloadNext
// ══════════════════════════════════════════════════════════════

// ─── STATE ────────────────────────────────────────────────────
var signsLanguage = "es";
var snDeck = []; // shuffled question order (indices into signsData)
var snQueueIdx = 0; // position inside snDeck
var snShuffledAnswers = []; // [{text, isCorrect}, {text, isCorrect}] for current card
var snAnswered = false;

// ─── DATA — { id, image, correct, incorrect } ─────────────────
var signsData = [
  {
    id: 1,
    image: "assets/signs/yield.png",
    // R1-2 — YIELD (red/white inverted triangle)
    correct: { es: "Ceder el paso", en: "Yield" },
    incorrect: {
      es: "Velocidad mínima requerida",
      en: "Minimum speed required",
    },
  },
  {
    id: 2,
    image: "assets/signs/flagger.png",
    // W20-7 — Flagger (orange diamond, person with flag)
    correct: { es: "Banderero dirigiendo el tráfico", en: "Flagger ahead" },
    incorrect: { es: "Trabajo en la vía", en: "Road work ahead" },
  },
  {
    id: 3,
    image: "assets/signs/no-u-turn.png",
    // R3-4 — No U-Turn (white square, red circle/slash)
    correct: { es: "Prohibido girar en U", en: "No U-turn" },
    incorrect: { es: "Prohibido girar a la izquierda", en: "No left turn" },
  },
  {
    id: 4,
    image: "assets/signs/split-direction.png",
    // R3-5 / Combination arrow — straight + left allowed
    correct: {
      es: "Puede girar a la izquierda o seguir recto",
      en: "Turn left or go straight",
    },
    incorrect: {
      es: "Solo se permite continuar recto",
      en: "Go straight only",
    },
  },
  {
    id: 5,
    image: "assets/signs/photo-enforced.png",
    // Supplemental plaque — Photo Enforced
    correct: {
      es: "Señal reforzada por cámara fotográfica",
      en: "Photo enforced",
    },
    incorrect: { es: "Zona de vigilancia policial", en: "Police patrol zone" },
  },
  {
    id: 6,
    image: "assets/signs/interstate.png",
    // Interstate route marker (blue/red shield)
    correct: { es: "Autopista interestatal", en: "Interstate highway" },
    incorrect: { es: "Ruta de EE. UU.", en: "U.S. route" },
  },
  {
    id: 7,
    image: "assets/signs/route.png",
    // U.S. Route marker (black/white shield)
    correct: { es: "Ruta de EE. UU.", en: "U.S. route" },
    incorrect: { es: "Autopista interestatal", en: "Interstate highway" },
  },
  {
    id: 8,
    image: "assets/signs/_junction.png",
    // Guide sign — Junction
    correct: { es: "Empalme de rutas", en: "Route junction" },
    incorrect: { es: "Desvío obligatorio", en: "Mandatory detour" },
  },
  {
    id: 9,
    image: "assets/signs/u-turn-left.png",
    // W1-15L — 270-Degree Loop / Hairpin Curve (left)
    correct: {
      es: "Curva cerrada en U a la izquierda",
      en: "Hairpin curve left",
    },
    incorrect: { es: "Giro cerrado a la izquierda", en: "Sharp left turn" },
  },
  {
    id: 10,
    image: "assets/signs/curve-guide.png",
    // W1-8 — Chevron Alignment (single large chevron, right)
    correct: { es: "Señal de alineación en curva", en: "Chevron alignment" },
    incorrect: { es: "Giro cerrado a la derecha", en: "Sharp right turn" },
  },
  {
    id: 11,
    image: "assets/signs/side-road-right.png",
    // W1-10R — Combination Curve + Side Road (right)
    correct: {
      es: "Curva con vía lateral a la derecha",
      en: "Curve with side road right",
    },
    incorrect: { es: "Intersección en T", en: "T-intersection" },
  },
  {
    id: 12,
    image: "assets/signs/intersection.png",
    // W2-1 — Cross Road (yellow diamond, plus/cross)
    correct: { es: "Cruce de caminos", en: "Cross road" },
    incorrect: { es: "Glorieta adelante", en: "Roundabout ahead" },
  },
  {
    id: 13,
    image: "assets/signs/y-intersection.png",
    // W2-5 — Y-Intersection (yellow diamond, Y shape)
    correct: { es: "Intersección en Y", en: "Y-intersection" },
    incorrect: { es: "Intersección en T", en: "T-intersection" },
  },
  {
    id: 14,
    image: "assets/signs/railroad-warning.png",
    // W10-1 — Advance Warning (round yellow, RR + X)
    correct: {
      es: "Cruce de ferrocarril adelante",
      en: "Railroad crossing ahead",
    },
    incorrect: { es: "Cruce de ferrocarril", en: "Railroad crossing" },
  },
  {
    id: 15,
    image: "assets/signs/railroad-crossing.png",
    // R15-1 — Crossbuck (white X, RAILROAD CROSSING)
    correct: { es: "Cruce de ferrocarril", en: "Railroad crossing" },
    incorrect: {
      es: "Cruce de ferrocarril adelante",
      en: "Railroad crossing ahead",
    },
  },
  {
    id: 16,
    image: "assets/signs/do-not-pass.png",
    // Light rail / transit — DO NOT PASS sign
    correct: { es: "No pasar", en: "Do not pass" },
    incorrect: { es: "Zona de carga y descarga", en: "Loading zone" },
  },
  {
    id: 17,
    image: "assets/signs/road-work.png",
    // W21-1 — Road Work Ahead (orange diamond, worker with shovel)
    correct: { es: "Trabajo en la vía", en: "Road work ahead" },
    incorrect: { es: "Banderero dirigiendo el tráfico", en: "Flagger ahead" },
  },
  {
    id: 18,
    image: "assets/signs/reverse-curve.png",
    // W1-4R — Reverse Curve (two opposite curves, first right)
    correct: { es: "Curva doble", en: "Reverse curve" },
    incorrect: { es: "Camino sinuoso", en: "Winding road" },
  },
  {
    id: 19,
    image: "assets/signs/sharp-left.png",
    // W1-1L — Turn (sharp 90° left arrow)
    correct: { es: "Giro cerrado a la izquierda", en: "Sharp left turn" },
    incorrect: { es: "Curva a la izquierda", en: "Curve to the left" },
  },
  {
    id: 20,
    image: "assets/signs/right-curve.png",
    // W1-2R — Curve (gentle curved right arrow)
    correct: { es: "Curva a la derecha", en: "Curve to the right" },
    incorrect: { es: "Giro cerrado a la derecha", en: "Sharp right turn" },
  },
  {
    id: 21,
    image: "assets/signs/rigth-arrow.png",
    // W1-6R — One-Direction Large Arrow (rectangle, arrow right)
    correct: {
      es: "Flecha de un sentido a la derecha",
      en: "One-direction large arrow",
    },
    incorrect: { es: "Carril exclusivo derecho", en: "Right lane only" },
  },
  {
    id: 22,
    image: "assets/signs/winding-road.png",
    // W1-5R — Winding Road (S-shape winding arrow)
    correct: { es: "Camino sinuoso", en: "Winding road" },
    incorrect: { es: "Curva doble", en: "Reverse curve" },
  },
  {
    id: 23,
    image: "assets/signs/U-turn-right.png",
    // W1-15R — 270-Degree Loop / Hairpin Curve (right)
    correct: {
      es: "Curva cerrada en U a la derecha",
      en: "Hairpin curve right",
    },
    incorrect: { es: "Giro cerrado a la derecha", en: "Sharp right turn" },
  },
];

// ─── SHUFFLE ──────────────────────────────────────────────────
function snShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
  }
  return a;
}

// Build a shuffled index deck of all signs
function snBuildDeck() {
  var indices = [];
  for (var i = 0; i < signsData.length; i++) indices.push(i);
  return snShuffle(indices);
}

// Shuffle the two answers for a sign; returns [{text, isCorrect}, ...]
function snShuffleAnswers(sign) {
  var lang = signsLanguage;
  var pair = [
    { text: sign.correct[lang], isCorrect: true },
    { text: sign.incorrect[lang], isCorrect: false },
  ];
  return Math.random() < 0.5 ? pair : [pair[1], pair[0]];
}

// ─── INIT ─────────────────────────────────────────────────────
function snInit() {
  signsLanguage = "es";
  snDeck = snBuildDeck();
  snQueueIdx = 0;
  snAnswered = false;

  var instr = document.getElementById("sn-instr");
  if (instr) {
    instr.style.opacity = "1";
    instr.style.transform = "scale(1)";
  }

  var langBtn = document.getElementById("sn-lang-btn");
  if (langBtn) langBtn.textContent = "English";

  snHideCheckpoint();
  renderSign();
}

// ─── RENDER ───────────────────────────────────────────────────
function renderSign() {
  // All done → restart with new shuffle
  if (snQueueIdx >= snDeck.length) {
    snDeck = snBuildDeck();
    snQueueIdx = 0;
    var instr2 = document.getElementById("sn-instr");
    if (instr2) {
      instr2.style.opacity = "1";
      instr2.style.transform = "scale(1)";
    }
  }

  snAnswered = false;
  var sign = signsData[snDeck[snQueueIdx]];
  var total = signsData.length;

  // Shuffle answers; store for answer validation
  snShuffledAnswers = snShuffleAnswers(sign);

  // ── Image with fade-in ──
  var imgEl = document.getElementById("sn-img");
  if (imgEl) {
    imgEl.classList.remove("sn-img-loaded");
    imgEl.src = sign.image;
  }

  // ── Buttons ──
  for (var i = 0; i < 2; i++) {
    var btn = document.getElementById("sn-opt-" + i);
    if (!btn) continue;
    btn.textContent = snShuffledAnswers[i].text;
    btn.className = "sn-opt";
    btn.disabled = false;
  }

  // ── Progress (position within full deck) ──
  var progEl = document.getElementById("sn-prog");
  if (progEl) progEl.textContent = snQueueIdx + 1 + " / " + total;
  var barEl = document.getElementById("sn-prog-bar");
  if (barEl) barEl.style.width = ((snQueueIdx + 1) / total) * 100 + "%";

  snPreloadNext();
}

// ─── IMAGE FADE-IN ────────────────────────────────────────────
// Called via onload on the img element (attached in HTML)
function snImgLoaded() {
  var imgEl = document.getElementById("sn-img");
  if (imgEl) imgEl.classList.add("sn-img-loaded");
}

// ─── PRELOAD ──────────────────────────────────────────────────
function snPreloadNext() {
  var nextIdx = snQueueIdx + 1;
  if (nextIdx >= snDeck.length) nextIdx = 0;
  var preEl = document.getElementById("sn-img-preload");
  if (preEl) preEl.src = signsData[snDeck[nextIdx]].image;
}

// ─── ANSWER HANDLER ───────────────────────────────────────────
function handleSignAnswer(btnIdx) {
  if (snAnswered) return;
  snAnswered = true;

  // Dim instruction block on first interaction
  var instr = document.getElementById("sn-instr");
  if (instr && instr.style.opacity !== "0.45") {
    instr.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    instr.style.opacity = "0.45";
    instr.style.transform = "scale(0.97)";
  }

  // Disable both buttons
  var btn0 = document.getElementById("sn-opt-0");
  var btn1 = document.getElementById("sn-opt-1");
  if (btn0) btn0.disabled = true;
  if (btn1) btn1.disabled = true;

  // Validate by content (isCorrect flag), NOT by position
  var chosen = snShuffledAnswers[btnIdx];
  for (var i = 0; i < 2; i++) {
    var b = document.getElementById("sn-opt-" + i);
    if (!b) continue;
    if (snShuffledAnswers[i].isCorrect) {
      b.classList.add("sn-correct");
    } else if (i === btnIdx && !chosen.isCorrect) {
      b.classList.add("sn-wrong");
    }
  }

  // Advance after 800ms; check for checkpoint at 15
  setTimeout(function () {
    snQueueIdx++;
    if (snQueueIdx > 0 && snQueueIdx % 15 === 0 && snQueueIdx < snDeck.length) {
      snShowCheckpoint();
    } else {
      renderSign();
    }
  }, 800);
}

// ─── CHECKPOINT ───────────────────────────────────────────────
function snShowCheckpoint() {
  var cp = document.getElementById("sn-checkpoint");
  if (cp) cp.classList.add("sn-cp-visible");
}

function snHideCheckpoint() {
  var cp = document.getElementById("sn-checkpoint");
  if (cp) cp.classList.remove("sn-cp-visible");
}

function snContinue() {
  snHideCheckpoint();
  renderSign();
}

// ─── LANGUAGE TOGGLE ──────────────────────────────────────────
function toggleSignsLanguage() {
  signsLanguage = signsLanguage === "es" ? "en" : "es";
  var langBtn = document.getElementById("sn-lang-btn");
  if (langBtn)
    langBtn.textContent = signsLanguage === "es" ? "English" : "Español";
  // Re-shuffle answers in new language; don't advance card
  if (!snAnswered) renderSign();
}
