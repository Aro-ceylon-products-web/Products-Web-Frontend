import { Link } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard'

const Products = () => {
  const products = [
    {
      id: 'crm',
      title: 'CRM System',
      description: 'Manage customer relationships and boost sales with our comprehensive CRM solution.',
      icon: '📊',
      features: ['Contact Management', 'Sales Pipeline', 'Analytics & Reports', 'Email Integration'],
      link: '/products/crm',
    },
    {
      id: 'hr',
      title: 'HR Management',
      description: 'Streamline your HR processes from recruitment to payroll management.',
      icon: '👥',
      features: ['Employee Database', 'Attendance Tracking', 'Payroll Management', 'Performance Reviews'],
      link: '/products/hr',
    },
    {
      id: 'erp',
      title: 'ERP Solution',
      description: 'Integrate all your business processes into one unified system.',
      icon: '🏢',
      features: ['Resource Planning', 'Inventory Management', 'Financial Management', 'Supply Chain'],
      link: '/products/erp',
    },
    {
      id: 'pos',
      title: 'POS System',
      description: 'Modern point-of-sale system for retail and hospitality businesses.',
      icon: '💳',
      features: ['Fast Checkout', 'Inventory Sync', 'Payment Processing', 'Sales Reports'],
      link: '/products/pos',
    },
  ]

  return (
    <div className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-gradient-gold">Business Solutions</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions designed to grow with your business,
            from startups to enterprise level organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="scroll-mt-32">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="btn-hero-primary inline-block">
            Schedule a Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
