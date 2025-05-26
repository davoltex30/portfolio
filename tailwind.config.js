/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d9ff',
          300: '#a5bfff',
          400: '#819aff',
          500: '#6272ff',
          600: '#4047f0',
          700: '#3636d3',
          800: '#2d2faa',
          900: '#2b2d85',
          950: '#1c1b48',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dae5',
          300: '#acbad0',
          400: '#8095b5',
          500: '#61799d',
          600: '#4c6182',
          700: '#3e4e6a',
          800: '#36435a',
          900: '#303a4d',
          950: '#1f2533',
        },
        accent: {
          50: '#fff2ed',
          100: '#ffe1d3',
          200: '#ffc0a6',
          300: '#ff986e',
          400: '#fd6a3a',
          500: '#f54111',
          600: '#e02c06',
          700: '#ba2107',
          800: '#981c0d',
          900: '#7c1a0e',
          950: '#430905',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'nav': '0 2px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};