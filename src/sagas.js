import { takeEvery } from 'redux-saga/effects'

import { GET_MOVIES_REQUEST } from './movies/movies.action.types'
import { GET_GENRES_REQUEST } from './genres/genres.action.types'

import moviesSaga from './movies/movies.sagas'
import genresSaga from './genres/genres.sagas'

// function* getGenresSaga() {
//   console.log('api call - genres')
//   try {
//     const response = yield call(fetch, genresUrl())
//     const results = yield response.json()
//     yield put(updateGenresAction(results))
//   } catch (error) {
//     console.error('Error getting genres: ', error)
//   }
// }

// function* searchSaga(action) {
//   console.log('api call - results')
//   try {
//     const { searchType, filter, query, page } = action.payload
//     const url = getUrl(searchType, filter, query, page)
//     const response = yield call(fetch, url)
//     const jsonResponse = yield response.json()
//     const { results, total_pages } = jsonResponse
//     yield put(searchSuccessAction(results, page, total_pages))
//     yield put(updateCacheAction(searchType, filter, query, results, page, total_pages))
//   } catch (error) {
//     console.error('Error getting movie results: ', error)
//     yield put(searchFailureAction(error))
//   }
// }


export default function* rootSaga() {
  yield [
    takeEvery(GET_MOVIES_REQUEST, moviesSaga),
    takeEvery(GET_GENRES_REQUEST, genresSaga)
  ]
}