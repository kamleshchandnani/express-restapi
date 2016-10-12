# express-restapi

Steps to run the application

`npm install`

`npm start`

You can hit the below URL using any REST client

`http://localhost:3000/employee`

The application uses following package

`body-parser` For parsing the parameters in request body

`morgan` For logging purpose

The API's demonstrates 4 different request methods GET, POST, PUT, DELETE

1. GET: Get all the employee info
2. POST: Pass the body param in following format
   { "name":"John", "age":"30" }
3. PUT: Update all the employee information
4. Delete: Delete all the employee information

The API also supports query param

`http://localhost:3000/employee/{employeeId}`

All the above methods works the same way


