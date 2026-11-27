/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,js,ts,jsx,tsx}",
    "./src/**/*.astro",
  ],
  theme: {
    extend: {
      colors: {
        xelvon: {
          green: "#286B31",
          "green-hover": "#225a2a",
          "green-light": "#e9f2eb",
          lime: "#B0DA19",
          "lime-hover": "#9ec415",
          "lime-light": "#f4fbdb",
          bg: "#F3F5F1",
          border: "#D9DFD6",
          dark: "#111111",
          muted: "#666666",
          subtle: "#888888",
        },
      },
      fontFamily: {
        heading: ["'Source Sans 3'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      screens: {
        xs: "390px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
