
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Positions from './components/Positions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-dark text-white font-sans selection:bg-skyBlue selection:text-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Positions />
      </main>

      <Footer />
    </div>
  )
}

export default App
