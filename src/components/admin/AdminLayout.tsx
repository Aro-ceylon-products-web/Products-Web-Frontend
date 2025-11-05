import { useState, useEffect } from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  FaTachometerAlt, 
  FaBox, 
  FaDollarSign, 
  FaEnvelope, 
  FaStar, 
  FaChartLine, 
  FaFileAlt, 
  FaCog,
  FaBars,
  FaTimes,
  FaBell,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeToggle from '../ThemeToggle'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [notifications, setNotifications] = useState(5)
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Check authentication
    const isAuth = localStorage.getItem('adminAuth')
    if (!isAuth) {
      navigate('/admin/login')
    }
  }, [navigate])

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: FaTachometerAlt },
    { name: 'Products', path: '/admin/products', icon: FaBox },
    { name: 'Pricing', path: '/admin/pricing', icon: FaDollarSign },
    { name: 'Messages', path: '/admin/messages', icon: FaEnvelope },
    { name: 'Feedback', path: '/admin/feedback', icon: FaStar },
    { name: 'Analytics', path: '/admin/analytics', icon: FaChartLine },
    { name: 'Content', path: '/admin/content', icon: FaFileAlt },
    { name: 'Settings', path: '/admin/settings', icon: FaCog },
  ]

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className={`${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-r shadow-lg transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        {/* Toggle Button at Top */}
        <div className={`p-4 flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'} ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}>
          {sidebarOpen && (
            <span className={`text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Menu
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setSidebarOpen(prev => !prev)
            }}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'text-gray-400 hover:text-amber-400 hover:bg-gray-800' 
                : 'text-gray-600 hover:text-amber-600 hover:bg-gray-100'
            }`}
            aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {sidebarOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
          </button>
        </div>

        {/* Logo */}
        <div className={`p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-b`}>
          <Link to="/admin/dashboard" className="flex items-center space-x-3">
            {sidebarOpen ? (
              <>
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
                  AC
                </div>
                <div>
                  <div className="text-sm font-bold text-amber-600">ARO CEYLON</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Admin Panel</div>
                </div>
              </>
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
                AC
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md' 
                    : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-amber-400'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-amber-600'
                }`}
                title={!sidebarOpen ? item.name : ''}
              >
                <item.icon className="text-xl flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-sm h-16 flex items-center justify-between px-6 border-b`}>
          <div className="flex items-center space-x-4">
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {menuItems.find(item => item.path === location.pathname)?.name || 'Admin'}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Notifications */}
            <button 
              className={`relative p-2 transition-colors rounded-lg ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-amber-400 hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-amber-600 hover:bg-gray-100'
              }`}
              aria-label="Notifications"
            >
              <FaBell className="text-xl" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* Profile */}
            <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}>
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                <FaUser className="text-white text-sm" />
              </div>
              <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Admin</span>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className={`p-2 transition-colors rounded-lg ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-red-400 hover:bg-red-900/20' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
              }`}
              title="Logout"
            >
              <FaSignOutAlt className="text-xl" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className={`flex-1 p-6 overflow-y-auto ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
