import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goToPage } from './menu/menu.actions'
import { setSearchAndParams } from './search/search.actions'
import { updateResults } from './results/results.actions'
import PropTypes from 'prop-types'
import MainMenu from './menu/menu.component'
import SearchPage from './search/search.search.component'
import DiscoverPage from './search/search.discover.component'
import FindPage from './search/search.find.component'
import ResultsList from './results/results.container'

class App extends Component {
  static propTypes = {
    page: PropTypes.string.isRequired,
    searchType: PropTypes.string,
    filter: PropTypes.string,
    query: PropTypes.string
  }

  static defaultProps = {
    page: 'main'
  }

  render() {
    const { page, goToPage, setSearchAndParams } = this.props
    const Page = (page === 'discover')
      ? DiscoverPage
      : (page === 'find')
        ? FindPage
        : SearchPage
    return (
      <div>
        <h1>Search</h1>
        <MainMenu goToPage={goToPage} />
        <Page setSearchAndParams={setSearchAndParams} />
        {page === 'results' ? <ResultsList {...this.props} /> : <div></div>}
      </div>
    )
    // const { page, goToPage, setSearchAndParams } = this.props
    // console.log(page)
    // return (
    //   <div>
    //     <h1 className="header">Movie Search</h1>
    //     <Page goToPage={goToPage} setSearchAndParams={setSearchAndParams} updateResults={updateResults} />
    //   </div>
    // )
  }
}

// Map Redux actions to component props
const mapDispatchToProps = (dispatch) => ({
  goToPage: (page) => () => {
    const action = goToPage(page)
    console.log('action', action)
    dispatch(action)
  },
  setSearchAndParams: (searchType, filter, query) => dispatch(setSearchAndParams(searchType, filter, query)),
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
    page: state.page,
    searchType: state.searchType,
    filter: state.filter,
    query: state.query,
    results: state.results
  }
  return props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)