/* ══════════════════════════════════════════════════════
   ALTOYSIGA — Navigation, Tips & Preguntas Module
   Static export — zero dependencies
   ══════════════════════════════════════════════════════ */
'use strict';

// ─── TIP DATA ─────────────────────────────────────────
var TIPS = [
    {
        en: 'Speed limit',
        es: 'Límite de velocidad'
    },
    {
        en: 'Right of way',
        es: 'Derecho de paso'
    },
    {
        en: 'Yield',
        es: 'Ceder el paso'
    },
    {
        en: 'Merge',
        es: 'Incorporarse al tráfico'
    }, {
        en: 'Pedestrian',
        es: 'Peatón'
    }, {
        en: 'Crosswalk',
        es: 'Cruce peatonal'
    }, {
        en: 'Traffic signal',
        es: 'Señal de tráfico'
    }, {
        en: 'Stop sign',
        es: 'Señal de alto'
    }, {
        en: 'Lane',
        es: 'Carril'
    }, {
        en: 'Blind spot',
        es: 'Punto ciego'
    }, {
        en: 'Turn signal',
        es: 'Señal de giro'
    }, {
        en: 'Rearview mirror',
        es: 'Espejo retrovisor'
    }, {
        en: 'Shoulder',
        es: 'Acotamiento / berma'
    }, {
        en: 'Intersection',
        es: 'Intersección'
    }, {
        en: 'Freeway',
        es: 'Autopista'
    }, {
        en: 'Roundabout',
        es: 'Glorieta / rotonda'
    }, {
        en: 'Parking',
        es: 'Estacionamiento'
    }, {
        en: 'U-turn',
        es: 'Vuelta en U'
    }, {
        en: 'Flashing light',
        es: 'Luz intermitente'
    }, {
        en: 'Railroad crossing',
        es: 'Cruce de ferrocarril'
    },
];

// ─── NAVIGATION ───────────────────────────────────────
function goTo(name) {
    document.querySelectorAll('.screen').forEach(function (s) {
        s.classList.remove('active');
    });
    var target = document.getElementById('screen-' + name);
    if (target) {
        target.classList.add('active');
        target.scrollTop = 0;
    }
}

function bindNavigation() {
    document.addEventListener('click', function (e) {
        var el = e.target.closest('[data-goto]');
        if (! el) 
            return;
        


        var dest = el.getAttribute('data-goto');
        // If navigating to preguntas, show level sub-screen
        if (dest === 'preguntas') {
            pqShowSub('pq-levels');
        }
        // If navigating to asociar, show setup sub-screen
        if (dest === 'asociar') {
            asShowSub('as-setup');
        }
        goTo(dest);
    });
}

// ─── TIP ROTATION ─────────────────────────────────────
var tipIndex = 0;
var tipEnEl,
    tipEsEl;

function rotateTip() {
    if (! tipEnEl || ! tipEsEl) 
        return;
    


    tipIndex = (tipIndex + 1) % TIPS.length;
    var tip = TIPS[tipIndex];
    tipEnEl.style.opacity = '0';
    tipEsEl.style.opacity = '0';
    setTimeout(function () {
        tipEnEl.textContent = tip.en;
        tipEsEl.textContent = tip.es;
        tipEnEl.style.opacity = '1';
        tipEsEl.style.opacity = '1';
    }, 220);
}

function startTipRotation() {
    tipEnEl = document.getElementById('tip-en');
    tipEsEl = document.getElementById('tip-es');
    if (! tipEnEl || ! tipEsEl) 
        return;
    


    var style = document.createElement('style');
    style.textContent = '#tip-en,#tip-es{transition:opacity 0.22s ease;}';
    document.head.appendChild(style);
    setInterval(rotateTip, 4000);
}

