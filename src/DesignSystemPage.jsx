import { useState } from 'react'
import { Footer, Nav, SkipLink, ThemeSwitch } from './components/Layout.jsx'

const BASE = import.meta.env.BASE_URL
const DOCS = 'https://riverocynthia.github.io/design-system/'
const REPO = 'https://github.com/riverocynthia/design-system'

const META = [
  ['Rol', 'Diseño y desarrollo'],
  ['Año', '2026'],
  ['Versión', '1.0.0'],
  ['Stack', 'React · Vite · CSS'],
]

const LAYERS = [
  {
    step: '1',
    title: 'Primitivos',
    text: 'Los valores base, sin un uso asignado.',
    items: ['Paletas de 11 tonos', 'Escalas de estado', 'Espaciado', 'Radios y sombras', 'Tipografía'],
  },
  {
    step: '2',
    title: 'Semánticos',
    text: 'Le dan un uso a cada valor. Cambian solos entre modo claro y oscuro.',
    items: ['Fondos', 'Texto', 'Marca y acento', 'Bordes y foco', 'Estados'],
  },
  {
    step: '3',
    title: 'Componentes',
    text: 'Decisiones propias de cada pieza, apoyadas en la capa semántica.',
    items: ['Botón', 'Tag', 'Card', 'Foco', 'Selectores'],
  },
]

const STEPS = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const SHORT = ['50', '100', '300', '500', '700', '900']

const PALETTES = [
  { name: 'Azul Rafiki', use: 'Marca', token: 'blue', steps: STEPS },
  { name: 'Celeste Stitch', use: 'Marca en modo oscuro', token: 'cyan', steps: STEPS },
  { name: 'Naranja Hércules', use: 'Acción principal', token: 'orange', steps: STEPS },
  { name: 'Gris Dumbo', use: 'Neutros', token: 'gray', steps: STEPS },
]

const STATUS = [
  { name: 'Verde', use: 'Éxito', token: 'green', steps: SHORT },
  { name: 'Amarillo', use: 'Advertencia', token: 'amber', steps: SHORT },
  { name: 'Rojo', use: 'Error', token: 'red', steps: SHORT },
]

const ROLES = [
  {
    group: 'Fondos',
    items: [
      ['Página', 'color-bg-page', 'color-text-body'],
      ['Suave', 'color-bg-subtle', 'color-text-body'],
      ['Superficie', 'color-surface', 'color-text-body'],
      ['Superficie tenue', 'color-surface-muted', 'color-text-body'],
    ],
  },
  {
    group: 'Texto',
    items: [
      ['Principal', 'color-surface', 'color-text-primary'],
      ['Cuerpo', 'color-surface', 'color-text-body'],
      ['Secundario', 'color-surface', 'color-text-muted'],
    ],
  },
  {
    group: 'Marca y acento',
    items: [
      ['Marca', 'color-brand', 'color-on-brand'],
      ['Acento', 'color-accent-solid', 'color-on-accent-solid'],
      ['Acento en texto', 'color-surface', 'color-accent-text'],
    ],
  },
  {
    group: 'Estados',
    items: [
      ['Éxito', 'color-success-bg', 'color-success-text'],
      ['Advertencia', 'color-warning-bg', 'color-warning-text'],
      ['Error', 'color-danger-bg', 'color-danger-text'],
    ],
  },
]

const TYPE_SCALE = [
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
]

const SPACING = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20']
const RADII = [
  ['Chico', 'sm'],
  ['Medio', 'md'],
  ['Grande', 'lg'],
  ['Extra grande', 'xl'],
  ['Pastilla', 'pill'],
]
const SHADOWS = [
  ['Suave', 'sm'],
  ['Media', 'md'],
  ['Alta', 'lg'],
]

function Swatch({ token, step }) {
  return (
    <div className="dsp-swatch">
      <span className="dsp-swatch-chip" style={{ background: `var(--${token}-${step})` }} aria-hidden="true" />
      <span className="dsp-swatch-step">{step}</span>
    </div>
  )
}

function Scale({ palette }) {
  return (
    <div className="dsp-scale">
      <p className="dsp-scale-title">
        <strong>{palette.name}</strong>
        <span>{palette.use}</span>
      </p>
      <div className="dsp-strip">
        {palette.steps.map((s) => (
          <Swatch key={s} token={palette.token} step={s} />
        ))}
      </div>
    </div>
  )
}

