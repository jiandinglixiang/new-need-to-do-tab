import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../i18n/config'
import './index.css'
import Newtab from './views/Newtab'

createRoot(document.getElementById('app-container')!).render(
  <StrictMode>
    <Newtab />
  </StrictMode>
)
