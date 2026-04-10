/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07111f",
        foreground: "#f5f7fb",
        muted: "#9aa4b2",
        card: "rgba(10, 18, 31, 0.72)",
        stroke: "rgba(255, 255, 255, 0.08)",
        accent: {
          DEFAULT: "#f97316",
          soft: "#ffedd5",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        glow: "0 30px 90px rgba(249, 115, 22, 0.15)",
        soft: "0 20px 60px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(249, 115, 22, 0.26), transparent 42%), radial-gradient(circle at 80% 18%, rgba(56, 189, 248, 0.12), transparent 24%), linear-gradient(180deg, rgba(4, 8, 17, 0.2), rgba(4, 8, 17, 0.88))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sheen: {
          "0%": { transform: "translateX(-140%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease both",
        sheen: "sheen 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
