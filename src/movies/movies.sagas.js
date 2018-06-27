import { put, call } from 'redux-saga/effects'
// import { getUrl } from './results/results.fetchMovies'
import { getMoviesSuccessAction, getMoviesFailureAction, updateMoviesCacheAction } from './movies.action.creators'
import { discoverUrl, findUrl, searchUrl } from '../api/constants'

const getUrl = (type, filter, query, page = 1) => {
  switch (type) {
    case 'search':
      return searchUrl(query.replace(' ', '+'), page)
    case 'discover':
      const params = Array.isArray(filter) ?
        filter.map(f => `${f}=${query[filter.indexOf(f)].replace(' ', '_')}`).join('&') :
        `${filter}=${query}`
      return discoverUrl(params, page)
    case 'find':
      return findUrl(query)
    default:
      throw Error(`Incorrect search type: ${type}. Type must be search, discover or find`)
  }
}

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