var QUESTIONS = [
    {
        id: 1,
        es_n: "¿Qué documento permite manejar a quienes no pueden comprobar estatus legal en los Estados Unidos?",
        es: "¿Qué documento permite manejar a quienes no pueden comprobar estatus legal en los Estados Unidos?",
        en: "What document allows driving for those who cannot prove legal status in the U.S.?",
        kt: "Driving Privilege Card",
        kt_es: "Tarjeta de Privilegio de Manejo",
        tc: "legal status",
        tc_es: "estatus legal",
        ops: [
            "Limited-Term License", "Driving Privilege Card", "Commercial Driver License",
        ],
        ops_en: [
            "Limited-Term License", "Driving Privilege Card", "Commercial Driver License",
        ],
        ok: "Driving Privilege Card",
        ok_en: "Driving Privilege Card"
    },
    {
        id: 2,
        es_n: "¿Cuál es el propósito principal del examen escrito para obtener tu licencia?",
        es: "¿Cuál es el propósito principal del written knowledge test para obtener tu licencia?",
        en: "What is the main purpose of the written knowledge test to get your license?",
        kt: "written knowledge test",
        kt_es: "examen escrito",
        tc: "purpose",
        tc_es: "propósito",
        ops: [
            "Evaluar el vocabulario en inglés del solicitante", "Confirmar que tienes el conocimiento para manejar con seguridad", "Recaudar fondos para el estado de Utah",
        ],
        ops_en: [
            "Evaluate your English vocabulary", "Confirm you have the knowledge to drive safely", "Generate state revenue",
        ],
        ok: "Confirmar que tienes el conocimiento para manejar con seguridad",
        ok_en: "Confirm you have the knowledge to drive safely"
    },
    {
        id: 3,
        es_n: "¿Por cuánto tiempo es válido el permiso de aprendizaje en Utah?",
        es: "¿Por cuánto tiempo es válido el permit en Utah?",
        en: "How long is a beginner permit valid in Utah?",
        kt: "permit",
        kt_es: "permiso de aprendizaje",
        tc: "beginner",
        tc_es: "principiante",
        ops: [
            "12 meses", "18 meses", "24 meses"
        ],
        ops_en: [
            "12 months", "18 months", "24 months"
        ],
        ok: "18 meses",
        ok_en: "18 months"
    },
    {
        id: 4,
        es_n: "¿Cuánto tiempo dura el período obligatorio con permiso en Utah?",
        es: "¿Cuánto tiempo dura el permit holding period obligatorio en Utah?",
        en: "How long is the required permit holding period in Utah?",
        kt: "permit holding period",
        kt_es: "período mínimo con permiso",
        tc: "required",
        tc_es: "obligatorio",
        ops: [
            "3 meses", "6 meses", "12 meses"
        ],
        ops_en: [
            "3 months", "6 months", "12 months"
        ],
        ok: "6 meses",
        ok_en: "6 months"
    }, {
        id: 5,
        es_n: "¿Qué distancia mínima debes mantener al pasar a un ciclista?",
        es: "¿Qué clearance mínimo debes mantener al pasar a un bicyclist?",
        en: "How much clearance must you give when passing a bicyclist?",
        kt: "clearance",
        kt_es: "distancia mínima de seguridad",
        tc: "passing",
        tc_es: "rebasar",
        ops: [
            "1 pie", "3 pies", "5 pies"
        ],
        ops_en: [
            "1 foot", "3 feet", "5 feet"
        ],
        ok: "3 pies",
        ok_en: "3 feet"
    }, {
        id: 6,
        es_n: "Si dañas un vehículo estacionado y el conductor no está presente, ¿qué debes hacer?",
        es: "Si dañas un unattended vehicle y el conductor no está presente, ¿qué debes hacer?",
        en: "If you damage an unattended vehicle and the owner is not present, what must you do?",
        kt: "unattended vehicle",
        kt_es: "vehículo sin conductor",
        tc: "note",
        tc_es: "nota",
        ops: [
            "Puedes irte si el daño es menor", "Debes quedarte o dejar una nota con tu información", "No es necesario hacer nada si no hay testigos",
        ],
        ops_en: [
            "You may leave if damage is minor", "You must stay or leave a note with your information", "No action is required if no one saw it",
        ],
        ok: "Debes quedarte o dejar una nota con tu información",
        ok_en: "You must stay or leave a note with your information"
    }, {
        id: 7,
        es_n: "¿En qué vías no está permitido circular con un scooter de motor asistido cuando el límite de velocidad es mayor de 25 mph?",
        es: "¿En qué vías no está permitido circular con un motor assisted scooter cuando el speed limit es mayor de 25 mph?",
        en: "On what roads is a motor assisted scooter not allowed when the speed limit is over 25 mph?",
        kt: "motor assisted scooter",
        kt_es: "scooter de motor asistido",
        tc: "speed limit",
        tc_es: "límite de velocidad",
        ops: [
            "En calles residenciales con señales de tráfico y semáforos", "En autopistas con speed limit mayor a 25 mph o donde no se permiten patinetas", "En estacionamientos privados o lotes de vehículos comerciales",
        ],
        ops_en: [
            "On residential streets", "On highways with speed limit over 25 mph or where skateboards are not allowed", "On private parking lots",
        ],
        ok: "En autopistas con speed limit mayor a 25 mph o donde no se permiten patinetas",
        ok_en: "On highways with speed limit over 25 mph or where skateboards are not allowed"
    }, {
        id: 8,
        es_n: "¿Está permitido hacer un U-turn en la autopista?",
        es: "¿Está permitido hacer un U-turn en el freeway?",
        en: "Is making a U-turn on the freeway allowed?",
        kt: "U-turn",
        kt_es: "vuelta en U",
        tc: "freeway",
        tc_es: "autopista",
        ops: [
            "Sí, está permitido", "No, está prohibido", "Solo en emergencias"
        ],
        ops_en: [
            "Yes, it is allowed", "No, it is prohibited", "Only in emergencies",
        ],
        ok: "No, está prohibido",
        ok_en: "No, it is prohibited"
    }, {
        id: 9,
        es_n: "Si un conductor consume alcohol o usa drogas antes de conducir, ¿qué funciones se afectan?",
        es: "Si un conductor consume alcohol o usa impairing drugs antes de conducir, ¿qué funciones se afectan?",
        en: "If a driver consumes alcohol or impairing drugs before driving, which functions are affected?",
        kt: "impairing drugs",
        kt_es: "drogas o fármacos que afectan la conducción",
        tc: "judgment",
        tc_es: "juicio",
        ops: [
            "Solo los reflejos físicos del conductor", "Solo la visión y la percepción de colores", "El juicio, la visión y la distinción de colores",
        ],
        ops_en: [
            "Only the driver's physical reflexes", "Only vision and color perception", "Judgment, vision and color distinction",
        ],
        ok: "El juicio, la visión y la distinción de colores",
        ok_en: "Judgment, vision and color distinction"
    }, {
        id: 10,
        es_n: "Si un vehículo lleva bengalas y fusibles, ¿qué está prohibido transportar al mismo tiempo?",
        es: "Si un vehículo lleva flares and fuses, ¿qué está prohibido transportar al mismo tiempo?",
        en: "If a vehicle carries flares and fuses, what is prohibited to transport at the same time?",
        kt: "flares and fuses",
        kt_es: "bengalas y fusibles",
        tc: "flammable",
        tc_es: "inflamable",
        ops: [
            "Agua en recipientes sellados", "Explosivos, líquidos inflamables o gas comprimido", "Herramientas de trabajo no inflamables",
        ],
        ops_en: [
            "Water in sealed containers", "Explosives, flammable liquids or compressed gas", "Non-flammable work tools",
        ],
        ok: "Explosivos, líquidos inflamables o gas comprimido",
        ok_en: "Explosives, flammable liquids or compressed gas"
    }, {
        id: 11,
        es_n: "¿Abandonar el lugar de un accidente con heridos es un delito de tercer grado?",
        es: "¿Abandonar la escena de un crash con heridos es un third-degree felony?",
        en: "Is leaving the scene of a crash with injuries a third-degree felony?",
        kt: "third-degree felony",
        kt_es: "delito de tercer grado",
        tc: "injuries",
        tc_es: "heridos",
        ops: [
            "Sí, es un delito grave", "No, es solo una infracción", "Solo si hay heridos graves",
        ],
        ops_en: [
            "Yes, it is a serious felony", "No, it is just an infraction", "Only if there are serious injuries",
        ],
        ok: "Sí, es un delito grave",
        ok_en: "Yes, it is a serious felony"
    }, {
        id: 12,
        es_n: "¿Se necesita una licencia de manejo para operar equipo agrícola, como un tractor, en la carretera?",
        es: "¿Se necesita licencia de manejo para operar farm machinery, como un tractor, en una carretera pública?",
        en: "Do you need a driver license to operate farm machinery, such as a tractor, on the highway?",
        kt: "farm machinery",
        kt_es: "equipo agrícola",
        tc: "operate",
        tc_es: "operar",
        ops: [
            "Sí, siempre", "No, no se requiere", "Solo si supera 50 mph"
        ],
        ops_en: [
            "Yes, always", "No, it is not required", "Only if it exceeds 50 mph",
        ],
        ok: "No, no se requiere",
        ok_en: "No, it is not required"
    }, {
        id: 13,
        es_n: "Ves un vehículo detenido con luces de emergencia. ¿Qué debes hacer?",
        es: "Ves un vehículo detenido con hazard lights. ¿Qué debes hacer?",
        en: "You see a stopped vehicle with hazard lights on. What should you do?",
        kt: "hazard lights",
        kt_es: "luces de emergencia",
        tc: "stopped vehicle",
        tc_es: "vehículo detenido",
        ops: [
            "Mantener la velocidad y continuar normalmente", "Frenar de golpe para evitar acercarte", "Reducir la velocidad y cambiar de carril si es seguro",
        ],
        ops_en: [
            "Maintain your speed and continue normally", "Brake suddenly to avoid getting closer", "Slow down and move over if it is safe",
        ],
        ok: "Reducir la velocidad y cambiar de carril si es seguro",
        ok_en: "Slow down and move over if it is safe"
    }, {
        id: 14,
        es_n: "Cuando un autobús escolar se detiene con las luces rojas activadas, ¿quién debe detenerse?",
        es: "Cuando un school bus se detiene con red lights activadas, ¿quién debe detenerse?",
        en: "When a school bus stops with its red lights activated, who must stop?",
        kt: "school bus",
        kt_es: "autobús escolar",
        tc: "red lights",
        tc_es: "luces rojas",
        ops: [
            "Solo los vehículos que van detrás del autobús deben detenerse completamente mientras el autobús está recogiendo o dejando estudiantes en la vía", "Todo el tráfico en calles de dos carriles debe detenerse, y en carreteras divididas, el tráfico que circula en el mismo sentido del autobús", "Solo los vehículos en el carril rápido deben detenerse cuando el autobús tenga las luces rojas activadas durante el horario escolar"
        ],
        ops_en: [
            "Only vehicles behind the bus must come to a complete stop while the bus is picking up or dropping off students on the roadway", "All traffic on two-lane roads must stop, and on divided highways, traffic moving in the same direction as the bus must also stop", "Only vehicles in the fast lane must stop when the bus has its red lights activated during school hours"
        ],
        ok: "Todo el tráfico en calles de dos carriles debe detenerse, y en carreteras divididas, el tráfico que circula en el mismo sentido del autobús",
        ok_en: "All traffic on two-lane roads must stop, and on divided highways, traffic moving in the same direction as the bus must also stop"
    }, {
        id: 15,
        es_n: "Antes de salir en un road trip largo, ¿cuál es la práctica más recomendada para garantizar tu seguridad?",
        es: "Antes de salir en un road trip largo, ¿qué debes evitar, como consumir alcohol, para manejar con seguridad?",
        en: "What is the best preparation before a long road trip?",
        kt: "road trip",
        kt_es: "viaje largo en carretera",
        tc: "alcohol",
        tc_es: "alcohol",
        ops: [
            "Solo llenar el tanque de gasolina justo antes de partir", "Dormir bien, planear paradas cada 2 horas y no tomar alcohol", "Salir de madrugada para evitar el tráfico de las horas pico",
        ],
        ops_en: [
            "Just fill the tank", "Sleep well, plan stops every 2 hours and avoid alcohol", "Leave early morning to avoid traffic",
        ],
        ok: "Dormir bien, planear paradas cada 2 horas y no tomar alcohol",
        ok_en: "Sleep well, plan stops every 2 hours and avoid alcohol"
    }, {
        id: 16,
        es_n: "Si las autoridades tienen dudas sobre tu capacidad para conducir con seguridad, ¿pueden exigirte un examen de revisión?",
        es: "Si las autoridades tienen dudas sobre tu capacidad para conducir con seguridad, ¿pueden exigirte un review examination?",
        en: "If the state has concerns about your ability to drive safely, can they require you to take a review examination?",
        kt: "review examination",
        kt_es: "examen de revisión de manejo",
        tc: "require",
        tc_es: "exigir",
        ops: [
            "No, nunca", "Sí, en ciertos casos", "Solo a conductores mayores de 70 años"
        ],
        ops_en: [
            "No, never", "Yes, in certain cases", "Only for drivers over 70",
        ],
        ok: "Sí, en ciertos casos",
        ok_en: "Yes, in certain cases"
    }, {
        id: 17,
        es_n: "Si un proveedor de salud considera que una condición médica afecta tu capacidad para conducir, ¿puede recomendar restricciones en tu licencia?",
        es: "Si un healthcare provider considera que una condición médica afecta tu capacidad para conducir, ¿puede recomendar restricciones en tu licencia?",
        en: "If a healthcare provider believes a medical condition affects your ability to drive, can they recommend restrictions on your license?",
        kt: "healthcare provider",
        kt_es: "proveedor de salud",
        tc: "medical condition",
        tc_es: "condición médica",
        ops: [
            "No, solo el DMV puede", "Sí, puede recomendarlas", "Solo si el conductor lo solicita",
        ],
        ops_en: [
            "No, only the DMV can", "Yes, they can recommend them", "Only if the driver requests it",
        ],
        ok: "Sí, puede recomendarlas",
        ok_en: "Yes, they can recommend them"
    }, {
        id: 18,
        es_n: "Si un peatón cruza la calle en una zona sin cruce peatonal marcado, ¿debes ceder el paso?",
        es: "Si un peatón cruza la calle en una zona sin un crosswalk marcado, ¿debes ceder el paso?",
        en: "If a pedestrian crosses the street in an area without a marked crosswalk, must you yield?",
        kt: "yield",
        kt_es: "ceder el paso",
        tc: "crosswalk",
        tc_es: "cruce peatonal",
        ops: [
            "No, solo en cruces marcados", "Sí, siempre", "Solo de noche"
        ],
        ops_en: [
            "No, only at marked crosswalks", "Yes, always", "Only at night"
        ],
        ok: "Sí, siempre",
        ok_en: "Yes, always"
    }, {
        id: 19,
        es_n: "Si te niegas a una prueba química, ¿qué le ocurre a tu licencia?",
        es: "Si te niegas a un chemical testing, ¿qué le ocurre a tu licencia?",
        en: "If you refuse chemical testing, what happens to your license?",
        kt: "chemical testing",
        kt_es: "prueba química",
        tc: "refuse",
        tc_es: "negarse",
        ops: [
            "Se suspende por 30 días", "Se revoca", "No tiene consecuencias",
        ],
        ops_en: [
            "It is suspended for 30 days", "It is revoked", "There are no consequences",
        ],
        ok: "Se revoca",
        ok_en: "It is revoked"
    }, {
        id: 20,
        es_n: "¿Qué es un punto ciego?",
        es: "¿What is un blind spot?",
        en: "What is a blind spot?",
        kt: "blind spot",
        kt_es: "punto ciego",
        tc: "what",
        tc_es: "qué",
        ops: [
            "Zona donde el conductor no puede verte", "Área de alto riesgo en carretera", "Zona restringida para peatones",
        ],
        ops_en: [
            "An area where the driver cannot see you", "A high-risk road area", "A restricted pedestrian zone",
        ],
        ok: "Zona donde el conductor no puede verte",
        ok_en: "An area where the driver cannot see you"
    }, {
        id: 21,
        es_n: "¿Qué forma tienen los warning signs en Utah?",
        es: "¿Qué shape tienen los warning signs en Utah?",
        en: "What shape are warning signs in Utah?",
        kt: "warning signs",
        kt_es: "señales de advertencia",
        tc: "shape",
        tc_es: "forma",
        ops: [
            "Tienen forma cuadrada y color verde, y se utilizan principalmente para indicar direcciones o rutas permitidas en la carretera", "Tienen forma de rombo y color amarillo con letras negras, y se utilizan para advertir sobre condiciones o peligros en la vía", "Tienen forma rectangular y color blanco, y se utilizan para mostrar información regulatoria o instrucciones de tránsito"
        ],
        ops_en: [
            "They are square and green in color, and are mainly used to indicate directions or permitted routes on the roadway", "They are diamond-shaped and yellow with black letters, and are used to warn about conditions or hazards on the road", "They are rectangular and white, and are used to display regulatory information or traffic instructions"
        ],
        ok: "Tienen forma de rombo y color amarillo con letras negras, y se utilizan para advertir sobre condiciones o peligros en la vía",
        ok_en: "They are diamond-shaped and yellow with black letters, and are used to warn about conditions or hazards on the road"
    }, {
        id: 22,
        es_n: "¿Qué indica un regulatory sign con círculo rojo y diagonal?",
        es: "¿Qué indica un regulatory sign con red circle y diagonal?",
        en: "What does a regulatory sign with a red circle and slash indicate?",
        kt: "regulatory sign",
        kt_es: "señal de reglamentación",
        tc: "red circle",
        tc_es: "círculo rojo",
        ops: [
            "Indica precaución ante un posible peligro en la vía, como condiciones inesperadas o cambios en el camino", "Indica que está prohibido realizar esa acción específica mostrada en la señal bajo cualquier circunstancia", "Indica una zona de trabajo activa donde pueden presentarse trabajadores, maquinaria o cambios en el tráfico"
        ],
        ops_en: [
            "It indicates caution due to a possible hazard on the road, such as unexpected conditions or changes ahead", "It indicates that the specific action shown on the sign is prohibited under all circumstances", "It indicates an active work zone where workers, equipment, or traffic changes may be present"
        ],
        ok: "Indica que está prohibido realizar esa acción específica mostrada en la señal bajo cualquier circunstancia",
        ok_en: "It indicates that the specific action shown on the sign is prohibited under all circumstances"
    }, {
        id: 23,
        es_n: "¿Qué indican las señales de guía sobre servicios?",
        es: "¿Qué indican los guide signs sobre services?",
        en: "What do guide signs indicate about services?",
        kt: "guide signs",
        kt_es: "señales de guía",
        tc: "services",
        tc_es: "servicios",
        ops: [
            "Indican peligros específicos en la vía, como curvas cerradas, intersecciones o cambios inesperados en las condiciones del camino", "Indican rutas, direcciones y servicios disponibles para los conductores, usando señales de color verde, café o azul", "Indican zonas de trabajo activas en la carretera, incluyendo la presencia de trabajadores y cambios temporales en el tráfico"
        ],
        ops_en: [
            "They indicate specific hazards on the road, such as sharp curves, intersections, or unexpected changes in road conditions", "They indicate routes, directions, and available services for drivers, using signs in green, brown, or blue", "They indicate active work zones on the roadway, including the presence of workers and temporary traffic changes"
        ],
        ok: "Indican rutas, direcciones y servicios disponibles para los conductores, usando señales de color verde, café o azul",
        ok_en: "They indicate routes, directions, and available services for drivers, using signs in green, brown, or blue"
    }, {
        id: 24,
        es_n: "¿Qué indican las señales de zona de trabajo cuando dicen que hay trabajadores adelante?",
        es: "¿Qué indican los work zone signs cuando dicen workers ahead?",
        en: "What do work zone signs indicate when they say workers ahead?",
        kt: "work zone signs",
        kt_es: "señales de zona de trabajo",
        tc: "workers ahead",
        tc_es: "trabajadores adelante",
        ops: [
            "Indican advertencias generales de tránsito, como curvas, intersecciones o cambios en las condiciones de la carretera", "Indican la presencia de trabajadores adelante y posibles desvíos o cambios en el tráfico dentro de una zona de trabajo", "Indican direcciones obligatorias de circulación mediante flechas y señales de color rojo con fondo blanco"
        ],
        ops_en: [
            "They indicate general traffic warnings, such as curves, intersections, or changes in road conditions", "They indicate the presence of workers ahead and possible detours or traffic changes within a work zone", "They indicate required directions of travel using arrows and red and white regulatory signs"
        ],
        ok: "Indican la presencia de trabajadores adelante y posibles desvíos o cambios en el tráfico dentro de una zona de trabajo",
        ok_en: "They indicate the presence of workers ahead and possible detours or traffic changes within a work zone"
    }, {
        id: 25,
        es_n: "Si hay un banderero dirigiendo el tráfico en una zona de trabajo, ¿qué debes hacer?",
        es: "Si hay un flagger dirigiendo el tráfico en una work zone, ¿qué debes hacer?",
        en: "If a flagger is directing traffic in a work zone, what must you do?",
        kt: "flagger",
        kt_es: "banderero",
        tc: "work zone",
        tc_es: "zona de trabajo",
        ops: [
            "Continuar a velocidad normal sin cambiar tu forma de manejar dentro de la zona de trabajo", "Seguir las instrucciones del flagger aunque otras señales o luces indiquen algo diferente en ese momento", "Ignorarlo si el semáforo indica verde y no ves trabajadores cerca del área de construcción"
        ],
        ops_en: [
            "Continue at normal speed without changing the way you drive through the work zone", "Follow the flagger's directions even if other signs or lights seem to indicate something different at that moment", "Ignore them if the traffic light shows green and you do not see workers near the construction area"
        ],
        ok: "Seguir las instrucciones del flagger aunque otras señales o luces indiquen algo diferente en ese momento",
        ok_en: "Follow the flagger's directions even if other signs or lights seem to indicate something different at that moment"
    }, {
        id: 26,
        es_n: "¿Qué pasa con la multa por exceso de velocidad en una zona de construcción en Utah?",
        es: "¿Qué pasa con el speeding fine en una work zone en Utah?",
        en: "What happens to fines for speeding in a work zone in Utah?",
        kt: "speeding fine",
        kt_es: "multa por exceso de velocidad",
        tc: "work zone",
        tc_es: "zona de construcción",
        ops: [
            "Se reduce a la mitad en una zona de construcción en Utah", "Se duplican en una zona de construcción en Utah", "Son iguales que en cualquier otra zona en Utah"
        ],
        ops_en: [
            "They are reduced by half in a work zone in Utah", "They are doubled in a work zone in Utah", "They are the same as in any other zone in Utah"
        ],
        ok: "Se duplican en una zona de construcción en Utah",
        ok_en: "They are doubled in a work zone in Utah"
    }, {
        id: 27,
        es_n: "¿Qué significa que una marca de pavimento amarilla entre carriles sea continua?",
        es: "¿Qué significa que una yellow pavement marking entre carriles sea solid?",
        en: "What does it mean when a yellow pavement marking between lanes is solid?",
        kt: "yellow pavement marking",
        kt_es: "marca de pavimento amarilla",
        tc: "solid",
        tc_es: "continua",
        ops: [
            "Permite adelantar si hay suficiente visibilidad y espacio en ambos sentidos de la vía", "Indica una zona de no rebase, donde no debes cruzar la línea para adelantar a otro vehículo", "Permite adelantar solo si el vehículo delante va a baja velocidad en ese carril"
        ],
        ops_en: [
            "It allows passing if there is enough visibility and space in both directions", "It indicates a no-passing zone where you must not cross the line to overtake another vehicle", "It allows passing only if the vehicle ahead is moving slowly in that lane"
        ],
        ok: "Indica una zona de no rebase, donde no debes cruzar la línea para adelantar a otro vehículo",
        ok_en: "It indicates a no-passing zone where you must not cross the line to overtake another vehicle"
    }, {
        id: 28,
        es_n: "Una marca de pavimento blanca continua que separa un carril compartido indica:",
        es: "Una white pavement marking continua que separa un carpool lane indica:",
        en: "A solid white pavement marking separating a carpool lane indicates:",
        kt: "white pavement marking",
        kt_es: "marca de pavimento blanca",
        tc: "carpool lane",
        tc_es: "carril compartido",
        ops: [
            "Puedes cruzarla si no hay tráfico", "El carril va en dirección contraria", "No debes cruzarla"
        ],
        ops_en: [
            "You may cross if there is no traffic", "The lane goes in the opposite direction", "You must not cross it"
        ],
        ok: "No debes cruzarla",
        ok_en: "You must not cross it"
    }, {
        id: 29,
        es_n: "En una intersección donde los semáforos no funcionan, debes:",
        es: "En una intersection donde los traffic lights no funcionan, debes:",
        en: "At an intersection where traffic lights are not working, you must:",
        kt: "traffic lights",
        kt_es: "semáforos",
        tc: "intersection",
        tc_es: "intersección",
        ops: [
            "Continuar sin detenerte porque tienes el derecho de vía", "Detenerte completamente y ceder el paso", "Reducir la velocidad sin detenerte"
        ],
        ops_en: [
            "Continue without stopping because you have the right of way", "Come to a complete stop and yield", "Slow down without stopping"
        ],
        ok: "Detenerte completamente y ceder el paso",
        ok_en: "Come to a complete stop and yield"
    }, {
        id: 30,
        es_n: "¿Cuándo debes obedecer a un oficial de policía aunque el semáforo esté en verde?",
        es: "¿Cuándo debes obedecer a un police officer aunque el semáforo esté en green?",
        en: "When must you obey a police officer even if the traffic light is green?",
        kt: "police officer",
        kt_es: "oficial de policía",
        tc: "green",
        tc_es: "verde",
        ops: [
            "Solo si el oficial muestra una señal de alto visible", "Siempre — las instrucciones del oficial tienen prioridad", "Solo durante la noche o en emergencias"
        ],
        ops_en: [
            "Only if the officer shows a stop sign", "Always — the officer’s instructions take priority", "Only at night or in emergencies"
        ],
        ok: "Siempre — las instrucciones del oficial tienen prioridad",
        ok_en: "Always — the officer’s instructions take priority"
    }, {
        id: 31,
        es_n: "Una flecha verde sobre un carril flexible indica:",
        es: "Una green arrow sobre un flex lane indica:",
        en: "A green arrow above a flex lane indicates:",
        kt: "green arrow",
        kt_es: "flecha verde",
        tc: "flex lane",
        tc_es: "carril flexible",
        ops: [
            "El carril está cerrado", "El carril puede usarse", "Debes reducir la velocidad"
        ],
        ops_en: [
            "The lane is closed", "The lane can be used", "You must slow down"
        ],
        ok: "El carril puede usarse",
        ok_en: "The lane can be used"
    }, {
        id: 32,
        es_n: "Una X roja sobre un carril flexible indica:",
        es: "Una red X sobre un flex lane indica:",
        en: "A red X above a flex lane indicates:",
        kt: "red X",
        kt_es: "X roja",
        tc: "flex lane",
        tc_es: "carril flexible",
        ops: [
            "Puedes usar el carril con precaución", "No puedes usar ese carril", "Es solo para emergencias"
        ],
        ops_en: [
            "You may use the lane with caution", "You cannot use that lane", "It is for emergencies only"
        ],
        ok: "No puedes usar ese carril",
        ok_en: "You cannot use that lane"
    }, {
        id: 33,
        es_n: "En una zona escolar, el límite de velocidad es:",
        es: "En una school zone, el speed limit es:",
        en: "In a school zone, the speed limit is:",
        kt: "speed limit",
        kt_es: "límite de velocidad",
        tc: "school zone",
        tc_es: "zona escolar",
        ops: [
            "15 mph", "20 mph", "25 mph"
        ],
        ops_en: [
            "15 mph", "20 mph", "25 mph"
        ],
        ok: "20 mph",
        ok_en: "20 mph"
    }, {
        id: 34,
        es_n: "En un área residencial en Utah, el límite de velocidad es:",
        es: "En un residential area en Utah, el speed limit es:",
        en: "In a residential area in Utah, the speed limit is:",
        kt: "speed limit",
        kt_es: "límite de velocidad",
        tc: "residential area",
        tc_es: "área residencial",
        ops: [
            "20 mph", "25 mph", "35 mph"
        ],
        ops_en: [
            "20 mph", "25 mph", "35 mph"
        ],
        ok: "25 mph",
        ok_en: "25 mph"
    }, {
        id: 35,
        es_n: "En una carretera principal en Utah, el límite de velocidad es:",
        es: "En un major highway en Utah, el speed limit es:",
        en: "On a major highway in Utah, the speed limit is:",
        kt: "speed limit",
        kt_es: "límite de velocidad",
        tc: "major highway",
        tc_es: "carretera principal",
        ops: [
            "45 mph", "55 mph", "65 mph"
        ],
        ops_en: [
            "45 mph", "55 mph", "65 mph"
        ],
        ok: "55 mph",
        ok_en: "55 mph"
    }, {
        id: 36,
        es_n: "Un medidor de rampa en una entrada a autopista indica:",
        es: "Un ramp meter en una freeway on-ramp indica:",
        en: "A ramp meter on a freeway on-ramp indicates:",
        kt: "ramp meter",
        kt_es: "medidor de rampa",
        tc: "freeway on-ramp",
        tc_es: "entrada a la autopista",
        ops: [
            "Una señal de velocidad máxima", "Un semáforo que controla el acceso", "Un carril para emergencias"
        ],
        ops_en: [
            "A speed limit sign", "A signal that controls entry", "A lane for emergencies"
        ],
        ok: "Un semáforo que controla el acceso",
        ok_en: "A signal that controls entry"
    }, {
        id: 37,
        es_n: "Un medidor de rampa con luz verde permite pasar:",
        es: "Un ramp meter con green light permite pasar:",
        en: "A ramp meter with a green light allows:",
        kt: "ramp meter",
        kt_es: "medidor de rampa",
        tc: "green light",
        tc_es: "luz verde",
        ops: [
            "Dos vehículos", "Un vehículo", "Tres o más vehículos"
        ],
        ops_en: [
            "Two vehicles", "One vehicle", "Three or more vehicles"
        ],
        ok: "Un vehículo",
        ok_en: "One vehicle"
    }, {
        id: 38,
        es_n: "En un paso peatonal, debes ceder el paso:",
        es: "En una crosswalk, debes ceder el paso a pedestrians:",
        en: "At a crosswalk, you must yield to pedestrians:",
        kt: "crosswalk",
        kt_es: "paso peatonal",
        tc: "pedestrians",
        tc_es: "peatones",
        ops: [
            "Solo si está marcado", "Siempre que un peatón esté presente", "Solo con señal de alto"
        ],
        ops_en: [
            "Only if marked", "Whenever a pedestrian is present", "Only with a stop sign"
        ],
        ok: "Siempre que un peatón esté presente",
        ok_en: "Whenever a pedestrian is present"
    }, {
        id: 39,
        es_n: "La ley básica de velocidad establece:",
        es: "La basic speed law establece:",
        en: "The basic speed law states:",
        kt: "basic speed law",
        kt_es: "ley básica de velocidad",
        tc: "reasonably safe",
        tc_es: "razonablemente seguro",
        ops: [
            "Puedes manejar al límite", "No debes manejar más rápido de lo seguro", "La velocidad mínima es 45 mph"
        ],
        ops_en: [
            "You may drive at the limit", "You must not drive faster than safe", "Minimum speed is 45 mph"
        ],
        ok: "No debes manejar más rápido de lo seguro",
        ok_en: "You must not drive faster than safe"
    }, {
        id: 40,
        es_n: "Las señales de cruce de ferrocarril tienen forma:",
        es: "Los railroad crossing signs tienen forma round yellow:",
        en: "Railroad crossing signs are:",
        kt: "railroad crossing signs",
        kt_es: "señales de cruce de ferrocarril",
        tc: "round yellow",
        tc_es: "redondo amarillo",
        ops: [
            "Rombos amarillos", "Redondos amarillos con X y RR", "Rectángulos blancos"
        ],
        ops_en: [
            "Yellow diamonds", "Round yellow with X and RR", "White rectangles"
        ],
        ok: "Redondos amarillos con X y RR",
        ok_en: "Round yellow with X and RR"

    }, {
        "id": 41,
        "es_n": "¿Qué señal te indica que hay un railroad crossing y debes detenerte?",
        "es": "¿Qué señal indica que hay un railroad crossing y debes stop?",
        "en": "What sign indicates a train is coming and you must stop?",
        "kt": "railroad crossing",
        "kt_es": "cruce de ferrocarril",
        "tc": "stop",
        "tc_es": "detenerse",
        "ops": [
            "Un signo de rendimiento triangular", "Una X blanca con letras 'Railroad Crossing'", "Una señal cuadrada verde"
        ],
        "ops_en": [
            "A triangular yield sign", "A white X-shaped sign with 'Railroad Crossing'", "A square green sign"
        ],
        "ok": "Una X blanca con letras 'Railroad Crossing'",
        "ok_en": "A white X-shaped sign with 'Railroad Crossing'"
    }, {
        "id": 42,
        "es_n": "Al cruzar railroad tracks, ¿dónde debes esperar si hay un semáforo en rojo adelante?",
        "es": "Al cruzar railroad tracks con un traffic signal en rojo, ¿debes esperar antes de la stop line?",
        "en": "When crossing railroad tracks, where should you wait if there is a red signal ahead?",
        "kt": "railroad tracks",
        "kt_es": "vías de ferrocarril",
        "tc": "stop line",
        "tc_es": "línea de parada",
        "ops": [
            "En el centro de las vías del tren", "Antes de las vías, en la stop line", "Después de cruzar completamente las vías"
        ],
        "ops_en": [
            "In the center of the tracks", "Before the tracks, at the stop line", "After the tracks"
        ],
        "ok": "Antes de las vías, en la stop line",
        "ok_en": "Before the tracks, at the stop line"
    }, {
        "id": 43,
        "es_n": "Cuando llegas a una intersección de flujo continuo y vas a girar a la izquierda, ¿qué debes hacer?",
        "es": "Cuando llegas a una continuous flow intersection y vas a hacer un left turn, ¿qué debes hacer?",
        "en": "When you reach a continuous flow intersection and need to make a left turn, what should you do?",
        "kt": "continuous flow intersection",
        "kt_es": "intersección de flujo continuo",
        "tc": "left turn",
        "tc_es": "giro a la izquierda",
        "ops": [
            "Girar directamente desde el carril izquierdo sin señal adicional", "Observar la primera señal y cruzar los carriles contrarios, luego obedecer la segunda señal", "Esperar siempre una flecha verde específica antes de iniciar el giro"
        ],
        "ops_en": [
            "Turn directly from the left lane", "Observe the first signal and cross oncoming lanes, then obey the second signal", "Always wait for a green arrow before turning"
        ],
        "ok": "Observar la primera señal y cruzar los carriles contrarios, luego obedecer la segunda señal",
        "ok_en": "Observe the first signal and cross oncoming lanes, then obey the second signal"
    }, {
        "id": 44,
        "es_n": "Si llegas a una luz roja y quieres girar a la derecha, ¿cuándo está permitido hacerlo?",
        "es": "Si llegas a un red light y quieres hacer un right turn, ¿cuándo está permitido hacerlo?",
        "en": "If you reach a red light and want to make a right turn, when is it allowed?",
        "kt": "right turn",
        "kt_es": "giro a la derecha",
        "tc": "red light",
        "tc_es": "luz roja",
        "ops": [
            "Nunca — está prohibido en cualquier condición", "Después de detenerse completamente y ceder el paso al tráfico", "Solo entre las 10 PM y las 6 AM en días laborables"
        ],
        "ops_en": [
            "It is never permitted", "After coming to a complete stop and yielding to traffic", "Only between 10 PM and 6 AM"
        ],
        "ok": "Después de detenerse completamente y ceder el paso al tráfico",
        "ok_en": "After coming to a complete stop and yielding to traffic"
    }, {
        "id": 45,
        "es_n": "¿Cuánto safe gap debes dejar al detenerte detrás de otro vehículo?",
        "es": "¿Qué safe gap debes mantener al detenerte en una intersection detrás de otro vehículo?",
        "en": "When stopping at an intersection behind another vehicle, how much gap should you maintain?",
        "kt": "safe gap",
        "kt_es": "espacio de seguridad",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Solo tocando el parachoques del otro vehículo", "Debes ver los neumáticos traseros del vehículo delante de ti", "Al menos 3 car lengths de distancia"
        ],
        "ops_en": [
            "Just touching the other vehicle's bumper", "You should be able to see the vehicle's rear tires ahead", "At least 3 car lengths away"
        ],
        "ok": "Debes ver los neumáticos traseros del vehículo delante de ti",
        "ok_en": "You should be able to see the vehicle's rear tires ahead"
    }, {
        "id": 46,
        "es_n": "¿En qué dirección marcan tráfico las yellow lane markings?",
        "es": "¿Qué marcan las yellow lane markings en un two-direction roadway?",
        "en": "What traffic direction do yellow lane markings indicate?",
        "kt": "yellow lane markings",
        "kt_es": "marcas de carril amarillas",
        "tc": "two-direction roadway",
        "tc_es": "vía de dos direcciones",
        "ops": [
            "Vehículos viajando en una dirección", "Carriles expresos y de carpool", "Vehículos viajando en direcciones opuestas"
        ],
        "ops_en": [
            "Vehicles traveling in one direction", "Express and carpool lanes", "Vehicles traveling in opposite directions"
        ],
        "ok": "Vehículos viajando en direcciones opuestas",
        "ok_en": "Vehicles traveling in opposite directions"
    }, {
        "id": 47,
        "es_n": "¿Qué indican las white lane markings en la carretera?",
        "es": "Cuando ves white lane markings en un one-direction roadway, ¿en qué dirección viajan los vehículos?",
        "en": "What do white lane markings on the road indicate?",
        "kt": "white lane markings",
        "kt_es": "marcas de carril blancas",
        "tc": "one-direction roadway",
        "tc_es": "vía de una sola dirección",
        "ops": [
            "Vehículos en direcciones opuestas", "Vehículos viajando en la misma dirección", "Zonas de no rebase permanente"
        ],
        "ops_en": [
            "Vehicles in opposite directions", "Vehicles traveling in the same direction", "Permanent no-passing zones"
        ],
        "ok": "Vehículos viajando en la misma dirección",
        "ok_en": "Vehicles traveling in the same direction"
    }, {
        "id": 48,
        "es_n": "¿Qué está prohibido hacer durante un lane change al cruzar una intersección?",
        "es": "¿Está prohibido hacer un lane change mientras cruzas una intersection?",
        "en": "What action is prohibited while driving through an intersection?",
        "kt": "lane change",
        "kt_es": "cambio de carril",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Reducir la velocidad", "Cambiar de carril", "Revisar el espejo retrovisor"
        ],
        "ops_en": [
            "Reducing speed", "Changing lanes", "Checking the rearview mirror"
        ],
        "ok": "Cambiar de carril",
        "ok_en": "Changing lanes"
    }, {
        "id": 49,
        "es_n": "Cuando manejas en una intersección diamante divergente, ¿qué ocurre con la dirección del tráfico sobre el puente?",
        "es": "Cuando manejas en un diverging diamond interchange, ¿qué ocurre con la dirección del tráfico sobre el puente?",
        "en": "When you drive through a diverging diamond interchange, what happens to the traffic direction on the bridge?",
        "kt": "diverging diamond interchange",
        "kt_es": "intersección diamante divergente",
        "tc": "traffic direction",
        "tc_es": "dirección del tráfico",
        "ops": [
            "Una autopista diseñada con cuatro carriles paralelos de alta velocidad", "Un tipo de intercambio donde el tráfico cruza al lado opuesto de la carretera sobre el puente", "Una intersección con acceso exclusivo para vehículos comerciales y de carga"
        ],
        "ops_en": [
            "A highway with four parallel lanes", "A type of interchange where traffic crosses to the opposite side of the road over the bridge", "An intersection only for commercial vehicles"
        ],
        "ok": "Un tipo de intercambio donde el tráfico cruza al lado opuesto de la carretera sobre el puente",
        "ok_en": "A type of interchange where traffic crosses to the opposite side of the road over the bridge"
    }, {
        "id": 50,
        "es_n": "En un shared center left turn lane, ¿cuánto antes puedes entrar para girar?",
        "es": "¿En un shared center left turn lane, puedes entrar hasta 500 feet antes de girar?",
        "en": "In a shared center left turn lane, how far before the turn may you enter the lane?",
        "kt": "shared center left turn lane",
        "kt_es": "carril compartido de giro a la izquierda",
        "tc": "500 feet",
        "tc_es": "500 pies",
        "ops": [
            "1,000 pies", "500 pies como máximo", "Solo cuando llegues a la intersección"
        ],
        "ops_en": [
            "1,000 feet", "500 feet maximum", "Only when you reach the intersection"
        ],
        "ok": "500 pies como máximo",
        "ok_en": "500 feet maximum"
    }, {
        "id": 51,
        "es_n": "¿Qué debes verificar al acercarte a una green light?",
        "es": "¿Qué debes verificar al acercarte a una green light en una intersection?",
        "en": "What should you check when approaching a green light at an intersection?",
        "kt": "green light",
        "kt_es": "luz verde",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Acelerar para mantener el flujo del tráfico", "Verificar que tu camino esté libre y no haya tráfico cruzado", "Tocar el claxon para alertar a los demás conductores"
        ],
        "ops_en": [
            "Accelerate so you don't stop traffic", "Make sure your path is clear and there is no cross traffic", "Honk to alert others"
        ],
        "ok": "Verificar que tu camino esté libre y no haya tráfico cruzado",
        "ok_en": "Make sure your path is clear and there is no cross traffic"
    }, {
        "id": 52,
        "es_n": "Si ves una flecha roja para girar a la izquierda, ¿qué significa?",
        "es": "Si ves una red arrow light para left turn, ¿qué significa?",
        "en": "If you see a red arrow light for a left turn, what does it mean?",
        "kt": "red arrow light",
        "kt_es": "flecha roja",
        "tc": "left turn",
        "tc_es": "giro a la izquierda",
        "ops": [
            "Puedes girar con precaución si no hay tráfico", "Los giros a la izquierda están prohibidos hasta que la señal cambie", "Solo los conductores de motocicletas pueden girar"
        ],
        "ops_en": [
            "You can turn with caution", "Left turns are prohibited until the signal changes", "Only motorcycles may turn"
        ],
        "ok": "Los giros a la izquierda están prohibidos hasta que la señal cambie",
        "ok_en": "Left turns are prohibited until the signal changes"
    }, {
        "id": 53,
        "es_n": "Si una flecha roja no cambia y estás en una calle de un solo sentido, ¿cuándo puedes girar a la izquierda?",
        "es": "Si una red arrow light no cambia y estás en una one-way street, ¿cuándo puedes girar a la izquierda?",
        "en": "If a red arrow light does not change and you are on a one-way street, when may you turn left?",
        "kt": "red arrow light",
        "kt_es": "flecha roja",
        "tc": "one-way street",
        "tc_es": "calle de un solo sentido",
        "ops": [
            "Nunca — debes esperar a que el red arrow light cambie de color antes de girar", "Si es seguro, puedes girar a la izquierda desde una calle de un sentido a otra calle de un sentido", "Solo después de esperar tres minutos completos frente a la señal que no cambia"
        ],
        "ops_en": [
            "Never, you must always wait", "If safe, you may turn left from a one-way street onto a one-way street", "After waiting 3 minutes"
        ],
        "ok": "Si es seguro, puedes girar a la izquierda desde una calle de un sentido a otra calle de un sentido",
        "ok_en": "If safe, you may turn left from a one-way street onto a one-way street"
    }, {
        "id": 54,
        "es_n": "¿A qué velocidad mínima pueden viajar vehículos en las rural interstate highways de Utah?",
        "es": "¿Cuál es el speed limit máximo en rural interstate highways de Utah?",
        "en": "What are the maximum speed limits on rural interstate highways in Utah?",
        "kt": "rural interstate highway",
        "kt_es": "autopista interestatal rural",
        "tc": "speed limit",
        "tc_es": "límite de velocidad",
        "ops": [
            "Entre 55 y 65 mph en todas las secciones", "65, 70, 75 u 80 mph dependiendo de la sección", "70 mph uniforme en todo el estado de Utah"
        ],
        "ops_en": [
            "55 to 65 mph", "65, 70, 75, or 80 mph depending on the section", "70 mph uniform throughout Utah"
        ],
        "ok": "65, 70, 75 u 80 mph dependiendo de la sección",
        "ok_en": "65, 70, 75, or 80 mph depending on the section"
    }, {
        "id": 55,
        "es_n": "¿Qué indica la forma de una señal de número de ruta?",
        "es": "¿Qué indica la forma de los route number signs?",
        "en": "What does the shape of route number signs indicate?",
        "kt": "route number signs",
        "kt_es": "señales de número de ruta",
        "tc": "shape",
        "tc_es": "forma",
        "ops": [
            "La velocidad máxima permitida en esa ruta", "El tipo de carretera: interestatal, federal, estatal, local, etc.", "El número total de carriles disponibles en la vía"
        ],
        "ops_en": [
            "The maximum speed on that route", "The type of road: interstate, U.S., state, local, etc.", "The number of lanes available"
        ],
        "ok": "El tipo de carretera: interestatal, federal, estatal, local, etc.",
        "ok_en": "The type of road: interstate, U.S., state, local, etc."
    }, {
        "id": 56,
        "es_n": "Cuando llegas a una intersección de giro en U y quieres girar a la izquierda, ¿cómo debes completar la maniobra?",
        "es": "Cuando llegas a una thrU-TURN intersection y quieres hacer un left turn, ¿cómo debes completar la maniobra?",
        "en": "When you reach a thrU-TURN intersection and want to make a left turn, how should you complete the maneuver?",
        "kt": "thrU-TURN intersection",
        "kt_es": "intersección de giro en U",
        "tc": "left turn",
        "tc_es": "giro a la izquierda",
        "ops": [
            "Girar directamente desde el carril izquierdo como en cualquier intersección", "Seguir recto, hacer U-turn más adelante y regresar para girar a la derecha", "Girar en U solo si hay señal verde en la intersección"
        ],
        "ops_en": [
            "A signal-free intersection for high speed", "An intersection eliminating left turns: drivers go straight, make a U-turn, return to turn right", "A U-turn zone only for trucks"
        ],
        "ok": "Seguir recto, hacer U-turn más adelante y regresar para girar a la derecha",
        "ok_en": "An intersection eliminating left turns: drivers go straight, make a U-turn, return to turn right"
    }, {
        "id": 57,
        "es_n": "¿En qué dirección debe ir un vehículo en una one-way street?",
        "es": "¿En qué dirección puede ir un vehículo en una one-way street, según el direction of arrow?",
        "en": "In what direction may a vehicle travel on a one-way street?",
        "kt": "one-way street",
        "kt_es": "calle de un sentido",
        "tc": "direction of arrow",
        "tc_es": "dirección de la flecha",
        "ops": [
            "En cualquier dirección si hay poco tráfico", "Solo en la dirección de la flecha indicada", "En ambas direcciones si es suficientemente ancha"
        ],
        "ops_en": [
            "In any direction if there is little traffic", "Only in the direction of the indicated arrow", "Both directions if wide enough"
        ],
        "ok": "Solo en la dirección de la flecha indicada",
        "ok_en": "Only in the direction of the indicated arrow"
    }, {
        "id": 58,
        "es_n": "¿Qué significan las transition zones en autopistas interestatales rurales?",
        "es": "Cuando ves transition zones en rural interstate highways, ¿qué indican sobre el speed limit?",
        "en": "What do transition zones on rural interstate highways indicate?",
        "kt": "transition zones",
        "kt_es": "zonas de transición",
        "tc": "speed limit",
        "tc_es": "límite de velocidad",
        "ops": [
            "Zonas de construcción con velocidad temporalmente reducida", "Cambios en el límite de velocidad, indicados con marcas en el pavimento y señales", "Áreas obligatorias de reducción de velocidad para camiones pesados"
        ],
        "ops_en": [
            "Construction zones with reduced speed", "Speed limit changes, indicated with pavement markings and signs", "Areas where trucks must slow down"
        ],
        "ok": "Cambios en el límite de velocidad, indicados con marcas en el pavimento y señales",
        "ok_en": "Speed limit changes, indicated with pavement markings and signs"
    }, {
        "id": 59,
        "es_n": "Cuando vas a girar a la izquierda, ¿qué ventaja ofrece una flecha verde protegida?",
        "es": "Cuando vas a hacer un left turn, ¿qué ventaja ofrece una protected left turn con green arrow?",
        "en": "When you are making a left turn, what advantage does a protected left turn with a green arrow provide?",
        "kt": "protected left turn",
        "kt_es": "giro protegido a la izquierda",
        "tc": "green arrow",
        "tc_es": "flecha verde",
        "ops": [
            "No existe ninguna diferencia práctica o legal entre ambos tipos de giro", "La flecha verde protegida garantiza prioridad; la luz verde sólida o flecha amarilla requiere ceder el paso", "La diferencia es que la flecha verde aplica únicamente para conductores de motocicletas"
        ],
        "ops_en": [
            "No difference, they are the same", "The protected green arrow guarantees priority; solid green/flashing yellow arrow requires yielding", "The green arrow is only for motorcycles"
        ],
        "ok": "La flecha verde protegida garantiza prioridad; la luz verde sólida o flecha amarilla requiere ceder el paso",
        "ok_en": "The protected green arrow guarantees priority; solid green/flashing yellow arrow requires yielding"
    }, {
        "id": 60,
        "es_n": "¿Qué debes verificar antes de entrar a un flex lane?",
        "es": "¿Qué debes verificar antes de entrar a un flex lane, especialmente en rush hour?",
        "en": "What must you check before entering a flex lane?",
        "kt": "flex lane",
        "kt_es": "carril flexible",
        "tc": "rush hour",
        "tc_es": "hora pico",
        "ops": [
            "Verificar que tengas suficiente gasolina para continuar", "Qué carriles se pueden usar en ese momento según las señales", "Verificar que no haya trabajadores activos en la carretera"
        ],
        "ops_en": [
            "That you have enough gas", "Which lanes can be used at that time according to the signals", "That there are no road workers"
        ],
        "ok": "Qué carriles se pueden usar en ese momento según las señales",
        "ok_en": "Which lanes can be used at that time according to the signals"
    }, {
        "id": 61,
        "es_n": "Al salir de una autopista (exiting a roadway), ¿cuándo debes moverte al exit lane?",
        "es": "¿Debes moverte al exit lane usando el deceleration lane con anticipación al salir?",
        "en": "When exiting a roadway, when should you move to the exit lane?",
        "kt": "exit lane",
        "kt_es": "carril de salida",
        "tc": "deceleration lane",
        "tc_es": "carril de desaceleración",
        "ops": [
            "En el último momento posible para no interrumpir el tráfico", "Con anticipación, para evitar cambios bruscos de carril", "Solo cuando veas la señal de salida"
        ],
        "ops_en": [
            "At the last possible moment to not interrupt traffic", "Early, to avoid making a quick lane change", "Only when you see the exit sign"
        ],
        "ok": "Con anticipación, para evitar cambios bruscos de carril",
        "ok_en": "Early, to avoid making a quick lane change"
    }, {
        "id": 62,
        "es_n": "Si viajas solo en tu vehículo, ¿cuándo puedes usar un carril compartido?",
        "es": "Si viajas solo en tu vehículo, ¿cuándo puedes usar un carpool lane?",
        "en": "If you are driving alone, when can you use a carpool lane?",
        "kt": "carpool lane",
        "kt_es": "carril compartido",
        "tc": "driving alone",
        "tc_es": "viajar solo",
        "ops": [
            "Cualquier vehículo puede acceder pagando el peaje correspondiente en la entrada", "Vehículos con 2+ personas, motocicletas, autobuses y vehículos con C decal de combustible limpio", "Solo vehículos eléctricos certificados y autobuses escolares debidamente autorizados"
        ],
        "ops_en": [
            "Any vehicle can use it by paying a toll", "Vehicles with 2+ people, motorcycles, buses, and clean fuel vehicles with C decal", "Only electric vehicles and school buses"
        ],
        "ok": "Vehículos con 2+ personas, motocicletas, autobuses y vehículos con C decal de combustible limpio",
        "ok_en": "Vehicles with 2+ people, motorcycles, buses, and clean fuel vehicles with C decal"
    }, {
        "id": 63,
        "es_n": "¿Está permitido cruzar una double white line en la autopista?",
        "es": "¿Está permitido cruzar una double white line del express lane en la autopista?",
        "en": "Is it legal to cross a double white line on the highway?",
        "kt": "double white line",
        "kt_es": "doble línea blanca",
        "tc": "express lane",
        "tc_es": "carril expreso",
        "ops": [
            "Sí, si hay suficiente espacio", "No, es ilegal cruzar una doble línea blanca", "Solo en emergencias o con permiso del oficial"
        ],
        "ops_en": [
            "Yes, if there is enough space", "No, it is illegal to cross a double white line", "Only in emergencies or with officer permission"
        ],
        "ok": "No, es ilegal cruzar una doble línea blanca",
        "ok_en": "No, it is illegal to cross a double white line"
    }, {
        "id": 64,
        "es_n": "Si tu vehículo tiene calcomanías de combustible limpio, ¿cuándo puedes usar un carril compartido?",
        "es": "Si tu vehículo tiene C decals, ¿cuándo puedes usar un carpool lane?",
        "en": "If your vehicle has C decals, when can you use a carpool lane?",
        "kt": "carpool lane",
        "kt_es": "carril compartido",
        "tc": "C decals",
        "tc_es": "calcomanías C",
        "ops": [
            "Identifican vehículos gubernamentales con derechos especiales de acceso a carriles", "Permiten a ciertos vehículos de combustible limpio usar el carril expreso sin pagar peaje con un solo ocupante", "Son calcomanías requeridas para todos los vehículos que usan autopistas del estado de Utah"
        ],
        "ops_en": [
            "Identify government vehicles with special access", "Allow certain clean fuel vehicles to use the express lane toll-free with a single occupant", "Are required for all vehicles on Utah highways"
        ],
        "ok": "Permiten a ciertos vehículos de combustible limpio usar el carril expreso sin pagar peaje con un solo ocupante",
        "ok_en": "Allow certain clean fuel vehicles to use the express lane toll-free with a single occupant"
    }, {
        "id": 65,
        "es_n": "¿Qué debes hacer al entrar a una autopista de varios carriles usando el acceleration lane?",
        "es": "¿Qué debes hacer al entrar a una multi-lane highway usando el acceleration lane?",
        "en": "What should you do when entering a multi-lane highway using the acceleration lane?",
        "kt": "acceleration lane",
        "kt_es": "carril de aceleración",
        "tc": "multi-lane highway",
        "tc_es": "autopista de múltiples carriles",
        "ops": [
            "Detenerte completamente y esperar un hueco seguro en el tráfico", "Igualar tu velocidad con el tráfico, encontrar un espacio e intégrarte", "Entrar directamente al carril izquierdo de la autopista"
        ],
        "ops_en": [
            "Stop and wait for a gap in traffic", "Match your speed with traffic, find a gap and merge", "Enter directly into the left lane"
        ],
        "ok": "Igualar tu velocidad con el tráfico, encontrar un espacio e intégrarte",
        "ok_en": "Match your speed with traffic, find a gap and merge"
    }, {
        "id": 66,
        "es_n": "¿Cuándo debes ceder el right-of-way a un conductor que llegó antes a una intersección?",
        "es": "¿Cuándo debes yield el right-of-way a un conductor que llegó antes a una intersection?",
        "en": "When must you yield the right-of-way to a driver who arrived at an intersection before you?",
        "kt": "right-of-way",
        "kt_es": "derecho de paso",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Solo en intersecciones que tienen señal de stop visible", "Siempre — un conductor ya en la intersección tiene prioridad", "Solo si el otro vehículo es más grande o comercial"
        ],
        "ops_en": [
            "Only at intersections with a stop sign", "Always — a driver already at the intersection has the right-of-way", "Only if the other vehicle is larger"
        ],
        "ok": "Siempre — un conductor ya en la intersección tiene prioridad",
        "ok_en": "Always — a driver already at the intersection has the right-of-way"
    }, {
        "id": 67,
        "es_n": "En un four-way stop, ¿a quién cedes el paso si ambos llegan al mismo tiempo?",
        "es": "En un four-way stop, ¿a quién debes yield el right-of-way si ambos llegan al mismo tiempo?",
        "en": "At a four-way stop, who has the right-of-way if two drivers arrive at the same time?",
        "kt": "four-way stop",
        "kt_es": "parada de cuatro vías",
        "tc": "right-of-way",
        "tc_es": "derecho de paso",
        "ops": [
            "Al vehículo más grande", "Al conductor a tu derecha", "Al conductor a tu izquierda"
        ],
        "ops_en": [
            "The larger vehicle", "The driver on your right", "The driver on your left"
        ],
        "ok": "Al conductor a tu derecha",
        "ok_en": "The driver on your right"
    }, {
        "id": 68,
        "es_n": "¿A quién debes ceder el paso al salir de una private driveway hacia la calle?",
        "es": "¿A quién debes yield el right-of-way al salir de una private driveway?",
        "en": "Who must you yield to when exiting a private driveway onto a public road?",
        "kt": "private driveway",
        "kt_es": "entrada privada",
        "tc": "right-of-way",
        "tc_es": "derecho de paso",
        "ops": [
            "A nadie si la calle está casi vacía", "A todos los conductores en la vía pública", "Solo a los conductores de tu izquierda"
        ],
        "ops_en": [
            "No one if the street is nearly empty", "All drivers on the public road", "Only drivers on your left"
        ],
        "ok": "A todos los conductores en la vía pública",
        "ok_en": "All drivers on the public road"
    }, {
        "id": 69,
        "es_n": "¿Cuándo debes usar el turn signal antes de un giro?",
        "es": "¿Cuántos segundos antes de turning debes usar el turn signal?",
        "en": "How many seconds before a turn must you signal?",
        "kt": "turn signal",
        "kt_es": "señal de giro",
        "tc": "turning",
        "tc_es": "girar",
        "ops": [
            "1 segundo antes", "2 segundos antes", "5 segundos antes"
        ],
        "ops_en": [
            "1 second before", "2 seconds before", "5 seconds before"
        ],
        "ok": "2 segundos antes",
        "ok_en": "2 seconds before"
    }, {
        "id": 70,
        "es_n": "Además de girar, ¿cuándo debes usar la direccional?",
        "es": "Además de girar, ¿cuándo debes usar el turn signal para un lane change?",
        "en": "Besides turning, when must you use the turn signal for a lane change?",
        "kt": "turn signal",
        "kt_es": "direccional",
        "tc": "lane change",
        "tc_es": "cambio de carril",
        "ops": [
            "Solo al girar en intersecciones con semáforo", "Al cambiar de carril y al acercarse o alejarse de la acera", "Solo en autopistas cuando cambias de carril"
        ],
        "ops_en": [
            "Only when turning at intersections", "When changing lanes and when pulling to or from a curb", "Only on highways"
        ],
        "ok": "Al cambiar de carril y al acercarse o alejarse de la acera",
        "ok_en": "When changing lanes and when pulling to or from a curb"
    }, {
        "id": 71,
        "es_n": "¿Qué debes hacer cuando un vehículo te está being passed en la carretera?",
        "es": "¿Debes mantener una constant speed cuando otro vehículo te está passing?",
        "en": "What should you do if another vehicle is passing you?",
        "kt": "passing",
        "kt_es": "ser rebasado",
        "tc": "constant speed",
        "tc_es": "velocidad constante",
        "ops": [
            "Acelerar para no permitir que te adelanten", "Quedarte en tu carril y mantener velocidad constante", "Reducir velocidad y ceder tu carril al otro vehículo"
        ],
        "ops_en": [
            "Speed up so you don't get passed", "Stay in your lane and keep your speed steady", "Slow down and yield the lane"
        ],
        "ok": "Quedarte en tu carril y mantener velocidad constante",
        "ok_en": "Stay in your lane and keep your speed steady"
    }, {
        "id": 72,
        "es_n": "¿Cuándo está prohibido rebasar a otro vehículo?",
        "es": "¿Cuándo está prohibido hacer passing, como en una no-passing zone o cerca de una curva?",
        "en": "When is passing another vehicle prohibited, such as in a no-passing zone or near a curve?",
        "kt": "passing",
        "kt_es": "rebasar",
        "tc": "no-passing zone",
        "tc_es": "zona de no rebase",
        "ops": [
            "Solo cuando hay lluvia ligera o condiciones húmedas en la carretera", "En curvas, cimas de colinas, zonas sin rebase, cruces ferroviarios o intersecciones", "Solo cuando hay tráfico muy intenso circulando en ambos sentidos"
        ],
        "ops_en": [
            "Only in light rain", "On curves, hilltops, no-passing zones, railroad crossings, or intersections", "Only when there is heavy traffic"
        ],
        "ok": "En curvas, cimas de colinas, zonas sin rebase, cruces ferroviarios o intersecciones",
        "ok_en": "On curves, hilltops, no-passing zones, railroad crossings, or intersections"
    }, {
        "id": 73,
        "es_n": "¿Cuánta distancia del tráfico opuesto necesitas para el passing seguro?",
        "es": "¿Qué minimum distance del oncoming traffic necesitas para regresar al carril después de passing?",
        "en": "What minimum distance from oncoming traffic is required before returning to your lane after passing?",
        "kt": "passing",
        "kt_es": "rebasar",
        "tc": "oncoming traffic",
        "tc_es": "tráfico en sentido contrario",
        "ops": [
            "100 pies", "200 pies", "500 pies"
        ],
        "ops_en": [
            "100 feet", "200 feet", "500 feet"
        ],
        "ok": "200 pies",
        "ok_en": "200 feet"
    }, {
        "id": 74,
        "es_n": "¿En qué lane debes manejar normalmente en carreteras de múltiples carriles?",
        "es": "¿En qué lane debes manejar en multi-lane roads?",
        "en": "Which lane should you normally drive in on multi-lane roads?",
        "kt": "lane",
        "kt_es": "carril",
        "tc": "multi-lane road",
        "tc_es": "carretera de múltiples carriles",
        "ops": [
            "En el carril izquierdo de la carretera en todo momento", "En el carril derecho, usando el izquierdo para rebasar", "En el carril central para mayor visibilidad"
        ],
        "ops_en": [
            "In the left lane always", "In the right lane, using the left to pass", "In the center lane"
        ],
        "ok": "En el carril derecho, usando el izquierdo para rebasar",
        "ok_en": "In the right lane, using the left to pass"
    }, {
        "id": 75,
        "es_n": "Cuando te detienes antes de un cruce de ferrocarril, ¿dónde debe quedar tu vehículo?",
        "es": "Cuando te detienes antes de un railroad crossing, ¿cuál es el stop distance correcto?",
        "en": "When you stop before a railroad crossing, what is the correct stop distance?",
        "kt": "railroad crossing",
        "kt_es": "cruce de ferrocarril",
        "tc": "stop distance",
        "tc_es": "distancia de detención",
        "ops": [
            "Entre 5 y 10 pies contados desde el riel más cercano", "Más de 15 pies pero no más de 50 pies del riel más cercano", "Exactamente a 25 pies medidos desde el punto central del cruce"
        ],
        "ops_en": [
            "5 to 10 feet from the nearest rail", "More than 15 feet but not more than 50 feet from the nearest rail", "Exactly 25 feet from the crossing"
        ],
        "ok": "Más de 15 pies pero no más de 50 pies del riel más cercano",
        "ok_en": "More than 15 feet but not more than 50 feet from the nearest rail"
    }, {
        "id": 76,
        "es_n": "¿Qué debes hacer si ves un school bus con luces rojas intermitentes en una carretera de 2 carriles?",
        "es": "¿Qué debes hacer si ves un school bus con flashing red lights en una two-lane roadway?",
        "en": "What must you do when a school bus displays flashing red lights on a two-lane road?",
        "kt": "school bus",
        "kt_es": "autobús escolar",
        "tc": "flashing red lights",
        "tc_es": "luces rojas intermitentes",
        "ops": [
            "Solo los vehículos detrás del bus deben detenerse", "El tráfico en ambas direcciones debe detenerse completamente", "Reducir a 10 mph y pasar con precaución"
        ],
        "ops_en": [
            "Only vehicles behind the bus must stop", "Traffic in both directions must come to a complete stop", "Reduce to 10 mph and pass cautiously"
        ],
        "ok": "El tráfico en ambas direcciones debe detenerse completamente",
        "ok_en": "Traffic in both directions must come to a complete stop"
    }, {
        "id": 77,
        "es_n": "¿Debes detenerte para un autobús escolar en una divided highway con mediana?",
        "es": "¿Debes stop para un school bus en una divided highway con 4 o más lanes y una median?",
        "en": "Must you stop for a school bus on a divided highway with four or more lanes and a median?",
        "kt": "divided highway",
        "kt_es": "autopista dividida",
        "tc": "school bus",
        "tc_es": "autobús escolar",
        "ops": [
            "Sí, todo el tráfico en ambas direcciones debe detenerse", "No, solo los vehículos detrás del bus deben detenerse", "Solo si hay niños visibles en la carretera"
        ],
        "ops_en": [
            "Yes, all traffic in both directions must stop", "No, only vehicles behind the bus must stop", "Only if children are visible on the road"
        ],
        "ok": "No, solo los vehículos detrás del bus deben detenerse",
        "ok_en": "No, only vehicles behind the bus must stop"
    }, {
        "id": 78,
        "es_n": "¿Cuánto puede ser la multa por pasar ilegalmente un school bus?",
        "es": "¿Cuánto puede ser la fine por pasar ilegalmente un school bus?",
        "en": "What is the maximum fine for illegally passing a school bus?",
        "kt": "school bus",
        "kt_es": "autobús escolar",
        "tc": "fine",
        "tc_es": "multa",
        "ops": [
            "Hasta $500", "Hasta $1,000", "Hasta $3,000"
        ],
        "ops_en": [
            "Up to $500", "Up to $1,000", "Up to $3,000"
        ],
        "ok": "Hasta $3,000",
        "ok_en": "Up to $3,000"
    }, {
        "id": 79,
        "es_n": "¿A qué distancia de un fire hydrant está prohibido estacionarse?",
        "es": "¿A qué distancia de un fire hydrant está prohibido parking?",
        "en": "How close to a fire hydrant is parking prohibited?",
        "kt": "fire hydrant",
        "kt_es": "hidrante de incendios",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "10 pies", "15 pies", "20 pies"
        ],
        "ops_en": [
            "10 feet", "15 feet", "20 feet"
        ],
        "ok": "15 pies",
        "ok_en": "15 feet"
    }, {
        "id": 80,
        "es_n": "¿A qué distancia de una crosswalk está prohibido estacionarse?",
        "es": "¿A qué distancia de un crosswalk está prohibido el parking?",
        "en": "How far from a crosswalk is parking prohibited?",
        "kt": "crosswalk",
        "kt_es": "paso peatonal",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "10 pies", "20 pies", "30 pies"
        ],
        "ops_en": [
            "10 feet", "20 feet", "30 feet"
        ],
        "ok": "20 pies",
        "ok_en": "20 feet"
    }, {
        "id": 81,
        "es_n": "¿A qué distancia de un stop sign está prohibido estacionarse?",
        "es": "¿A qué distancia de un stop sign o traffic signal está prohibido el parking?",
        "en": "How far from a stop sign or traffic control signal is parking prohibited?",
        "kt": "stop sign",
        "kt_es": "señal de alto",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "20 pies", "30 pies", "50 pies"
        ],
        "ops_en": [
            "20 feet", "30 feet", "50 feet"
        ],
        "ok": "30 pies",
        "ok_en": "30 feet"
    }, {
        "id": 82,
        "es_n": "¿Qué distancia máxima debe haber entre tu vehículo y la acera al hacer parallel parking?",
        "es": "¿Cuántas pulgadas máximo debe estar la rueda trasera del curb en parallel parking?",
        "en": "When parallel parked, how far can the back wheel be from the curb?",
        "kt": "parallel parking",
        "kt_es": "estacionamiento en paralelo",
        "tc": "curb",
        "tc_es": "acera/bordillo",
        "ops": [
            "6 pulgadas", "12 pulgadas", "18 pulgadas"
        ],
        "ops_en": [
            "6 inches", "12 inches", "18 inches"
        ],
        "ok": "12 pulgadas",
        "ok_en": "12 inches"
    }, {
        "id": 83,
        "es_n": "¿Cómo debes girar las ruedas al hacer downhill parking junto a la acera?",
        "es": "¿Cómo giras las ruedas en downhill parking con curb?",
        "en": "Which way do you turn your wheels when parking downhill with a curb?",
        "kt": "downhill parking",
        "kt_es": "estacionamiento cuesta abajo",
        "tc": "curb",
        "tc_es": "bordillo",
        "ops": [
            "Hacia afuera de la acera, alejándose del bordillo", "Hacia la acera (el neumático toca la acera)", "Dejando las ruedas en posición derecha"
        ],
        "ops_en": [
            "Away from the curb", "Toward the curb (tire touches the curb)", "Leave the wheels straight"
        ],
        "ok": "Hacia la acera (el neumático toca la acera)",
        "ok_en": "Toward the curb (tire touches the curb)"
    }, {
        "id": 84,
        "es_n": "¿Cómo debes girar las ruedas al hacer uphill parking junto a la acera?",
        "es": "¿Cómo giras las ruedas en uphill parking con curb?",
        "en": "Which way do you turn your wheels when parking uphill with a curb?",
        "kt": "uphill parking",
        "kt_es": "estacionamiento cuesta arriba",
        "tc": "curb",
        "tc_es": "bordillo",
        "ops": [
            "Hacia la acera", "Alejándose de la acera", "Dejas las ruedas derechas"
        ],
        "ops_en": [
            "Toward the curb", "Away from the curb", "Leave the wheels straight"
        ],
        "ok": "Alejándose de la acera",
        "ok_en": "Away from the curb"
    }, {
        "id": 85,
        "es_n": "¿Está permitido estacionarse en el arcén de una interstate highway?",
        "es": "¿Está permitido el parking en el shoulder de una interstate highway?",
        "en": "Is parking on the shoulder of an interstate highway permitted?",
        "kt": "interstate highway",
        "kt_es": "autopista interestatal",
        "tc": "shoulder",
        "tc_es": "acotamiento",
        "ops": [
            "Sí, siempre que enciendas las luces de emergencia", "No, solo si tu vehículo se descompone o tienes emergencia física", "Sí, si es por menos de 30 minutos"
        ],
        "ops_en": [
            "Yes, as long as you turn on your hazard lights", "No, only if your vehicle breaks down or you have a physical emergency", "Yes, if it's for less than 30 minutes"
        ],
        "ok": "No, solo si tu vehículo se descompone o tienes emergencia física",
        "ok_en": "No, only if your vehicle breaks down or you have a physical emergency"
    }, {
        "id": 86,
        "es_n": "¿Qué indican los red-painted curbs en la acera?",
        "es": "¿Qué significan los red-painted curbs en zonas de no parking?",
        "en": "What do red-painted curbs indicate?",
        "kt": "red-painted curbs",
        "kt_es": "bordillos pintados de rojo",
        "tc": "no parking",
        "tc_es": "prohibido estacionar",
        "ops": [
            "Estacionamiento permitido con límite de tiempo", "Zona de estacionamiento prohibido", "Zona de carga y descarga solamente"
        ],
        "ops_en": [
            "Parking allowed with time limit", "No parking zone", "Loading and unloading zone only"
        ],
        "ok": "Zona de estacionamiento prohibido",
        "ok_en": "No parking zone"
    }, {
        "id": 87,
        "es_n": "Al hacer un right turn, ¿cuántos segundos antes debes señalar?",
        "es": "Al hacer un right turn, ¿cuántos segundos antes debes usar el turn signal?",
        "en": "When making a right turn, how many seconds before must you signal?",
        "kt": "right turn",
        "kt_es": "giro a la derecha",
        "tc": "turn signal",
        "tc_es": "señal de giro",
        "ops": [
            "1 segundo", "2 segundos", "3 segundos"
        ],
        "ops_en": [
            "1 second", "2 seconds", "3 seconds"
        ],
        "ok": "2 segundos",
        "ok_en": "2 seconds"
    }, {
        "id": 88,
        "es_n": "¿Qué head check debes hacer antes de girar en una intersección?",
        "es": "¿Qué head check debes hacer al hacer un right turn?",
        "en": "What head check should you perform when making a right turn?",
        "kt": "head check",
        "kt_es": "revisión de punto ciego",
        "tc": "right turn",
        "tc_es": "giro a la derecha",
        "ops": [
            "Mirar sobre tu hombro izquierdo", "Mirar sobre tu hombro derecho", "No es necesario ningún head check"
        ],
        "ops_en": [
            "Look over your left shoulder", "Look over your right shoulder", "No head check is necessary"
        ],
        "ok": "Mirar sobre tu hombro derecho",
        "ok_en": "Look over your right shoulder"
    }, {
        "id": 89,
        "es_n": "¿Qué steering method se recomienda para maniobras de estacionamiento y giros bruscos?",
        "es": "¿Qué steering method se recomienda para parking y sharp turns?",
        "en": "Which steering method is recommended for parking and sharp turns?",
        "kt": "steering method",
        "kt_es": "método de dirección",
        "tc": "sharp turns",
        "tc_es": "giros bruscos",
        "ops": [
            "Push-pull steering", "Hand-over-hand steering", "Dirección con una sola mano"
        ],
        "ops_en": [
            "Push-pull steering", "Hand-over-hand steering", "One-hand steering"
        ],
        "ok": "Hand-over-hand steering",
        "ok_en": "Hand-over-hand steering"
    }, {
        "id": 90,
        "es_n": "¿Cuándo está prohibido usar el carril de emergencia en la autopista?",
        "es": "¿Cuándo está prohibido usar el emergency lane en la freeway?",
        "en": "When is it prohibited to use the emergency lane on the freeway?",
        "kt": "emergency lane",
        "kt_es": "carril de emergencia",
        "tc": "freeway",
        "tc_es": "autopista",
        "ops": [
            "Solo durante las horas del día con visibilidad suficiente", "Siempre — solo está permitido en emergencias o descomposturas", "Solo cuando hay tráfico pesado que bloquea los carriles normales"
        ],
        "ops_en": [
            "Only during the day", "Always — only for emergencies or breakdowns", "Only if there is heavy traffic"
        ],
        "ok": "Siempre — solo está permitido en emergencias o descomposturas",
        "ok_en": "Always — only for emergencies or breakdowns"
    }, {
        "id": 91,
        "es_n": "¿Qué debes hacer si un vehículo te sigue en el left lane de la autopista?",
        "es": "¿Qué debes hacer en la freeway si un vehículo te sigue de cerca en el left lane?",
        "en": "What must you do on the freeway if a vehicle is following you in the left lane?",
        "kt": "left lane",
        "kt_es": "carril izquierdo",
        "tc": "freeway",
        "tc_es": "autopista",
        "ops": [
            "Mantener tu velocidad y ignorarlo", "Mover al carril derecho de forma segura para permitir que pase", "Reducir la velocidad para que el otro vehículo te pase"
        ],
        "ops_en": [
            "Maintain your speed and ignore them", "Move safely to the right lane to let them pass", "Slow down so the other vehicle passes you"
        ],
        "ok": "Mover al carril derecho de forma segura para permitir que pase",
        "ok_en": "Move safely to the right lane to let them pass"
    }, {
        "id": 92,
        "es_n": "¿Es legal usar la entrance ramp de la autopista para salir de ella en un tráfico congestionado?",
        "es": "¿Es legal usar una entrance ramp para exit la freeway en un traffic jam?",
        "en": "Is it legal to use an entrance ramp to exit a freeway during a traffic jam?",
        "kt": "entrance ramp",
        "kt_es": "carril de entrada",
        "tc": "freeway",
        "tc_es": "autopista",
        "ops": [
            "Sí, si es una emergencia", "No, es ilegal aunque haya tráfico congestionado", "Solo si hay señalización que lo permita"
        ],
        "ops_en": [
            "Yes, if it's an emergency", "No, it is illegal even in a traffic jam", "Only if signage allows it"
        ],
        "ok": "No, es ilegal aunque haya tráfico congestionado",
        "ok_en": "No, it is illegal even in a traffic jam"
    }, {
        "id": 93,
        "es_n": "¿Qué es un runaway vehicle ramp y cuándo se puede usar?",
        "es": "¿Cuándo está permitido usar un runaway vehicle ramp en una emergency?",
        "en": "When is it permitted to use a runaway vehicle ramp?",
        "kt": "runaway vehicle ramp",
        "kt_es": "rampa para vehículos desbocados",
        "tc": "emergency",
        "tc_es": "emergencia",
        "ops": [
            "Para evitar el tráfico congestionado en horas pico", "Solo en emergencias donde necesitas la rampa para detener tu vehículo", "Para dar vuelta en U cuando no hay otro espacio disponible"
        ],
        "ops_en": [
            "To avoid traffic during peak hours", "Only in emergencies where you need the ramp to stop your vehicle", "To make a U-turn when there's nowhere else"
        ],
        "ok": "Solo en emergencias donde necesitas la rampa para detener tu vehículo",
        "ok_en": "Only in emergencies where you need the ramp to stop your vehicle"
    }, {
        "id": 94,
        "es_n": "¿Cuál es la following distance mínima recomendada en autopista?",
        "es": "¿Cuál es la minimum following distance en la freeway?",
        "en": "What is the minimum recommended following distance on the freeway?",
        "kt": "following distance",
        "kt_es": "distancia de seguimiento",
        "tc": "freeway",
        "tc_es": "autopista",
        "ops": [
            "1 segundo", "2 segundos", "4 segundos"
        ],
        "ops_en": [
            "1 second", "2 seconds", "4 seconds"
        ],
        "ok": "2 segundos",
        "ok_en": "2 seconds"
    }, {
        "id": 95,
        "es_n": "¿Cuándo debes aumentar tu following distance en la autopista?",
        "es": "¿Debes aumentar tu following distance en la freeway bajo adverse conditions?",
        "en": "When must you increase your following distance on the freeway?",
        "kt": "following distance",
        "kt_es": "distancia de seguimiento",
        "tc": "adverse conditions",
        "tc_es": "condiciones adversas",
        "ops": [
            "Solo si hay niebla espesa", "En condiciones adversas como lluvia, nieve o niebla", "Solo si el límite de velocidad es mayor a 65 mph"
        ],
        "ops_en": [
            "Only in thick fog", "In adverse conditions like rain, snow, or fog", "Only if the speed limit exceeds 65 mph"
        ],
        "ok": "En condiciones adversas como lluvia, nieve o niebla",
        "ok_en": "In adverse conditions like rain, snow, or fog"
    }, {
        "id": 96,
        "es_n": "¿Qué debes hacer al llegar a un flashing red light?",
        "es": "¿Debes hacer un complete stop ante un flashing red light?",
        "en": "What must you do at a flashing red light?",
        "kt": "flashing red light",
        "kt_es": "luz roja intermitente",
        "tc": "complete stop",
        "tc_es": "parada completa",
        "ops": [
            "Reducir la velocidad y continuar con precaución", "Detenerse completamente, luego proceder cuando sea seguro", "Ignorarla si no hay tráfico visible en la intersección"
        ],
        "ops_en": [
            "Slow down and proceed carefully", "Come to a complete stop, then proceed when safe", "Ignore it if no traffic is visible"
        ],
        "ok": "Detenerse completamente, luego proceder cuando sea seguro",
        "ok_en": "Come to a complete stop, then proceed when safe"
    }, {
        "id": 97,
        "es_n": "¿Qué es un yield sign y cuándo debes obedecerlo?",
        "es": "¿Cuándo usas un yield sign para ceder el right-of-way sin detenerte completamente?",
        "en": "What sign requires you to yield but not necessarily come to a complete stop?",
        "kt": "yield sign",
        "kt_es": "señal de ceda el paso",
        "tc": "right-of-way",
        "tc_es": "derecho de paso",
        "ops": [
            "Stop sign", "Yield sign", "Flashing yellow light"
        ],
        "ops_en": [
            "Stop sign", "Yield sign", "Flashing yellow light"
        ],
        "ok": "Yield sign",
        "ok_en": "Yield sign"
    }, {
        "id": 98,
        "es_n": "¿Cuándo debes hacer una complete stop antes de salir de un callejón o entrada privada?",
        "es": "¿Cuándo debes hacer un complete stop al salir de una alley o private driveway hacia la calle?",
        "en": "When must you come to a complete stop when exiting an alley or private driveway?",
        "kt": "complete stop",
        "kt_es": "parada completa",
        "tc": "driveway",
        "tc_es": "entrada/salida privada",
        "ops": [
            "Solo si hay una señal de stop visible al salir", "Siempre antes de cruzar la acera o entrar a la calle", "Solo si hay peatones visibles en ese momento"
        ],
        "ops_en": [
            "Only if there is a visible stop sign", "Always before crossing the sidewalk or entering the street", "Only if pedestrians are visible"
        ],
        "ok": "Siempre antes de cruzar la acera o entrar a la calle",
        "ok_en": "Always before crossing the sidewalk or entering the street"
    }, {
        "id": 99,
        "es_n": "¿A quién debes ceder el paso al entrar a una interstate highway?",
        "es": "¿A quién debes yield cuando entras a una interstate highway desde una entrance ramp?",
        "en": "Who must you yield to when entering an interstate highway from an entrance ramp?",
        "kt": "interstate highway",
        "kt_es": "autopista interestatal",
        "tc": "entrance ramp",
        "tc_es": "carril de entrada",
        "ops": [
            "A ninguno, tienes derecho de paso", "A todos los vehículos ya en la autopista", "Solo a los camiones y autobuses"
        ],
        "ops_en": [
            "No one, you have the right of way", "All vehicles already on the highway", "Only trucks and buses"
        ],
        "ok": "A todos los vehículos ya en la autopista",
        "ok_en": "All vehicles already on the highway"
    }, {
        "id": 100,
        "es_n": "¿Qué es la zipper merge y cuándo se aplica?",
        "es": "Cuando hay una lane closure en la autopista, ¿cómo debes aplicar el zipper merge?",
        "en": "What is a zipper merge and when does it apply?",
        "kt": "zipper merge",
        "kt_es": "fusión en cremallera",
        "tc": "lane closure",
        "tc_es": "cierre de carril",
        "ops": [
            "Cambiar de carril tan pronto como veas el aviso de cierre", "Continuar hasta el punto de fusión y alternarse con los vehículos del otro carril", "Detenerse completamente y esperar a que el otro carril quede libre"
        ],
        "ops_en": [
            "Change lanes as soon as you see the closure", "Continue to the merge point and alternate with vehicles from the other lane", "Stop completely and wait your turn"
        ],
        "ok": "Continuar hasta el punto de fusión y alternarse con los vehículos del otro carril",
        "ok_en": "Continue to the merge point and alternate with vehicles from the other lane"
    }, {
        "id": 101,
        "es_n": "¿Puedes rebasar un snowplow por el lado donde tiene la cuchilla desplegada?",
        "es": "¿Puedes pasar un snowplow por el lado donde tiene la plow blade desplegada?",
        "en": "Can you pass a snowplow on the side where the plow blade is deployed?",
        "kt": "snowplow",
        "kt_es": "quitanieves",
        "tc": "plow blade",
        "tc_es": "cuchilla quitanieves",
        "ops": [
            "Sí, si tienes suficiente espacio", "No, está prohibido rebasar un snowplow por el lado de la cuchilla", "Solo si el snowplow tiene las luces amarillas apagadas"
        ],
        "ops_en": [
            "Yes, if you have enough room", "No, it is prohibited to pass a snowplow on the blade side", "Only if the snowplow has yellow lights off"
        ],
        "ok": "No, está prohibido rebasar un snowplow por el lado de la cuchilla",
        "ok_en": "No, it is prohibited to pass a snowplow on the blade side"
    }, {
        "id": 102,
        "es_n": "¿Puedes rebasar a 3 o más snowplows que viajan en formación de escalón?",
        "es": "¿Puedes rebasar a 3 o más snowplows que viajan en echelon formation?",
        "en": "Can you pass three or more snowplows operating in echelon formation?",
        "kt": "snowplow",
        "kt_es": "quitanieves",
        "tc": "echelon formation",
        "tc_es": "formación de escalón",
        "ops": [
            "Sí, por el lado izquierdo", "No, no puedes rebasarlos por ningún lado", "Solo si la velocidad del quitanieves es inferior a 25 mph"
        ],
        "ops_en": [
            "Yes, on the left side", "No, you may not pass them on either side", "Only if the snowplow's speed is below 25 mph"
        ],
        "ok": "No, no puedes rebasarlos por ningún lado",
        "ok_en": "No, you may not pass them on either side"
    }, {
        "id": 103,
        "es_n": "Cuando una vía es angosta y no hay espacio para girar en U, ¿cuándo se usa una maniobra de tres puntos?",
        "es": "Cuando una vía es angosta y no hay espacio para un U-turn, ¿cuándo se usa una three-point turn?",
        "en": "When a road is narrow and there is no space for a U-turn, when is a three-point turn used?",
        "kt": "three-point turn",
        "kt_es": "vuelta de tres puntos",
        "tc": "U-turn",
        "tc_es": "vuelta en U",
        "ops": [
            "Cuando necesitas salir de un estacionamiento concurrido o cerrado", "Solo cuando la calle es demasiado estrecha para un U-turn, en carreteras de dos carriles", "En cualquier situación donde necesites dar vuelta completa en la vía pública"
        ],
        "ops_en": [
            "When you want to exit a parking lot", "Only when the road is too narrow for a U-turn, on two-lane roads", "Any time you need to turn around"
        ],
        "ok": "Solo cuando la calle es demasiado estrecha para un U-turn, en carreteras de dos carriles",
        "ok_en": "Only when the road is too narrow for a U-turn, on two-lane roads"
    }, {
        "id": 104,
        "es_n": "¿En qué carril terminas al completar un right turn desde una calle de múltiples carriles?",
        "es": "¿En qué lane terminas al completar un right turn desde una multi-lane road?",
        "en": "When completing a right turn from a multi-lane road, which lane should you end up in?",
        "kt": "right turn",
        "kt_es": "giro a la derecha",
        "tc": "lane",
        "tc_es": "carril",
        "ops": [
            "El carril izquierdo más cercano", "El carril derecho más cercano", "El carril central"
        ],
        "ops_en": [
            "The nearest left lane", "The nearest right lane", "The center lane"
        ],
        "ok": "El carril derecho más cercano",
        "ok_en": "The nearest right lane"
    }, {
        "id": 105,
        "es_n": "¿Cuándo se requiere detenerse completamente al encontrar un stop sign?",
        "es": "¿Cuándo se requiere hacer un complete stop ante un stop sign?",
        "en": "When approaching a stop sign, when is a complete stop required?",
        "kt": "stop sign",
        "kt_es": "señal de alto",
        "tc": "complete stop",
        "tc_es": "parada completa",
        "ops": [
            "Solo si hay tráfico visible", "Siempre, sin excepciones", "Solo en intersecciones grandes"
        ],
        "ops_en": [
            "Only if there is visible traffic", "Always, without exceptions", "Only at large intersections"
        ],
        "ok": "Siempre, sin excepciones",
        "ok_en": "Always, without exceptions"
    }, {
        "id": 106,
        "es_n": "¿Está permitido manejar en reversa en una freeway entrance ramp?",
        "es": "¿Está permitido hacer reverse o backing en una freeway entrance ramp?",
        "en": "Is it permitted to drive in reverse on a freeway entrance ramp?",
        "kt": "freeway entrance ramp",
        "kt_es": "rampa de entrada a la autopista",
        "tc": "reverse",
        "tc_es": "reversa",
        "ops": [
            "Sí, si te pasaste de largo", "No, nunca está permitido", "Solo en emergencias"
        ],
        "ops_en": [
            "Yes, if you missed it", "No, it is never permitted", "Only in emergencies"
        ],
        "ok": "No, nunca está permitido",
        "ok_en": "No, it is never permitted"
    }, {
        "id": 107,
        "es_n": "¿En qué situaciones se requiere una detención completa?",
        "es": "¿En qué situaciones se requiere un complete stop, como ante un traffic signal rojo o una señal de alto?",
        "en": "In what situations is a complete stop required, such as at a red traffic signal or a stop sign?",
        "kt": "complete stop",
        "kt_es": "detención completa",
        "tc": "traffic signal",
        "tc_es": "semáforo",
        "ops": [
            "Solo ante señales de stop fijas y semáforos en rojo solamente", "Ante stop signs, semáforos rojos, cruces ferroviarios, escenas de accidente y órdenes de oficial", "Únicamente cuando hay un oficial de policía activo en la intersección"
        ],
        "ops_en": [
            "Only at stop signs and red lights", "At stop signs, red lights, railroad crossings, crash scenes, and when an officer requests it", "Only when an officer is present"
        ],
        "ok": "Ante stop signs, semáforos rojos, cruces ferroviarios, escenas de accidente y órdenes de oficial",
        "ok_en": "At stop signs, red lights, railroad crossings, crash scenes, and when an officer requests it"
    }, {
        "id": 108,
        "es_n": "Al acercarte a un cruce de tren, ¿a qué distancia mínima debes detenerte?",
        "es": "Al acercarte a un railroad crossing, ¿a qué distancia mínima debes detenerte?",
        "en": "When approaching a railroad crossing, what is the minimum distance at which you must stop?",
        "kt": "railroad crossing",
        "kt_es": "cruce de ferrocarril",
        "tc": "minimum distance",
        "tc_es": "distancia mínima",
        "ops": [
            "Entre 5 y 10 pies del riel más cercano", "Más de 15 pies pero no más de 50 pies del riel más cercano", "Exactamente a 20 pies del cruce ferroviario"
        ],
        "ops_en": [
            "5 to 10 feet", "More than 15 feet but not more than 50 feet", "Exactly 20 feet"
        ],
        "ok": "Más de 15 pies pero no más de 50 pies del riel más cercano",
        "ok_en": "More than 15 feet but not more than 50 feet"
    }, {
        "id": 109,
        "es_n": "¿Cuándo puedes estacionarte en una intersection?",
        "es": "¿Cuándo está permitido el parking en una intersection?",
        "en": "When is parking permitted in an intersection?",
        "kt": "intersection",
        "kt_es": "intersección",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "Si tienes señales de emergencia encendidas", "Nunca está permitido estacionarse en una intersección", "Solo por un máximo de 5 minutos"
        ],
        "ops_en": [
            "If you have emergency flashers on", "It is never permitted to park in an intersection", "Only for a maximum of 5 minutes"
        ],
        "ok": "Nunca está permitido estacionarse en una intersección",
        "ok_en": "It is never permitted to park in an intersection"
    }, {
        "id": 110,
        "es_n": "Después de completar un giro, ¿cuándo debes usar la direccional para cambiar de carril?",
        "es": "Después de completar un giro, ¿cuándo debes usar el turn signal para cambiar al right-most lane?",
        "en": "After completing a turn, when must you use the turn signal to move into the right-most lane?",
        "kt": "turn signal",
        "kt_es": "direccional",
        "tc": "right-most lane",
        "tc_es": "carril más a la derecha",
        "ops": [
            "Quedarte en el mismo carril donde terminaste el giro inicial", "Acelerar al ritmo del tráfico, señalar y moverse al carril más a la derecha cuando sea seguro", "Detenerte brevemente en el carril actual para verificar el flujo del tráfico"
        ],
        "ops_en": [
            "Stay in the lane where you ended the turn", "Accelerate to traffic speed, signal, and move to the right-most lane when safe", "Stop to check traffic"
        ],
        "ok": "Acelerar al ritmo del tráfico, señalar y moverse al carril más a la derecha cuando sea seguro",
        "ok_en": "Accelerate to traffic speed, signal, and move to the right-most lane when safe"
    }, {
        "id": 111,
        "es_n": "¿Está prohibido estacionarse sobre un bridge o estructura elevada de la carretera?",
        "es": "¿Está prohibido el parking sobre un bridge o elevated highway structure?",
        "en": "Is parking prohibited on a bridge or elevated highway structure?",
        "kt": "bridge",
        "kt_es": "puente",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "Solo si el puente tiene menos de 2 carriles disponibles", "Sí, está prohibido estacionarse en puentes o estructuras elevadas de la vía", "No, si hay espacio físico suficiente para hacerlo"
        ],
        "ops_en": [
            "Only if the bridge has fewer than 2 lanes", "Yes, parking on bridges or elevated structures is prohibited", "No, if there is enough space"
        ],
        "ok": "Sí, está prohibido estacionarse en puentes o estructuras elevadas de la vía",
        "ok_en": "Yes, parking on bridges or elevated structures is prohibited"
    }, {
        "id": 112,
        "es_n": "Al girar usando la técnica correcta de volante, ¿cómo debes mover las manos?",
        "es": "Al girar usando pull-push steering, ¿cómo debes mover las manos en el volante?",
        "en": "When turning using pull-push steering, how should you move your hands on the steering wheel?",
        "kt": "pull-push steering",
        "kt_es": "técnica de empujar y jalar",
        "tc": "steering wheel",
        "tc_es": "volante",
        "ops": [
            "Manejar con una sola mano sobre el volante para mayor comodidad y control", "Halar hacia abajo con una mano y empujar hacia arriba con la otra para giros suaves", "Usar las palmas de ambas manos apoyadas firmemente sobre el volante"
        ],
        "ops_en": [
            "Driving with only one hand on the wheel", "Pulling down with one hand and pushing up with the other for smooth turning", "Using the palms for greater control"
        ],
        "ok": "Halar hacia abajo con una mano y empujar hacia arriba con la otra para giros suaves",
        "ok_en": "Pulling down with one hand and pushing up with the other for smooth turning"
    }, {
        "id": 113,
        "es_n": "¿Dónde deben colocarse las manos en el steering wheel para máxima seguridad?",
        "es": "¿Cuál es la hand position correcta en el steering wheel?",
        "en": "Where should your hands be placed on the steering wheel?",
        "kt": "steering wheel",
        "kt_es": "volante",
        "tc": "hand position",
        "tc_es": "posición de manos",
        "ops": [
            "En el interior del volante para mejor control", "En el exterior del volante, con los pulgares hacia arriba", "En cualquier posición cómoda"
        ],
        "ops_en": [
            "On the inside of the wheel for better control", "On the outside of the wheel, with thumbs up along the face", "In any comfortable position"
        ],
        "ok": "En el exterior del volante, con los pulgares hacia arriba",
        "ok_en": "On the outside of the wheel, with thumbs up along the face"
    }, {
        "id": 114,
        "es_n": "¿Qué indica una dashed yellow line entre carriles?",
        "es": "¿Una dashed yellow line indica passing permitted en un two-direction roadway?",
        "en": "What does a dashed yellow line between lanes indicate on a two-direction roadway?",
        "kt": "dashed yellow line",
        "kt_es": "línea amarilla discontinua",
        "tc": "passing permitted",
        "tc_es": "rebase permitido",
        "ops": [
            "El rebase está prohibido en ambas direcciones", "El rebase está permitido cuando el carril está despejado", "El carril es de un solo sentido"
        ],
        "ops_en": [
            "Passing is prohibited in both directions", "Passing is permitted when the lane is clear", "The lane is one-way only"
        ],
        "ok": "El rebase está permitido cuando el carril está despejado",
        "ok_en": "Passing is permitted when the lane is clear"
    }, {
        "id": 115,
        "es_n": "¿Qué debes hacer al usar el turn signal si ya terminaste el giro?",
        "es": "Cuando completas un turn o lane change, ¿qué debes hacer con el turn signal — canceling signal?",
        "en": "What should you do with your turn signal after completing a turn or lane change?",
        "kt": "turn signal",
        "kt_es": "señal de giro",
        "tc": "canceling signal",
        "tc_es": "cancelar señal",
        "ops": [
            "Dejarlo encendido hasta la próxima intersección", "Cancelarlo inmediatamente al completar el giro o cambio de carril", "Solo se cancela automáticamente"
        ],
        "ops_en": [
            "Leave it on until the next intersection", "Cancel it immediately upon completing the turn or lane change", "It only cancels automatically"
        ],
        "ok": "Cancelarlo inmediatamente al completar el giro o cambio de carril",
        "ok_en": "Cancel it immediately upon completing the turn or lane change"
    }, {
        "id": 116,
        "es_n": "¿Quién tiene el right-of-way cuando un vehículo sale de una entrada privada a tu carril?",
        "es": "¿Quién tiene el right-of-way cuando un vehículo sale de una private driveway?",
        "en": "Who has the right-of-way when a vehicle exits a private driveway into your lane?",
        "kt": "right-of-way",
        "kt_es": "derecho de paso",
        "tc": "private driveway",
        "tc_es": "entrada privada",
        "ops": [
            "Tú, el vehículo en la vía pública", "El vehículo que sale de la driveway si llegó primero", "Ninguno, ambos deben ceder"
        ],
        "ops_en": [
            "You, the vehicle on the public road", "The vehicle exiting the driveway if it arrived first", "Neither, both must yield"
        ],
        "ok": "Tú, el vehículo en la vía pública",
        "ok_en": "You, the vehicle on the public road"
    }, {
        "id": 117,
        "es_n": "¿Cómo debes aplicar el braking al acercarte a una intersección?",
        "es": "¿Cómo debes aplicar el braking al acercarte a una intersection?",
        "en": "How should you apply brakes when approaching an intersection?",
        "kt": "braking",
        "kt_es": "frenado",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Con presión brusca y firme para detenerte lo más rápido posible", "Suave y uniformemente, manteniendo la posición del carril", "Usando solo el freno de mano para mayor control"
        ],
        "ops_en": [
            "With hard pressure to stop quickly", "Smoothly and evenly, maintaining lane position", "Using only the parking brake"
        ],
        "ok": "Suave y uniformemente, manteniendo la posición del carril",
        "ok_en": "Smoothly and evenly, maintaining lane position"
    }, {
        "id": 118,
        "es_n": "¿Está permitido rebasar a un vehículo detenido en un crosswalk?",
        "es": "¿Está permitido passing a un vehicle detenido en un crosswalk?",
        "en": "Is it permitted to pass a vehicle stopped at a crosswalk?",
        "kt": "crosswalk",
        "kt_es": "paso peatonal",
        "tc": "passing",
        "tc_es": "rebasar",
        "ops": [
            "Sí, si puedes ver que no hay peatones", "No, nunca debes rebasar un vehículo detenido en un crosswalk", "Solo si el otro vehículo lleva más de 1 minuto detenido"
        ],
        "ops_en": [
            "Yes, if you can see there are no pedestrians", "No, you should never pass a vehicle stopped at a crosswalk", "Only if the other vehicle has been stopped for over 1 minute"
        ],
        "ok": "No, nunca debes rebasar un vehículo detenido en un crosswalk",
        "ok_en": "No, you should never pass a vehicle stopped at a crosswalk"
    }, {
        "id": 119,
        "es_n": "¿A cuántos pies de los railroad tracks está prohibido estacionarse?",
        "es": "¿A cuántos pies de los railroad tracks está prohibido el parking?",
        "en": "How far from railroad tracks is parking prohibited?",
        "kt": "railroad tracks",
        "kt_es": "vías del tren",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "25 pies del riel más cercano", "50 pies del riel más cercano", "100 pies del riel más cercano"
        ],
        "ops_en": [
            "25 feet from the nearest rail", "50 feet from the nearest rail", "100 feet from the nearest rail"
        ],
        "ok": "50 pies del riel más cercano",
        "ok_en": "50 feet from the nearest rail"
    }, {
        "id": 120,
        "es_n": "¿Está permitido pasar a un vehículo por el shoulder de la carretera?",
        "es": "¿Está permitido passing a un vehicle por el shoulder de la carretera?",
        "en": "Is it permitted to pass a vehicle using the road shoulder?",
        "kt": "shoulder",
        "kt_es": "acotamiento",
        "tc": "passing",
        "tc_es": "rebasar",
        "ops": [
            "Sí, en emergencias", "No, nunca está permitido pasar por el acotamiento", "Sí, en autopistas de alta velocidad"
        ],
        "ops_en": [
            "Yes, in emergencies", "No, it is never permitted to pass on the shoulder", "Yes, on high-speed highways"
        ],
        "ok": "No, nunca está permitido pasar por el acotamiento",
        "ok_en": "No, it is never permitted to pass on the shoulder"
    }, {
        "id": 121,
        "es_n": "¿A cuántos pies del lado opuesto de una fire station está prohibido estacionarse si hay señales?",
        "es": "¿A cuántos pies del lado opuesto de una fire station está prohibido el parking si hay posted signs?",
        "en": "How far from a fire station entrance is parking prohibited if signs are posted?",
        "kt": "fire station",
        "kt_es": "estación de bomberos",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "A 20 pies del mismo lado de la entrada", "A 50 pies de cualquier lado de la estación", "A 75 pies del lado opuesto de la entrada"
        ],
        "ops_en": [
            "20 feet on the same side", "50 feet on any side", "75 feet on the opposite side of the entrance"
        ],
        "ok": "A 75 pies del lado opuesto de la entrada",
        "ok_en": "75 feet on the opposite side of the entrance"
    }, {
        "id": 122,
        "es_n": "¿Cuándo el tráfico no requiere detenerse para un school bus en una carretera de 5 carriles?",
        "es": "¿Cuándo no se requiere stopping para un school bus en una five-lane highway con shared center turn lane?",
        "en": "When is opposing traffic not required to stop for a school bus on a 5-lane highway with a shared center turn lane?",
        "kt": "school bus",
        "kt_es": "autobús escolar",
        "tc": "five-lane highway",
        "tc_es": "autopista de cinco carriles",
        "ops": [
            "Nunca — todo el tráfico en ambas direcciones debe detenerse siempre", "El tráfico en dirección opuesta no está legalmente obligado a detenerse", "Solo los vehículos comerciales están obligados a detenerse"
        ],
        "ops_en": [
            "Never, all traffic must always stop", "Opposing traffic is not legally required to stop", "Only commercial vehicles must stop"
        ],
        "ok": "El tráfico en dirección opuesta no está legalmente obligado a detenerse",
        "ok_en": "Opposing traffic is not legally required to stop"
    }, {
        "id": 123,
        "es_n": "¿Qué está prohibido hacer si te pasas de tu freeway exit?",
        "es": "¿Qué está prohibido hacer si te pasas de tu freeway exit, como hacer reverse?",
        "en": "What is prohibited if you miss your exit on the freeway?",
        "kt": "freeway exit",
        "kt_es": "salida de autopista",
        "tc": "reverse",
        "tc_es": "reversa",
        "ops": [
            "Reversa en el carril derecho para regresar", "Tomar la siguiente salida, nunca regresar en reversa", "Usar el carril de emergencia para retroceder"
        ],
        "ops_en": [
            "Reverse in the right lane to go back", "Take the next exit, never reverse", "Use the emergency lane to go back"
        ],
        "ok": "Tomar la siguiente salida, nunca regresar en reversa",
        "ok_en": "Take the next exit, never reverse"
    }, {
        "id": 124,
        "es_n": "¿Cuándo está permitido hacer un U-turn en la autopista?",
        "es": "¿Cuándo está permitido hacer un U-turn en la freeway?",
        "en": "When is a U-turn permitted on the freeway?",
        "kt": "U-turn",
        "kt_es": "giro en U",
        "tc": "freeway",
        "tc_es": "autopista",
        "ops": [
            "En zonas de baja velocidad o trabajo en carretera", "Nunca — los U-turns son ilegales en la freeway", "Solo en interchanges autorizados"
        ],
        "ops_en": [
            "In low-speed zones or road work areas", "Never — U-turns are illegal on the freeway", "Only at authorized interchanges"
        ],
        "ok": "Nunca — los U-turns son ilegales en la freeway",
        "ok_en": "Never — U-turns are illegal on the freeway"
    }, {
        "id": 125,
        "es_n": "Si pasas ilegalmente a un autobús escolar detenido, ¿qué puede pasar con tu seguro?",
        "es": "Si pasas ilegalmente a un school bus detenido, ¿qué puede pasar con tus insurance rates?",
        "en": "If you illegally pass a stopped school bus, what can happen to your insurance rates?",
        "kt": "school bus",
        "kt_es": "autobús escolar",
        "tc": "insurance rates",
        "tc_es": "tarifas de seguro",
        "ops": [
            "No tiene ningún efecto en las tarifas del seguro", "Generalmente resulta en un aumento de las tarifas de seguro", "Solo afecta el seguro si ocurrió un accidente con daños"
        ],
        "ops_en": [
            "No effect on insurance", "Usually results in increased insurance rates", "Only affects if there is an accident"
        ],
        "ok": "Generalmente resulta en un aumento de las tarifas de seguro",
        "ok_en": "Usually results in increased insurance rates"
    }, {
        "id": 126,
        "es_n": "Antes de encender el vehículo, ¿qué debes verificar?",
        "es": "Antes de starting the engine, ¿qué debes verificar en las luces y el panel?",
        "en": "Before starting the engine, what should you check regarding lights and the dashboard?",
        "kt": "starting the engine",
        "kt_es": "encender el motor",
        "tc": "dashboard",
        "tc_es": "tablero",
        "ops": [
            "Verificar únicamente el nivel actual de gasolina antes de arrancar", "Que esté en Park o el clutch enganchado, aplicar el freno y revisar luces e indicadores", "Verificar solo la posición de los espejos y el cinturón de seguridad"
        ],
        "ops_en": [
            "Only the fuel level", "Vehicle in Park or clutch engaged, apply brake, check lights and gauges", "Only mirrors and seatbelt"
        ],
        "ok": "Que esté en Park o el clutch enganchado, aplicar el freno y revisar luces e indicadores",
        "ok_en": "Vehicle in Park or clutch engaged, apply brake, check lights and gauges"
    }, {
        "id": 127,
        "es_n": "Al hacer backing, ¿por dónde debes mirar principalmente?",
        "es": "¿Al hacer backing debes mirar principalmente por el rear window?",
        "en": "When backing your vehicle, where should you primarily look?",
        "kt": "backing",
        "kt_es": "reversa",
        "tc": "rear window",
        "tc_es": "ventana trasera",
        "ops": [
            "A través de los espejos laterales exteriores del vehículo únicamente", "Por la ventana trasera, con el brazo derecho apoyado en el respaldo del asiento", "Mirando hacia adelante para verificar que no haya tráfico obstruyendo"
        ],
        "ops_en": [
            "Through the side mirrors only", "Through the rear window, with right arm on the seat back", "Forward to check traffic"
        ],
        "ok": "Por la ventana trasera, con el brazo derecho apoyado en el respaldo del asiento",
        "ok_en": "Through the rear window, with right arm on the seat back"
    }, {
        "id": 128,
        "es_n": "Al retroceder, ¿por qué no debes confiar solo en los espejos?",
        "es": "Al hacer backing, ¿por qué no debes confiar solo en los mirrors?",
        "en": "When backing, why should you not rely only on mirrors?",
        "kt": "backing",
        "kt_es": "retroceder",
        "tc": "mirrors",
        "tc_es": "espejos",
        "ops": [
            "Porque los espejos son poco precisos en vehículos modernos", "Porque los espejos no muestran el área directamente detrás del vehículo", "Porque los espejos son demasiado pequeños para ver con claridad"
        ],
        "ops_en": [
            "Mirrors are inaccurate", "Mirrors don't show the area directly behind the vehicle", "Mirrors are too small"
        ],
        "ok": "Porque los espejos no muestran el área directamente detrás del vehículo",
        "ok_en": "Mirrors don't show the area directly behind the vehicle"
    }, {
        "id": 129,
        "es_n": "Antes de retroceder, ¿qué debes verificar si hay niños u objetos detrás?",
        "es": "Antes de hacer backing, ¿qué debes verificar si hay children u objetos detrás?",
        "en": "Before backing, what should you check if there are children or objects behind?",
        "kt": "backing",
        "kt_es": "retroceder",
        "tc": "children",
        "tc_es": "niños",
        "ops": [
            "Revisar los neumáticos del vehículo y el nivel actual de aceite del motor", "Verificar el área trasera del vehículo, ya que no puedes ver niños u objetos pequeños desde el asiento del conductor", "Ajustar y verificar la posición de los espejos exteriores antes de subir al vehículo"
        ],
        "ops_en": [
            "The tires and oil level", "The area behind the vehicle, since you can't see children or small objects from the driver's seat", "Only the exterior mirrors"
        ],
        "ok": "Verificar el área trasera del vehículo, ya que no puedes ver niños u objetos pequeños desde el asiento del conductor",
        "ok_en": "The area behind the vehicle, since you can't see children or small objects from the driver's seat"
    }, {
        "id": 130,
        "es_n": "¿Cuántos segundos antes debes señalar para un lane change?",
        "es": "¿Cuántos segundos antes debes usar el turn signal para un lane change?",
        "en": "How many seconds before must you signal for a lane change?",
        "kt": "lane change",
        "kt_es": "cambio de carril",
        "tc": "turn signal",
        "tc_es": "señal de giro",
        "ops": [
            "1 segundo", "2 segundos", "4 segundos"
        ],
        "ops_en": [
            "1 second", "2 seconds", "4 seconds"
        ],
        "ok": "2 segundos",
        "ok_en": "2 seconds"
    }, {
        "id": 131,
        "es_n": "¿Qué es el blind spot y cómo lo verificas al cambiar de carril?",
        "es": "Antes de hacer un lane change, ¿cómo verificas el blind spot que los espejos no cubren?",
        "en": "What is the blind spot and how do you check it during a lane change?",
        "kt": "blind spot",
        "kt_es": "punto ciego",
        "tc": "lane change",
        "tc_es": "cambio de carril",
        "ops": [
            "El área frente al vehículo; se verifica con el espejo retrovisor", "El área que los espejos no cubren; se verifica mirando sobre el hombro (head check)", "El área debajo del vehículo; no requiere verificación"
        ],
        "ops_en": [
            "The area in front of the vehicle; checked with the rearview mirror", "The area mirrors don't cover; checked by looking over your shoulder (head check)", "The area under the vehicle; no check required"
        ],
        "ok": "El área que los espejos no cubren; se verifica mirando sobre el hombro (head check)",
        "ok_en": "The area mirrors don't cover; checked by checked by looking over your shoulder (head check)"
    }, {
        "id": 132,
        "es_n": "Si conduces hacia una zona marcada entre líneas blancas sólidas, ¿está permitido hacerlo?",
        "es": "Si conduces hacia el gore area entre líneas blancas sólidas, ¿está permitido hacerlo?",
        "en": "If you drive into the gore area between solid white lines, is it allowed?",
        "kt": "gore area",
        "kt_es": "zona de separación",
        "tc": "solid white lines",
        "tc_es": "líneas blancas sólidas",
        "ops": [
            "Un carril adicional habilitado exclusivamente para situaciones de emergencia vial", "El área entre líneas blancas sólidas al entrar o salir de un carril; conducir ahí está prohibido", "La zona marcada de desaceleración ubicada al final de una rampa de salida"
        ],
        "ops_en": [
            "An additional lane for emergencies", "The area between solid white lines entering/exiting a lane; driving there is prohibited", "The deceleration zone when exiting the highway"
        ],
        "ok": "El área entre líneas blancas sólidas al entrar o salir de un carril; conducir ahí está prohibido",
        "ok_en": "The area between solid white lines entering/exiting a lane; driving there is prohibited"
    }, {
        "id": 133,
        "es_n": "¿Qué haces si una distraction como un objeto caído ocurre mientras manejas?",
        "es": "¿Debes pull over de inmediato si tienes una distraction mientras manejas?",
        "en": "What should you do if you have a distraction while driving?",
        "kt": "distraction",
        "kt_es": "distracción",
        "tc": "pull over",
        "tc_es": "orillarse",
        "ops": [
            "Atender el problema mientras sigues manejando", "Orillarte inmediatamente y atender el problema", "Pedirle a un pasajero que lo resuelva"
        ],
        "ops_en": [
            "Handle the problem while continuing to drive", "Pull over immediately and handle the problem", "Ask a passenger to resolve it"
        ],
        "ok": "Orillarte inmediatamente y atender el problema",
        "ok_en": "Pull over immediately and handle the problem"
    }, {
        "id": 134,
        "es_n": "Si un conductor actúa con ira extrema al manejar, ¿cómo se clasifica esa conducta?",
        "es": "Si un conductor actúa con ira extrema al manejar, ¿cómo se clasifica esa conducta como road rage?",
        "en": "If a driver behaves with extreme anger while driving, how is that behavior classified as road rage?",
        "kt": "road rage",
        "kt_es": "ira al conducir",
        "tc": "extreme anger",
        "tc_es": "ira extrema",
        "ops": [
            "Manejar de manera agresiva excediendo el límite de velocidad en zona escolar", "La comisión de un delito criminal por un conductor en respuesta a un incidente vial con intención de intimidar", "Exceder el límite de velocidad oficial en 20 mph en cualquier tipo de carretera"
        ],
        "ops_en": [
            "Driving aggressively in a school zone", "The commission of a criminal offense by a driver in response to a road incident with intent to intimidate", "Exceeding the speed limit by 20 mph"
        ],
        "ok": "La comisión de un delito criminal por un conductor en respuesta a un incidente vial con intención de intimidar",
        "ok_en": "The commission of a criminal offense by a driver in response to a road incident with intent to intimidate"
    }, {
        "id": 135,
        "es_n": "¿Qué puede ordenar el tribunal en la primera condena por road rage?",
        "es": "¿El court puede ordenar license suspension en la primera conviction por road rage?",
        "en": "What can the court order on the first conviction for road rage?",
        "kt": "road rage",
        "kt_es": "furia al volante",
        "tc": "license suspension",
        "tc_es": "suspensión de licencia",
        "ops": [
            "Una multa de $500", "Suspensión de la licencia por un año", "Trabajo comunitario de 100 horas"
        ],
        "ops_en": [
            "A $500 fine", "License suspension for one year", "100 hours of community service"
        ],
        "ok": "Suspensión de la licencia por un año",
        "ok_en": "License suspension for one year"
    }, {
        "id": 136,
        "es_n": "¿A qué horas del día representan mayor peligro los animals en la carretera?",
        "es": "¿Por qué son los animals más peligrosos en carretera al dawn and dusk?",
        "en": "At what times of day are animals most active and pose the greatest road risk?",
        "kt": "animals",
        "kt_es": "animales",
        "tc": "dawn and dusk",
        "tc_es": "amanecer y atardecer",
        "ops": [
            "Al mediodía cuando hace más calor", "Al amanecer y al atardecer", "Solo durante la noche"
        ],
        "ops_en": [
            "At noon when it's hottest", "At dawn and dusk", "Only at night"
        ],
        "ok": "Al amanecer y al atardecer",
        "ok_en": "At dawn and dusk"
    }, {
        "id": 137,
        "es_n": "¿Es recomendable hacer swerving brusco al ver un obstáculo en la carretera?",
        "es": "¿Es recomendable hacer swerving brusco al ver un animal en la carretera?",
        "en": "If you see an animal on the road, should you swerve sharply to avoid it?",
        "kt": "swerving",
        "kt_es": "viraje brusco",
        "tc": "animal",
        "tc_es": "animal",
        "ops": [
            "Sí, siempre debes virar bruscamente para proteger al animal", "No, el riesgo de perder el control y lesionarte puede ser mayor que el impacto", "Solo si es un animal doméstico como perro o gato"
        ],
        "ops_en": [
            "Yes, always to protect the animal", "No, the risk of personal injury may be greater if you swerve", "Only if it's a domestic animal"
        ],
        "ok": "No, el riesgo de perder el control y lesionarte puede ser mayor que el impacto",
        "ok_en": "No, the risk of personal injury may be greater if you swerve"
    }, {
        "id": 138,
        "es_n": "¿Qué debes hacer en caso de un vehicle breakdown en el desierto?",
        "es": "¿Qué debes hacer en caso de vehicle breakdown en el desert?",
        "en": "What should you do if your vehicle breaks down in the desert?",
        "kt": "vehicle breakdown",
        "kt_es": "descompostura vehicular",
        "tc": "desert",
        "tc_es": "desierto",
        "ops": [
            "Caminar hacia la ciudad más cercana inmediatamente", "Quedarte con el vehículo, no alejarte a menos que veas ayuda cerca", "Apagar el vehículo y esperar en silencio"
        ],
        "ops_en": [
            "Walk to the nearest city immediately", "Stay with the vehicle, don't wander unless you see nearby help", "Turn off the vehicle and wait silently"
        ],
        "ok": "Quedarte con el vehículo, no alejarte a menos que veas ayuda cerca",
        "ok_en": "Stay with the vehicle, don't wander unless you see nearby help"
    }, {
        "id": 139,
        "es_n": "Si vas a conducir en zonas desérticas, ¿qué debes llevar contigo?",
        "es": "Si vas a hacer desert driving, ¿qué debes llevar contigo?",
        "en": "If you are going desert driving, what should you carry with you?",
        "kt": "desert driving",
        "kt_es": "conducción en desierto",
        "tc": "carry",
        "tc_es": "llevar",
        "ops": [
            "Solo un mapa de carreteras actualizado de la zona", "Suficiente agua para ti, tus pasajeros y el radiador del vehículo", "Un extintor de incendios de tipo vehicular"
        ],
        "ops_en": [
            "Just a road map", "Enough water for you, your passengers, and the vehicle's radiator", "A fire extinguisher"
        ],
        "ok": "Suficiente agua para ti, tus pasajeros y el radiador del vehículo",
        "ok_en": "Enough water for you, your passengers, and the vehicle's radiator"
    }, {
        "id": 140,
        "es_n": "Si tu vehículo se queda varado, ¿cómo debes usar las señales de emergencia?",
        "es": "Si tu vehículo se queda varado, ¿cómo debes usar un emergency signal?",
        "en": "If your vehicle becomes disabled, how should you use an emergency signal?",
        "kt": "emergency signal",
        "kt_es": "señal de emergencia",
        "tc": "disabled vehicle",
        "tc_es": "vehículo varado",
        "ops": [
            "Tocar el claxon de forma repetitiva para llamar la atención", "Encender las luces de emergencia, abrir el cofre y atar algo blanco o naranja visible", "Permanecer dentro del vehículo con las ventanas cerradas y esperar"
        ],
        "ops_en": [
            "Honk the horn repeatedly", "Turn on emergency flashers, raise the hood, and tie something white or orange on antenna or door handle", "Stay inside with windows closed"
        ],
        "ok": "Encender las luces de emergencia, abrir el cofre y atar algo blanco o naranja visible",
        "ok_en": "Turn on emergency flashers, raise the hood, and tie something white or orange on antenna or door handle"
    }, {
        "id": 141,
        "es_n": "Si un conductor pone en peligro a otras personas con varias infracciones, ¿cómo se considera esa conducta?",
        "es": "Si un conductor pone en peligro a otras personas con varias traffic offenses, ¿cómo se considera esa conducta de aggressive driving?",
        "en": "If a driver endangers other people by committing multiple traffic offenses, how is that aggressive driving behavior considered?",
        "kt": "aggressive driving",
        "kt_es": "manejo agresivo",
        "tc": "traffic offenses",
        "tc_es": "infracciones de tránsito",
        "ops": [
            "Manejar a más de 10 mph sobre el límite de velocidad publicado", "Cometer infracciones de tráfico que pongan en peligro a otras personas o propiedades", "No usar el turn signal al cambiar de carril en autopista"
        ],
        "ops_en": [
            "Driving 10 mph over the speed limit", "Committing traffic offenses that endanger other persons or property", "Not using a turn signal when changing lanes"
        ],
        "ok": "Cometer infracciones de tráfico que pongan en peligro a otras personas o propiedades",
        "ok_en": "Committing traffic offenses that endanger other persons or property"
    }, {
        "id": 142,
        "es_n": "Si quieres prevenir accidentes mientras conduces, ¿qué debes practicar?",
        "es": "Si quieres prevenir accidentes mientras conduces, ¿qué implica el defensive driving?",
        "en": "If you want to prevent crashes while driving, what does defensive driving involve?",
        "kt": "defensive driving",
        "kt_es": "conducción defensiva",
        "tc": "crashes",
        "tc_es": "accidentes",
        "ops": [
            "Manejar de forma agresiva para anticiparse a otros conductores", "Anticipar posibles errores de otros conductores y observar las condiciones del camino", "Seguir solo las señales de tránsito visibles en la vía"
        ],
        "ops_en": [
            "Driving aggressively to anticipate others", "Anticipating possible mistakes from other drivers and observing road conditions", "Only obeying traffic signs"
        ],
        "ok": "Anticipar posibles errores de otros conductores y observar las condiciones del camino",
        "ok_en": "Anticipating possible mistakes from other drivers and observing road conditions"
    }, {
        "id": 143,
        "es_n": "Antes de salir de tu vehículo estacionado, ¿qué debes hacer?",
        "es": "Antes de salir de tu parked vehicle, ¿qué debes hacer con el parking brake?",
        "en": "Before leaving your parked vehicle, what should you do with the parking brake?",
        "kt": "parking brake",
        "kt_es": "freno de estacionamiento",
        "tc": "parked vehicle",
        "tc_es": "vehículo estacionado",
        "ops": [
            "Solo apagar el motor del vehículo antes de abandonarlo temporalmente", "Activar el freno de estacionamiento, apagar el motor y asegurar el vehículo cerrado", "Solo cerrar completamente las ventanas y la puerta del conductor"
        ],
        "ops_en": [
            "Just turn off the engine", "Set the parking brake, stop the motor, and lock the doors", "Just close the windows"
        ],
        "ok": "Activar el freno de estacionamiento, apagar el motor y asegurar el vehículo cerrado",
        "ok_en": "Set the parking brake, stop the motor, and lock the doors"
    }, {
        "id": 144,
        "es_n": "Después de girar a la izquierda en una vía de varios carriles, ¿en qué carril debes terminar?",
        "es": "Después de hacer un left turn en una multiple-lane road, ¿en qué carril debes terminar?",
        "en": "After making a left turn on a multiple-lane road, which lane should you end up in?",
        "kt": "left turn",
        "kt_es": "giro a la izquierda",
        "tc": "multiple-lane road",
        "tc_es": "vía de varios carriles",
        "ops": [
            "El carril de la derecha más cercano al bordillo", "El carril más a la izquierda, directamente a la derecha de la línea central", "El carril central de la carretera de múltiples carriles"
        ],
        "ops_en": [
            "The right lane", "The left-most lane, directly to the right of the centerline", "The center lane"
        ],
        "ok": "El carril más a la izquierda, directamente a la derecha de la línea central",
        "ok_en": "The left-most lane, directly to the right of the centerline"
    }, {
        "id": 145,
        "es_n": "Mientras conduces, ¿con qué frecuencia debes revisar el tráfico alrededor?",
        "es": "Mientras conduces, ¿con qué frecuencia debes hacer traffic checks con los mirrors?",
        "en": "While driving, how often should you perform traffic checks using your mirrors?",
        "kt": "traffic checks",
        "kt_es": "revisiones de tráfico",
        "tc": "mirrors",
        "tc_es": "espejos",
        "ops": [
            "Solo revisar los espejos cuando estás a punto de cambiar de carril", "Regularmente, antes, durante y después de intersecciones, giros y cambios de carril", "Solo consultar los espejos cuando te estás preparando para estacionarte"
        ],
        "ops_en": [
            "Only when changing lanes", "Regularly, before, during, and after intersections, turns, and lane changes", "Only when parking"
        ],
        "ok": "Regularmente, antes, durante y después de intersecciones, giros y cambios de carril",
        "ok_en": "Regularly, before, during, and after intersections, turns, and lane changes"
    }, {
        "id": 146,
        "es_n": "¿Cuándo debes activar los emergency flashers de tu vehículo?",
        "es": "¿Cuándo debes usar las emergency flashers si tienes un disabled vehicle en la vía?",
        "en": "When should you use your vehicle's emergency flashers?",
        "kt": "emergency flashers",
        "kt_es": "vehículo descompuesto",
        "tc": "disabled vehicle",
        "ops": [
            "Cuando estás en prisa y necesitas pasar rápido", "Cuando tu vehículo está descompuesto en la carretera", "Solo durante tormentas de nieve"
        ],
        "ops_en": [
            "When you're in a hurry and need to pass quickly", "When your vehicle is disabled on the highway", "Only during snowstorms"
        ],
        "ok": "Cuando tu vehículo está descompuesto en la carretera",
        "ok_en": "When your vehicle is disabled on the highway",
        "tc_es": "vehículo descompuesto"
    }, {
        "id": 147,
        "es_n": "Al acercarte a una intersección con peatones, ¿qué debes hacer?",
        "es": "Al acercarte a una intersection con pedestrian traffic, ¿qué debes hacer?",
        "en": "When approaching an intersection with pedestrian traffic, what should you do?",
        "kt": "pedestrian traffic",
        "kt_es": "tráfico peatonal",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Mantener la velocidad normal y priorizar el flujo del tráfico", "Buscar señales de tráfico, tráfico cruzado, peatones y condiciones del camino", "Solo revisar el espejo retrovisor central antes de cruzar"
        ],
        "ops_en": [
            "Maintain normal speed", "Search for traffic controls, cross traffic, pedestrians, and road conditions", "Only check the rearview mirror"
        ],
        "ok": "Buscar señales de tráfico, tráfico cruzado, peatones y condiciones del camino",
        "ok_en": "Search for traffic controls, cross traffic, pedestrians, and road conditions"
    }, {
        "id": 148,
        "es_n": "¿Qué debes hacer si tus emotions están alteradas antes de ponerte al volante?",
        "es": "¿Qué debes hacer si tus emotions están alteradas y son un driving risk antes de manejar?",
        "en": "What should you do if your emotions are upset before driving?",
        "kt": "emotions",
        "kt_es": "emociones",
        "tc": "driving risk",
        "tc_es": "riesgo al manejar",
        "ops": [
            "Manejar rápido para liberar la tensión emocional acumulada", "Esperar hasta que las emociones se calmen antes de manejar", "Tomar una bebida para relajarte antes de conducir"
        ],
        "ops_en": [
            "Drive fast to release tension", "Wait until emotions calm down before driving", "Have a drink to relax"
        ],
        "ok": "Esperar hasta que las emociones se calmen antes de manejar",
        "ok_en": "Wait until emotions calm down before driving"
    }, {
        "id": 149,
        "es_n": "¿En qué lugares está prohibido el backing en la carretera?",
        "es": "¿Está prohibido hacer backing en la freeway o en interestatales?",
        "en": "Where is it prohibited to back up on the road?",
        "kt": "backing",
        "kt_es": "reversa",
        "tc": "freeway",
        "tc_es": "autopista",
        "ops": [
            "En zonas escolares", "En autopistas e interestatales", "En carreteras de dos carriles"
        ],
        "ops_en": [
            "In school zones", "On freeways and interstates", "On two-lane roads"
        ],
        "ok": "En autopistas e interestatales",
        "ok_en": "On freeways and interstates"
    }, {
        "id": 150,
        "es_n": "¿Qué es el proper lane usage al completar un right turn en múltiples carriles?",
        "es": "¿Debes terminar en el curb lane al completar un right turn en una multiple-lane road?",
        "en": "After completing a right turn on a multiple-lane road, which lane should you be in?",
        "kt": "right turn",
        "kt_es": "giro a la derecha",
        "tc": "curb lane",
        "tc_es": "carril junto al bordillo",
        "ops": [
            "El carril más a la izquierda de la carretera", "El carril más a la derecha, junto al bordillo", "El carril central de la vía de múltiples carriles"
        ],
        "ops_en": [
            "The leftmost lane", "The rightmost lane (curb lane)", "The center lane"
        ],
        "ok": "El carril más a la derecha, junto al bordillo",
        "ok_en": "The rightmost lane (curb lane)"
    }, {
        "id": 151,
        "es_n": "¿Cómo debes ajustar tu velocidad en condiciones de adverse weather?",
        "es": "¿Qué ajuste de speed debes hacer en adverse weather conditions?",
        "en": "How should you adjust your speed in adverse weather conditions?",
        "kt": "adverse weather",
        "kt_es": "clima adverso",
        "tc": "speed",
        "tc_es": "velocidad",
        "ops": [
            "Mantener el límite de velocidad publicado", "Reducir la velocidad por debajo del límite publicado", "Aumentar la velocidad para pasar rápido la zona peligrosa"
        ],
        "ops_en": [
            "Maintain the posted speed limit", "Reduce speed below the posted limit", "Increase speed to quickly pass the dangerous area"
        ],
        "ok": "Reducir la velocidad por debajo del límite publicado",
        "ok_en": "Reduce speed below the posted limit"
    }, {
        "id": 152,
        "es_n": "Si te acercas a un peligro en la vía, ¿qué debes hacer con tu velocidad?",
        "es": "Si te acercas a un hazard en la vía, ¿qué debes hacer con tu speed?",
        "en": "If you approach a hazard on the road, what should you do with your speed?",
        "kt": "hazard",
        "kt_es": "peligro",
        "tc": "speed",
        "tc_es": "velocidad",
        "ops": [
            "Solo al acercarte a escuelas y hospitales con señales visibles", "Al acercarte a curvas, cruces, zonas escolares, condiciones peligrosas o con visibilidad limitada", "Nunca se aplica esta regla si no hay señal oficial de límite de velocidad publicada"
        ],
        "ops_en": [
            "Only near schools and hospitals", "When approaching curves, crossings, school zones, hazardous conditions, or limited visibility", "Never if there is no limit sign"
        ],
        "ok": "Al acercarte a curvas, cruces, zonas escolares, condiciones peligrosas o con visibilidad limitada",
        "ok_en": "When approaching curves, crossings, school zones, hazardous conditions, or limited visibility"
    }, {
        "id": 153,
        "es_n": "¿Cuál es la velocidad máxima en autopistas rurales en Utah?",
        "es": "¿Cuál es el maximum speed limit en rural interstate highways en Utah?",
        "en": "What is the maximum speed limit on rural interstate highways in Utah?",
        "kt": "speed limit",
        "kt_es": "límite de velocidad",
        "tc": "rural interstate highways",
        "tc_es": "autopistas rurales",
        "ops": [
            "Entre 65 y 70 mph en todas las secciones rurales", "80 mph en algunas secciones, dependiendo del tramo", "Máximo 75 mph en todo el estado de Utah"
        ],
        "ops_en": [
            "70 mph", "75 mph", "80 mph depending on the section"
        ],
        "ok": "Máximo 75 mph en todo el estado de Utah",
        "ok_en": "80 mph depending on the section"
    }, {
        "id": 154,
        "es_n": "¿Cuándo aplica el límite de 20 mph en zonas escolares?",
        "es": "¿Cuándo aplica el 20 mph speed limit en una school zone?",
        "en": "When does the 20 mph speed limit apply in a school zone?",
        "kt": "school zone",
        "kt_es": "zona escolar",
        "tc": "speed limit",
        "tc_es": "límite de velocidad",
        "ops": [
            "En todas las zonas residenciales cercanas a escuelas", "Al pasar escuelas o durante el recreo y entrada/salida de alumnos", "En zonas de hospitales y centros de salud cercanos"
        ],
        "ops_en": [
            "In residential zones", "When passing school buildings or during recess and arrival/dismissal hours", "In hospital zones"
        ],
        "ok": "Al pasar escuelas o durante el recreo y entrada/salida de alumnos",
        "ok_en": "When passing school buildings or during recess and arrival/dismissal hours"
    }, {
        "id": 155,
        "es_n": "¿Está permitido estacionarse sobre una sidewalk (acera)?",
        "es": "¿Está permitido el parking sobre una sidewalk?",
        "en": "Is parking on a sidewalk permitted?",
        "kt": "sidewalk",
        "kt_es": "acera",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "Sí, si solo bloqueas parcialmente la acera", "No, está prohibido estacionarse sobre la acera", "Solo por un máximo de 5 minutos"
        ],
        "ops_en": [
            "Yes, if you only partially block the sidewalk", "No, parking on the sidewalk is prohibited", "Only for a maximum of 5 minutes"
        ],
        "ok": "No, está prohibido estacionarse sobre la acera",
        "ok_en": "No, parking on the sidewalk is prohibited"
    }, {
        "id": 156,
        "es_n": "¿Está permitido estacionarse bloqueando una entrada privada?",
        "es": "¿Está permitido el parking bloqueando una private driveway?",
        "en": "Is parking while blocking a private driveway allowed?",
        "kt": "parking",
        "kt_es": "estacionarse",
        "tc": "private driveway",
        "tc_es": "entrada privada",
        "ops": [
            "Sí, si el propietario de la propiedad lo permite", "No, está prohibido estacionarse bloqueando una entrada privada", "Solo por un máximo de 30 minutos con luces de emergencia"
        ],
        "ops_en": [
            "Yes if the owner permits it", "No, parking in front of a private driveway is prohibited", "Only for less than 30 minutes"
        ],
        "ok": "No, está prohibido estacionarse bloqueando una entrada privada",
        "ok_en": "No, parking in front of a private driveway is prohibited"
    }, {
        "id": 157,
        "es_n": "¿A qué distancia de la entrada de una fire station está prohibido estacionarse (mismo lado)?",
        "es": "¿A qué distancia en el same side de la fire station está prohibido el parking?",
        "en": "How far from a fire station entrance is parking prohibited on the same side?",
        "kt": "fire station",
        "kt_es": "estación de bomberos",
        "tc": "same side",
        "tc_es": "mismo lado",
        "ops": [
            "10 pies", "20 pies", "No se menciona distancia para el mismo lado"
        ],
        "ops_en": [
            "10 feet", "20 feet", "No distance mentioned for the same side"
        ],
        "ok": "20 pies",
        "ok_en": "20 feet"
    }, {
        "id": 158,
        "es_n": "¿Está permitido hacer double parking en Utah?",
        "es": "¿Está permitido double parking junto a otro vehículo en la roadway en Utah?",
        "en": "Is double parking permitted in Utah?",
        "kt": "double parking",
        "kt_es": "doble estacionamiento",
        "tc": "roadway",
        "tc_es": "carretera",
        "ops": [
            "Sí, pero el tiempo máximo permitido es de 5 minutos solamente", "No, está prohibido estacionarse junto a otro vehículo detenido en la orilla de la vía", "Solo está permitido hacerlo en zonas comerciales con señalización designada"
        ],
        "ops_en": [
            "Yes, for a maximum of 5 minutes", "No, parking alongside another vehicle stopped at the edge is prohibited", "Only in commercial zones"
        ],
        "ok": "No, está prohibido estacionarse junto a otro vehículo detenido en la orilla de la vía",
        "ok_en": "No, parking alongside another vehicle stopped at the edge is prohibited"
    }, {
        "id": 159,
        "es_n": "¿Cuándo está permitido usar el interstate shoulder?",
        "es": "¿Cuándo está permitido usar el interstate shoulder, como en caso de breakdown?",
        "en": "When is the shoulder of an interstate highway permitted to be used?",
        "kt": "interstate shoulder",
        "kt_es": "acotamiento interestatal",
        "tc": "breakdown",
        "tc_es": "descompostura",
        "ops": [
            "Cuando hay tráfico congestionado y no es posible avanzar normalmente", "Solo cuando tu vehículo se descompone o tienes una emergencia física urgente e inmediata", "Cuando necesitas adelantar a otro vehículo en zonas activas de trabajo"
        ],
        "ops_en": [
            "When traffic is congested", "Only when your vehicle breaks down or you have a physical emergency", "To pass in work zones"
        ],
        "ok": "Solo cuando tu vehículo se descompone o tienes una emergencia física urgente e inmediata",
        "ok_en": "Only when your vehicle breaks down or you have a physical emergency"
    }, {
        "id": 160,
        "es_n": "¿Está prohibido estacionarse cerca de una street excavation?",
        "es": "¿Cuándo está prohibido el parking cerca de una street excavation u obstrucción?",
        "en": "When is parking prohibited due to street excavations or obstructions?",
        "kt": "street excavation",
        "kt_es": "excavación en la calle",
        "tc": "parking",
        "tc_es": "estacionamiento",
        "ops": [
            "Solo si hay trabajadores activos y visibles presentes en el área", "Cuando estacionarte bloquearía el flujo normal del tráfico junto a excavaciones u obstrucciones", "Solo en los casos donde haya señales oficiales que lo indiquen expresamente"
        ],
        "ops_en": [
            "Only if workers are present", "When parking would block traffic alongside excavations or obstructions", "Only if there are signs indicating it"
        ],
        "ok": "Cuando estacionarte bloquearía el flujo normal del tráfico junto a excavaciones u obstrucciones",
        "ok_en": "When parking would block traffic alongside excavations or obstructions"
    }, {
        "id": 161,
        "es_n": "¿Qué velocidad debes seguir en el deceleration lane al salir de una autopista?",
        "es": "¿Debes seguir el posted speed al circular por el exit o deceleration lane?",
        "en": "What speed should a driver follow in the exit or deceleration lane?",
        "kt": "deceleration lane",
        "kt_es": "carril de desaceleración",
        "tc": "posted speed",
        "tc_es": "velocidad publicada",
        "ops": [
            "Mantener la velocidad de la autopista hasta la salida", "Verificar y respetar la velocidad publicada en el carril de salida", "Reducir siempre a 25 mph al entrar al carril de salida"
        ],
        "ops_en": [
            "Maintain highway speed", "Check the posted speed in the exit lane", "Always reduce to 25 mph"
        ],
        "ok": "Verificar y respetar la velocidad publicada en el carril de salida",
        "ok_en": "Check the posted speed in the exit lane"
    }, {
        "id": 162,
        "es_n": "¿Qué es la basic speed law de Utah y cómo aplica en condiciones normales?",
        "es": "En no-hazard conditions sin posted speed, ¿qué establece la basic speed law?",
        "en": "What speeds does Utah's basic speed law permit when there is no sign and no special hazards?",
        "kt": "basic speed law",
        "kt_es": "ley básica de velocidad",
        "tc": "no-hazard conditions",
        "tc_es": "condiciones sin peligro",
        "ops": [
            "Solo aplica en autopistas federales y no en calles locales ni residenciales", "20 mph en zonas escolares, 25 mph en áreas residenciales o comerciales, 55 mph en carreteras principales", "El propio conductor puede determinar la velocidad apropiada según el flujo del tráfico"
        ],
        "ops_en": [
            "Only applies on highways, not local streets", "20 mph in school zones, 25 mph in residential/business areas, 55 mph on major highways", "The driver decides based on traffic"
        ],
        "ok": "20 mph en zonas escolares, 25 mph en áreas residenciales o comerciales, 55 mph en carreteras principales",
        "ok_en": "20 mph in school zones, 25 mph in residential/business areas, 55 mph on major highways"
    }, {
        "id": 163,
        "es_n": "¿Cómo se sale correctamente de un espacio de parallel parking?",
        "es": "¿Cuál es el procedimiento correcto para exiting un parallel parking space?",
        "en": "How do you correctly exit a parallel parking space?",
        "kt": "parallel parking",
        "kt_es": "estacionamiento en paralelo",
        "tc": "exiting",
        "tc_es": "salir",
        "ops": [
            "Salir directamente hacia adelante sin revisar el tráfico", "Revisar el tráfico, aplicar el freno, reversa hacia atrás, señalizar y avanzar", "Tocar el claxon y salir rápidamente del espacio de estacionamiento"
        ],
        "ops_en": [
            "Exit directly forward without signaling", "Check traffic, apply brake, reverse toward rear vehicle, signal, and move forward", "Honk and exit quickly"
        ],
        "ok": "Revisar el tráfico, aplicar el freno, reversa hacia atrás, señalizar y avanzar",
        "ok_en": "Check traffic, apply brake, reverse toward rear vehicle, signal, and move forward"
    }, {
        "id": 164,
        "es_n": "¿Cuál es el right lane correcto para manejar si no estás rebasando en carreteras de múltiples carriles?",
        "es": "¿En qué right lane debes manejar en una multi-lane road si no estás rebasando?",
        "en": "Which lane should you be in when not passing on multi-lane roads?",
        "kt": "right lane",
        "kt_es": "carril derecho",
        "tc": "multi-lane road",
        "tc_es": "carretera de varios carriles",
        "ops": [
            "El carril izquierdo", "El carril derecho", "El carril central siempre"
        ],
        "ops_en": [
            "The left lane", "The right lane", "Always the center lane"
        ],
        "ok": "El carril derecho",
        "ok_en": "The right lane"
    }, {
        "id": 165,
        "es_n": "¿Cuándo debes encender los headlights al manejar?",
        "es": "¿Cuándo debes encender los headlights si la visibility al driving es limitada?",
        "en": "When must you turn on your headlights while driving?",
        "kt": "headlights",
        "kt_es": "faros delanteros",
        "tc": "visibility",
        "tc_es": "visibilidad",
        "ops": [
            "Solo en la noche totalmente oscura, a partir de la hora de la medianoche exclusivamente", "Desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer, y cuando la visibilidad sea menor a 1000 pies", "Únicamente cuando hay lluvia activa, nieve en caída o condiciones climáticas muy adversas"
        ],
        "ops_en": [
            "Only in complete darkness after midnight", "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is less than 1000 feet", "Only when it rains or snows"
        ],
        "ok": "Desde 30 minutos después del atardecer hasta 30 minutos antes del amanecer, y cuando la visibilidad sea menor a 1000 pies",
        "ok_en": "From 30 minutes after sunset to 30 minutes before sunrise, and when visibility is less than 1000 feet"
    }, {
        "id": 166,
        "es_n": "¿Qué debes hacer al manejar en condiciones de heavy fog?",
        "es": "¿Qué debes hacer si la visibility es muy baja al manejar con heavy fog?",
        "en": "What should you do when driving in heavy fog with very limited visibility?",
        "kt": "heavy fog",
        "kt_es": "neblina espesa",
        "tc": "visibility",
        "tc_es": "visibilidad",
        "ops": [
            "Usar las luces altas para aumentar el alcance de visibilidad", "Reducir la velocidad, usar las luces bajas y considerar detenerse hasta que mejore", "Manejar en el centro de la carretera para mayor seguridad vial"
        ],
        "ops_en": [
            "Use high beams for better visibility", "Reduce speed, use low beams, and consider pulling over until it improves", "Drive in the center of the road for safety"
        ],
        "ok": "Reducir la velocidad, usar las luces bajas y considerar detenerse hasta que mejore",
        "ok_en": "Reduce speed, use low beams, and consider pulling over until it improves"
    }, {
        "id": 167,
        "es_n": "¿Qué debes hacer si un semáforo cambia a amarillo?",
        "es": "¿Qué debes hacer si un traffic light cambia a yellow?",
        "en": "What should you do if a traffic light turns yellow?",
        "kt": "traffic light",
        "kt_es": "semáforo",
        "tc": "yellow",
        "tc_es": "amarillo",
        "ops": [
            "Prepararte para detenerte si es seguro hacerlo", "Acelerar para cruzar siempre", "Ignorar el cambio de luz"
        ],
        "ops_en": [
            "Prepare to stop if it is safe", "Always accelerate to cross", "Ignore the light change"
        ],
        "ok": "Prepararte para detenerte si es seguro hacerlo",
        "ok_en": "Prepare to stop if it is safe"
    }, {
        "id": 168,
        "es_n": "¿Qué debes hacer al entrar a una autopista?",
        "es": "¿Qué debes hacer al entrar a una highway usando un acceleration lane?",
        "en": "What should you do when entering a highway using an acceleration lane?",
        "kt": "highway",
        "kt_es": "autopista",
        "tc": "acceleration lane",
        "tc_es": "carril de aceleración",
        "ops": [
            "Ajustar tu velocidad al flujo del tráfico", "Detenerte antes de incorporarte", "Entrar lentamente sin acelerar"
        ],
        "ops_en": [
            "Match your speed to traffic flow", "Stop before merging", "Enter slowly without accelerating"
        ],
        "ok": "Ajustar tu velocidad al flujo del tráfico",
        "ok_en": "Match your speed to traffic flow"
    }, {
        "id": 169,
        "es_n": "¿Qué debes hacer si tu vehículo comienza a derrapar?",
        "es": "¿Qué debes hacer si tu vehicle pierde control y empieza a skid?",
        "en": "What should you do if your vehicle starts to skid?",
        "kt": "skid",
        "kt_es": "derrapar",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Girar suavemente en la dirección del derrape", "Frenar bruscamente de inmediato", "Girar el volante en dirección contraria"
        ],
        "ops_en": [
            "Steer gently in the direction of the skid", "Brake hard immediately", "Turn the wheel in the opposite direction"
        ],
        "ok": "Girar suavemente en la dirección del derrape",
        "ok_en": "Steer gently in the direction of the skid"
    }, {
        "id": 170,
        "es_n": "¿Qué debes hacer si otro conductor maneja agresivamente?",
        "es": "¿Qué debes hacer si encuentras aggressive driving en la vía?",
        "en": "What should you do if you encounter aggressive driving on the road?",
        "kt": "aggressive driving",
        "kt_es": "conducción agresiva",
        "tc": "road",
        "tc_es": "vía",
        "ops": [
            "Mantener distancia y evitar confrontación", "Responder de la misma manera", "Bloquear el paso del otro conductor"
        ],
        "ops_en": [
            "Keep distance and avoid confrontation", "Respond in the same way", "Block the other driver"
        ],
        "ok": "Mantener distancia y evitar confrontación",
        "ok_en": "Keep distance and avoid confrontation"
    }, {
        "id": 171,
        "es_n": "¿Qué debes hacer antes de girar en una intersección?",
        "es": "¿Qué debes hacer antes de hacer un turn en una intersection?",
        "en": "What should you do before making a turn at an intersection?",
        "kt": "turn",
        "kt_es": "giro",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Usar la direccional con anticipación", "Girar sin avisar si no hay tráfico", "Reducir velocidad sin señalizar"
        ],
        "ops_en": [
            "Use your turn signal in advance", "Turn without signaling if no traffic", "Slow down without signaling"
        ],
        "ok": "Usar la direccional con anticipación",
        "ok_en": "Use your turn signal in advance"
    }, {
        "id": 172,
        "es_n": "¿Qué debes hacer si te acercas a un cruce sin señales?",
        "es": "¿Qué debes hacer al llegar a un uncontrolled intersection?",
        "en": "What should you do when approaching an uncontrolled intersection?",
        "kt": "uncontrolled intersection",
        "kt_es": "intersección sin señales",
        "tc": "approaching",
        "tc_es": "acercarte",
        "ops": [
            "Ceder el paso a quien llegue primero", "Acelerar para cruzar primero", "Ignorar a otros conductores"
        ],
        "ops_en": [
            "Yield to the driver who arrived first", "Accelerate to cross first", "Ignore other drivers"
        ],
        "ok": "Ceder el paso a quien llegue primero",
        "ok_en": "Yield to the driver who arrived first"
    }, {
        "id": 173,
        "es_n": "¿Qué debes hacer al estacionarte en una pendiente?",
        "es": "¿Qué debes hacer al hacer parking en una hill?",
        "en": "What should you do when parking on a hill?",
        "kt": "parking",
        "kt_es": "estacionarte",
        "tc": "hill",
        "tc_es": "pendiente",
        "ops": [
            "Girar las ruedas según la dirección de la pendiente", "Dejar las ruedas rectas siempre", "Apagar el motor sin asegurar el vehículo"
        ],
        "ops_en": [
            "Turn wheels based on slope direction", "Always leave wheels straight", "Turn off engine without securing vehicle"
        ],
        "ok": "Girar las ruedas según la dirección de la pendiente",
        "ok_en": "Turn wheels based on slope direction"
    }, {
        "id": 174,
        "es_n": "¿Qué debes hacer si un vehículo delante de ti frena de repente?",
        "es": "¿Qué debes hacer si un vehicle ahead brakes suddenly?",
        "en": "What should you do if a vehicle ahead brakes suddenly?",
        "kt": "vehicle ahead",
        "kt_es": "vehículo adelante",
        "tc": "brakes suddenly",
        "tc_es": "frena de repente",
        "ops": [
            "Frenar de manera controlada y mantener distancia", "Acelerar para evitar choque", "Girar bruscamente sin verificar"
        ],
        "ops_en": [
            "Brake smoothly and maintain distance", "Accelerate to avoid collision", "Turn sharply without checking"
        ],
        "ok": "Frenar de manera controlada y mantener distancia",
        "ok_en": "Brake smoothly and maintain distance"
    }, {
        "id": 175,
        "es_n": "¿Qué debes hacer si conduces de noche?",
        "es": "¿Qué debes hacer cuando haces night driving?",
        "en": "What should you do when driving at night?",
        "kt": "night driving",
        "kt_es": "conducción nocturna",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Usar luces adecuadas y reducir velocidad", "Apagar luces en zonas oscuras", "Aumentar velocidad para ver mejor"
        ],
        "ops_en": [
            "Use proper lights and reduce speed", "Turn off lights in dark areas", "Increase speed to see better"
        ],
        "ok": "Usar luces adecuadas y reducir velocidad",
        "ok_en": "Use proper lights and reduce speed"
    }, {
        "id": 176,
        "es_n": "¿Qué debes hacer si ves una señal de límite de velocidad?",
        "es": "¿Qué debes hacer al ver un speed limit sign?",
        "en": "What should you do when you see a speed limit sign?",
        "kt": "speed limit",
        "kt_es": "límite de velocidad",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Ajustar tu velocidad al límite indicado", "Ignorar la señal si no hay tráfico", "Superar el límite si la vía está libre"
        ],
        "ops_en": [
            "Adjust your speed to the posted limit", "Ignore it if no traffic", "Exceed it if the road is clear"
        ],
        "ok": "Ajustar tu velocidad al límite indicado",
        "ok_en": "Adjust your speed to the posted limit"
    }, {
        "id": 177,
        "es_n": "¿Qué debes hacer si necesitas cambiar de dirección en una calle de un solo sentido?",
        "es": "¿Qué debes hacer si necesitas cambiar de dirección en una one-way street?",
        "en": "What should you do if you need to change direction on a one-way street?",
        "kt": "one-way street",
        "kt_es": "calle de un solo sentido",
        "tc": "change direction",
        "tc_es": "cambiar de dirección",
        "ops": [
            "Seguir las señales y girar solo donde esté permitido", "Dar vuelta en cualquier punto si no viene tráfico", "Manejar en sentido contrario por un tramo corto"
        ],
        "ops_en": [
            "Follow the signs and turn only where allowed", "Turn around anywhere if no traffic is coming", "Drive the wrong way for a short distance"
        ],
        "ok": "Seguir las señales y girar solo donde esté permitido",
        "ok_en": "Follow the signs and turn only where allowed"
    }, {
        "id": 178,
        "es_n": "¿Qué debes hacer antes de incorporarte al tráfico desde una entrada privada?",
        "es": "¿Qué debes hacer antes de incorporarte al traffic desde una private driveway?",
        "en": "What should you do before entering traffic from a private driveway?",
        "kt": "traffic",
        "kt_es": "tráfico",
        "tc": "private driveway",
        "tc_es": "entrada privada",
        "ops": [
            "Ceder el paso a peatones y vehículos que ya circulan", "Entrar rápido antes de que se acerquen otros vehículos", "Tocar el claxon y avanzar de inmediato"
        ],
        "ops_en": [
            "Yield to pedestrians and vehicles already moving", "Enter quickly before other vehicles get closer", "Honk and move forward immediately"
        ],
        "ok": "Ceder el paso a peatones y vehículos que ya circulan",
        "ok_en": "Yield to pedestrians and vehicles already moving"
    }, {
        "id": 179,
        "es_n": "¿Qué debes hacer si tus luces altas afectan a otro conductor?",
        "es": "¿Qué debes hacer si tus high beams afectan a otro driver?",
        "en": "What should you do if your high beams affect another driver?",
        "kt": "high beams",
        "kt_es": "luces altas",
        "tc": "driver",
        "tc_es": "conductor",
        "ops": [
            "Cambiar a luces bajas para no deslumbrarlo", "Mantener las luces altas para ver mejor", "Apagar todas las luces por unos segundos"
        ],
        "ops_en": [
            "Switch to low beams to avoid blinding them", "Keep the high beams on to see better", "Turn off all lights for a few seconds"
        ],
        "ok": "Cambiar a luces bajas para no deslumbrarlo",
        "ok_en": "Switch to low beams to avoid blinding them"
    }, {
        "id": 180,
        "es_n": "¿Qué debes hacer si ves una señal de ceder el paso?",
        "es": "¿Qué debes hacer si ves una yield sign?",
        "en": "What should you do if you see a yield sign?",
        "kt": "yield sign",
        "kt_es": "señal de ceder el paso",
        "tc": "see",
        "tc_es": "ves",
        "ops": [
            "Reducir la velocidad y ceder el paso si es necesario", "Detenerte siempre aunque no haya tráfico", "Continuar sin mirar si tienes espacio"
        ],
        "ops_en": [
            "Slow down and yield if necessary", "Always stop even if there is no traffic", "Continue without looking if there is space"
        ],
        "ok": "Reducir la velocidad y ceder el paso si es necesario",
        "ok_en": "Slow down and yield if necessary"
    }, {
        "id": 181,
        "es_n": "¿Qué debes hacer si tu visibilidad es limitada por niebla?",
        "es": "¿Qué debes hacer si tu visibility es limitada por fog?",
        "en": "What should you do if your visibility is limited by fog?",
        "kt": "visibility",
        "kt_es": "visibilidad",
        "tc": "fog",
        "tc_es": "niebla",
        "ops": [
            "Reducir la velocidad y usar luces apropiadas", "Aumentar la velocidad para salir de la niebla", "Usar luces altas para ver más lejos"
        ],
        "ops_en": [
            "Reduce speed and use appropriate lights", "Increase speed to get out of the fog", "Use high beams to see farther"
        ],
        "ok": "Reducir la velocidad y usar luces apropiadas",
        "ok_en": "Reduce speed and use appropriate lights"
    }, {
        "id": 182,
        "es_n": "¿Qué debes hacer si un peatón comienza a cruzar frente a tu vehículo?",
        "es": "¿Qué debes hacer si un pedestrian comienza a cruzar frente a tu vehicle?",
        "en": "What should you do if a pedestrian starts crossing in front of your vehicle?",
        "kt": "pedestrian",
        "kt_es": "peatón",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Detenerte y permitir que cruce con seguridad", "Seguir avanzando si ya estabas en movimiento", "Tocar el claxon y continuar despacio"
        ],
        "ops_en": [
            "Stop and allow them to cross safely", "Keep going if you were already moving", "Honk and continue slowly"
        ],
        "ok": "Detenerte y permitir que cruce con seguridad",
        "ok_en": "Stop and allow them to cross safely"
    }, {
        "id": 183,
        "es_n": "¿Qué debes hacer si necesitas dar vuelta en una intersección?",
        "es": "¿Qué debes hacer si necesitas make a turn en una intersection?",
        "en": "What should you do if you need to make a turn at an intersection?",
        "kt": "turn",
        "kt_es": "dar vuelta",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Señalizar con anticipación y colocarte en el carril correcto", "Frenar de golpe y girar desde cualquier carril", "Esperar a mitad de la intersección para decidir"
        ],
        "ops_en": [
            "Signal in advance and move into the correct lane", "Brake suddenly and turn from any lane", "Wait in the middle of the intersection to decide"
        ],
        "ok": "Señalizar con anticipación y colocarte en el carril correcto",
        "ok_en": "Signal in advance and move into the correct lane"
    }, {
        "id": 184,
        "es_n": "¿Qué debes hacer si vas a rebasar a un ciclista?",
        "es": "¿Qué debes hacer si vas a pass a bicyclist?",
        "en": "What should you do if you are going to pass a bicyclist?",
        "kt": "bicyclist",
        "kt_es": "ciclista",
        "tc": "pass",
        "tc_es": "rebasar",
        "ops": [
            "Dejar suficiente espacio lateral al pasar", "Pasar lo más cerca posible para volver rápido al carril", "Tocar el claxon y seguir sin reducir velocidad"
        ],
        "ops_en": [
            "Leave enough lateral space when passing", "Pass as close as possible to return quickly to the lane", "Honk and continue without slowing down"
        ],
        "ok": "Dejar suficiente espacio lateral al pasar",
        "ok_en": "Leave enough lateral space when passing"
    }, {
        "id": 185,
        "es_n": "¿Qué debes hacer si te acercas a una zona de construcción?",
        "es": "¿Qué debes hacer si te acercas a una construction zone?",
        "en": "What should you do if you approach a construction zone?",
        "kt": "construction zone",
        "kt_es": "zona de construcción",
        "tc": "approach",
        "tc_es": "te acercas",
        "ops": [
            "Reducir la velocidad y seguir las señales temporales", "Mantener la velocidad para no retrasar el tráfico", "Cambiar de carril sin revisar si hay trabajadores"
        ],
        "ops_en": [
            "Reduce speed and follow temporary signs", "Maintain speed to avoid delaying traffic", "Change lanes without checking for workers"
        ],
        "ok": "Reducir la velocidad y seguir las señales temporales",
        "ok_en": "Reduce speed and follow temporary signs"
    }, {
        "id": 186,
        "es_n": "¿Qué debes hacer si te acercas demasiado al vehículo de adelante?",
        "es": "¿Qué debes hacer si te acercas demasiado al vehicle ahead?",
        "en": "What should you do if you get too close to the vehicle ahead?",
        "kt": "vehicle ahead",
        "kt_es": "vehículo de adelante",
        "tc": "too close",
        "tc_es": "demasiado cerca",
        "ops": [
            "Aumentar tu distancia de seguimiento", "Mantenerte cerca para evitar que entren otros autos", "Acelerar para rebasarlo de inmediato"
        ],
        "ops_en": [
            "Increase your following distance", "Stay close to prevent other cars from entering", "Speed up to pass immediately"
        ],
        "ok": "Aumentar tu distancia de seguimiento",
        "ok_en": "Increase your following distance"
    }, {
        "id": 187,
        "es_n": "¿Qué debes hacer si un semáforo está apagado en una intersección?",
        "es": "¿Qué debes hacer si un traffic light está apagado en una intersection?",
        "en": "What should you do if a traffic light is not working at an intersection?",
        "kt": "traffic light",
        "kt_es": "semáforo",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Tratar la intersección como un alto de cuatro vías", "Continuar sin detenerte si no ves tráfico", "Acelerar para cruzar rápidamente"
        ],
        "ops_en": [
            "Treat the intersection as a four-way stop", "Continue without stopping if no traffic is visible", "Accelerate to cross quickly"
        ],
        "ok": "Tratar la intersección como un alto de cuatro vías",
        "ok_en": "Treat the intersection as a four-way stop"
    }, {
        "id": 188,
        "es_n": "¿Qué debes hacer si un vehículo de emergencia se acerca por detrás?",
        "es": "¿Qué debes hacer si un emergency vehicle se acerca por detrás con siren?",
        "en": "What should you do if an emergency vehicle approaches from behind with a siren?",
        "kt": "emergency vehicle",
        "kt_es": "vehículo de emergencia",
        "tc": "siren",
        "tc_es": "sirena",
        "ops": [
            "Orillarte y detenerte para ceder el paso", "Mantener tu carril y velocidad", "Acelerar para alejarte del vehículo"
        ],
        "ops_en": [
            "Pull over and stop to yield", "Maintain your lane and speed", "Accelerate to get away"
        ],
        "ok": "Orillarte y detenerte para ceder el paso",
        "ok_en": "Pull over and stop to yield"
    }, {
        "id": 189,
        "es_n": "¿Qué debes hacer si estás en un carril exclusivo para girar?",
        "es": "¿Qué debes hacer si estás en un turn lane exclusivo?",
        "en": "What should you do if you are in a designated turn lane?",
        "kt": "turn lane",
        "kt_es": "carril de giro",
        "tc": "designated",
        "tc_es": "exclusivo",
        "ops": [
            "Usarlo solo para girar en la dirección indicada", "Continuar recto si no hay tráfico", "Cambiar de carril sin señalizar"
        ],
        "ops_en": [
            "Use it only to turn in the indicated direction", "Go straight if there is no traffic", "Change lanes without signaling"
        ],
        "ok": "Usarlo solo para girar en la dirección indicada",
        "ok_en": "Use it only to turn in the indicated direction"
    }, {
        "id": 190,
        "es_n": "¿Qué debes hacer si tus frenos dejan de funcionar?",
        "es": "¿Qué debes hacer si tus brakes fall mientras conduces?",
        "en": "What should you do if your brakes fail while driving?",
        "kt": "brakes",
        "kt_es": "frenos",
        "tc": "fail",
        "tc_es": "fallan",
        "ops": [
            "Reducir velocidad gradualmente y usar el freno de emergencia", "Apagar el motor inmediatamente", "Acelerar para mantener control"
        ],
        "ops_en": [
            "Slow down gradually and use the emergency brake", "Turn off the engine immediately", "Accelerate to maintain control"
        ],
        "ok": "Reducir velocidad gradualmente y usar el freno de emergencia",
        "ok_en": "Slow down gradually and use the emergency brake"
    }, {
        "id": 191,
        "es_n": "¿Qué debes hacer si una señal indica no girar en rojo?",
        "es": "¿Qué debes hacer si una sign indica no turn on red?",
        "en": "What should you do if a sign indicates no turn on red?",
        "kt": "turn on red",
        "kt_es": "girar en rojo",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Esperar a que la luz cambie antes de girar", "Girar si no hay tráfico visible", "Avanzar lentamente sin detenerte"
        ],
        "ops_en": [
            "Wait until the light changes before turning", "Turn if no traffic is visible", "Move forward slowly without stopping"
        ],
        "ok": "Esperar a que la luz cambie antes de girar",
        "ok_en": "Wait until the light changes before turning"
    }, {
        "id": 192,
        "es_n": "¿Qué debes hacer si conduces en una carretera resbaladiza?",
        "es": "¿Qué debes hacer si conduces en una slippery road?",
        "en": "What should you do if you are driving on a slippery road?",
        "kt": "slippery road",
        "kt_es": "carretera resbaladiza",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir la velocidad y evitar movimientos bruscos", "Acelerar para mantener tracción", "Frenar bruscamente en todo momento"
        ],
        "ops_en": [
            "Reduce speed and avoid sudden movements", "Accelerate to maintain traction", "Brake hard at all times"
        ],
        "ok": "Reducir la velocidad y evitar movimientos bruscos",
        "ok_en": "Reduce speed and avoid sudden movements"
    }, {
        "id": 193,
        "es_n": "¿Qué debes hacer si te acercas a una curva cerrada?",
        "es": "¿Qué debes hacer si te acercas a una sharp curve?",
        "en": "What should you do when approaching a sharp curve?",
        "kt": "sharp curve",
        "kt_es": "curva cerrada",
        "tc": "approaching",
        "tc_es": "acercarte",
        "ops": [
            "Reducir la velocidad antes de entrar a la curva", "Acelerar dentro de la curva", "Frenar bruscamente a mitad de la curva"
        ],
        "ops_en": [
            "Reduce speed before entering the curve", "Accelerate inside the curve", "Brake hard in the middle of the curve"
        ],
        "ok": "Reducir la velocidad antes de entrar a la curva",
        "ok_en": "Reduce speed before entering the curve"
    }, {
        "id": 194,
        "es_n": "¿Qué debes hacer si otro conductor invade tu carril?",
        "es": "¿Qué debes hacer si otro driver invade tu lane?",
        "en": "What should you do if another driver enters your lane?",
        "kt": "driver",
        "kt_es": "conductor",
        "tc": "lane",
        "tc_es": "carril",
        "ops": [
            "Reducir velocidad y mantener control del vehículo", "Acelerar para evitarlo", "Girar bruscamente sin verificar"
        ],
        "ops_en": [
            "Slow down and maintain control", "Accelerate to avoid them", "Turn sharply without checking"
        ],
        "ok": "Reducir velocidad y mantener control del vehículo",
        "ok_en": "Slow down and maintain control"
    }, {
        "id": 195,
        "es_n": "¿Qué debes hacer si ves una señal de advertencia?",
        "es": "¿Qué debes hacer si ves una warning sign?",
        "en": "What should you do if you see a warning sign?",
        "kt": "warning sign",
        "kt_es": "señal de advertencia",
        "tc": "see",
        "tc_es": "ves",
        "ops": [
            "Estar atento y prepararte para condiciones cambiantes", "Ignorarla si no hay peligro inmediato", "Acelerar para pasar rápido"
        ],
        "ops_en": [
            "Stay alert and prepare for changing conditions", "Ignore it if there is no immediate danger", "Accelerate to pass quickly"
        ],
        "ok": "Estar atento y prepararte para condiciones cambiantes",
        "ok_en": "Stay alert and prepare for changing conditions"
    }, {
        "id": 196,
        "es_n": "¿Qué debes hacer si manejas en tráfico pesado?",
        "es": "¿Qué debes hacer si conduces en heavy traffic?",
        "en": "What should you do when driving in heavy traffic?",
        "kt": "heavy traffic",
        "kt_es": "tráfico pesado",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener distancia y evitar cambios bruscos", "Cambiar de carril constantemente", "Acelerar para salir del tráfico"
        ],
        "ops_en": [
            "Maintain distance and avoid sudden changes", "Change lanes constantly", "Accelerate to get out of traffic"
        ],
        "ok": "Mantener distancia y evitar cambios bruscos",
        "ok_en": "Maintain distance and avoid sudden changes"
    }, {
        "id": 197,
        "es_n": "¿Qué debes hacer si necesitas detenerte en una carretera?",
        "es": "¿Qué debes hacer si necesitas detenerte en una roadway usando hazard lights?",
        "en": "What should you do if you need to stop on a roadway using hazard lights?",
        "kt": "hazard lights",
        "kt_es": "luces de emergencia",
        "tc": "roadway",
        "tc_es": "carretera",
        "ops": [
            "Activarlas para alertar a otros conductores", "Apagar todas las luces del vehículo", "Solo usarlas de noche"
        ],
        "ops_en": [
            "Turn them on to alert other drivers", "Turn off all vehicle lights", "Use them only at night"
        ],
        "ok": "Activarlas para alertar a otros conductores",
        "ok_en": "Turn them on to alert other drivers"
    }, {
        "id": 198,
        "es_n": "¿Qué debes hacer si te acercas a un tren detenido?",
        "es": "¿Qué debes hacer si te acercas a un stopped train en un railroad crossing?",
        "en": "What should you do if you approach a stopped train at a railroad crossing?",
        "kt": "railroad crossing",
        "kt_es": "cruce de ferrocarril",
        "tc": "stopped train",
        "tc_es": "tren detenido",
        "ops": [
            "Esperar hasta que el tren se mueva y sea seguro cruzar", "Rodear el tren si no viene otro", "Cruzar rápidamente entre vagones"
        ],
        "ops_en": [
            "Wait until the train moves and it is safe", "Go around the train if no other is coming", "Cross quickly between railcars"
        ],
        "ok": "Esperar hasta que el tren se mueva y sea seguro cruzar",
        "ok_en": "Wait until the train moves and it is safe"
    }, {
        "id": 199,
        "es_n": "¿Qué debes hacer si una luz verde cambia a amarillo mientras estás muy cerca?",
        "es": "¿Qué debes hacer si un green light cambia a yellow cuando estás muy cerca?",
        "en": "What should you do if a green light turns yellow when you are too close to stop safely?",
        "kt": "green light",
        "kt_es": "luz verde",
        "tc": "yellow",
        "tc_es": "amarillo",
        "ops": [
            "Continuar si detenerte no es seguro", "Detenerte bruscamente sin importar la distancia", "Acelerar siempre para cruzar"
        ],
        "ops_en": [
            "Proceed if stopping is not safe", "Stop abruptly regardless of distance", "Always accelerate to cross"
        ],
        "ok": "Continuar si detenerte no es seguro",
        "ok_en": "Proceed if stopping is not safe"
    }, {
        "id": 200,
        "es_n": "¿Qué debes hacer si ves una señal de no estacionarse?",
        "es": "¿Qué debes hacer si ves una no parking sign?",
        "en": "What should you do if you see a no parking sign?",
        "kt": "no parking",
        "kt_es": "no estacionarse",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "No estacionarte en esa área", "Estacionarte por poco tiempo", "Estacionarte si no hay vigilancia"
        ],
        "ops_en": [
            "Do not park in that area", "Park for a short time", "Park if no one is watching"
        ],
        "ok": "No estacionarte en esa área",
        "ok_en": "Do not park in that area"
    }, {
        "id": 201,
        "es_n": "¿Qué debes hacer si otro conductor intenta rebasarte?",
        "es": "¿Qué debes hacer si otro driver intenta passing tu vehículo?",
        "en": "What should you do if another driver attempts to pass your vehicle?",
        "kt": "passing",
        "kt_es": "rebasar",
        "tc": "driver",
        "tc_es": "conductor",
        "ops": [
            "Mantener velocidad y permitir que pase", "Aumentar velocidad para impedirlo", "Moverte al centro del carril"
        ],
        "ops_en": [
            "Maintain speed and allow passing", "Increase speed to block them", "Move to the center of the lane"
        ],
        "ok": "Mantener velocidad y permitir que pase",
        "ok_en": "Maintain speed and allow passing"
    }, {
        "id": 202,
        "es_n": "¿Qué debes hacer si conduces cerca de un vehículo grande?",
        "es": "¿Qué debes hacer si conduces cerca de un large truck con blind spots?",
        "en": "What should you do when driving near a large truck with blind spots?",
        "kt": "blind spots",
        "kt_es": "puntos ciegos",
        "tc": "large truck",
        "tc_es": "camión grande",
        "ops": [
            "Evitar permanecer en sus puntos ciegos", "Conducir junto a él constantemente", "Acelerar sin mirar alrededor"
        ],
        "ops_en": [
            "Avoid staying in its blind spots", "Drive next to it constantly", "Accelerate without checking"
        ],
        "ok": "Evitar permanecer en sus puntos ciegos",
        "ok_en": "Avoid staying in its blind spots"
    }, {
        "id": 203,
        "es_n": "¿Qué debes hacer si te acercas a una zona con niños jugando?",
        "es": "¿Qué debes hacer si te acercas a un area con children playing?",
        "en": "What should you do when approaching an area with children playing?",
        "kt": "children",
        "kt_es": "niños",
        "tc": "playing",
        "tc_es": "jugando",
        "ops": [
            "Reducir velocidad y estar listo para detenerte", "Mantener velocidad constante", "Tocar el claxon y continuar"
        ],
        "ops_en": [
            "Reduce speed and be ready to stop", "Maintain constant speed", "Honk and continue"
        ],
        "ok": "Reducir velocidad y estar listo para detenerte",
        "ok_en": "Reduce speed and be ready to stop"
    }, {
        "id": 204,
        "es_n": "¿Qué debes hacer si pierdes visibilidad por el sol?",
        "es": "¿Qué debes hacer si pierdes visibility por sun glare?",
        "en": "What should you do if you lose visibility due to sun glare?",
        "kt": "visibility",
        "kt_es": "visibilidad",
        "tc": "sun glare",
        "tc_es": "deslumbramiento solar",
        "ops": [
            "Reducir velocidad y usar viseras o lentes", "Acelerar para salir rápido", "Cerrar los ojos momentáneamente"
        ],
        "ops_en": [
            "Reduce speed and use visor or glasses", "Accelerate to get through quickly", "Close your eyes briefly"
        ],
        "ok": "Reducir velocidad y usar viseras o lentes",
        "ok_en": "Reduce speed and use visor or glasses"
    }, {
        "id": 205,
        "es_n": "¿Qué debes hacer si tu vehículo se sale parcialmente del camino?",
        "es": "¿Qué debes hacer si tu vehicle sale de la road parcialmente?",
        "en": "What should you do if your vehicle partially leaves the road?",
        "kt": "vehicle",
        "kt_es": "vehículo",
        "tc": "road",
        "tc_es": "camino",
        "ops": [
            "Reducir velocidad y regresar con cuidado", "Girar bruscamente para volver", "Acelerar para reincorporarte rápido"
        ],
        "ops_en": [
            "Slow down and return carefully", "Turn sharply to get back", "Accelerate to re-enter quickly"
        ],
        "ok": "Reducir velocidad y regresar con cuidado",
        "ok_en": "Slow down and return carefully"
    }, {
        "id": 206,
        "es_n": "¿Qué debes hacer si necesitas cambiar de carril en tráfico?",
        "es": "¿Qué debes hacer si necesitas change lanes en traffic?",
        "en": "What should you do if you need to change lanes in traffic?",
        "kt": "change lanes",
        "kt_es": "cambiar de carril",
        "tc": "traffic",
        "tc_es": "tráfico",
        "ops": [
            "Señalizar y verificar antes de moverte", "Moverte sin avisar si hay espacio", "Acelerar sin revisar espejos"
        ],
        "ops_en": [
            "Signal and check before moving", "Move without signaling if there is space", "Accelerate without checking mirrors"
        ],
        "ok": "Señalizar y verificar antes de moverte",
        "ok_en": "Signal and check before moving"
    }, {
        "id": 207,
        "es_n": "¿Qué debes hacer si te acercas a una señal de curva peligrosa?",
        "es": "¿Qué debes hacer si te acercas a una sharp curve warning?",
        "en": "What should you do when approaching a sharp curve warning?",
        "kt": "sharp curve",
        "kt_es": "curva peligrosa",
        "tc": "warning",
        "tc_es": "advertencia",
        "ops": [
            "Reducir la velocidad antes de entrar a la curva", "Acelerar para salir más rápido", "Frenar bruscamente dentro de la curva"
        ],
        "ops_en": [
            "Reduce speed before entering the curve", "Accelerate to exit faster", "Brake hard inside the curve"
        ],
        "ok": "Reducir la velocidad antes de entrar a la curva",
        "ok_en": "Reduce speed before entering the curve"
    }, {
        "id": 208,
        "es_n": "¿Qué debes hacer si un vehículo se incorpora delante de ti?",
        "es": "¿Qué debes hacer si un vehicle merge delante de ti?",
        "en": "What should you do if a vehicle merges in front of you?",
        "kt": "merge",
        "kt_es": "incorporarse",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Ajustar tu velocidad para mantener distancia segura", "Acelerar para evitar que entre", "Frenar bruscamente sin necesidad"
        ],
        "ops_en": [
            "Adjust speed to maintain safe distance", "Accelerate to block entry", "Brake hard unnecessarily"
        ],
        "ok": "Ajustar tu velocidad para mantener distancia segura",
        "ok_en": "Adjust speed to maintain safe distance"
    }, {
        "id": 209,
        "es_n": "¿Qué debes hacer si ves una señal de carril cerrado?",
        "es": "¿Qué debes hacer si ves una lane closed sign?",
        "en": "What should you do if you see a lane closed sign?",
        "kt": "lane closed",
        "kt_es": "carril cerrado",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Cambiar de carril de forma segura", "Continuar en el carril cerrado", "Acelerar antes del cierre"
        ],
        "ops_en": [
            "Change lanes safely", "Continue in the closed lane", "Accelerate before the closure"
        ],
        "ok": "Cambiar de carril de forma segura",
        "ok_en": "Change lanes safely"
    }, {
        "id": 210,
        "es_n": "¿Qué debes hacer si te acercas a un paso peatonal con visibilidad limitada?",
        "es": "¿Qué debes hacer si te acercas a un crosswalk con limited visibility?",
        "en": "What should you do when approaching a crosswalk with limited visibility?",
        "kt": "crosswalk",
        "kt_es": "paso peatonal",
        "tc": "limited visibility",
        "tc_es": "visibilidad limitada",
        "ops": [
            "Reducir velocidad y estar listo para detenerte", "Mantener velocidad constante", "Acelerar para cruzar rápido"
        ],
        "ops_en": [
            "Reduce speed and be ready to stop", "Maintain constant speed", "Accelerate to cross quickly"
        ],
        "ok": "Reducir velocidad y estar listo para detenerte",
        "ok_en": "Reduce speed and be ready to stop"
    }, {
        "id": 211,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de animales?",
        "es": "¿Qué debes hacer si ves una animal crossing sign?",
        "en": "What should you do if you see an animal crossing sign?",
        "kt": "animal crossing",
        "kt_es": "cruce de animales",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y estar atento", "Ignorar la señal si no ves animales", "Acelerar para salir rápido"
        ],
        "ops_en": [
            "Reduce speed and stay alert", "Ignore it if you do not see animals", "Accelerate to get through quickly"
        ],
        "ok": "Reducir velocidad y estar atento",
        "ok_en": "Reduce speed and stay alert"
    }, {
        "id": 212,
        "es_n": "¿Qué debes hacer si otro conductor te sigue demasiado cerca?",
        "es": "¿Qué debes hacer si otro driver te sigue too close?",
        "en": "What should you do if another driver is following too close?",
        "kt": "too close",
        "kt_es": "demasiado cerca",
        "tc": "driver",
        "tc_es": "conductor",
        "ops": [
            "Aumentar tu distancia con el vehículo de adelante", "Frenar bruscamente para advertirle", "Acelerar para alejarte rápidamente"
        ],
        "ops_en": [
            "Increase distance from the vehicle ahead", "Brake suddenly to warn them", "Accelerate to get away quickly"
        ],
        "ok": "Aumentar tu distancia con el vehículo de adelante",
        "ok_en": "Increase distance from the vehicle ahead"
    }, {
        "id": 213,
        "es_n": "¿Qué debes hacer si necesitas detenerte en una curva?",
        "es": "¿Qué debes hacer si necesitas stop en una curve?",
        "en": "What should you do if you need to stop on a curve?",
        "kt": "stop",
        "kt_es": "detenerte",
        "tc": "curve",
        "tc_es": "curva",
        "ops": [
            "Evitar detenerte y buscar un lugar seguro", "Detenerte inmediatamente en la curva", "Apagar las luces al detenerte"
        ],
        "ops_en": [
            "Avoid stopping and find a safe place", "Stop immediately on the curve", "Turn off lights when stopping"
        ],
        "ok": "Evitar detenerte y buscar un lugar seguro",
        "ok_en": "Avoid stopping and find a safe place"
    }, {
        "id": 214,
        "es_n": "¿Qué debes hacer si te acercas a una señal de puente angosto?",
        "es": "¿Qué debes hacer si te acercas a un narrow bridge warning?",
        "en": "What should you do when approaching a narrow bridge warning?",
        "kt": "narrow bridge",
        "kt_es": "puente angosto",
        "tc": "warning",
        "tc_es": "advertencia",
        "ops": [
            "Reducir velocidad y ceder el paso si es necesario", "Acelerar para cruzar primero", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and yield if necessary", "Accelerate to cross first", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y ceder el paso si es necesario",
        "ok_en": "Reduce speed and yield if necessary"
    }, {
        "id": 215,
        "es_n": "¿Qué debes hacer si manejas en una zona con viento fuerte?",
        "es": "¿Qué debes hacer si conduces en strong wind conditions?",
        "en": "What should you do when driving in strong wind conditions?",
        "kt": "strong wind",
        "kt_es": "viento fuerte",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Sujetar firmemente el volante y reducir velocidad", "Aumentar velocidad para mantener control", "Soltar el volante para relajarte"
        ],
        "ops_en": [
            "Hold the wheel firmly and reduce speed", "Increase speed to maintain control", "Release the wheel to relax"
        ],
        "ok": "Sujetar firmemente el volante y reducir velocidad",
        "ok_en": "Hold the wheel firmly and reduce speed"
    }, {
        "id": 216,
        "es_n": "¿Qué debes hacer si ves una señal de resbaloso cuando está mojado?",
        "es": "¿Qué debes hacer si ves una slippery when wet sign?",
        "en": "What should you do if you see a slippery when wet sign?",
        "kt": "slippery when wet",
        "kt_es": "resbaloso cuando está mojado",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y evitar movimientos bruscos", "Acelerar para pasar rápido", "Frenar bruscamente constantemente"
        ],
        "ops_en": [
            "Reduce speed and avoid sudden movements", "Accelerate to get through quickly", "Brake hard constantly"
        ],
        "ok": "Reducir velocidad y evitar movimientos bruscos",
        "ok_en": "Reduce speed and avoid sudden movements"
    }, {
        "id": 217,
        "es_n": "¿Qué debes hacer si ves una señal de zona escolar?",
        "es": "¿Qué debes hacer si ves una school zone sign?",
        "en": "What should you do if you see a school zone sign?",
        "kt": "school zone",
        "kt_es": "zona escolar",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y estar atento a peatones", "Mantener velocidad si no ves niños", "Acelerar para salir rápido del área"
        ],
        "ops_en": [
            "Reduce speed and watch for pedestrians", "Maintain speed if no children are visible", "Accelerate to leave the area quickly"
        ],
        "ok": "Reducir velocidad y estar atento a peatones",
        "ok_en": "Reduce speed and watch for pedestrians"
    }, {
        "id": 218,
        "es_n": "¿Qué debes hacer si un carril termina adelante?",
        "es": "¿Qué debes hacer si un lane ends adelante?",
        "en": "What should you do if a lane ends ahead?",
        "kt": "lane ends",
        "kt_es": "carril termina",
        "tc": "ahead",
        "tc_es": "adelante",
        "ops": [
            "Cambiar de carril con anticipación", "Esperar hasta el último momento para moverte", "Detenerte en el carril"
        ],
        "ops_en": [
            "Change lanes early", "Wait until the last moment to move", "Stop in the lane"
        ],
        "ok": "Cambiar de carril con anticipación",
        "ok_en": "Change lanes early"
    }, {
        "id": 219,
        "es_n": "¿Qué debes hacer si te acercas a una señal de cruce ferroviario?",
        "es": "¿Qué debes hacer si te acercas a un railroad crossing sign?",
        "en": "What should you do when approaching a railroad crossing sign?",
        "kt": "railroad crossing",
        "kt_es": "cruce ferroviario",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y prepararte para detenerte", "Acelerar para cruzar antes del tren", "Ignorar la señal si no ves tren"
        ],
        "ops_en": [
            "Reduce speed and prepare to stop", "Accelerate to cross before the train", "Ignore it if no train is visible"
        ],
        "ok": "Reducir velocidad y prepararte para detenerte",
        "ok_en": "Reduce speed and prepare to stop"
    }, {
        "id": 220,
        "es_n": "¿Qué debes hacer si conduces en una zona residencial?",
        "es": "¿Qué debes hacer si conduces en una residential area?",
        "en": "What should you do when driving in a residential area?",
        "kt": "residential area",
        "kt_es": "zona residencial",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener velocidad baja y estar atento", "Acelerar porque hay menos tráfico", "Ignorar señales menores"
        ],
        "ops_en": [
            "Maintain low speed and stay alert", "Accelerate because there is less traffic", "Ignore minor signs"
        ],
        "ok": "Mantener velocidad baja y estar atento",
        "ok_en": "Maintain low speed and stay alert"
    }, {
        "id": 221,
        "es_n": "¿Qué debes hacer si necesitas girar en una calle de varios carriles?",
        "es": "¿Qué debes hacer si necesitas make a turn en una multi-lane street?",
        "en": "What should you do if you need to make a turn on a multi-lane street?",
        "kt": "multi-lane",
        "kt_es": "varios carriles",
        "tc": "turn",
        "tc_es": "giro",
        "ops": [
            "Ubicarte en el carril correcto antes de girar", "Girar desde cualquier carril", "Detenerte en medio de la calle"
        ],
        "ops_en": [
            "Be in the correct lane before turning", "Turn from any lane", "Stop in the middle of the street"
        ],
        "ok": "Ubicarte en el carril correcto antes de girar",
        "ok_en": "Be in the correct lane before turning"
    }, {
        "id": 222,
        "es_n": "¿Qué debes hacer si un vehículo se detiene delante de ti?",
        "es": "¿Qué debes hacer si un vehicle stops delante de ti?",
        "en": "What should you do if a vehicle stops in front of you?",
        "kt": "vehicle",
        "kt_es": "vehículo",
        "tc": "stops",
        "tc_es": "se detiene",
        "ops": [
            "Reducir velocidad y detenerte si es necesario", "Acelerar para rebasarlo", "Girar sin revisar"
        ],
        "ops_en": [
            "Slow down and stop if needed", "Accelerate to pass it", "Turn without checking"
        ],
        "ok": "Reducir velocidad y detenerte si es necesario",
        "ok_en": "Slow down and stop if needed"
    }, {
        "id": 223,
        "es_n": "¿Qué debes hacer si conduces en una pendiente descendente?",
        "es": "¿Qué debes hacer si conduces downhill en una slope?",
        "en": "What should you do when driving downhill on a slope?",
        "kt": "downhill",
        "kt_es": "pendiente descendente",
        "tc": "slope",
        "tc_es": "pendiente",
        "ops": [
            "Controlar velocidad usando freno y marcha", "Acelerar para mantener control", "Apagar el motor"
        ],
        "ops_en": [
            "Control speed using brakes and gear", "Accelerate to maintain control", "Turn off the engine"
        ],
        "ok": "Controlar velocidad usando freno y marcha",
        "ok_en": "Control speed using brakes and gear"
    }, {
        "id": 224,
        "es_n": "¿Qué debes hacer si ves una señal de carretera resbalosa?",
        "es": "¿Qué debes hacer si ves una slippery road sign?",
        "en": "What should you do if you see a slippery road sign?",
        "kt": "slippery road",
        "kt_es": "carretera resbalosa",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y evitar maniobras bruscas", "Acelerar para salir rápido", "Frenar constantemente"
        ],
        "ops_en": [
            "Reduce speed and avoid sudden moves", "Accelerate to get through quickly", "Brake constantly"
        ],
        "ok": "Reducir velocidad y evitar maniobras bruscas",
        "ok_en": "Reduce speed and avoid sudden moves"
    }, {
        "id": 225,
        "es_n": "¿Qué debes hacer si un conductor cambia de carril frente a ti?",
        "es": "¿Qué debes hacer si un driver changes lane frente a ti?",
        "en": "What should you do if a driver changes lanes in front of you?",
        "kt": "driver",
        "kt_es": "conductor",
        "tc": "changes lane",
        "tc_es": "cambia de carril",
        "ops": [
            "Ajustar velocidad para mantener distancia", "Acelerar para evitarlo", "Girar sin verificar"
        ],
        "ops_en": [
            "Adjust speed to keep distance", "Accelerate to avoid them", "Turn without checking"
        ],
        "ok": "Ajustar velocidad para mantener distancia",
        "ok_en": "Adjust speed to keep distance"
    }, {
        "id": 226,
        "es_n": "¿Qué debes hacer si conduces en condiciones de baja visibilidad?",
        "es": "¿Qué debes hacer si conduces con low visibility?",
        "en": "What should you do when driving with low visibility?",
        "kt": "low visibility",
        "kt_es": "baja visibilidad",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y aumentar distancia", "Acelerar para salir rápido", "Apagar luces"
        ],
        "ops_en": [
            "Reduce speed and increase distance", "Accelerate to get through quickly", "Turn off lights"
        ],
        "ok": "Reducir velocidad y aumentar distancia",
        "ok_en": "Reduce speed and increase distance"
    }, {
        "id": 227,
        "es_n": "¿Qué debes hacer si te acercas a una señal de alto de cuatro vías?",
        "es": "¿Qué debes hacer si te acercas a un four-way stop?",
        "en": "What should you do when approaching a four-way stop?",
        "kt": "four-way stop",
        "kt_es": "alto de cuatro vías",
        "tc": "approaching",
        "tc_es": "acercarte",
        "ops": [
            "Ceder el paso al primer vehículo que llegó", "Avanzar primero si vas más rápido", "Ignorar el orden de llegada"
        ],
        "ops_en": [
            "Yield to the first vehicle that arrived", "Go first if you are faster", "Ignore arrival order"
        ],
        "ok": "Ceder el paso al primer vehículo que llegó",
        "ok_en": "Yield to the first vehicle that arrived"
    }, {
        "id": 228,
        "es_n": "¿Qué debes hacer si un peatón está esperando para cruzar?",
        "es": "¿Qué debes hacer si un pedestrian está waiting en un crosswalk?",
        "en": "What should you do if a pedestrian is waiting at a crosswalk?",
        "kt": "pedestrian",
        "kt_es": "peatón",
        "tc": "crosswalk",
        "tc_es": "paso peatonal",
        "ops": [
            "Detenerte y permitir que cruce", "Continuar si no ha empezado a cruzar", "Acelerar para pasar primero"
        ],
        "ops_en": [
            "Stop and allow them to cross", "Continue if they have not started crossing", "Accelerate to pass first"
        ],
        "ok": "Detenerte y permitir que cruce",
        "ok_en": "Stop and allow them to cross"
    }, {
        "id": 229,
        "es_n": "¿Qué debes hacer si un carril se fusiona con otro?",
        "es": "¿Qué debes hacer si un lane merge ocurre adelante?",
        "en": "What should you do if a lane merge occurs ahead?",
        "kt": "merge",
        "kt_es": "fusionarse",
        "tc": "lane",
        "tc_es": "carril",
        "ops": [
            "Alternar el paso con otros vehículos", "Acelerar para entrar primero", "Detenerte completamente"
        ],
        "ops_en": [
            "Take turns with other vehicles", "Accelerate to enter first", "Come to a complete stop"
        ],
        "ok": "Alternar el paso con otros vehículos",
        "ok_en": "Take turns with other vehicles"
    }, {
        "id": 230,
        "es_n": "¿Qué debes hacer si ves una señal de curva pronunciada?",
        "es": "¿Qué debes hacer si ves una sharp curve sign?",
        "en": "What should you do if you see a sharp curve sign?",
        "kt": "sharp curve",
        "kt_es": "curva pronunciada",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad antes de la curva", "Acelerar dentro de la curva", "Frenar bruscamente a mitad"
        ],
        "ops_en": [
            "Reduce speed before the curve", "Accelerate inside the curve", "Brake hard in the middle"
        ],
        "ok": "Reducir velocidad antes de la curva",
        "ok_en": "Reduce speed before the curve"
    }, {
        "id": 231,
        "es_n": "¿Qué debes hacer si otro conductor no respeta una señal?",
        "es": "¿Qué debes hacer si otro driver ignores una sign?",
        "en": "What should you do if another driver ignores a sign?",
        "kt": "driver",
        "kt_es": "conductor",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Mantener control y evitar el riesgo", "Responder agresivamente", "Acelerar para confrontarlo"
        ],
        "ops_en": [
            "Maintain control and avoid risk", "Respond aggressively", "Accelerate to confront them"
        ],
        "ok": "Mantener control y evitar el riesgo",
        "ok_en": "Maintain control and avoid risk"
    }, {
        "id": 232,
        "es_n": "¿Qué debes hacer si necesitas detenerte rápidamente?",
        "es": "¿Qué debes hacer si necesitas sudden braking?",
        "en": "What should you do if you need sudden braking?",
        "kt": "braking",
        "kt_es": "frenar",
        "tc": "sudden",
        "tc_es": "repentino",
        "ops": [
            "Aplicar freno de forma controlada", "Girar el volante bruscamente", "Acelerar antes de frenar"
        ],
        "ops_en": [
            "Apply brakes in a controlled way", "Turn the wheel sharply", "Accelerate before braking"
        ],
        "ok": "Aplicar freno de forma controlada",
        "ok_en": "Apply brakes in a controlled way"
    }, {
        "id": 233,
        "es_n": "¿Qué debes hacer si conduces en una zona con límite reducido?",
        "es": "¿Qué debes hacer si conduces en un reduced speed zone?",
        "en": "What should you do when driving in a reduced speed zone?",
        "kt": "speed zone",
        "kt_es": "zona de velocidad",
        "tc": "reduced",
        "tc_es": "reducido",
        "ops": [
            "Ajustar tu velocidad al límite indicado", "Mantener velocidad normal", "Acelerar para salir rápido"
        ],
        "ops_en": [
            "Adjust your speed to the posted limit", "Maintain normal speed", "Accelerate to leave quickly"
        ],
        "ok": "Ajustar tu velocidad al límite indicado",
        "ok_en": "Adjust your speed to the posted limit"
    }, {
        "id": 234,
        "es_n": "¿Qué debes hacer si ves una señal de tráfico lento?",
        "es": "¿Qué debes hacer si ves un slow traffic warning?",
        "en": "What should you do if you see a slow traffic warning?",
        "kt": "slow traffic",
        "kt_es": "tráfico lento",
        "tc": "warning",
        "tc_es": "advertencia",
        "ops": [
            "Reducir velocidad y estar atento", "Acelerar para evitar tráfico", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and stay alert", "Accelerate to avoid traffic", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y estar atento",
        "ok_en": "Reduce speed and stay alert"
    }, {
        "id": 235,
        "es_n": "¿Qué debes hacer si te acercas a una intersección sin visibilidad?",
        "es": "¿Qué debes hacer si te acercas a una intersection con no visibility?",
        "en": "What should you do when approaching an intersection with no visibility?",
        "kt": "intersection",
        "kt_es": "intersección",
        "tc": "visibility",
        "tc_es": "visibilidad",
        "ops": [
            "Reducir velocidad y avanzar con precaución", "Acelerar para cruzar rápido", "Ignorar el cruce"
        ],
        "ops_en": [
            "Slow down and proceed carefully", "Accelerate to cross quickly", "Ignore the crossing"
        ],
        "ok": "Reducir velocidad y avanzar con precaución",
        "ok_en": "Slow down and proceed carefully"
    }, {
        "id": 236,
        "es_n": "¿Qué debes hacer si un vehículo se detiene en un cruce?",
        "es": "¿Qué debes hacer si un vehicle stops en un intersection?",
        "en": "What should you do if a vehicle stops at an intersection?",
        "kt": "vehicle",
        "kt_es": "vehículo",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Estar preparado para detenerte también", "Acelerar para cruzar antes", "Ignorar su acción"
        ],
        "ops_en": [
            "Be prepared to stop as well", "Accelerate to cross first", "Ignore their action"
        ],
        "ok": "Estar preparado para detenerte también",
        "ok_en": "Be prepared to stop as well"
    }, {
        "id": 237,
        "es_n": "¿Qué debes hacer si un carril está marcado solo para dar vuelta?",
        "es": "¿Qué debes hacer si un lane está marcado como turn only?",
        "en": "What should you do if a lane is marked as turn only?",
        "kt": "turn only",
        "kt_es": "solo giro",
        "tc": "lane",
        "tc_es": "carril",
        "ops": [
            "Usarlo solo para girar en la dirección indicada", "Continuar recto si no hay tráfico", "Cambiar de carril sin señalizar"
        ],
        "ops_en": [
            "Use it only for the indicated turn", "Go straight if there is no traffic", "Change lanes without signaling"
        ],
        "ok": "Usarlo solo para girar en la dirección indicada",
        "ok_en": "Use it only for the indicated turn"
    }, {
        "id": 238,
        "es_n": "¿Qué debes hacer si te acercas a un cruce con visibilidad limitada?",
        "es": "¿Qué debes hacer si te acercas a un intersection con limited visibility?",
        "en": "What should you do when approaching an intersection with limited visibility?",
        "kt": "intersection",
        "kt_es": "intersección",
        "tc": "limited visibility",
        "tc_es": "visibilidad limitada",
        "ops": [
            "Reducir velocidad y avanzar con precaución", "Acelerar para cruzar rápido", "Ignorar la intersección"
        ],
        "ops_en": [
            "Reduce speed and proceed with caution", "Accelerate to cross quickly", "Ignore the intersection"
        ],
        "ok": "Reducir velocidad y avanzar con precaución",
        "ok_en": "Reduce speed and proceed with caution"
    }, {
        "id": 239,
        "es_n": "¿Qué debes hacer si conduces detrás de un autobús escolar detenido?",
        "es": "¿Qué debes hacer si conduces detrás de un school bus detenido?",
        "en": "What should you do when driving behind a stopped school bus?",
        "kt": "school bus",
        "kt_es": "autobús escolar",
        "tc": "stopped",
        "tc_es": "detenido",
        "ops": [
            "Detenerte hasta que sea seguro continuar", "Rebasarlo si no ves niños", "Acelerar para pasar rápido"
        ],
        "ops_en": [
            "Stop until it is safe to continue", "Pass if you do not see children", "Accelerate to pass quickly"
        ],
        "ok": "Detenerte hasta que sea seguro continuar",
        "ok_en": "Stop until it is safe to continue"
    }, {
        "id": 240,
        "es_n": "¿Qué debes hacer si te acercas a una señal de velocidad mínima?",
        "es": "¿Qué debes hacer si ves una minimum speed sign?",
        "en": "What should you do if you see a minimum speed sign?",
        "kt": "minimum speed",
        "kt_es": "velocidad mínima",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Mantener al menos la velocidad indicada", "Reducir velocidad por debajo del mínimo", "Ignorar la señal"
        ],
        "ops_en": [
            "Maintain at least the posted speed", "Drive below the minimum speed", "Ignore the sign"
        ],
        "ok": "Mantener al menos la velocidad indicada",
        "ok_en": "Maintain at least the posted speed"
    }, {
        "id": 241,
        "es_n": "¿Qué debes hacer si otro conductor intenta entrar a tu carril?",
        "es": "¿Qué debes hacer si otro driver intenta merge en tu lane?",
        "en": "What should you do if another driver tries to merge into your lane?",
        "kt": "merge",
        "kt_es": "incorporarse",
        "tc": "lane",
        "tc_es": "carril",
        "ops": [
            "Ajustar velocidad y permitir el paso si es seguro", "Acelerar para bloquearlo", "Ignorar su maniobra"
        ],
        "ops_en": [
            "Adjust speed and allow entry if safe", "Accelerate to block them", "Ignore their action"
        ],
        "ok": "Ajustar velocidad y permitir el paso si es seguro",
        "ok_en": "Adjust speed and allow entry if safe"
    }, {
        "id": 242,
        "es_n": "¿Qué debes hacer si conduces en una carretera con curvas continuas?",
        "es": "¿Qué debes hacer si conduces en winding roads?",
        "en": "What should you do when driving on winding roads?",
        "kt": "winding roads",
        "kt_es": "carreteras con curvas",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y mantener control", "Acelerar para salir rápido", "Frenar bruscamente en cada curva"
        ],
        "ops_en": [
            "Reduce speed and maintain control", "Accelerate to get through quickly", "Brake hard on every curve"
        ],
        "ok": "Reducir velocidad y mantener control",
        "ok_en": "Reduce speed and maintain control"
    }, {
        "id": 243,
        "es_n": "¿Qué debes hacer si ves una señal de tránsito lento adelante?",
        "es": "¿Qué debes hacer si ves slow traffic ahead?",
        "en": "What should you do if you see slow traffic ahead?",
        "kt": "slow traffic",
        "kt_es": "tráfico lento",
        "tc": "ahead",
        "tc_es": "adelante",
        "ops": [
            "Reducir velocidad y prepararte para detenerte", "Acelerar para evitar el tráfico", "Ignorar la situación"
        ],
        "ops_en": [
            "Reduce speed and prepare to stop", "Accelerate to avoid traffic", "Ignore the situation"
        ],
        "ok": "Reducir velocidad y prepararte para detenerte",
        "ok_en": "Reduce speed and prepare to stop"
    }, {
        "id": 244,
        "es_n": "¿Qué debes hacer si te acercas a una zona con trabajadores en la vía?",
        "es": "¿Qué debes hacer si te acercas a una work zone con workers?",
        "en": "What should you do when approaching a work zone with workers?",
        "kt": "work zone",
        "kt_es": "zona de trabajo",
        "tc": "workers",
        "tc_es": "trabajadores",
        "ops": [
            "Reducir velocidad y seguir indicaciones", "Acelerar para pasar rápido", "Ignorar a los trabajadores"
        ],
        "ops_en": [
            "Reduce speed and follow instructions", "Accelerate to pass quickly", "Ignore the workers"
        ],
        "ok": "Reducir velocidad y seguir indicaciones",
        "ok_en": "Reduce speed and follow instructions"
    }, {
        "id": 245,
        "es_n": "¿Qué debes hacer si conduces en una autopista con tráfico fluido?",
        "es": "¿Qué debes hacer si conduces en una highway con smooth traffic?",
        "en": "What should you do when driving on a highway with smooth traffic?",
        "kt": "highway",
        "kt_es": "autopista",
        "tc": "smooth traffic",
        "tc_es": "tráfico fluido",
        "ops": [
            "Mantener velocidad constante y distancia", "Cambiar de carril constantemente", "Acelerar sin límite"
        ],
        "ops_en": [
            "Maintain steady speed and distance", "Change lanes constantly", "Accelerate without limit"
        ],
        "ok": "Mantener velocidad constante y distancia",
        "ok_en": "Maintain steady speed and distance"
    }, {
        "id": 246,
        "es_n": "¿Qué debes hacer si ves una señal de detención obligatoria adelante?",
        "es": "¿Qué debes hacer si ves a stop ahead sign?",
        "en": "What should you do if you see a stop ahead sign?",
        "kt": "stop ahead",
        "kt_es": "alto adelante",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Prepararte para detenerte completamente", "Acelerar antes del alto", "Ignorar la señal"
        ],
        "ops_en": [
            "Prepare to stop completely", "Accelerate before the stop", "Ignore the sign"
        ],
        "ok": "Prepararte para detenerte completamente",
        "ok_en": "Prepare to stop completely"
    }, {
        "id": 247,
        "es_n": "¿Qué debes hacer si te acercas a una señal de curva con velocidad recomendada?",
        "es": "¿Qué debes hacer si ves una curve speed sign?",
        "en": "What should you do if you see a curve speed sign?",
        "kt": "curve speed",
        "kt_es": "velocidad en curva",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Ajustar tu velocidad a la recomendada", "Ignorarla si no hay tráfico", "Acelerar para mantener velocidad constante"
        ],
        "ops_en": [
            "Adjust your speed to the recommended value", "Ignore it if there is no traffic", "Accelerate to maintain speed"
        ],
        "ok": "Ajustar tu velocidad a la recomendada",
        "ok_en": "Adjust your speed to the recommended value"
    }, {
        "id": 248,
        "es_n": "¿Qué debes hacer si un vehículo reduce velocidad delante de ti?",
        "es": "¿Qué debes hacer si un vehicle slows down delante de ti?",
        "en": "What should you do if a vehicle slows down in front of you?",
        "kt": "vehicle",
        "kt_es": "vehículo",
        "tc": "slows down",
        "tc_es": "reduce velocidad",
        "ops": [
            "Reducir velocidad y mantener distancia", "Acelerar para rebasarlo", "Ignorar la situación"
        ],
        "ops_en": [
            "Slow down and maintain distance", "Accelerate to pass", "Ignore the situation"
        ],
        "ok": "Reducir velocidad y mantener distancia",
        "ok_en": "Slow down and maintain distance"
    }, {
        "id": 249,
        "es_n": "¿Qué debes hacer si ves una señal de intersección adelante?",
        "es": "¿Qué debes hacer si ves una intersection ahead sign?",
        "en": "What should you do if you see an intersection ahead sign?",
        "kt": "intersection ahead",
        "kt_es": "intersección adelante",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y prepararte para ceder el paso", "Acelerar para cruzar primero", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and prepare to yield", "Accelerate to cross first", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y prepararte para ceder el paso",
        "ok_en": "Reduce speed and prepare to yield"
    }, {
        "id": 250,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico cruzado?",
        "es": "¿Qué debes hacer si conduces con cross traffic?",
        "en": "What should you do when driving with cross traffic?",
        "kt": "cross traffic",
        "kt_es": "tráfico cruzado",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Estar atento y preparado para detenerte", "Acelerar para cruzar rápido", "Ignorar otros vehículos"
        ],
        "ops_en": [
            "Stay alert and be ready to stop", "Accelerate to cross quickly", "Ignore other vehicles"
        ],
        "ok": "Estar atento y preparado para detenerte",
        "ok_en": "Stay alert and be ready to stop"
    }, {
        "id": 251,
        "es_n": "¿Qué debes hacer si ves una señal de límite de altura?",
        "es": "¿Qué debes hacer si ves una height limit sign?",
        "en": "What should you do if you see a height limit sign?",
        "kt": "height limit",
        "kt_es": "límite de altura",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Asegurarte de que tu vehículo cumple con la altura permitida", "Ignorarla si conduces un auto pequeño", "Acelerar para pasar rápido"
        ],
        "ops_en": [
            "Make sure your vehicle meets the height limit", "Ignore it if you drive a small car", "Accelerate to pass quickly"
        ],
        "ok": "Asegurarte de que tu vehículo cumple con la altura permitida",
        "ok_en": "Make sure your vehicle meets the height limit"
    }, {
        "id": 252,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico lento?",
        "es": "¿Qué debes hacer si conduces en slow traffic?",
        "en": "What should you do when driving in slow traffic?",
        "kt": "slow traffic",
        "kt_es": "tráfico lento",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener distancia y avanzar con precaución", "Acelerar constantemente", "Cambiar de carril sin revisar"
        ],
        "ops_en": [
            "Maintain distance and proceed carefully", "Accelerate constantly", "Change lanes without checking"
        ],
        "ok": "Mantener distancia y avanzar con precaución",
        "ok_en": "Maintain distance and proceed carefully"
    }, {
        "id": 253,
        "es_n": "¿Qué debes hacer si un conductor delante gira sin señalizar?",
        "es": "¿Qué debes hacer si un driver ahead turns sin señal?",
        "en": "What should you do if a driver ahead turns without signaling?",
        "kt": "driver ahead",
        "kt_es": "conductor adelante",
        "tc": "turns",
        "tc_es": "gira",
        "ops": [
            "Reducir velocidad y mantener control", "Acelerar para evitarlo", "Ignorar su acción"
        ],
        "ops_en": [
            "Slow down and maintain control", "Accelerate to avoid them", "Ignore their action"
        ],
        "ok": "Reducir velocidad y mantener control",
        "ok_en": "Slow down and maintain control"
    }, {
        "id": 254,
        "es_n": "¿Qué debes hacer si ves una señal de curva doble?",
        "es": "¿Qué debes hacer si ves una double curve sign?",
        "en": "What should you do if you see a double curve sign?",
        "kt": "double curve",
        "kt_es": "curva doble",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y prepararte para varias curvas", "Acelerar para salir rápido", "Frenar bruscamente en cada curva"
        ],
        "ops_en": [
            "Reduce speed and prepare for multiple curves", "Accelerate to get through quickly", "Brake hard at each curve"
        ],
        "ok": "Reducir velocidad y prepararte para varias curvas",
        "ok_en": "Reduce speed and prepare for multiple curves"
    }, {
        "id": 255,
        "es_n": "¿Qué debes hacer si conduces en una carretera desconocida?",
        "es": "¿Qué debes hacer si conduces en an unfamiliar road?",
        "en": "What should you do when driving on an unfamiliar road?",
        "kt": "unfamiliar road",
        "kt_es": "carretera desconocida",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y prestar atención a señales", "Acelerar para avanzar más rápido", "Ignorar señales nuevas"
        ],
        "ops_en": [
            "Reduce speed and pay attention to signs", "Accelerate to move faster", "Ignore new signs"
        ],
        "ok": "Reducir velocidad y prestar atención a señales",
        "ok_en": "Reduce speed and pay attention to signs"
    }, {
        "id": 256,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de peatones adelante?",
        "es": "¿Qué debes hacer si ves a pedestrian crossing ahead sign?",
        "en": "What should you do if you see a pedestrian crossing ahead sign?",
        "kt": "pedestrian crossing",
        "kt_es": "cruce peatonal",
        "tc": "ahead",
        "tc_es": "adelante",
        "ops": [
            "Reducir velocidad y prepararte para detenerte", "Acelerar para pasar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and prepare to stop", "Accelerate to pass quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y prepararte para detenerte",
        "ok_en": "Reduce speed and prepare to stop"
    }, {
        "id": 257,
        "es_n": "¿Qué debes hacer si ves una señal de giro obligatorio?",
        "es": "¿Qué debes hacer si ves una mandatory turn sign?",
        "en": "What should you do if you see a mandatory turn sign?",
        "kt": "mandatory turn",
        "kt_es": "giro obligatorio",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Seguir la dirección indicada por la señal", "Continuar recto si no hay tráfico", "Ignorar la señal si tienes prisa"
        ],
        "ops_en": [
            "Follow the direction indicated by the sign", "Continue straight if no traffic", "Ignore the sign if you are in a hurry"
        ],
        "ok": "Seguir la dirección indicada por la señal",
        "ok_en": "Follow the direction indicated by the sign"
    }, {
        "id": 258,
        "es_n": "¿Qué debes hacer si conduces en una carretera con carriles estrechos?",
        "es": "¿Qué debes hacer si conduces en narrow lanes?",
        "en": "What should you do when driving on narrow lanes?",
        "kt": "narrow lanes",
        "kt_es": "carriles estrechos",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y mantener control del vehículo", "Acelerar para salir rápido", "Ignorar la anchura del carril"
        ],
        "ops_en": [
            "Reduce speed and maintain control", "Accelerate to get through quickly", "Ignore lane width"
        ],
        "ok": "Reducir velocidad y mantener control del vehículo",
        "ok_en": "Reduce speed and maintain control"
    }, {
        "id": 259,
        "es_n": "¿Qué debes hacer si ves una señal de incorporación de tráfico?",
        "es": "¿Qué debes hacer si ves una merging traffic sign?",
        "en": "What should you do if you see a merging traffic sign?",
        "kt": "merging traffic",
        "kt_es": "tráfico que se incorpora",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Estar preparado para ajustar velocidad y permitir entrada", "Acelerar para evitar que otros entren", "Ignorar la señal"
        ],
        "ops_en": [
            "Be ready to adjust speed and allow entry", "Accelerate to block others", "Ignore the sign"
        ],
        "ok": "Estar preparado para ajustar velocidad y permitir entrada",
        "ok_en": "Be ready to adjust speed and allow entry"
    }, {
        "id": 260,
        "es_n": "¿Qué debes hacer si conduces en una zona con visibilidad reducida?",
        "es": "¿Qué debes hacer si conduces con reduced visibility?",
        "en": "What should you do when driving with reduced visibility?",
        "kt": "reduced visibility",
        "kt_es": "visibilidad reducida",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y aumentar distancia", "Acelerar para salir rápido", "Apagar las luces"
        ],
        "ops_en": [
            "Reduce speed and increase distance", "Accelerate to get through quickly", "Turn off lights"
        ],
        "ok": "Reducir velocidad y aumentar distancia",
        "ok_en": "Reduce speed and increase distance"
    }, {
        "id": 261,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de ciclistas?",
        "es": "¿Qué debes hacer si ves una bicycle crossing sign?",
        "en": "What should you do if you see a bicycle crossing sign?",
        "kt": "bicycle crossing",
        "kt_es": "cruce de ciclistas",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y estar atento a ciclistas", "Ignorarla si no ves bicicletas", "Acelerar para pasar rápido"
        ],
        "ops_en": [
            "Reduce speed and watch for cyclists", "Ignore it if you see no bicycles", "Accelerate to pass quickly"
        ],
        "ok": "Reducir velocidad y estar atento a ciclistas",
        "ok_en": "Reduce speed and watch for cyclists"
    }, {
        "id": 262,
        "es_n": "¿Qué debes hacer si otro conductor frena bruscamente delante de ti?",
        "es": "¿Qué debes hacer si otro driver brakes suddenly delante de ti?",
        "en": "What should you do if another driver brakes suddenly in front of you?",
        "kt": "brakes suddenly",
        "kt_es": "frena bruscamente",
        "tc": "driver",
        "tc_es": "conductor",
        "ops": [
            "Reducir velocidad y mantener distancia segura", "Acelerar para evitarlo", "Girar sin verificar"
        ],
        "ops_en": [
            "Slow down and keep a safe distance", "Accelerate to avoid them", "Turn without checking"
        ],
        "ok": "Reducir velocidad y mantener distancia segura",
        "ok_en": "Slow down and keep a safe distance"
    }, {
        "id": 263,
        "es_n": "¿Qué debes hacer si conduces en una autopista con carriles múltiples?",
        "es": "¿Qué debes hacer si conduces en a multi-lane highway?",
        "en": "What should you do when driving on a multi-lane highway?",
        "kt": "multi-lane highway",
        "kt_es": "autopista de varios carriles",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantenerte en el carril adecuado según tu velocidad", "Cambiar de carril constantemente", "Acelerar sin límite"
        ],
        "ops_en": [
            "Stay in the appropriate lane for your speed", "Change lanes constantly", "Accelerate without limit"
        ],
        "ok": "Mantenerte en el carril adecuado según tu velocidad",
        "ok_en": "Stay in the appropriate lane for your speed"
    }, {
        "id": 264,
        "es_n": "¿Qué debes hacer si ves una señal de tráfico en doble sentido?",
        "es": "¿Qué debes hacer si ves a two-way traffic sign?",
        "en": "What should you do if you see a two-way traffic sign?",
        "kt": "two-way traffic",
        "kt_es": "tráfico en doble sentido",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Mantenerte en tu carril y estar atento a vehículos opuestos", "Conducir en cualquier carril", "Ignorar la señal"
        ],
        "ops_en": [
            "Stay in your lane and watch for oncoming vehicles", "Drive in any lane", "Ignore the sign"
        ],
        "ok": "Mantenerte en tu carril y estar atento a vehículos opuestos",
        "ok_en": "Stay in your lane and watch for oncoming vehicles"
    }, {
        "id": 265,
        "es_n": "¿Qué debes hacer si te acercas a una señal de cruce de tren sin barreras?",
        "es": "¿Qué debes hacer si te acercas a un railroad crossing sin gates?",
        "en": "What should you do when approaching a railroad crossing without gates?",
        "kt": "railroad crossing",
        "kt_es": "cruce de tren",
        "tc": "gates",
        "tc_es": "barreras",
        "ops": [
            "Reducir velocidad y asegurarte de que no viene tren", "Acelerar para cruzar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Slow down and make sure no train is coming", "Accelerate to cross quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y asegurarte de que no viene tren",
        "ok_en": "Slow down and make sure no train is coming"
    }, {
        "id": 266,
        "es_n": "¿Qué debes hacer si conduces en condiciones de tráfico variable?",
        "es": "¿Qué debes hacer si conduces en variable traffic conditions?",
        "en": "What should you do when driving in variable traffic conditions?",
        "kt": "traffic conditions",
        "kt_es": "condiciones de tráfico",
        "tc": "variable",
        "tc_es": "variable",
        "ops": [
            "Ajustar velocidad y mantener atención constante", "Mantener velocidad fija siempre", "Ignorar cambios en el tráfico"
        ],
        "ops_en": [
            "Adjust speed and stay alert", "Maintain constant speed always", "Ignore traffic changes"
        ],
        "ok": "Ajustar velocidad y mantener atención constante",
        "ok_en": "Adjust speed and stay alert"
    }, {
        "id": 267,
        "es_n": "¿Qué debes hacer si ves una señal de camino resbaloso?",
        "es": "¿Qué debes hacer si ves una slippery road sign?",
        "en": "What should you do if you see a slippery road sign?",
        "kt": "slippery road",
        "kt_es": "camino resbaloso",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y evitar movimientos bruscos", "Acelerar para salir rápido", "Frenar bruscamente"
        ],
        "ops_en": [
            "Reduce speed and avoid sudden movements", "Accelerate to get through quickly", "Brake suddenly"
        ],
        "ok": "Reducir velocidad y evitar movimientos bruscos",
        "ok_en": "Reduce speed and avoid sudden movements"
    }, {
        "id": 268,
        "es_n": "¿Qué debes hacer si conduces en una zona de construcción?",
        "es": "¿Qué debes hacer si conduces en a construction zone?",
        "en": "What should you do when driving in a construction zone?",
        "kt": "construction zone",
        "kt_es": "zona de construcción",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y seguir indicaciones", "Ignorar señales temporales", "Acelerar para salir rápido"
        ],
        "ops_en": [
            "Reduce speed and follow instructions", "Ignore temporary signs", "Accelerate to get through quickly"
        ],
        "ok": "Reducir velocidad y seguir indicaciones",
        "ok_en": "Reduce speed and follow instructions"
    }, {
        "id": 269,
        "es_n": "¿Qué debes hacer si ves una señal de pendiente pronunciada?",
        "es": "¿Qué debes hacer si ves a steep grade sign?",
        "en": "What should you do if you see a steep grade sign?",
        "kt": "steep grade",
        "kt_es": "pendiente pronunciada",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Prepararte para ajustar velocidad y control", "Acelerar cuesta abajo", "Ignorar la pendiente"
        ],
        "ops_en": [
            "Prepare to adjust speed and control", "Accelerate downhill", "Ignore the slope"
        ],
        "ok": "Prepararte para ajustar velocidad y control",
        "ok_en": "Prepare to adjust speed and control"
    }, {
        "id": 270,
        "es_n": "¿Qué debes hacer si un vehículo se detiene frente a ti en una intersección?",
        "es": "¿Qué debes hacer si un vehicle stops frente a ti en una intersección?",
        "en": "What should you do if a vehicle stops in front of you at an intersection?",
        "kt": "vehicle stops",
        "kt_es": "vehículo se detiene",
        "tc": "intersection",
        "tc_es": "intersección",
        "ops": [
            "Detenerte y esperar tu turno", "Acelerar para rodearlo", "Ignorar la situación"
        ],
        "ops_en": [
            "Stop and wait your turn", "Accelerate to go around", "Ignore the situation"
        ],
        "ok": "Detenerte y esperar tu turno",
        "ok_en": "Stop and wait your turn"
    }, {
        "id": 271,
        "es_n": "¿Qué debes hacer si ves una señal de reducción de carriles?",
        "es": "¿Qué debes hacer si ves a lane reduction sign?",
        "en": "What should you do if you see a lane reduction sign?",
        "kt": "lane reduction",
        "kt_es": "reducción de carriles",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Prepararte para incorporarte con precaución", "Acelerar para evitar ceder", "Ignorar la señal"
        ],
        "ops_en": [
            "Prepare to merge carefully", "Accelerate to avoid yielding", "Ignore the sign"
        ],
        "ok": "Prepararte para incorporarte con precaución",
        "ok_en": "Prepare to merge carefully"
    }, {
        "id": 272,
        "es_n": "¿Qué debes hacer si conduces en condiciones de lluvia intensa?",
        "es": "¿Qué debes hacer si conduces en heavy rain?",
        "en": "What should you do when driving in heavy rain?",
        "kt": "heavy rain",
        "kt_es": "lluvia intensa",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y aumentar distancia", "Acelerar para salir rápido", "Apagar luces"
        ],
        "ops_en": [
            "Reduce speed and increase distance", "Accelerate to get through quickly", "Turn off lights"
        ],
        "ok": "Reducir velocidad y aumentar distancia",
        "ok_en": "Reduce speed and increase distance"
    }, {
        "id": 273,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de animales?",
        "es": "¿Qué debes hacer si ves an animal crossing sign?",
        "en": "What should you do if you see an animal crossing sign?",
        "kt": "animal crossing",
        "kt_es": "cruce de animales",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y estar alerta", "Acelerar para pasar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and stay alert", "Accelerate to pass quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y estar alerta",
        "ok_en": "Reduce speed and stay alert"
    }, {
        "id": 274,
        "es_n": "¿Qué debes hacer si conduces detrás de un vehículo lento?",
        "es": "¿Qué debes hacer si conduces behind a slow vehicle?",
        "en": "What should you do when driving behind a slow vehicle?",
        "kt": "slow vehicle",
        "kt_es": "vehículo lento",
        "tc": "behind",
        "tc_es": "detrás",
        "ops": [
            "Mantener distancia y esperar oportunidad segura", "Acelerar y rebasar sin verificar", "Ignorar la situación"
        ],
        "ops_en": [
            "Maintain distance and wait for a safe opportunity", "Accelerate and pass without checking", "Ignore the situation"
        ],
        "ok": "Mantener distancia y esperar oportunidad segura",
        "ok_en": "Maintain distance and wait for a safe opportunity"
    }, {
        "id": 275,
        "es_n": "¿Qué debes hacer si ves una señal de parada adelante?",
        "es": "¿Qué debes hacer si ves a stop ahead sign?",
        "en": "What should you do if you see a stop ahead sign?",
        "kt": "stop ahead",
        "kt_es": "alto adelante",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y prepararte para detenerte", "Acelerar para cruzar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and prepare to stop", "Accelerate to cross quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y prepararte para detenerte",
        "ok_en": "Reduce speed and prepare to stop"
    }, {
        "id": 276,
        "es_n": "¿Qué debes hacer si conduces en tráfico denso?",
        "es": "¿Qué debes hacer si conduces en heavy traffic?",
        "en": "What should you do when driving in heavy traffic?",
        "kt": "heavy traffic",
        "kt_es": "tráfico denso",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener distancia y avanzar con precaución", "Acelerar constantemente", "Cambiar de carril sin revisar"
        ],
        "ops_en": [
            "Maintain distance and proceed carefully", "Accelerate constantly", "Change lanes without checking"
        ],
        "ok": "Mantener distancia y avanzar con precaución",
        "ok_en": "Maintain distance and proceed carefully"
    }, {
        "id": 277,
        "es_n": "¿Qué debes hacer si ves una señal de camino sinuoso?",
        "es": "¿Qué debes hacer si ves a winding road sign?",
        "en": "What should you do if you see a winding road sign?",
        "kt": "winding road",
        "kt_es": "camino sinuoso",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y seguir la trayectoria con control", "Acelerar para salir rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and follow the path with control", "Accelerate to get through quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y seguir la trayectoria con control",
        "ok_en": "Reduce speed and follow the path with control"
    }, {
        "id": 278,
        "es_n": "¿Qué debes hacer si conduces en una zona con viento fuerte?",
        "es": "¿Qué debes hacer si conduces en strong wind?",
        "en": "What should you do when driving in strong wind?",
        "kt": "strong wind",
        "kt_es": "viento fuerte",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Sujetar firmemente el volante y reducir velocidad", "Acelerar para mantener estabilidad", "Ignorar el viento"
        ],
        "ops_en": [
            "Hold the steering wheel firmly and reduce speed", "Accelerate to maintain stability", "Ignore the wind"
        ],
        "ok": "Sujetar firmemente el volante y reducir velocidad",
        "ok_en": "Hold the steering wheel firmly and reduce speed"
    }, {
        "id": 279,
        "es_n": "¿Qué debes hacer si ves una señal de carretera resbalosa cuando está mojada?",
        "es": "¿Qué debes hacer si ves a slippery when wet sign?",
        "en": "What should you do if you see a slippery when wet sign?",
        "kt": "slippery when wet",
        "kt_es": "resbaloso cuando está mojado",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad cuando la carretera esté mojada", "Acelerar cuando llueve", "Ignorar la condición"
        ],
        "ops_en": [
            "Reduce speed when the road is wet", "Accelerate when it rains", "Ignore the condition"
        ],
        "ok": "Reducir velocidad cuando la carretera esté mojada",
        "ok_en": "Reduce speed when the road is wet"
    }, {
        "id": 280,
        "es_n": "¿Qué debes hacer si un vehículo cambia de carril delante de ti sin aviso?",
        "es": "¿Qué debes hacer si a vehicle changes lanes delante de ti sin aviso?",
        "en": "What should you do if a vehicle changes lanes in front of you without warning?",
        "kt": "changes lanes",
        "kt_es": "cambia de carril",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Reducir velocidad y mantener control", "Acelerar para evitarlo", "Ignorar la situación"
        ],
        "ops_en": [
            "Slow down and maintain control", "Accelerate to avoid it", "Ignore the situation"
        ],
        "ok": "Reducir velocidad y mantener control",
        "ok_en": "Slow down and maintain control"
    }, {
        "id": 281,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de peatones escolar?",
        "es": "¿Qué debes hacer si ves a school crossing sign?",
        "en": "What should you do if you see a school crossing sign?",
        "kt": "school crossing",
        "kt_es": "cruce escolar",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y estar atento a estudiantes", "Acelerar para pasar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and watch for students", "Accelerate to pass quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y estar atento a estudiantes",
        "ok_en": "Reduce speed and watch for students"
    }, {
        "id": 282,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico irregular?",
        "es": "¿Qué debes hacer si conduces en irregular traffic?",
        "en": "What should you do when driving in irregular traffic?",
        "kt": "irregular traffic",
        "kt_es": "tráfico irregular",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener atención y ajustar velocidad según condiciones", "Mantener velocidad constante siempre", "Ignorar cambios en el tráfico"
        ],
        "ops_en": [
            "Stay alert and adjust speed as needed", "Maintain constant speed always", "Ignore traffic changes"
        ],
        "ok": "Mantener atención y ajustar velocidad según condiciones",
        "ok_en": "Stay alert and adjust speed as needed"
    }, {
        "id": 283,
        "es_n": "¿Qué debes hacer si ves una señal de giro en U permitido?",
        "es": "¿Qué debes hacer si ves a U-turn allowed sign?",
        "en": "What should you do if you see a U-turn allowed sign?",
        "kt": "U-turn allowed",
        "kt_es": "giro en U permitido",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Realizar el giro solo si es seguro", "Girar sin verificar tráfico", "Ignorar la señal"
        ],
        "ops_en": [
            "Make the turn only if it is safe", "Turn without checking traffic", "Ignore the sign"
        ],
        "ok": "Realizar el giro solo si es seguro",
        "ok_en": "Make the turn only if it is safe"
    }, {
        "id": 284,
        "es_n": "¿Qué debes hacer si conduces en una carretera con curvas continuas?",
        "es": "¿Qué debes hacer si conduces en continuous curves?",
        "en": "What should you do when driving on continuous curves?",
        "kt": "continuous curves",
        "kt_es": "curvas continuas",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Reducir velocidad y mantener control constante", "Acelerar para salir rápido", "Ignorar las curvas"
        ],
        "ops_en": [
            "Reduce speed and maintain constant control", "Accelerate to get through quickly", "Ignore the curves"
        ],
        "ok": "Reducir velocidad y mantener control constante",
        "ok_en": "Reduce speed and maintain constant control"
    }, {
        "id": 285,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de peatones sin semáforo?",
        "es": "¿Qué debes hacer si ves an uncontrolled pedestrian crossing?",
        "en": "What should you do if you see an uncontrolled pedestrian crossing?",
        "kt": "pedestrian crossing",
        "kt_es": "cruce peatonal",
        "tc": "uncontrolled",
        "tc_es": "sin control",
        "ops": [
            "Reducir velocidad y ceder el paso a peatones", "Acelerar si no ves peatones", "Ignorar la zona"
        ],
        "ops_en": [
            "Reduce speed and yield to pedestrians", "Accelerate if you see no pedestrians", "Ignore the area"
        ],
        "ok": "Reducir velocidad y ceder el paso a peatones",
        "ok_en": "Reduce speed and yield to pedestrians"
    }, {
        "id": 286,
        "es_n": "¿Qué debes hacer si conduces en tráfico con paradas frecuentes?",
        "es": "¿Qué debes hacer si conduces en stop-and-go traffic?",
        "en": "What should you do when driving in stop-and-go traffic?",
        "kt": "stop-and-go traffic",
        "kt_es": "tráfico intermitente",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener distancia y anticipar movimientos", "Acelerar entre cada parada", "Ignorar el patrón del tráfico"
        ],
        "ops_en": [
            "Maintain distance and anticipate movement", "Accelerate between each stop", "Ignore the traffic pattern"
        ],
        "ok": "Mantener distancia y anticipar movimientos",
        "ok_en": "Maintain distance and anticipate movement"
    }, {
        "id": 287,
        "es_n": "¿Qué debes hacer si ves una señal de camino angosto?",
        "es": "¿Qué debes hacer si ves a narrow road sign?",
        "en": "What should you do if you see a narrow road sign?",
        "kt": "narrow road",
        "kt_es": "camino angosto",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y mantenerte en tu carril", "Acelerar para salir rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and stay in your lane", "Accelerate to get through quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y mantenerte en tu carril",
        "ok_en": "Reduce speed and stay in your lane"
    }, {
        "id": 288,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico pesado?",
        "es": "¿Qué debes hacer si conduces en heavy traffic?",
        "en": "What should you do when driving in heavy traffic?",
        "kt": "heavy traffic",
        "kt_es": "tráfico pesado",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener distancia y avanzar con precaución", "Acelerar constantemente", "Cambiar de carril sin revisar"
        ],
        "ops_en": [
            "Maintain distance and proceed carefully", "Accelerate constantly", "Change lanes without checking"
        ],
        "ok": "Mantener distancia y avanzar con precaución",
        "ok_en": "Maintain distance and proceed carefully"
    }, {
        "id": 289,
        "es_n": "¿Qué debes hacer si ves una señal de fin de carretera dividida?",
        "es": "¿Qué debes hacer si ves a divided highway ends sign?",
        "en": "What should you do if you see a divided highway ends sign?",
        "kt": "divided highway ends",
        "kt_es": "fin de carretera dividida",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Prepararte para tráfico en ambos sentidos", "Acelerar para mantener velocidad", "Ignorar la señal"
        ],
        "ops_en": [
            "Prepare for two-way traffic", "Accelerate to maintain speed", "Ignore the sign"
        ],
        "ok": "Prepararte para tráfico en ambos sentidos",
        "ok_en": "Prepare for two-way traffic"
    }, {
        "id": 290,
        "es_n": "¿Qué debes hacer si un vehículo intenta incorporarse delante de ti?",
        "es": "¿Qué debes hacer si a vehicle merges delante de ti?",
        "en": "What should you do if a vehicle merges in front of you?",
        "kt": "vehicle merges",
        "kt_es": "vehículo se incorpora",
        "tc": "front",
        "tc_es": "delante",
        "ops": [
            "Ajustar velocidad y permitir la incorporación", "Acelerar para bloquearlo", "Ignorar la situación"
        ],
        "ops_en": [
            "Adjust speed and allow the merge", "Accelerate to block it", "Ignore the situation"
        ],
        "ok": "Ajustar velocidad y permitir la incorporación",
        "ok_en": "Adjust speed and allow the merge"
    }, {
        "id": 291,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de peatones con alta actividad?",
        "es": "¿Qué debes hacer si ves a high pedestrian activity sign?",
        "en": "What should you do if you see a high pedestrian activity sign?",
        "kt": "pedestrian activity",
        "kt_es": "actividad peatonal",
        "tc": "high",
        "tc_es": "alta",
        "ops": [
            "Reducir velocidad y estar preparado para detenerte", "Acelerar para pasar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and be ready to stop", "Accelerate to pass quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y estar preparado para detenerte",
        "ok_en": "Reduce speed and be ready to stop"
    }, {
        "id": 292,
        "es_n": "¿Qué debes hacer si conduces en una zona con iluminación limitada?",
        "es": "¿Qué debes hacer si conduces en low visibility?",
        "en": "What should you do when driving in low visibility?",
        "kt": "low visibility",
        "kt_es": "baja visibilidad",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Encender luces y reducir velocidad", "Apagar luces para ver mejor", "Acelerar para salir rápido"
        ],
        "ops_en": [
            "Turn on lights and reduce speed", "Turn off lights to see better", "Accelerate to get through quickly"
        ],
        "ok": "Encender luces y reducir velocidad",
        "ok_en": "Turn on lights and reduce speed"
    }, {
        "id": 293,
        "es_n": "¿Qué debes hacer si ves una señal de carril compartido con bicicletas?",
        "es": "¿Qué debes hacer si ves a shared lane sign?",
        "en": "What should you do if you see a shared lane sign?",
        "kt": "shared lane",
        "kt_es": "carril compartido",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Compartir el carril con ciclistas con precaución", "Ignorar a los ciclistas", "Acelerar para pasar rápido"
        ],
        "ops_en": [
            "Share the lane with cyclists carefully", "Ignore cyclists", "Accelerate to pass quickly"
        ],
        "ok": "Compartir el carril con ciclistas con precaución",
        "ok_en": "Share the lane with cyclists carefully"
    }, {
        "id": 294,
        "es_n": "¿Qué debes hacer si conduces en tráfico con cambios constantes?",
        "es": "¿Qué debes hacer si conduces en changing traffic?",
        "en": "What should you do when driving in changing traffic?",
        "kt": "changing traffic",
        "kt_es": "tráfico cambiante",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener atención y ajustar velocidad continuamente", "Mantener velocidad constante siempre", "Ignorar cambios en el tráfico"
        ],
        "ops_en": [
            "Stay alert and adjust speed continuously", "Maintain constant speed always", "Ignore traffic changes"
        ],
        "ok": "Mantener atención y ajustar velocidad continuamente",
        "ok_en": "Stay alert and adjust speed continuously"
    }, {
        "id": 295,
        "es_n": "¿Qué debes hacer si ves una señal de fin de zona escolar?",
        "es": "¿Qué debes hacer si ves an end school zone sign?",
        "en": "What should you do if you see an end school zone sign?",
        "kt": "school zone",
        "kt_es": "zona escolar",
        "tc": "end",
        "tc_es": "fin",
        "ops": [
            "Ajustar tu velocidad al límite regular", "Mantener velocidad baja siempre", "Ignorar la señal"
        ],
        "ops_en": [
            "Adjust your speed to the regular limit", "Maintain low speed always", "Ignore the sign"
        ],
        "ok": "Ajustar tu velocidad al límite regular",
        "ok_en": "Adjust your speed to the regular limit"
    }, {
        "id": 296,
        "es_n": "¿Qué debes hacer si conduces en tráfico con paradas inesperadas?",
        "es": "¿Qué debes hacer si conduces en sudden stops traffic?",
        "en": "What should you do when driving in sudden stops traffic?",
        "kt": "sudden stops",
        "kt_es": "paradas repentinas",
        "tc": "traffic",
        "tc_es": "tráfico",
        "ops": [
            "Mantener distancia y estar preparado para frenar", "Acelerar entre paradas", "Ignorar el patrón del tráfico"
        ],
        "ops_en": [
            "Maintain distance and be ready to brake", "Accelerate between stops", "Ignore the traffic pattern"
        ],
        "ok": "Mantener distancia y estar preparado para frenar",
        "ok_en": "Maintain distance and be ready to brake"
    }, {
        "id": 297,
        "es_n": "¿Qué debes hacer si ves una señal de carretera con baches?",
        "es": "¿Qué debes hacer si ves a rough road sign?",
        "en": "What should you do if you see a rough road sign?",
        "kt": "rough road",
        "kt_es": "carretera con baches",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y mantener control del vehículo", "Acelerar para pasar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and maintain control", "Accelerate to pass quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y mantener control del vehículo",
        "ok_en": "Reduce speed and maintain control"
    }, {
        "id": 298,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico detenido?",
        "es": "¿Qué debes hacer si conduces en stopped traffic?",
        "en": "What should you do when driving in stopped traffic?",
        "kt": "stopped traffic",
        "kt_es": "tráfico detenido",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Detenerte y mantener distancia segura", "Acelerar para avanzar", "Ignorar otros vehículos"
        ],
        "ops_en": [
            "Stop and maintain a safe distance", "Accelerate to move forward", "Ignore other vehicles"
        ],
        "ok": "Detenerte y mantener distancia segura",
        "ok_en": "Stop and maintain a safe distance"
    }, {
        "id": 299,
        "es_n": "¿Qué debes hacer si ves una señal de tráfico lento adelante?",
        "es": "¿Qué debes hacer si ves a slow traffic ahead sign?",
        "en": "What should you do if you see a slow traffic ahead sign?",
        "kt": "slow traffic",
        "kt_es": "tráfico lento",
        "tc": "ahead",
        "tc_es": "adelante",
        "ops": [
            "Reducir velocidad y prepararte para desacelerar", "Acelerar para evitar retrasos", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and prepare to slow down", "Accelerate to avoid delays", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y prepararte para desacelerar",
        "ok_en": "Reduce speed and prepare to slow down"
    }, {
        "id": 300,
        "es_n": "¿Qué debes hacer si un vehículo se aproxima rápidamente por detrás?",
        "es": "¿Qué debes hacer si a vehicle approaches quickly por detrás?",
        "en": "What should you do if a vehicle approaches quickly from behind?",
        "kt": "approaches quickly",
        "kt_es": "se aproxima rápidamente",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Mantener tu carril y permitir el paso si es necesario", "Acelerar para evitarlo", "Frenar bruscamente"
        ],
        "ops_en": [
            "Stay in your lane and allow passing if needed", "Accelerate to avoid it", "Brake suddenly"
        ],
        "ok": "Mantener tu carril y permitir el paso si es necesario",
        "ok_en": "Stay in your lane and allow passing if needed"
    }, {
        "id": 301,
        "es_n": "¿Qué debes hacer si ves una señal de camino con grava suelta?",
        "es": "¿Qué debes hacer si ves a loose gravel sign?",
        "en": "What should you do if you see a loose gravel sign?",
        "kt": "loose gravel",
        "kt_es": "grava suelta",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y evitar movimientos bruscos", "Acelerar para mantener control", "Frenar bruscamente"
        ],
        "ops_en": [
            "Reduce speed and avoid sudden movements", "Accelerate to maintain control", "Brake suddenly"
        ],
        "ok": "Reducir velocidad y evitar movimientos bruscos",
        "ok_en": "Reduce speed and avoid sudden movements"
    }, {
        "id": 302,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico intermitente?",
        "es": "¿Qué debes hacer si conduces en stop-and-go traffic?",
        "en": "What should you do when driving in stop-and-go traffic?",
        "kt": "stop-and-go traffic",
        "kt_es": "tráfico intermitente",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener distancia y anticipar movimientos", "Acelerar entre cada parada", "Ignorar el tráfico"
        ],
        "ops_en": [
            "Maintain distance and anticipate movements", "Accelerate between stops", "Ignore traffic"
        ],
        "ok": "Mantener distancia y anticipar movimientos",
        "ok_en": "Maintain distance and anticipate movements"
    }, {
        "id": 303,
        "es_n": "¿Qué debes hacer si ves una señal de carretera resbalosa por hielo?",
        "es": "¿Qué debes hacer si ves an icy road sign?",
        "en": "What should you do if you see an icy road sign?",
        "kt": "icy road",
        "kt_es": "carretera con hielo",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y conducir con suavidad", "Acelerar para mantener control", "Frenar bruscamente"
        ],
        "ops_en": [
            "Reduce speed and drive smoothly", "Accelerate to maintain control", "Brake suddenly"
        ],
        "ok": "Reducir velocidad y conducir con suavidad",
        "ok_en": "Reduce speed and drive smoothly"
    }, {
        "id": 304,
        "es_n": "¿Qué debes hacer si un vehículo delante reduce velocidad inesperadamente?",
        "es": "¿Qué debes hacer si a vehicle slows unexpectedly delante de ti?",
        "en": "What should you do if a vehicle slows unexpectedly in front of you?",
        "kt": "slows unexpectedly",
        "kt_es": "reduce velocidad inesperadamente",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Reducir velocidad y mantener distancia", "Acelerar para evitarlo", "Ignorar la situación"
        ],
        "ops_en": [
            "Slow down and maintain distance", "Accelerate to avoid it", "Ignore the situation"
        ],
        "ok": "Reducir velocidad y mantener distancia",
        "ok_en": "Slow down and maintain distance"
    }, {
        "id": 305,
        "es_n": "¿Qué debes hacer si ves una señal de tráfico en doble sentido adelante?",
        "es": "¿Qué debes hacer si ves a two-way traffic ahead sign?",
        "en": "What should you do if you see a two-way traffic ahead sign?",
        "kt": "two-way traffic",
        "kt_es": "tráfico en doble sentido",
        "tc": "ahead",
        "tc_es": "adelante",
        "ops": [
            "Mantenerte en tu carril y estar atento", "Conducir en cualquier carril", "Ignorar la señal"
        ],
        "ops_en": [
            "Stay in your lane and stay alert", "Drive in any lane", "Ignore the sign"
        ],
        "ok": "Mantenerte en tu carril y estar atento",
        "ok_en": "Stay in your lane and stay alert"
    }, {
        "id": 306,
        "es_n": "¿Qué debes hacer si conduces en tráfico con cambios repentinos?",
        "es": "¿Qué debes hacer si conduces en sudden traffic changes?",
        "en": "What should you do when driving in sudden traffic changes?",
        "kt": "traffic changes",
        "kt_es": "cambios de tráfico",
        "tc": "sudden",
        "tc_es": "repentinos",
        "ops": [
            "Mantener atención y ajustar velocidad constantemente", "Mantener velocidad fija", "Ignorar el tráfico"
        ],
        "ops_en": [
            "Stay alert and adjust speed constantly", "Maintain fixed speed", "Ignore traffic"
        ],
        "ok": "Mantener atención y ajustar velocidad constantemente",
        "ok_en": "Stay alert and adjust speed constantly"
    }, {
        "id": 307,
        "es_n": "¿Qué debes hacer si ves una señal de desvío?",
        "es": "¿Qué debes hacer si ves a detour sign?",
        "en": "What should you do if you see a detour sign?",
        "kt": "detour",
        "kt_es": "desvío",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Seguir la ruta indicada", "Ignorarla y continuar recto", "Acelerar para evitar el desvío"
        ],
        "ops_en": [
            "Follow the indicated route", "Ignore it and continue straight", "Accelerate to avoid the detour"
        ],
        "ok": "Seguir la ruta indicada",
        "ok_en": "Follow the indicated route"
    }, {
        "id": 308,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico moderado?",
        "es": "¿Qué debes hacer si conduces en moderate traffic?",
        "en": "What should you do when driving in moderate traffic?",
        "kt": "moderate traffic",
        "kt_es": "tráfico moderado",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener velocidad constante y atención", "Acelerar constantemente", "Ignorar otros vehículos"
        ],
        "ops_en": [
            "Maintain steady speed and attention", "Accelerate constantly", "Ignore other vehicles"
        ],
        "ok": "Mantener velocidad constante y atención",
        "ok_en": "Maintain steady speed and attention"
    }, {
        "id": 309,
        "es_n": "¿Qué debes hacer si ves una señal de intersección en T?",
        "es": "¿Qué debes hacer si ves a T intersection sign?",
        "en": "What should you do if you see a T intersection sign?",
        "kt": "T intersection",
        "kt_es": "intersección en T",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y prepararte para girar", "Acelerar para cruzar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and prepare to turn", "Accelerate to cross quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y prepararte para girar",
        "ok_en": "Reduce speed and prepare to turn"
    }, {
        "id": 310,
        "es_n": "¿Qué debes hacer si un vehículo se acerca desde una calle lateral?",
        "es": "¿Qué debes hacer si a vehicle approaches desde una calle lateral?",
        "en": "What should you do if a vehicle approaches from a side street?",
        "kt": "vehicle approaches",
        "kt_es": "vehículo se aproxima",
        "tc": "side street",
        "tc_es": "calle lateral",
        "ops": [
            "Estar atento y listo para ceder el paso", "Acelerar para pasar primero", "Ignorar el vehículo"
        ],
        "ops_en": [
            "Stay alert and be ready to yield", "Accelerate to go first", "Ignore the vehicle"
        ],
        "ok": "Estar atento y listo para ceder el paso",
        "ok_en": "Stay alert and be ready to yield"
    }, {
        "id": 311,
        "es_n": "¿Qué debes hacer si ves una señal de zona de juegos?",
        "es": "¿Qué debes hacer si ves a playground sign?",
        "en": "What should you do if you see a playground sign?",
        "kt": "playground",
        "kt_es": "zona de juegos",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y estar atento a niños", "Acelerar para salir rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and watch for children", "Accelerate to get through quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y estar atento a niños",
        "ok_en": "Reduce speed and watch for children"
    }, {
        "id": 312,
        "es_n": "¿Qué debes hacer si conduces en tráfico con flujo constante?",
        "es": "¿Qué debes hacer si conduces en steady traffic?",
        "en": "What should you do when driving in steady traffic?",
        "kt": "steady traffic",
        "kt_es": "tráfico constante",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener velocidad estable y distancia segura", "Acelerar sin necesidad", "Ignorar otros vehículos"
        ],
        "ops_en": [
            "Maintain steady speed and safe distance", "Accelerate unnecessarily", "Ignore other vehicles"
        ],
        "ok": "Mantener velocidad estable y distancia segura",
        "ok_en": "Maintain steady speed and safe distance"
    }, {
        "id": 313,
        "es_n": "¿Qué debes hacer si ves una señal de curva cerrada?",
        "es": "¿Qué debes hacer si ves a sharp curve sign?",
        "en": "What should you do if you see a sharp curve sign?",
        "kt": "sharp curve",
        "kt_es": "curva cerrada",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad antes de la curva", "Acelerar en la curva", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed before the curve", "Accelerate in the curve", "Ignore the sign"
        ],
        "ok": "Reducir velocidad antes de la curva",
        "ok_en": "Reduce speed before the curve"
    }, {
        "id": 314,
        "es_n": "¿Qué debes hacer si un vehículo delante cambia de dirección inesperadamente?",
        "es": "¿Qué debes hacer si a vehicle changes direction inesperadamente?",
        "en": "What should you do if a vehicle changes direction unexpectedly?",
        "kt": "changes direction",
        "kt_es": "cambia de dirección",
        "tc": "vehicle",
        "tc_es": "vehículo",
        "ops": [
            "Reducir velocidad y mantener control", "Acelerar para evitarlo", "Ignorar la situación"
        ],
        "ops_en": [
            "Slow down and maintain control", "Accelerate to avoid it", "Ignore the situation"
        ],
        "ok": "Reducir velocidad y mantener control",
        "ok_en": "Slow down and maintain control"
    }, {
        "id": 315,
        "es_n": "¿Qué debes hacer si ves una señal de camino irregular?",
        "es": "¿Qué debes hacer si ves an uneven road sign?",
        "en": "What should you do if you see an uneven road sign?",
        "kt": "uneven road",
        "kt_es": "camino irregular",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y mantener control", "Acelerar para pasar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and maintain control", "Accelerate to pass quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y mantener control",
        "ok_en": "Reduce speed and maintain control"
    }, {
        "id": 316,
        "es_n": "¿Qué debes hacer si conduces en tráfico con movimientos impredecibles?",
        "es": "¿Qué debes hacer si conduces en unpredictable traffic?",
        "en": "What should you do when driving in unpredictable traffic?",
        "kt": "unpredictable traffic",
        "kt_es": "tráfico impredecible",
        "tc": "driving",
        "tc_es": "conducir",
        "ops": [
            "Mantener atención constante y ajustar velocidad", "Mantener velocidad fija", "Ignorar otros vehículos"
        ],
        "ops_en": [
            "Stay alert and adjust speed", "Maintain fixed speed", "Ignore other vehicles"
        ],
        "ok": "Mantener atención constante y ajustar velocidad",
        "ok_en": "Stay alert and adjust speed"
    }, {
        "id": 317,
        "es_n": "¿Qué debes hacer si ves una señal de cruce de tren?",
        "es": "¿Qué debes hacer si ves a railroad crossing sign?",
        "en": "What should you do if you see a railroad crossing sign?",
        "kt": "railroad crossing",
        "kt_es": "cruce de tren",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Reducir velocidad y verificar si viene tren", "Acelerar para cruzar rápido", "Ignorar la señal"
        ],
        "ops_en": [
            "Reduce speed and check for trains", "Accelerate to cross quickly", "Ignore the sign"
        ],
        "ok": "Reducir velocidad y verificar si viene tren",
        "ok_en": "Reduce speed and check for trains"
    }, {
        "id": 318,
        "es_n": "¿Qué debes hacer si conduces en una zona con tráfico lento y constante?",
        "es": "¿Qué debes hacer si conduces en slow steady traffic?",
        "en": "What should you do when driving in slow steady traffic?",
        "kt": "steady traffic",
        "kt_es": "tráfico constante",
        "tc": "slow",
        "tc_es": "lento",
        "ops": [
            "Mantener distancia y avanzar con precaución", "Acelerar constantemente", "Ignorar el tráfico"
        ],
        "ops_en": [
            "Maintain distance and proceed carefully", "Accelerate constantly", "Ignore traffic"
        ],
        "ok": "Mantener distancia y avanzar con precaución",
        "ok_en": "Maintain distance and proceed carefully"
    }, {
        "id": 319,
        "es_n": "¿Qué debes hacer si ves una señal de reducción de velocidad?",
        "es": "¿Qué debes hacer si ves a reduce speed sign?",
        "en": "What should you do if you see a reduce speed sign?",
        "kt": "reduce speed",
        "kt_es": "reducir velocidad",
        "tc": "sign",
        "tc_es": "señal",
        "ops": [
            "Disminuir velocidad según lo indicado", "Mantener la misma velocidad", "Acelerar para pasar rápido"
        ],
        "ops_en": [
            "Slow down as indicated", "Maintain the same speed", "Accelerate to pass quickly"
        ],
        "ok": "Disminuir velocidad según lo indicado",
        "ok_en": "Slow down as indicated"
    }, {
        "id": 320,
        "es_n": "¿Qué debes hacer si conduces en tráfico con flujo irregular?",
        "es": "¿Qué debes hacer si conduces en irregular flow traffic?",
        "en": "What should you do when driving in irregular flow traffic?",
        "kt": "irregular traffic",
        "kt_es": "tráfico irregular",
        "tc": "flow",
        "tc_es": "flujo",
        "ops": [
            "Ajustar velocidad y mantener atención constante", "Mantener velocidad fija", "Ignorar el tráfico"
        ],
        "ops_en": [
            "Adjust speed and stay alert", "Maintain fixed speed", "Ignore traffic"
        ],
        "ok": "Ajustar velocidad y mantener atención constante",
        "ok_en": "Adjust speed and stay alert"
    }
];
// ─── PREGUNTAS MODULE ──────────────────────────────────
var PQ = {
    niv: 'basico',
    questions: [],
    idx: 0,
    cor: 0,
    inc: 0,
    wrongIds: [],
    done: false
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
    document.querySelectorAll('.pq-sub').forEach(function (s) {
        s.classList.remove('active');
    });
    var sub = document.getElementById(id);
    if (sub) 
        sub.classList.add('active');
    


    var screen = document.getElementById('screen-preguntas');
    if (screen) 
        screen.scrollTop = 0;
    


}

