define(function (require) {

    'use strict';

    var $ = require('jquery'),
        templates = require('templates');

    $('body').append(templates.sample({ content: 'Sample Handlebars Template' }));

});
