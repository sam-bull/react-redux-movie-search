import { SET_SEARCH } from './search.action.types'

// Reducers
const searchReducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case SET_SEARCH:
      return { page: 'results', searchType: payload.searchType, filter: payload.filter, query: payload.query }
    default:
      return state
  }
}

export default searchReducer