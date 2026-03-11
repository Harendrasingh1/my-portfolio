
import React, { useEffect, useState } from 'react'
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
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [hideSplash, setHideSplash] = useState(false)

  useEffect(() => {
    const minDuration = 1300
    const startTime = Date.now()

    const finishSplash = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDuration - elapsed)

      window.setTimeout(() => {
        setHideSplash(true)

        window.setTimeout(() => {
          setShowSplash(false)
        }, 360)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      finishSplash()
      return undefined
    }

    window.addEventListener('load', finishSplash, { once: true })

    return () => {
      window.removeEventListener('load', finishSplash)
    }
  }, [])

  return (
    <div className="overflow-x-hidden min-h-screen bg-dark text-white font-sans selection:bg-skyBlue selection:text-white">
      {showSplash && <SplashScreen isExiting={hideSplash} />}

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
