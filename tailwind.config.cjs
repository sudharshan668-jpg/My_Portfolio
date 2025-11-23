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
        Iphone12: '390px',
        GooglePx: "360px",
        Desktop: '950px',
        IPhone13: '389px'
      },
      fontSize: {
        '14px': '14px',
        '13px': '13px',
        '11px': '11px',
        '10px': '10px'
      }
    }
  },
  plugins: [],
};