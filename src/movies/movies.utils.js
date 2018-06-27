import { discoverUrl, findUrl, searchUrl } from '../api/constants'

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
      throw Error(`Incorrect search type: ${type}. Type must be search, discover or find`)
  }
}

export const cacheContains = (cache, searchType, filter, query, page = 1) => {
  const { results = 0, total_pages = 0 } = cache.filter(cacheContents =>
    cacheContents.searchType === searchType &&
    cacheContents.filter === filter &&
    cacheContents.query === query &&
    cacheContents.page === page)[0] || { results: 0, total_pages: 0 }
  return { results, page, total_pages }
}