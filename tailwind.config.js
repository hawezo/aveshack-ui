const tailwind = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    /*
     |--------------------------------------------------------------------------
     | Font families replacements
     |--------------------------------------------------------------------------
     */

    fontFamily: {
      title: [
        'Quicksand',
        '"Open Sans"',
        'Roboto',
        ...tailwind.fontFamily.sans,
      ],
      paragraph: ['Inter', 'Roboto', ...tailwind.fontFamily.sans],
      sans: ['Roboto', ...tailwind.fontFamily.sans],
      mono: ['"Roboto Mono"', ...tailwind.fontFamily.mono],
      condensed: ['"Roboto Condensed"', ...tailwind.fontFamily.sans],
    },

    /*
     |--------------------------------------------------------------------------
     | Extension
     |--------------------------------------------------------------------------
     */

    extend: {
      height: {
        nav: '5rem',
      },
      minHeight: {
        dropzone: '10rem',
        panel: '30rem',
      },
    },
  },

  /*
    |--------------------------------------------------------------------------
    | Plugins
    |--------------------------------------------------------------------------
    */

  plugins: [
    require('./theme.config.js'), //
    require('tailwindcss-transitions')(),
  ],
};
