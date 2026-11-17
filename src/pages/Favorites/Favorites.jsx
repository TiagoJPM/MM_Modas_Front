// =========================================================
// Favorites — lista de favoritos (/favoritos)
// ---------------------------------------------------------
// Mostra os produtos marcados com o coração. Os dados ficam
// no localStorage (ver FavoritesContext).
// =========================================================
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import Mascot from '../../components/Logo/Mascot.jsx'
import { products } from '../../data/products.js'
import { useFavorites } from '../../context/FavoritesContext.jsx'
import useDocumentTitle from '../../hooks/useDocumentTitle.js'
import '../../components/ProductCard/ProductCard.css'
import './Favorites.css'

function Favorites() {
  useDocumentTitle('Favoritos')
  const { ids } = useFavorites()
  const favorites = products.filter((p) => ids.includes(p.id))

  return (
    <div className="container favorites">
      <header className="page-head">
        <span className="eyebrow">Sua seleção</span>
        <h1>Favoritos</h1>
        <p className="muted">
          {favorites.length} {favorites.length === 1 ? 'peça salva' : 'peças salvas'}
        </p>
      </header>

      {favorites.length > 0 ? (
        <div className="product-grid">
          {favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="favorites__empty">
          <Mascot size={110} title="" />
          <h2>Nenhum favorito ainda</h2>
          <p className="muted">Toque no coração de uma peça para guardar ela aqui.</p>
          <Link to="/loja" className="btn btn--accent">
            Ver a loja
          </Link>
        </div>
      )}
    </div>
  )
}

export default Favorites
