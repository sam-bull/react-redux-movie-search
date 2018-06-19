import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_CACHE } from './search.action.types'

export const searchRequestAction = (searchType, filter, query, page = 1) => ({
  type: SEARCH_REQUEST,
  payload: {
    searchType,
    filter,
    query,
    page
  }
})

export const searchSuccessAction = (results, page, total_pages) => ({
  type: SEARCH_SUCCESS,
  payload: {
    results,
    page,
    total_pages
  }
})

export const searchFailureAction = (error) => ({
  type: SEARCH_FAILURE,
  payload: {
    error
  }
})

export const updateCacheAction = (searchType, filter, query, results, page, total_pages) => ({
  type: UPDATE_CACHE,
  payload: {
    searchType,
    filter,
    query,
    results,
    page,
    total_pages
  }
})