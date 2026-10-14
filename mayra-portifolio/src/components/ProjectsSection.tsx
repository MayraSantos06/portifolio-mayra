import { useState } from 'react'
import { projects } from '../data/projetos'

const categories = ['Todos', 'Web', 'Aplicações', 'Acadêmicos'] as const

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>('Todos')

  const filteredProjects = projects.filter((project) =>
    selectedCategory === 'Todos' ||
    project.category === selectedCategory
  )

  return (
    <section id="projetos">
      <h2>Continue explorando.</h2>

      <div className="project-filters">
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

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <img src={project.image} alt="" />
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology} </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver no GitHub ↗
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Acessar aplicação ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
