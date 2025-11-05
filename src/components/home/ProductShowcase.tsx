import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ProductShowcase = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const products = [
    {
      id: 'crm',
      name: 'CRM System',
      description: 'Manage customer relationships and grow your sales with our powerful CRM solution',
      icon: '📊',
      color: 'from-amber-500 to-amber-600',
      features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Email Integration'],
    },
    {
      id: 'hr',
      name: 'HR Management',
      description: 'Streamline HR processes and empower your team with intelligent HR tools',
      icon: '👥',
      color: 'from-amber-400 to-amber-500',
      features: ['Employee Records', 'Payroll Management', 'Leave Tracking', 'Performance Reviews'],
    },
    {
      id: 'erp',
      name: 'ERP Solution',
      description: 'Integrate all your business operations into one unified platform',
      icon: '🏢',
      color: 'from-amber-400 to-amber-500',
      features: ['Inventory Management', 'Financial Reporting', 'Supply Chain', 'Multi-location'],
    },
    {
      id: 'pos',
      name: 'POS System',
      description: 'Modern point-of-sale for retail success with real-time insights',
      icon: '💳',
      color: 'from-amber-400 to-amber-600',
      features: ['Fast Checkout', 'Inventory Sync', 'Sales Reports', 'Customer Loyalty'],
    },
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section id="products" className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-100 dark:bg-amber-900/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-200 dark:bg-gray-700/30 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-gradient-gold">Products</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive suite of business solutions tailored to your needs
          </p>
        </div>

        {/* Horizontal Scrollable Product Slider */}
        <div className="relative group">
          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/90 dark:bg-gray-800/90 hover:bg-amber-600 border border-gray-300 dark:border-gray-600 hover:border-amber-600 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100 -translate-x-6"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/90 dark:bg-gray-800/90 hover:bg-amber-600 border border-gray-300 dark:border-gray-600 hover:border-amber-600 rounded-full text-gray-700 dark:text-gray-300 hover:text-white transition-all shadow-lg opacity-0 group-hover:opacity-100 translate-x-6"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          >
            {/* Product Cards */}
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center"
              >
                <div className="glass-effect rounded-2xl p-8 h-full flex flex-col hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 group/card">
                  {/* Product Icon */}
                  <div className={`bg-gradient-to-br ${product.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-xl group-hover/card:scale-110 transition-transform`}>
                    {product.icon}
                  </div>
                  
                  {/* Product Info */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-amber-700 dark:text-amber-400">Key Features</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                            <span className="text-amber-700 dark:text-amber-400 text-xs">✓</span>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    to={`/products/${product.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* View All Card */}
            <div className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center">
              <Link
                to="/products"
                className="glass-effect rounded-2xl p-8 h-full flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 group/card min-h-[500px]"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6 text-4xl group-hover/card:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors">
                  View All Products
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-6 max-w-xs">
                  Explore our complete range of business solutions
                </p>
                <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform group-hover/card:scale-110">
                  View All
                  <span className="text-xl">→</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {[...products, { id: 'view-all' }].map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full bg-amber-400/50"
              ></div>
            ))}
          </div>
        </div>

        {/* Desktop Hint */}
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
          <p className="hidden md:block">Hover to reveal navigation arrows • Scroll to explore all products</p>
          <p className="md:hidden">Swipe horizontally to explore all products</p>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
