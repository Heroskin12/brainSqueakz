/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        "primary-dark-green": "#757024",
        "primary-pink": "#B73869",
        "primary-white": "#F8E8ED",
        "primary-black": "#2A2B2E",
        "primary-accent": "#67902C",
        "primary-grey": "hsl(240, 6%, 38%, 30%)",
        "thin-border": "rgba(255, 255, 255, 0.1)",
        "primary-black-trans": "hsl(225, 5%, 25%)",
      },
    },
  },
  plugins: [],
};
