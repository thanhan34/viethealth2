import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        viet: {
          navy: "#003F52",
          footer: "#002F3D",
          midnight: "#002733",
          deep: "#064B5F",
          teal: "#007A8A",
          cyan: "#38BFD1",
          ice: "#7EDFEA",
          pale: "#F3FAFC",
          text: "#073B4C",
          muted: "#5F6F78",
          mutedDark: "#A9C8D0",
          border: "#DDEFF3",
          zalo: "#1478F2",
          messenger: "#3447B7",
        },
      },
      boxShadow: {
        soft: "0 18px 48px rgba(6, 75, 95, 0.11)",
        button: "0 12px 24px rgba(0, 63, 82, 0.22)",
        header: "0 4px 20px rgba(7, 59, 76, 0.06)",
        float: "0 12px 28px rgba(6, 75, 95, 0.22)",
      },
      borderRadius: { soft: "20px" },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #004D63, #007A8A)",
        "hero-gradient": "linear-gradient(105deg, #FFFFFF 0%, #F5FBFD 45%, #EAF7FA 100%)",
      },
    },
  },
  plugins: [],
};

export default config;