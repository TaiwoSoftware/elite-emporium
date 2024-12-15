/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        juraFont: ["jura", "sans-serif"],
        metropolisFont: ["metropolis", "sans-serif"],
        inter: ["inter", "sans-serif"]
      },
      colors: {
        navbarGray: "#EAEAEA",
        buttonWine: "#5F2244",
        searchBorder: "#212121",
        lighterBrown: "#C69264",
        lighterDark: "#030305",
        belowGray: "#484646",
        categoriesGray: "#f5f5f5"
      },
    },
  },
  plugins: [],
};
