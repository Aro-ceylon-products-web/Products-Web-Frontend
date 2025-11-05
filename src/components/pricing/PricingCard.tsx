import { FaCheck } from 'react-icons/fa'

interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
}

interface PricingCardProps {
  plan: Plan
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div
      className={`glass-effect rounded-xl shadow-lg overflow-hidden ${
        plan.popular ? 'ring-4 ring-amber-400 dark:ring-amber-500 transform scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center py-2 font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{plan.description}</p>
        <div className="mb-6">
          {plan.price === 'Custom' ? (
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">Custom</div>
          ) : (
            <div>
              <span className="text-5xl font-bold text-amber-600 dark:text-amber-400">${plan.price}</span>
              <span className="text-gray-700 dark:text-gray-300">/{plan.period}</span>
            </div>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-3 rounded-lg font-semibold transition-colors ${
            plan.popular
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 border border-amber-400/30 dark:border-amber-500/30'
          }`}
        >
          {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
        </button>
      </div>
    </div>
  )
}

export default PricingCard
