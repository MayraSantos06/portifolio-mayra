
import './Hero.css'

type HeroProps = {
  onOpenCurriculum: () => void
}

export default function Hero({ onOpenCurriculum }: HeroProps) {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>
          Mayra
          <br />
          <span>Luíza</span>
        </h1>

        <div className="hero-meta">
          <span className="hero-relevance">100% relevante</span>

          <span className="hero-year">2026</span>

          <span className="hero-rating">19</span>

          <span className="hero-seasons">
            Portfólio · Ínicio
          </span>
        </div>

        <p className="hero-description">
          Sou estudante de Engenharia de Software e estou
          construindo minha trajetória na tecnologia.
          Este espaço reúne meus projetos, aprendizados
          e experiências no desenvolvimento de soluções.
        </p>

        <div className="hero-buttons">
          <a
            className="button button-primary"
            href="#projetos"
          >
            <span aria-hidden="true">▶</span>
            Conheça meus projetos
          </a>

          <button
            type="button"
            className="button button-secondary"
            onClick={onOpenCurriculum}
          >
            Ver currículo
          </button>
        </div>
      </div>
    </section>
  )
}
