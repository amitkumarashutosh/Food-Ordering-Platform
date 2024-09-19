import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Auth0ProviderNavigate from './auth/Auth0ProviderNavigate.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0ProviderNavigate>
      <App />
    </Auth0ProviderNavigate>
  </StrictMode>,
)
