// =========================================================
// CartContext — estado global do carrinho
// ---------------------------------------------------------
// Qualquer componente pode ler/alterar o carrinho com useCart().
// Os itens ficam salvos no localStorage para não sumirem ao
// recarregar a página. Também controla o "toast" (aviso flutuante).
// =========================================================
import { createContext, useContext, useEffect, useReducer, useState, useCallback } from 'react'
import { FRETE_GRATIS_A_PARTIR, VALOR_FRETE, CUPONS } from './cartConfig.js'

const CartContext = createContext(null)

// Chave usada no localStorage do navegador
const STORAGE_KEY = 'mm-modas:carrinho'

// Cada item do carrinho é identificado por produto + cor + tamanho.
// Assim, a mesma camiseta em tamanhos diferentes vira duas linhas.
function itemKey({ id, color, size }) {
  return `${id}-${color}-${size}`
}

// Reducer: recebe o estado atual + uma ação e devolve o novo estado
function cartReducer(state, action) {
  switch (action.type) {
    // Adiciona um item; se já existir, só soma a quantidade
    case 'ADD': {
      const key = itemKey(action.item)
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) => (i.key === key ? { ...i, qty: i.qty + action.item.qty } : i))
      }
      return [...state, { ...action.item, key }]
    }
    // Altera a quantidade; se chegar a 0, o item sai do carrinho
    case 'UPDATE_QTY':
      return state
        .map((i) => (i.key === action.key ? { ...i, qty: action.qty } : i))
        .filter((i) => i.qty > 0)
    // Remove um item específico
    case 'REMOVE':
      return state.filter((i) => i.key !== action.key)
    // Esvazia o carrinho (usado depois de finalizar a compra)
    case 'CLEAR':
      return []
    default:
      return state
  }
}

// Lê o carrinho salvo; se não houver (ou der erro), começa vazio
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)
  const [toast, setToast] = useState(null)
  const [coupon, setCoupon] = useState(null)

  // Sempre que os itens mudam, salva no localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* armazenamento indisponível: segue só em memória */
    }
  }, [items])

  // Mostra um aviso flutuante. "link" é opcional: { to, label }
  const showToast = useCallback((message, link = null) => {
    setToast({ message, link, id: Date.now() })
  }, [])

  const dismissToast = useCallback(() => setToast(null), [])

  // ----- Ações expostas para os componentes -----
  const addItem = (item) => {
    dispatch({ type: 'ADD', item })
    showToast(`${item.name} foi pro carrinho!`, { to: '/carrinho', label: 'Ver carrinho →' })
  }
  const updateQty = (key, qty) => dispatch({ type: 'UPDATE_QTY', key, qty })
  const removeItem = (key) => dispatch({ type: 'REMOVE', key })
  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
    setCoupon(null)
  }

  // Aplica um cupom se ele existir em CUPONS (maiúsculas/minúsculas tanto faz)
  const applyCoupon = (code) => {
    const normalized = code.trim().toUpperCase()
    if (CUPONS[normalized]) {
      setCoupon({ code: normalized, rate: CUPONS[normalized] })
      return true
    }
    return false
  }

  // ----- Valores calculados a cada renderização -----
  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const discount = coupon ? subtotal * coupon.rate : 0
  const shipping = subtotal === 0 || subtotal >= FRETE_GRATIS_A_PARTIR ? 0 : VALOR_FRETE
  const total = subtotal - discount + shipping

  const value = {
    items,
    count,
    subtotal,
    discount,
    shipping,
    total,
    coupon,
    addItem,
    updateQty,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon: () => setCoupon(null),
    toast,
    showToast,
    dismissToast,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Hook de acesso ao carrinho: const { items, addItem } = useCart()
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart precisa estar dentro de <CartProvider>')
  return ctx
}
