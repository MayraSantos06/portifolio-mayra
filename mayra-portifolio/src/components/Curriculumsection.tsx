import './CurriculumSection.css'

export default function CurriculumSection() {
  return (
    <section className="section curriculum-section" id="curriculo">
      <div className="section-heading">
        <p className="eyebrow">CURRÍCULO</p>
        <h2>Minha trajetória em um só lugar<span>.</span></h2>
        <p>Conheça minha formação, minhas habilidades e meu percurso acadêmico e profissional.</p>
      </div>
      <div className="curriculum-content">
        <div>
          <span className="curriculum-label">PERFIL PROFISSIONAL</span>
          <h3>Em constante evolução.</h3>
          <p>Estou desenvolvendo minhas habilidades técnicas e buscando oportunidades para aprender, colaborar e criar soluções.</p>
        </div>
        <a className="button button-primary" href="#contato">Entrar em contato</a>
      </div>
    </section>
  )
}
