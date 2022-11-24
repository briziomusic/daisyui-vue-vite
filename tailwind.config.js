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
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
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
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#00915A',
          secondary: '#ffb538',
          accent: '#1cc2f2',
          neutral: '#3d4451',
          'base-content': '#2d2926',
        },
      },
      'light',
      'dark',
    ],
  },
};
