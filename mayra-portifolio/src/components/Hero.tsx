
import './Hero.css'
import { useLanguage } from '../contexts/LanguageContext'

type HeroProps = {
  onOpenCurriculum: () => void
}

export default function Hero({ onOpenCurriculum }: HeroProps) {
  const { language } = useLanguage()

  const translations = {
    pt: {
      relevance: '100% relevante',
      portfolio: 'Portfólio · Início',
      description:
        'Sou estudante de Engenharia de Software e estou construindo minha trajetória na tecnologia. Este espaço reúne meus projetos, aprendizados e experiências no desenvolvimento de soluções.',
      projects: 'Conheça meus projetos',
      curriculum: 'Ver currículo',
    },
    en: {
      relevance: '100% relevant',
      portfolio: 'Portfolio · Home',
      description:
        'I am a Software Engineering student building my path in technology. This space brings together my projects, learning experiences, and journey in developing solutions.',
      projects: 'Explore my projects',
      curriculum: 'View resume',
    },
  }

  const t = translations[language]

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1>
          Mayra
          <br />
          <span>Luíza</span>
        </h1>

        <div className="hero-meta">
          <span className="hero-relevance">
            {t.relevance}
          </span>

          <span className="hero-year">2006</span>

          <span className="hero-rating">L</span>

          <span className="hero-seasons">
            {t.portfolio}
          </span>
        </div>

        <p className="hero-description">
          {t.description}
        </p>

        <div className="hero-buttons">
          <a
            className="button button-primary"
            href="#projetos"
          >
            <span aria-hidden="true">▶</span>
            {t.projects}
          </a>

          <button
            type="button"
            className="button button-secondary"
            onClick={onOpenCurriculum}
          >
            {t.curriculum}
          </button>
        </div>
      </div>
    </section>
  )
}
