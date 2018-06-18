import { put, call, takeEvery } from 'redux-saga/effects'
// import { genresUrl } from './api/constants'
import { getUrl } from './results/results.fetchMovies'
// import { updateGenresAction } from './results/results.actions'
import { searchSuccessAction, searchFailureAction } from './search/search.actions'
// import { UPDATE_GENRES } from './results/results.action.types'
import { SEARCH_REQUEST } from './search/search.action.types'

// function* getGenresSaga() {
//   try {
//     const response = yield call(fetch, genresUrl())
//     const results = response.json()
//     yield put(updateGenresAction(results))
//   } catch (error) {
//     console.error('Error getting genres: ', error)
//   }
// }

function* searchSaga(action) {
  try {
    console.log('search saga')
    const { searchType, filter, query, page } = action.payload
    const url = getUrl(searchType, filter, query, page)
    console.log('url', url)
    const response = yield call(fetch, url)
    const jsonResponse = yield response.json()
    console.log('response', jsonResponse)
    const { results, total_pages } = jsonResponse
    yield put(searchSuccessAction(results, page, total_pages))
  } catch (error) {
    console.error('Error getting movie results: ', error)
    yield put(searchFailureAction(error))
  }
}

// export function* watchGetGenres() {
//   yield takeEvery(UPDATE_GENRES, getGenresSaga)
// }

// export function* watchSearchAndUpdateResults() {
//   yield takeEvery(SEARCH_REQUEST, searchSaga)
// }

export default function* rootSaga() {
  yield takeEvery(SEARCH_REQUEST, searchSaga)
}