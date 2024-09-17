/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    animation: {
      "fade-in": "fadeIn 200ms linear 1",
      "fade-out": "fadeOut 200ms linear 1",
      "fade-in-top-1": "fadeInTop .6s linear 1 .1s backwards",
      "fade-in-top-2": "fadeInTop .6s linear 1 .2s backwards",
      "fade-in-top-3": "fadeInTop .6s linear 1 .3s backwards",
      "fade-in-top-4": "fadeInTop .6s linear 1 .4s backwards",
      "fade-in-top-5": "fadeInTop .6s linear 1 .5s backwards",
      "fade-in-top-6": "fadeInTop .6s linear 1 .6s backwards",
      "fade-in-top-7": "fadeInTop .6s linear 1 .8s backwards",
      "fade-in-top-8": "fadeInTop .6s linear 1 1s backwards",
      "fade-in-top-9": "fadeInTop .6s linear 1 1.2s backwards",
      "fade-in-top-10": "fadeInTop .6s linear 1 1.3s backwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      fadeInTop: {
        "0%": { opacity: 0, transform: `translateY(-1.2rem)` },
        "100%": { opacity: 1, transform: `translateY(0)` },
      },
    },
  },
  plugins: [],
  important: true,
};
