define(['handlebars'], function (Handlebars) {

    'use strict';

    Handlebars.registerHelper('ifCond', function (a, b, options) {
        return a === b ? options.fn(this) : options.inverse(this);
    });

});
