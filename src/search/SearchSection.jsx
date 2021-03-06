import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchPage from './Search'
import DiscoverPage from './Discover'
import FindPage from './Find'
import './search.css'
import '../index.css'
import { getMoviesRequestAction, getMoviesSuccessAction } from '../movies/movies.action.creators'
import { cacheContains } from '../movies/movies.utils'

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
    const { cache = [], dispatchSuccess, dispatchRequest } = this.props
    const cacheContents = cacheContains(cache, searchType, filter, query)
    console.log('cache is', cache, 'has', cacheContents)
    cacheContents.results
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
    cache: state.movies.cache
  }
  return props
}
const mapDispatchToProps = (dispatch) => ({
  dispatchSuccess: ({ results, page, total_pages }) => dispatch(getMoviesSuccessAction(results, page, total_pages)),
  dispatchRequest: (searchType, filter, query) => dispatch(getMoviesRequestAction(searchType, filter, query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSection)