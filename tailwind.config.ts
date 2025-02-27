export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#6F8B32",
      secondary: "#FFAD63",
      white: "#FFF",
      black: "#000",
    },
    fontFamily: {
      sans: ["PT Serif", "serif"],
    },
    extend: {
      fontSize: {
        base: "16px",
      },
      lineHeight: {
        base: "1.5",
      },
      fontWeight: {
        regular: "400",
      },
      animation: {
        slide: "slide 1s ease-in-out",
        stretch: "stretch 1s ease-out",
      },
    },
  },
  plugins: [],
};
