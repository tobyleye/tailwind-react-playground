const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js"],
  },
  theme: {
    fontFamily: {
      sans: ["'Open Sans'", ...fontFamily.sans],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
