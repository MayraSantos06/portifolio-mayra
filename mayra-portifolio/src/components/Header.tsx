
import './Header.css'

type HeaderProps = {
  onOpenCurriculum: () => void
}

export default function Header({ onOpenCurriculum }: HeaderProps) {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="ML+, início">
        ML<span>+</span>
      </a>

      <nav className="navigation" aria-label="Navegação principal">
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencias">Experiências</a>
        <a href="#tecnologias">Tecnologias</a>

        <a
          type="link"
          className="navigation-link"
          onClick={onOpenCurriculum}
        >
          Currículo
        </a>

        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}
