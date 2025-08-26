import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

// Animation variants for different effects
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const fadeIn: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

// Reusable animation components
export const FadeInUp = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    animate='animate'
    className={className}
    initial='initial'
    transition={{ delay }}
    variants={fadeInUp}
  >
    {children}
  </motion.div>
)

export const FadeIn = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    animate='animate'
    className={className}
    initial='initial'
    transition={{ delay }}
    variants={fadeIn}
  >
    {children}
  </motion.div>
)

export const SlideInLeft = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    animate='animate'
    className={className}
    initial='initial'
    transition={{ delay }}
    variants={slideInLeft}
  >
    {children}
  </motion.div>
)

export const SlideInRight = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    animate='animate'
    className={className}
    initial='initial'
    transition={{ delay }}
    variants={slideInRight}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({
  children,
  delay = 0,
  className = ''
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => (
  <motion.div
    animate='animate'
    className={className}
    initial='initial'
    transition={{ delay }}
    variants={scaleIn}
  >
    {children}
  </motion.div>
)

// Scroll-triggered animation wrapper
export const ScrollAnimation = ({
  children,
  className = '',
  once = true
}: {
  children: ReactNode
  className?: string
  threshold?: number
  once?: boolean
}) => (
  <motion.div
    className={className}
    initial='initial'
    variants={fadeInUp}
    viewport={{ once }}
    whileInView='animate'
  >
    {children}
  </motion.div>
)

// Page transition wrapper
export const PageTransition = ({
  children,
  className = ''
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    className={className}
    exit={{ opacity: 0, y: -20 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
  >
    {children}
  </motion.div>
)
