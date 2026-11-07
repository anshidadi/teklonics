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
        dark: {
          950: '#040609',
          900: '#07090e',
          850: '#0a0d15',
          800: '#0f1420',
          750: '#141a29',
          700: '#1a2235',
          600: '#26314a',
        },
        brand: {
          blue: '#1668e8',
          'blue-light': '#3b82f6',
          'blue-glow': '#0062ff',
          cyan: '#06b6d4',
          accent: '#2563eb',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'blue-grid': 'radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px)',
      },
      boxShadow: {
        'blue-glow': '0 0 35px -5px rgba(37, 99, 235, 0.35)',
        'blue-glow-sm': '0 0 15px -3px rgba(37, 99, 235, 0.25)',
        'blue-glow-lg': '0 0 60px -10px rgba(37, 99, 235, 0.45)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
