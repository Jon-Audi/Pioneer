import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0a0a0a',
        surface: '#111111',
        card:    '#161616',
        border:  '#2a2a2a',
        cyan:    '#00d4ff',
        'cyan-dim': '#00a0c0',
        muted:   '#666666',
      },
      fontFamily: {
        mono: ['"Courier New"', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
