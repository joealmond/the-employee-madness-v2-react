### Task Description:

#10 - frontend routing for the tools (#5)
- Replace the text input field with a name search/query parameter in the url. 

Show only those tools, which name contains the name filter. For example /tools?name=pe should show the Pencil and Pen tools. The search can be case sensitive or insensitive.

- Add a new page /tools/:id, where one tool and its details (name, weight) is shown only. Initiate a new fetch from the page based on a given path param in the url.


### Tech concepts:

- FE routing
- FE useParams, useSearchParams
- FE filter
- add backaned create and filter endpoints


### Notes:

#10 - frontend routing for the tools (#5)
- Replace the text input field with a name search/query parameter in the url. 

// add useSearchParams with 'name'
// use searchFunction already made

Show only those tools, which name contains the name filter. For example /tools?name=pe should show the Pencil and Pen tools. The search can be case sensitive or insensitive.

// add filter based on search query

- Add a new page /tools/:id, where one tool and its details (name, weight) is shown only. Initiate a new fetch from the page based on a given path param in the url.

// route searcParam :id to display detail of the selected tool
// create new page component for the display
