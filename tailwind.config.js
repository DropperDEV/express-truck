/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Inter, monospace" },
    extend: {
      colors: {
        blue: {
          1000: "#084F96;",
          1100: "#07488A",
        },
        violet: {
          1000: "#5F22D8",
        },
      },
    },
  },
  plugins: [],
};
