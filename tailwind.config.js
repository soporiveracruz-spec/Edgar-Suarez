/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        corp: {
          navy: "#001F3F",
          orange: "#FF851B",
          green: "#2ECC40",
          slate: "#7F8C8D",
          violet: "#B10DC9",
        },
      },
    },
  },
  plugins: [],
};
