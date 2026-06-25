/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          // RGB format so Tailwind opacity modifiers (bg-dark/90) work correctly
          DEFAULT: "rgb(10 15 30)",
          800: "rgb(13 20 40)",
          700: "rgb(17 24 39)",
          600: "rgb(26 34 53)",
          500: "rgb(30 41 59)",
        },
        accent: {
          DEFAULT: "rgb(255 77 65)",
          glow: "rgba(255,77,65,0.4)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(255,77,65,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 80%, rgba(99,102,241,0.12) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "accent-gradient": "linear-gradient(135deg, #ff4d41 0%, #ff8c42 100%)",
        "text-gradient":
          "linear-gradient(135deg, #ff4d41 0%, #ff8c42 50%, #ffb347 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255,77,65,0.3)",
        "glow-sm": "0 0 10px rgba(255,77,65,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.3)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255,77,65,0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(255,77,65,0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "fade-in": "fade-in 1s ease forwards",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
