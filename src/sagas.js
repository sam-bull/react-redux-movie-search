import { put, call, takeEvery } from 'redux-saga/effects'
import { genresUrl } from './api/constants'
import { getUrl } from './results/results.fetchMovies'
import { updateGenresAction } from './results/results.actions'
import { searchSuccessAction, searchFailureAction, updateCacheAction } from './search/search.actions'
import { GET_GENRES } from './results/results.action.types'
import { SEARCH_REQUEST } from './search/search.action.types'

function* getGenresSaga() {
  console.log('api call - genres')
  try {
    const response = yield call(fetch, genresUrl())
    const results = yield response.json()
    yield put(updateGenresAction(results))
  } catch (error) {
    console.error('Error getting genres: ', error)
  }
}

function* searchSaga(action) {
  console.log('api call - results')
  try {
    const { searchType, filter, query, page } = action.payload
    const url = getUrl(searchType, filter, query, page)
    const response = yield call(fetch, url)
    const jsonResponse = yield response.json()
    const { results, total_pages } = jsonResponse
    yield put(searchSuccessAction(results, page, total_pages))
    yield put(updateCacheAction(searchType, filter, query, results, page, total_pages))
  } catch (error) {
    console.error('Error getting movie results: ', error)
    yield put(searchFailureAction(error))
  }
}


export default function* rootSaga() {
  yield [
    takeEvery(SEARCH_REQUEST, searchSaga),
    takeEvery(GET_GENRES, getGenresSaga)
  ]
}