function pqStart() {
    PQ.idx = 0;
    PQ.cor = 0;
    PQ.inc = 0;
    PQ.wrongIds = [];
    PQ.done = false;
    PQ.questions = pqShuffle(QUESTIONS.slice()).slice(0, 20);
    pqShowSub('pq-question');
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
    pqShowSub('pq-question');
    pqRender();
}

function pqRender() {
    var tot = PQ.questions.length;
    var q = PQ.questions[PQ.idx];
    PQ.done = false;

    // Progress bar & counters
    document.getElementById('pq-prog-bar').style.width = ((PQ.idx / tot) * 100) + '%';
    document.getElementById('pq-qnum').textContent = (PQ.idx + 1) + ' / ' + tot;
    document.getElementById('pq-cor').textContent = PQ.cor;
    document.getElementById('pq-inc').textContent = PQ.inc;
    document.getElementById('pq-next-btn').style.display = 'none';

    // Question text
    var qtxtEl = document.getElementById('pq-qtxt');
    var hintEl = document.getElementById('pq-hint');

    // ── NIVEL 1 (basico): Spanish question, kt hover only, Spanish answers
    // ── NIVEL 2 (normal): Spanish question, kt + tc hover, Spanish answers
    // ── NIVEL 3 (dificil): English question, no hover, Spanish answers
    // ── NIVEL 4 (maestro): English question, no hover, English answers

    if (PQ.niv === 'dificil' || PQ.niv === 'maestro') { // English question — no hover terms
        qtxtEl.textContent = q.en;
        hintEl.style.display = 'none';
    } else { // Spanish question with hover terms
        hintEl.style.display = 'block';
        hintEl.textContent = '💡 Toca los términos en inglés para ver la traducción';

        var html = q.es;

        // ===== NIVEL 1: replace tc with Spanish before rendering =====
        // Same base question for all levels — only the render layer changes.
        // For basico, any tc in English must be converted to Spanish so only kt remains English.
        if (PQ.niv === 'basico' && q.tc && q.tc_es && html.indexOf(q.tc) >= 0) {
            html = html.replace(q.tc, q.tc_es);
        }

        // ===== KEY TERM (all Spanish levels) =====
        if (q.kt && html.indexOf(q.kt) >= 0) {
            html = html.replace(q.kt, '<span class="kt kt1" id="pq-kt1">' + q.kt + '</span>' + '<span class="tb" id="pq-tb1"></span>');
        }

        // ===== CONTEXT WORD (normal = Nivel 2 only + redundancy rule) =====
        var canUseTc = PQ.niv === 'normal' && q.tc && q.tc_es && html.indexOf(q.tc) >= 0 && q.kt.toLowerCase().indexOf(q.tc.toLowerCase()) < 0;

        if (canUseTc) {
            html = html.replace(q.tc, '<span class="kt kt2" id="pq-kt2">' + q.tc + '</span>' + '<span class="tb" id="pq-tb2"></span>');
        }

        qtxtEl.innerHTML = html;

        // Bind kt1 tooltip
        var kt1 = document.getElementById('pq-kt1');
        if (kt1) {
            kt1.addEventListener('click', (function (ktEs) {
                return function () {
                    pqTogTip('pq-tb1', ktEs);
                };
            })(q.kt_es));
        }

        // Bind kt2 tooltip
        var kt2 = document.getElementById('pq-kt2');
        if (kt2 && q.tc_es) {
            kt2.addEventListener('click', (function (tcEs) {
                return function () {
                    pqTogTip('pq-tb2', tcEs);
                };
            })(q.tc_es));
        }
    }

    // Render answer options — English only for maestro
    var optsEl = document.getElementById('pq-opts');
    optsEl.innerHTML = '';
    var ops = (PQ.niv === 'maestro') ? pqShuffle(q.ops_en.slice()) : pqShuffle(q.ops.slice());

    ops.forEach(function (op) {
        var div = document.createElement('div');
        div.className = 'pq-opt';
        div.innerHTML = '<div class="pq-opt-dot"></div><span>' + op + '</span>';
        div.addEventListener('click', (function (o, el) {
            return function () {
                pqPick(el, o, q);
            };
        })(op, div));
        optsEl.appendChild(div);
    });
}

