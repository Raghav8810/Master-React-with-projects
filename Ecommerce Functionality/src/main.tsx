import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FilterProvider } from './components/FilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <FilterProvider>
      <App />
  </FilterProvider>
  </StrictMode>,
)
