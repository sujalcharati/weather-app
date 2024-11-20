/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'weather-pattern': "url('https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D')",
        },
      },
    },
  plugins: [],
}

