const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors:{
        '#1C1E53':'#1C1E53',
        '#BBBBCB':'#BBBBCB',
        '#282938':'#282938',
        '#FCD980':'#FCD980',
        '#1B1C2B':'#1B1C2B',
        '#2405F2':'#2405F2',
        '#F4F6FC':'#F4F6FC',
        '#FCD980':'#FCD980',
        '#F4F5F5':'#F4F5F5',
        '#EEF4FA':'#EEF4FA',
        '#1D2130':'#1D2130'
      },
      backgroundImage: {
        'home-cta': "url('./img/homebg.png')",
      },
      screens: {
        'tabletmax': '1100px',
        'ddd':'460px',
        'aaa':'360px',
        'sss':'1240px',
        'qqq':'910px',
        'www':'800px',
        'eee':'540px',
        '640px':'640px',
        '850px':'850px'
      },
      
    }
  },
  plugins: [],
})