
import { useState } from 'react'
import './App.css'

import { LanguageProvider } from './contexts/LanguageContext'

import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import TechTicker from './components/TechTicker'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import CurriculumSection from './components/Curriculumsection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import RevealSection from './components/Revealsection'

function AppContent() {
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false)

  return (
    <>
      <Header
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
      />

      <main>
        {/* ABERTURA DO SITE */}
        <Hero
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
        />

        {/* SOBRE MIM */}
        <RevealSection>
          <AboutSection />
        </RevealSection>

        {/* TECNOLOGIAS */}
        <TechTicker />

        {/* PROJETOS */}
        <RevealSection>
          <ProjectsSection />
        </RevealSection>

        {/* EXPERIÊNCIAS */}
        <RevealSection>
          <ExperiencesSection />
        </RevealSection>

        {/* CONTATO */}
        <RevealSection>
          <ContactSection />
        </RevealSection>
      </main>

      <Footer />

      {/* MODAL DO CURRÍCULO */}
      {isCurriculumOpen && (
        <CurriculumSection
          onClose={() => setIsCurriculumOpen(false)}
        />
      )}
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
