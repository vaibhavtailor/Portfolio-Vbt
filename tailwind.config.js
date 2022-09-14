/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Components/About.js",
    "./src/Components/Contact.js",
    "./src/Components/Home.js",
    "./src/Components/Navbar.js",
    "./src/Components/Projects.js",
    "./src/Components/Skills.js"],
  theme: {
    extend: {
      transitionProperty: {
        'right': 'right',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  animation: {
    underline: "1.5s ease-in-out infinite"
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
