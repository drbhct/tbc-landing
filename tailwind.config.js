/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0D1B2A",
          800: "#1B263B",
          700: "#2a3f5f",
        },
        gold: "#D4AF37",
        gunmetal: "#415A77",
        storm: "#778DA9",
        copper: "#C26E36",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
