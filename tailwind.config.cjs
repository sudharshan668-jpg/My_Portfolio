module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '999': '999',
      },
      screens: {
        IphoneSE: '370px',
        Iphone12: '390px'
      }
    }
  },
  plugins: [],
};