function pqTogTip(bid, txt) {
    var b = document.getElementById(bid);
    if (! b) 
        return;
    


    if (b.style.display === 'inline-block') {
        b.style.display = 'none';
        b.textContent = '';
    } else {
        b.textContent = txt;
        b.style.display = 'inline-block';
    }
}

function pqPick(el, op, q) {
    if (PQ.done) 
        return;
    


    PQ.done = true;

    var ok = (PQ.niv === 'maestro') ? q.ok_en : q.ok;

    if (op === ok) {
        PQ.cor ++;
        el.classList.add('cor');
    } else {
        PQ.inc ++;
        PQ.wrongIds.push(q.id);
        el.classList.add('wrg');
        // Highlight the correct answer
        document.querySelectorAll('.pq-opt').forEach(function (d) {
            var span = d.querySelector('span');
            if (span && span.textContent === ok) 
                d.classList.add('cor');
            


        });
    }

    document.getElementById('pq-cor').textContent = PQ.cor;
    document.getElementById('pq-inc').textContent = PQ.inc;

    var nextBtn = document.getElementById('pq-next-btn');
    nextBtn.style.display = 'block';
    nextBtn.textContent = (PQ.idx < PQ.questions.length - 1) ? 'Siguiente →' : 'Ver resultados →';
}

