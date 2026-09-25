// =========================================================
// Register — página de cadastro (/cadastro)
// ---------------------------------------------------------
// Dois tipos de cadastro: CLIENTE ou FUNCIONÁRIO.
//  - Ambos: nome, e-mail, CPF, telefone, endereço completo e senha.
//  - Funcionário: também matrícula (exatamente 8 caracteres) e cargo.
// Se o usuário já estiver cadastrado, a página vira "Minha conta".
// Quem chega aqui vindo do checkout volta para lá depois de cadastrar.
// =========================================================
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import { useUser } from '../../context/UserContext.jsx'
import { useCart } from '../../context/CartContext.jsx'
import {
  maskCep,
  maskCpf,
  maskPhone,
  maskMatricula,
  isEmail,
  isCep,
  isCpf,
  isPhone,
  isMatricula,
  fetchAddressByCep,
  UFS,
} from '../../utils/validators.js'
import './Register.css'

// Valores iniciais do formulário (tudo vazio)
const initialForm = {
  tipo: 'cliente', // 'cliente' | 'funcionario'
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  matricula: '',
  cargo: 'Atendimento',
  cep: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: '',
  senha: '',
  confirmarSenha: '',
  termos: false,
}

// Cargos disponíveis para funcionários
const cargos = ['Atendimento', 'Vendas', 'Estoque', 'Marketing', 'Administrativo']

// Verifica cada campo e devolve um objeto { campo: 'mensagem de erro' }
function validate(form) {
  const err = {}
  if (form.nome.trim().split(' ').length < 2) err.nome = 'Informe nome e sobrenome.'
  if (!isEmail(form.email)) err.email = 'E-mail inválido.'
  if (!isCpf(form.cpf)) err.cpf = 'CPF inválido. Confira os números.'
  if (!isPhone(form.telefone)) err.telefone = 'Telefone com DDD, ex.: (81) 99999-9999.'
  if (form.tipo === 'funcionario' && !isMatricula(form.matricula)) {
    err.matricula = 'A matrícula deve ter exatamente 8 caracteres (letras e números).'
  }
  if (!isCep(form.cep)) err.cep = 'CEP deve ter 8 números.'
  if (!form.endereco.trim()) err.endereco = 'Informe a rua.'
  if (!form.numero.trim()) err.numero = 'Informe o número.'
  if (!form.bairro.trim()) err.bairro = 'Informe o bairro.'
  if (!form.cidade.trim()) err.cidade = 'Informe a cidade.'
  if (!form.uf) err.uf = 'Escolha o estado.'
  if (form.senha.length < 6) err.senha = 'Mínimo de 6 caracteres.'
  if (form.confirmarSenha !== form.senha) err.confirmarSenha = 'As senhas não conferem.'
  if (!form.termos) err.termos = 'Você precisa aceitar os termos.'
  return err
}

