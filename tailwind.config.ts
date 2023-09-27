import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
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
        "card-gradient": "linear-gradient(180deg, #131313 0%, rgba(19, 19, 19, 0.00) 100%)",
      },
    },
  },
  plugins: [],
}
export default config
