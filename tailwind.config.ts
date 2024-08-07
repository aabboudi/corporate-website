import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'landing-row': "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url('/imgs/spotlight-bg.webp')",
      },
      keyframes: {
        'landing-img-zoom-in': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'landing-img-zoom-in': 'landing-img-zoom-in 10s ease-out 1',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
export default config;
