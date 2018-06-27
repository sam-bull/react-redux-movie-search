import { GET_GENRES_SUCCESS, GET_GENRES_FAILURE } from './genres.action.types'

const genresReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GENRES_SUCCESS: {
      const { genres } = action.payload
      return {
        ...state,
        genres
      }
    }
    case GET_GENRES_FAILURE: {
      const { error } = action.payload
      return {
        ...state,
        error
      }
    }
    default:
      return state
  }
}

export default genresReducer