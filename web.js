/*globals process, __dirname */

var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');
var enrouten = require('express-enrouten');

var hbs = require('express-hbs');
var hbs_helpers = require('./static/templates/helpers.js')(hbs);

app.use(express.static(__dirname + '/static'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {

    res.locals = {
        layout: 'template'
    };

    next();

});

app.use(enrouten({ directory: 'src/routes' }));

app.use(function (req, res, next) {

    res.status(404).render('error');

});

app.engine('hbs', hbs.express3());

app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');

app.listen(process.env.PORT || 5000);
