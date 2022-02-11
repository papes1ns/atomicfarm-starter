const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: ["hover", "focus"],
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "uf-pastel-green": "#c8dfcc",
        "uf-celadon-green": "#c9df9e",
        "uf-lime-green": "#abd26c",
        "uf-light-green": "#2ca858",
        "uf-green": "#08874b",
        "uf-dark-green": "#00463c",
        "uf-blue": "#52b0c9",
        "uf-yellow": "#fdc713",
        "uf-orange": "#f28f40",
        "uf-red-orange": "#ef4f24",
        "uf-red": "#d6434c",
        "uf-maroon": "#b01e52",
        "uf-cherry-red": "#860d38",
        "uf-purple": "#7b2f73",
        "uf-black": "#221f20",
        "uf-gray": "#929396",
        "uf-light-gray": "#dedfe0",
      },
    },
  },
  variants: {},
  plugins: [],
};
