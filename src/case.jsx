import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tokens/index.css'
import './css/components.css'
import './index.css'
import './App.css'
import './case.css'
import CasePage from './CasePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CasePage />
  </StrictMode>,
)
