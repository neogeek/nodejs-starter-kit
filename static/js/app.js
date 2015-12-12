define(function (require) {

    'use strict';

    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        templates = require('templates');

    templates.partials = Handlebars.partials;

    console.log(templates);

});
