'use client'

import { motion } from 'framer-motion'

interface PageLoaderProps {
  isLoading?: boolean
}

export const PageLoader = ({ isLoading = false }: PageLoaderProps) => {
  if (!isLoading) return null

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className='relative'>
        {/* Main loading circle */}
        <motion.div
          animate={{ rotate: 360 }}
          className='w-16 h-16 border-4 border-primary/20 rounded-full'
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner loading circle */}
        <motion.div
          animate={{ rotate: -360 }}
          className='absolute inset-2 border-4 border-primary border-t-transparent rounded-full'
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />

        {/* Loading text */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className='mt-4 text-center'
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
        >
          <p className='text-sm text-foreground/70 font-medium'>Loading...</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Simple loading spinner for smaller components
export const LoadingSpinner = ({
  size = 'md'
}: {
  size?: 'sm' | 'md' | 'lg'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      className={`${sizeClasses[size]} border-2 border-primary/20 border-t-primary rounded-full`}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  )
}

// Skeleton loading component
export const Skeleton = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      className={`bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  )
}

// Pulse loading animation
export const PulseLoader = () => {
  return (
    <div className='flex space-x-2'>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.2, 1] }}
          className='w-2 h-2 bg-primary rounded-full'
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}
