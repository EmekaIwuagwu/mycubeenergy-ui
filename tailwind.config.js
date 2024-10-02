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
      },
      fontFamily: {
        'tt-commons': ['TT Commons', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

