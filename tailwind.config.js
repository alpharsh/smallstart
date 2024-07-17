/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-alternates': ['"Montserrat Alternates"', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 24px 72px 0 rgb(115 104 104 / 25%)',
      },
      colors: {
        'custom-gray': 'rgba(107, 114, 128, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
      },
    },
  },
  plugins: [],
}

