var indexView = require('../views/index');

module.exports = function (router) {

    router.get('/*', function (req, res, next) {

        res.locals = {
            layout: 'template'
        };

        next();

    });

    router.get('/', indexView);

};
