import { GET_GENRES_REQUEST, GET_GENRES_SUCCESS, GET_GENRES_FAILURE } from './genres.action.types'

export const getGenresRequestAction = () => ({
  type: GET_GENRES_REQUEST
})

export const getGenresSuccessAction = (genres) => ({
  type: GET_GENRES_SUCCESS,
  payload: {
    genres
  }
})

export const getGenresFailureAction = (error) => ({
  type: GET_GENRES_FAILURE,
  payload: {
    error
  }
})