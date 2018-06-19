import { discoverUrl, findUrl, searchUrl } from '../api/constants'
import { searchSuccessAction, searchRequestAction } from '../search/search.actions'

export const getUrl = (type, filter, query, page = 1) => {
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
      throw Error(`Incorrect search type: ${type} must be search, discover or find`)
  }
}

export const searchWithCache = (dispatch, searchType, filter, query, page, cache = {}) => {
  const cacheKey = searchType + filter + query + page
  const cacheContents = cache[cacheKey]
  console.log('cache has', cacheKey, ':', cacheContents)
  cacheContents
    ? dispatch(searchSuccessAction(...cacheContents))
    : dispatch(searchRequestAction(searchType, filter, query))
}
