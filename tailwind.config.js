/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2b9de6',
        primaryDark: '#124175',
        darkGray: '#1a1f25',
        lightGray: '#272c35',
        brandDark: '#1a1f25',
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

