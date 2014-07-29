define(['handlebars'], function (Handlebars) {

    'use strict';

    var helpers = {
        ifCond: function (a, b, options) {
            return a === b ? options.fn(this) : options.inverse(this);
        }
    };

    Object.keys(helpers).forEach(function (key) {

        Handlebars.registerHelper(key, helpers[key]);

    });

});
