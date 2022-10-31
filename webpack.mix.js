let mix = require('laravel-mix');
mix.js('resources/js/app.js', 'js').vue().sourceMaps().disableNotifications()
    .postCss('resources/css/app.css', 'public/css');