function pqNext() {
    PQ.idx ++;
    if (PQ.idx >= PQ.questions.length) {
        pqResults();
    } else {
        pqRender();
        var screen = document.getElementById('screen-preguntas');
        if (screen) 
            screen.scrollTop = 0;
        


    }
}

function pqResults() {
    var tot = PQ.questions.length;
    var pct = Math.round((PQ.cor / tot) * 100);

    // Score color
    var color = pct >= 80 ? '#64B21C' : pct >= 50 ? '#C9A000' : '#C62020';
    var pctEl = document.getElementById('pq-res-pct');
    pctEl.textContent = pct + '%';
    pctEl.style.color = color;

    // Message
    var ti,
        su;
    if (pct === 100) {
        ti = '¡Perfecto! 🎯';
        su = 'Lo contestaste todo correcto. Sigue así.';
    } else if (pct >= 80) {
        ti = '¡Excelente!';
        su = 'Estás muy cerca de estar listo para el examen real.';
    } else if (pct >= 60) {
        ti = 'Buen intento';
        su = 'Revisa los términos que fallaste y vuelve a intentarlo.';
    } else if (pct >= 40) {
        ti = 'Sigue practicando';
        su = 'Cada intento te acerca más a lograrlo. ¡Tú puedes!';
    } else {
        ti = 'Necesitas repasar';
        su = 'No te rindas — practica los términos y vuelve a intentarlo.';
    }

    document.getElementById('pq-res-title').textContent = ti;
    document.getElementById('pq-res-sub').textContent = su;
    document.getElementById('pq-res-cor').textContent = PQ.cor;
    document.getElementById('pq-res-inc').textContent = PQ.inc;

    // Wrong terms
    var wrongsEl = document.getElementById('pq-wrongs');
    var retryBtn = document.getElementById('pq-retry-btn');
    var listEl = document.getElementById('pq-wrong-list');

    if (PQ.wrongIds.length > 0) {
        var wq = QUESTIONS.filter(function (q) {
            return PQ.wrongIds.indexOf(q.id) >= 0;
        });
        listEl.innerHTML = wq.map(function (q) {
            return '<div class="pq-wrong-item">' + '<div class="pq-wi-en">' + q.kt + '</div>' + '<div class="pq-wi-es">' + q.kt_es + '</div>' + '</div>';
        }).join('');
        wrongsEl.style.display = 'block';
        retryBtn.style.display = 'block';
    } else {
        wrongsEl.style.display = 'none';
        retryBtn.style.display = 'none';
    } pqShowSub('pq-results');
}

