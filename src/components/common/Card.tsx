interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = false }: CardProps) => {
  const hoverEffect = hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${hoverEffect} ${className}`}>
      {children}
    </div>
  )
}

export default Card
