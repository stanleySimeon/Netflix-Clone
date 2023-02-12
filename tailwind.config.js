/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nayanika: ['Nayanika', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        netflix: {
          red: '#E50914',
          redDark: '#B20710',
          gray: '#EAECED',
          white: '#FFFFFF',
          black: '#000000',
        },
      },
      container: {
        center: true,
        width: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  /* eslint-disable global-require */
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
