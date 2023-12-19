/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },

      colors: {
        background: "#fff",
        primary: "#8BC53F",
        secondary: "#000",
      },
    },
  },
  plugins: [],
};
