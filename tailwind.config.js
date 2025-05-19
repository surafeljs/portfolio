/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
        " xl": "1200px",
        " lg": "992px",
        " md": "768px",
        " sm": "576px",
      },
    },
  },
  plugins: [],
};
