import { UPDATE_GENRES, UPDATE_RESULTS } from './results/results.action.types'
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_CACHE } from './search/search.action.types'

const reducer = (state = {}, action) => {
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
    case UPDATE_GENRES:
      return {
        ...state,
        genres: action.payload.genres
      }
    case UPDATE_RESULTS:
      return {
        ...state,
        results: action.payload.movies
      }
    case UPDATE_CACHE: {
      const { searchType, filter, query, results, page, total_pages } = action.payload
      const newEntry = {}
      newEntry[searchType+filter+query+page] = { results, page, total_pages }
      return {
        ...state,
        cache: {
          ...state.cache,
          ...newEntry
        }
      }
    }
    default:
      return state
  }
}

export default reducer