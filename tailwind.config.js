/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'med-light-magenta': '#bd96c5',
        'cyan-blue': '#6d8dc4',
        'light-cyan-blue': '#a9b9d4',
        'behr-debonair-blue': '#d7dfe7',
        'very-light-brown': '#ece4da',
        'dark-green': '#1b401f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