function Register() {
  const { user, register, logout } = useUser()
  const { count, showToast } = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  // Página de onde o usuário veio (ex.: '/checkout'), enviada pelo <Navigate state>
  const from = location.state?.from

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [cepStatus, setCepStatus] = useState(null) // null | 'loading' | 'ok' | 'notfound'

  // ---------- Já cadastrado: mostra "Minha conta" ----------
  if (user) {
    return (
      <div className="container">
        <header className="page-head">
          <span className="eyebrow">{user.tipo === 'funcionario' ? 'Conta de funcionário' : 'Conta de cliente'}</span>
          <h1>Olá, {user.nome.split(' ')[0]}!</h1>
          <p className="muted">Seu cadastro está feito. Agora é só aproveitar.</p>
        </header>

        <div className="account">
          <div className="account__card">
            <h2>Seus dados</h2>
            <dl className="account__data">
              <div><dt>Nome</dt><dd>{user.nome}</dd></div>
              <div><dt>E-mail</dt><dd>{user.email}</dd></div>
              <div><dt>CPF</dt><dd>{user.cpf}</dd></div>
              <div><dt>Telefone</dt><dd>{user.telefone}</dd></div>
              {user.tipo === 'funcionario' && (
                <>
                  <div><dt>Matrícula</dt><dd>{user.matricula}</dd></div>
                  <div><dt>Cargo</dt><dd>{user.cargo}</dd></div>
                </>
              )}
              <div className="account__full">
                <dt>Endereço</dt>
                <dd>
                  {user.endereco}, {user.numero}
                  {user.complemento && ` — ${user.complemento}`} · {user.bairro} · {user.cidade}/{user.uf} · CEP{' '}
                  {user.cep}
                </dd>
              </div>
            </dl>
          </div>

          <aside className="account__actions">
            {/* Se tem itens no carrinho, oferece ir direto para o checkout */}
            {count > 0 && (
              <Link to="/checkout" className="btn btn--primary btn--block">
                Finalizar minha compra
              </Link>
            )}
            <Link to="/loja" className="btn btn--accent btn--block">
              Continuar comprando
            </Link>
            <button type="button" className="btn btn--ghost btn--block" onClick={logout}>
              Sair da conta
            </button>
          </aside>
        </div>
      </div>
    )
  }

  // ---------- Handlers do formulário ----------

  // Atualiza um campo aplicando a máscara certa e limpa o erro dele
  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') return setField(name, checked)
    if (name === 'cpf') return setField(name, maskCpf(value))
    if (name === 'telefone') return setField(name, maskPhone(value))
    if (name === 'matricula') return setField(name, maskMatricula(value))
    setField(name, value)
  }

  // CEP: só números, máx. 8. Ao completar 8 dígitos, busca o endereço (ViaCEP)
  const handleCep = async (e) => {
    const cep = maskCep(e.target.value)
    setField('cep', cep)
    if (cep.length !== 8) return setCepStatus(null)

    setCepStatus('loading')
    const address = await fetchAddressByCep(cep)
    if (address) {
      setForm((f) => ({ ...f, ...address }))
      setErrors((err) => ({ ...err, endereco: undefined, bairro: undefined, cidade: undefined, uf: undefined }))
      setCepStatus('ok')
    } else {
      setCepStatus('notfound')
    }
  }

  // Envio: valida, salva o usuário e redireciona
  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate(form)
    setErrors(err)

    // Se houver erro, rola até o primeiro campo com problema
    const firstError = Object.keys(err)[0]
    if (firstError) {
      document.getElementsByName(firstError)[0]?.focus()
      return
    }

    // Funcionário não precisa guardar matrícula vazia e vice-versa
    const data = { ...form }
    if (data.tipo === 'cliente') {
      delete data.matricula
      delete data.cargo
    }
    register(data)
    showToast(`Cadastro feito! Bem-vindo, ${form.nome.split(' ')[0]}.`)

    // Veio do checkout? Volta pra lá. Senão, a página vira "Minha conta".
    if (from) navigate(from, { replace: true })
  }

  // Monta um campo de texto com label e mensagem de erro
  const field = (name, label, props = {}) => (
    <div className={`field ${props.wrapperClass ?? ''}`}>
      <label htmlFor={`reg-${name}`}>{label}</label>
      <input
        id={`reg-${name}`}
        name={name}
        className={`input ${errors[name] ? 'input--error' : ''}`}
        value={form[name]}
        onChange={props.onChange ?? handleChange}
        aria-invalid={Boolean(errors[name])}
        {...props.input}
      />
      {props.hint && !errors[name] && <span className="field-hint">{props.hint}</span>}
      {errors[name] && <span className="field-error">{errors[name]}</span>}
    </div>
  )

  const isStaff = form.tipo === 'funcionario'

  return (
    <div className="container">
      <header className="page-head">
        <span className="eyebrow">Cadastro</span>
        <h1>Entra pra turma</h1>
        <p className="muted">Escolha o tipo de cadastro e preencha seus dados.</p>
      </header>

      {/* Aviso quando o usuário foi mandado pra cá pelo checkout */}
      {from === '/checkout' && (
        <p className="register__notice" role="alert">
          Para finalizar a compra, você precisa ter cadastro. Leva 1 minutinho!
        </p>
      )}

      <div className="register">
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          {/* ---- Tipo de cadastro: Cliente OU Funcionário ---- */}
          <fieldset className="register__types">
            <legend className="sr-only">Tipo de cadastro</legend>
            {[
              { id: 'cliente', title: 'Sou cliente', text: 'Quero comprar e acompanhar meus pedidos.' },
              { id: 'funcionario', title: 'Sou funcionário', text: 'Faço parte da equipe MM MODAS.' },
            ].map((opt) => (
              <label key={opt.id} className={`type-option ${form.tipo === opt.id ? 'type-option--active' : ''}`}>
                <input
                  type="radio"
                  name="tipo"
                  value={opt.id}
                  checked={form.tipo === opt.id}
                  onChange={handleChange}
                />
                <strong>{opt.title}</strong>
                <span>{opt.text}</span>
              </label>
            ))}
          </fieldset>

          {/* ---- Dados pessoais ---- */}
          <h2>Dados pessoais</h2>
          {field('nome', 'Nome completo', { input: { autoComplete: 'name' } })}
          <div className="register__row">
            {field('email', 'E-mail', { input: { type: 'email', autoComplete: 'email' } })}
            {field('telefone', 'Telefone', { input: { inputMode: 'numeric', placeholder: '(81) 99999-9999' } })}
          </div>
          {field('cpf', 'CPF', { input: { inputMode: 'numeric', placeholder: '000.000.000-00', maxLength: 14 } })}

          {/* ---- Só para funcionários ---- */}
          {isStaff && (
            <div className="register__staff">
              <h2>Dados de funcionário</h2>
              <div className="register__row">
                {field('matricula', 'Matrícula', {
                  input: { maxLength: 8, placeholder: 'Ex.: MM2026A1' },
                  hint: `${form.matricula.length}/8 caracteres`,
                })}
                <div className="field">
                  <label htmlFor="reg-cargo">Cargo</label>
                  <select id="reg-cargo" name="cargo" className="input" value={form.cargo} onChange={handleChange}>
                    {cargos.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ---- Endereço ---- */}
          <h2>Endereço</h2>
          <div className="register__row register__row--cep">
            {field('cep', 'CEP', {
              onChange: handleCep,
              // maxLength 9 permite colar "00000-000"; a máscara deixa só 8 números
              input: { inputMode: 'numeric', maxLength: 9, placeholder: 'Só números (8 dígitos)' },
              hint:
                cepStatus === 'loading'
                  ? 'Buscando endereço…'
                  : cepStatus === 'ok'
                    ? 'Endereço encontrado!'
                    : cepStatus === 'notfound'
                      ? 'CEP não encontrado — preencha manualmente.'
                      : 'Preenchemos o endereço pra você.',
            })}
            {field('numero', 'Número')}
          </div>
          {field('endereco', 'Rua / Avenida', { input: { autoComplete: 'address-line1' } })}
          <div className="register__row">
            {field('complemento', 'Complemento (opcional)')}
            {field('bairro', 'Bairro')}
          </div>
          <div className="register__row register__row--city">
            {field('cidade', 'Cidade')}
            <div className="field">
              <label htmlFor="reg-uf">UF</label>
              <select
                id="reg-uf"
                name="uf"
                className={`input ${errors.uf ? 'input--error' : ''}`}
                value={form.uf}
                onChange={handleChange}
              >
                <option value="">--</option>
                {UFS.map((uf) => (
                  <option key={uf}>{uf}</option>
                ))}
              </select>
              {errors.uf && <span className="field-error">{errors.uf}</span>}
            </div>
          </div>

          {/* ---- Senha ---- */}
          <h2>Senha</h2>
          <div className="register__row">
            {field('senha', 'Senha', { input: { type: 'password', autoComplete: 'new-password' } })}
            {field('confirmarSenha', 'Confirmar senha', { input: { type: 'password', autoComplete: 'new-password' } })}
          </div>

          {/* ---- Termos ---- */}
          <label className="register__terms">
            <input type="checkbox" name="termos" checked={form.termos} onChange={handleChange} />
            Li e aceito os termos de uso e a política de privacidade.
          </label>
          {errors.termos && <p className="field-error">{errors.termos}</p>}

          <button type="submit" className="btn btn--primary btn--block register__submit">
            {isStaff ? 'Cadastrar funcionário' : 'Criar minha conta'}
          </button>
        </form>

        {/* ---- Lateral com vantagens ---- */}
        <aside className="register__side">
          <Mascot size={120} title="" />
          <h2>{isStaff ? 'Bem-vindo à equipe!' : 'Por que se cadastrar?'}</h2>
          {isStaff ? (
            <ul>
              <li>Acesso com sua matrícula</li>
              <li>Desconto de colaborador nas compras</li>
              <li>Acompanhe os pedidos da loja</li>
            </ul>
          ) : (
            <ul>
              <li>Finalize compras em segundos</li>
              <li>Endereço salvo pra próxima</li>
              <li>Cupom MENINOMAU10 na primeira compra</li>
            </ul>
          )}
        </aside>
      </div>
    </div>
  )
}

export default Register
