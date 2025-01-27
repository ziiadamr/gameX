/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': '#FBF9F6',  // هنا تضيف اللون بتاعك
        'mute': '#B4B4B4',  // هنا تضيف اللون بتاعك
      }
    },
  },
  plugins: [],
}