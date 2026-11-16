import { useEffect, useRef, useState } from 'react'
import './App.css'

const SHOW_PORTFOLIO = true

const NAV_LINKS = ['Sobre mí', ...(SHOW_PORTFOLIO ? ['Portfolio'] : []), 'Experiencia', 'Skills', 'Educación', 'Contacto']
const NAV_IDS   = ['about',    ...(SHOW_PORTFOLIO ? ['portfolio'] : []), 'experience',  'skills', 'education', 'contact']

function Nav() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className="nav cr-on-dark" aria-label="Principal">
      <div className="container nav-inner">
        <a href="#main" className="nav-logo">Cynthia<span>.</span></a>
        <button
          type="button"
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          Menú
        </button>
        <ul id="nav-menu" className={`nav-links${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((label, i) => (
            <li key={label}>
              <a
                href={`#${NAV_IDS[i]}`}
                className={label === 'Contacto' ? 'btn btn-secondary nav-cta' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

function scrollToSection(id, duration = 900) {
  const target = document.getElementById(id)
  if (!target) return
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0
  const start = window.scrollY
  const end = target.getBoundingClientRect().top + start - offset
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = () => {
    history.pushState(null, '', `#${id}`)
    target.focus({ preventScroll: true })
  }

  if (reduceMotion) {
    window.scrollTo({ top: end, behavior: 'instant' })
    finish()
    return
  }

  let frame
  const cancel = () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', cancel)
    window.removeEventListener('touchstart', cancel)
  }
  window.addEventListener('wheel', cancel, { passive: true })
  window.addEventListener('touchstart', cancel, { passive: true })

  const startTime = performance.now()
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1)
    window.scrollTo({ top: start + (end - start) * easeInOutCubic(progress), behavior: 'instant' })
    if (progress < 1) {
      frame = requestAnimationFrame(step)
    } else {
      cancel()
      finish()
    }
  }
  frame = requestAnimationFrame(step)
}

