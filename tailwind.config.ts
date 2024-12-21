import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F5F0E9',   // Bege clarinho
          100: '#E6DFD4',  // Bege claro
          200: '#D2C3B1',  // Bege médio
          300: '#BFA78E',  // Marrom claro
          400: '#A68B6C',  // Marrom caramelo
          500: '#8D6E4E',  // Marrom médio
          600: '#735735',  // Marrom escuro
          700: '#5A412C',  // Marrom mais escuro
          800: '#402B1D',  // Marrom muito escuro
          900: '#2C1810',  // Marrom quase preto
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
