/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        verde: "#42b72a",
        hover: "#36a420",
        linkAciteve: "#737373",
        links: "#8a8d91",
        botonMas: "#f5f6f7",
        botonMasHover: "#ebedf0",
      },

      maxWidth: {
        990: "990px",
      },
      screens: {
        pantalla: "990px",
      },
    },
  },
  plugins: [],
};
