// =========================================================
// Ponto de entrada da aplicação
// ---------------------------------------------------------
// Monta o React dentro da <div id="root"> do index.html e
// "embrulha" o App com os provedores globais:
//  - BrowserRouter: habilita as rotas (React Router)
//  - UserProvider: dados do usuário cadastrado
//  - CartProvider: carrinho de compras
// =========================================================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import App from './App.jsx'
import './styles/global.css' // variáveis de cor, fontes e estilos base

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
