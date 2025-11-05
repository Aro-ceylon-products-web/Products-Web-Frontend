import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/Home.tsx'
import Products from './pages/Products.tsx'
import CRM from './pages/products/CRM.tsx'
import HR from './pages/products/HR.tsx'
import ERP from './pages/products/ERP.tsx'
import POS from './pages/products/POS.tsx'
import Pricing from './pages/Pricing.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'

// Admin imports
import AdminLogin from './pages/admin/AdminLogin.tsx'
import AdminLayout from './components/admin/AdminLayout.tsx'
import Dashboard from './pages/admin/Dashboard.tsx'
import AdminProducts from './pages/admin/Products.tsx'
import Messages from './pages/admin/Messages.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/products/crm" element={<Layout><CRM /></Layout>} />
          <Route path="/products/hr" element={<Layout><HR /></Layout>} />
          <Route path="/products/erp" element={<Layout><ERP /></Layout>} />
          <Route path="/products/pos" element={<Layout><POS /></Layout>} />
          <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="messages" element={<Messages />} />
            <Route path="pricing" element={<div className="text-center py-12 text-gray-500">Pricing Management - Coming Soon</div>} />
            <Route path="feedback" element={<div className="text-center py-12 text-gray-500">Feedback Management - Coming Soon</div>} />
            <Route path="analytics" element={<div className="text-center py-12 text-gray-500">Analytics - Coming Soon</div>} />
            <Route path="content" element={<div className="text-center py-12 text-gray-500">Content Management - Coming Soon</div>} />
            <Route path="settings" element={<div className="text-center py-12 text-gray-500">Settings - Coming Soon</div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
