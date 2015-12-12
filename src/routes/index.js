module.exports = function (router) {

    router.get('/', function (req, res) {

        res.render('index', {
            title: 'Node.js Starter Kit',
            content: 'Sample Handlebars Template'
        });

    });

};
