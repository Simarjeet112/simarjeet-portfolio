/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#07070C',
          soft: '#0D0D16',
          surface: '#12121D',
          line: '#22222F',
        },
        signal: {
          violet: '#7C5CFC',
          cyan: '#22D3EE',
          amber: '#FFA34D',
        },
        paper: {
          DEFAULT: '#F1EFFB',
          muted: '#9694AE',
          dim: '#6B6980',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, #07070C 90%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,92,252,0.45)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.4)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-30px)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: '400' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite',
        'drift-slow': 'drift 18s ease-in-out infinite',
        pulseLine: 'pulseLine 3s linear infinite',
      },
    },
  },
  plugins: [],
}
