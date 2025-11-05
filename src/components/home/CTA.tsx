import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-amber-50 max-w-2xl mx-auto">
            Join thousands of successful businesses using Aro Ceylon solutions.
            Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
