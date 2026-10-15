
import { useEffect } from 'react'
import { FiDownload, FiExternalLink, FiX } from 'react-icons/fi'
import './CurriculumSection.css'

type CurriculumSectionProps = {
  onClose: () => void
}

export default function CurriculumSection({
  onClose,
}: CurriculumSectionProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  const pdfUrl = `${import.meta.env.BASE_URL}Curriculo_Mayra_Luiza.pdf`

  return (
    <div
      className="curriculum-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="curriculum-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="curriculum-title"
      >
        {/* CABEÇALHO */}
        <div className="curriculum-header">
          <div>
            <p className="curriculum-eyebrow">
              ML+ ORIGINAL · DOCUMENTO PROFISSIONAL
            </p>

            <h2 id="curriculum-title">
              Meu currículo<span>.</span>
            </h2>
          </div>

     <button
  type="button"
  className="curriculum-close"
  onClick={() => {
    onClose()
  }}
  aria-label="Fechar currículo"
>
  <FiX />
</button>
        </div>

        {/* VISUALIZAÇÃO DO PDF */}
        <div className="curriculum-viewer">
          <iframe
            src={pdfUrl}
            title="Visualização do meu currículo em PDF"
          />
        </div>

        {/* BOTÕES */}
        <div className="curriculum-actions">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="curriculum-open"
          >
            <FiExternalLink />
            Abrir PDF
          </a>

          <a
            href={pdfUrl}
            download="Curriculo_Mayra_Luiza.pdf"
            className="curriculum-download"
          >
            <FiDownload />
            Baixar currículo
          </a>
        </div>
      </div>
    </div>
  )
}
