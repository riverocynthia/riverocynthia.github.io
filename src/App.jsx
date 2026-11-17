import { useEffect, useState } from 'react'
import './App.css'
import { Footer, Nav, SkipLink } from './components/Layout.jsx'
import HandballIcon from './components/HandballIcon.jsx'
import { usePageMeta, useLang } from './i18n.jsx'
import { home } from './content/home.js'
import { ui } from './content/ui.js'

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

/* Una frase al azar cada vez que se carga la página. El índice se guarda para que, al cambiar de idioma,
   se mantenga la misma frase traducida. */
function HeroRotator({ t }) {
  const [i] = useState(() => Math.floor(Math.random() * t.phrases.length))

  return (
    <p className="hero-rotator">
      {t.lead}
      <span className="hero-rotator-text">{t.phrases[i]}</span>
    </p>
  )
}

/* Media cancha de handball dibujada con líneas: área de 6 m, golpe franco de 9 m y marca de 7 m */
function HeroCourt() {
  return (
    <svg className="hero-court" viewBox="0 0 400 320" fill="none" aria-hidden="true" focusable="false">
      <path d="M0 304H400" />
      <path d="M176 304v12h48v-12" />
      <path d="M80 304A96 96 0 0 1 176 208H224A96 96 0 0 1 320 304" />
      <path d="M32 304A144 144 0 0 1 176 160H224A144 144 0 0 1 368 304" strokeDasharray="10 9" />
      <path d="M192 192h16" />
    </svg>
  )
}

/* Ficha de jugadora en código: decoración nerd arriba a la izquierda. Es solo ornamento, no se lee ni se enfoca. */
function HeroCode() {
  return (
    <div className="hero-code" aria-hidden="true">
      <div className="hero-code-bar">
        <svg viewBox="0 0 10 10" width="10" height="10" focusable="false"><path d="M1 8h8" /></svg>
        <svg viewBox="0 0 10 10" width="10" height="10" focusable="false"><rect x="1.5" y="1.5" width="7" height="7" /></svg>
        <svg viewBox="0 0 10 10" width="10" height="10" focusable="false"><path d="M1.5 1.5l7 7M8.5 1.5l-7 7" /></svg>
      </div>
      <pre>
        <code>
          <span className="code-line"><span className="tk-kw">const</span> cynthia <span className="tk-p">= {'{'}</span></span>
          <span className="code-line">{'  '}role<span className="tk-p">:</span> <span className="tk-str">"Product Designer"</span><span className="tk-p">,</span></span>
          <span className="code-line">{'  '}level<span className="tk-p">:</span> <span className="tk-num">8</span><span className="tk-p">,</span></span>
          <span className="code-line">{'  '}sport<span className="tk-p">:</span> <span className="tk-str">"handball"</span><span className="tk-p">,</span></span>
          <span className="code-line">{'  '}fuel<span className="tk-p">:</span> <span className="tk-str">"mate"</span><span className="tk-p">,</span></span>
          <span className="code-line">{'  '}accessible<span className="tk-p">:</span> <span className="tk-num">true</span><span className="tk-p">,</span></span>
          <span className="code-line"><span className="tk-p">{'}'};</span><span className="hero-code-cursor">█</span></span>
        </code>
      </pre>
    </div>
  )
}

function Hero({ t }) {
  return (
    <section className="hero">
      <HeroCode />
      <HeroCourt />
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-text">{t.eyebrow}</span>
          </div>
          <h1 className="hero-title">
            {t.line1}{' '}<br />
            <span className="highlight">{t.line2}</span>
          </h1>
          <HeroRotator t={t.rotator} />
          <p className="hero-bio">{t.bio}</p>
          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">{t.cta}</a>
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
        <span className="hero-scroll-text">{t.scroll}</span>
        <span className="hero-scroll-ball" aria-hidden="true"><HandballIcon /></span>
      </a>
    </section>
  )
}

function About({ t }) {
  return (
    <section id="about" tabIndex={-1} className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
            {t.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <div className="about-highlights">
            {t.stats.map(([num, label]) => (
              <div className="about-stat" key={num}>
                <span className="about-stat-num">{num}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience({ t }) {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        <div className="timeline">
          {t.jobs.map((job) => (
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

function Portfolio({ t, newTab }) {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        <div className="case-list">
          {t.cases.map((c) => (
            <article className="case-card" key={c.href || c.title}>
              <div className="case-card-visual" aria-hidden="true">
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
                  {c.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <div className="case-actions">
                  {c.actions.map((a) => (
                    <a
                      key={a.href}
                      href={a.href}
                      className={`btn ${a.primary ? 'btn-primary' : 'btn-secondary'}`}
                      {...(a.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      {...(a.download ? { download: true } : {})}
                    >
                      {a.label}
                      {a.external && <span className="sr-only">{newTab}</span>}
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

function Skills({ t }) {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        <div className="skills-grid">
          {t.groups.map((s) => (
            <div className="skill-card" key={s.icon}>
              <div className="skill-card-icon" aria-hidden="true">{s.icon}</div>
              <h3 className="skill-card-title">{s.title}</h3>
              <div className="skill-tags">
                {s.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education({ t }) {
  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        <div className="edu-grid">
          {t.cards.map((c) => (
            <div className="edu-card" key={c.title}>
              <p className="edu-card-label">{c.label}</p>
              <p className="edu-card-title">{c.title}</p>
              <p className="edu-card-sub">{c.sub}</p>
            </div>
          ))}
        </div>
        <h3 className="edu-subtitle">{t.coursesTitle}</h3>
        <div className="courses-list">
          {t.courses.map((c) => (
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

function Contact({ t, newTab }) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
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
                <span className="sr-only">{newTab}</span>
              </a>
              <a href="https://github.com/riverocynthia" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-link-icon" aria-hidden="true">🐙</span>
                <span className="contact-link-text">github.com/riverocynthia</span>
                <span className="sr-only">{newTab}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* La página se arma con React después de cargar: el navegador no llega a saltar al ancla de la URL
   (por ejemplo al volver de un caso con /#portfolio), así que se hace acá una vez dibujada. */
function useScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const go = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
    go()
    document.fonts?.ready.then(go)
  }, [])
}

export default function App() {
  const { lang } = useLang()
  const t = home[lang]
  usePageMeta(t.meta.title, t.meta.description)
  useScrollToHash()

  return (
    <>
      <SkipLink />
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero t={t.hero} />
        <About t={t.about} />
        <Portfolio t={t.portfolio} newTab={ui[lang].newTab} />
        <Experience t={t.experience} />
        <Skills t={t.skills} />
        <Education t={t.education} />
        <Contact t={t.contact} newTab={ui[lang].newTab} />
      </main>
      <Footer />
    </>
  )
}
