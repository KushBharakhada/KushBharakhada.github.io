/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        "website-text-theme": "white",
        "website-background": "black",
        "project-background-theme": "#111827",
        "project-hover-theme": "#1e293b",
        "project-border": "#202c45",
        "project-descrption-theme": "#8490ab",
        "project-language-text-theme": "white",
        "javascript": "#5c0610",
        "java": "#ad0014",
        "python": "#00446b",
        "haskell": "#9c4600",
        "html": "#45014a",
        "css": "#858712",
        "ruby": "#4a0101",
        "other": "#770180",
        "github-public": "#006b20",
        "github-private": "#400a0a"
      },

      backgroundImage: {
        "neural-net-nav": "url('/images/neural-network-background.jpg')"
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
