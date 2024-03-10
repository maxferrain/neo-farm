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
      textColor: {
        'dark-green': '#134A36',
      },
      backgroundColor: {
        'neon-brand': '#C4FF61',
        'light-green': 'var(--color--vivid-green-cyan)',
        'green': '#69B575',
        'dark-green': '#134A36',
        'beige': '#FAF5EB',
        'bright-yellow': '#FCE908',
        'dark-yellow': '#F6BE00'
      },
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
