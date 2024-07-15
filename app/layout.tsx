import '@/styles/globals.css'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import clsx from 'clsx'
import { Metadata, Viewport } from 'next'
import NextLink from 'next/link'

import { Providers } from './providers'

import {
  DiscordIcon,
  GithubIcon,
  LinkedInIcon,
  RedditIcon
} from '@/components/icons'
import { Navbar } from '@/components/navbar'
import { siteConfig } from '@/config/site'
import { Link } from '@nextui-org/link'

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
            <main className='w-full px-6 sm:px-20 lg:px-38 xl:px-56 2xl:px-96 pt-16 flex-grow'>
              {children}
            </main>
            <footer className='w-full flex flex-col py-3 dark:bg-[#171D27] bg-[#171D27]'>
              <div className='flex flex-col px-6 sm:px-20 lg:px-38 xl:px-56 2xl:px-96 flex-grow'>
                <div
                  className='flex flex-col sm:flex-row md:items-center justify-between w-full mt-14 mb-10 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)] py-6 px-8 rounded-xl'
                  id='contact'
                >
                  <div className='mb-5 sm:w-8/12 lg:w-6/12 lg:mr-10'>
                    <div className='font-rubik font-extrabold sm:text-lg mb-2 text-white'>
                      Let&apos;s Connect and Create Something Amazing!
                    </div>
                    <div className='font-inter text-xs text-white'>
                      Interested in my work and wanna work together? Reach out
                      to me for collaborations, inquiries, or just to say hello
                    </div>
                  </div>
                  <div className='flex items-center justify-start sm:justify-center'>
                    <Button
                      as={NextLink}
                      className='font-normal font-inter rounded-md px-10 bg-gray-200 text-[#363636]'
                      color='primary'
                      href='/'
                      variant='flat'
                    >
                      Reach out
                    </Button>
                  </div>
                </div>
                <Divider className='dark: bg-gray-700' />
                <div className='flex flex-row items-center w-full gap-4 sm:gap-2 mt-8 mb-5'>
                  <div className='text-xs font-inter text-[#818181] w-3/12 sm:w-3/12'>
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
                  <div className='text-xs font-inter text-[#818181] text-center w-6/12 sm:w-6/12'>
                    &copy; 2024 Puneet Kakkar. All Rights Reserved.
                  </div>
                  <div className='flex flex-row items-center justify-end w-3/12 sm:w-3/12'>
                    <Link
                      isExternal
                      showAnchorIcon
                      href='https://discord.com/users/717601845119549490'
                      anchorIcon={
                        <DiscordIcon
                          className='mx-1 text-gray-300 cursor-pointer'
                          size={18}
                        />
                      }
                    ></Link>

                    <Link
                      isExternal
                      showAnchorIcon
                      href='https://github.com/puneetkakkar'
                      anchorIcon={
                        <GithubIcon
                          className='mx-1 text-gray-300 cursor-pointer'
                          size={18}
                        />
                      }
                    ></Link>

                    <Link
                      isExternal
                      showAnchorIcon
                      href='https://www.linkedin.com/in/puneet-kakkar/'
                      anchorIcon={
                        <LinkedInIcon
                          className='mx-1 dark:fill-white fill-gray-300 cursor-pointer'
                          size={18}
                        />
                      }
                    ></Link>

                    <Link
                      isExternal
                      showAnchorIcon
                      href='https://www.reddit.com/user/Binary_Explorer/'
                      anchorIcon={
                        <RedditIcon
                          className='mx-1 dark:fill-white fill-gray-300 cursor-pointer'
                          size={16}
                        />
                      }
                    ></Link>
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
