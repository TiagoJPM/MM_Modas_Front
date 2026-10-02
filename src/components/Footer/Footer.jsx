// =========================================================
// Footer — rodapé do site
// ---------------------------------------------------------
// Colunas: marca + redes sociais | categorias da loja |
// links institucionais | Ajuda (links para as perguntas
// frequentes da página de Contato).
// =========================================================
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo.jsx'
import { InstagramIcon, TiktokIcon, WhatsIcon } from '../Icons.jsx'
import { categories } from '../../data/products.js'
import { faq } from '../../data/faq.js'
import './Footer.css'

function Footer() {
  // Ano atual para o copyright (atualiza sozinho)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Coluna 1: marca */}
        <div className="footer__brand">
          <Logo size={52} light />
          <p>
            Roupa com personalidade pra quem não cabe em rótulo. Feito com carinho (e um pouquinho de
            malícia).
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="TikTok"><TiktokIcon /></a>
            <a href="#" aria-label="WhatsApp"><WhatsIcon /></a>
          </div>
        </div>

        {/* Coluna 2: categorias (gerada a partir de data/products.js) */}
        <div>
          <h4>Loja</h4>
          <ul>
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/loja?categoria=${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: institucional */}
        <div>
          <h4>MM</h4>
          <ul>
            <li><Link to="/sobre">Nossa história</Link></li>
            <li><Link to="/contato">Fale com a gente</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
            <li><Link to="/carrinho">Meu carrinho</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Ajuda — cada link leva a uma pergunta do FAQ (/contato#faq-id) */}
        <div>
          <h4>Ajuda</h4>
          <ul>
            <li>
              <Link to="/contato#faq">Perguntas frequentes</Link>
            </li>
            {faq.map((item) => (
              <li key={item.id}>
                <Link to={`/contato#faq-${item.id}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Linha final com copyright */}
      <div className="footer__bottom">
        <div className="container">
          <p>© {year} MM GAMES · Projeto acadêmico · Menino Mau aprova.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
