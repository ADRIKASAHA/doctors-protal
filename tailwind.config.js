/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui:{
  //   themes: [
  //     {
  //       doctortheme: {
  //         primary:'#FFC107',
  //         secondary: '#E1E8EB'
  //       }
  //     }

  //   ]
  // },
  
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
