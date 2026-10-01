// =========================================================
// ProductDetail — página de um produto (/produto/:slug)
// ---------------------------------------------------------
// Lê o :slug da URL, encontra o produto e mostra: imagem única,
// preço, descrição, seletor de tamanho e quantidade, botão de
// adicionar ao carrinho
// e sugestões da mesma categoria ("Combina com").
// =========================================================
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductArt from '../../components/ProductArt/ProductArt.jsx'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import { TruckIcon, RefreshIcon } from '../../components/Icons.jsx'
import { getProductBySlug, getCategoryName, products } from '../../data/products.js'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice, installments } from '../../utils/format.js'
import NotFound from '../NotFound/NotFound.jsx'
import '../../components/ProductCard/ProductCard.css'
import './ProductDetail.css'

function ProductDetail() {
  // Pega o parâmetro :slug da URL
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  // Slug inexistente -> página 404
  if (!product) return <NotFound />

  // A "key" reinicia os estados (cor, tamanho...) ao navegar entre produtos
  return <ProductView key={slug} product={product} />
}

// Conteúdo da página (separado para poder "resetar" com a key)
function ProductView({ product }) {
  const { addItem } = useCart()
  const color = product.colors[0] // cor fixa: cada produto tem uma única imagem
  // Tamanho escolhido (se só existir "Único", já vem selecionado)
  const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : null)
  const [qty, setQty] = useState(1) // quantidade
  const [sizeError, setSizeError] = useState(false) // clicou em comprar sem tamanho?

  // Sugestões: mesma categoria; se não houver, quaisquer outros produtos

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const fallback = products.filter((p) => p.id !== product.id).slice(0, 4)

  // Adiciona ao carrinho (exige tamanho escolhido)
  const handleAdd = () => {
    if (!size) {
      setSizeError(true)
      return
    }
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      type: product.type,
      price: product.price,
      colorHex: color.hex,
      image: product.image,
      size,
      qty,
    })
  }

  return (
    <div className="container">
      {/* Trilha de navegação: Início / Loja / Categoria / Produto */}
      <nav className="breadcrumb" aria-label="Você está em">
        <Link to="/">Início</Link> / <Link to="/loja">Loja</Link> /{' '}
        <Link to={`/loja?categoria=${product.category}`}>{getCategoryName(product.category)}</Link> /{' '}
        <span aria-current="page">{product.name}</span>
      </nav>

      <section className="pdp">
        {/* ---- Galeria: imagem grande + miniaturas por cor ---- */}
        <div className="pdp__gallery">
          <ProductArt
            type={product.type}
            color={color.hex}
            image={product.image}
            bg="var(--roxo-100)"
            className="pdp__art"
            label={product.name}
          />
        </div>

        {/* ---- Informações e compra ---- */}
        <div className="pdp__info">
          <div className="pdp__tags">
            {product.tags.includes('novo') && <span className="tag">Novidade</span>}
          </div>
          <h1 className="pdp__name">{product.name}</h1>

          {/* Preço atual, preço antigo riscado e parcelamento */}
          <div className="pdp__price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}
          </div>
          <p className="muted pdp__installments">{installments(product.price)}</p>

          <p className="pdp__desc">{product.description}</p>

          {/* Tamanho: obrigatório antes de adicionar ao carrinho */}
          <fieldset className="pdp__group">
            <legend>
              Tamanho{size && <>: <strong>{size}</strong></>}
            </legend>
            <div className="pdp__sizes">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`size ${s === size ? 'size--active' : ''}`}
                  onClick={() => {
                    setSize(s)
                    setSizeError(false)
                  }}
                  aria-pressed={s === size}
                >
                  {s}
                </button>
              ))}
            </div>
            {sizeError && <p className="field-error">Escolhe um tamanho primeiro, vai!</p>}
          </fieldset>

          {/* Quantidade (mínimo 1) + botão de comprar */}
          <div className="pdp__buy">
            <div className="qty" aria-label="Quantidade">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuir">
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Aumentar">
                +
              </button>
            </div>
            <button type="button" className="btn btn--primary pdp__add" onClick={handleAdd}>
              Adicionar ao carrinho
            </button>
          </div>

          {/* Vantagens */}
          <ul className="pdp__perks">
            <li>
              <TruckIcon size={20} /> Frete grátis acima de R$ 299
            </li>
            <li>
              <RefreshIcon size={20} /> Primeira troca por nossa conta
            </li>
          </ul>
        </div>
      </section>

      {/* ---- Sugestões da mesma categoria ---- */}
      <section className="section">
        <h2 className="section-title">Combina com</h2>
        <div className="product-grid">
          {(related.length ? related : fallback).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
