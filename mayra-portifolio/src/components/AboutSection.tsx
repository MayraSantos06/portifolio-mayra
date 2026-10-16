
import { useState } from 'react'
import FilmSection from './FilmSection'
import { useLanguage } from '../contexts/LanguageContext'
import './AboutSection.css'

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const translations = {
    pt: {
      title: 'Sobre mim',
      paragraph1:
        'Sou natural de Três Marias, Minas Gerais, e atualmente curso Engenharia de Software na PUC Minas. Também tenho formação técnica em Edificações pelo CEFET-MG, campus Curvelo, uma experiência que ampliou minha visão sobre planejamento, organização e resolução de problemas.',
      paragraph2:
        'Além da tecnologia, gosto de filmes e séries, que me permitem explorar diferentes histórias, perspectivas e universos.',
      ticketLabel: 'Abrir minha coleção de filmes e séries',
      ticketKicker: 'ACESSO ESPECIAL · SESSÃO LIVRE',
      films: 'FILMES',
      series: '& SÉRIES',
      ticketDescription: 'Filmes e séries que já assisti.',
      ticketAction: 'EXPLORAR MINHA LISTA',
      hint: 'Clique no ingresso para entrar na sessão ↗',
    },
    en: {
      title: 'About Me',
      paragraph1:
        'I am originally from Três Marias, Minas Gerais, Brazil, and currently study Software Engineering at PUC Minas. I also have a technical qualification in Building Construction from CEFET-MG, Curvelo campus, which strengthened my skills in planning, organization, and problem-solving.',
      paragraph2:
        'Beyond technology, I enjoy movies and TV series, which allow me to explore different stories, perspectives, and worlds.',
      ticketLabel: 'Open my movie and TV series collection',
      ticketKicker: 'SPECIAL ACCESS · OPEN SCREENING',
      films: 'MOVIES',
      series: '& SERIES',
      ticketDescription: 'Movies and TV series I have watched.',
      ticketAction: 'EXPLORE MY LIST',
      hint: 'Click the ticket to enter the screening ↗',
    },
  }

  const t = translations[language]

  return (
    <section className="section about-section" id="sobre">
      <div className="about-layout">
        <div className="about-copy">
          <h2>
            {t.title}<span>.</span>
          </h2>

          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
        </div>

        <div className="about-cinema">
          <button
            type="button"
            className="cinema-ticket"
            onClick={() => setIsOpen(true)}
            aria-label={t.ticketLabel}
          >
            <span className="ticket-edge">ML+ ORIGINAL</span>

            <span className="ticket-main">
              <span className="ticket-kicker">
                {t.ticketKicker}
              </span>

              <strong>
                {t.films}
                <br />
                {t.series}<span>.</span>
              </strong>

              <span className="ticket-description">
                {t.ticketDescription}
              </span>

              <span className="ticket-action">
                {t.ticketAction}{' '}
                <span aria-hidden="true">↗</span>
              </span>
            </span>

            <span className="ticket-stub" aria-hidden="true">
              <span>ADMIT ONE</span>
              <span className="ticket-popcorn">▥</span>
              <span className="ticket-barcode" />
            </span>
          </button>

          <p className="about-cinema-hint">
            {t.hint}
          </p>
        </div>
      </div>

      {isOpen && (
        <FilmSection onClose={() => setIsOpen(false)} />
      )}
    </section>
  )
}
