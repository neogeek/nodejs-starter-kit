/* eslint id-length: 0 */

const Handlebars = require('handlebars');

const helpers = {

    '__': (key) => key,

    'ifCond': (a, b, options) => {

        let renderer = options.fn;

        if (a !== b) {

            renderer = options.inverse;

        }

        return renderer();

    }

};

Object.keys(helpers).forEach((key) => {

    Handlebars.registerHelper(key, helpers[key]);

});
