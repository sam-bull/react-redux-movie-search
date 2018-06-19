import React, { Component } from 'react'
import { connect } from 'react-redux'
import './results.css'
import '../index.css'
import { searchSuccessAction, searchRequestAction } from '../search/search.actions'
// import { searchRequestAction } from '../search/search.actions'
// import { searchWithCache } from '../results/results.fetchMovies'

class Pagination extends Component {
  changePage = (newPage) => () => {
    const { searchType, filter, query, cache = {}, dispatchSuccess, dispatchRequest } = this.props
    const cacheKey = searchType + filter + query + newPage
    const cacheContents = cache[cacheKey]
    console.log('cache has', cacheKey, ':', cacheContents)
    cacheContents
      ? dispatchSuccess(cacheContents)
      : dispatchRequest(searchType, filter, query)
  }

  render() {
    const { results, page, total_pages } = this.props
    // const { page, total_pages } = results || {page: 1, total_pages: 1 }
    const pagination = (
      <div>
        Showing page {page} of {total_pages} <br />
        <button disabled={page <= 1} onClick={this.changePage(page-1)}>Previous page</button>
        <button disabled={page >= total_pages} onClick={this.changePage(page+1)}>Next page</button>
      </div>
    )
    return (
      results ? pagination : <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchType: state.searchType,
    filter: state.filter,
    query: state.query,
    results: state.results,
    page: state.page,
    total_pages: state.total_pages,
    cache: state.cache
  }
  return props
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSuccess: ({ results, page, total_pages }) => dispatch(searchSuccessAction(results, page, total_pages)),
  dispatchRequest: (searchType, filter, query) => dispatch(searchRequestAction(searchType, filter, query))
})
// const mapDispatchToProps = (dispatch) => ({
//   updateResults: (searchType, filter, query, page) => () => dispatch(searchRequestAction(searchType, filter, query, page))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)