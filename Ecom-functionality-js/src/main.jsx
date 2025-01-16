import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FilterContextProvider } from './store/dataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <FilterContextProvider>
    <App />
 </FilterContextProvider>
  </StrictMode>,
)
