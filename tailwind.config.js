export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      fontSize: {
        responsive: "clamp(32px, 2.05vw + 18px, 64px)",
      },
    },
  },
  plugins: [],
};
