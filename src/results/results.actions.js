import { GET_GENRES, UPDATE_RESULTS } from './results.action.types'

export const getGenres = (genres) => ({
  type: GET_GENRES,
  payload: genres
})

export const updateResults = (movies) => ({
  type: UPDATE_RESULTS,
  payload: {
    movies
  }
})