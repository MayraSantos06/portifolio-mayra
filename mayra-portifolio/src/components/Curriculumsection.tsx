
import { useEffect } from 'react'
import { FiDownload, FiExternalLink, FiX } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './CurriculumSection.css'

type CurriculumSectionProps = {
  onClose: () => void
}

const translations = {
pt: {
  eyebrow: 'ML+ ORIGINAL · DOCUMENTO PROFISSIONAL',
  title: 'Meu currículo',
  close: 'Fechar currículo',
  viewerTitle: 'Visualização do meu currículo em PDF',
  open: 'Abrir PDF',
  download: 'Baixar currículo',
  filename: 'Curriculo_Mayra_Luiza.pdf',
},
en: {
  eyebrow: 'ML+ ORIGINAL · PROFESSIONAL DOCUMENT',
  title: 'My Resume',
  close: 'Close resume',
  viewerTitle: 'Preview of my resume in PDF',
  open: 'Open PDF',
  download: 'Download resume',
  filename: 'Resume_Mayra_Luiza.pdf',
},
}

export default function CurriculumSection({
  onClose,
}: CurriculumSectionProps) {
  const { language } = useLanguage()
  const t = translations[language]

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

  const pdfUrl = `${import.meta.env.BASE_URL}${t.filename}`

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
        <div className="curriculum-header">
          <div>
            <p className="curriculum-eyebrow">
              {t.eyebrow}
            </p>

            <h2 id="curriculum-title">
              {t.title}<span>.</span>
            </h2>
          </div>

          <button
            type="button"
            className="curriculum-close"
            onClick={onClose}
            aria-label={t.close}
          >
            <FiX />
          </button>
        </div>

        <div className="curriculum-viewer">
          <iframe
            key={language}
            src={pdfUrl}
            title={t.viewerTitle}
          />
        </div>

        <div className="curriculum-actions">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="curriculum-open"
          >
            <FiExternalLink />
            {t.open}
          </a>

          <a
            href={pdfUrl}
            download={t.filename}
            className="curriculum-download"
          >
            <FiDownload />
            {t.download}
          </a>
        </div>
      </div>
    </div>
  )
}
