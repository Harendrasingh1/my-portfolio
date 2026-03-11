import React from 'react'

function SplashScreen({ isExiting = false }) {
  return (
    <div
      className={[
        'fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-dark',
        isExiting ? 'splash-exit' : '',
      ]
        .join(' ')
        .trim()}
      aria-label="Loading portfolio"
      role="status"
    >
      <div className="pointer-events-none absolute inset-0 splash-bg" />

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="splash-logo-wrap">
          <span className="splash-logo" aria-hidden="true">
            H
          </span>
        </div>

        <p className="text-sm tracking-[0.25em] uppercase text-skyBlue/90">
          Loading Portfolio
        </p>
      </div>
    </div>
  )
}

export default SplashScreen
