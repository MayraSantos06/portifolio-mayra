import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="ML+, início">ML<span>+</span></a>
      <nav className="navigation" aria-label="Navegação principal">
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#experiencias">Experiências</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#curriculo">Currículo</a>
        <a href="#filmes">Filmes &amp; Séries</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}
