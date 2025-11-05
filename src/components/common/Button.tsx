import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50 focus:ring-amber-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
