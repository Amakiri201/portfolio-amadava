/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#222222',
          secondary: '#7B7B7B',
          tertiary: '#F8F8F8',
          white: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}

