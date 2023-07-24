/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      'text': '#0c270c',
      'background': '#ffffff',
      'major': '#378036',
      'minor': '#cdf0cc',
      'accent': '#39b937',
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("rippleui"),
    require('preline/plugin'),
  ],
  darkMode: "class"
}

