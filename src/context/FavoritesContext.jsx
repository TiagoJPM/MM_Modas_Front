// =========================================================
// FavoritesContext — produtos favoritados (coração)
// ---------------------------------------------------------
// Guarda só os ids dos produtos no localStorage. Qualquer
// componente usa useFavorites() para ler ou alternar um favorito.
// Fica dentro do CartProvider para reaproveitar o toast.
// =========================================================
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/products.js'
import { useCart } from './CartContext.jsx'

const FavoritesContext = createContext(null)
const STORAGE_KEY = 'mm-modas:favoritos'

// Ids que existem no catálogo (ignora ids antigos de produtos removidos)
const validIds = new Set(products.map((p) => p.id))

// Lê os favoritos salvos; se não houver (ou der erro), começa vazio
function loadFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved.filter((id) => validIds.has(id)) : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(loadFavorites)
  const { showToast } = useCart()

  // Salva sempre que a lista muda
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch {
      /* armazenamento indisponível: segue só em memória */
    }
  }, [ids])

  const isFavorite = useCallback((id) => ids.includes(id), [ids])

  // Adiciona ou remove; só avisa (toast) quando adiciona
  const toggleFavorite = useCallback(
    (product) => {
      if (ids.includes(product.id)) {
        setIds((list) => list.filter((id) => id !== product.id))
      } else {
        setIds((list) => [...list, product.id])
        showToast(`${product.name} entrou nos favoritos!`, { to: '/favoritos', label: 'Ver favoritos →' })
      }
    },
    [ids, showToast],
  )

  const value = useMemo(
    () => ({ ids, count: ids.length, isFavorite, toggleFavorite }),
    [ids, isFavorite, toggleFavorite],
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

// Hook de acesso: const { isFavorite, toggleFavorite } = useFavorites()
// eslint-disable-next-line react-refresh/only-export-components
export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error('useFavorites precisa estar dentro de <FavoritesProvider>')
  return ctx
}
