/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        lightgrey : "#D3D3D3",
        grey : "rgb(148, 163, 184)",
        op : "rgb(0,0,0,0.5)"
      },
      minHeight:{
        side : "calc(100vh - 100px)",
        model : "500px"
      },
      boxShadow:{
        jobBox: "0px -7px 3px -4px #dddada"
      },
      backgroundImage:{
        banner : "url('https://img.freepik.com/free-photo/satisfied-consumer-recommends-product-cute-cheerful-feminine-redhead-woman-with-pretty-smile-showing_1258-138586.jpg?t=st=1710950898~exp=1710954498~hmac=9117bd5da1a46b5b9e5636f9eb8cf7772d2303467698efdd189cf9ea0d53a432&w=1380')"
      }
    },
  },
  plugins: [],
}