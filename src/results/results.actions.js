import { UPDATE_RESULTS } from './results.action.types'

export const updateResults = (movies) => ({
  type: UPDATE_RESULTS,
  payload: {
    movies
  }
})