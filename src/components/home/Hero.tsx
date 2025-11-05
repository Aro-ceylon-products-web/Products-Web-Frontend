import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate opacity: starts at 1, fades to 0 as you scroll down
  const opacity = Math.max(0, 1 - scrollY / 600)
  // Scale effect: slightly zoom out as you scroll
  const scale = Math.max(0.95, 1 - scrollY / 3000)
  // Disable pointer events when scrolled past the hero (opacity is very low)
  const pointerEvents = opacity < 0.1 ? 'none' : 'auto'

  return (
    <section 
      className="fixed top-0 left-0 right-0 min-h-screen overflow-hidden z-10"
      style={{ opacity, pointerEvents }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100 dark:bg-amber-900/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 dark:bg-gray-700/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-50 dark:bg-amber-900/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D6A12315_1px,transparent_1px),linear-gradient(to_bottom,#D6A12315_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#D6A12330_1px,transparent_1px),linear-gradient(to_bottom,#D6A12330_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div 
        className="container-custom relative z-10 min-h-screen flex items-center section-padding"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Main Content */}
        <div className="w-full"
>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-gray-900 dark:text-white">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 backdrop-blur-sm">
                <span className="text-amber-700 dark:text-amber-400 text-sm font-semibold">🚀 Your business, our technology — together, we create success.</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Transform Your
                <span className="block text-gradient-gold">Business Future</span>
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Unlock unprecedented growth with AI-powered CRM, HR, ERP, and POS solutions 
                designed for the modern enterprise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="btn-hero-primary group">
                  <span>Explore Products</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </Link>
                <Link to="/contact" className="btn-hero-outline group">
                  <span>Schedule Demo</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="glass-effect rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">5K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div className="glass-effect rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="glass-effect rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-3xl blur-3xl opacity-40 animate-pulse"></div>
                <div className="relative glass-effect rounded-3xl p-12 transform hover:scale-105 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="card-item bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent p-6 rounded-xl border border-amber-200 dark:border-amber-700">
                      <div className="text-5xl mb-3">📊</div>
                      <div className="text-amber-700 dark:text-amber-400 font-semibold">CRM</div>
                    </div>
                    <div className="card-item bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800/50 dark:to-transparent p-6 rounded-xl border border-gray-300 dark:border-gray-600">
                      <div className="text-5xl mb-3">👥</div>
                      <div className="text-gray-700 dark:text-gray-300 font-semibold">HR</div>
                    </div>
                    <div className="card-item bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-800/50 dark:to-transparent p-6 rounded-xl border border-gray-300 dark:border-gray-600">
                      <div className="text-5xl mb-3">🏢</div>
                      <div className="text-gray-700 dark:text-gray-300 font-semibold">ERP</div>
                    </div>
                    <div className="card-item bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent p-6 rounded-xl border border-amber-200 dark:border-amber-700">
                      <div className="text-5xl mb-3">💳</div>
                      <div className="text-amber-700 dark:text-amber-400 font-semibold">POS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
