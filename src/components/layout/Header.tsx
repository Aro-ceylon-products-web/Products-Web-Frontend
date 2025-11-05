import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {!logoError ? (
              <div className="flex items-center space-x-3">
                <img
                  src="/src/assets/images/logo.png"
                  alt="Aro Ceylon Logo"
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                  onError={() => setLogoError(true)}
                />
                <div className="hidden md:block">
                  <div className="text-xl font-bold leading-tight">
                    <span className="text-amber-400">ARO CEYLON</span>
                  </div>
                  <div className="text-xs text-gray-400 font-medium tracking-wider">
                    SOLUTIONS
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold leading-tight">
                  <span className="text-amber-400">ARO CEYLON</span>
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-wider">
                  SOLUTIONS
                </div>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 dark:bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-3 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 px-4 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle for Mobile */}
            <div className="px-4 py-3">
              <ThemeToggle className="w-full justify-center" />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
