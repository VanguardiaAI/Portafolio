/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
        black: '#000000',
        white: '#FFFFFF',
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #00C6FF, #0072FF)',
        'gradient-accent': 'linear-gradient(45deg, #FF69B4, #FF1493)',
      },
    },
  },
  plugins: [],
} 