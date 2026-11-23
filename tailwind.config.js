/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pitch: '#000000',
        neon: '#00FF66',
        'neon-dim': 'rgba(0, 255, 102, 0.12)',
        'surface-card': '#070707',
        'surface-hover': '#0e0e0e',
        'brutal-border': '#1c1c1c',
        'brutal-border-light': '#2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(0, 255, 102, 0.3)',
        'neon-md': '0 0 20px rgba(0, 255, 102, 0.45)',
        'neon-hard': '4px 4px 0px #00FF66',
        'white-hard': '4px 4px 0px #ffffff',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
