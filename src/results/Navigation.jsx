import React, { Component } from 'react'
import { connect } from 'react-redux'
import './results.css'
import '../index.css'
import { getMoviesRequestAction, getMoviesSuccessAction } from '../movies/movies.action.creators'
import { cacheContains } from '../movies/movies.utils'

class Pagination extends Component {
  changePage = (newPage) => () => {
    const { searchType, filter, query, cache = [], dispatchSuccess, dispatchRequest } = this.props
    const cacheContents = cacheContains(cache, searchType, filter, query, newPage)
    console.log('cache is', cache, 'has', cacheContents)
    cacheContents.results
      ? dispatchSuccess(cacheContents)
      : dispatchRequest(searchType, filter, query, newPage)
  }

  render() {
    const { results, page, total_pages } = this.props
    const pagination = (
      <div>
        Showing page {page} of {total_pages} <br />
        <button disabled={page <= 1} onClick={this.changePage(page - 1)}>Previous page</button>
        <button disabled={page >= total_pages} onClick={this.changePage(page + 1)}>Next page</button>
      </div>
    )
    return (
      results && total_pages > 1 ? pagination : <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchType: state.movies.searchType,
    filter: state.movies.filter,
    query: state.movies.query,
    results: state.movies.results,
    page: state.movies.page,
    total_pages: state.movies.total_pages,
    cache: state.movies.cache
  }
  return props
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSuccess: ({ results, page, total_pages }) => dispatch(getMoviesSuccessAction(results, page, total_pages)),
  dispatchRequest: (searchType, filter, query, page) => dispatch(getMoviesRequestAction(searchType, filter, query, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)