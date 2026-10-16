import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './FilmSection.css'
import { createPortal } from 'react-dom'

type FilmCategory = 'Todos' | 'Filmes' | 'Séries'
type Language = 'pt' | 'en'

type Film = {
  id: string
  title: string
  type: 'Filmes' | 'Séries'
  year: string
  poster?: string
  rating?: number | null
  watchedDate?: string
  url?: string
  note?: {
    pt: string
    en: string
  }
}

const PROFILE_URL = 'https://letterboxd.com/maymaylu/'

/* Séries cadastradas separadamente */
const series: Film[] = [
  {
    id: 'series-stranger-things',
    title: 'Stranger Things',
    type: 'Séries',
    year: '2016',
    note: {
      pt: 'Uma aventura marcada por amizade e suspense.',
      en: 'An adventure filled with friendship and suspense.',
    },
  },
  {
    id: 'series-the-last-of-us',
    title: 'The Last of Us',
    type: 'Séries',
    year: '2023',
    note: {
      pt: 'Uma jornada sobre sobrevivência e vínculos.',
      en: 'A journey about survival and human bonds.',
    },
  },
]

const translations = {
  pt: {
    closeCatalog: 'Fechar catálogo',
    eyebrow: 'ML+ ORIGINAL · MINHA CINEMATECA',
    title: 'Filmes & Séries',
    subtitle: 'Histórias que passaram pela minha tela.',
    categories: {
      Todos: 'Todos',
      Filmes: 'Filmes',
      Séries: 'Séries',
    },
    movie: 'FILME',
    series: 'SÉRIE',
    loading: 'Carregando meus filmes do Letterboxd...',
    error: 'Não foi possível carregar os filmes agora.',
    empty: 'Nenhum título disponível nesta categoria.',
    retry: 'Tentar novamente',
    profile: 'Meu Letterboxd',
    viewFilm: 'Ver no Letterboxd',
    closeDetails: 'Fechar detalhes',
    filterLabel: 'Filtrar catálogo',
  },
  en: {
    closeCatalog: 'Close catalog',
    eyebrow: 'ML+ ORIGINAL · MY FILM COLLECTION',
    title: 'Movies & Series',
    subtitle: 'Stories that have made it onto my screen.',
    categories: {
      Todos: 'All',
      Filmes: 'Movies',
      Séries: 'Series',
    },
    movie: 'MOVIE',
    series: 'SERIES',
    loading: 'Loading my Letterboxd movies...',
    error: 'Unable to load movies right now.',
    empty: 'No titles available in this category.',
    retry: 'Try again',
    profile: 'My Letterboxd',
    viewFilm: 'View on Letterboxd',
    closeDetails: 'Close details',
    filterLabel: 'Filter catalog',
  },
}

export default function FilmSection({
  onClose,
}: {
  onClose: () => void
}) {
  const { language } = useLanguage()
  const currentLanguage: Language = language === 'en' ? 'en' : 'pt'
  const t = translations[currentLanguage]

  const [category, setCategory] = useState<FilmCategory>('Todos')
  const [selected, setSelected] = useState<Film | null>(null)
  const [movies, setMovies] = useState<Film[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [reload, setReload] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadMovies() {
      setLoading(true)
      setError(false)

      try {
        const response = await fetch('/api/letterboxd', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('Erro ao carregar filmes')
        }

        const data: Film[] = await response.json()

        if (!Array.isArray(data)) {
          throw new Error('Resposta inválida')
        }

        setMovies(data)
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error(err)
          setError(true)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadMovies()

    return () => controller.abort()
  }, [reload])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (selected) {
          setSelected(null)
        } else {
          onClose()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, selected])

  const watched = [...movies, ...series]

  const filtered = watched.filter(
    (item) => category === 'Todos' || item.type === category
  )

  const getTypeLabel = (type: Film['type']) =>
    type === 'Filmes' ? t.movie : t.series

  const ratingStars = (rating?: number | null) => {
    if (rating == null) return ''

    const whole = Math.floor(rating)
    const half = rating % 1 >= 0.5 ? '½' : ''

    return '★'.repeat(whole) + half
  }

  return createPortal(
  <div
    className="film-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="film-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="film-modal-title"
      >
        <button
          type="button"
          className="film-modal-close"
          onClick={onClose}
          aria-label={t.closeCatalog}
        >
          ×
        </button>

        <header className="film-modal-header">
          <p className="film-modal-eyebrow">{t.eyebrow}</p>

          <h2 id="film-modal-title">
            {t.title}<span>.</span>
          </h2>

          <p>{t.subtitle}</p>

          <a
            className="film-letterboxd-link"
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            ◉ {t.profile} ↗
          </a>
        </header>

        <div
          className="film-modal-filters"
          aria-label={t.filterLabel}
        >
          {(['Todos', 'Filmes', 'Séries'] as FilmCategory[]).map(
            (item) => (
              <button
                type="button"
                key={item}
                className={category === item ? 'is-active' : ''}
                onClick={() => {
                  setCategory(item)
                  setSelected(null)
                }}
                aria-pressed={category === item}
              >
                {t.categories[item]}
              </button>
            )
          )}
        </div>

        {loading && category !== 'Séries' && (
          <p className="film-status">{t.loading}</p>
        )}

        {error && category !== 'Séries' && (
          <div className="film-status">
            <p>{t.error}</p>
            <button
              type="button"
              onClick={() => setReload((value) => value + 1)}
            >
              {t.retry}
            </button>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="film-status">{t.empty}</p>
        )}

        <div className="film-modal-grid">
          {filtered.map((item) => (
            <button
              type="button"
              className="film-poster-card"
              key={item.id}
              onClick={() => setSelected(item)}
              aria-label={`${item.title}`}
            >
              <div className="film-poster-art">
                {item.poster ? (
                  <img
                    src={item.poster}
                    alt={item.title}
                    loading="lazy"
                  />
                ) : (
                  <span className="film-poster-placeholder">
                    {item.title}
                  </span>
                )}

                <span className="film-poster-type">
                  {getTypeLabel(item.type)}
                </span>
              </div>

              <strong>{item.title}</strong>

              <small>
                {item.year}
                {item.rating != null &&
                  ` · ${ratingStars(item.rating)}`}
              </small>
            </button>
          ))}
        </div>

        {selected && (
          <div className="film-selected" aria-live="polite">
            <div>
              <span>
                {getTypeLabel(selected.type)} · {selected.year}
              </span>

              <h3>{selected.title}</h3>

              {selected.rating != null && (
                <p className="film-selected-rating">
                  {ratingStars(selected.rating)}
                </p>
              )}

              {selected.note && (
                <p>{selected.note[currentLanguage]}</p>
              )}

              {selected.url && (
                <a
                  className="film-selected-link"
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.viewFilm} ↗
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label={t.closeDetails}
            >
              ×
            </button>
          </div>
        )}
           </div>
    </div>,
  document.body
  )
}


