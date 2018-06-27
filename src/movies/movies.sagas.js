import { put, call } from 'redux-saga/effects'
import { getUrl } from './movies.utils'
import { getMoviesSuccessAction, getMoviesFailureAction, updateMoviesCacheAction } from './movies.action.creators'

function* moviesSaga(action) {
  console.log('api call - results')
  try {
    const { searchType, filter, query, page } = action.payload

    // Get the results
    const url = getUrl(searchType, filter, query, page)
    const response = yield call(fetch, url)

    // Extract the data we want
    const jsonResponse = yield response.json()
    const { total_pages } = jsonResponse
    const results = jsonResponse.results || jsonResponse.movie_results

    // Update the store
    yield put(getMoviesSuccessAction(results, page, total_pages))
    console.log('now for cache')
    console.log(searchType, filter, query, 'results', page, total_pages)
    // Update the cache
    yield put(updateMoviesCacheAction(searchType, filter, query, results, page, total_pages))
    console.log('done getting and updating')

  } catch (error) {
    console.error('Error getting movie results and updating cache: ', error)
    yield put(getMoviesFailureAction(error))
  }
}

export default moviesSaga