const BASE = import.meta.env.BASE_URL
const CASE_URL = `${BASE}casos/cobros-presencial/`
const DS_URL = `${BASE}casos/design-system/`
const DS_DOCS = 'https://riverocynthia.github.io/design-system/'

export const home = {
  es: {
    meta: {
      title: 'Cynthia Rivero · Product Designer',
      description: 'Cynthia Rivero — Diseñadora UX/UI Senior especializada en accesibilidad digital y design systems.',
    },
    hero: {
      eyebrow: 'Product Designer · UX/UI · Accesibilidad',
      line1: 'Diseño interfaces accesibles',
      line2: 'y las llevo hasta el código.',
      bio: 'Soy Cynthia Rivero. Más de 8 años diseñando productos digitales centrados en las personas. Especializada en WCAG 2.2, design systems y la integración de IA generativa y agentes al proceso de diseño.',
      cta: 'Ver mi portfolio',
      scroll: 'pica la pelota para bajar',
      rotator: {
        lead: 'Ahora mismo, ',
        phrases: [
          'tomando mate',
          'entre partido y partido de handball',
          'con un musical sonando de fondo',
          'entrenando en el playón',
          'entrenando en el gimnasio',
        ],
      },
    },
    about: {
      title: 'Sobre mí',
      subtitle: 'Diseño con propósito, empatía y atención al detalle.',
      paragraphs: [
        'Mis conocimientos cruzan tres áreas que suelen estar separadas: diseño de producto, accesibilidad y código. Estos me permiten diseñar un flujo, comprobar que funciona para todas las personas y dejarlo listo para que desarrollo lo construya.',
        'Integro IA generativa y agentes en mi proceso para acelerar la exploración, la validación de datos y la documentación.',
        'Creo que el buen diseño es invisible: fluye, es inclusivo y hace que las cosas complejas parezcan simples.',
      ],
      stats: [
        ['8+', 'años de experiencia en diseño de producto digital.'],
        ['60%', 'reducción en tiempo de diseño con design systems propios.'],
        ['90–100%', 'score de accesibilidad en sitios institucionales (Lighthouse / WCAG 2.2 AA).'],
        ['4', 'design systems creados y mantenidos (entre ellos Gire y Rapipago).'],
      ],
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Trayectoria en diseño de producto y desarrollo front-end.',
      jobs: [
        {
          current: true,
          role: 'Sr. Diseñadora UX/UI / Accesibilidad',
          period: 'Oct 2021 – Hoy',
          company: 'Gire S.A.',
          items: [
            'Diseño end-to-end de plataformas de pagos en equipos multidisciplinarios bajo Scrum: relevamiento, user flows, wireframes y prototipos en Figma.',
            'Creé y mantengo 4 design systems, entre ellos Gire y Rapipago — reduje un 60% el tiempo de diseño de pantallas.',
            'Conduzco testeos de usabilidad con usuarios y transformo hallazgos en mejoras priorizadas.',
            'Elevé la accesibilidad de sitios institucionales de 55–65% a 90–100% (WCAG 2.2 AA).',
            'Integré IA generativa al proceso: migración a Claude Design, acelerando un 30% la exploración de flujos.',
            'Implementé spec-driven development en Markdown para que agentes de IA generen sitios y documenten mejoras.',
          ],
        },
        {
          current: false,
          role: 'Diseñadora UI y Desarrolladora Web',
          period: 'Feb 2018 – Sep 2021',
          company: 'Contenidos Públicos S.E. — cont.ar',
          items: [
            'Diseñé la interfaz y realicé testeos de usabilidad de la plataforma de streaming Cont.ar.',
            'Desarrollé el front-end con React y Vue.js, trabajando junto al equipo técnico.',
            'Adapté piezas gráficas de series, películas y festivales internacionales para redes y el sitio.',
          ],
        },
        {
          current: false,
          role: 'Diseñadora Gráfica',
          period: 'May 2017 – Ene 2018',
          company: 'Tip Travel Bureau',
          items: ['Diseñé piezas de comunicación para web, redes sociales, mailing y eventos de turismo (FIT).'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Casos de estudio y proyectos propios.',
      cases: [
        {
          kind: 'Caso de estudio · versión NDA',
          title: 'Sistema de cobros presencial',
          visualNote: 'PDF · 18 páginas',
          summary:
            'Cómo se actualizó la plataforma de una red de cobranza presencial: de una aplicación de escritorio antigua a una plataforma web moderna, consistente y accesible.',
          meta: [
            ['Rol', 'Lead Product Designer'],
            ['Período', '2024 – 2026'],
            ['Equipo', '2 diseñadores UX/UI · 1 dev front-end'],
          ],
          results: [
            '5 de 6 tareas resueltas de forma autónoma en el primer uso',
            '~2 meses menos de cronograma gracias al design system',
            'Exploré 4 versiones del inicio y descarté 3 validándolas con el equipo de soporte a cajeros',
            'Funciona en web y tablet, sin equipos especiales',
          ],
          tags: ['UX/UI', 'Design system', 'Tokens multimarca', 'Accesibilidad', 'Testeo de usabilidad', 'React'],
          actions: [
            { label: 'Ver caso', href: CASE_URL, primary: true },
          ],
        },
        {
          kind: 'Proyecto propio',
          title: 'Design system personal',
          visualNote: 'v1.1.0 · Documentación en vivo',
          swatches: ['blue-500', 'cyan-400', 'orange-500', 'gray-500'],
          summary:
            'El sistema de diseño que usa este mismo sitio: tokens en tres capas con modo claro y oscuro, componentes accesibles y una documentación que mide el contraste en vivo.',
          meta: [
            ['Rol', 'Diseño y desarrollo'],
            ['Año', '2026'],
            ['Stack', 'React · Vite · CSS'],
          ],
          results: [
            'Tokens en capas (primitivos, semánticos y de componente), con modo claro y oscuro',
            '18 pares de color medidos en vivo contra WCAG 2.2 AA',
            'Componentes con teclado, foco visible y estados: botón, selectores, tags y más',
          ],
          tags: ['Design system', 'Tokens', 'Accesibilidad', 'WCAG 2.2', 'React', 'CSS'],
          actions: [
            { label: 'Ver proyecto', href: DS_URL, primary: true },
            { label: 'Ver documentación', href: DS_DOCS, external: true },
          ],
        },
      ],
    },
    skills: {
      title: 'Habilidades',
      subtitle: 'Disciplinas y tecnologías que domino.',
      groups: [
        { icon: '🎨', title: 'UX / UI Design', tags: ['User flows', 'Arquitectura de información', 'Wireframes', 'Prototipado', 'Testing de usabilidad', 'UX Writing'] },
        { icon: '♿', title: 'Accesibilidad Digital', tags: ['WCAG 2.2', 'Axe DevTools', 'Lighthouse', 'Auditoría AA manual', 'Componentes accesibles'] },
        { icon: '🧩', title: 'Design Systems', tags: ['Tokens', 'Componentes', 'Variantes', 'Auto-layout', 'Documentación', 'Handoff'] },
        { icon: '🤖', title: 'IA Aplicada al Diseño', tags: ['Claude', 'Claude Design', 'Gemini', 'Copilot', 'Agentes', 'Spec-driven development'] },
        { icon: '💻', title: 'Front-end', tags: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'React', 'Vue.js'] },
        { icon: '🛠️', title: 'Herramientas', tags: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'VS Code', 'Scrum'] },
      ],
    },
    education: {
      title: 'Educación',
      subtitle: 'Formación y desarrollo profesional continuo.',
      cards: [
        { label: 'Título', title: 'Diseño Multimedial', sub: 'Escuela Da Vinci de Arte Multimedial · 2014 – 2017' },
        { label: 'Idiomas', title: 'Inglés B2', sub: 'Nivel intermedio-avanzado' },
      ],
      coursesTitle: 'Cursos y certificaciones',
      courses: [
        { name: 'Claude 101, Introduction to agent skills, AI fluency framework, AI Capabilities and limitations, Claude Code in action', meta: '2026 · Anthropic Skilljar' },
        { name: 'AI for UI and UX Designers | Design Smarter, Not Harder', meta: '2026 · Udemy' },
        { name: 'Liderazgo 360°; Liderazgo Innovador: Neurodiversidad y Sesgos Inconscientes; Secretos de Oratoria de un ex-CEO', meta: '2025 · Udemy' },
        { name: 'Diseño para la accesibilidad (WCAG 2.2)', meta: '2023 · Udemy' },
        { name: 'Diseño de componentes accesibles en Figma; UX deep dive: Foundational Research', meta: '2023 · LinkedIn Learning' },
      ],
    },
    contact: { title: 'Contacto' },
  },

  en: {
    meta: {
      title: 'Cynthia Rivero · Product Designer',
      description: 'Cynthia Rivero — Senior UX/UI Designer specialized in digital accessibility and design systems.',
    },
    hero: {
      eyebrow: 'Product Designer · UX/UI · Accessibility',
      line1: 'I design accessible interfaces',
      line2: 'and take them all the way to code.',
      bio: "I'm Cynthia Rivero. Over 8 years designing people-centered digital products. Specialized in WCAG 2.2, design systems, and bringing generative AI and agents into the design process.",
      cta: 'View my portfolio',
      scroll: 'dribble the ball to go down',
      rotator: {
        lead: 'Right now: ',
        phrases: [
          'sipping mate',
          'between handball games',
          'with a musical playing in the background',
          'training on the outdoor court',
          'training at the gym',
        ],
      },
    },
    about: {
      title: 'About me',
      subtitle: 'Design with purpose, empathy, and attention to detail.',
      paragraphs: [
        'My skills cut across three areas that are usually kept apart: product design, accessibility, and code. They let me design a flow, check that it works for everyone, and hand it off ready for development to build.',
        'I bring generative AI and agents into my process to speed up exploration, data validation, and documentation.',
        "I believe good design is invisible: it flows, it's inclusive, and it makes complex things look simple.",
      ],
      stats: [
        ['8+', 'years of experience in digital product design.'],
        ['60%', 'reduction in design time with in-house design systems.'],
        ['90–100%', 'accessibility score on institutional sites (Lighthouse / WCAG 2.2 AA).'],
        ['4', 'design systems created and maintained (including Gire and Rapipago).'],
      ],
    },
    experience: {
      title: 'Experience',
      subtitle: 'A career in product design and front-end development.',
      jobs: [
        {
          current: true,
          role: 'Senior UX/UI & Accessibility Designer',
          period: 'Oct 2021 – Present',
          company: 'Gire S.A.',
          items: [
            'End-to-end design of payment platforms in multidisciplinary teams working in Scrum: discovery, user flows, wireframes, and Figma prototypes.',
            'I created and maintain 4 design systems, including Gire and Rapipago — cutting screen design time by 60%.',
            'I run usability tests with users and turn findings into prioritized improvements.',
            'I raised the accessibility of institutional sites from 55–65% to 90–100% (WCAG 2.2 AA).',
            'I brought generative AI into the process: migrated to Claude Design, speeding up flow exploration by 30%.',
            'I implemented spec-driven development in Markdown so AI agents can generate sites and document improvements.',
          ],
        },
        {
          current: false,
          role: 'UI Designer and Web Developer',
          period: 'Feb 2018 – Sep 2021',
          company: 'Contenidos Públicos S.E. — cont.ar',
          items: [
            'I designed the interface and ran usability tests for the Cont.ar streaming platform.',
            'I built the front end with React and Vue.js, working alongside the tech team.',
            'I adapted graphic pieces for series, films, and international festivals for social media and the site.',
          ],
        },
        {
          current: false,
          role: 'Graphic Designer',
          period: 'May 2017 – Jan 2018',
          company: 'Tip Travel Bureau',
          items: ['I designed communication pieces for web, social media, mailing, and tourism events (FIT).'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Case studies and personal projects.',
      cases: [
        {
          kind: 'Case study · NDA version',
          title: 'In-person payments system',
          visualNote: 'PDF · 18 pages',
          summary:
            'How the platform of an in-person payment collection network was updated: from an old desktop application to a modern, consistent, and accessible web platform.',
          meta: [
            ['Role', 'Lead Product Designer'],
            ['Period', '2024 – 2026'],
            ['Team', '2 UX/UI designers · 1 front-end dev'],
          ],
          results: [
            '5 of 6 tasks completed independently on first use',
            '~2 months shaved off the schedule thanks to the design system',
            'I explored 4 versions of the home screen and discarded 3 after validating them with the cashier support team',
            'Works on web and tablet, no special equipment',
          ],
          tags: ['UX/UI', 'Design system', 'Multi-brand tokens', 'Accessibility', 'Usability testing', 'React'],
          actions: [
            { label: 'View case study', href: CASE_URL, primary: true },
          ],
        },
        {
          kind: 'Personal project',
          title: 'Personal design system',
          visualNote: 'v1.1.0 · Live documentation',
          swatches: ['blue-500', 'cyan-400', 'orange-500', 'gray-500'],
          summary:
            'The design system this very site uses: three-layer tokens with light and dark modes, accessible components, and documentation that measures contrast live.',
          meta: [
            ['Role', 'Design and development'],
            ['Year', '2026'],
            ['Stack', 'React · Vite · CSS'],
          ],
          results: [
            'Layered tokens (primitive, semantic, and component), with light and dark modes',
            '18 color pairs measured live against WCAG 2.2 AA',
            'Components with keyboard support, visible focus, and states: button, selectors, tags, and more',
          ],
          tags: ['Design system', 'Tokens', 'Accessibility', 'WCAG 2.2', 'React', 'CSS'],
          actions: [
            { label: 'View project', href: DS_URL, primary: true },
            { label: 'View documentation (in Spanish)', href: DS_DOCS, external: true },
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Disciplines and technologies I work with.',
      groups: [
        { icon: '🎨', title: 'UX / UI Design', tags: ['User flows', 'Information architecture', 'Wireframes', 'Prototyping', 'Usability testing', 'UX Writing'] },
        { icon: '♿', title: 'Digital Accessibility', tags: ['WCAG 2.2', 'Axe DevTools', 'Lighthouse', 'Manual AA audits', 'Accessible components'] },
        { icon: '🧩', title: 'Design Systems', tags: ['Tokens', 'Components', 'Variants', 'Auto layout', 'Documentation', 'Handoff'] },
        { icon: '🤖', title: 'AI Applied to Design', tags: ['Claude', 'Claude Design', 'Gemini', 'Copilot', 'Agents', 'Spec-driven development'] },
        { icon: '💻', title: 'Front-end', tags: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'React', 'Vue.js'] },
        { icon: '🛠️', title: 'Tools', tags: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'VS Code', 'Scrum'] },
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'Education and ongoing professional development.',
      cards: [
        { label: 'Degree', title: 'Multimedia Design', sub: 'Da Vinci School of Multimedia Art · 2014 – 2017' },
        { label: 'Languages', title: 'English B2', sub: 'Upper-intermediate level' },
      ],
      coursesTitle: 'Courses and certifications',
      courses: [
        { name: 'Claude 101, Introduction to agent skills, AI fluency framework, AI Capabilities and limitations, Claude Code in action', meta: '2026 · Anthropic Skilljar' },
        { name: 'AI for UI and UX Designers | Design Smarter, Not Harder', meta: '2026 · Udemy' },
        { name: 'Leadership 360°; Innovative Leadership: Neurodiversity and Unconscious Bias; Public Speaking Secrets of an Ex-CEO', meta: '2025 · Udemy' },
        { name: 'Design for Accessibility (WCAG 2.2)', meta: '2023 · Udemy' },
        { name: 'Designing accessible components in Figma; UX deep dive: Foundational Research', meta: '2023 · LinkedIn Learning' },
      ],
    },
    contact: { title: 'Contact' },
  },
}
