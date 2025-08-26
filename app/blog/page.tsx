'use client'

import { title } from '@/components/primitives'
import { PageTransition, FadeInUp } from '@/components/animations'

export default function BlogPage() {
  return (
    <PageTransition>
      <div className='space-y-8'>
        <FadeInUp delay={0.1}>
          <h1 className={title()}>Blog</h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className='prose dark:prose-invert max-w-none'>
            <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
              Welcome to my blog where I share insights about software
              development, technology trends, and my experiences building
              scalable applications.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className='bg-[#F9F9F9] dark:bg-[#171D27] rounded-lg p-6'>
            <h2 className='text-xl font-bold mb-4 font-rubik'>Coming Soon</h2>
            <p className='text-gray-600 dark:text-gray-300'>
              I&apos;m working on some interesting articles about:
            </p>
            <ul className='mt-4 space-y-2 text-gray-600 dark:text-gray-300'>
              <li>• Microservices architecture best practices</li>
              <li>• AI/ML integration in modern applications</li>
              <li>• Performance optimization techniques</li>
              <li>• Building scalable backend systems</li>
            </ul>
          </div>
        </FadeInUp>
      </div>
    </PageTransition>
  )
}
