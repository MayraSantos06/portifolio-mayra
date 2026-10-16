
import { useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './ExperiencesSection.css'

type LocalizedText = {
  pt: string
  en: string
}

type Experience = {
  id: number
  scene: number
  period: LocalizedText
  title: LocalizedText
  category: LocalizedText
  description: LocalizedText
}

const experiences: Experience[] = [
  {
    id: 1,
    scene: 1,
    period: {
      pt: 'Formação técnica',
      en: 'Technical education',
    },
    title: {
      pt: 'Técnico em Edificações',
      en: 'Building Construction Technician',
    },
    category: {
      pt: 'FORMAÇÃO',
      en: 'EDUCATION',
    },
    description: {
      pt: 'Formação técnica em Edificações no CEFET-MG, que contribuiu para o desenvolvimento de conhecimentos técnicos e profissionais.',
      en: 'Technical education in building construction at CEFET-MG, contributing to the development of technical knowledge and professional skills.',
    },
  },
  {
    id: 2,
    scene: 2,
    period: {
      pt: 'Estágio técnico',
      en: 'Technical internship',
    },
    title: {
      pt: 'Estágio em Edificações',
      en: 'Building Construction Internship',
    },
    category: {
      pt: 'EXPERIÊNCIA PROFISSIONAL',
      en: 'PROFESSIONAL EXPERIENCE',
    },
    description: {
      pt: 'Experiência prática na área de edificações, proporcionando contato com o ambiente profissional e aplicação dos conhecimentos da formação técnica.',
      en: 'Hands-on experience in building construction, providing exposure to a professional environment and opportunities to apply knowledge gained during technical education.',
    },
  },
  {
    id: 3,
    scene: 3,
    period: {
      pt: 'Em andamento',
      en: 'In progress',
    },
    title: {
      pt: 'Engenharia de Software',
      en: 'Software Engineering',
    },
    category: {
      pt: 'GRADUAÇÃO',
      en: 'UNDERGRADUATE STUDIES',
    },
    description: {
      pt: 'Graduação em Engenharia de Software, com desenvolvimento de conhecimentos em programação, análise de requisitos e desenvolvimento de sistemas.',
      en: 'Currently pursuing a degree in Software Engineering, developing skills in programming, requirements analysis, and software development.',
    },
  },
  {
    id: 4,
    scene: 4,
    period: {
      pt: 'Experiência em tecnologia',
      en: 'Technology experience',
    },
    title: {
      pt: 'WebTech Network',
      en: 'WebTech Network',
    },
    category: {
      pt: 'EXPERIÊNCIA ACADÊMICA / PROFISSIONAL',
      en: 'ACADEMIC / PROFESSIONAL EXPERIENCE',
    },
    description: {
      pt: 'Participação em atividades relacionadas à tecnologia e ao desenvolvimento de soluções digitais, ampliando conhecimentos e experiências na área.',
      en: 'Participation in technology-related activities and digital solution development, expanding knowledge and practical experience in the field.',
    },
  },
]

const translations = {
  pt: {
    title: 'Cenas da minha trajetória',
    subtitle:
      'Minha formação e experiências acadêmicas e profissionais.',
    previous: 'Ver experiências anteriores',
    next: 'Ver próximas experiências',
    scene: 'CENA',
    hint: '← Deslize para explorar minha trajetória →',
  },
  en: {
    title: 'Scenes from my journey',
    subtitle:
      'My education, academic background, and professional experience.',
    previous: 'View previous experiences',
    next: 'View next experiences',
    scene: 'SCENE',
    hint: '← Swipe to explore my journey →',
  },
}

export default function ExperiencesSection() {
  const filmRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  function scrollFilm(direction: number) {
    const film = filmRef.current

    if (!film) return

    const card = film.querySelector<HTMLElement>('.film-frame')
    const distance = card ? card.offsetWidth + 18 : 320

    film.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    })
  }

  return (
    <section
      className="section experiences-section"
      id="experiencias"
    >
      {/* CABEÇALHO */}

      <div className="section-heading">
        <h2>
          {t.title}<span>.</span>
        </h2>

        <p>{t.subtitle}</p>
      </div>

      {/* CONTROLES */}

      <div className="film-toolbar">
        <div className="film-controls">
          <button
            type="button"
            onClick={() => scrollFilm(-1)}
            aria-label={t.previous}
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollFilm(1)}
            aria-label={t.next}
          >
            →
          </button>
        </div>
      </div>

      {/* PELÍCULA */}

      <div className="film-strip">
        <div
          className="film-perforations"
          aria-hidden="true"
        />

        <div className="film-track" ref={filmRef}>
          {experiences.map((experience) => (
            <article
              className="film-frame"
              key={experience.id}
            >
              <div className="film-scene-content">

                <div className="film-scene-top">
                  <span className="film-scene-number">
                    {t.scene}{' '}
                    {String(experience.scene).padStart(2, '0')}
                  </span>

                  <span className="film-scene-period">
                    {experience.period[language]}
                  </span>
                </div>

                <div className="film-scene-main">
                  <span className="film-scene-category">
                    {experience.category[language]}
                  </span>

                  <h3>
                    {experience.title[language]}
                  </h3>

                  <div className="film-scene-line" />

                  <p>
                    {experience.description[language]}
                  </p>
                </div>

                <div className="film-scene-bottom">
                  
                  <span>
                    {String(experience.scene).padStart(2, '0')}
                    {' / '}
                    {String(experiences.length).padStart(2, '0')}
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

        <div
          className="film-perforations"
          aria-hidden="true"
        />
      </div>

      <p className="film-hint">{t.hint}</p>
    </section>
  )
}
