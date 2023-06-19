### Task Description:

#11 - Employee Address
Each employee has an address. It should be stored in the employee schema’s address field.
The address is an object with the following props: country (string), city (string), street (string), zip code (number).
Create a frontend route /employee/:id/address, where we can show the employee name and his/her address with all fields.
Create an Edit button in the page, if the user clicks on it, show a form where each address field can be edited. The form has also a Save button.
If the user clicks on the save, the updated address is saved to the database, and a user is navigated to the Employee List.
Add a new “City” column to the Employee table from the address field. 

### Tech concepts:

- FE 

### Notes:

#11 - Employee Address
Each employee has an address. It should be stored in the employee schema’s address field.
The address is an object with the following props: country (string), city (string), street (string), zip code (number).

// modify schema

Create a frontend route /employee/:id/address, where we can show the employee name and his/her address with all fields.
Create an Edit button in the page, if the user clicks on it, show a form where each address field can be edited. The form has also a Save button.

// create FE route pointing to
// an update page

If the user clicks on the save, the updated address is saved to the database, and a user is navigated to the Employee List.

// add patch request on save
// add navigation on save

Add a new “City” column to the Employee table from the address field. 

// as is