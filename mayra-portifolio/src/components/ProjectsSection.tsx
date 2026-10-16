
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './ProjectsSection.css'

type Category = 'Web' | 'Aplicações' | 'Acadêmicos'
type Language = 'pt' | 'en'

type LocalizedText = {
  pt: string
  en: string
}

type Project = {
  id: number
  title: LocalizedText
  category: Category
  description: LocalizedText
  image: string
  technologies: LocalizedText[]
  link?: string
}

// ======================================
// CAMINHO DAS IMAGENS
// ======================================

const getImageUrl = (image: string) => {
  return `${import.meta.env.BASE_URL}${image.replace(/^\/+/, '')}`
}

// ======================================
// LISTA DE PROJETOS
// ======================================

const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: 'Cobrinha.zip',
      en: 'Snake Game',
    },
    category: 'Acadêmicos',
    description: {
      pt: 'Jogo clássico da cobrinha desenvolvido em Python com Pygame.',
      en: 'A classic Snake game developed in Python using Pygame.',
    },
    image: '/images/cobrinha.png',
    technologies: [
      { pt: 'Python', en: 'Python' },
      { pt: 'Pygame', en: 'Pygame' },
    ],
    link: 'https://github.com/abneralmeidacord/snakegame-algoritmos-PUC',
  },
  {
    id: 2,
    title: {
      pt: 'Gestor de Pedidos',
      en: 'Order Management System',
    },
    category: 'Acadêmicos',
    description: {
      pt: 'Sistema para gerenciamento de pedidos de uma serralheria, com controle de status e organização das informações.',
      en: 'An order management system for a metalworking business, featuring order status tracking and organized information.',
    },
    image: '/images/gestao-pedidos.png',
    technologies: [
      { pt: 'HTML', en: 'HTML' },
      { pt: 'CSS', en: 'CSS' },
      { pt: 'JavaScript', en: 'JavaScript' },
    ],
  },
  {
    id: 3,
    title: {
      pt: 'UniVacinas',
      en: 'UniVacinas',
    },
    category: 'Web',
    description: {
      pt: 'Plataforma para acompanhamento da carteira de vacinas e estoque nos postos locais.',
      en: 'Platform for tracking vaccination records and stock levels at local health centers.',
    },
    image: '/images/univacinas.png',
    technologies: [
      { pt: 'React', en: 'React' },
      { pt: 'HTML', en: 'HTML' },
      { pt: 'CSS', en: 'CSS' },
      { pt: 'JavaScript', en: 'JavaScript' },
    ],
  },
]

// ======================================
// TRADUÇÕES
// ======================================

const translations = {
  pt: {
    eyebrow: 'PRODUÇÕES ML',
    title: 'Continue explorando',
    subtitle:
      'Conheça alguns dos projetos que desenvolvi ao longo da minha trajetória acadêmica.',
    categories: {
      Web: 'Web',
      Aplicações: 'Aplicações',
      Acadêmicos: 'Acadêmicos',
    },
    details: 'Ver detalhes',
    relevant: '100% relevante',
    closeDetails: 'Fechar detalhes',
    accessProject: 'Acessar projeto',
    imageAlt: 'Capa do projeto:',
  },
  en: {
    eyebrow: 'ML+ ORIGINAL PRODUCTIONS',
    title: 'Keep exploring',
    subtitle:
      'Explore some of the projects I have developed throughout my academic journey.',
    categories: {
      Web: 'Web',
      Aplicações: 'Applications',
      Acadêmicos: 'Academic',
    },
    details: 'View details',
    relevant: '98% match',
    closeDetails: 'Close details',
    accessProject: 'Visit project',
    imageAlt: 'Project cover:',
  },
}

// ======================================
// COMPONENTE PRINCIPAL
// ======================================

export default function ProjectsSection() {
  const { language } = useLanguage()
  const currentLanguage: Language = language
  const t = translations[currentLanguage]

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null)

  return (
    <section
      className="section projects-section"
      id="projetos"
    >
      {/* CABEÇALHO */}

      <div className="section-heading">
        <p className="eyebrow">
          {t.eyebrow}
        </p>

        <h2>
          {t.title}<span>.</span>
        </h2>

        <p>{t.subtitle}</p>
      </div>

      {/* CARDS DOS PROJETOS */}

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div className="project-cover">

              {/* IMAGEM DO PROJETO */}

              <img
                src={getImageUrl(project.image)}
                alt={`${t.imageAlt} ${project.title[currentLanguage]}`}
                loading="lazy"
                onError={() => {
                  console.error(
                    'Imagem não encontrada:',
                    getImageUrl(project.image)
                  )
                }}
              />

              <span className="project-original">
                ML+ ORIGINAL
              </span>

              {/* OVERLAY */}

              <div className="project-overlay">
                <span className="project-category">
                  {t.categories[project.category]}
                </span>

                <h3>
                  {project.title[currentLanguage]}
                </h3>

                <button
                  type="button"
                  className="project-details-button"
                  onClick={() => setSelectedProject(project)}
                >
                  ▶ {t.details}
                </button>
              </div>
            </div>

            {/* RODAPÉ DO CARD */}

            <div className="project-card-footer">
              <span className="project-match">
                {t.relevant}
              </span>

              <span>
                {t.categories[project.category]}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL DE DETALHES */}

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
            {/* BOTÃO FECHAR */}

            <button
              type="button"
              className="projects-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label={t.closeDetails}
            >
              ×
            </button>

            {/* IMAGEM DO MODAL */}

            <div className="projects-modal-cover">
              <img
                src={getImageUrl(selectedProject.image)}
                alt={`${t.imageAlt} ${selectedProject.title[currentLanguage]}`}
                onError={() => {
                  console.error(
                    'Imagem do modal não encontrada:',
                    getImageUrl(selectedProject.image)
                  )
                }}
              />
            </div>

            {/* CONTEÚDO DO MODAL */}

            <div className="projects-modal-content">
              <span className="project-original">
                ML+ ORIGINAL
              </span>

              <h3 id="projects-modal-title">
                {selectedProject.title[currentLanguage]}
              </h3>

              <p>
                {selectedProject.description[currentLanguage]}
              </p>

              {/* TECNOLOGIAS */}

              <div className="projects-technologies">
                {selectedProject.technologies.map((technology) => (
                  <span key={technology.pt}>
                    {technology[currentLanguage]}
                  </span>
                ))}
              </div>

              {/* LINK DO PROJETO */}

              {selectedProject.link && (
                <a
                  className="button button-primary"
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.accessProject} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
