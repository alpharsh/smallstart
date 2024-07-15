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
        custom2: '0 24px 72px 0 rgb(163 57 57 / 25%)',
      },
      colors: {
        'custom-gray': 'rgba(107, 114, 128, 0.3)',
      },
    },
  },
  plugins: [],
}

