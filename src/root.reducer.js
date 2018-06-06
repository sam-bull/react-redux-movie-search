// import { combineReducers } from 'redux'
// import resultsReducer from './results/results.reducers';
// import searchReducer from './search/search.reducers';
// import menuReducer from './menu/menu.reducer';

const reducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'ONE':
      console.log(payload)
      return { ...state, number: payload }
    case 'TWO':
      console.log(payload)
      const newNumber = payload + 10
      return { ...state, number: newNumber }
    case 'GOTO':
      console.log('menuReducer updating page in state from', state.page, 'to', payload.page)
      return { ...state, page: payload.page }
    case 'SET_SEARCH':
      return { page: 'results', searchType: payload.searchType, filter: payload.filter, query: payload.query }
    case 'UPDATE_RESULTS':
      return { ...state, results: payload.movies }
    default:
      return state
  }
}

export default reducer//combineReducers({ menuReducer, searchReducer, resultsReducer })