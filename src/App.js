import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchType } from './header/header.actions'
import { setSearchParams } from './search/search.actions'
import { getGenres, updateResults } from './results/results.actions'
import PropTypes from 'prop-types'
import Header from './header/header.component'
import SearchPage from './search/search.search.component'
import DiscoverPage from './search/search.discover.component'
import FindPage from './search/search.find.component'
import ResultsList from './results/results.container'
import './index.css'

class App extends Component {
  static propTypes = {
    searchType: PropTypes.string,
    query: PropTypes.string
  }

  static defaultProps = {
    searchType: 'search'
  }

  render() {
    const { searchType, setSearchType, setSearchParams, query } = this.props
    const { filter, updateResults, getGenres, results, genres} = this.props
    const SearchType = (searchType === 'discover')
      ? DiscoverPage
      : (searchType === 'find')
        ? FindPage
        : SearchPage
    return (
      <div className='app'>
        <Header setSearchType={setSearchType} />
        <SearchType setSearchParams={setSearchParams} />
        {query ? <ResultsList searchType={searchType} filter={filter} query={query} updateResults={updateResults} getGenres={getGenres} results={results} genres={genres} /> : <div></div>}
      </div>
    )
  }
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  setSearchType: (searchType) => () => dispatch(setSearchType(searchType)),
  setSearchParams: (filter, query) => dispatch(setSearchParams(filter, query)),
  getGenres: (genres) => dispatch(getGenres(genres)),
  updateResults: (movies) => dispatch(updateResults(movies))
})

// const mapDispatchToProps = (dispatch) => {
//   const { 
//     goToPage, 
//     setSearchAndParams 
//   } = action
//   const props = {
//     goToPage,
//     setSearchAndParams
//   }
//   return props
// }

// Map Redux state to component props
const mapStateToProps = (state) => {
  const props = {
    searchType: state.searchType,
    filter: state.filter,
    query: state.query,
    genres: state.genres,
    results: state.results
  }
  return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)