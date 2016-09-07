const config = require('./config.json');

const express = require('express');
const app = express();

const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const compression = require('compression');

const enrouten = require('express-enrouten');

const hbs = require('express-hbs');

const helpers = require('./static/js/templates/helpers.js')(hbs);

const i18n = require('i18n');

i18n.configure({
    'defaultLocale': 'en-us',
    'directory': `${__dirname}/locales`,
    'indent': '  ',
    'locales': ['en-us']
});

app.use(i18n.init);

app.disable('x-powered-by');

app.use(cors());

app.use(session({
    'resave': true,
    'saveUninitialized': true,
    'secret': process.env.SECRET || 'secret'
}));

app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());

app.use(compression());

app.use(express.static(`${__dirname}/static`));

app.use((req, res, next) => {

    /* eslint prefer-arrow-callback: 0 */
    hbs.registerHelper('__', function helper (...args) {

        return Reflect.apply(i18n.__, req, args);

    });

    res.locals.config = config;
    res.locals.layout = 'template';
    res.locals.url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    next();

});

app.use(enrouten({'directory': 'src/routes'}));

/* eslint max-params: 0 */
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {

    res.status(err.status || '500');
    res.render('error', {
        'message': err.message,
        'status': err.status || '500'
    });

});

app.use((req, res) => {

    res.status('404');
    res.render('error', {
        'message': 'Page Not Found',
        'status': '404'
    });

});

app.engine('hbs', hbs.express4({
    'onCompile': (exhbs, source) => exhbs.handlebars.compile(source, {'preventIndent': true}),
    'partialsDir': `${__dirname}/src/views/partials`
}));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/src/views`);

app.listen(process.env.PORT || '5000');
