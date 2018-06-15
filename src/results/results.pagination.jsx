import React, { Component } from 'react'
import { connect } from 'react-redux'
import './results.css'
import '../index.css'
import { searchAndUpdateResultsAction } from '../search/search.actions'

class Pagination extends Component {
  render() {
    const { results, updateResults, searchType, filter, query } = this.props
    const { page, total_pages } = results || {page: 1, total_pages: 1 }
    const pagination = (
      <div>
        <button disabled={page === 1} onClick={updateResults(searchType, filter, query, page-1)}>Previous page</button>
        <div>Showing page {page} of {total_pages}</div>
        <button disabled={page === total_pages} onClick={updateResults(searchType, filter, query, page+1)}>Next page</button>
      </div>
      )
    return (
      results ? pagination : <div></div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchType: state.search.searchType,
    filter: state.search.filter,
    query: state.search.query,
    results: state.results.results
  }
  return props
}

const mapDispatchToProps = (dispatch) => ({
  updateResults: (searchType, filter, query, page) => () => dispatch(searchAndUpdateResultsAction(searchType, filter, query, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)