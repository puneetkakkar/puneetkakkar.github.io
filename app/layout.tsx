import '@/styles/globals.css'
import clsx from 'clsx'
import { Metadata, Viewport } from 'next'

import { Providers } from './providers'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body
        className={clsx('min-h-screen bg-background font-sans antialiased')}
      >
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'dark',
            children: children
          }}
        >
          <div className='relative flex flex-col bg-[#eef0f4] dark:bg-[#07090e]'>
            <Navbar />
            <main className='w-full px-6 sm:px-20 lg:px-38 xl:px-56 2xl:px-[22%] pt-16 flex-grow'>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
