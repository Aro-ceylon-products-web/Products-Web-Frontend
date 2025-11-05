import { useState, useEffect, useRef } from 'react'

interface UseCountAnimationProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  isPercentage?: boolean
  format?: (value: number) => string
}

export const useCountAnimation = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  isPercentage = false,
  format,
}: UseCountAnimationProps) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            console.log('Element is visible, starting count')
          } else {
            // Reset when scrolling away
            setIsVisible(false)
            setCount(0)
            console.log('Element is not visible, resetting count')
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
      console.log('Observer attached to element')
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const frameRate = 60
    const totalFrames = (duration / 1000) * frameRate
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const currentValue = easeOut * end
      setCount(currentValue)

      if (frame >= totalFrames) {
        clearInterval(counter)
        setCount(end)
      }
    }, 1000 / frameRate)

    return () => clearInterval(counter)
  }, [isVisible, end, duration])

  const formattedValue = format
    ? format(count)
    : `${prefix}${count.toFixed(decimals)}${suffix}${isPercentage ? '%' : ''}`

  return { count, formattedValue, elementRef }
}
