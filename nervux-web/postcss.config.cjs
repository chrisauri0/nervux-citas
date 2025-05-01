// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Cambiar esta línea
    require('autoprefixer'),
  ],
}
