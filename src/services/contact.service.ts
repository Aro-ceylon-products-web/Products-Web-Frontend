import apiClient from './api'
import { ContactFormData, ApiResponse } from '../types'

/**
 * Submit contact form
 */
export const submitContactForm = async (
  data: ContactFormData
): Promise<ApiResponse<void>> => {
  try {
    const response = await apiClient.post('/contact', data)
    return {
      success: true,
      data: response.data,
      message: 'Your message has been sent successfully!',
    }
  } catch (error) {
    return {
      success: false,
      data: undefined as any,
      message: 'Failed to send message. Please try again.',
    }
  }
}

/**
 * Subscribe to newsletter
 */
export const subscribeNewsletter = async (
  email: string
): Promise<ApiResponse<void>> => {
  try {
    const response = await apiClient.post('/newsletter/subscribe', { email })
    return {
      success: true,
      data: response.data,
      message: 'Successfully subscribed to newsletter!',
    }
  } catch (error) {
    return {
      success: false,
      data: undefined as any,
      message: 'Failed to subscribe. Please try again.',
    }
  }
}

/**
 * Request a demo
 */
export const requestDemo = async (data: {
  name: string
  email: string
  company: string
  product: string
}): Promise<ApiResponse<void>> => {
  try {
    const response = await apiClient.post('/demo/request', data)
    return {
      success: true,
      data: response.data,
      message: 'Demo request submitted successfully!',
    }
  } catch (error) {
    return {
      success: false,
      data: undefined as any,
      message: 'Failed to submit demo request. Please try again.',
    }
  }
}
