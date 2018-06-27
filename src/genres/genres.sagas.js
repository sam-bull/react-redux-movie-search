import { put, call } from 'redux-saga/effects'
import { genresUrl } from '../api/constants'
import { getGenresSuccessAction, getGenresFailureAction } from './genres.action.creators'

function* genresSaga() {
  console.log('api call - genres')
  try {
    // Get the genres
    const url = genresUrl()
    const response = yield call(fetch, url)

    // Extract the data we want
    const jsonResponse = yield response.json()
    const { genres } = jsonResponse

    // Update the store
    yield put(getGenresSuccessAction(genres))

  } catch (error) {
    console.error('Error getting genres: ', error)
    yield put(getGenresFailureAction(error))
  }
}

export default genresSaga