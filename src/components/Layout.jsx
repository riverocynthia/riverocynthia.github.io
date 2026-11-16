import { useEffect, useRef, useState } from 'react'

const BASE = import.meta.env.BASE_URL

const NAV_LINKS = ['Sobre mí', 'Portfolio', 'Experiencia', 'Skills', 'Educación', 'Contacto']
const NAV_IDS = ['about', 'portfolio', 'experience', 'skills', 'education', 'contact']

export function SkipLink() {
  return <a className="skip-link" href="#main">Saltar al contenido</a>
}

/* home = true en la página principal (anclas locales); false en el resto, donde los links vuelven a la home */
export function Nav({ home = true }) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const prefix = home ? '' : BASE

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
      <div className="container nav-inner">
        <a href={home ? '#main' : BASE} className="nav-logo">Cynthia<span>.</span></a>
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
                href={`${prefix}#${NAV_IDS[i]}`}
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
  )
}
