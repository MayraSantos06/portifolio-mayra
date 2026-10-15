
import { useRef } from 'react'
import './ExperiencesSection.css'

const experiences = [

  {
    id: 1,
    scene: 'CENA 01',
    year: 'Formação técnica',
    title: 'Técnico em Edificações',
    category: 'FORMAÇÃO',
    description:
      'Formação técnica voltada à área de edificações, que contribuiu para o desenvolvimento de conhecimentos técnicos e profissionais.',
    image: '/images/tecnico-edificacoes.png',
  },
  {
    id: 2,
    scene: 'CENA 02',
    year: 'Estágio técnico',
    title: 'Estágio em Edificações',
    category: 'EXPERIÊNCIA PROFISSIONAL',
    description:
      'Experiência prática na área de edificações, proporcionando contato com o ambiente profissional e aplicação dos conhecimentos da formação técnica.',
    image: '/images/estagio-edificacoes.png',
  },
  {
    id: 3,
    scene: 'CENA 03',
    year: 'Em andamento',
    title: 'Engenharia de Software',
    category: 'GRADUAÇÃO',
    description:
      'Graduação em Engenharia de Software, com desenvolvimento de conhecimentos em programação, análise de requisitos e desenvolvimento de sistemas.',
    image: '/images/engenharia-software.png',
  },
  {
    id: 4,
    scene: 'CENA 04',
    year: 'Experiência em tecnologia',
    title: 'WebTech Network',
    category: 'EXPERIÊNCIA ACADÊMICA / PROFISSIONAL',
    description:
      'Participação em atividades relacionadas à tecnologia e ao desenvolvimento de soluções digitais, ampliando conhecimentos e experiências na área.',
    image: '/images/webtech.png',
  },
]


export default function ExperiencesSection() {
  const filmRef = useRef<HTMLDivElement>(null)

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
      <div className="section-heading">
        <p className="eyebrow">ML+ ORIGINAL · MINHA HISTÓRIA</p>

        <h2>
          Cenas da minha trajetória<span>.</span>
        </h2>

        <p>
          Cada cena representa uma experiência que contribuiu
          para minha evolução na tecnologia.
        </p>
      </div>

      <div className="film-toolbar">
        <span>UMA HISTÓRIA EM CONSTRUÇÃO</span>

        <div className="film-controls">
          <button
            type="button"
            onClick={() => scrollFilm(-1)}
            aria-label="Ver experiências anteriores"
          >
            &#8592;
          </button>

          <button
            type="button"
            onClick={() => scrollFilm(1)}
            aria-label="Ver próximas experiências"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="film-strip">
        <div className="film-perforations" aria-hidden="true" />

        <div className="film-track" ref={filmRef}>
          {experiences.map((experience) => (
            <article className="film-frame" key={experience.id}>
              <div className="film-image">
                <img
                  src={experience.image}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />

                <span className="film-scene">
                  {experience.scene}
                </span>
              </div>

              <div className="film-info">
                <div className="film-meta">
                  <span>{experience.category}</span>
                  <span>{experience.year}</span>
                </div>

                <h3>{experience.title}</h3>

                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="film-perforations" aria-hidden="true" />
      </div>

      <p className="film-hint">
        ← Deslize para explorar minha trajetória →
      </p>
    </section>
  )
}
