/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1EFEF",
        secondary: "#CCC8AA",
        tertiary: "#191717",
      },
      screens: {
        sm: "480px",
        md: "780px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