function pqInit() { // Level card selection
    document.querySelectorAll('.level-option').forEach(function (card) {
        card.addEventListener('click', function () {
            document.querySelectorAll('.level-option').forEach(function (c) {
                c.classList.remove('active');
            });
            card.classList.add('active');
            PQ.niv = card.dataset.level;
        });
    });

    // Buttons
    var startBtn = document.getElementById('pq-start-btn');
    if (startBtn) 
        startBtn.addEventListener('click', pqStart);
    


    var nextBtn = document.getElementById('pq-next-btn');
    if (nextBtn) 
        nextBtn.addEventListener('click', pqNext);
    


    var retryBtn = document.getElementById('pq-retry-btn');
    if (retryBtn) 
        retryBtn.addEventListener('click', pqRetry);
    


    var againBtn = document.getElementById('pq-again-btn');
    if (againBtn) 
        againBtn.addEventListener('click', function () {
            pqShowSub('pq-levels');
        });
    


}

// ─── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    bindNavigation();
    startTipRotation();
    pqValidatorReport(); // modular validator — results in console
    pqInit();

    // ── Asociar bindings ──
    var asStartBtn = document.getElementById('as-start-btn');
    if (asStartBtn) 
        asStartBtn.addEventListener('click', asInit);
    


    var asPlayAgainBtn = document.getElementById('as-play-again-btn');
    if (asPlayAgainBtn) 
        asPlayAgainBtn.addEventListener('click', asInit);
    


    var asBackMini = document.getElementById('as-back-mini');
    if (asBackMini) 
        asBackMini.addEventListener('click', function () {
            asShowSub('as-setup');
        });
    


    goTo('splash');
});

