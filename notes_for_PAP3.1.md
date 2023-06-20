### Task Description:

#3.1
Create a new schema for divisions. The division has a name, a boss, and a budget and a location. The location has a city and a country. The boss field has to point to an employee.

We have to update the employee schema with a new division field. The division field in the employee has to point to a division. So one employee can work in one division at a time.

In the backend, you should add some new api to create, read, update and delete divisions.

In the frontend, you should add new pages for our users to create, read, update and delete divisions similar to employees. In the division's form, we need a selector where we can select which employee is the boss of that division.

Create a new page, where we can assign a selected employee to a division. You should use frontend routing for this, for example you can create a new page with /employees/:id/assign.

Update:
On the page where you read the divisions, you should add a link to a new page: /division/:id. In this page, you should show a division informations like name and location with a list of employees working at the division.


### Tech concepts:

- FE 

### Notes:

#3.1
Create a new schema for divisions. The division has a name, a boss, and a budget and a location. The location has a city and a country. The boss field has to point to an employee.

// new schema : 
{name: String, 
boss: {
    type: (employeeId),
    ref: 'Employee'
}, 
budget: Number, 
location: {
    city: String,
    country: String
    }
}

We have to update the employee schema with a new division field. The division field in the employee has to point to a division. So one employee can work in one division at a time.

// update employee schema:
dicision: {
    type: 'divisionId'
    ref: 'Division'
}

In the backend, you should add some new api to create, read, update and delete divisions.

// add CRUD endpoints to the backend

In the frontend, you should add new pages for our users to create, read, update and delete divisions similar to employees. In the division's form, we need a selector where we can select which employee is the boss of that division.

// add FE for CRUD operation
// division form: select boss from employees

Create a new page, where we can assign a selected employee to a division. You should use frontend routing for this, for example you can create a new page with /employees/:id/assign.

// create FE route: /employees/:id/assign
(not boss)

Update:
On the page where you read the divisions, you should add a link to a new page: /division/:id. In this page, you should show a division informations like name and location with a list of employees working at the division.

// create FE route /division/:id with new page dsplaying:
// location
// list of employees
(not boss)