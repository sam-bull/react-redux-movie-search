import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from './search.action.types'

export const searchRequestAction = (searchType, filter, query, page=1) => ({
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