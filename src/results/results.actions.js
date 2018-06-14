import { UPDATE_GENRES, UPDATE_RESULTS } from './results.action.types'

export const updateGenresAction = (genres) => ({
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
