import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { setSearchType } from './header/header.actions'
// import { setSearchParams } from './search/search.actions'
// import { getGenres, updateResults } from './results/results.actions'
// import PropTypes from 'prop-types'
import Header from './header/header.component'
import SearchSection from './search/search.section'
// import SearchPage from './search/search.search.component'
// import DiscoverPage from './search/search.discover.component'
// import FindPage from './search/search.find.component'
import ResultsList from './results/results.container'
import './index.css'

class App extends Component {
  // static propTypes = {
  //   searchType: PropTypes.string
  // }

  // static defaultProps = {
  //   searchType: 'search'
  // }

  render() {
    return (
      <div>
        <Header />
        <div className='app'>
          <SearchSection />
          <ResultsList/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    searchType: state.searchType,
    filter: state.filter,
    query: state.query,
    results: state.results
  }
  return props
}

export default connect(
  mapStateToProps
)(App)