/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        movie: {
          '0%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)' },
        },
        bg: {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '10% 50%' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        zoomIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
