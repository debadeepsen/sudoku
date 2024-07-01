import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        forest: {
          50: "#F0F1EF",
          100: "#E3E5E1",
          200: "#BFC3BB",
          300: "#91998A",
          400: "#444940",
          500: "#3D4139",
          600: "#353932",
          700: "#2E312B",
          800: "#262924",
          900: "#191B18",
          950: "#191B18"
        }
      }
    }
  },
  plugins: []
}
export default config
