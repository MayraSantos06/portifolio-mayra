
import './App.css'
import ProjectsSection from './components/ProjectsSection'

function App() {
  return (
    <>
      <header className="header">
        <a
          className="brand"
          href="#inicio"
          aria-label="ML+, início"
        >
          ML<span>+</span>
        </a>

        <nav
          className="navigation"
          aria-label="Navegação principal"
        >
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencias">Experiências</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#curriculo">Currículo</a>
          <a href="#filmes">Filmes & Séries</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        {/* SOBRE MIM / DESTAQUE */}
        <section className="hero" id="inicio">
          <div className="hero-content" id="sobre">
            <p className="eyebrow">
              ML+ ORIGINAL&nbsp; / &nbsp;PORTFÓLIO
            </p>

            <p className="hero-category">
              DESENVOLVIMENTO DE SOFTWARE
            </p>

            <h1>
              Sobre
              <br />
              <span>Mim.</span>
            </h1>

            <p className="hero-description">
              Sou estudante de Engenharia de Software e estou
              construindo minha trajetória na tecnologia.
              Este espaço reúne meus projetos, aprendizados e
              experiências no desenvolvimento de soluções.
            </p>

            <div className="hero-buttons">
              <a
                className="button button-primary"
                href="#projetos"
              >
                <span aria-hidden="true">▶</span>
                Conheça meus projetos
              </a>

              <a
                className="button button-secondary"
                href="#contato"
              >
                Entre em contato
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />

            <div className="art-core">
              ML<span>+</span>
            </div>

            <span className="art-label label-top">
              CRIATIVIDADE
            </span>

            <span className="art-label label-bottom">
              CÓDIGO &amp; IDEIAS
            </span>
          </div>

          <div className="hero-index">
            <span>01</span>
            <span className="index-line" />
            <span>MINHA HISTÓRIA</span>
          </div>
        </section>

        {/* TECNOLOGIAS EM DESTAQUE */}
        <div className="tech-ticker" id="tecnologias">
          <span>EXPLORANDO NOVAS POSSIBILIDADES</span>
          <span>DESENVOLVIMENTO WEB</span>
          <span>ENGENHARIA DE SOFTWARE</span>
          <span>APRENDIZADO CONTÍNUO</span>
        </div>

        {/* PROJETOS */}
        <ProjectsSection />

        {/* EXPERIÊNCIAS */}
        <section
          className="section"
          id="experiencias"
        >
          <div className="section-heading">
            <p className="eyebrow">TRAJETÓRIA</p>

            <h2>
              Experiências<span>.</span>
            </h2>

            <p>
              Minha trajetória acadêmica, projetos de extensão
              e experiências que contribuem para minha formação
              profissional.
            </p>
          </div>

          <div className="experience-list">
            <article className="experience-item">
              <span className="experience-period">
                FORMAÇÃO ATUAL
              </span>

              <div>
                <h3>
                  Engenharia de Software
                </h3>

                <p>
                  Graduação com foco no aprendizado de
                  programação, desenvolvimento de sistemas,
                  análise de requisitos e construção de
                  soluções tecnológicas.
                </p>
              </div>
            </article>

            {/* Adicione aqui outras experiências reais */}
          </div>
        </section>

        {/* CURRÍCULO */}
        <section
          className="section curriculum-section"
          id="curriculo"
        >
          <div className="section-heading">
            <p className="eyebrow">CURRÍCULO</p>

            <h2>
              Minha trajetória em um só lugar<span>.</span>
            </h2>

            <p>
              Conheça minha formação, minhas habilidades
              e meu percurso acadêmico e profissional.
            </p>
          </div>

          <div className="curriculum-content">
            <div>
              <span className="curriculum-label">
                PERFIL PROFISSIONAL
              </span>

              <h3>Em constante evolução.</h3>

              <p>
                Estou desenvolvendo minhas habilidades
                técnicas e buscando oportunidades para
                aprender, colaborar e criar soluções.
              </p>
            </div>

            <a
              className="button button-primary"
              href="#contato"
            >
              Entrar em contato
            </a>
          </div>
        </section>

        {/* FILMES E SÉRIES */}
        <section
          className="section"
          id="filmes"
        >
          <div className="section-heading">
            <p className="eyebrow">INSPIRAÇÕES</p>

            <h2>
              Fora do código<span>.</span>
            </h2>

            <p>
              Filmes e séries que fazem parte dos meus
              interesses e inspiram minha criatividade.
            </p>
          </div>

          <div className="inspiration-content">
            <p>
              Em breve, este espaço reunirá algumas das
              minhas histórias favoritas.
            </p>
          </div>
        </section>

        {/* CONTATO */}
        <section
          className="section contact-section"
          id="contato"
        >
          <div className="section-heading">
            <p className="eyebrow">
              VAMOS CONVERSAR?
            </p>

            <h2>
              Próxima história: a sua<span>.</span>
            </h2>

            <p>
              Tem uma ideia, oportunidade ou projeto?
              Entre em contato.
            </p>
          </div>

          <a
            className="contact-link"
            href="mailto:seuemail@exemplo.com"
          >
            seuemail@exemplo.com ↗
          </a>

          <p className="contact-note">
            Substitua o e-mail de exemplo pelo seu endereço
            de contato.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a
          className="brand"
          href="#inicio"
          aria-label="Voltar ao início"
        >
          ML<span>+</span>
        </a>

        <p>
          Portfólio profissional · Desenvolvido com
          React e TypeScript.
        </p>

        <a href="#inicio">
          Voltar ao topo ↑
        </a>
      </footer>
    </>
  )
}

export default App
