export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Puneet Kakkar | Portfolio',
  description: 'Portfolio',
  navItems: [
    {
      label: 'Discover',
      href: '#projects',
      target: '_self'
    },
    {
      label: 'Contact',
      href: '#contact',
      target: '_self'
    },
    {
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1dy1vBtJuPXW2GX4On0l_kLaV__iSA6Ad/view?usp=sharing',
      target: '_blank'
    }
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile'
    },
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Team',
      href: '/team'
    },
    {
      label: 'Calendar',
      href: '/calendar'
    },
    {
      label: 'Settings',
      href: '/settings'
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback'
    },
    {
      label: 'Logout',
      href: '/logout'
    }
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev'
  }
}
