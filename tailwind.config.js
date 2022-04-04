module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        customSpin: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        updown: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(40px)' },
        },
        zoomInOut: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        }
      },

      animation: {
        customSpin: 'customSpin 3s linear infinite',
        updown: 'updown 3s linear infinite',
        zoomInOut: 'zoomInOut 3s linear infinite',
      }
    },
  },
  plugins: [],
}
