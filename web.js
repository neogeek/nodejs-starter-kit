/*globals process, __dirname */

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.listen(process.env.PORT || 5000);
