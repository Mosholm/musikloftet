module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
colors: {
  // white: "#C5C9D6",
  // secondary: "#5D5D81",
  primary: "#4C486B",
  accent:"454161",
  // dark:"343149"
}

    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
