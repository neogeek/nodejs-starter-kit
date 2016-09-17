module.exports = Handlebars => {

    const helpers = {

        'ifCond': (a, b, options) => {

            let renderer = options.fn;

            if (a !== b) {

                renderer = options.inverse;

            }

            return renderer();

        }

    };

    Object.keys(helpers).forEach(key => {

        Handlebars.registerHelper(key, helpers[key]);

    });

};
