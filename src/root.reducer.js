import { combineReducers } from 'redux'
import resultsReducer from './results/results.reducers'
import searchReducer from './search/search.reducers'
// import menuReducer from './menu/menu.reducer';

// const reducer = (state = {}, action) => {
//   const payload = action.payload
//   switch (action.type) {
//     case 'SET_SEARCH':
//       return { ...state, searchType: payload.searchType }
//     case 'SET_PARAMS':
//       return { ...state, filter: payload.filter, query: payload.query }
//     case 'GET_GENRES':
//       return { ...state, genres: payload }
//     case 'UPDATE_RESULTS':
//       return { ...state, results: payload.movies }
//     default:
//       return state
//   }
// }

export default combineReducers({ 
  search: searchReducer,
  results: resultsReducer
})