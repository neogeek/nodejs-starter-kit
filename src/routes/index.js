var index = require('../controllers/index');

module.exports = function (router) {

    router.get('/', index.render);

};
