/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': 'hsl(217, 12%, 63%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',

        'translucent-black': 'rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        'theme-orbitron': ['Orbitron', 'sans-serif'],
        'theme-oxanium': ['Oxanium', 'sans-serif'],
      },
      backgroundImage: {
        'custom-background' : "url('/mesh-609.png')",
      },
      screens: {
        'custom-xl' : '1200px',
        'custom-lg' : '900px',
        'custom-md' : '850px',
        'custom-sm' : '440px',
      },
    },
  },
  plugins: [],
}

