module.exports = (router) => {

    router.get('/', (req, res) => {

        res.render('index', {
            'page_title': req.__('Intro')
        });

    });

};
