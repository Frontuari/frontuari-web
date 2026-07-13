/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#24588D', // Azul Pantone 2945 U
          hover: '#1d4875',
        },
        secondary: '#000000', // Negro
        complementary: {
          DEFAULT: '#A9ABAC', // Gris Pantone Cool Gray 5 CP
          light: '#F3F4F6', // Fondo alterno limpio
        }
      },
      fontFamily: {
        // Fallback a Montserrat si Homizio no se carga localmente
        heading: ['Homizio Regular', 'Montserrat', 'sans-serif'],
        body: ['Mulish', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};