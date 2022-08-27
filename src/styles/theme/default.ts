import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        transition: 'top 1s ease-in-out',
      },
    },
    breakpoints: ['37.4375em', '37.5em', '56.25em', '75em', '112.5em'],
  },
}

// 3. extend the theme
export const theme = extendTheme({ config })
