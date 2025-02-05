export default {
  content: [
    "./index.html", // Add your paths here where Tailwind classes are used
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"], // Replace with your desired custom font
        header: ["CustomFont", "sans-serif"], // Replace with your custom font for headers
      },
    },
  },
  plugins: [],
};
