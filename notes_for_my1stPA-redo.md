### Task Description:

Update the employee documents with a new array where we can store the work log for an employee. The worklog is based on two fields:

    Working hours (number)
    Label for work (string) - example: acting, resting, filling the worklog

Extend the populate.js to create an empty array by default for every employee.

Add a button to the employee list page, that leads to a new page where we can add work log entries for a selected employee.
Create a page for listing the work log entries for a selected employee. (Its fine if you put this into the same page where we can create the worklog items)

### Tech concepts:

- 

### Notes:

Update the employee documents with a new array where we can store the work log for an employee. The worklog is based on two fields:

    Working hours (number)
    Label for work (string) - example: acting, resting, filling the worklog

// modify schema

Extend the populate.js to create an empty array by default for every employee.

// modify populate js

Add a button to the employee list page, that leads to a new page where we can add work log entries for a selected employee.
Create a page for listing the work log entries for a selected employee. (Its fine if you put this into the same page where we can create the worklog items)

// add a button to table rows with Link
// add a new frontend route /add-worklog/:id

// add a new create worklog page component
// add a form to this component
// make the inputs controlled with state
// add post request what starts on submit

//make a post or patch endpoint to manage add on server side


// add a new page for listing the logs