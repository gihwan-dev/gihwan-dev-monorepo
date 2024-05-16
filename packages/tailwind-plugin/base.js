const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    "*": {
      boxSizing: "border-box",
      position: "relative",
      minWidth: "0",
    },
    body: {
      minHeight: "100dvh",
    },
    "h1, h2, h3, h4": {
      textWrap: "balance",
    },
    p: {
      textWrap: "pretty",
    },
  });
});
