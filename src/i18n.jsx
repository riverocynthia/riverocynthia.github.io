import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LangContext = createContext({ lang: 'es', setLang: () => {} })

/* Idioma inicial: el que la persona eligió antes; si no hay elección, español (idioma por defecto del sitio). */
function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch (e) {
    /* sin almacenamiento: se usa el idioma por defecto */
  }
  return 'es'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
    } catch (e) {
      /* la elección vale solo para esta visita */
    }
  }, [])

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/* Título y descripción de la pestaña en el idioma activo */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
}
