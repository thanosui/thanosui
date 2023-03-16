const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'bg-neutral': colors.neutral[500],
        'bg-primary': colors.blue[500],
        'bg-secondary': colors.purple[500],
        'bg-success ': colors.green[500],
        'bg-warning ': colors.yellow[500],
        'bg-danger ': colors.red[500],
    },
    extend: {
    },
  },
  plugins: [],
};
