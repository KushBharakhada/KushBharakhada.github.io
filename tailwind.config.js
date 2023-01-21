/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "body": "#17171F",
        "theme": "#ADD8E6"
      },
      screens: {
        "sm":"420px"
      }
    },
  },
  plugins: [],
}
