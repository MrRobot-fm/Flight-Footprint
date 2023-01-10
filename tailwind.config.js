/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3C4257',
        secondary: '#4F566B',
        tertiary: '#A3ACB9',
        greySection: '#F7FAFC',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimGray: 'rgba(15, 118, 110, 0.7)',
        dimBlue: '#5469D4'
      },
      backgroundImage: {
        blueRadialGradient: 'radial-gradient(var(--gradient-stops))',
        radialModalGradient: 'radial-gradient(var(--radial-modal-stops))'
      }
    },
    screens: {
      xxs: '280px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1023px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: []
};
