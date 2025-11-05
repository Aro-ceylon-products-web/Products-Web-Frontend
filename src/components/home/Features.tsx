import { FaRocket, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Fast Implementation',
      description: 'Get up and running in days, not months. Our solutions are designed for quick deployment.',
    },
    {
      icon: FaShieldAlt,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, backups, and compliance standards.',
    },
    {
      icon: FaUsers,
      title: '24/7 Support',
      description: 'Expert support team available around the clock to help you succeed.',
    },
    {
      icon: FaChartLine,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business from startup to enterprise.',
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            Why Choose <span className="text-gradient">Aro Ceylon</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to providing the best business solutions with unmatched quality and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-amber-50 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-2xl text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
