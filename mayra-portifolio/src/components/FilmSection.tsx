import { useEffect, useState } from 'react'
import './FilmSection.css'

type FilmCategory = 'Todos' | 'Filmes' | 'Séries'
type Film = {
  id: number
  title: string
  type: 'Filmes' | 'Séries'
  genre: string
  year: string
  poster?: string
  note: string
}

// Exemplos: substitua pelos títulos que você realmente assistiu.
const watched: Film[] = [
  { id: 1, title: 'Interestelar', type: 'Filmes', genre: 'Ficção científica', year: '2014', note: 'Uma história sobre exploração, tempo e conexões humanas.' },
  { id: 2, title: 'Stranger Things', type: 'Séries', genre: 'Mistério', year: '2016', note: 'Uma aventura marcada por amizade e suspense.' },
  { id: 3, title: 'Soul', type: 'Filmes', genre: 'Animação', year: '2020', note: 'Uma reflexão sobre propósito e pequenos momentos.' },
  { id: 4, title: 'The Last of Us', type: 'Séries', genre: 'Drama', year: '2023', note: 'Uma jornada sobre sobrevivência e vínculos.' },
  { id: 5, title: 'Oppenheimer', type: 'Filmes', genre: 'Drama histórico', year: '2023', note: 'Uma narrativa sobre ciência, escolhas e consequências.' },
]

export default function FilmSection({ onClose }: { onClose: () => void }) {
  const [category, setCategory] = useState<FilmCategory>('Todos')
  const [selected, setSelected] = useState<Film | null>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (selected) setSelected(null)
        else onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, selected])

  const filtered = watched.filter((item) => category === 'Todos' || item.type === category)

  return (
    <div className="film-modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <div className="film-modal" role="dialog" aria-modal="true" aria-labelledby="film-modal-title">
        <button type="button" className="film-modal-close" onClick={onClose} aria-label="Fechar catálogo">×</button>
        <header className="film-modal-header">
          <p className="film-modal-eyebrow">ML+ ORIGINAL · MINHA CINEMATECA</p>
          <h2 id="film-modal-title">Filmes & Séries<span>.</span></h2>
          <p>Algumas histórias que passaram pela minha tela.</p>
        </header>
        <div className="film-modal-filters" aria-label="Filtrar catálogo">
          {(['Todos', 'Filmes', 'Séries'] as FilmCategory[]).map((item) => (
            <button type="button" key={item} className={category === item ? 'is-active' : ''} onClick={() => { setCategory(item); setSelected(null) }} aria-pressed={category === item}>{item}</button>
          ))}
        </div>
        <div className="film-modal-grid">
          {filtered.map((item) => (
            <button type="button" className="film-poster-card" key={item.id} onClick={() => setSelected(item)} aria-label={`Ver detalhes de ${item.title}`}>
              <div className="film-poster-art">
                {item.poster ? <img src={item.poster} alt={`Pôster de ${item.title}`} /> : <span className="film-poster-placeholder">{item.title}</span>}
                <span className="film-poster-type">{item.type === 'Filmes' ? 'FILME' : 'SÉRIE'}</span>
              </div>
              <strong>{item.title}</strong>
              <small>{item.genre} · {item.year}</small>
            </button>
          ))}
        </div>
        {selected && (
          <div className="film-selected" aria-live="polite">
            <div><span>{selected.type === 'Filmes' ? 'FILME' : 'SÉRIE'} · {selected.year}</span><h3>{selected.title}</h3><p>{selected.note}</p></div>
            <button type="button" onClick={() => setSelected(null)} aria-label="Fechar detalhes do título">×</button>
          </div>
        )}
      </div>
    </div>
  )
}
