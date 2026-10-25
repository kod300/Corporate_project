import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f4f6f8',
          100: '#e2e8ee',
          200: '#c3ced9',
          300: '#9fb0c0',
          400: '#7b8fa3',
          500: '#5c7087',
          600: '#45566b',
          700: '#33414f',
          800: '#232f3a',
          900: '#141c24',
          950: '#0b1116',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;