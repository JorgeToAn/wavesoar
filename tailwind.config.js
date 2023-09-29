/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Kanit, sans-serif',
      },
      colors: {
        dark: '#0d272e',
        light: '#cfdee7',
        primary: {
          100: '#b2c5e9',
          200: '#9fb7e4',
          300: '#87A5dd',
          400: '#698ed5',
          500: '#4472ca',
          600: '#365ba2',
          700: '#2b4982',
          800: '#223a68',
          900: '#1b2e53',
        },
        secondary: '#92b4f4',
        accent: '#5e7ce2',
      }
    },
  },
  plugins: [],
}

