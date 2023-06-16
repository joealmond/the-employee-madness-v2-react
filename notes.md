### Task Description:

#9 - frontend routing and filtering, for board games (#8)
- Create a new page and new route on the frontend which lists all the games and the maxPlayer prop as a table (/games-list).
- Extend the functionality of the route, if the user appends a query parameter (maxPlayers) to url, the list shows only the games where the max player is less or equal than the maxPlayer query param. (e.g.: /games-list?maxPlayers=3 shows Chess and Go, (2 < 3)). How would you get a query/search param from an URL in the Component?
- Create a new route, /games-list/:id, which shows only the game’s data (name and maxPlayers) with a given mongoDB ID from the url. How would you get the path params from an URL into a Component? Initiate a fetch from the component to get the details of a game using the given ID.
- Create a button with an onClick handler on the /games-list page next to each game. If a user clicks on them, navigate programmatically (do not use a simple link) to the appropriate /games-list/:id 

### Tech concepts:

- FE filtering
- FE routing
- useParams
- useSearchParams
- Link

### Notes:

    My concept was to filter and link without fetching when ever possible