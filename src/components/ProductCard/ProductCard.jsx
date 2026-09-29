// =========================================================
// ProductCard — card de produto usado na Home, Loja e "Combina com"
// ---------------------------------------------------------
// Mostra ilustração, etiquetas (Novo / % de desconto), nome,
// preço e as cores disponíveis. O card inteiro é um link
// para a página do produto (/produto/:slug).
// =========================================================
import { Link } from 'react-router-dom'
import ProductArt from '../ProductArt/ProductArt.jsx'
import { getProductImage } from '../../data/products.js'
import { formatPrice } from '../../utils/format.js'
import './ProductCard.css'

// Alterna o fundo dos cards entre laranja e roxo claros (pelo id do produto)
const backgrounds = ['var(--roxo-100)', 'var(--laranja-100)', 'var(--roxo-200)', 'var(--laranja-200)']

function ProductCard({ product }) {
  const bg = backgrounds[product.id % backgrounds.length]
  const isNew = product.tags.includes('novo')

  // Percentual de desconto quando existe preço antigo
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0

  return (
    <article className="product-card">
      <Link to={`/produto/${product.slug}`} className="product-card__link">
        {/* Imagem + etiquetas */}
        <div className="product-card__media">
          <ProductArt
            type={product.type}
            color={product.colors[0].hex}
            bg={bg}
            image={getProductImage(product, product.colors[0].name)}
            label={product.name}
          />
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
          {/* Bolinhas com as cores disponíveis */}
          <div className="product-card__colors" aria-label={`${product.colors.length} cores disponíveis`}>
            {product.colors.map((c) => (
              <span key={c.name} className="swatch-dot" style={{ background: c.hex }} title={c.name} />
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
