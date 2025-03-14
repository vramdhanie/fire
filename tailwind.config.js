/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['EB Garamond', 'Cormorant Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'decorative': ['Cinzel Decorative', 'serif'],
        'script': ['Tangerine', 'cursive'],
      },
      colors: {
        'parchment': {
          light: '#f9f5e9',
          DEFAULT: '#f5ebda',
          dark: '#e8d9bd',
        },
        'ink': {
          light: '#483C32',
          DEFAULT: '#2e2418',
          dark: '#1e170f',
        },
        'illumination': {
          gold: '#d4af37',
          red: '#872729',
          blue: '#344168',
        },
      },
      boxShadow: {
        'page': '0 2px 6px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.1)',
        'inner-page': 'inset 0 0 10px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
