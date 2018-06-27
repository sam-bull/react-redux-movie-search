import { GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE, UPDATE_MOVIES_CACHE, UPDATE_SEARCH_TERMS } from './movies.action.types'

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      const { results, page, total_pages } = action.payload
      return {
        ...state,
        results,
        page,
        total_pages
      }
    }
    case GET_MOVIES_FAILURE: {
      const { error } = action.payload
      return {
        ...state,
        error
      }
    }
    case UPDATE_MOVIES_CACHE: {
      console.log('updating...')
      const { cache } = action.payload
      console.log('got action')
      const currentCache = state.cache || []
      const newState = {
        ...state,
        cache: [
          ...currentCache,
          cache
        ]
      }
      console.log('new state', newState)
      return newState
    }
    case UPDATE_SEARCH_TERMS: {
      const { searchType, filter, query, page } = action.payload
      return {
        ...state,
        searchType,
        filter,
        query,
        page
      }
    }
    default:
      return state
  }
}

export default moviesReducer