/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",     
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#64FF0A", // nion green
          200: "#242529", // dark grey
        },
        white: {
          100: "#FFFFFF"
        },
        black: {
          100: "#27364B",
        },
        text_color: {
          100: "#949494",
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
        serif: ['"DM Serif Text"', 'serif'], 
      }, 
    },
  },
  plugins: [],
};
