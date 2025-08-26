'use client'

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar
} from '@nextui-org/navbar'
import { link as linkStyles } from '@nextui-org/theme'
import clsx from 'clsx'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { ThemeSwitch } from '@/components/theme-switch'
import { siteConfig } from '@/config/site'

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const Navbar = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <NextUINavbar
        className='bg-[#eef0f4] dark:bg-[#07090e] sm:px-20 lg:px-38 xl:px-56 2xl:px-[22%] bg-opacity-40 dark:bg-opacity-40'
        classNames={{ wrapper: 'md:px-0' }}
        maxWidth='full'
        position='sticky'
      >
        <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <NavbarBrand as='li' className='gap-3 max-w-fit'>
              <NextLink
                className='flex justify-start items-center gap-1 font-rubik text-xl font-extrabold text-transparent dark:bg-white bg-blue-700 bg-clip-text'
                href='/'
              >
                Puneet Kakkar
              </NextLink>
            </NavbarBrand>
          </motion.div>
        </NavbarContent>

        <NavbarContent
          className='hidden sm:flex basis-1/5 sm:basis-full'
          justify='end'
        >
          <motion.div
            animate='visible'
            className='hidden sm:flex gap-4 justify-start ml-2'
            initial='hidden'
            variants={staggerContainer}
          >
            {siteConfig.navItems.map((item) => (
              <motion.div key={item.href} variants={navItemVariants}>
                <NavbarItem>
                  <NextLink
                    className={clsx(
                      linkStyles({ color: 'foreground' }),
                      'data-[active=true]:text-primary data-[active=true]:font-medium font-rubik text-sm m-2 transition-all duration-300 hover:scale-105'
                    )}
                    color='foreground'
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NavbarItem className='hidden sm:flex gap-2'>
              <ThemeSwitch />
            </NavbarItem>
          </motion.div>
        </NavbarContent>

        <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ThemeSwitch />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NavbarMenuToggle />
          </motion.div>
        </NavbarContent>

        <NavbarMenu className='bg-[#eef0f4] dark:bg-[#07090e] bg-opacity-40 dark:bg-opacity-40'>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className='mx-4 mt-2 flex flex-col gap-2'
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {siteConfig.navItems.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <NavbarMenuItem>
                  <NextLink
                    className='transition-all duration-300 hover:scale-105'
                    color={index === 0 ? 'primary' : 'foreground'}
                    href={item.href}
                    target={item.target}
                  >
                    {item.label}
                  </NextLink>
                </NavbarMenuItem>
              </motion.div>
            ))}
          </motion.div>
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  )
}
