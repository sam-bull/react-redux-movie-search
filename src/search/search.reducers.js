import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './search.action.types'

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      const { searchType, filter, query, page } = action.payload
      return {
        ...state,
        searchType,
        filter,
        query,
        page
      }
    }
    case SEARCH_SUCCESS: {
      console.log('search success')
      const { results, page, total_pages } = action.payload
      return {
        ...state,
        results,
        page,
        total_pages
      }
    }
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default searchReducer