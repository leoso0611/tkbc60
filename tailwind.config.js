module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ['"Noto Sans TC"', "sans-serif"],
      },
      colors: {
        primary: "#1B252F",
        secondary: "#F2F0E4",
        primaryBackground: "#FAF8F1",
        mobilemenutab: "#20438E",
        copyrighttext: "#174092",
        wire: "#918D7B",
        disabled: "#918D7B",
        media: "#0065B9",
        zothers: "#F2434C",
        drawing: "#F2DA08",
        calligraphy: "#B2D81F",
        sound: "#5F5F5F"
      },
      rotate: {
        360: "360deg",
      },
      gridTemplateColumns: {
        list: "repeat(auto-fill, minmax(150px, 1fr));",
        mobile_list: "repeat(auto-fill, minmax(100px, 1fr));",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
