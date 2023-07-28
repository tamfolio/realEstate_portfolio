/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        "manrope": ["Manrope",'sans-serif']
      },
    },
  },
  plugins: [],
}
