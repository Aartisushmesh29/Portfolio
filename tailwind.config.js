/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
   
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 4s steps(20, end) forwards, blink .75s step-end infinite',
      },
      boxShadow: {
        'custom-light': '0 4px 6px -1px rgba(59, 130, 246, 0.1)'
    },
  },
  plugins: [],
}}

