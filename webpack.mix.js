const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your theme. By default, we are compiling the Sass file for the theme 
 | as well as bundling up all the JS files.
 |
 */

mix.js('assets/scripts/main.js', 'dist/scripts/')
   .js('assets/scripts/customizer.js', 'dist/scripts/')
   .sass('assets/styles/main.scss', 'dist/styles/')
   .copy('assets/images', 'dist/images/', false);