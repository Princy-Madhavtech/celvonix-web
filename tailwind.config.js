/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#64FF0A", // nion green
          200: "#151515", // dark grey
          300: "#55E600", // hover nion green
        },
        // black: {
        //   100: "#27364B",
        // },
        text_color: {
          100: "#949494",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"],
        serif: ['"DM Serif Text"', "serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(101.31deg, #242529 0%, #3A3B3D 90%)",

        "radial-gradient": "linear-gradient(90deg, #02297A, #2182C9",
        "gradient-custom":
          "linear-gradient(99.67deg, #0072B3 0.22%, #01408C 101.28%)",
      },
      
    },
  },
  plugins: [],
};
