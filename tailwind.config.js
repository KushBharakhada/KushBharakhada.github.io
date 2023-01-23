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
      },

      animation: {
        fade: "fade 2s ease-in forwards"
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0, filter: "blur(1px)" },
          "100%": { opacity: 1, filter: "blur(0)" }
        }
      }
    },
  },
  plugins: [],
}
