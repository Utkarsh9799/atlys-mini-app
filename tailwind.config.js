/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#C5C7CA',
        'subtitle': '#6B6C70'
      }
    },
  },
  plugins: [],
}