module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    // Other configurations...
    theme: {
      extend: {
        colors: {
          color1: '#468dad',
          color2: '#ffb6b9',
          color3: '#bbded6',
          color4: '#579bbb',
          color5: '#fae3d9',
          color6: '#61c0bf',
        },
      },
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
