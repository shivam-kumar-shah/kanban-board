/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        surface: "rgb(244, 247, 253)",
        "card-surface": "rgb(255, 255, 255)",
        "font-primary": "rgb(0, 1, 18)",
        "font-secondary": "rgb(130, 143, 163)",
        primary: "rgb(99, 95, 199)",
        "dark-surface": "rgb(32, 33, 44)",
        "dark-card-surface": "rgb(43, 44, 55)",
        "dark-font-primary": "rgb(255, 255, 255)",
        "dark-font-secondary": "rgb(130, 143, 163)",
        "dark-primary": "rgb(99, 95, 199)",
      },
    },
  },
  plugins: [],
};
