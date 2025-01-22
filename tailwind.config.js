/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        brandDark: '#1F2937',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

