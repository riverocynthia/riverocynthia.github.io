const shared = {
  steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  short: ['50', '100', '300', '500', '700', '900'],
  spacing: ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20'],
}

export { shared as dsShared }

export const dsPage = {
  es: {
    meta: {
      title: 'Design system personal · Cynthia Rivero',
      description:
        'Vista previa del design system personal de Cynthia Rivero: cómo están organizados los tokens y cómo se ven los componentes.',
    },
    back: '← Volver al portfolio',
    label: 'Proyecto propio · vista previa',
    title: 'Design system personal',
    lead: 'El sistema de diseño que usa este mismo sitio. Acá lo ves en vista previa: cómo están organizados los tokens y cómo se ven los componentes, todos juntos, para comprobar que son consistentes.',
    info: [
      ['Rol', 'Diseño y desarrollo'],
      ['Año', '2026'],
      ['Versión', '1.1.0'],
      ['Stack', 'React · Vite · CSS'],
    ],
    tocLabel: 'Índice:',
    tocAria: 'Índice',
    toc: ['Organización', 'Color', 'Tipografía', 'Espacio y forma', 'Componentes'],

    organization: {
      title: 'Cómo está organizado',
      subtitle:
        'Tres capas de tokens. Un componente nunca usa un color directo: siempre pasa por la capa semántica, por eso cambiar de modo no obliga a tocar ninguna pieza.',
      layerWord: 'Capa',
      layers: [
        { title: 'Primitivos', text: 'Los valores base, sin un uso asignado.', items: ['Paletas de 11 tonos', 'Escalas de estado', 'Espaciado', 'Radios y sombras', 'Tipografía'] },
        { title: 'Semánticos', text: 'Le dan un uso a cada valor. Cambian solos entre modo claro y oscuro.', items: ['Fondos', 'Texto', 'Marca y acento', 'Bordes y foco', 'Estados'] },
        { title: 'Componentes', text: 'Decisiones propias de cada pieza, apoyadas en la capa semántica.', items: ['Botón', 'Tag', 'Card', 'Foco', 'Selectores'] },
      ],
    },

    color: {
      title: 'Color',
      subtitle:
        'Cuatro paletas de once tonos, cada una con su nombre, y tres escalas cortas para los estados. Todos los pares de texto y fondo se miden contra WCAG 2.2 AA.',
      palettesTitle: 'Paletas',
      palettes: [
        { name: 'Azul Rafiki', use: 'Marca', token: 'blue' },
        { name: 'Celeste Stitch', use: 'Marca en modo oscuro', token: 'cyan' },
        { name: 'Naranja Hércules', use: 'Acción principal', token: 'orange' },
        { name: 'Gris Dumbo', use: 'Neutros', token: 'gray' },
      ],
      statusTitle: 'Estados',
      status: [
        { name: 'Verde', use: 'Éxito', token: 'green' },
        { name: 'Amarillo', use: 'Advertencia', token: 'amber' },
        { name: 'Rojo', use: 'Error', token: 'red' },
      ],
      rolesTitle: 'Roles de color',
      rolesLead:
        'Cada rol tiene su propio color en claro y en oscuro. Probá el switch del pie y mirá cómo cambian. Suave y Superficie tenue coinciden en claro y se separan en oscuro: la primera es para bandas de sección y la segunda para elementos dentro de ellas.',
      roles: [
        { group: 'Fondos', items: [['Página', 'color-bg-page', 'color-text-body'], ['Suave', 'color-bg-subtle', 'color-text-body'], ['Superficie', 'color-surface', 'color-text-body'], ['Superficie tenue', 'color-surface-muted', 'color-text-body']] },
        { group: 'Texto', items: [['Principal', 'color-surface', 'color-text-primary'], ['Cuerpo', 'color-surface', 'color-text-body'], ['Secundario', 'color-surface', 'color-text-muted']] },
        { group: 'Marca y acento', items: [['Marca', 'color-brand', 'color-on-brand'], ['Acento', 'color-accent-solid', 'color-on-accent-solid'], ['Acento en texto', 'color-surface', 'color-accent-text']] },
        { group: 'Estados', items: [['Éxito', 'color-success-bg', 'color-success-text'], ['Advertencia', 'color-warning-bg', 'color-warning-text'], ['Error', 'color-danger-bg', 'color-danger-text']] },
      ],
    },

    typography: {
      title: 'Tipografía',
      subtitle:
        'Una familia por rol: Nunito para los títulos y Nunito Sans para el texto y los botones. Una tercera familia monoespaciada se reserva exclusivamente para mostrar código.',
      families: ['Títulos y encabezados.', 'Texto común, botones y formularios.'],
      sample: 'Diseño que cualquiera puede usar',
      scale: [
        ['Display', 'heading', '5xl', 'extrabold'],
        ['Título 1', 'heading', '4xl', 'extrabold'],
        ['Título 2', 'heading', '3xl', 'bold'],
        ['Título 3', 'heading', '2xl', 'bold'],
        ['Título 4', 'heading', 'xl', 'semibold'],
        ['Título 5', 'heading', 'lg', 'bold'],
        ['Título 6', 'heading', 'md', 'bold'],
        ['Texto', 'body', 'md', 'regular'],
        ['Texto pequeño', 'body', 'sm', 'regular'],
        ['Etiqueta', 'body', 'xs', 'semibold'],
      ],
    },

    space: {
      title: 'Espacio y forma',
      subtitle: 'Espaciado en base 4 px, cuatro radios y una pastilla, y tres sombras.',
      spacing: 'Espaciado',
      radii: 'Radios',
      shadows: 'Sombras',
      radiiItems: [['Chico', 'sm'], ['Medio', 'md'], ['Grande', 'lg'], ['Extra grande', 'xl'], ['Pastilla', 'pill']],
      shadowItems: [['Suave', 'sm'], ['Media', 'md'], ['Alta', 'lg']],
    },

    components: {
      title: 'Componentes',
      subtitle:
        'Las mismas piezas, agrupadas por tipo. Todas usan los mismos colores, radios, espacios y estados, y se pueden usar con teclado.',
      buttons: 'Botones',
      btnPrimary: 'Principal',
      btnSecondary: 'Secundario',
      btnGhost: 'Fantasma',
      btnDisabled: 'Deshabilitado',
      tags: 'Tags',
      tagItems: ['Figma', 'Completado', 'En revisión', 'Bloqueado'],
      selectors: 'Selectores',
      exampleSwitch: 'Switch de ejemplo',
      disabledSwitch: 'Switch deshabilitado',
      checked: 'Marcado',
      unchecked: 'Desmarcado',
      disabled: 'Deshabilitado',
      optionA: 'Opción A',
      optionB: 'Opción B',
      optionDisabled: 'Deshabilitada',
      cards: 'Cards y datos',
      cardEyebrow: 'Design systems',
      cardTitle: 'Tokens en capas',
      cardText: 'Primitivos, semánticos y de componente.',
      statLabel: 'menos tiempo de diseño de pantallas',
      email: 'hola@ejemplo.com',
      surfacesTitle: 'Un sistema, dos superficies',
      surfacesLead:
        'Los mismos componentes sobre fondo claro y sobre fondo oscuro. No hay variantes aparte: la superficie oscura solo cambia los valores de la capa semántica.',
      surface: {
        light: 'Superficie clara',
        dark: 'Superficie oscura',
        primary: 'Acción principal',
        secondary: 'Secundaria',
        ghost: 'Fantasma',
        notifications: 'Notificaciones',
        accessibility: 'Accesibilidad',
        lightMode: 'Modo claro',
        darkMode: 'Modo oscuro',
        more: 'Ver más',
      },
    },

    end: {
      title: 'Ver el sistema completo',
      text: 'La documentación reúne todos los tokens, los contrastes medidos en vivo y cada componente con sus estados.',
      docs: 'Ver la documentación',
      code: 'Ver el código',
      back: 'Volver al portfolio',
    },
  },

  en: {
    meta: {
      title: 'Personal design system · Cynthia Rivero',
      description:
        "Preview of Cynthia Rivero's personal design system: how the tokens are organized and how the components look.",
    },
    back: '← Back to portfolio',
    label: 'Personal project · preview',
    title: 'Personal design system',
    lead: "The design system this very site uses. Here you see it in preview: how the tokens are organized and how the components look, all together, to check that they're consistent.",
    info: [
      ['Role', 'Design and development'],
      ['Year', '2026'],
      ['Version', '1.1.0'],
      ['Stack', 'React · Vite · CSS'],
    ],
    tocLabel: 'Contents:',
    tocAria: 'Contents',
    toc: ['Organization', 'Color', 'Typography', 'Space and shape', 'Components'],

    organization: {
      title: "How it's organized",
      subtitle:
        "Three layers of tokens. A component never uses a color directly: it always goes through the semantic layer, which is why switching modes doesn't require touching any piece.",
      layerWord: 'Layer',
      layers: [
        { title: 'Primitives', text: 'The base values, with no assigned use.', items: ['11-tone palettes', 'Status scales', 'Spacing', 'Radii and shadows', 'Typography'] },
        { title: 'Semantic', text: 'They give each value a purpose. They switch between light and dark mode on their own.', items: ['Backgrounds', 'Text', 'Brand and accent', 'Borders and focus', 'States'] },
        { title: 'Components', text: 'Decisions specific to each piece, built on the semantic layer.', items: ['Button', 'Tag', 'Card', 'Focus', 'Selectors'] },
      ],
    },

    color: {
      title: 'Color',
      subtitle:
        'Four palettes of eleven tones, each with its own name, and three short scales for states. Every text and background pair is measured against WCAG 2.2 AA.',
      palettesTitle: 'Palettes',
      palettes: [
        { name: 'Azul Rafiki', use: 'Brand', token: 'blue' },
        { name: 'Celeste Stitch', use: 'Brand in dark mode', token: 'cyan' },
        { name: 'Naranja Hércules', use: 'Primary action', token: 'orange' },
        { name: 'Gris Dumbo', use: 'Neutrals', token: 'gray' },
      ],
      statusTitle: 'States',
      status: [
        { name: 'Green', use: 'Success', token: 'green' },
        { name: 'Yellow', use: 'Warning', token: 'amber' },
        { name: 'Red', use: 'Error', token: 'red' },
      ],
      rolesTitle: 'Color roles',
      rolesLead:
        'Each role has its own color in light and dark. Try the switch in the footer and watch them change. Soft and Muted surface match in light and split apart in dark: the first is for section bands and the second for elements inside them.',
      roles: [
        { group: 'Backgrounds', items: [['Page', 'color-bg-page', 'color-text-body'], ['Soft', 'color-bg-subtle', 'color-text-body'], ['Surface', 'color-surface', 'color-text-body'], ['Muted surface', 'color-surface-muted', 'color-text-body']] },
        { group: 'Text', items: [['Primary', 'color-surface', 'color-text-primary'], ['Body', 'color-surface', 'color-text-body'], ['Secondary', 'color-surface', 'color-text-muted']] },
        { group: 'Brand and accent', items: [['Brand', 'color-brand', 'color-on-brand'], ['Accent', 'color-accent-solid', 'color-on-accent-solid'], ['Accent text', 'color-surface', 'color-accent-text']] },
        { group: 'States', items: [['Success', 'color-success-bg', 'color-success-text'], ['Warning', 'color-warning-bg', 'color-warning-text'], ['Error', 'color-danger-bg', 'color-danger-text']] },
      ],
    },

    typography: {
      title: 'Typography',
      subtitle:
        'One family per role: Nunito for headings and Nunito Sans for text and buttons. A third monospaced family is reserved exclusively for showing code.',
      families: ['Titles and headings.', 'Regular text, buttons, and forms.'],
      sample: 'Design anyone can use',
      scale: [
        ['Display', 'heading', '5xl', 'extrabold'],
        ['Heading 1', 'heading', '4xl', 'extrabold'],
        ['Heading 2', 'heading', '3xl', 'bold'],
        ['Heading 3', 'heading', '2xl', 'bold'],
        ['Heading 4', 'heading', 'xl', 'semibold'],
        ['Heading 5', 'heading', 'lg', 'bold'],
        ['Heading 6', 'heading', 'md', 'bold'],
        ['Text', 'body', 'md', 'regular'],
        ['Small text', 'body', 'sm', 'regular'],
        ['Label', 'body', 'xs', 'semibold'],
      ],
    },

    space: {
      title: 'Space and shape',
      subtitle: 'Spacing on a 4 px base, four radii plus a pill, and three shadows.',
      spacing: 'Spacing',
      radii: 'Radii',
      shadows: 'Shadows',
      radiiItems: [['Small', 'sm'], ['Medium', 'md'], ['Large', 'lg'], ['Extra large', 'xl'], ['Pill', 'pill']],
      shadowItems: [['Soft', 'sm'], ['Medium', 'md'], ['High', 'lg']],
    },

    components: {
      title: 'Components',
      subtitle:
        'The same pieces, grouped by type. They all share the same colors, radii, spacing, and states, and can be used with a keyboard.',
      buttons: 'Buttons',
      btnPrimary: 'Primary',
      btnSecondary: 'Secondary',
      btnGhost: 'Ghost',
      btnDisabled: 'Disabled',
      tags: 'Tags',
      tagItems: ['Figma', 'Completed', 'In review', 'Blocked'],
      selectors: 'Selectors',
      exampleSwitch: 'Example switch',
      disabledSwitch: 'Disabled switch',
      checked: 'Checked',
      unchecked: 'Unchecked',
      disabled: 'Disabled',
      optionA: 'Option A',
      optionB: 'Option B',
      optionDisabled: 'Disabled',
      cards: 'Cards and data',
      cardEyebrow: 'Design systems',
      cardTitle: 'Layered tokens',
      cardText: 'Primitive, semantic, and component.',
      statLabel: 'less screen design time',
      email: 'hello@example.com',
      surfacesTitle: 'One system, two surfaces',
      surfacesLead:
        'The same components on a light background and on a dark one. There are no separate variants: the dark surface only changes the values of the semantic layer.',
      surface: {
        light: 'Light surface',
        dark: 'Dark surface',
        primary: 'Primary action',
        secondary: 'Secondary',
        ghost: 'Ghost',
        notifications: 'Notifications',
        accessibility: 'Accessibility',
        lightMode: 'Light mode',
        darkMode: 'Dark mode',
        more: 'See more',
      },
    },

    end: {
      title: 'See the full system',
      text: 'The documentation gathers all the tokens, the live-measured contrasts, and every component with its states.',
      docs: 'View the documentation (in Spanish)',
      code: 'View the code',
      back: 'Back to portfolio',
    },
  },
}
