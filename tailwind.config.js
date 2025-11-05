/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#14b8a6', // Teal
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#134e4a',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#495057', // Charcoal
          500: '#3d4348',
          600: '#2d3338',
          700: '#212529',
          800: '#1a1d20',
          900: '#121416',
        },
        gold: {
          50: '#fef8e7',
          100: '#fdf1cf',
          200: '#fbe39f',
          300: '#f9d56f',
          400: '#D6A123', // Custom Amber
          500: '#c4911f',
          600: '#9d741a',
          700: '#765714',
          800: '#4e3a0d',
          900: '#271d07',
        },
        dark: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          50: '#fef8e7',
          100: '#fdf1cf',
          200: '#fbe39f',
          300: '#f9d56f',
          400: '#D6A123', // Amber
          500: '#c4911f',
          600: '#9d741a',
          700: '#765714',
          800: '#4e3a0d',
          900: '#271d07',
        },
        cyan: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#14b8a6', // Teal
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#134e4a',
        },
        silver: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#adb5bd',
          400: '#6c757d', // Medium gray
          500: '#495057',
          600: '#343a40',
          700: '#212529',
          800: '#1a1d20',
          900: '#121416',
        },
        amber: {
          50: '#fef8e7',
          100: '#fdf1cf',
          200: '#fbe39f',
          300: '#f9d56f',
          400: '#D6A123',
          500: '#c4911f',
          600: '#9d741a',
          700: '#765714',
          800: '#4e3a0d',
          900: '#271d07',
        },
        neon: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#4169E1', // Royal Blue
          500: '#3b5bdb',
          600: '#2f4bbd',
          700: '#253c99',
          800: '#1e3176',
          900: '#1a2857',
        },
        futuristic: {
          cyan: '#4169E1',
          purple: '#a78bfa',
          gold: '#f9c23c',
          silver: '#C0C0C0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-out-down': 'fadeOutDown 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 191, 36, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
