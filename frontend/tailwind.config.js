/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}","./index.html"],
  theme: {
    extend: {
      display:["group-hover"]
    },
  },
  plugins: [ require('daisyui'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
}

