import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
  theme: {
    tokens: {
      colors: {
        primary: { value: '#F8E81D' },
        secondary: { value: '#5D5FEF' },
        base: { value: '#F1F1F1' },
      },
    },
    extend: {
      keyframes: {
        neonGlow: {
          '0%': { boxShadow: '0 0 10px 5px rgba(255, 234, 0, 0.8)' },
          '100%': {
            boxShadow: '0 0 15px 5px rgba(255, 234, 0, 1)',
          },
        },
      },
    },
  },
})
