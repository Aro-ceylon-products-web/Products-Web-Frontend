import PricingCard from '../components/pricing/PricingCard'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      period: 'month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Up to 10 users',
        '1 Product included',
        'Email support',
        '5GB storage',
        'Basic analytics',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '299',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 users',
        '3 Products included',
        'Priority support',
        '50GB storage',
        'Advanced analytics',
        'Custom integrations',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited users',
        'All products included',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee',
      ],
      popular: false,
    },
  ]

  return (
    <div className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, <span className="text-gradient-gold">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include
            free updates and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
