import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '1.5rem', lg: '2rem' },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        navy: {
          50: '#eef2f8',
          100: '#d6dfec',
          200: '#aebfd6',
          300: '#7e98ba',
          400: '#5275a0',
          500: '#1e3a5f',
          600: '#1a3354',
          700: '#152c4a',
          800: '#0f2238',
          900: '#0a172a',
        },
        cobalt: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        charcoal: '#334155',
        amber: {
          DEFAULT: '#d97706',
          soft: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Michroma', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['Martian Mono', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      // Michroma runs about 0.64em per character, so the display sizes sit well
      // below what a normal grotesque would carry (brand guidelines section 3).
      fontSize: {
        display: ['clamp(1.75rem, 1.35rem + 1.9vw, 3rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        'h1': ['clamp(1.625rem, 1.3rem + 1.4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['clamp(1.375rem, 1.2rem + 0.8vw, 1.875rem)', { lineHeight: '1.25' }],
        'h3': ['clamp(1.125rem, 1.05rem + 0.35vw, 1.375rem)', { lineHeight: '1.3' }],
        'h4': ['clamp(0.9375rem, 0.9rem + 0.2vw, 1.0625rem)', { lineHeight: '1.4' }],
        'body-lg': ['clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)', { lineHeight: '1.6' }],
        'micro': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.14em' }],
      },
      boxShadow: {
        'navy-sm': '0 1px 2px rgba(30, 58, 95, 0.06)',
        'navy-md': '0 4px 6px -1px rgba(30, 58, 95, 0.08), 0 2px 4px -2px rgba(30, 58, 95, 0.06)',
        'navy-lg': '0 10px 15px -3px rgba(30, 58, 95, 0.1), 0 4px 6px -4px rgba(30, 58, 95, 0.06)',
        'navy-xl': '0 20px 25px -5px rgba(30, 58, 95, 0.12), 0 8px 10px -6px rgba(30, 58, 95, 0.06)',
        'cobalt-glow': '0 8px 24px rgba(37, 99, 235, 0.25)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1e3a5f 0%, #152c4a 100%)',
        'gradient-cobalt': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%)',
        'dot-grid': 'radial-gradient(rgba(37, 99, 235, 0.18) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
      borderRadius: {
        'sharp': '2px',
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.95' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-quart': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
