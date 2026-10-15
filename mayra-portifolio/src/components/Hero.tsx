import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>Mayra<br /><span>Luíza</span></h1>
        <p className="hero-category">100% relevante</p>
        <p className="hero-description">
          Sou estudante de Engenharia de Software e estou construindo minha trajetória na tecnologia.
          Este espaço reúne meus projetos, aprendizados e experiências no desenvolvimento de soluções.
        </p>
        <div className="hero-buttons">
          <a className="button button-primary" href="#projetos"><span aria-hidden="true">▶</span> Conheça meus projetos</a>
          <a className="button button-secondary" href="#contato">Entre em contato</a>
        </div>
      </div>
    </section>
  )
}
