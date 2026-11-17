// =========================================================
// FavoriteButton — botão de coração para favoritar produto
// ---------------------------------------------------------
// Variantes:
//  - padrão: redondo, flutuando no canto da imagem (ProductCard)
//  - inline: fica na linha de compra (página do produto)
// =========================================================
import { HeartIcon } from '../Icons.jsx'
import { useFavorites } from '../../context/FavoritesContext.jsx'
import './FavoriteButton.css'

function FavoriteButton({ product, inline = false }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(product.id)

  return (
    <button
      type="button"
      className={`fav-btn ${inline ? 'fav-btn--inline' : ''} ${active ? 'fav-btn--active' : ''}`}
      onClick={() => toggleFavorite(product)}
      aria-pressed={active}
      aria-label={active ? `Remover ${product.name} dos favoritos` : `Favoritar ${product.name}`}
    >
      <HeartIcon size={20} filled={active} />
    </button>
  )
}

export default FavoriteButton
