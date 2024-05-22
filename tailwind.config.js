/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm:'375px',
      xl:'1440px'
    },
    extend: {
      fontFamily: {
        Overpass:["Overpass","sans-serif"],
        Ubuntu:["Ubuntu","poppins"],
      },
      colors: {
        // primary colors
        Lightred: "hsl(356, 100%, 66%)",
        Verylightred:"hsl(355, 100%, 74%)",
        Verydarkblue:"hsl(208, 49%, 24%)",
        // neutral colors
        White:"hsl(0, 0%, 100%)",
        Grayishblue:"hsl(240, 2%, 79%)",
        Verydarkgrayishblue:"hsl(207, 13%, 34%)",
        Verydarkblackblue:"hsl(240, 10%, 16%)",
        // gradient
        gvlightred: "hsl(13, 100%, 72%)",
        gLightred: "hsl(353, 100%, 62%)",
        //background color - body
        Verydarkgrayblue: "hsl(237, 17%, 21%)",
        Verydarkdesaturatedblue: "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};
