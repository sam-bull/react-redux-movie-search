import { GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE, UPDATE_MOVIES_CACHE, UPDATE_SEARCH_TERMS } from './movies.action.types'
import { getUrl } from './movies.util'

export const getMoviesRequestAction = (searchType, filter, query, page) => async (dispatch) => {
  dispatch(updateSearchTermsAction(searchType, filter, query));
  try {
    // Get the results
    const url = getUrl(searchType, filter, query, page)
    const response = await fetch(url)

    // Extract the data we want
    const jsonResponse = await response.json()
    const { total_pages } = jsonResponse
    const results = jsonResponse.results || jsonResponse.movie_results

    // Update the store
    dispatch(getMoviesSuccessAction(results));
    // Update the cache
    dispatch(updateMoviesCacheAction(searchType, filter, query, results, page, total_pages))
  } catch (error) {
    console.error('Error getting movie results: ', error);
    dispatch(getMoviesFailureAction)
  }
}

export const getMoviesSuccessAction = (results, page, total_pages) => ({
  type: GET_MOVIES_SUCCESS,
  payload: {
    results,
    page,
    total_pages
  }
})

export const getMoviesFailureAction = (error) => ({
  type: GET_MOVIES_FAILURE,
  payload: {
    error
  }
})

export const updateMoviesCacheAction = (searchType, filter, query, results, page = 1, total_pages = 1) => {
  console.log('updating cache')
  const action = ({
    type: UPDATE_MOVIES_CACHE,
    payload: {
      cache: {
        searchType,
        filter,
        query,
        results,
        page,
        total_pages
      }
    }
  })
  return action
}

export const updateSearchTermsAction = (searchType, filter, query, page = 1) => ({
  type: UPDATE_SEARCH_TERMS,
  payload: {
    searchType,
    filter,
    query,
    page
  }
})