import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchPage from './search.search.component'
import DiscoverPage from './search.discover.component'
import FindPage from './search.find.component'
import './search.css'
import '../index.css'
import { searchSuccessAction, searchRequestAction } from './search.actions'
// import { searchWithCache } from '../results/results.fetchMovies'

class SearchSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchType: 'search'
    }
  }

  setSearchType = (searchType) => () => {
    this.setState(oldState => ({
      searchType
    }))
  }

  search = (searchType, filter, query) => {
    const { cache = {}, dispatchSuccess, dispatchRequest } = this.props
    const cacheKey = searchType + filter + query + '1'
    const cacheContents = cache[cacheKey]
    console.log('cache has', cacheKey, ':', cacheContents)
    cacheContents
      ? dispatchSuccess(cacheContents)
      : dispatchRequest(searchType, filter, query)
  }

  render() {
    const { searchType } = this.state
    const SearchType = (searchType === 'discover')
      ? DiscoverPage
      : (searchType === 'find')
        ? FindPage
        : SearchPage
    return (
      <div className='app--container'>
        <button className='search--button' onClick={this.setSearchType('search')}>Search</button>
        <button className='search--button' onClick={this.setSearchType('discover')}>Discover</button>
        <button className='search--button' onClick={this.setSearchType('find')}>Find</button>
        <SearchType search={this.search} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    cache: state.cache
  }
  return props
}
const mapDispatchToProps = (dispatch) => ({
  dispatchSuccess: ({ results, page, total_pages }) => dispatch(searchSuccessAction(results, page, total_pages)),
  dispatchRequest: (searchType, filter, query) => dispatch(searchRequestAction(searchType, filter, query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection)