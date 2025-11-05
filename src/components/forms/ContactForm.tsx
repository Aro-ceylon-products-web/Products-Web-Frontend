import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Send us a Message</h2>
      
      {submitSuccess && (
        <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 px-4 py-3 rounded mb-6">
          Thank you! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-200">
            Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          {errors.name && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-200">
            Email *
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          {errors.email && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2 dark:text-gray-200">
            Company
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2 dark:text-gray-200">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-200">
            Message *
          </label>
          <textarea
            id="message"
            rows={4}
            {...register('message', { required: 'Message is required' })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          {errors.message && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
