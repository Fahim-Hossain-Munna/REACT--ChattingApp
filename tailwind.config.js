/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#5F35F5',
      },
      screens: {
        'sm': '375px',
        // => @media (min-width: 375px) { ... }
        'sml': '415px',
        // => @media (min-width: 415px) { ... }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
    
  ],
}
