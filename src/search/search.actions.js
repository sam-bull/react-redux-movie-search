import { SET_PARAMS } from './search.action.types'

export const setSearchParams = (filter, query) => ({
  type: SET_PARAMS,
  payload: {
    filter,
    query
  }
})