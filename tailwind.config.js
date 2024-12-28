/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include all file extensions you're using
  ],
  
  theme: {
    extend: {},
    fontFamily: {
      custom: ['"Inknut Antiqua"', 'ui-serif', 'Georgia', 'serif'], // Customize as needed
    },
  },
  plugins: [],
}

