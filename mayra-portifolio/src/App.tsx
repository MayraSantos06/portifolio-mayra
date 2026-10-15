
import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import TechTicker from './components/TechTicker'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import CurriculumSection from './components/Curriculumsection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false)

  return (
    <>
      <Header
        onOpenCurriculum={() => setIsCurriculumOpen(true)}
      />

      <main>
        <Hero
          onOpenCurriculum={() => setIsCurriculumOpen(true)}
        />

        <AboutSection />
        <TechTicker />
        <ProjectsSection />
        <ExperiencesSection />
        <ContactSection />
      </main>

      <Footer />

      {isCurriculumOpen && (
        <CurriculumSection
          onClose={() => setIsCurriculumOpen(false)}
        />
      )}
    </>
  )
}

export default App
