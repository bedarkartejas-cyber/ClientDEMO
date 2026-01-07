/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. SEMANTIC COLOR SYSTEM (Titanium & Obsidian Theme)
      colors: {
        // Backgrounds
        canvas: '#000000',           // Absolute Void
        'canvas-subtle': '#08080A',  // Deep Space
        
        // Surfaces (Glass & Metal)
        surface: 'rgba(255, 255, 255, 0.03)',
        'surface-highlight': 'rgba(255, 255, 255, 0.08)',
        'surface-active': 'rgba(255, 255, 255, 0.12)',
        
        // Borders
        border: 'rgba(255, 255, 255, 0.06)',
        'border-light': 'rgba(255, 255, 255, 0.15)',

        // Typography
        'content-primary': '#F5F5F7',    // Off-white for less eye strain
        'content-secondary': '#86868B',  // Metallic Grey
        'content-tertiary': '#48484A',   // Dark Grey

        // Accents (The "Soul" of the UI)
        'zen-blue': {
          DEFAULT: '#2997FF',
          glow: 'rgba(41, 151, 255, 0.5)',
          dim: 'rgba(41, 151, 255, 0.1)'
        },
        'zen-purple': {
          DEFAULT: '#BF5AF2',
          glow: 'rgba(191, 90, 242, 0.5)'
        }
      },

      // 2. TYPOGRAPHY SCALING (Editorial Look)
      fontFamily: {
        sans: ['var(--font-outfit)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        mono: ['SF Mono', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.08em', // For huge headlines
        'tighter': '-0.05em',
        'widest': '0.25em',    // For micro-labels
      },
      lineHeight: {
        'tighter': '1.1',
        'loose': '1.8',
      },

      // 3. ANIMATION PHYSICS (The "Feel")
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',   // Snappy but smooth
        'circ-out': 'cubic-bezier(0.075, 0.82, 0.165, 1)', // Very gentle
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',      // Apple-like standard
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },

      // 4. COMPLEX KEYFRAMES
      keyframes: {
        // Reveal Animations
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(20px)', transform: 'scale(1.1)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' },
        },
        
        // Continuous Ambient Animations
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'grain-noise': {
          '0%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
          '100%': { transform: 'translate(5%, 0)' },
        }
      },
      
      animation: {
        'fade-in-up': 'fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up-delayed': 'fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'blur-in': 'blur-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float-slow 8s ease-in-out infinite',
        'float-deep': 'float-slower 12s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'noise': 'grain-noise 8s steps(10) infinite',
      },

      // 5. EXTENDED SPACING (For "Airy" Layouts)
      spacing: {
        'section-gap': '12rem', // Huge gap between sections
        'content-gap': '8rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metallic': 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [
    // Custom Plugin for complex utilities
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.hardware-accelerated': {
          'transform': 'translateZ(0)',
          'backface-visibility': 'hidden',
          'perspective': '1000px',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }
      })
    }),
  ],
}