
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('ml-language') === 'en' ? 'en' : 'pt'
    } catch {
      return 'pt'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language

    try {
      localStorage.setItem('ml-language', language)
    } catch {
      // Mantém a seleção enquanto a página estiver aberta.
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de LanguageProvider')
  }

  return context
}
