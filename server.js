var React = require('react');
var ReactDomServer = require('react-dom/server');
var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);
server.listen(3000);
app.use(express.static(__dirname));
