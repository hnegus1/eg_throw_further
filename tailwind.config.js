const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        green: {
          light: '#52D98D',
          lighter: '#80E7AD',
          DEFAULT: '#0BC25B',
          dark: '#0BC25B',
          darker: '#009B43'
        },
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
        pink: {
          light: '#d7519d',
          lighter: '#E57CB7',
          DEFAULT: '#CB3088',
          dark: '#BE096F',
          darker: '#910353'
        }
      },
      typography: (theme) => ({
        DEFAULT : {
          css: [
            {
              img: {
                width: "100%"
              }
            }
          ]
        },
        light: {
          css: [
            {
              body: {
                backgroundColor: theme('colors.gray.800')
              },
              color: theme('colors.gray.400'),
              '[class~="lead"]': {
                color: theme('colors.gray.300'),
              },
              a: {
                color: theme('colors.white'),
              },
              strong: {
                color: theme('colors.white'),
              },
              'ol > li::before': {
                color: theme('colors.gray.400'),
              },
              'ul > li::before': {
                backgroundColor: theme('colors.gray.600'),
              },
              hr: {
                borderColor: theme('colors.gray.200'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.gray.600'),
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.white'),
              },
              h4: {
                color: theme('colors.white'),
              },
              'figure figcaption': {
                color: theme('colors.gray.400'),
              },
              code: {
                color: theme('colors.white'),
              },
              'a code': {
                color: theme('colors.white'),
              },
              pre: {
                color: theme('colors.gray.200'),
                backgroundColor: theme('colors.gray.800'),
              },
              thead: {
                color: theme('colors.white'),
                borderBottomColor: theme('colors.gray.400'),
              },
              'tbody tr': {
                borderBottomColor: theme('colors.gray.600'),
              },
              img: {
                width: "100%"
              }
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
