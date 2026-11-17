import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tokens/index.css'
import './css/components.css'
import './index.css'
import { LangProvider } from './i18n.jsx'
import './App.css'
import './case.css'
import CasePage from './CasePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <CasePage />
    </LangProvider>
  </StrictMode>,
)
