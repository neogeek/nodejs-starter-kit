require.config({
    'paths': {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'handlebars': '../bower_components/handlebars/handlebars.min',
        'handlebars.helpers': '../templates/helpers',
        'templates': '../templates/compiled'
    },
    'shim': {
        'handlebars': {
            'exports': 'Handlebars'
        }
    }
});

define(['app'], function (app) {

    'use strict';

    window.app = app;

});
