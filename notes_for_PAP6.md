### Task Description:

#6 - kittens
Extend the database so that it can store kittens for each employee. An employee document should have a “kittens” field, which is an array of kitten objects. Each kitten object has a “name” and a “weight”.

Add a button for each employee that leads to a new page at the route "/kittens/:employeeId"
List all kittens for the chosen employee on this page.
Add text inputs for all fields of a kitten (name, weight) and an "Add Kitten" button that adds a new kitten to the employee from the text input field values.


### Tech concepts:

- FE

### Notes:

#6 - kittens
Extend the database so that it can store kittens for each employee. An employee document should have a “kittens” field, which is an array of kitten objects. Each kitten object has a “name” and a “weight”.

// extend schema: kittens: [{name: String, weight: Number}]

Add a button for each employee that leads to a new page at the route "/kittens/:employeeId"

// button in the list with Link "/kittens/:employeeId"
 
List all kittens for the chosen employee on this page.
Add text inputs for all fields of a kitten (name, weight) and an "Add Kitten" button that adds a new kitten to the employee from the text input field values.

// add an update component for kittens
// get fetch employee
// patch fetch employee