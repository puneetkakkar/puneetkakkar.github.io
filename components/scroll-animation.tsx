'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
  margin?: string
  ease?: string
}

export const ScrollAnimation = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 50,
  once = true,
  margin = '-100px',
  ease = 'easeOut'
}: ScrollAnimationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'none':
        return { opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      case 'none':
        return { opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  const getEasing = () => {
    switch (ease) {
      case 'easeOut':
        return [0.25, 0.46, 0.45, 0.94]
      case 'easeIn':
        return [0.55, 0.055, 0.675, 0.19]
      case 'easeInOut':
        return [0.645, 0.045, 0.355, 1]
      case 'bounce':
        return [0.68, -0.55, 0.265, 1.55]
      default:
        return [0.25, 0.46, 0.45, 0.94]
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      className={`animate-smooth ${className}`}
      initial={getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: getEasing()
      }}
    >
      {children}
    </motion.div>
  )
}
