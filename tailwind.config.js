/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBG: '#C4D5C5',
        textColor: '#162607',
        darkBG: '#6F8E74',
        },
    },
  plugins: [],
  }
  
}
