var express = require('express');
var bodyParser = require('body-parser');
module.exports = {};
var employeeRouter = express.Router();
employeeRouter.use(bodyParser.json());

//without using any parameter
employeeRouter.route('/')
.all(function(req, res, next) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	next();
})
.get(function(req, res, next) {
	res.end('Getting all the employee data');
}) 
.post(function(req, res, next) {
	res.end('Saving data of employee with the name ' + req.body.name + ' and age' + req.body.age);
})
.put(function(req, res, next) {
	res.end('Updating all employees data');
})
.delete(function(req, res, next) {
	res.end('Deleting all employees data');
});

//Using the parameter
employeeRouter.route('/:employeeId')
.all(function(req, res, next) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	next();
})
.get(function(req, res, next) {
	res.end('Getting employee data with employee id: '+ req.params.employeeId);
}) 
.post(function(req, res, next) {
	res.end('Saving data of employee with the Id ' + req.params.employeeId);
})
.put(function(req, res, next) {
	res.end('Updating data of employee with the Id ' + req.params.employeeId);
})
.delete(function(req, res, next) {
	res.end('Deleting data of employee with the Id ' + req.params.employeeId);
});

//configure router to serve requests on /employee
module.exports = employeeRouter;