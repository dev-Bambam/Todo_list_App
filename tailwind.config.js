/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html"],
  theme: {
    extend: {
      colors:{
        // primary 

        brightBlue: 'hsl(220, 98%, 61%)',
        checkBg: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',

        // Neutral

          // Light theme
          veryLG: 'hsl(0, 0%, 98%)',
          veryLGB: 'hsl(236, 33%, 92%)',
          lightGB: 'hsl(233, 11%, 84%)',
          darkGB: 'hsl(236, 9%, 61%)',
          veryDarkGB: 'hsl(235, 19%, 35%)',

          // Dark Theme
          veryDarkB: 'hsl(235, 21%, 11%)',
          veryDarkDesaturatedB: 'hsl(235, 24%, 19%)',
          lightGB_dark: 'hsl(234, 39%, 85%)',
          lightGB_dark_hover: 'hsl(236, 33%, 92%)',
          darkGB_dark: 'hsl(234, 11%, 52%)',
          veryDarkGB_dark: 'hsl(233, 14%, 35%)'

      }
    },
  },
  plugins: [],
}

