/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubil-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
      },
      colors: {
        "primary" :{
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF',
          400: '#003366',
          // "100": "#E6F0FF",
          // "200": "#B3D6FF",
          // "300": "#80BDFF",
          // "400": "#4DA3FF",
          // "500": "#1A8AFF",
          // "600": "#0066CC",
          // "700": "#004C99",
          // "800": "#003366",
          // "900": "#001A33",
        },
        accent : {
          100: '#FBFBFD',
          200: '#F4F4F8',
        },
        black: {
            DEFAULT: "#000000",
            100: '#8CC8E98',
            200: '#666876',
            300: '#191D31',
        },
        danger: '#F75555'
      },
    },
  },
  plugins: [],
}