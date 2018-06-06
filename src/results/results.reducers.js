import { UPDATE_RESULTS } from './results.action.types'

const resultsReducer = (state = {}, action) => {
  const payload = action.payload
  switch (action.type) {
    case UPDATE_RESULTS:
      return { ...state, results: payload.movies }
    default:
      return state
  }
}

export default resultsReducer