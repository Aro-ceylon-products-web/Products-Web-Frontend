import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle = ({ className = '' }: ThemeToggleProps) => {
  const { isDarkMode, themeMode, setThemeMode } = useTheme()

  const toggleTheme = () => {
    if (themeMode === 'system') {
      setThemeMode(isDarkMode ? 'light' : 'dark')
    } else if (themeMode === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all ${
        isDarkMode 
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${className}`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaSun className="text-lg" />
      ) : (
        <FaMoon className="text-lg" />
      )}
    </button>
  )
}

export default ThemeToggle
