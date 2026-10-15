import { useState } from 'react'
import FilmSection from './FilmSection'
import './AboutSection.css'

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="section about-section" id="sobre">
      <div className="about-layout">
        <div className="about-copy">
        
          <h2>Sobre mim<span>.</span></h2>
          <p>
            Sou estudante de Engenharia de Software e gosto de aprender,
            explorar ideias e transformar desafios em soluções. Minha trajetória
            reúne experiências em diferentes áreas, que contribuem para a
            forma como observo problemas e desenvolvo projetos.
          </p>
          <p>
            Fora do código, gosto de descobrir histórias por meio de filmes e
            séries. Cada produção é uma oportunidade de conhecer perspectivas,
            personagens e universos diferentes.
          </p>
        </div>

        <div className="about-cinema">
          <button
            type="button"
            className="cinema-ticket"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir minha coleção de filmes e séries"
          >
            <span className="ticket-edge">ML+ ORIGINAL</span>
            <span className="ticket-main">
              <span className="ticket-kicker">ACESSO ESPECIAL · SESSÃO LIVRE</span>
              <strong>FILMES<br />& SÉRIES<span>.</span></strong>
              <span className="ticket-description">Filmes e Series que já assisti.</span>
              <span className="ticket-action">EXPLORAR MINHA LISTA <span aria-hidden="true">↗</span></span>
            </span>
            <span className="ticket-stub" aria-hidden="true">
              <span>ADMIT ONE</span>
              <span className="ticket-popcorn">▥</span>
              <span className="ticket-barcode" />
            </span>
          </button>
          <p className="about-cinema-hint">Clique no ingresso para entrar na sessão ↗</p>
        </div>
      </div>
      {isOpen && <FilmSection onClose={() => setIsOpen(false)} />}
    </section>
  )
}
