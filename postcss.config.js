module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-font-magician'),
    require('postcss-custom-properties'),
    require('autoprefixer'),
  ],
};
