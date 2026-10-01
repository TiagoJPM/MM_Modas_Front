// =========================================================
// ProductCard — card de produto usado na Home, Loja e "Combina com"
// ---------------------------------------------------------
// Mostra a foto do produto, etiquetas (Novo / % de desconto),
// nome e preço. O card inteiro é um link para a página do
// produto (/produto/:slug).
// =========================================================
import { Link } from 'react-router-dom'
import { PRODUCT_IMAGE_FALLBACK } from '../../data/products.js'
import { formatPrice } from '../../utils/format.js'
import './ProductCard.css'

function ProductCard({ product }) {
  const isNew = product.tags.includes('novo')

  // Percentual de desconto quando existe preço antigo
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0

  // Sem foto própria, cai no placeholder
  const photo = product.image ?? PRODUCT_IMAGE_FALLBACK

  return (
    <article className="product-card">
      <Link to={`/produto/${product.slug}`} className="product-card__link">
        {/* Foto + etiquetas */}
        <div className="product-card__media">
          <div className="product-photo" style={{ '--photo': `url("${photo}")` }}>
            <img className="product-img" src={photo} alt={product.name} loading="lazy" />
          </div>
          <div className="product-card__tags">
            {isNew && <span className="tag">Novo</span>}
            {discount > 0 && <span className="tag tag--roxo">-{discount}%</span>}
          </div>
        </div>

        {/* Informações */}
        <div className="product-card__body">
          <h3 className="product-card__name">{product.name}</h3>
          <div className="product-card__prices">
            <span className="product-card__price">{formatPrice(product.price)}</span>
            {product.oldPrice && <s className="product-card__old">{formatPrice(product.oldPrice)}</s>}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
