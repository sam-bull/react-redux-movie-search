import { combineReducers } from 'redux'
import genresReducer from './genres/genres.reducer'
import moviesReducer from './movies/movies.reducer'

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer
})