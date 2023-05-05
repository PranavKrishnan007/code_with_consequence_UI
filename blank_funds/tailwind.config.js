const { m } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: '#FEFCF3',
      tertiary: '#F5EBE0',
      secondary: '#F0DBDB',
      primary: '#DBA39A',
    },
    extend: {dropShadow: {
        '3xl': '0px 0px 90px rgba(192, 141, 93,0.4)',
        '2xl': '0px 0px 60px rgba(192, 141, 93,0.4)'
        
      }},
    fontFamily: {
      monteserrat: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}