// ══════════════════════════════════════════════════════
// VALIDATION + ID SYSTEM
// ══════════════════════════════════════════════════════

function pqValidateQuestion(q) {
    var errors = [];

    if (q.id === undefined || q.id === null) 
        errors.push('missing id');
    


    if (! q.kt) 
        errors.push('missing kt');
    


    if (! q.kt_es) 
        errors.push('missing kt_es');
    


    if (! q.es) 
        errors.push('missing es');
    


    if (! q.en) 
        errors.push('missing en');
    


    if (! q.ops || q.ops.length !== 3) 
        errors.push('invalid ops');
    


    if (! q.ops_en || q.ops_en.length !== 3) 
        errors.push('invalid ops_en');
    


    if (! q.ok) 
        errors.push('missing ok');
    


    if (! q.ok_en) 
        errors.push('missing ok_en');
    


    if (q.es && q.kt && q.es.indexOf(q.kt) < 0) {
        errors.push('kt not in es');
    }

    if (q.tc && q.kt && q.kt.toLowerCase().indexOf(q.tc.toLowerCase()) >= 0) {
        errors.push('tc inside kt — will be suppressed at render');
    }

    if (q.tc && q.es && q.es.indexOf(q.tc) < 0) {
        errors.push('tc not in es — tc hover will not render');
    }

    return errors;
}

