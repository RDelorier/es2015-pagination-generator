var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir.config.js.browserify.transformers.push({
  name: 'vueify',
  options: {}
})

elixir(function(mix) {
    mix.sass('app.scss');
    mix.browserify('demo/index.js', 'public/js/demo.js')
});
