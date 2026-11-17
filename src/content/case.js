export const caseStudy = {
  es: {
    meta: {
      title: 'Sistema de cobros presencial · Cynthia Rivero',
      description:
        'Caso de estudio: cómo se actualizó la plataforma de una red de cobranza presencial, de un sistema antiguo a uno moderno, consistente y accesible.',
    },
    back: '← Volver al portfolio',
    label: 'Caso de estudio · versión NDA',
    title: 'Sistema de cobros presencial',
    lead: 'Cómo se actualizó la plataforma: de un sistema antiguo a uno moderno, consistente y accesible.',
    info: [
      ['Empresa', 'Red de cobranza presencial'],
      ['Período', '2024 – 2026'],
      ['Mi rol', 'Lead Product Designer'],
      ['Equipo', '2 diseñadores UX/UI · 1 desarrollador front-end'],
    ],
    tocLabel: 'Índice:',
    tocAria: 'Índice',
    toc: ['Contexto', 'En 1 minuto', 'Cuatro inicios', 'Qué aprendí'],

    context: {
      title: 'Un desafío integral, no solo un rediseño',
      subtitle:
        'El puesto anterior era una aplicación de escritorio cerrada y sin design system. Había que actualizar los servicios, sumar nuevos medios de pago digitales e implementarlos en cada local, con una mirada 360° junto al negocio.',
      blocks: [
        {
          title: 'Tecnología',
          list: [
            'Nuevo back end y base de datos.',
            'Migración de sistemas a la nube.',
            'Nuevas posibilidades negociadas con las limitaciones técnicas del sistema heredado.',
          ],
        },
        {
          title: 'Negocio y regulación',
          list: [
            'Nuevas reglas de compliance.',
            'Integración de nuevos medios de pago.',
            'Incorporación de nuevas empresas de cobro.',
          ],
        },
        {
          title: 'Personas',
          list: [
            'Entender la necesidad real de la empresa.',
            'Llevar la mejor experiencia a los cajeros de toda la red.',
            'Un rediseño funcional, no solo visual.',
          ],
        },
      ],
      areasLabel: 'Trabajamos junto a',
      areas: ['Operaciones', 'Legales', 'IT', 'Producto', 'Desarrollo'],
    },

    summary: {
      title: 'En 1 minuto',
      subtitle:
        'El nuevo puesto de la red: un sistema complejo de cobros y pagos que hoy es más ágil, claro y accesible, pensado para reducir errores en el día a día de quienes lo usan.',
      blocks: [
        {
          title: 'Mi rol',
          text: 'Lead Product Designer en un equipo de 2 diseñadores UX/UI y 1 desarrollador front-end, trabajando con Operaciones, Legales, IT y Producto.',
        },
        {
          title: 'Lo que impulsé',
          list: [
            'De una app de escritorio cerrada a una plataforma web: funciona en cualquier dispositivo, incluso una tablet.',
            'La adopción del design system, alineando áreas con prioridades distintas.',
            'React en front-end en lugar de tecnologías heredadas.',
          ],
        },
        {
          title: 'El resultado',
          text: 'Una plataforma desplegada en una red de cobranza presencial de alcance nacional. En el testeo, 5 de 6 tareas se resolvieron de forma autónoma y los 6 cajeros la percibieron como una mejora clara.',
        },
      ],
      resultsTitle: 'Primeros resultados',
      stats: [
        ['~2 meses', 'menos de cronograma gracias al design system.'],
        ['5 de 6', 'tareas resueltas de forma autónoma en el primer uso.'],
        ['1 día – 1 semana', 'de curva de aprendizaje, según los cajeros.'],
        ['Web + tablet', 'cualquier dispositivo, sin equipos especiales.'],
      ],
      noteLead: 'Sobre los datos.',
      note: ' La plataforma está en etapa de despliegue. Aún no hay métricas generales sobre el negocio. Las expuestas acá son dentro de un círculo cerrado de 6 cajeros propios que nos ayudaron en los testeos.',
    },

    versions: {
      title: 'Cuatro inicios hasta llegar al final',
      subtitle:
        'Validamos cada propuesta con el equipo de soporte a cajeros, que conoce las quejas y problemas cotidianos de la red. Sus respuestas definieron qué versión avanzaba y cuál se descartaba.',
      discarded: 'Descartada',
      final: 'Final',
      whyDiscarded: 'Por qué se descartó',
      whyWorked: 'Por qué funcionó.',
      items: [
        {
          name: 'v1 · Stepper de caja',
          text: '"Abrí la caja → Transaccioná → Cerrá la caja", más acciones rápidas en cards.',
          why: 'Los cajeros no realizan esas acciones en orden: pueden no utilizar el ingreso o retiro de valores en el día. De hacerlo, lo hacen en cualquier momento del día para hacer ajustes en la caja.',
        },
        {
          name: 'v2 · Dashboard',
          text: 'Barra de puesto, accesos con íconos, últimas transacciones y saldo por medio de pago.',
          why: 'El cajero no necesita tener tanta información disponible en una página principal. Su acción principal es cobrar, no realizar movimientos en caja.',
        },
        {
          name: 'v3 · Cards y saldo',
          text: 'Accesos grandes y saldo de caja con opción de ocultarlo.',
          why: 'No podía ser la visual inicial por contener datos sensibles. Se mostraban muchos datos irrelevantes para el inicio de la jornada del cajero y no le simplificaba las tareas principales.',
        },
        {
          name: 'Final · Estado de caja',
          final: true,
          text: 'Solo accesos rápidos. Con la caja cerrada, todo se deshabilita salvo caja y transacciones.',
          why: 'Avisa de antemano solo las acciones posibles. El primer inicio de sesión del día dirige automáticamente a "abrir caja"; el resto lo inicia el cajero cuando lo necesita.',
        },
      ],
    },

    learnings: {
      title: 'Qué aprendí y qué haría distinto',
      items: [
        {
          title: 'Diseñar también es negociar',
          text: 'Implementar el design system implicó alinear prioridades distintas. Aprendí a escuchar las razones de cada área y a buscar puntos en común sin resignar la propuesta. Hoy llevaría antes un piloto o un prototipo para mostrar su valor, en lugar de defenderlo solo con argumentos.',
        },
        {
          title: 'El vocabulario lo define el usuario',
          text: 'Para el cajero, "movimientos" y "transacciones" son lo mismo. Hoy validaría la nomenclatura con cajeros antes de desarrollar, no después.',
        },
        {
          title: 'Llevar a los cajeros antes al proceso',
          text: 'Validamos cada propuesta con soporte, pero a los cajeros los escuchamos recién en el testeo, y ahí aparecieron problemas como la ubicación de los mensajes. Hoy sumaría cajeros desde las primeras versiones.',
        },
        {
          title: 'Definir métricas de éxito desde el día uno',
          text: 'Hoy tenemos resultados del testeo, pero no métricas de negocio. Acordaría con producto qué medir (tiempo por cobro, diferencias de caja, reclamos) antes de lanzar.',
        },
      ],
    },

    end: {
      title: '¿Querés ver el caso completo?',
      text: 'El PDF tiene las 18 páginas: relevamiento, design system, solución, iteración y validación. Contactame por mail para charlar sobre nuevas oportunidades.',
      download: 'Descargar el caso (PDF)',
      back: 'Volver al portfolio',
    },
  },

  en: {
    meta: {
      title: 'In-person payments system · Cynthia Rivero',
      description:
        'Case study: how the platform of an in-person payment collection network was updated, from an old system to a modern, consistent, and accessible one.',
    },
    back: '← Back to portfolio',
    label: 'Case study · NDA version',
    title: 'In-person payments system',
    lead: 'How the platform was updated: from an old system to a modern, consistent, and accessible one.',
    info: [
      ['Company', 'In-person payment collection network'],
      ['Period', '2024 – 2026'],
      ['My role', 'Lead Product Designer'],
      ['Team', '2 UX/UI designers · 1 front-end developer'],
    ],
    tocLabel: 'Contents:',
    tocAria: 'Contents',
    toc: ['Context', 'In 1 minute', 'Four home screens', 'What I learned'],

    context: {
      title: 'An end-to-end challenge, not just a redesign',
      subtitle:
        'The previous workstation was a closed desktop application with no design system. We had to update the services, add new digital payment methods, and roll them out at every location, taking a 360° view together with the business.',
      blocks: [
        {
          title: 'Technology',
          list: [
            'New back end and database.',
            'Migration of systems to the cloud.',
            'New possibilities negotiated around the technical limitations of the legacy system.',
          ],
        },
        {
          title: 'Business and regulation',
          list: [
            'New compliance rules.',
            'Integration of new payment methods.',
            'Onboarding of new collection companies.',
          ],
        },
        {
          title: 'People',
          list: [
            "Understanding the company's real needs.",
            'Bringing the best possible experience to cashiers across the whole network.',
            'A functional redesign, not just a visual one.',
          ],
        },
      ],
      areasLabel: 'We worked together with',
      areas: ['Operations', 'Legal', 'IT', 'Product', 'Development'],
    },

    summary: {
      title: 'In 1 minute',
      subtitle:
        "The network's new workstation: a complex payments and collections system that is now faster, clearer, and more accessible, designed to reduce errors in the daily work of the people who use it.",
      blocks: [
        {
          title: 'My role',
          text: 'Lead Product Designer on a team of 2 UX/UI designers and 1 front-end developer, working with Operations, Legal, IT, and Product.',
        },
        {
          title: 'What I drove',
          list: [
            'From a closed desktop app to a web platform: it works on any device, even a tablet.',
            'Adoption of the design system, aligning areas with different priorities.',
            'React on the front end instead of legacy technologies.',
          ],
        },
        {
          title: 'The result',
          text: 'A platform deployed across a nationwide in-person payment collection network. In testing, 5 of 6 tasks were completed independently and all 6 cashiers saw it as a clear improvement.',
        },
      ],
      resultsTitle: 'First results',
      stats: [
        ['~2 months', 'shaved off the schedule thanks to the design system.'],
        ['5 of 6', 'tasks completed independently on first use.'],
        ['1 day – 1 week', 'learning curve, according to the cashiers.'],
        ['Web + tablet', 'any device, no special equipment.'],
      ],
      noteLead: 'About the data.',
      note: ' The platform is being rolled out. There are no overall business metrics yet. The ones shown here come from a closed circle of 6 in-house cashiers who helped us with testing.',
    },

    versions: {
      title: 'Four home screens on the way to the final one',
      subtitle:
        "We validated each proposal with the cashier support team, who know the network's everyday complaints and problems. Their answers decided which version moved forward and which was discarded.",
      discarded: 'Discarded',
      final: 'Final',
      whyDiscarded: 'Why it was discarded',
      whyWorked: 'Why it worked.',
      items: [
        {
          name: 'v1 · Till stepper',
          text: '"Open the till → Process transactions → Close the till", plus quick actions in cards.',
          why: "Cashiers don't do these actions in order: they may not use cash deposits or withdrawals at all during the day. When they do, they do it at any point in the day to adjust the till.",
        },
        {
          name: 'v2 · Dashboard',
          text: 'Station bar, icon shortcuts, latest transactions, and balance by payment method.',
          why: "Cashiers don't need that much information on a home page. Their main action is collecting payments, not moving cash in the till.",
        },
        {
          name: 'v3 · Cards and balance',
          text: 'Large shortcuts and till balance with an option to hide it.',
          why: "It couldn't be the first screen because it showed sensitive data. Too much irrelevant data was shown at the start of a cashier's shift, and it didn't simplify their main tasks.",
        },
        {
          name: 'Final · Till status',
          final: true,
          text: 'Quick shortcuts only. With the till closed, everything is disabled except the till and transactions.',
          why: 'It warns in advance of only the actions that are possible. The first login of the day automatically leads to "open till"; the cashier starts everything else when needed.',
        },
      ],
    },

    learnings: {
      title: "What I learned and what I'd do differently",
      items: [
        {
          title: 'Designing is also negotiating',
          text: "Implementing the design system meant aligning different priorities. I learned to listen to each area's reasons and find common ground without giving up the proposal. Today I'd bring a pilot or prototype earlier to show its value, instead of defending it with arguments alone.",
        },
        {
          title: 'Users define the vocabulary',
          text: 'For cashiers, "movements" and "transactions" are the same thing. Today I\'d validate the terminology with cashiers before development, not after.',
        },
        {
          title: 'Bring cashiers into the process earlier',
          text: "We validated each proposal with support, but we only heard from cashiers during testing, and that's where problems like message placement showed up. Today I'd involve cashiers from the first versions.",
        },
        {
          title: 'Define success metrics from day one',
          text: "We have test results, but no business metrics. I'd agree with product on what to measure (time per payment, cash differences, claims) before launch.",
        },
      ],
    },

    end: {
      title: 'Want to see the full case?',
      text: 'The PDF has all 18 pages: discovery, design system, solution, iteration, and validation. Contact me by email to talk about new opportunities. The PDF is in Spanish.',
      download: 'Download the case (PDF, in Spanish)',
      back: 'Back to portfolio',
    },
  },
}
