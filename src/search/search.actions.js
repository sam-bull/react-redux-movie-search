import { SET_TYPE, SEARCH } from './search.action.types'

export const setSearchTypeAction = (searchType) => ({
  type: SET_TYPE,
  payload: { searchType }
})

export const searchAction = (filter, query) => ({
  type: SEARCH,
  payload: {
    filter,
    query
  }
})