module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "red",
          secondary: "#f6d860",
          accent: "red",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
     
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
