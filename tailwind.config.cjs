/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0072FF',
          dark: '#00C6FF',
        },
        accent: {
          DEFAULT: '#FF1493',
          light: '#FF69B4',
        },
      },
    },
  },
  plugins: [],
} 