/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/js/**/*.js",
      'node_modules/flowbite-react/lib/esm/**/*.js',
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/js/**/*.js"
    ],
    theme: {
      extend: {},
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    darkMode: "class",
    plugins: [require("tw-elements/plugin.cjs",'flowbite/plugin')]
  }