import { FaStar } from 'react-icons/fa'

const TestimonialList = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Aro Ceylon transformed our business operations. The CRM system alone increased our sales by 40%.',
      rating: 5,
    },
    {
      name: 'Sarah Smith',
      company: 'Retail Plus',
      role: 'Operations Manager',
      content: 'The POS system is intuitive and reliable. Our checkout times have decreased significantly.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Global Manufacturing',
      role: 'CFO',
      content: 'The ERP solution gave us complete visibility into our operations. Highly recommended!',
      rating: 5,
    },
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialList
