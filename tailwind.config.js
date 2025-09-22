// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode with the 'class' strategy
  theme: {
    extend: {
      colors: {
        background: "white", // Define custom colors
        text: "black",
      },
    },
  },
  plugins: [],
};
