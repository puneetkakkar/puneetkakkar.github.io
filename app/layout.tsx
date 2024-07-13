import '@/styles/globals.css'
import clsx from 'clsx'
import { Metadata, Viewport } from 'next'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import NextLink from 'next/link'

import { Providers } from './providers'

import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon
} from '@/components/icons'
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
            <main className='container mx-auto max-w-6xl pt-16 px-6 flex-grow'>
              {children}
            </main>
            <footer className='w-full flex flex-col py-3 dark:bg-[#171D27] bg-[#171D27]'>
              <div className='flex flex-col container mx-auto max-w-5xl px-6 flex-grow'>
                <div
                  className='flex items-center justify-between w-full mt-14 mb-10 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)] py-6 px-8 rounded-xl'
                  id='contact'
                >
                  <div className='sm:w-8/12 lg:w-6/12 mr-10'>
                    <div className='font-rubik font-extrabold sm:text-lg mb-2 text-white'>
                      Let&apos;s Connect and Create Something Amazing!
                    </div>
                    <div className='font-rubik text-xs text-white'>
                      Interested in my work and wanna work together? Reach out
                      to me for collaborations, inquiries, or just to say hello
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Button
                      as={NextLink}
                      className='font-normal font-rubik rounded-md px-10 bg-gray-200 text-[#363636]'
                      color='primary'
                      href='/'
                      variant='flat'
                    >
                      Reach out
                    </Button>
                  </div>
                </div>
                <Divider className='dark: bg-gray-700' />
                <div className='flex flex-row w-full mt-8 mb-5'>
                  <div className='text-xs font-rubik text-[#818181] w-5/12'>
                    Created by{' '}
                    <a className='dark:text-white text-gray-300' href='/'>
                      @puneetkakkar
                    </a>{' '}
                    &
                    <a
                      className='dark:text-white text-gray-300'
                      href='http://www.abgautam.com/'
                    >
                      {' '}
                      @abgautam
                    </a>
                  </div>
                  <div className='text-xs font-rubik text-[#818181] w-6/12'>
                    &copy; 2024 Puneet Kakkar. All Rights Reserved.
                  </div>
                  <div className='flex flex-row items-center'>
                    <DiscordIcon
                      className='mx-1 text-gray-300 cursor-pointer'
                      href='https://discord.com/users/717601845119549490'
                      size={18}
                    />
                    <GithubIcon
                      className='mx-1 text-gray-300 cursor-pointer'
                      href='https://github.com/puneetkakkar'
                      size={18}
                    />
                    <LinkedInIcon
                      className='mx-1 dark:fill-white fill-gray-300 cursor-pointer'
                      href='https://www.linkedin.com/in/puneet-kakkar/'
                      size={18}
                    />
                    <InstagramIcon
                      className='mx-1 dark:fill-white fill-gray-300 cursor-pointer'
                      href='https://www.instagram.com/puneet_kakkar/'
                      size={16}
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}

// sm:px-16 md:px-24 lg:px-56
