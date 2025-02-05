export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1E293B",
      secondary: "#FACC15",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
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
