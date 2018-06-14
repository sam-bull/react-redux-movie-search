import { discoverUrl, findUrl, searchUrl } from '../api/constants'

export const getUrl = (type, filter, query) => {
  switch (type) {
    case 'search':
      return searchUrl(query.replace(' ','+'))
    case 'discover':
      const params = Array.isArray(filter) ?
        filter.map(f => `${f}=${query[filter.indexOf(f)].replace(' ', '_')}`).join('&') :
        `${filter}=${query}`
      return discoverUrl(params)
    case 'find':
      return findUrl(query);
    default:
      throw Error(`Incorrect search type: ${type} must be search, discover or find`)
  }
}
