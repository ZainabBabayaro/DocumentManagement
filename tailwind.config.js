/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
        'sans': ['Open Sans'],
      }
    
    },
  },
  // plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
}

