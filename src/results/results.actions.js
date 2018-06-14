import { UPDATE_GENRES, UPDATE_RESULTS } from './results.action.types'
import { genresUrl } from '../api/constants'

const updateGenresAction = (genres) => ({
  type: UPDATE_GENRES,
  payload: {
    genres
  }
})

export const updateResultsAction = (movies) => ({
  type: UPDATE_RESULTS,
  payload: {
    movies
  }
})

export const getGenresAction = () => async (dispatch) => {
  try {
    const response = await fetch(genresUrl())
    const results = await response.json();
    dispatch(updateGenresAction(results));
  } catch (error) {
    console.error('Error getting genres: ', error);
  }
}
