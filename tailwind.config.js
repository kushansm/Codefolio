/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        "slide-in": "slideIn 1.5s ease-in-out forwards",
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'slide-in-left': 'slideInLeft 0.8s ease-out both',
        'slide-in-right': 'slideInRight 0.8s ease-out both',
        'zoom': 'zoomInOut 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
