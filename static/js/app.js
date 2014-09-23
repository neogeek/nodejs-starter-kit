define(function (require) {

    'use strict';

    var $ = require('jquery'),
        templates = require('templates');

    $('body').append(templates.sample({ title: 'Sample Handlebars Template' }));

});
