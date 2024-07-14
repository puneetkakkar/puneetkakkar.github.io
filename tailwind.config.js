import { nextui } from '@nextui-org/theme'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    // screens: {
    //   sm: [{ min: '640px' }, { min: '768px', max: '974px' }],

    //   md: { min: '975px', max: '1023px' },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   lg: { min: '1024px', max: '1279px' },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   xl: { min: '1280px', max: '1535px' },
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': { min: '1536px' }
    // },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
        // border: "background ease infinite",
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
