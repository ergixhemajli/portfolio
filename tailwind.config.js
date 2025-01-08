/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',  // Look for HTML files in src folder
    './src/**/*.js',    // Look for JS files in src folder
  ],
  theme: {
    extend: {
      // Add custom keyframes
      keyframes: {
          marquee: {
              '0%': {
                  transform: 'translateX(0)'
              },
              '100%': {
                  transform: 'translateX(-100%)'
              },
          },
      },
      // Add custom animations
      animation: {
          'marquee': 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}

