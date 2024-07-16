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

import { ThemeSwitch } from '@/components/theme-switch'
import { siteConfig } from '@/config/site'

export const Navbar = () => {
  return (
    <NextUINavbar
      className='bg-[#eef0f4] dark:bg-[#07090e] sm:px-20 lg:px-38 xl:px-56 2xl:px-[22%] bg-opacity-40 dark:bg-opacity-40'
      classNames={{ wrapper: 'md:px-0' }}
      maxWidth='full'
      position='sticky'
    >
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink
            className='flex justify-start items-center gap-1 font-rubik text-xl font-extrabold text-transparent dark:bg-white bg-blue-700 bg-clip-text'
            href='/'
          >
            Puneet Kakkar
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <ul className='hidden sm:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: 'foreground' }),
                  'data-[active=true]:text-primary data-[active=true]:font-medium font-rubik text-sm m-2'
                )}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className='hidden sm:flex gap-2'>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className='bg-[#eef0f4] dark:bg-[#07090e] bg-opacity-40 dark:bg-opacity-40'>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                color={index === 0 ? 'primary' : 'foreground'}
                href={item.href}
                target={item.target}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
