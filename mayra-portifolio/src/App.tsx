
import './App.css'

// Componentes do portfólio
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import TechTicker from './components/TechTicker'
import ProjectsSection from './components/ProjectsSection'
import ExperiencesSection from './components/ExperiencesSection'
import CurriculumSection from './components/Curriculumsection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FilmSection from './components/FilmSection'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <AboutSection />
        
        <TechTicker />

        <ProjectsSection />

        <ExperiencesSection />

        <CurriculumSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App
