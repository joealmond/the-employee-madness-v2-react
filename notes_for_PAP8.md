### Task Description:

#8 - board games
Extend the database so that we can store Board Games. Each board game has a name and a max amount of players (name, maxPlayers)

Create the following board games in the database:
{
	"name": "Monopoly"
	"maxPlayers": 8
},
{
	"name": "Chess"
	"maxPlayers": 2
},
{
	"name": "Go"
	"maxPlayers": 2
},

Add a new page on the route "/games". On this page, the user should be able to create a new board game.

Modify the employee document so that each employee can have a favourite board game. Do this by adding a dropdown input to the employee modification page. The user should be able to pick a board game from this dropdown.

In the employee list table, add a new column that displays the maxPlayers of the favourite board game of each employee.


### Tech concepts:

- modify populate.js
- FE routing
- modify schema with referencing 
- create dropdown menu

### Notes:

#8 - board games

Extend the database so that we can store Board Games. Each board game has a name and a max amount of players (name, maxPlayers)

// new db
// games {name: String, maxPlayers: Number}

Create the following board games in the database:
{
	"name": "Monopoly"
	"maxPlayers": 8
},
{
	"name": "Chess"
	"maxPlayers": 2
},
{
	"name": "Go"
	"maxPlayers": 2
},

// use populate.js


Add a new page on the route "/games". On this page, the user should be able to create a new board game.

// React router - in the root
// backend create route /api/games

Modify the employee document so that each employee can have a favourite board game. Do this by adding a dropdown input to the employee modification page. The user should be able to pick a board game from this dropdown.

// modify employee update page
// modify backend
// fetch games
// get endpoint for games
// modify employee patch endpoint
// add a relation to the game database

In the employee list table, add a new column that displays the maxPlayers of the favourite board game of each employee

// display fav game on employee table
