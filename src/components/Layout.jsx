import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { NAV_IDS, ui } from '../content/ui.js'
import HandballIcon from './HandballIcon.jsx'

const BASE = import.meta.env.BASE_URL

export function SkipLink() {
  const { lang } = useLang()
  return <a className="skip-link" href="#main">{ui[lang].skip}</a>
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
  const { lang } = useLang()
  const t = ui[lang]
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
    <nav className="nav" aria-label={t.navLabel}>
      <div className="nav-inner">
        <a href={home ? '#main' : BASE} className="nav-logo">Cynthia<span>.</span></a>
        <button
          type="button"
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </button>
        <ul id="nav-menu" className={`nav-links${open ? ' is-open' : ''}`}>
          {t.navLinks.map((label, i) => (
            <li key={NAV_IDS[i]}>
              <a
                href={`${prefix}#${NAV_IDS[i]}`}
                className={NAV_IDS[i] === 'contact' ? 'btn btn-secondary nav-cta' : ''}
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

/* Mismo switch, con ES / EN en lugar de sol y luna. Apagado = español, encendido = inglés. */
function LangSwitch({ checked, onChange, label }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} className="cr-switch lang-switch" onClick={onChange}>
      <span className="cr-switch__icon cr-switch__icon--start" aria-hidden="true">ES</span>
      <span className="cr-switch__icon cr-switch__icon--end" aria-hidden="true">EN</span>
      <span className="cr-switch__thumb" aria-hidden="true">{checked ? 'EN' : 'ES'}</span>
    </button>
  )
}

/* Pelota flotante: aparece al llegar a la última sección y vuelve al inicio con scroll suave */
export function BackToTop() {
  const { lang } = useLang()
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
    <button type="button" className="back-to-top" data-visible={visible} onClick={goTop} aria-label={ui[lang].backToTop}>
      <HandballIcon />
      <span className="back-to-top-tip" aria-hidden="true">{ui[lang].backToTop}</span>
    </button>
  )
}

/* Mate interactivo: cebar, tomar sorbos y se lava. Todo con botones reales y el estado anunciado en texto. */
const MATE_SIPS = 4

function MateIllustration({ level, slurp, slurpText }) {
  /* El agua sube de 0 a 4 sorbos; el vapor aparece mientras haya agua. */
  const lift = (1 - level / MATE_SIPS) * 74
  return (
    <div className="mate-scene" aria-hidden="true">
      <span className={`mate-slurp${slurp ? ' is-on' : ''}`}>{slurpText}</span>
      <svg viewBox="0 0 160 176" focusable="false">
        <defs>
          <clipPath id="mate-inside"><path d="M42 72C32 100 38 140 80 150C122 140 128 100 118 72z" /></clipPath>
        </defs>
        <g className={`mate-steam${level > 0 ? ' is-on' : ''}`} fill="none" strokeLinecap="round" strokeWidth="3">
          <path d="M60 52c-6-8 6-12 0-22" />
          <path d="M80 50c-6-8 6-12 0-22" />
          <path d="M100 52c-6-8 6-12 0-22" />
        </g>
        <path d="M32 66C14 100 22 152 80 164C138 152 146 100 128 66z" fill="var(--orange-700)" stroke="var(--orange-900)" strokeWidth="3" strokeLinejoin="round" />
        <path d="M42 72C32 100 38 140 80 150C122 140 128 100 118 72z" fill="var(--orange-950)" />
        <g clipPath="url(#mate-inside)">
          <rect className="mate-water" x="20" y="68" width="120" height="90" fill="var(--green-700)" style={{ transform: `translateY(${lift}px)` }} />
        </g>
        <ellipse cx="80" cy="66" rx="50" ry="10" fill="none" stroke="var(--orange-900)" strokeWidth="3" />
        <path d="M36 66c8-18 30-26 48-18l4 18z" fill="var(--green-500)" stroke="var(--green-900)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M112 18L92 124" stroke="var(--gray-600)" strokeWidth="6.4" strokeLinecap="round" />
        <path d="M112 18L92 124" stroke="var(--gray-300)" strokeWidth="4" strokeLinecap="round" />
        <path d="M110.4 26L95 108" stroke="#fff" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M105 16h14" stroke="var(--gray-600)" strokeWidth="5" strokeLinecap="round" />
        <path d="M103.6 30.5l16 3" stroke="var(--gray-600)" strokeWidth="2.2" strokeLinecap="round" />
        <g transform="rotate(10 90 134)">
          <ellipse cx="90" cy="134" rx="7.5" ry="14" fill="var(--gray-300)" stroke="var(--gray-600)" strokeWidth="1.8" />
          <g fill="var(--gray-600)">
            <circle cx="87.6" cy="126" r="1.1" /><circle cx="92.4" cy="126" r="1.1" />
            <circle cx="90" cy="130.5" r="1.1" /><circle cx="86.4" cy="134.5" r="1.1" /><circle cx="93.6" cy="134.5" r="1.1" />
            <circle cx="90" cy="139" r="1.1" /><circle cx="87.6" cy="143" r="1.1" /><circle cx="92.4" cy="143" r="1.1" />
          </g>
        </g>
      </svg>
    </div>
  )
}

function MateCorner({ t }) {
  const m = t.mate
  const [level, setLevel] = useState(0)
  const [last, setLast] = useState('empty')
  const [slurp, setSlurp] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  function pour() {
    setLevel(MATE_SIPS)
    setLast('poured')
  }

  function sip() {
    if (level === 0) {
      setLast('flat')
      return
    }
    setLevel((n) => n - 1)
    setLast(level - 1 === 0 ? 'flat' : 'sipped')
    setSlurp(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setSlurp(false), 1100)
  }

  return (
    <div className="footer-mate-block">
      <div className="footer-mate-intro">
        <h2 id="footer-mate-title" className="footer-mate-title">{m.title}</h2>
        <p className="footer-mate-lead">{m.lead}</p>
        <div className="footer-mate-actions">
          <button type="button" className="btn btn-primary" onClick={pour}>{m.pour}</button>
          <button type="button" className="btn btn-secondary" onClick={sip}>{m.sip}</button>
        </div>
        <p className="footer-mate-status" role="status">
          {m[last]}
        </p>
      </div>
      <div className="footer-mate-play">
        <MateIllustration level={level} slurp={slurp} slurpText={m.slurp} />
      </div>
    </div>
  )
}

export function Footer() {
  const { lang, setLang } = useLang()
  const t = ui[lang]
  const otherLang = lang === 'es' ? 'en' : 'es'
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')
  const themeLabel = dark ? t.footerThemeToLight : t.footerThemeToDark

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
        <div className="container footer-grid">
          <MateCorner t={t} />
          <div className="footer-data">
            <label className="footer-theme">
              <span aria-hidden="true" lang={otherLang}>{t.langLabel}</span>
              <LangSwitch checked={lang === 'en'} onChange={() => setLang(otherLang)} label={t.langSwitchLabel} />
            </label>
            <label className="footer-theme">
              <span aria-hidden="true">{themeLabel}</span>
              <ThemeSwitch checked={dark} onChange={toggleTheme} label={themeLabel} />
            </label>
            <p>{t.footerTokens}</p>
          </div>
          <div className="footer-credit">
            <p>© {new Date().getFullYear()} Cynthia Rivero.</p>
            <p>{t.footerCredit}</p>
          </div>
        </div>
      </footer>
    </>
  )
}
