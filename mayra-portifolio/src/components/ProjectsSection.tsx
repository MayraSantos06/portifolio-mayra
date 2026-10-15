
import { useState } from 'react'
import './ProjectsSection.css'

type Category = 'Todos' | 'Web' | 'Aplicações' | 'Acadêmicos'

type Project = {
  id: number
  title: string
  category: Exclude<Category, 'Todos'>
  description: string
  image: string
  technologies: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FiscalizaPlus',
    category: 'Web',
    description:
      'Plataforma de gestão cívica para registrar e acompanhar problemas urbanos, utilizando fotos e geolocalização.',
    image: '/images/fiscalizaplus.png',
    technologies: ['Desenvolvimento Web', 'Geolocalização'],
    link: 'https://fiscalizaplus.onrender.com/index.html',
  },
  {
    id: 2,
    title: 'Gestor de Pedidos',
    category: 'Acadêmicos',
    description:
      'Sistema para gerenciamento de pedidos de uma serralheria, com controle de status e organização das informações.',
    image: '/images/gestao-pedidos.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'Portfólio ML+',
    category: 'Web',
    description:
      'Portfólio pessoal com identidade visual inspirada em plataformas de streaming, desenvolvido com React e TypeScript.',
    image: '/images/portfolio.png',
    technologies: ['React', 'TypeScript', 'CSS'],
  },
]

const categories: Category[] = [
  'Todos',
  'Web',
  'Aplicações',
  'Acadêmicos',
]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>('Todos')

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === 'Todos' ||
      project.category === selectedCategory
  )

  return (
    <section className="section projects-section" id="projetos">
      <div className="section-heading">
        <p className="eyebrow">PRODUÇÕES ML+ ORIGINAL</p>

        <h2>
          Continue explorando<span>.</span>
        </h2>

        <p>
          Uma seleção de projetos que transformam ideias,
          desafios e aprendizados em soluções.
        </p>
      </div>

      <div className="projects-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category ? 'active' : ''
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-cover">
              <img
                src={project.image}
                alt={`Capa do projeto ${project.title}`}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />

              <span className="project-original">ML+ ORIGINAL</span>

              <div className="project-overlay">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <button
                  type="button"
                  className="project-details-button"
                  onClick={() => setSelectedProject(project)}
                >
                  ▶ Ver detalhes
                </button>
              </div>
            </div>

            <div className="project-card-footer">
              <span className="project-match">98% relevante</span>
              <span>{project.category}</span>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="projects-empty">
          Nenhum projeto cadastrado nesta categoria ainda.
        </p>
      )}

      {selectedProject && (
        <div
          className="projects-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="projects-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="projects-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Fechar detalhes"
            >
              ×
            </button>

            <div className="projects-modal-cover">
              <img
                src={selectedProject.image}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
            </div>

            <div className="projects-modal-content">
              <span className="project-original">
                ML+ ORIGINAL
              </span>

              <h3 id="projects-modal-title">
                {selectedProject.title}
              </h3>

              <p>{selectedProject.description}</p>

              <div className="projects-technologies">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {selectedProject.link && (
                <a
                  className="button button-primary"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar projeto ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
