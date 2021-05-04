const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        otgogreen: {
          light: '#b4d55f',
          medium: '#4c9342',
          dark: '#3f421b',
        },
        otgopurple: {
          light: '#692f65',
          dark: '#4e2688',
        },
        otgoorange: {
          light: '#f9a415',
          dark: '#f68722',
        },
        otgored: '#b42025',
        otgoyellow: '#ffd744',
        otgowhite: '#fdfdfd',
        otgoblack: '#212121',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        title: 'min(6.7vw, 144px)',
      },
      fontFamily: {
        serif: ['Lilita One', ...defaultTheme.fontFamily.serif],
        sans: ['Cabin', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        otgo: '0px 0px 100px 90px #fdfdfd',
      },
    },
  },
}
