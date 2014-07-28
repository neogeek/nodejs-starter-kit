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

define(['jquery', 'templates'], function ($, templates) {

    'use strict';

    $('body').append(templates.sample({ title: 'Sample Handlebars Template'}));

});
