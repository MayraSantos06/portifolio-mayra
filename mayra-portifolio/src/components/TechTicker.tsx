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
  FaDatabase,
} from 'react-icons/fa'

import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiBootstrap,
  SiSpringboot,
} from 'react-icons/si'

import './TechTicker.css'

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
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#4169E1',
    link: 'https://www.postgresql.org',
    category: 'Banco de Dados',
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
  {
    name: 'Banco de Dados',
    icon: FaDatabase,
    color: '#00C2A8',
    link: 'https://www.postgresql.org',
    category: 'Banco de Dados',
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
      <div className="technologies-content">

        {/* APRESENTAÇÃO */}

        <div className="technologies-text">
          <p className="eyebrow">
            MEU UNIVERSO TECNOLÓGICO
          </p>

          <h2>
            Tecnologias que fazem
            <br />
            parte da minha
            <br />
            jornada<span>.</span>
          </h2>

          <p className="technologies-description">
            Cada tecnologia representa uma nova
            possibilidade de criar, aprender e
            transformar ideias em soluções.
          </p>

          <p className="technologies-description">
            Explore minhas habilidades e descubra
            as linguagens, ferramentas e tecnologias
            que fazem parte do meu desenvolvimento.
            Escolha entre visualizar em um globo
            interativo ou em cards.
          </p>

          <div className="technologies-tags">
            <span>Desenvolvimento Web</span>
            <span>Programação</span>
            <span>Banco de Dados</span>
            <span>Aprendizado Contínuo</span>
          </div>
        </div>

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
