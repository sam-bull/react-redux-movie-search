import { SET_SEARCH } from './search.action.types'

export const setSearchAndParams = (searchType, filter, query) => ({
  type: SET_SEARCH,
  payload: {
    searchType,
    filter,
    query
  }
})