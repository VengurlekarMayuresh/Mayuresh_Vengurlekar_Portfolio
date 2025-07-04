/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- Add your paths here
  ],
  theme: {
    extend: {
        screens: {
        'xs': { max: '525px' },
        'ls': {min:'526'} // Custom screen: applies to 525px and below
      },
      animation: {
        // blob: "blob 8s infinite ease-in-out",
        'walk-loop' : 'walk 12s linear infinite',
      },
      keyframes: {
        // blob: {
        //   "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
        //   "33%": { transform: "translate(10px, -10px) scale(1.05)" },
        //   "66%": { transform: "translate(-10px, 10px) scale(0.95)" },
        // },
        walk: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
