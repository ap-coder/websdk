const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env' /*, debug: true*/ }));

const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.react(__dirname + '/Resources/assets/js/app.js', 'js/websdk.js')
    .sass(__dirname + '/Resources/assets/sass/app.scss', 'css/websdk.css')
    .copy(__dirname + '/Resources/assets/f9edf607ea45b593a88dfad9c7bce5db.wasm', '../../public/f9edf607ea45b593a88dfad9c7bce5db.wasm');


if (mix.inProduction()) {
    mix.version();
}