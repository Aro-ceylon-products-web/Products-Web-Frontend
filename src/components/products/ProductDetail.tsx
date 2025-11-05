import { Link } from 'react-router-dom'
import { FaCheck, FaArrowRight } from 'react-icons/fa'

interface Feature {
  title: string
  description: string
}

interface ProductData {
  title: string
  tagline: string
  description: string
  icon: string
  features: Feature[]
  benefits: string[]
}

interface ProductDetailProps {
  product: ProductData
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">{product.icon}</div>
              <h1 className="text-5xl font-bold mb-4">{product.title}</h1>
              <p className="text-2xl text-gradient mb-6">{product.tagline}</p>
              <p className="text-xl text-gray-600 mb-8">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary text-lg">
                  Request Demo
                </Link>
                <Link to="/pricing" className="btn btn-outline text-lg">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-9xl">{product.icon}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Key <span className="text-gradient">Benefits</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 text-2xl mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-amber-500 to-amber-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-amber-50 max-w-2xl mx-auto">
            Join thousands of businesses already using our solutions
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
