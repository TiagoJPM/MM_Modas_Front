// =========================================================
// About — "Nossa história" (/sobre)
// ---------------------------------------------------------
// Seções:
//  1. Abertura com o mascote
//  2. Como tudo começou — a história da loja em 3 pilares
//  3. No que a gente acredita — valores da marca
//  4. Chamada para a loja
// =========================================================
import { Link } from 'react-router-dom'
import Mascot from '../../components/Logo/Mascot.jsx'
import './About.css'

// A história da MM Modas contada em 3 pilares
const story = [
  {
    title: 'A conversa',
    text: 'Nossa loja nasceu de uma conversa entre amigos na faculdade. Entre uma aula e outra, a ideia de criar algo nosso começou a tomar forma.',
  },
  {
    title: 'A criatividade',
    text: 'Foi quando Daniel revelou que sempre teve vontade de exercer sua criatividade com jogos: expressar seus sentimentos com atitude, em jogos divertidos.',
  },
  {
    title: 'O empreendedorismo',
    text: 'Essa vontade se juntou com o ímpeto empreendedor dos demais amigos — e assim nasceu a MM GAMES.',
  },
]

// Valores da marca
const values = [
  { title: 'Sem filtro', text: 'A gente fala do jeito que é. Preço justo, informação clara e zero enrolação.' },
  { title: 'Feito com calma', text: 'Tiragens pequenas, fornecedores locais e cuidado em cada costura.' },
  { title: 'Conforto primeiro', text: 'Modelagens pensadas pra corpos reais e tecidos que dá vontade de não tirar mais.' },
]

function About() {
  return (
    <div className="about">
      {/* ---------- 1. Abertura ---------- */}
      <section className="container about__hero">
        <div>
          <span className="eyebrow">Nossa história</span>
          <h1>
            Todo mundo tem um lado <span className="about__accent">Menino Mau</span>.
          </h1>
          <p className="about__lead">
            A gente só resolveu vestir o nosso. A MM MODAS é uma marca feita por amigos, pra quem quer se
            expressar pela roupa com criatividade, conforto e atitude.
          </p>
        </div>
        <div className="about__portrait" aria-hidden="true">
          <Mascot size={260} title="" />
          <span className="about__caption">o Menino Mau, em versão desenho</span>
        </div>
      </section>

      {/* ---------- 2. Como tudo começou (3 pilares) ---------- */}
      <section className="container section">
        <h2 className="section-title">Como tudo começou</h2>
        <ol className="timeline">
          {story.map((item, i) => (
            <li key={item.title} className="timeline__item">
              <span className="timeline__dot">{i + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- 3. Valores ---------- */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">No que a gente acredita</h2>
          <div className="values__grid">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. Chamada final ---------- */}
      <section className="container about__cta">
        <h2>Pronto pra mostrar o seu lado Menino Mau?</h2>
        <Link to="/loja" className="btn btn--primary">
          Ver a coleção
        </Link>
      </section>
    </div>
  )
}

export default About
