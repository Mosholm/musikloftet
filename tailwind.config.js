module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#183599",
      orange: "#FBB539",
      dark: "#000929",
      light: "#F5F8FF",
    },
    screen: {
      mobil: "960px",
      desktop: "1248px",
    },

    fontsize: {
      header: ["144px", { lineHeight: "170px" }],
    },

    fontFamily: {
      Futura: [futura - pt, sans - serif],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
