import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

interface ThemeContextType {
  isDarkMode: boolean
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('themeMode')
    return (saved as ThemeMode) || 'system'
  })
  const [systemDark, setSystemDark] = useState(false)

  useEffect(() => {
    // Detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemDark(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode)
  }, [themeMode])

  const isDarkMode = themeMode === 'dark' || (themeMode === 'system' && systemDark)

  useEffect(() => {
    // Apply theme to document root for main website
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
