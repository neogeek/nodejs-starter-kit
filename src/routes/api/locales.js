module.exports = (router) => {

    router.get('/', (req, res) => {

        res.json(req.getCatalog());

    });

};
