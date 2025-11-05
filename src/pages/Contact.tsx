import ContactForm from '../components/forms/ContactForm.tsx'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@aroceylon.com',
      link: 'mailto:info@aroceylon.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Office',
      content: '123 Business Street, Colombo, Sri Lanka',
      link: null,
    },
  ]

  return (
    <div className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-200 dark:border-amber-700">
                    <info.icon className="text-2xl text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-amber-600 dark:text-amber-400">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Business Hours</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
