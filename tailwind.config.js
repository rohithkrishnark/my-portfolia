// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}',  // Make sure the content paths are correct
    ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          robotoMono: ['Roboto Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  