import { SET_TYPE, SEARCH } from './search.action.types'

// Reducers
const searchReducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        searchType: payload.searchType
      }
    case SEARCH:
      return {
        ...state,
        filter: payload.filter,
        query: payload.query,
        results: undefined
      }
    default:
      return state
  }
}

export default searchReducer