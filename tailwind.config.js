const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],

  theme: {
    extend: {
      fontFamily: {
        sans: ['bnpSans', 'sans-serif'],
        serif: ['"BNPP Sans"', 'Georgia'],
        mono: ['"BNPP Sans"', 'SFMono-Regular'],
        display: ['"BNPP Sans"'],
        body: ['"BNPP Sans"'],
      },
    },
  },

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',

    themes: [
      {
        tntt_light: {
          ...require('daisyui/src/colors/themes')['[data-theme=corporate]'],
          
          'base-content': '#2d2926',
        },
      },
      'light',
      'dark',
    ],
  },
};
