import { combineReducers } from 'redux'
import resultsReducer from './results/results.reducers'
import searchReducer from './search/search.reducers'

export default combineReducers({ 
  search: searchReducer,
  results: resultsReducer
})