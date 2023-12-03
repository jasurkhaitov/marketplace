/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx, ts, tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      mlg: "1200px",
      xl: "1440px",
      xxl: "1536px",
      exl: "1700px",
      exxl: "1800px"
    },

    container: {
      padding: {
        lg: "30px",
      },
    },

    extend: {

      colors: {
        globalBlack: "#171515",
        blackLogoColor: "#292D32",
        gray: "#999999",
        globalGreen: "#00B709",
        FgrayWhite: "#FAFAFA",
        BorderColor: '#ECECEC',
      },

      fontFamily: {
        work: ["Raleway"],
      },

      fontSize: {
        logo: [
          "34px",
          {
            lineHeight: "51px",
            fontWeight: "700",
            letterSpacing: "-0.68px",
          },
        ],

        miniText: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: 0,
          },
        ],

        secondText: [
          "24px",
          {
            lineHeight: "28.8px",
            fontWeight: "600",
            letterSpacing: 0,
          }
        ],

        sliderText: [
          "36px",
          {
            lineHeight: "43.2px",
            fontWeight: "700",
            letterSpacing: 0,
          }
        ]
      },

      backgroundImage : {
        sliderOneBackground : "url('./assets/img/sliderBack.png')",
        aboutTitle : "url('./assets/img/aboutTitle.png')",
      },
    },
  },
  plugins: [],
};
