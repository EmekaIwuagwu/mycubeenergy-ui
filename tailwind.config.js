/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#666666',
        'custom-green': '#8EBC68',
        'custom-black': '#070707',
        'light-green': '#EDF8E5',
        'deep-green': '#204601',
        'mid-green': '#8EBC68',
        'custom-orange': '#F4C63C',
        'deep-gray' : '#979797',
      },
      fontFamily: {
        'tt-commons': ['TT Commons', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

