/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        Bubble: {
          '0%': {
            marginTop: '20%',
          },
          '100%': {
            marginTop: '-30%',
          },
        },
        sideWays: {
          '0%': {
            marginleft: 0,
          },
          '100%': {
            marginleft: '25px',
          },
        },
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          'primary-content': 'rgb(68 64 60)',
        },
      },
    ],
  },
};
