module.exports = function (router) {

    router.get('/', function (req, res) {

        res.render('index', {
            page_title: req.__('Intro')
        });

    });

};
