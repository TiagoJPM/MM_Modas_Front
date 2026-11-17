// =========================================================
// App — estrutura fixa da página + tabela de rotas
// ---------------------------------------------------------
// Header e Footer aparecem em todas as páginas; o conteúdo
// do <main> muda conforme a URL (definido em <Routes>).
// =========================================================
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Toast from './components/Toast/Toast.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home/Home.jsx'

// As demais páginas só são baixadas quando a pessoa entra nelas (lazy):
// o primeiro carregamento do site fica bem mais leve.
const Shop = lazy(() => import('./pages/Shop/Shop.jsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail.jsx'))
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'))
const Cart = lazy(() => import('./pages/Cart/Cart.jsx'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout.jsx'))
const Register = lazy(() => import('./pages/Register/Register.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'))

function App() {
  return (
    <>
      {/* Controla a rolagem ao trocar de página (topo ou âncora #) */}
      <ScrollToTop />
      <Header />

      <main className="main">
        {/* Enquanto a página carrega, mostra um aviso curtinho */}
        <Suspense fallback={<p className="main__loading" role="status">Carregando…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loja" element={<Shop />} />
            {/* :slug é um parâmetro: /produto/camiseta-sorriso-maroto */}
            <Route path="/produto/:slug" element={<ProductDetail />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="/carrinho" element={<Cart />} />
            {/* O Checkout redireciona para /cadastro se não houver usuário */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            {/* Qualquer outra URL cai na página 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      {/* Aviso flutuante (ex.: "foi pro carrinho!") */}
      <Toast />
    </>
  )
}

export default App
