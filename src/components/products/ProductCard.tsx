import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

interface Product {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  link: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="bg-gradient-to-br from-amber-50 to-gray-50 dark:from-amber-900/20 dark:to-gray-700 p-8">
        <div className="text-6xl mb-4">{product.icon}</div>
        <h3 className="text-2xl font-bold mb-2 dark:text-white">{product.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
      </div>
      <div className="p-6">
        <h4 className="font-semibold mb-4 dark:text-white">Key Features:</h4>
        <ul className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-500 dark:text-green-400 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to={product.link}
          className="btn btn-primary w-full text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
