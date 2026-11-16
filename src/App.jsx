import './App.css'

const SHOW_PORTFOLIO = false

const NAV_LINKS = ['Sobre mí', 'Experiencia', ...(SHOW_PORTFOLIO ? ['Portfolio'] : []), 'Skills', 'Educación', 'Contacto']
const NAV_IDS   = ['about',    'experience',  ...(SHOW_PORTFOLIO ? ['portfolio'] : []), 'skills', 'education', 'contact']

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <span className="nav-logo">Cynthia<span>.</span></span>
        <ul className="nav-links">
          {NAV_LINKS.map((label, i) => (
            <li key={label}>
              <a href={`#${NAV_IDS[i]}`} className={label === 'Contacto' ? 'nav-cta' : ''}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Product Designer · UX/UI · Accesibilidad</span>
          </div>
          <h1 className="hero-title">
            Hola, soy<br />
            <span className="highlight">Cynthia Rivero</span>
          </h1>
          <p className="hero-role">Diseñadora UX/UI Senior &amp; Especialista en Accesibilidad Digital</p>
          <p className="hero-bio">
            Más de 8 años diseñando productos digitales centrados en las personas.
            Especializada en WCAG 2.2, design systems y la integración de IA generativa
            al proceso de diseño.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">Ver mi experiencia</a>
            <a href="#contact" className="btn btn-outline">Contactarme</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">scroll</div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">Diseño con propósito, empatía y atención al detalle</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy Diseñadora UX/UI Senior con más de 8 años de experiencia en producto digital,
              especializada en accesibilidad (WCAG 2.2) y design systems. En Gire (Rapipago)
              diseño plataformas de pagos y servicios financieros gestionando el ciclo completo.
            </p>
            <p>
              Integro IA generativa y agentes en mi proceso para acelerar la exploración,
              la validación y la documentación. Mi experiencia como desarrolladora front-end
              (React, Vue.js) me permite colaborar de cerca con los equipos técnicos y
              entregar especificaciones precisas en handoff.
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
    role: 'Diseñadora UI & Desarrolladora Web',
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
        <p className="section-subtitle">Trayectoria en diseño de producto y desarrollo front-end</p>
        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <div className="timeline-item" key={job.company}>
              <div className={`timeline-dot${job.current ? ' current' : ''}`} />
              <div className="timeline-card">
                <div className="timeline-header">
                  <span className="timeline-role">{job.role}</span>
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

const CASES = [
  {
    title: 'Sistema de cobros presencial',
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
      'Funciona en web y tablet, sin equipos especiales',
    ],
    tags: ['UX/UI', 'Design system', 'Tokens multimarca', 'Accesibilidad', 'Testeo de usabilidad', 'React'],
    pdf: `${import.meta.env.BASE_URL}caso-sistema-de-cobros-presencial.pdf`,
  },
]

function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">Casos de estudio de producto (versión NDA)</p>
        <div className="case-list">
          {CASES.map((c) => (
            <article className="case-card" key={c.title}>
              <div className="case-card-visual" aria-hidden="true">
                <span className="case-card-visual-label">Caso de estudio</span>
                <span className="case-card-visual-title">{c.title}</span>
                <span className="case-card-visual-pages">PDF · 18 páginas</span>
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
                  <a href={c.pdf} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Ver caso completo
                  </a>
                  <a href={c.pdf} download className="btn btn-secondary">
                    Descargar PDF
                  </a>
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
        <p className="section-subtitle">Disciplinas y tecnologías que domino</p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="skill-card-icon">{s.icon}</div>
              <div className="skill-card-title">{s.title}</div>
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
  { name: 'Claude 101, Introduction to agent skills, AI fluency framework, AI Capabilities & Claude Code in action', meta: '2026 · Anthropic Skilljar' },
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
        <p className="section-subtitle">Educación y desarrollo profesional continuo</p>
        <div className="edu-grid" style={{ marginBottom: 40 }}>
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
        <h3 style={{ color: 'var(--blue-800)', fontWeight: 700, marginBottom: 20, fontSize: '1.05rem' }}>
          Cursos &amp; certificaciones
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
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Tenés un proyecto en mente? Hablemos.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-links">
              <a href="mailto:cynthiarivero@proton.me" className="contact-link">
                <span className="contact-link-icon">✉️</span>
                cynthiarivero@proton.me
              </a>
              <a href="https://linkedin.com/in/riverocynthia" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">💼</span>
                linkedin.com/in/riverocynthia
              </a>
              <a href="https://github.com/riverocynthia" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon">🐙</span>
                github.com/riverocynthia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Cynthia Rivero · Diseñada con ♥ en Buenos Aires</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      {SHOW_PORTFOLIO && <Portfolio />}
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
