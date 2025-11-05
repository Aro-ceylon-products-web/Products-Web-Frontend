// Common TypeScript interfaces and types

export interface Product {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  link: string
}

export interface ProductDetail {
  title: string
  tagline: string
  description: string
  icon: string
  features: Feature[]
  benefits: string[]
}

export interface Feature {
  title: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
}

export interface Testimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

export interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
}
