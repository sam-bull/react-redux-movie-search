import { SET_SEARCH } from './header.action.types'

export const setSearchType = (searchType) => ({
  type: SET_SEARCH,
  payload: { searchType }
})