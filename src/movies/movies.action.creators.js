import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE, UPDATE_MOVIES_CACHE } from './movies.action.types'

export const getMoviesRequestAction = (searchType, filter, query, page = 1) => ({
  type: GET_MOVIES_REQUEST,
  payload: {
    searchType,
    filter,
    query,
    page
  }
})

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

export const updateMoviesCacheAction = (searchType, filter, query, results, page=1, total_pages=1) => {
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
return action}