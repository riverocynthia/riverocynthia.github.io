import { Footer, Nav, SkipLink } from './components/Layout.jsx'

const BASE = import.meta.env.BASE_URL
const PDF = `${BASE}caso-sistema-de-cobros-presencial.pdf`

const META = [
  ['Empresa', 'Red de cobranza presencial'],
  ['Período', '2024 – 2026'],
  ['Mi rol', 'Lead Product Designer'],
  ['Equipo', '2 diseñadores UX/UI · 1 desarrollador front-end'],
]

const SUMMARY = [
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
]

const CONTEXT = [
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
]

const AREAS = ['Operaciones', 'Legales', 'IT', 'Producto', 'Desarrollo']

const STATS = [
  ['~2 meses', 'menos de cronograma gracias al design system.'],
  ['5 de 6', 'tareas resueltas de forma autónoma en el primer uso.'],
  ['1 día – 1 semana', 'de curva de aprendizaje, según los cajeros.'],
  ['Web + tablet', 'cualquier dispositivo, sin equipos especiales.'],
]

const VERSIONS = [
  {
    name: 'v1 · Stepper de caja',
    status: 'Descartada',
    text: '"Abrí la caja → Transaccioná → Cerrá la caja", más acciones rápidas en cards.',
    why: 'Los cajeros no realizan esas acciones en orden: pueden no utilizar el ingreso o retiro de valores en el día. De hacerlo, lo hacen en cualquier momento del día para hacer ajustes en la caja.',
  },
  {
    name: 'v2 · Dashboard',
    status: 'Descartada',
    text: 'Barra de puesto, accesos con íconos, últimas transacciones y saldo por medio de pago.',
    why: 'El cajero no necesita tener tanta información disponible en una página principal. Su acción principal es cobrar, no realizar movimientos en caja.',
  },
  {
    name: 'v3 · Cards y saldo',
    status: 'Descartada',
    text: 'Accesos grandes y saldo de caja con opción de ocultarlo.',
    why: 'No podía ser la visual inicial por contener datos sensibles. Se mostraban muchos datos irrelevantes para el inicio de la jornada del cajero y no le simplificaba las tareas principales.',
  },
  {
    name: 'Final · Estado de caja',
    status: 'Final',
    text: 'Solo accesos rápidos. Con la caja cerrada, todo se deshabilita salvo caja y transacciones.',
    why: 'Avisa de antemano solo las acciones posibles. El primer inicio de sesión del día dirige automáticamente a "abrir caja"; el resto lo inicia el cajero cuando lo necesita.',
  },
]

const LEARNINGS = [
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
]

export default function CasePage() {
  return (
    <>
      <SkipLink />
      <Nav home={false} />
      <main id="main" tabIndex={-1}>
        <header className="case-hero">
          <div className="container">
            <a className="case-back" href={`${BASE}#portfolio`}>← Volver al portfolio</a>
            <p className="case-hero-label">Caso de estudio · versión NDA</p>
            <h1 className="case-hero-title">Sistema de cobros presencial</h1>
            <p className="case-hero-lead">
              Cómo se actualizó la plataforma: de un sistema antiguo a uno moderno, consistente y accesible.
            </p>
            <dl className="case-hero-meta">
              {META.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <nav className="case-toc" aria-label="Índice">
              <span className="case-toc-label">Índice:</span>
              <a href="#contexto">Contexto</a>
              <a href="#resumen">En 1 minuto</a>
              <a href="#inicios">Cuatro inicios</a>
              <a href="#aprendizajes">Qué aprendí</a>
            </nav>
          </div>
        </header>

        <section id="contexto" className="section case-section">
          <div className="container">
            <h2 className="section-title">Un desafío integral, no solo un rediseño</h2>
            <p className="section-subtitle">
              El puesto anterior era una aplicación de escritorio cerrada y sin design system. Había que actualizar los
              servicios, sumar nuevos medios de pago digitales e implementarlos en cada local, con una mirada 360° junto
              al negocio.
            </p>
            <div className="case-cards case-cards--three">
              {CONTEXT.map((c) => (
                <article className="case-block" key={c.title}>
                  <h3 className="case-block-title">{c.title}</h3>
                  <ul className="case-list-plain">
                    {c.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="case-areas">
              <h3 className="case-areas-label">Trabajamos junto a</h3>
              <ul className="case-areas-list">
                {AREAS.map((a) => <li key={a} className="tag">{a}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="resumen" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">En 1 minuto</h2>
            <p className="section-subtitle">
              El nuevo puesto de la red: un sistema complejo de cobros y pagos que hoy es más ágil, claro y accesible,
              pensado para reducir errores en el día a día de quienes lo usan.
            </p>
            <div className="case-cards case-cards--three">
              {SUMMARY.map((s) => (
                <article className="case-block" key={s.title}>
                  <h3 className="case-block-title">{s.title}</h3>
                  {s.text && <p>{s.text}</p>}
                  {s.list && (
                    <ul className="case-list-plain">
                      {s.list.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
            <h3 className="case-subhead">Primeros resultados</h3>
            <dl className="case-stats">
              {STATS.map(([value, label]) => (
                <div key={value}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
            <p className="case-note">
              <strong>Sobre los datos.</strong> La plataforma está en etapa de despliegue. Aún no hay métricas generales
              sobre el negocio. Las expuestas acá son dentro de un círculo cerrado de 6 cajeros propios que nos ayudaron
              en los testeos.
            </p>
          </div>
        </section>

        <section id="inicios" className="section case-section">
          <div className="container">
            <h2 className="section-title">Cuatro inicios hasta llegar al final</h2>
            <p className="section-subtitle">
              Validamos cada propuesta con el equipo de soporte a cajeros, que conoce las quejas y problemas cotidianos
              de la red. Sus respuestas definieron qué versión avanzaba y cuál se descartaba.
            </p>
            <div className="case-versions">
              {VERSIONS.map((v) => {
                const final = v.status === 'Final'
                return (
                  <article className={`case-version${final ? ' case-version--final' : ''}`} key={v.name}>
                    <div className="case-version-head">
                      <h3 className="case-block-title">{v.name}</h3>
                      <span className={`tag ${final ? 'tag--final' : ''}`}>{v.status}</span>
                    </div>
                    <p>{v.text}</p>
                    {final ? (
                      <p className="case-why"><strong>Por qué funcionó.</strong> {v.why}</p>
                    ) : (
                      <details className="case-details">
                        <summary>Por qué se descartó</summary>
                        <p>{v.why}</p>
                      </details>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="aprendizajes" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">Qué aprendí y qué haría distinto</h2>
            <div className="case-learnings">
              {LEARNINGS.map((l, i) => (
                <article className="case-block" key={l.title}>
                  <span className="case-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="case-block-title">{l.title}</h3>
                  <p>{l.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section case-section case-end">
          <div className="container">
            <h2 className="section-title">¿Querés ver el caso completo?</h2>
            <p className="section-subtitle">
              El PDF tiene las 18 páginas: relevamiento, design system, solución, iteración y validación. Contactame por
              mail para charlar sobre nuevas oportunidades.
            </p>
            <div className="case-actions">
              <a className="btn btn-primary" href={PDF} download>Descargar el caso (PDF)</a>
              <a className="cr-link" href={`${BASE}#portfolio`}>Volver al portfolio</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
