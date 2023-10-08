/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 5px 40px 0px rgba(0, 0, 0, 0.05), 0px 5px 30px 0px rgba(0, 0, 0, 0.05), 0px 5px 20px 0px rgba(0, 0, 0, 0.10)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
      },
      screens: {
        md: { max: "1520px" },
        lg: { max: "1120px" },
        sr: { max: "640px" },
        xg: { max: "390px" },
      },
      colors: {
        secondaryColor: "#e5b727",
      },
    },
  },
  plugins: [],
};
