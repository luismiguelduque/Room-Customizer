import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoomCustomizer } from './RoomCustomizer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoomCustomizer />
  </StrictMode>,
)
