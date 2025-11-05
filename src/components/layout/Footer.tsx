import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  const productLinks = [
    { name: 'CRM System', path: '/products/crm' },
    { name: 'HR Management', path: '/products/hr' },
    { name: 'ERP Solution', path: '/products/erp' },
    { name: 'POS System', path: '/products/pos' },
  ]

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const supportLinks = [
    { name: 'Help Center', path: '/help' },
    { name: 'Documentation', path: '/docs' },
    { name: 'API', path: '/api' },
    { name: 'Status', path: '/status' },
  ]

  const socialLinks = [
    { icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="inline-flex items-center space-x-3 mb-4 group cursor-pointer"
            >
              {!logoError ? (
                <>
                  <img
                    src="/src/assets/images/logo.png"
                    alt="Aro Ceylon Logo"
                    className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                    onError={() => setLogoError(true)}
                  />
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-amber-600 leading-tight">ARO CEYLON</span>
                    <span className="text-xs text-gray-500 font-medium tracking-wider">SOLUTIONS</span>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-amber-600">ARO CEYLON</span>
                  <span className="text-xs text-gray-500 font-medium tracking-wider">SOLUTIONS</span>
                </div>
              )}
            </Link>
            <p className="text-gray-600 mb-4">
              Complete business solutions for enterprises of all sizes. From CRM to ERP, 
              we've got you covered.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-amber-600 transition-colors transform hover:scale-110 duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Top Selling Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Aro Ceylon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
