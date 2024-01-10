/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '#1C1E53':'#1C1E53',
        '#BBBBCB':'#BBBBCB',
        '#282938':'#282938'
      }
    },
  },
  plugins: [],
}