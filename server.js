var express = require('express');
var morgan = require('morgan');
var employeeRouter = require('./index.js');
var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/employee', employeeRouter);

app.listen(port, hostname, function(){
	console.log(`Server running at http://${hostname}:${port}`);
});