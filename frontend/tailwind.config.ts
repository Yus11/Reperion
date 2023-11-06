import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        main: "#C00",
        light: "#FF0000",
        dark: "#A60505",
      },
      gray: {
        main: "#C8C8C8",
        light: "#E0E0E0",
        dark: {
          100: "#787878",
          200: "#404040",
        },
      },
      black: "#000",
      white: "#FFF",
    },
    screens: {
      "1xl": { max: "1279px" },
      "xl": { max: "1199px" },

      "lg": { max: "1023px" },

      "md": { max: "767px" },

      "sm": { max: "639px" },
    },
    container: {
      center: true,
    },
    fontSize: {
      h1: ["72px", { lineHeight: "120%", fontWeight: 400 }],
      h2: ["64px", { lineHeight: "120%", fontWeight: 400 }],
      h3: ["56px", { lineHeight: "120%", fontWeight: 400 }],
      h4: ["48px", { lineHeight: "140%", fontWeight: 700 }],
      h5: ["40px", { lineHeight: "140%", fontWeight: 700 }],
      h6: ["32px", { lineHeight: "140%", fontWeight: 600 }],
      subtitle: ["24px", { lineHeight: "140%", fontWeight: 700 }],
      body: ["20px", { lineHeight: "120%", fontWeight: 600 }],
      caption: ["18px", { lineHeight: "140%", fontWeight: 600 }],
      paragraph: ["16px", { lineHeight: "160%", fontWeight: 400 }],
      small: ["14px", { lineHeight: "160%", fontWeight: 400 }],
    },
    extend: {
      backgroundImage: {
        // ----- Main page sections backgrounds ----- //
        // <Hero> section's card background
        "card-gradient": "linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0.00) 100%)",
        "black-card-gradient": "linear-gradient(180deg, #181818 0%, rgba(46, 46, 46, 0.00) 100%)",
        // <Threat landscape> section background
        "threat-landscape": "url('/threat-landscape-bg.png')",
        // <What we do> section cards background
        "cyber": "url('/cyber-bg.jpg')",
        "cyber-mobile": "url('/cyber-bg-mobile.jpg')",
        "counter-drone": "url('/counter-drone.jpg')",
        "counter-drone-mobile": "url('/counter-drone-mobile.jpg')",
        // <Partnerships & collaborators> section card's background
        "imperial-college-default": "url('/imperial-college-default.png')",
        "imperial-college-active": "url('/imperial-college-active.png')",
        "bristol-university-default": "url('/bristol-university-default.png')",
        "bristol-university-active": "url('/bristol-university-active.png')",
        "nus-university-default": "url('/nus-university-default.png')",
        "nus-university-active": "url('/nus-university-active.png')",
        "sutd-university-default": "url('/sutd-university-default.png')",
        "sutd-university-active": "url('/sutd-university-active.png')",
        "adsc-default": "url('/adsc-default.png')",
        "adsc-active": "url('/adsc-active.png')",
        "cy-lab-default": "url('/cy-lab-default.png')",
        "cy-lab-active": "url('/cy-lab-active.png')",
        // <Industries> sections background
        "industries-gradient": "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.71) 100%)",
        "industries-tablet-gradient": "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.71) 100%)",
        // an-publication-footer-solutions.png
        //
        "a-publication": "url('/a-publication-footer-solutions.png')",
        "a-publication-mobile": "url('/a-publication-footer-solutions-mobile.png')",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
      boxShadow: {
        "card-hover": "0px 4px 15px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
}
export default config
