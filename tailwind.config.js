/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   cRosa: '#c12b61',
    //   cAzul: '#0656ee',
    //   cBlanco: '#ffffff',
    //   cAzulOscuro: '#1f262c',
    //   cNaranja: '#f9a644',
    //   cVerde: '#45cc4e'
    // },
    extend: {
      width: {
        '1/9': '11.1111111111%',
      },
      maxWidth: {
        '1/9': '140px',
      },
    },
    backgroundImage: {
      c1: 'linear-gradient(90deg, rgb(255 0 0) 83%, rgb(255 0 0) 83%)',
      c2: 'url(/public/raceImage.jpg)',
      c3: 'linear-gradient(90deg, rgba(255,255,255,1) 83%, rgba(255,255,255,1) 83%)',
      c4: 'linear-gradient(90deg, rgba(6,86,238,1) 83%, rgba(6,86,238,1) 83%)',
      c5: 'linear-gradient(90deg, rgba(241,232,111,1) 83%, rgba(241,232,111,1) 83%)',
      c6: 'linear-gradient(90deg, rgba(69,204,78,1) 83%, rgba(69,204,78,1) 83%)',
      c7: 'linear-gradient(90deg, rgb(0 0 0) 83%, rgb(0 0 0) 83%)',
      c8: 'linear-gradient(90deg, rgba(247,154,246,1) 83%, rgba(247,154,246,1) 83%)',
    }
  },
  plugins: [],
}

