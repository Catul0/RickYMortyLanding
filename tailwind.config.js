/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        '1/5': '20%',
      }
    },
  },
  plugins: [],
}

