// =========================================================
// Toast — aviso flutuante no canto da tela
// ---------------------------------------------------------
// Aparece quando algo acontece (produto adicionado, cadastro
// concluído...) e some sozinho depois de ~3 segundos.
// O conteúdo vem do CartContext (showToast).
// =========================================================
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Mascot from '../Logo/Mascot.jsx'
import { useCart } from '../../context/CartContext.jsx'
import './Toast.css'

function Toast() {
  const { toast, dismissToast } = useCart()

  // Agenda o fechamento automático sempre que um novo aviso chega
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(dismissToast, 3200)
    return () => clearTimeout(timer)
  }, [toast, dismissToast])

  // Sem aviso = não renderiza nada
  if (!toast) return null

  return (
    // role="status" faz leitores de tela anunciarem a mensagem
    <div className="toast" role="status" key={toast.id}>
      <Mascot size={40} title="" />
      <div>
        <p className="toast__msg">{toast.message}</p>
        {/* Link opcional (ex.: "Ver carrinho →") */}
        {toast.link && (
          <Link to={toast.link.to} className="toast__link" onClick={dismissToast}>
            {toast.link.label}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Toast
