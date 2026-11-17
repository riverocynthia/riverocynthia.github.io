import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = ['Sobre mí', 'Portfolio', 'Experiencia', 'Habilidades', 'Educación', 'Contacto']
const NAV_IDS = ['about', 'portfolio', 'experience', 'skills', 'education', 'contact']

export function SkipLink() {
  return <a className="skip-link" href="#main">Saltar al contenido</a>
}

function MenuIcon() {
  return (
    <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  )
}

/* Devuelve el id de la sección donde está parada la persona (null si todavía no llegó a la primera) */
function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  const key = ids.join()

  useEffect(() => {
    if (!ids.length) return undefined
    let raf = 0
    const update = () => {
      raf = 0
      const line = window.innerHeight * 0.35
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1]
      setActive(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}

/* home = true en la página principal (anclas locales); false en el resto, donde los links vuelven a la home */
export function Nav({ home = true }) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const prefix = home ? '' : BASE
  const active = useActiveSection(home ? NAV_IDS : [])

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
    <nav className="nav" aria-label="Principal">
      <div className="nav-inner">
        <a href={home ? '#main' : BASE} className="nav-logo">Cynthia<span>.</span></a>
        <button
          type="button"
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </button>
        <ul id="nav-menu" className={`nav-links${open ? ' is-open' : ''}`}>
          {NAV_LINKS.map((label, i) => (
            <li key={label}>
              <a
                href={`${prefix}#${NAV_IDS[i]}`}
                className={label === 'Contacto' ? 'btn btn-secondary nav-cta' : ''}
                aria-current={active === NAV_IDS[i] ? 'location' : undefined}
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

export function ThemeSwitch({ checked, onChange, label, disabled = false }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} className="cr-switch" onClick={onChange} disabled={disabled}>
      <span className="cr-switch__icon cr-switch__icon--start"><SunIcon /></span>
      <span className="cr-switch__icon cr-switch__icon--end"><MoonIcon /></span>
      <span className="cr-switch__thumb">{checked ? <MoonIcon /> : <SunIcon />}</span>
    </button>
  )
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

/* Flecha flotante: aparece al llegar a la última sección y vuelve al inicio con scroll suave */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const check = () => {
      const last = document.querySelector('main > section:last-of-type')
      setVisible(last ? last.getBoundingClientRect().top < window.innerHeight : window.scrollY > window.innerHeight)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  function goTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <button type="button" className="back-to-top" data-visible={visible} onClick={goTop} aria-label="Ir hacia arriba">
      <ArrowUpIcon />
      <span className="back-to-top-tip" aria-hidden="true">Ir hacia arriba</span>
    </button>
  )
}

export function Footer() {
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
    <>
    <BackToTop />
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Cynthia Rivero · Diseñada con ♥ en Buenos Aires</p>
        <label className="footer-theme">
          <span aria-hidden="true">Probá el sitio en modo oscuro</span>
          <ThemeSwitch checked={dark} onChange={toggleTheme} label="Probá el sitio en modo oscuro" />
        </label>
        <p>Tokens semánticos, un solo CSS.</p>
      </div>
    </footer>
    </>
  )
}
