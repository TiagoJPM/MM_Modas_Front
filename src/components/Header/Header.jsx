// =========================================================
// Header — barra de aviso + cabeçalho fixo do site
// ---------------------------------------------------------
// Contém: logo, menu de navegação, botão de cadastro/conta
// e o ícone do carrinho com a quantidade de itens.
// No celular, o menu vira um painel aberto pelo botão hambúrguer.
// =========================================================
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { BagIcon, MenuIcon, CloseIcon, UserIcon } from '../Icons.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { useUser } from '../../context/UserContext.jsx'
import './Header.css'

// Links do menu principal (end: true = só fica ativo na rota exata "/")
const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/loja', label: 'Loja' },
  { to: '/sobre', label: 'Nossa história' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  const [open, setOpen] = useState(false) // menu mobile aberto?
  const [scrolled, setScrolled] = useState(false) // página rolada? (muda a borda)
  const { count } = useCart()
  const { user } = useUser()

  // Escuta a rolagem da página para mostrar a borda/sombra do header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll) // limpeza ao desmontar
  }, [])

  // Fecha o menu mobile ao clicar em qualquer link
  const close = () => setOpen(false)

  // Primeiro nome do usuário para a saudação
  const firstName = user?.nome?.split(' ')[0]

  return (
    <>
      {/* Faixa de aviso no topo */}
      <div className="announcement">
        <p>
          Frete grátis acima de R$ 299 · Primeira compra? Use <strong>MENINOMAU10</strong>
        </p>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          {/* Logo (volta para a Home) */}
          <Link to="/" className="header__logo" onClick={close} aria-label="MM MODAS — página inicial">
            <Logo size={44} />
          </Link>

          {/* Menu principal — NavLink recebe isActive para destacar a página atual */}
          <nav className={`header__nav ${open ? 'header__nav--open' : ''}`} aria-label="Principal">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={close}
                className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            {/* Botão de cadastro: vira "Olá, Nome" depois de cadastrado */}
            <NavLink
              to="/cadastro"
              onClick={close}
              className={({ isActive }) => `header__account ${isActive ? 'header__account--active' : ''}`}
              aria-label={user ? `Minha conta (${firstName})` : 'Cadastrar'}
            >
              <UserIcon size={20} />
              <span className="header__account-label">{user ? `Olá, ${firstName}` : 'Cadastrar'}</span>
              {user?.tipo === 'funcionario' && <span className="header__staff">equipe</span>}
            </NavLink>

            {/* Carrinho com contador de itens */}
            <Link to="/carrinho" className="header__cart" onClick={close} aria-label={`Carrinho com ${count} itens`}>
              <BagIcon />
              {count > 0 && <span className="header__badge">{count}</span>}
            </Link>

            {/* Botão hambúrguer (só aparece no celular, via CSS) */}
            <button
              type="button"
              className="header__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
