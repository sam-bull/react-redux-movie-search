# react-redux-movie-search
App to search for films with TMDb API using React and Redux.

Created using create-react-app, hosted at http://redux-movie-search.surge.sh/ by surge.

# Features
 - 3 search modes: search, discover, find
 - Use search to find a list of movies based on a text query
 - Use discover to find a list of movies that belong to one or more filters, with an option to sort results
 - Use find to get one movie by its IMDB ID
 - Results are limited to 20 per page; change page using the navigation buttons above and below the search results
 - Each result shows the movie poster, title, release year, genres and the TMDb rating out of 10


# ToDo
 - [x] Add some basic styling
 - [x] Add "You searched for {search terms}" above the results
 - [x] Try out Redux middleware: thunk
 - [x] Try out Redux middleware: saga
 - [ ] Try out Redux middleware: observable
 - [ ] Add the ability to add more filters to 'discover' search
 - [ ] Add a 'sort by' filter in 'discover' search
 - [ ] Automatically search as the user types in 'search' search (using debounce)
 - [x] Host on surge
 - [ ] Click on a result to go to an information page about that movie
 - [ ] Add options to search TV shows and actors