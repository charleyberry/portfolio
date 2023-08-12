/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sweethipster: "sweethipster",
        handmadetypewriter: "handmadetypewriter",
        lionelofparis: "lionelofparis",
        sourmilk: "sourmilk",
        spongemeetsvanilla: "spongemeetsvanilla",
        trashhand: "trashhand",
        whitescratches: "whitescratches",
      },

      colors: {
        orange: '#e48205',
        lorange: '#e89c16',
        pink1: '#c75f71',
        pink2: '#dc647b',
        lpink: '#e4cac6',
        lpurple: '#d6cdd7',
        dpink: '#9F2B68',
      },

    },    
  },
  plugins: [],
}
