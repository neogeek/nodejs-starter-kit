var express = require('express');
var app = express();

var cors = require('cors');
var session = require('express-session');
var bodyParser = require('body-parser');
var compression = require('compression');

var enrouten = require('express-enrouten');

var hbs = require('express-hbs');
var hbs_helpers = require('./static/templates/helpers.js')(hbs);

var i18n = require('i18n');

i18n.configure({
    indent: '  ',
    directory: __dirname + '/locales',
    locales: ['en-us'],
    defaultLocale: 'en-us'
});

app.use(i18n.init);

app.disable('x-powered-by');

app.use(cors());

app.use(session({
    secret: process.env.SECRET || 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(compression());

app.use(express.static(__dirname + '/static'));

app.use(function (req, res, next) {

    hbs.registerHelper('__', function () {

        return i18n.__.apply(req, arguments);

    });

    res.locals.layout = 'template';

    next();

});

app.use(enrouten({ directory: 'src/routes' }));

app.use(function (err, req, res, next) {

    res.status(err.status || 500);
    res.render('error', { status: err.status || 500, message: err.message });

});

app.use(function (req, res, next) {

    res.status(404);
    res.render('error', { status: 404, message: 'Page Not Found' });

});

app.engine('hbs', hbs.express4());

app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');

app.listen(process.env.PORT || 5000);
