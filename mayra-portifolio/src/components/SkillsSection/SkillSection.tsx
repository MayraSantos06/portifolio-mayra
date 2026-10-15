
import { useState } from 'react'
import type { CSSProperties } from 'react'
import { FiGlobe, FiGrid } from 'react-icons/fi'

import SkillsGlobe from '../SkillsGlobe/SkillsGlobe'
import type { Skill } from '../SkillsGlobe/SkillsGlobe'

import './SkillsSection.css'

type SkillsSectionProps = {
  skills: Skill[]
  categories: string[]
}

type ViewMode = 'globo' | 'lista'

export default function SkillsSection({
  skills,
  categories,
}: SkillsSectionProps) {
  const [category, setCategory] = useState<string>('Todas')
  const [view, setView] = useState<ViewMode>('globo')

  const filtered =
    category === 'Todas'
      ? skills
      : skills.filter(
          (skill) => skill.category === category
        )

  const count = (cat: string): number =>
    cat === 'Todas'
      ? skills.length
      : skills.filter(
          (skill) => skill.category === cat
        ).length

  return (
    <div className="skills-section">
      <div className="skills-toolbar">
        <div
          className="skills-chips"
          role="group"
          aria-label="Categoria"
        >
          {['Todas', ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              className={
                cat === category ? 'active' : ''
              }
              aria-pressed={cat === category}
              onClick={() => setCategory(cat)}
            >
              {cat}
              <span>{count(cat)}</span>
            </button>
          ))}
        </div>

        <div
          className="skills-view"
          role="group"
          aria-label="Visualização"
        >
          <button
            type="button"
            className={
              view === 'globo' ? 'active' : ''
            }
            aria-pressed={view === 'globo'}
            onClick={() => setView('globo')}
          >
            <FiGlobe aria-hidden="true" />
            Globo
          </button>

          <button
            type="button"
            className={
              view === 'lista' ? 'active' : ''
            }
            aria-pressed={view === 'lista'}
            onClick={() => setView('lista')}
          >
            <FiGrid aria-hidden="true" />
            Cards
          </button>
        </div>
      </div>

      {view === 'globo' ? (
        <>
          <SkillsGlobe
            key={category}
            skills={filtered}
            color="#e50914"
            speed={0.2}
          />

          <p className="skills-hint">
            Arraste para girar · Clique em um ícone
            para abrir o link
          </p>
        </>
      ) : (
        <ul className="skills-grid">
          {filtered.map((skill) => {
            const Icon = skill.icon

            return (
              <li key={skill.name}>
                <a
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      '--skill': skill.color,
                    } as CSSProperties
                  }
                >
                  <Icon aria-hidden="true" />
                  <span>{skill.name}</span>
                  <small>{skill.category}</small>
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
