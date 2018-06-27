import { takeEvery } from 'redux-saga/effects'

import { GET_MOVIES_REQUEST } from './movies/movies.action.types'
import { GET_GENRES_REQUEST } from './genres/genres.action.types'

import moviesSaga from './movies/movies.sagas'
import genresSaga from './genres/genres.sagas'

export default function* rootSaga() {
  yield [
    takeEvery(GET_MOVIES_REQUEST, moviesSaga),
    takeEvery(GET_GENRES_REQUEST, genresSaga)
  ]
}