function pqValidateBank() {
    var seen = {};
    QUESTIONS.forEach(function (q) {
        if (seen[q.id]) {
            console.error('Duplicate ID:', q.id);
        }
        seen[q.id] = true;

        var errs = pqValidateQuestion(q);
        if (errs.length) {
            console.warn('Q ' + q.id + ':', errs);
        }
    });
}

// ══════════════════════════════════════════════════════
// NEXT ID GENERATOR
// ══════════════════════════════════════════════════════

function pqGetNextId() {
    var maxId = 0;
    QUESTIONS.forEach(function (q) {
        if (q.id > maxId) 
            maxId = q.id;
        


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
    var es = q.es || '';
    var esL = es.toLowerCase();

    // ── HARD VIOLATION: explicit definition, classification, or abstract
    //    confirmation stems that clearly violate DMV decision-based format.
    var hardPatterns = [
        {
            re: /^¿qué es/i,
            msg: 'Definition stem: "¿Qué es…"'
        },
        {
            re: /^¿qué son/i,
            msg: 'Definition stem: "¿Qué son…"'
        },
        {
            re: /^¿cómo se clasifica/i,
            msg: 'Classification stem'
        },
        {
            re: /^¿cómo se llama/i,
            msg: 'Naming stem'
        }, {
            re: /¿el .{1,50} implica/i,
            msg: '"el X implica" — abstract confirmation'
        }, {
            re: /¿la .{1,50} implica/i,
            msg: '"la X implica" — abstract confirmation'
        },
    ];

    for (var i = 0; i < hardPatterns.length; i++) {
        if (hardPatterns[i].re.test(esL)) {
            violations.push({
                severity: 'hard_violation',
                reason: hardPatterns[i].msg,
                text: es.slice(0, 80)
            });
            return violations;
        }
    }

    // ── HARD VIOLATION: abstract ¿El/La/Los/Las + pure state verb
    //    (not action verbs — these are abstract conceptual questions)
    var abstractState = /^¿(el|la|los|las)\s+\S+(\s+\S+)?\s+(reduce|reducen|implica|implican|afecta|afectan|se considera|es un|son un)/i;
    if (abstractState.test(esL)) {
        violations.push({
            severity: 'hard_violation',
            reason: 'Abstract "¿El/La/Los/Las X + state verb" — no scenario, no decision',
            text: es.slice(0, 80)
        });
        return violations;
    }

    // ── NEEDS REVIEW: direct factual stems without scenario opener.
    //    These may still be valid exam-style questions (¿Cuántos…? ¿Qué indica…?)
    //    but should be reviewed to confirm they present a clear decision prompt.
    var scenarioOpener = /^[¿¡]?(si|cuando|al|antes de|después de|despues de|tras|en caso de|en un[ao]?|estás|estas|vas|ves|tienes)/i;
    // Direct factual openers — valid but not scenario-first
    var factualOpener = /^[¿¡]?(cuál|cual|cuánto|cuanto|cuántos|cuantos|cuántas|cuantas|cuándo|cuando|dónde|donde|quién|quien|qué|que|cómo|como|a qué|a que|en qué|en que|de qué|de que|por cuánto|por cuanto|a partir de|debes|debe|puedes|puede|pueden|solo los|sólo los|para|además|ademas|entre las|aplica|aplican)/i;

    if (! scenarioOpener.test(esL) && ! factualOpener.test(esL)) {
        violations.push({
            severity: 'needs_review',
            reason: 'No scenario opener (Si/Cuando/Al) and no recognized factual stem — verify question is decision-based',
            text: es.slice(0, 80)
        });
    }

    return violations;
};

// ── RULE: single_idea_rule ────────────────────────────────────
// Rejects stems with multiple question marks (stacked questions).
PQ_RULES.single_idea_rule = function (q) {
    var violations = [];
    var es = q.es || '';
    var count = (es.match(/[?]/g) || []).length;
    if (count > 1) {
        violations.push({
            severity: 'hard_violation',
            reason: 'Multiple question marks (' + count + ') — stacked question',
            text: es.slice(0, 80)
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
    var ok = q.ok || '';
    if (! ops.length || ! ok) 
        return violations;
    


    var okLen = ok.length;
    var others = ops.filter(function (o) {
        return o !== ok;
    }).map(function (o) {
        return o.length;
    });
    var maxOther = Math.max.apply(null, others);
    var ratio = okLen / maxOther;
    if (ratio > 1.8) {
        violations.push({
            severity: 'hard_violation',
            reason: 'Correct answer is ' + ratio.toFixed(1) + 'x longer than longest distractor (' + okLen + 'c vs ' + maxOther + 'c)',
            text: ok.slice(0, 80)
        });
    } else if (ratio > 1.4) {
        violations.push({
            severity: 'needs_review',
            reason: 'Correct answer is ' + ratio.toFixed(1) + 'x longer than longest distractor (' + okLen + 'c vs ' + maxOther + 'c)',
            text: ok.slice(0, 80)
        });
    }
    return violations;
};

// ── RULE: answer_coverage_rule ────────────────────────────────
// Confirms ops_en and ok_en exist and are complete.
PQ_RULES.answer_coverage_rule = function (q) {
    var violations = [];
    if (! q.ops_en || q.ops_en.length !== 3) {
        violations.push({
            severity: 'hard_violation',
            reason: 'ops_en missing or does not have exactly 3 choices — maestro level will break',
            text: (q.es || '').slice(0, 80)
        });
    }
    if (! q.ok_en) {
        violations.push({
            severity: 'hard_violation',
            reason: 'ok_en missing — maestro level correct answer undefined',
            text: (q.es || '').slice(0, 80)
        });
    }
    return violations;
};

// ── RULE: level_term_enforcement_rule ─────────────────────────
// Validates kt, kt_es, tc, tc_es existence and placement in es.
// Validates hover reference mapping by level.
// Level names are INTERNAL code variables:
// basico | normal | dificil | maestro
PQ_RULES.level_term_enforcement_rule = function (q) {
    var violations = [];
    var es = q.es || '';
    var en = q.en || '';
    var kt = q.kt || '';
    var ktEs = q.kt_es || '';
    var tc = q.tc || '';
    var tcEs = q.tc_es || '';

    function hard(reason, text) {
        violations.push({
            severity: 'hard_violation',
            reason: reason,
            text: (text || '').slice(0, 80)
        });
    }
    function review(reason, text) {
        violations.push({
            severity: 'needs_review',
            reason: reason,
            text: (text || '').slice(0, 80)
        });
    }

    if (! kt) 
        hard('kt missing — basico/normal will have no hover term', es);
     else if (kt && es && es.indexOf(kt) < 0) 
        hard('kt="' + kt + '" not in es — hover will not render', es);
    


    if (! ktEs) 
        hard('kt_es missing — tooltip will be empty', es);
    


    if (! tc) 
        review('tc missing — normal level falls back to 1 English term', es);
     else {
        if (! tcEs) 
            hard('tc_es missing — normal level tooltip will be empty', es);
        


        if (es && es.indexOf(tc) < 0) 
            hard('tc="' + tc + '" not in es — normal level hover will not render', es);
        


        if (kt && kt.toLowerCase().indexOf(tc.toLowerCase()) >= 0) 
            hard('tc="' + tc + '" inside kt="' + kt + '" — redundancy violation', es);
        


        if (kt && tc.toLowerCase() === kt.toLowerCase()) 
            hard('tc equals kt — rendering collision', es);
        


    }

    if (! en) 
        hard('en missing — dificil/maestro will render blank', es);
    


    return violations;
};

// ── RUNNER ────────────────────────────────────────────────────
// Each rule returns an array of:
// { severity: 'hard_violation'|'needs_review', reason: string, text: string }
// or legacy strings (converted here for backward compat).
function pqRunValidator() {
    var results = [];

    QUESTIONS.forEach(function (q) {
        var qViolations = [];

        Object.keys(PQ_RULES).forEach(function (ruleName) {
            var raw = PQ_RULES[ruleName](q);
            raw.forEach(function (v) {
                if (typeof v === 'string') { // legacy string format — convert
                    var sev = v.indexOf('[HARD]') >= 0 ? 'hard_violation' : 'needs_review';
                    qViolations.push({
                        rule: ruleName,
                        severity: sev,
                        reason: v.replace(/\[(HARD|SUSPICIOUS)\]\s*/, ''),
                        text: (q.es || '').slice(0, 80)
                    });
                } else {
                    qViolations.push({
                        rule: ruleName,
                        severity: v.severity,
                        reason: v.reason,
                        text: v.text || (q.es || '').slice(0, 80)
                    });
                }
            });
        });

        if (qViolations.length) {
            results.push({
                id: q.id,
                es: (q.es || '').slice(0, 80),
                violations: qViolations
            });
        }
    });

    return results;
}

// ── REPORTER ─────────────────────────────────────────────────
// Groups results by rule + severity (hard_violation | needs_review).
function pqValidatorReport() {
    var results = pqRunValidator();

    if (! results.length) {
        console.log('%c✅ ALTOYSIGA Validator: All 320 questions passed.', 'color:green;font-weight:bold');
        return results;
    }

    var hardCount = 0,
        reviewCount = 0;
    results.forEach(function (r) {
        r.violations.forEach(function (v) {
            if (v.severity === 'hard_violation') 
                hardCount++;
             else 
                reviewCount++;
            


        });
    });

    console.warn('%c⚠ ALTOYSIGA Validator — ' + results.length + ' questions flagged: ' + hardCount + ' hard_violation  ·  ' + reviewCount + ' needs_review', 'color:orange;font-weight:bold;font-size:13px');

    // Group by rule → severity
    var byKey = {};
    results.forEach(function (r) {
        r.violations.forEach(function (v) {
            var key = v.rule + ' [' + v.severity + ']';
            if (! byKey[key]) 
                byKey[key] = [];
            


            byKey[key].push({
                id: r.id,
                reason: v.reason,
                text: v.text || r.es
            });
        });
    });

    Object.keys(byKey).sort().forEach(function (key) {
        var items = byKey[key];
        var isHard = key.indexOf('hard_violation') >= 0;
        var color = isHard ? 'color:#e74c3c;font-weight:bold' : 'color:#e67e22;font-weight:bold';
        console.groupCollapsed('%c' + key + ' (' + items.length + ')', color);
        items.forEach(function (item) {
            if (isHard) 
                console.error('Q' + item.id + ': ' + item.reason);
             else 
                console.warn('Q' + item.id + ': ' + item.reason);
            


            console.log('  → ' + item.text);
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
    var esL = (q.es || '').toLowerCase();

    var allowed = [
        'passing',
        'turning',
        'backing',
        'parking',
        'speeding',
        'merging',
        'driving',
        'following',
        'stopping',
        'starting',
        'yielding'
    ];

    var badPatterns = [
        {
            re: /est[aá]\w*\s+being/,
            msg: 'estar + "being" — replace with a natural verb or allowed -ing label'
        },
        {
            re: /te est[aá]\s+being/,
            msg: 'te está being — unnatural; try "te está passing"'
        },
        {
            re: /est[aá]\s+making/,
            msg: 'está making — replace with hacer or rewrite'
        },
        {
            re: /est[aá]\s+doing/,
            msg: 'está doing — replace with hacer or rewrite'
        }, {
            re: /fue\s+[a-z]+ed/,
            msg: 'fue + English -ed — unnatural passive hybrid'
        }, {
            re: /siendo\s+[a-z]+ed/,
            msg: 'siendo + English -ed — unnatural passive hybrid'
        }, {
            re: /ha\s+sido\s+[a-z]+ing/,
            msg: 'ha sido + English -ing — unnatural hybrid tense'
        },
    ];

    badPatterns.forEach(function (p) {
        var m = esL.match(p.re);
        if (m) {
            var words = m[0].split(/\s+/);
            var eng = words[words.length - 1];
            if (! allowed.some(function (w) {
                return eng === w;
            })) {
                violations.push({
                    severity: 'hard_violation',
                    reason: 'Unnatural Spanglish: "' + m[0] + '" — ' + p.msg,
                    text: (q.es || '').slice(0, 80)
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
// pqAddRule('my_rule', function(q) {
//     return q.es.length > 200 ? ['Stem too long'] : [];
// });
function pqAddRule(name, fn) {
    if (typeof fn !== 'function') {
        console.error('pqAddRule: fn must be a function');
        return;
    }
    PQ_RULES[name] = fn;
    console.log('Rule registered: ' + name);
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
        en: 'yield',
        es: 'ceder el paso',
        category: 'right-of-way',
        priority: 'high'
    },
    {
        id: 2,
        en: 'merge',
        es: 'incorporarse',
        category: 'maneuvers',
        priority: 'high'
    },
    {
        id: 3,
        en: 'lane',
        es: 'carril',
        category: 'road',
        priority: 'high'
    },
    {
        id: 4,
        en: 'shoulder',
        es: 'acotamiento',
        category: 'road',
        priority: 'high'
    }, {
        id: 5,
        en: 'blind spot',
        es: 'punto ciego',
        category: 'visibility',
        priority: 'high'
    }, {
        id: 6,
        en: 'crosswalk',
        es: 'paso peatonal',
        category: 'pedestrian',
        priority: 'high'
    }, {
        id: 7,
        en: 'right-of-way',
        es: 'derecho de paso',
        category: 'right-of-way',
        priority: 'high'
    }, {
        id: 8,
        en: 'pull over',
        es: 'orillarse',
        category: 'maneuvers',
        priority: 'high'
    }, {
        id: 9,
        en: 'back up',
        es: 'retroceder',
        category: 'maneuvers',
        priority: 'high'
    }, {
        id: 10,
        en: 'ramp',
        es: 'rampa',
        category: 'road',
        priority: 'high'
    }, {
        id: 11,
        en: 'on-ramp',
        es: 'entrada a autopista',
        category: 'road',
        priority: 'high'
    }, {
        id: 12,
        en: 'off-ramp',
        es: 'salida de autopista',
        category: 'road',
        priority: 'high'
    }, {
        id: 13,
        en: 'median',
        es: 'camellón',
        category: 'road',
        priority: 'high'
    }, {
        id: 14,
        en: 'turn lane',
        es: 'carril de giro',
        category: 'road',
        priority: 'high'
    }, {
        id: 15,
        en: 'headlights',
        es: 'luces delanteras',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 16,
        en: 'high beams',
        es: 'luces altas',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 17,
        en: 'low beams',
        es: 'luces bajas',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 18,
        en: 'glare',
        es: 'deslumbramiento',
        category: 'visibility',
        priority: 'high'
    }, {
        id: 19,
        en: 'hazard',
        es: 'peligro',
        category: 'safety',
        priority: 'high'
    }, {
        id: 20,
        en: 'skid',
        es: 'derrape',
        category: 'safety',
        priority: 'high'
    }, {
        id: 21,
        en: 'brake',
        es: 'frenar',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 22,
        en: 'traction',
        es: 'tracción',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 23,
        en: 'following distance',
        es: 'distancia de seguimiento',
        category: 'safety',
        priority: 'high'
    }, {
        id: 24,
        en: 'tailgating',
        es: 'seguir muy de cerca',
        category: 'safety',
        priority: 'high'
    }, {
        id: 25,
        en: 'work zone',
        es: 'zona de construcción',
        category: 'signs',
        priority: 'high'
    }, {
        id: 26,
        en: 'school zone',
        es: 'zona escolar',
        category: 'signs',
        priority: 'high'
    }, {
        id: 27,
        en: 'carpool lane',
        es: 'carril compartido',
        category: 'road',
        priority: 'high'
    }, {
        id: 28,
        en: 'flex lane',
        es: 'carril reversible',
        category: 'road',
        priority: 'high'
    }, {
        id: 29,
        en: 'detour',
        es: 'desvío',
        category: 'road',
        priority: 'high'
    }, {
        id: 30,
        en: 'flagger',
        es: 'banderero',
        category: 'work-zone',
        priority: 'high'
    }, {
        id: 31,
        en: 'railroad crossing',
        es: 'cruce de tren',
        category: 'road',
        priority: 'high'
    }, {
        id: 32,
        en: 'train',
        es: 'tren',
        category: 'road',
        priority: 'high'
    }, {
        id: 33,
        en: 'emergency vehicle',
        es: 'vehículo de emergencia',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 34,
        en: 'sirens',
        es: 'sirenas',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 35,
        en: 'flashing lights',
        es: 'luces intermitentes',
        category: 'vehicle',
        priority: 'high'
    }, {
        id: 36,
        en: 'intersection',
        es: 'intersección',
        category: 'road',
        priority: 'high'
    }, {
        id: 37,
        en: 'sidewalk',
        es: 'banqueta',
        category: 'pedestrian',
        priority: 'high'
    }, {
        id: 38,
        en: 'curve',
        es: 'curva',
        category: 'road',
        priority: 'high'
    }, {
        id: 39,
        en: 'hill',
        es: 'colina',
        category: 'road',
        priority: 'high'
    }, {
        id: 40,
        en: 'roundabout',
        es: 'glorieta',
        category: 'road',
        priority: 'high'
    },
];

// ─── VOCABULARY HELPERS ───────────────────────────────────────
function getRandomTerms(n) {
    var pool = DMV_TERMS.filter(function (t) {
        return t.priority === 'high';
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
        cards.push({id: t.id, lang: 'en', text: t.en});
        cards.push({id: t.id, lang: 'es', text: t.es});
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
    attempts: 0
};

// ─── SUB-SCREEN SWITCHER (mirrors pqShowSub) ──────────────────
function asShowSub(id) {
    document.querySelectorAll('.as-sub').forEach(function (s) {
        s.classList.remove('active');
    });
    var sub = document.getElementById(id);
    if (sub) 
        sub.classList.add('active');
    


    var screen = document.getElementById('screen-asociar');
    if (screen) 
        screen.scrollTop = 0;
    


}

// ─── INIT A NEW ROUND ─────────────────────────────────────────
function asInit() {
    AS.cards = getMatchPairs();
    AS.selected = null;
    AS.locked = false;
    AS.matched = 0;
    AS.attempts = 0;
    asRender();
    asShowSub('as-board');
}

// ─── RENDER GRID ──────────────────────────────────────────────
function asRender() {
    var grid = document.getElementById('as-grid');
    if (! grid) 
        return;
    


    grid.innerHTML = '';
    AS.cards.forEach(function (card) {
        var el = document.createElement('div');
        el.className = 'as-card ' + (
        card.lang === 'en' ? 'as-card-en' : 'as-card-es'
    );
        el.setAttribute('data-id', card.id);
        el.setAttribute('data-lang', card.lang);
        el.textContent = card.text;
        el.addEventListener('click', function () {
            asHandleClick(el, card);
        });
        grid.appendChild(el);
    });
    asUpdateStatus();
}

// ─── UPDATE COUNTERS ──────────────────────────────────────────
function asUpdateStatus() {
    var m = document.getElementById('as-matched');
    var a = document.getElementById('as-attempts');
    if (m) 
        m.textContent = AS.matched;
    


    if (a) 
        a.textContent = AS.attempts;
    


}

// ─── CARD CLICK HANDLER ───────────────────────────────────────
function asHandleClick(el, card) {
    if (AS.locked) 
        return;
    


    if (el.classList.contains('as-matched-done')) 
        return;
    


    if (el.classList.contains('as-wrong')) 
        return;
    


    // No selection yet → select this card
    if (! AS.selected) {
        AS.selected = {
            el: el,
            card: card
        };
        el.classList.add('as-selected');
        return;
    }

    // Tap same card → deselect
    if (AS.selected.el === el) {
        el.classList.remove('as-selected');
        AS.selected = null;
        return;
    }

    // Second card tapped — evaluate pair
    AS.locked = true;
    AS.attempts ++;
    asUpdateStatus();

    var firstEl = AS.selected.el;
    var firstCard = AS.selected.card;
    AS.selected = null;

    if (firstCard.id === card.id && firstCard.lang !== card.lang) { // ✓ CORRECT MATCH
        firstEl.classList.remove('as-selected');
        firstEl.classList.add('as-correct');
        el.classList.add('as-correct');
        setTimeout(function () {
            firstEl.classList.remove('as-correct');
            el.classList.remove('as-correct');
            firstEl.classList.add('as-matched-done');
            el.classList.add('as-matched-done');
            AS.matched ++;
            asUpdateStatus();
            AS.locked = false;
            if (AS.matched === 6) {
                setTimeout(asShowResults, 600);
            }
        }, 480);
    } else { // ✗ WRONG — flash and reset
        firstEl.classList.remove('as-selected');
        firstEl.classList.add('as-wrong');
        el.classList.add('as-wrong');
        setTimeout(function () {
            firstEl.classList.remove('as-wrong');
            el.classList.remove('as-wrong');
            AS.locked = false;
        }, 700);
    }
}

// ─── RESULTS SCREEN ───────────────────────────────────────────
function asShowResults() {
    var attempts = AS.attempts;
    var accuracy = Math.round((6 / attempts) * 100);
    var iconEl = document.getElementById('as-result-icon');
    var headingEl = document.getElementById('as-result-heading');
    var accEl = document.getElementById('as-result-acc');
    var finalEl = document.getElementById('as-final-attempts');

    if (finalEl) 
        finalEl.textContent = attempts;
    


    if (accuracy === 100) {
        if (iconEl) 
            iconEl.textContent = '🏆';
        


        if (headingEl) 
            headingEl.textContent = '¡Perfecto!';
        


        if (accEl) {
            accEl.textContent = '100% de precisión';
            accEl.style.color = '#64B21C';
        }
    } else if (accuracy >= 70) {
        if (iconEl) 
            iconEl.textContent = '⭐';
        


        if (headingEl) 
            headingEl.textContent = '¡Bien hecho!';
        


        if (accEl) {
            accEl.textContent = accuracy + '% de precisión';
            accEl.style.color = '#C9A000';
        }
    } else {
        if (iconEl) 
            iconEl.textContent = '💪';
        


        if (headingEl) 
            headingEl.textContent = '¡Sigue practicando!';
        


        if (accEl) {
            accEl.textContent = accuracy + '% de precisión';
            accEl.style.color = '#D95528';
        }
    } asShowSub('as-results');
}
