(function (root, factory) {

    'use strict';

    if (typeof define === 'function' && define.amd !== undefined) {

        define(['handlebars'], factory);

    } else if (typeof module === 'object' && module.exports !== undefined) {

        module.exports = factory;

    }

}(null, function (Handlebars) {

    'use strict';

    var helpers = {

        ifCond: function (a, b, options) {

            return a === b ? options.fn(this) : options.inverse(this);

        }

    };

    Object.keys(helpers).forEach(function (key) {

        Handlebars.registerHelper(key, helpers[key]);

    });

}));
