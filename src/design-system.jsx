import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tokens/index.css'
import './css/components.css'
import './index.css'
import './App.css'
import './case.css'
import './ds-page.css'
import DesignSystemPage from './DesignSystemPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DesignSystemPage />
  </StrictMode>,
)
