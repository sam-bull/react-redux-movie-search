import { SET_TYPE, SEARCH } from './search.action.types'
import { getUrl } from '../results/results.fetchMovies'
import { updateResultsAction } from '../results/results.actions'

export const setSearchTypeAction = (searchType) => ({
  type: SET_TYPE,
  payload: { searchType }
})

export const searchAction = (searchType, filter, query) => async dispatch => {  
  try {
    const url = getUrl(searchType, filter, query)
    const response = await fetch(url)
    const results = await response.json();
    dispatch({ type: SEARCH, payload: {filter, query} });
    dispatch(updateResultsAction(results));
  } catch (error) {
    console.error('Error getting movie results: ', error);
    dispatch({ type: SEARCH, payload: {filter, query} });
  }
}