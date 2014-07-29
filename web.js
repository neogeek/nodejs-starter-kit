/*globals process, __dirname */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.engine('hbs', require('express-hbs').express3());

app.set('view engine', 'hbs');
app.set('views', __dirname + '/src/views');

app.get('/', function (req, res) {

    res.render('index', {
        title: 'Node.js Starter Kit'
    });

});

app.listen(process.env.PORT || 5000);
