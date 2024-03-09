import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      'neon-brand': '#C4FF61',
      backgroundSize: {
        'middle': 'auto 100%',
      },
      backgroundPosition: {
        'hero-bg-size': '60% 10%'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero/horse.jpg')"
      }
    }
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