function Hero() {
  return (
    <section className="hero cr-on-dark">
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-text">Product Designer · UX/UI · Accesibilidad</span>
          </div>
          <h1 className="hero-title">
            Diseño interfaces accesibles{' '}<br />
            <span className="highlight">y las llevo hasta el código.</span>
          </h1>
          <p className="hero-bio">
            Soy Cynthia Rivero. Más de 8 años diseñando productos digitales centrados en las personas.
            Especializada en WCAG 2.2, design systems y la integración de IA generativa
            y agentes al proceso de diseño.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">Ver mi trabajo</a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="hero-scroll"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
      >
        <span className="hero-scroll-text">scrollea para seguir leyendo</span>
        <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" tabIndex={-1} className="section about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">Diseño con propósito, empatía y atención al detalle.</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Mis conocimientos cruzan tres áreas que suelen estar separadas: diseño de producto,
              accesibilidad y código. Estos me permiten diseñar un flujo, comprobar que funciona
              para todas las personas y dejarlo listo para que desarrollo lo construya.
            </p>
            <p>
              Integro IA generativa y agentes en mi proceso para acelerar la exploración,
              la validación de datos y la documentación.
            </p>
            <p>
              Creo que el buen diseño es invisible: fluye, es inclusivo y hace que
              las cosas complejas parezcan simples.
            </p>
          </div>
          <div className="about-highlights">
            <div className="about-stat">
              <span className="about-stat-num">8+</span>
              <span className="about-stat-label">años de experiencia en diseño de producto digital</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">60%</span>
              <span className="about-stat-label">reducción en tiempo de diseño con design systems propios</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">90–100%</span>
              <span className="about-stat-label">score de accesibilidad en sitios institucionales (Lighthouse / WCAG 2.2 AA)</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-num">3</span>
              <span className="about-stat-label">design systems creados y mantenidos (Aura, Rapipago, Gire)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const EXPERIENCE = [
  {
    current: true,
    role: 'Sr. Diseñadora UX/UI / Accesibilidad',
    period: 'Oct 2021 – Hoy',
    company: 'Gire S.A. (Rapipago)',
    items: [
      'Diseño end-to-end de plataformas de pagos en equipos multidisciplinarios bajo Scrum: relevamiento, user flows, wireframes y prototipos en Figma.',
      'Creé y mantengo los design systems Aura, Rapipago y Gire — reduje un 60% el tiempo de diseño de pantallas.',
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
    items: [
      'Diseñé piezas de comunicación para web, redes sociales, mailing y eventos de turismo (FIT).',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <p className="section-subtitle">Trayectoria en diseño de producto y desarrollo front-end.</p>
        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <div className="timeline-item" key={job.company}>
              <div className={`timeline-dot${job.current ? ' current' : ''}`} />
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{job.role}</h3>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-company">{job.company}</p>
                <ul className="timeline-list">
                  {job.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CASE_PDF = `${import.meta.env.BASE_URL}caso-sistema-de-cobros-presencial.pdf`

const CASES = [
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
      { label: 'Ver caso completo', href: CASE_PDF, primary: true, external: true },
      { label: 'Descargar PDF', href: CASE_PDF, download: true },
    ],
  },
  {
    kind: 'Proyecto propio',
    title: 'Design system personal',
    visualNote: 'v1.0.0 · Documentación en vivo',
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
      { label: 'Ver design system', href: 'https://riverocynthia.github.io/design-system/', primary: true, external: true },
      { label: 'Ver código', href: 'https://github.com/riverocynthia/design-system', external: true },
    ],
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Casos de estudio y proyectos propios.</p>
        <div className="case-list">
          {CASES.map((c) => (
            <article className="case-card" key={c.title}>
              <div className="case-card-visual cr-on-dark" aria-hidden="true">
                <span className="case-card-visual-label">{c.kind}</span>
                <span className="case-card-visual-title">{c.title}</span>
                {c.swatches && (
                  <span className="case-swatches">
                    {c.swatches.map((v) => (
                      <span key={v} className="case-swatch" style={{ background: `var(--${v})` }} />
                    ))}
                  </span>
                )}
                <span className="case-card-visual-pages">{c.visualNote}</span>
              </div>
              <div className="case-card-body">
                <h3 className="case-card-title">{c.title}</h3>
                <p className="case-card-summary">{c.summary}</p>
                <dl className="case-meta">
                  {c.meta.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="timeline-list case-results">
                  {c.results.map((r) => <li key={r}>{r}</li>)}
                </ul>
                <div className="skill-tags case-tags">
                  {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="case-actions">
                  {c.actions.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      className={`btn ${a.primary ? 'btn-primary' : 'btn-secondary'}`}
                      {...(a.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      {...(a.download ? { download: true } : {})}
                    >
                      {a.label}
                      {a.external && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const SKILLS = [
  {
    icon: '🎨',
    title: 'UX / UI Design',
    tags: ['User flows', 'Arquitectura de información', 'Wireframes', 'Prototipado', 'Testing de usabilidad', 'UX Writing'],
  },
  {
    icon: '♿',
    title: 'Accesibilidad Digital',
    tags: ['WCAG 2.2', 'Axe DevTools', 'Lighthouse', 'Auditoría AA manual', 'Componentes accesibles'],
  },
  {
    icon: '🧩',
    title: 'Design Systems',
    tags: ['Tokens', 'Componentes', 'Variantes', 'Auto-layout', 'Documentación', 'Handoff'],
  },
  {
    icon: '🤖',
    title: 'IA Aplicada al Diseño',
    tags: ['Claude', 'Claude Design', 'Gemini', 'Copilot', 'Agentes', 'Spec-driven development'],
  },
  {
    icon: '💻',
    title: 'Front-end',
    tags: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'React', 'Vue.js'],
  },
  {
    icon: '🛠️',
    title: 'Herramientas',
    tags: ['Figma', 'Illustrator', 'Photoshop', 'After Effects', 'VS Code', 'Scrum'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">Disciplinas y tecnologías que domino.</p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-card-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="skill-card-title">{s.title}</h3>
              <div className="skill-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const COURSES = [
  { name: 'Claude 101, Introduction to agent skills, AI fluency framework, AI Capabilities and limitations, Claude Code in action', meta: '2026 · Anthropic Skilljar' },
  { name: 'AI for UI and UX Designers | Design Smarter, Not Harder', meta: '2026 · Udemy' },
  { name: 'Liderazgo 360°; Liderazgo Innovador: Neurodiversidad y Sesgos Inconscientes; Secretos de Oratoria de un ex-CEO', meta: '2025 · Udemy' },
  { name: 'Diseño para la accesibilidad (WCAG 2.2)', meta: '2023 · Udemy' },
  { name: 'Diseño de componentes accesibles en Figma; UX deep dive: Foundational Research', meta: '2023 · LinkedIn Learning' },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Formación</h2>
        <p className="section-subtitle">Educación y desarrollo profesional continuo.</p>
        <div className="edu-grid">
          <div className="edu-card">
            <p className="edu-card-label">Título</p>
            <p className="edu-card-title">Diseño Multimedial</p>
            <p className="edu-card-sub">Escuela Da Vinci de Arte Multimedial · 2014 – 2017</p>
          </div>
          <div className="edu-card">
            <p className="edu-card-label">Idiomas</p>
            <p className="edu-card-title">Inglés B2</p>
            <p className="edu-card-sub">Nivel intermedio-avanzado</p>
          </div>
        </div>
        <h3 className="edu-subtitle">
          Cursos y certificaciones
        </h3>
        <div className="courses-list">
          {COURSES.map((c) => (
            <div className="course-item" key={c.name}>
              <p className="course-name">{c.name}</p>
              <p className="course-meta">{c.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact cr-on-dark">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-links">
              <a href="mailto:cynthiarivero@proton.me" className="contact-link">
                <span className="contact-link-icon" aria-hidden="true">✉️</span>
                <span className="contact-link-text">cynthiarivero@proton.me</span>
              </a>
              <a href="https://linkedin.com/in/riverocynthia" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon" aria-hidden="true">💼</span>
                <span className="contact-link-text">linkedin.com/in/riverocynthia</span>
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
              <a href="https://github.com/riverocynthia" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon" aria-hidden="true">🐙</span>
                <span className="contact-link-text">github.com/riverocynthia</span>
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  )
}

function ThemeSwitch({ checked, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} className="cr-switch" onClick={onChange}>
      <span className="cr-switch__icon cr-switch__icon--start"><SunIcon /></span>
      <span className="cr-switch__icon cr-switch__icon--end"><MoonIcon /></span>
      <span className="cr-switch__thumb">{checked ? <MoonIcon /> : <SunIcon />}</span>
    </button>
  )
}

function Footer() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')

  function toggleTheme() {
    const next = dark ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    setDark(!dark)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {
      /* sin almacenamiento: el tema vale solo para esta visita */
    }
  }

  return (
    <footer className="footer cr-on-dark">
      <div className="container">
        <p>© {new Date().getFullYear()} Cynthia Rivero · Diseñada con ♥ en Buenos Aires</p>
        <label className="footer-theme">
          <span aria-hidden="true">Probá el sitio en modo oscuro</span>
          <ThemeSwitch checked={dark} onChange={toggleTheme} label="Probá el sitio en modo oscuro" />
        </label>
        <p>Tokens semánticos, un solo CSS.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        {SHOW_PORTFOLIO && <Portfolio />}
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
