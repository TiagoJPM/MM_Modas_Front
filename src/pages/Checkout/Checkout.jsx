// =========================================================
// Checkout — finalizar compra (/checkout)
// ---------------------------------------------------------
// Regras:
//  1. Só entra quem tem CADASTRO. Sem cadastro -> vai para /cadastro
//     (e volta pra cá automaticamente depois de cadastrar).
//  2. Carrinho vazio -> volta para /carrinho.
//  3. Os dados de entrega vêm preenchidos com o endereço do cadastro.
//  4. CEP aceita no máximo 8 dígitos (só números).
// =========================================================
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { useUser } from '../../context/UserContext.jsx'
import { formatPrice } from '../../utils/format.js'
import { maskCep, isCep, isEmail } from '../../utils/validators.js'
import '../Cart/Cart.css' // reaproveita o estilo do "resumo" do carrinho
import './Checkout.css'

// Opções de pagamento exibidas como cards
const paymentOptions = [
  { id: 'pix', label: 'Pix', hint: 'aprovação na hora' },
  { id: 'cartao', label: 'Cartão', hint: 'até 3x sem juros' },
  { id: 'boleto', label: 'Boleto', hint: 'vence em 2 dias' },
]

function Checkout() {
  const { items, total, count, clearCart } = useCart()
  const { user } = useUser()

  // Formulário começa com os dados do cadastro (se existir)
  const [form, setForm] = useState(() => ({
    nome: user?.nome ?? '',
    email: user?.email ?? '',
    cep: user?.cep ?? '',
    endereco: user?.endereco ?? '',
    numero: user?.numero ?? '',
    complemento: user?.complemento ?? '',
    pagamento: 'pix',
  }))
  const [errors, setErrors] = useState({})
  const [orderNumber, setOrderNumber] = useState(null)

  // ---------- Pedido concluído: tela de sucesso ----------
  if (orderNumber) {
    return (
      <div className="container">
        <div className="order-ok">
          <Mascot size={150} title="" />
          <span className="eyebrow">Pedido #{orderNumber}</span>
          <h1>Arrasou, {form.nome.split(' ')[0]}!</h1>
          <p className="muted">
            Seu pedido foi recebido. Mandamos os detalhes para <strong>{form.email}</strong>.
          </p>
          <Link to="/loja" className="btn btn--primary">
            Continuar comprando
          </Link>
        </div>
      </div>
    )
  }

  // ---------- Guardas de acesso ----------
  // Sem cadastro: manda para /cadastro e avisa de onde veio (state.from)
  if (!user) return <Navigate to="/cadastro" replace state={{ from: '/checkout' }} />
  // Carrinho vazio: nada para finalizar
  if (items.length === 0) return <Navigate to="/carrinho" replace />

  // Atualiza os campos; o CEP passa pela máscara (só números, máx. 8)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: name === 'cep' ? maskCep(value) : value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  // Confere os campos obrigatórios
  const validate = () => {
    const err = {}
    if (form.nome.trim().length < 3) err.nome = 'Conta pra gente seu nome completo.'
    if (!isEmail(form.email)) err.email = 'E-mail inválido.'
    if (!isCep(form.cep)) err.cep = 'O CEP deve ter exatamente 8 números.'
    if (!form.endereco.trim()) err.endereco = 'Informe o endereço.'
    if (!form.numero.trim()) err.numero = 'Informe o número.'
    return err
  }

  // Envio: se estiver tudo certo, gera um número de pedido e esvazia o carrinho
  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) {
      setOrderNumber(Math.floor(100000 + Math.random() * 900000))
      clearCart()
    }
  }

  // Monta um campo com label + mensagem de erro
  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={`input ${errors[name] ? 'input--error' : ''}`}
        value={form[name]}
        onChange={handleChange}
        {...props}
      />
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  )

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Último passo</span>
        <h1>Finalizar compra</h1>
        <p className="muted">
          Comprando como <strong>{user.nome}</strong>
          {user.tipo === 'funcionario' && ' (funcionário)'}. <Link to="/cadastro">Ver minha conta</Link>
        </p>
      </header>

      <form className="checkout" onSubmit={handleSubmit} noValidate>
        <div className="checkout__form">
          {/* ---- Dados do comprador ---- */}
          <h2>Seus dados</h2>
          {field('nome', 'Nome completo', { autoComplete: 'name' })}
          {field('email', 'E-mail', { type: 'email', autoComplete: 'email' })}

          {/* ---- Entrega (preenchida com o endereço do cadastro) ---- */}
          <h2>Entrega</h2>
          <div className="checkout__row">
            {/* maxLength 9 permite colar "00000-000"; a máscara maskCep deixa só 8 números */}
            {field('cep', 'CEP', { inputMode: 'numeric', maxLength: 9, placeholder: '8 dígitos, só números' })}
            {field('numero', 'Número')}
          </div>
          {field('endereco', 'Endereço', { autoComplete: 'street-address' })}
          {field('complemento', 'Complemento (opcional)')}

          {/* ---- Pagamento (radio escondido dentro de cards clicáveis) ---- */}
          <h2>Pagamento</h2>
          <div className="pay-options">
            {paymentOptions.map((opt) => (
              <label key={opt.id} className={`pay-option ${form.pagamento === opt.id ? 'pay-option--active' : ''}`}>
                <input
                  type="radio"
                  name="pagamento"
                  value={opt.id}
                  checked={form.pagamento === opt.id}
                  onChange={handleChange}
                />
                <strong>{opt.label}</strong>
                <span>{opt.hint}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ---- Resumo do pedido ---- */}
        <aside className="summary">
          <h2>Seu pedido</h2>
          <p className="muted">
            {count} {count === 1 ? 'item' : 'itens'} no carrinho
          </p>
          <ul className="checkout__list">
            {items.map((i) => (
              <li key={i.key}>
                <span>
                  {i.qty}× {i.name} <small className="muted">({i.size})</small>
                </span>
                <span>{formatPrice(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout__total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <button type="submit" className="btn btn--primary btn--block">
            Confirmar pedido
          </button>
          <Link to="/carrinho" className="summary__continue">
            Voltar ao carrinho
          </Link>
        </aside>
      </form>
    </div>
  )
}

export default Checkout