function Choices({ id }) {
  const [on, setOn] = useState(true)
  return (
    <div className="dsp-choices">
      <label className="cr-choice">
        <ThemeSwitch checked={on} onChange={() => setOn(!on)} label={`Notificaciones ${id}`} />
        <span>Notificaciones</span>
      </label>
      <label className="cr-choice">
        <input type="checkbox" className="cr-checkbox" defaultChecked />
        <span>Accesibilidad</span>
      </label>
      <label className="cr-choice">
        <input type="radio" name={`modo-${id}`} className="cr-radio" defaultChecked />
        <span>Modo claro</span>
      </label>
      <label className="cr-choice">
        <input type="radio" name={`modo-${id}`} className="cr-radio" />
        <span>Modo oscuro</span>
      </label>
    </div>
  )
}

function Surface({ dark, id }) {
  return (
    <div className={`dsp-surface${dark ? ' cr-on-dark' : ''}`}>
      <p className="dsp-surface-label">{dark ? 'Superficie oscura' : 'Superficie clara'}</p>
      <div className="dsp-row">
        <button type="button" className="cr-btn cr-btn--primary">Acción principal</button>
        <button type="button" className="cr-btn cr-btn--secondary">Secundaria</button>
        <button type="button" className="cr-btn cr-btn--ghost">Fantasma</button>
      </div>
      <div className="dsp-row">
        <span className="cr-tag">Figma</span>
        <span className="cr-tag cr-tag--success">Completado</span>
        <span className="cr-tag cr-tag--warning">En revisión</span>
        <span className="cr-tag cr-tag--danger">Bloqueado</span>
      </div>
      <Choices id={id} />
      <a className="cr-link" href="#componentes">Ver más</a>
    </div>
  )
}

