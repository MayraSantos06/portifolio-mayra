
import './Header.css'
import { useLanguage } from '../contexts/LanguageContext'

type HeaderProps = {
  onOpenCurriculum: () => void
}

export default function Header({ onOpenCurriculum }: HeaderProps) {
  const { language, setLanguage } = useLanguage()

  const translations = {
    pt: {
      home: 'ML, início',
      navigation: 'Navegação principal',
      about: 'Sobre mim',
      projects: 'Projetos',
      experiences: 'Experiências',
      technologies: 'Tecnologias',
      curriculum: 'Currículo',
      contact: 'Contato',
    },
    en: {
      home: 'ML+, home',
      navigation: 'Main navigation',
      about: 'About Me',
      projects: 'Projects',
      experiences: 'Experience',
      technologies: 'Technologies',
      curriculum: 'Resume',
      contact: 'Contact',
    },
  }

  const t = translations[language]

  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label={t.home}>
        ML
      </a>

      <nav className="navigation" aria-label={t.navigation}>
        <a href="#sobre">{t.about}</a>
        <a href="#tecnologias">{t.technologies}</a>
        <a href="#projetos">{t.projects}</a>
        <a href="#experiencias">{t.experiences}</a>
        

        <button
          type="button"
          className="navigation-link"
          onClick={onOpenCurriculum}
        >
          {t.curriculum}
        </button>

        <a href="#contato">{t.contact}</a>
      </nav>

      <div className="language-switch" aria-label="Language selector">
        <button
          type="button"
          className={language === 'pt' ? 'language-btn active' : 'language-btn'}
          onClick={() => setLanguage('pt')}
          aria-label="Português"
          aria-pressed={language === 'pt'}
        >
          PT
        </button>

        <span className="language-divider">/</span>

        <button
          type="button"
          className={language === 'en' ? 'language-btn active' : 'language-btn'}
          onClick={() => setLanguage('en')}
          aria-label="English"
          aria-pressed={language === 'en'}
        >
          EN
        </button>
      </div>
    </header>
  )
}
