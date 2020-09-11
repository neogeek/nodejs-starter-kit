module.exports = router => {
    router.get('/', (req, res) => {
        res.render('index', {
            description: res.locals.config.description,
            title: res.locals.config.site_name
        });
    });
};
