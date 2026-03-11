
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
  const [showHirePopup, setShowHirePopup] = useState(false)

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

  useEffect(() => {
    if (showSplash) {
      return undefined
    }

    const popupTimer = window.setTimeout(() => {
      setShowHirePopup(true)
    }, 260)

    return () => {
      window.clearTimeout(popupTimer)
    }
  }, [showSplash])

  const closeHirePopup = () => {
    setShowHirePopup(false)
  }

  const openContactForm = () => {
    setShowHirePopup(false)
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="overflow-x-hidden min-h-screen bg-dark text-white font-sans selection:bg-skyBlue selection:text-white">
      {showSplash && <SplashScreen isExiting={hideSplash} />}

      {showHirePopup && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center px-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
            onClick={closeHirePopup}
            aria-label="Close popup"
          />

          <div className="popup-card relative w-full max-w-md rounded-2xl border border-skyBlue/25 bg-darkLight/95 p-6 text-center shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={closeHirePopup}
              className="absolute right-3 top-2 text-2xl text-gray-400 hover:text-white"
              aria-label="Close message"
            >
              ×
            </button>

            <div className="mx-auto mb-4 inline-flex rounded-full border border-skyBlue/30 bg-skyBlue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-skyBlue">
              Open To Hire
            </div>

            <h3 className="text-2xl font-bold text-white">Build Something Amazing Together</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Like my work? Drop your details in the form and I will get back to you quickly.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={openContactForm}
                className="rounded-lg bg-gradient-to-r from-skyBlue to-primary px-5 py-2 font-semibold text-white hover:opacity-90"
              >
                Hire Me
              </button>
              <button
                type="button"
                onClick={closeHirePopup}
                className="rounded-lg border border-white/20 px-5 py-2 font-semibold text-gray-200 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
