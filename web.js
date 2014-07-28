/*globals process, __dirname */

var express = require('express');
var server = express();

server.use(express.static(__dirname + '/static'));

server.listen(process.env.PORT || 5000);
