import { SET_TYPE, SEARCH } from './search.action.types'
import { getUrl } from '../results/results.fetchMovies'
import { updateResultsAction } from '../results/results.actions'

export const setSearchTypeAction = (searchType) => ({
  type: SET_TYPE,
  payload: { searchType }
})

const searchAction = (filter, query) => ({
  type: SEARCH,
  payload: {
    filter,
    query
  }
})

export const searchAndUpdateResultsAction = (searchType, filter, query) => async (dispatch) => {  
  dispatch(searchAction(filter, query));
  try {
    const url = getUrl(searchType, filter, query)
    console.log(url)
    const response = await fetch(url)
    const results = await response.json();
    dispatch(updateResultsAction(results));
  } catch (error) {
    console.error('Error getting movie results: ', error);
  }
}