export default function DesignSystemPage() {
  const [sw, setSw] = useState(false)

  return (
    <>
      <SkipLink />
      <Nav home={false} />
      <main id="main" tabIndex={-1}>
        <header className="case-hero">
          <div className="container">
            <a className="case-back" href={`${BASE}#portfolio`}>← Volver al portfolio</a>
            <p className="case-hero-label">Proyecto propio · vista previa</p>
            <h1 className="case-hero-title">Design system personal</h1>
            <p className="case-hero-lead">
              El sistema de diseño que usa este mismo sitio. Acá lo ves en vista previa: cómo están organizados los tokens
              y cómo se ven los componentes, todos juntos, para comprobar que son consistentes.
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
              <a href="#organizacion">Organización</a>
              <a href="#color">Color</a>
              <a href="#tipografia">Tipografía</a>
              <a href="#espacio">Espacio y forma</a>
              <a href="#componentes">Componentes</a>
            </nav>
          </div>
        </header>

        <section id="organizacion" className="section case-section">
          <div className="container">
            <h2 className="section-title">Cómo está organizado</h2>
            <p className="section-subtitle">
              Tres capas de tokens. Un componente nunca usa un color directo: siempre pasa por la capa semántica, por eso
              cambiar de modo no obliga a tocar ninguna pieza.
            </p>
            <ol className="dsp-layers">
              {LAYERS.map((l) => (
                <li className="case-block dsp-layer" key={l.title}>
                  <span className="case-number" aria-hidden="true">Capa {l.step}</span>
                  <h3 className="case-block-title">{l.title}</h3>
                  <p>{l.text}</p>
                  <div className="dsp-chips">
                    {l.items.map((i) => <span className="tag" key={i}>{i}</span>)}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="color" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">Color</h2>
            <p className="section-subtitle">
              Cuatro paletas de once tonos, cada una con su nombre, y tres escalas cortas para los estados. Todos los pares
              de texto y fondo se miden contra WCAG 2.2 AA.
            </p>
            <h3 className="case-subhead dsp-subhead">Paletas</h3>
            <div className="dsp-scales">
              {PALETTES.map((p) => <Scale key={p.name} palette={p} />)}
            </div>
            <h3 className="case-subhead dsp-subhead">Estados</h3>
            <div className="dsp-scales dsp-scales--short">
              {STATUS.map((p) => <Scale key={p.name} palette={p} />)}
            </div>
            <h3 className="case-subhead dsp-subhead">Roles de color</h3>
            <p className="dsp-lead">
              Cada rol tiene su propio color en claro y en oscuro. Probá el switch del pie y mirá cómo cambian. Suave y
              Superficie tenue coinciden en claro y se separan en oscuro: la primera es para bandas de sección y la
              segunda para elementos dentro de ellas.
            </p>
            <div className="dsp-roles">
              {ROLES.map((g) => (
                <div className="dsp-role-group" key={g.group}>
                  <h4 className="dsp-group-title">{g.group}</h4>
                  <div className="dsp-role-tiles">
                    {g.items.map(([label, bg, fg]) => (
                      <div className="dsp-role" key={label}>
                        <span
                          className="dsp-role-tile"
                          style={{ background: `var(--${bg})`, color: `var(--${fg})` }}
                          aria-hidden="true"
                        >
                          Aa
                        </span>
                        <span className="dsp-role-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tipografia" className="section case-section">
          <div className="container">
            <h2 className="section-title">Tipografía</h2>
            <p className="section-subtitle">
              Una familia por rol: Nunito para los títulos y Nunito Sans para el texto y los botones. Una tercera familia
              monoespaciada se reserva exclusivamente para mostrar código.
            </p>
            <div className="dsp-families">
              <div className="case-block">
                <p className="dsp-family-name dsp-family-name--heading">Nunito</p>
                <p>Títulos y encabezados.</p>
              </div>
              <div className="case-block">
                <p className="dsp-family-name dsp-family-name--body">Nunito Sans</p>
                <p>Texto común, botones y formularios.</p>
              </div>
            </div>
            <div className="dsp-type">
              {TYPE_SCALE.map(([label, family, size, weight]) => (
                <div className="dsp-type-row" key={label}>
                  <span className="dsp-type-label">{label}</span>
                  <span
                    className="dsp-type-sample"
                    style={{
                      fontFamily: `var(--font-family-${family})`,
                      fontSize: `var(--font-size-${size})`,
                      fontWeight: `var(--font-weight-${weight})`,
                    }}
                  >
                    Diseño que cualquiera puede usar
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="espacio" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">Espacio y forma</h2>
            <p className="section-subtitle">
              Espaciado en base 4 px, cuatro radios y una pastilla, y tres sombras.
            </p>
            <div className="dsp-shapes">
              <div className="dsp-shape-col">
                <h3 className="dsp-group-title">Espaciado</h3>
                {SPACING.map((s) => (
                  <div className="dsp-space-row" key={s}>
                    <span className="dsp-space-bar" style={{ width: `var(--space-${s})` }} aria-hidden="true" />
                    <span className="dsp-space-value">{Number(s) * 4} px</span>
                  </div>
                ))}
              </div>
              <div className="dsp-shape-col">
                <h3 className="dsp-group-title">Radios</h3>
                {RADII.map(([label, r]) => (
                  <div className="dsp-sample-row" key={r}>
                    <span className="dsp-radius" style={{ borderRadius: `var(--radius-${r})` }} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="dsp-shape-col">
                <h3 className="dsp-group-title">Sombras</h3>
                {SHADOWS.map(([label, s]) => (
                  <div className="dsp-sample-row" key={s}>
                    <span className="dsp-shadow" style={{ boxShadow: `var(--shadow-${s})` }} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="componentes" className="section case-section">
          <div className="container">
            <h2 className="section-title">Componentes</h2>
            <p className="section-subtitle">
              Las mismas piezas, agrupadas por tipo. Todas usan los mismos colores, radios, espacios y estados, y se pueden
              usar con teclado.
            </p>

            <div className="dsp-groups">
              <article className="case-block">
                <h3 className="case-block-title">Botones</h3>
                <div className="dsp-row">
                  <button type="button" className="cr-btn cr-btn--primary">Principal</button>
                  <button type="button" className="cr-btn cr-btn--secondary">Secundario</button>
                  <button type="button" className="cr-btn cr-btn--ghost">Fantasma</button>
                  <button type="button" className="cr-btn cr-btn--primary" disabled>Deshabilitado</button>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">Tags</h3>
                <div className="dsp-row">
                  <span className="cr-tag">Figma</span>
                  <span className="cr-tag cr-tag--success">Completado</span>
                  <span className="cr-tag cr-tag--warning">En revisión</span>
                  <span className="cr-tag cr-tag--danger">Bloqueado</span>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">Selectores</h3>
                <div className="dsp-row">
                  <label className="cr-choice">
                    <ThemeSwitch checked={sw} onChange={() => setSw(!sw)} label="Switch de ejemplo" />
                    <span>{sw ? 'Marcado' : 'Desmarcado'}</span>
                  </label>
                  <label className="cr-choice">
                    <ThemeSwitch checked onChange={() => {}} label="Switch deshabilitado" disabled />
                    <span>Deshabilitado</span>
                  </label>
                </div>
                <div className="dsp-row">
                  <label className="cr-choice">
                    <input type="checkbox" className="cr-checkbox" />
                    <span>Desmarcado</span>
                  </label>
                  <label className="cr-choice">
                    <input type="checkbox" className="cr-checkbox" defaultChecked />
                    <span>Marcado</span>
                  </label>
                  <label className="cr-choice">
                    <input type="checkbox" className="cr-checkbox" disabled />
                    <span>Deshabilitado</span>
                  </label>
                </div>
                <div className="dsp-row">
                  <label className="cr-choice">
                    <input type="radio" name="grupo-ejemplo" className="cr-radio" />
                    <span>Opción A</span>
                  </label>
                  <label className="cr-choice">
                    <input type="radio" name="grupo-ejemplo" className="cr-radio" defaultChecked />
                    <span>Opción B</span>
                  </label>
                  <label className="cr-choice">
                    <input type="radio" name="grupo-ejemplo" className="cr-radio" disabled />
                    <span>Deshabilitada</span>
                  </label>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">Cards y datos</h3>
                <div className="dsp-stack">
                  <div className="cr-card">
                    <div className="cr-card__eyebrow">Design systems</div>
                    <div className="cr-card__title">Tokens en capas</div>
                    <div className="cr-card__text">Primitivos, semánticos y de componente.</div>
                  </div>
                  <div className="cr-stat">
                    <span className="cr-stat__value">60%</span>
                    <span className="cr-stat__label">menos tiempo de diseño de pantallas</span>
                  </div>
                  <a className="cr-contact-link" href="#componentes">
                    <span className="cr-contact-link__text">hola@ejemplo.com</span>
                  </a>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">Línea de tiempo</h3>
                <div className="dsp-stack">
                  <div className="cr-timeline-item cr-timeline-item--current">
                    <span className="cr-timeline-item__dot" />
                    <div className="cr-card">
                      <div className="cr-card__title">Item actual</div>
                      <div className="cr-card__text">Oct 2021 – Hoy</div>
                    </div>
                  </div>
                  <div className="cr-timeline-item">
                    <span className="cr-timeline-item__dot" />
                    <div className="cr-card">
                      <div className="cr-card__title">Item anterior</div>
                      <div className="cr-card__text">Feb 2018 – Sep 2021</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <h3 className="case-subhead dsp-subhead">Un sistema, dos superficies</h3>
            <p className="dsp-lead">
              Los mismos componentes sobre fondo claro y sobre fondo oscuro. No hay variantes aparte: la superficie oscura
              solo cambia los valores de la capa semántica.
            </p>
            <div className="dsp-surfaces">
              <Surface id="claro" />
              <Surface id="oscuro" dark />
            </div>
          </div>
        </section>

        <section className="section case-section case-section--alt case-end dsp-end">
          <div className="container">
            <h2 className="section-title">Ver el sistema completo</h2>
            <p className="section-subtitle">
              La documentación reúne todos los tokens, los contrastes medidos en vivo y cada componente con sus estados.
            </p>
            <div className="case-actions">
              <a className="btn btn-primary" href={DOCS} target="_blank" rel="noreferrer">
                Ver la documentación
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
              <a className="btn btn-secondary" href={REPO} target="_blank" rel="noreferrer">
                Ver el código
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
              <a className="cr-link" href={`${BASE}#portfolio`}>Volver al portfolio</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
