
import type { Skill } from './SkillsGlobe/SkillsGlobe'
import SkillsSection from './SkillsSection/SkillsSection'

import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiSpringboot,
} from 'react-icons/si'

import './Techticker.css'

// ======================================
// LISTA DE TECNOLOGIAS
// ======================================

const skills: Skill[] = [
  {
    name: 'React',
    icon: FaReact,
    color: '#61DAFB',
    link: 'https://react.dev',
    category: 'Frontend',
  },
  {
    name: 'Java',
    icon: FaJava,
    color: '#ED8B00',
    link: 'https://www.java.com',
    category: 'Backend',
  },
  {
    name: 'HTML5',
    icon: FaHtml5,
    color: '#E34F26',
    link: 'https://developer.mozilla.org/docs/Web/HTML',
    category: 'Frontend',
  },
  {
    name: 'CSS3',
    icon: FaCss3Alt,
    color: '#1572B6',
    link: 'https://developer.mozilla.org/docs/Web/CSS',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    link: 'https://developer.mozilla.org/docs/Web/JavaScript',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    link: 'https://www.typescriptlang.org',
    category: 'Frontend',
  },
  {
    name: 'Python',
    icon: FaPython,
    color: '#3776AB',
    link: 'https://www.python.org',
    category: 'Backend',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#5FA04E',
    link: 'https://nodejs.org',
    category: 'Backend',
  },
  {
    name: 'Git',
    icon: FaGitAlt,
    color: '#F05032',
    link: 'https://git-scm.com',
    category: 'Ferramentas',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    color: '#ffffff',
    link: 'https://github.com',
    category: 'Ferramentas',
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    color: '#7952B3',
    link: 'https://getbootstrap.com',
    category: 'Frontend',
  },
  {
    name: 'Spring Boot',
    icon: SiSpringboot,
    color: '#6DB33F',
    link: 'https://spring.io/projects/spring-boot',
    category: 'Backend',
  },
]

// ======================================
// CATEGORIAS DOS FILTROS
// ======================================

const categories = [
  'Frontend',
  'Backend',
  'Banco de Dados',
  'Ferramentas',
]

// ======================================
// SEÇÃO TECNOLOGIAS
// ======================================

export default function TechTicker() {
  return (
    <section
      className="section technologies-section"
      id="tecnologias"
    >
      <div className="technologies-text">

        {/* IDENTIFICAÇÃO SUPERIOR */}
        <p className="eyebrow technologies-eyebrow">
          MEU UNIVERSO TECNOLÓGICO
        </p>

        {/* TÍTULO PADRONIZADO */}
        
<h2 className="section-title technologies-title">
  Tecnologias que fazem{' '}
  <span className="technologies-title-highlight">
    parte da minha
  </span>{' '}
  jornada<span className="technologies-title-dot">.</span>
</h2>


        {/* GLOBO 3D E CARDS */}
        <div className="technologies-globe">
          <SkillsSection
            skills={skills}
            categories={categories}
          />
        </div>

      </div>
    </section>
  )
}
