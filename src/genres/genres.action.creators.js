import { GET_GENRES_SUCCESS, GET_GENRES_FAILURE } from './genres.action.types'
import { genresUrl } from '../api/constants'

export const getGenresRequestAction = () => async (dispatch) => {
  console.log('api call - genres')
  try {
    // Get the genres
    const url = genresUrl()
    const response = await fetch(url)

    // Extract the data we want
    const jsonResponse = await response.json()
    const { genres } = jsonResponse

    // Update the store
    dispatch(getGenresSuccessAction(genres))

  } catch (error) {
    console.error('Error getting genres: ', error)
    dispatch(getGenresFailureAction(error))
  }
}

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