// =========================================================
// Contact — página de contato (/contato)
// ---------------------------------------------------------
// - Formulário de contato com validação.
// - Canais alternativos (WhatsApp, Instagram).
// - Perguntas frequentes (FAQ). Os links "Ajuda" do rodapé
//   apontam para cá com uma âncora, ex.: /contato#faq-trocas.
//   A pergunta correspondente abre sozinha e fica destacada.
// =========================================================
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import { InstagramIcon, WhatsIcon } from '../../components/Icons.jsx'
import { faq } from '../../data/faq.js'
import { isEmail } from '../../utils/validators.js'
import './Contact.css'

// Opções do campo "Assunto"
const subjects = ['Dúvida sobre produto', 'Meu pedido', 'Trocas e devoluções', 'Parcerias', 'Outro assunto']

const emptyForm = { nome: '', email: '', assunto: subjects[0], mensagem: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  // Âncora da URL: "#faq-trocas" -> "trocas" (qual pergunta abrir)
  const { hash } = useLocation()
  const targetFaq = hash.startsWith('#faq-') ? hash.replace('#faq-', '') : null

  // Atualiza o campo digitado e limpa o erro dele
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  // Valida e "envia" (projeto sem back-end: só mostra a confirmação)
  const handleSubmit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.nome.trim()) err.nome = 'Como a gente te chama?'
    if (!isEmail(form.email)) err.email = 'Coloca um e-mail válido.'
    if (form.mensagem.trim().length < 10) err.mensagem = 'Escreve um pouquinho mais (mín. 10 caracteres).'
    setErrors(err)
    if (Object.keys(err).length === 0) setSent(true)
  }

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Fale com a gente</span>
        <h1>Bora conversar?</h1>
        <p className="muted">A gente responde rapidinho — e sem robô chato.</p>
      </header>

      <div className="contact">
        {/* ---------- Formulário ---------- */}
        <div className="contact__card">
          {sent ? (
            // Mensagem de sucesso depois do envio
            <div className="contact__sent">
              <Mascot size={110} title="" />
              <h2>Mensagem enviada!</h2>
              <p className="muted">
                Valeu, {form.nome.split(' ')[0]}. Logo a gente te responde no {form.email}.
              </p>
              <button
                type="button"
                className="btn btn--accent"
                onClick={() => {
                  setSent(false)
                  setForm(emptyForm)
                }}
              >
                Enviar outra
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    name="nome"
                    className={`input ${errors.nome ? 'input--error' : ''}`}
                    value={form.nome}
                    onChange={handleChange}
                  />
                  {errors.nome && <span className="field-error">{errors.nome}</span>}
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`input ${errors.email ? 'input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="assunto">Assunto</label>
                <select id="assunto" name="assunto" className="input" value={form.assunto} onChange={handleChange}>
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="5"
                  className={`input ${errors.mensagem ? 'input--error' : ''}`}
                  value={form.mensagem}
                  onChange={handleChange}
                />
                {errors.mensagem && <span className="field-error">{errors.mensagem}</span>}
              </div>

              <button type="submit" className="btn btn--primary">
                Enviar mensagem
              </button>
            </form>
          )}
        </div>

        {/* ---------- Lateral: canais + FAQ ---------- */}
        <aside className="contact__side">
          <div className="contact__channels">
            <h2>Outros canais</h2>
            <a href="#" className="channel">
              <WhatsIcon /> <span>WhatsApp<small>(81) 90000-0000</small></span>
            </a>
            <a href="#" className="channel">
              <InstagramIcon /> <span>Instagram<small>@mm.modas</small></span>
            </a>
          </div>

          {/* id="faq" é o destino do link "Perguntas frequentes" do rodapé */}
          <div className="faq" id="faq">
            <h2>Perguntas frequentes</h2>
            {faq.map((item) => (
              // <details> abre/fecha sozinho. A key muda com a âncora para
              // reabrir a pergunta certa quando o usuário clica em outro link do rodapé.
              <details
                key={`${item.id}-${hash}`}
                id={`faq-${item.id}`}
                className={`faq__item ${targetFaq === item.id ? 'faq__item--target' : ''}`}
                open={targetFaq === item.id}
              >
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Contact
